.PHONY: help build test-docker test-infra local-up local-down clean

APP_IMAGE := aleclabs-home:local
CLUSTER_NAME := aleclabs-local

help:
	@echo "Usage:"
	@echo "  make build         : Build the optimized Next.js Docker image"
	@echo "  make test-docker   : Validate the Docker build"
	@echo "  make local-up      : Spin up the local kind cluster"
	@echo "  make local-down    : Destroy the local kind cluster"
	@echo "  make test-infra    : Run Terratest suite against the infrastructure"
	@echo "  make clean         : Remove local artifacts and node_modules"

build:
	docker build -t $(APP_IMAGE) .

test-docker:
	@echo "Running Docker build test (TDD Red/Green Phase)..."
	@docker build -t test-image . || (echo "ERROR: Docker build failed!" && exit 1)
	@echo "SUCCESS: Docker build passed!"

local-up:
	@echo "Creating kind cluster '$(CLUSTER_NAME)'..."
	kind create cluster --name $(CLUSTER_NAME) --config tests/infra/kind-config.yaml --image kindest/node:v1.29.2
	@echo "Enforcing Docker resource limits on cluster container to prevent starvation..."
	docker update --cpus="2" --memory="4g" $(CLUSTER_NAME)-control-plane || true
	@echo "Cluster created."

local-down:
	@echo "Deleting kind cluster '$(CLUSTER_NAME)'..."
	kind delete cluster --name $(CLUSTER_NAME)
	@echo "Cluster deleted."

local-deploy: build
	@echo "Loading Docker image into kind cluster..."
	kind load docker-image $(APP_IMAGE) --name $(CLUSTER_NAME)
	@echo "Installing NGINX Ingress controller..."
	kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
	@echo "Waiting for NGINX ingress controller to be ready..."
	sleep 5
	kubectl wait --namespace ingress-nginx \
	  --for=condition=ready pod \
	  --selector=app.kubernetes.io/component=controller \
	  --timeout=90s || true
	@echo "Applying Kubernetes manifests..."
	kubectl apply -f k8s/base/
	@echo "Waiting for deployment rollout..."
	kubectl rollout status deployment/aleclabs-home

test-infra:
	@echo "Running Terratest infrastructure validation..."
	cd tests/infra && go test -v -timeout 30m

clean: local-down
	rm -rf .next node_modules
	docker rmi $(APP_IMAGE) test-image 2>/dev/null || true