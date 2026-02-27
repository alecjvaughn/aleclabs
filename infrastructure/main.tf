variable "project_id" {
  default = "aleclabs-website"
}

variable "region" {
  default = "us-central1"
}

# Enable Artifact Registry API
resource "google_project_service" "artifact_registry" {
  service            = "artifactregistry.googleapis.com"
  disable_on_destroy = false
}

# Enable Cloud Run API
resource "google_project_service" "cloud_run" {
  service            = "run.googleapis.com"
  disable_on_destroy = false
}

# Create Artifact Registry Repository
resource "google_artifact_registry_repository" "app_repo" {
  location      = var.region
  repository_id = "nextjs-repo"
  description   = "Docker repository for Next.js app"
  format        = "DOCKER"
  depends_on    = [google_project_service.artifact_registry]
}

# 1. Build the Root Image (Level 1)
resource "docker_image" "root_base" {
  name = "local/root_base:latest"
  build {
    context    = ".." # Path to Root Dockerfile
    dockerfile = "docker/images/root/Dockerfile"
    platform   = "linux/amd64"
  }
}

# 2. Build the Intermediate Image (Level 2)
resource "docker_image" "node_middleware" {
  name = "local/node_middleware:latest"
  build {
    context    = ".."
    dockerfile = "docker/images/middleware/Dockerfile"
    platform   = "linux/amd64"
  }
  # Ensure Root is built first
  depends_on = [docker_image.root_base]
}

# 3. Build the Application Image (Level 3)
resource "docker_image" "my_app" {
  name = "${var.region}-docker.pkg.dev/${var.project_id}/${google_artifact_registry_repository.app_repo.repository_id}/my-app:latest"
  build {
    context    = ".."
    dockerfile = "docker/images/app/Dockerfile"
    platform   = "linux/amd64"
  }
  # Ensure Middleware is built first
  depends_on = [docker_image.node_middleware]
}

# Push the image to Artifact Registry
resource "docker_registry_image" "app_push" {
  name          = docker_image.my_app.name
  keep_remotely = true
  triggers = {
    image_id = docker_image.my_app.image_id
  }
}

# 4. Deploy to Cloud Run
resource "google_cloud_run_v2_service" "default" {
  name     = "nextjs-app-service"
  location = var.region
  ingress  = "INGRESS_TRAFFIC_ALL"

  template {
    containers {
      image = docker_registry_image.app_push.name
      ports {
        container_port = 8080
      }
      env {
        name  = "ENVIRONMENT"
        value = "production"
      }
    }
  }
  depends_on = [google_project_service.cloud_run]
}

# Make the service public
resource "google_cloud_run_v2_service_iam_member" "public" {
  name     = google_cloud_run_v2_service.default.name
  location = google_cloud_run_v2_service.default.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}

output "application_url" {
  value = google_cloud_run_v2_service.default.uri
}
