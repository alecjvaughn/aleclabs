# --- Configuration ---
TF_DIR := infrastructure
APP_NAME := production_service
PORT := 8080

# Docker Images
ROOT_IMAGE := local/root_base:latest
MIDDLEWARE_IMAGE := local/node_middleware:latest
APP_IMAGE := local/my-app:latest

# Docker Files
ROOT_DOCKERFILE := docker/images/root/Dockerfile
MIDDLEWARE_DOCKERFILE := docker/images/middleware/Dockerfile
APP_DOCKERFILE := docker/images/app/Dockerfile

# --- Main Targets ---
.PHONY: help up down reload logs
.PHONY: tf-init tf-apply tf-destroy tf-clean
.PHONY: docker-up docker-down docker-build docker-rebuild docker-clean
.PHONY: clean clean-deps clean-install clean-all
.PHONY: ansible-deploy

help:
	@echo "Usage:"
	@echo "  make up             : Deploy application using Terraform (Preferred)"
	@echo "  make down           : Destroy infrastructure and cleanup"
	@echo "  make reload         : Rebuild and redeploy app image via Terraform"
	@echo "  make logs           : View container logs (Local Docker)"
	@echo "  make clean          : Remove Next.js build artifacts (.next)"
	@echo "  make clean-all      : Full environment reset (Terraform, Docker, Node)"
	@echo "  make ansible-deploy : Deploy using Ansible"

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
	-docker rmi $(APP_IMAGE) $(MIDDLEWARE_IMAGE) $(ROOT_IMAGE) 2>/dev/null || true
	-docker network rm data_platform_network 2>/dev/null || true

reload:
	cd $(TF_DIR) && terraform taint docker_image.my_app
	cd $(TF_DIR) && terraform apply -auto-approve

# --- Docker Manual Workflow ---

docker-build:
	docker build -t $(ROOT_IMAGE) -f $(ROOT_DOCKERFILE) .
	docker build -t $(MIDDLEWARE_IMAGE) -f $(MIDDLEWARE_DOCKERFILE) .
	docker build -t $(APP_IMAGE) -f $(APP_DOCKERFILE) .

docker-rebuild:
	docker build --no-cache -t $(ROOT_IMAGE) -f $(ROOT_DOCKERFILE) .
	docker build --no-cache -t $(MIDDLEWARE_IMAGE) -f $(MIDDLEWARE_DOCKERFILE) .
	docker build --no-cache -t $(APP_IMAGE) -f $(APP_DOCKERFILE) .

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
	docker rmi $(APP_IMAGE) $(MIDDLEWARE_IMAGE) $(ROOT_IMAGE) || true

# --- Utility & Cleanup ---

logs:
	docker logs -f $(APP_NAME)

clean-artifacts:
	rm -rf .next

clean-deps:
	rm -rf node_modules package-lock.json

clean-install: clean-artifacts clean-deps
	npm install

clean-all: docker-down down tf-clean clean-artifacts clean-deps
	@echo "Environment totally cleaned."

# --- Ansible ---

ansible-deploy:
	ansible-playbook -i ansible/inventory.ini ansible/deploy.yml