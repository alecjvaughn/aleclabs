# --- Configuration ---
TF_DIR := infrastructure
APP_NAME := production_service
PORT := 8080

# Docker Images
APP_IMAGE := local/my-app:latest

# --- Main Targets ---
.PHONY: help up down reload logs
.PHONY: tf-init tf-apply tf-destroy tf-clean
.PHONY: docker-up docker-down docker-build docker-rebuild docker-clean
.PHONY: clean clean-artifacts clean-deps clean-install clean-all
.PHONY: clean-cloud-images
.PHONY: ansible-deploy

help:
	@echo "Usage:"
	@echo "  make up             : Deploy application using Terraform (Preferred)"
	@echo "  make down           : Destroy infrastructure and cleanup"
	@echo "  make reload         : Rebuild and redeploy app image via Terraform"
	@echo "  make logs           : View container logs (Local Docker)"
	@echo "  make clean-deps     : Remove Next.js build artifacts (.next)"
	@echo "  make clean-all      : Full environment reset (Terraform, Docker, Node, etc.)"
	@echo "  make clean-cloud-images : Delete images in Artifact Registry & disable Firebase Hosting"
	@echo "  make ansible-deploy : Deploy using Ansible"
	@echo "  make deploy-hosting : Build and deploy static site to Firebase Hosting"

# --- Terraform Workflow ---

tf-init:
	cd $(TF_DIR) && terraform init

tf-apply: tf-init
	cd $(TF_DIR) && terraform apply -auto-approve

tf-destroy:
	cd $(TF_DIR) && terraform destroy -auto-approve

tf-clean:
	rm -rf $(TF_DIR)/.terraform $(TF_DIR)/.terraform.lock.hcl $(TF_DIR)/terraform.tfstate $(TF_DIR)/terraform.tfstate.backup

up: tf-apply

down: tf-destroy
	@echo "Cleaning up any dangling images..."
	-docker rmi $(APP_IMAGE) 2>/dev/null || true
	-docker network rm data_platform_network 2>/dev/null || true
	@echo "Note: Run 'firebase hosting:disable' manually to remove the frontend site."

# --- Docker Manual Workflow ---

test-docker:
	@echo "Running Docker build test (TDD Red/Green Phase)..."
	@docker buildx build --platform linux/amd64 -t test-image . --load || (echo "ERROR: Docker build failed!" && exit 1)
	@echo "SUCCESS: Docker build passed!"

docker-build:
	docker buildx build --platform linux/amd64 -t $(APP_IMAGE) . --load

docker-rebuild:
	docker buildx build --platform linux/amd64 --no-cache -t $(APP_IMAGE) . --load

docker-run: docker-build
	docker run --rm -d --name $(APP_NAME) \
		-p $(PORT):$(PORT) \
		-e ENVIRONMENT=production \
		-e GOOGLE_APPLICATION_CREDENTIALS=/tmp/keys/application_default_credentials.json \
		-e GOOGLE_CLOUD_PROJECT=aleclabs-website \
		-v $(HOME)/.config/gcloud/application_default_credentials.json:/tmp/keys/application_default_credentials.json:ro \
		$(APP_IMAGE)

docker-up: docker-run

docker-down:
	docker stop $(APP_NAME) || true
	docker rm $(APP_NAME) || true
	docker network rm data_platform_network || true

docker-clean: docker-down
	docker rmi $(APP_IMAGE) || true

# --- Firebase Workflow ---

deploy-hosting:
	# Ensure the placeholder public directory exists to satisfy the Firebase CLI.
	mkdir -p public
	firebase deploy --only hosting

# --- Utility & Cleanup ---

logs:
	docker logs -f $(APP_NAME)

clean-artifacts:
	rm -rf .next .firebase

clean-deps:
	rm -rf node_modules package-lock.json

clean-install: clean-artifacts clean-deps
	npm install

clean-all: docker-down down tf-clean clean-artifacts clean-deps
	@echo "Environment totally cleaned."
	@echo "Running 'npm install' to reset dependencies..."
	npm install
	@echo "Done."

clean-cloud-images:
	# Delete all images in the repository (requires confirmation)
	gcloud artifacts docker images delete \
		us-central1-docker.pkg.dev/aleclabs-website/nextjs-repo/my-app \
		--delete-tags
	firebase hosting:disable

# --- Ansible ---

ansible-deploy:
	ansible-playbook -i ansible/inventory.ini ansible/deploy.yml