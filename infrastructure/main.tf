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

# Enable Firebase API
resource "google_project_service" "firebase" {
  service            = "firebase.googleapis.com"
  disable_on_destroy = false
}

# Enable Firebase Hosting API
resource "google_project_service" "firebase_hosting" {
  service            = "firebasehosting.googleapis.com"
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

# Deploy to Cloud Run
resource "google_cloud_run_v2_service" "default" {
  name     = "nextjs-app-service"
  location = var.region
  ingress  = "INGRESS_TRAFFIC_ALL"

  template {
    containers {
      # The image path is now static. The GitHub Actions workflow is responsible for building
      # and pushing new versions of the image to the 'latest' tag.
      image = "${var.region}-docker.pkg.dev/${var.project_id}/${google_artifact_registry_repository.app_repo.repository_id}/my-app:latest"
      ports {
        container_port = 8080
      }
      env {
        name  = "ENVIRONMENT"
        value = "production"
      }
    }
  }
  depends_on = [
    google_project_service.cloud_run,
    google_artifact_registry_repository.app_repo
  ]
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

# # Deploy Firebase Hosting on every apply
# resource "null_resource" "firebase_deploy" {
#   triggers = {
#     always_run = "${timestamp()}"
#   }

#   provisioner "local-exec" {
#     command     = "firebase deploy --only hosting"
#     working_dir = "${path.module}/.."
#   }

#   depends_on = [google_cloud_run_v2_service.default]
# }

# Disable Firebase Hosting only when destroying the infrastructure
# resource "null_resource" "firebase_cleanup" {
#   provisioner "local-exec" {
#     when        = destroy
#     command     = "firebase hosting:disable --confirm"
#     working_dir = "${path.module}/.."
#   }

#   depends_on = [google_project_service.firebase_hosting]
# }
