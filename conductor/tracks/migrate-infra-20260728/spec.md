# Specification: Migrate to New Architecture and Hosting

## Overview
This track focuses on migrating the application infrastructure to a modern, containerized GitOps workflow. The objective is to lay the foundation for a k3s cluster hosted on Hetzner Cloud, managed via Terraform and ArgoCD, and containerizing the Next.js frontend with Docker. The deployment will initially be tested in a local environment (e.g., k3d) before provisioning live resources.

## Functional Requirements
- **Docker Containerization**: Create an optimized Dockerfile for the Next.js App Router application.
- **Infrastructure as Code**: Write Terraform configurations to bootstrap a Hetzner Cloud environment (network, firewall, compute nodes) suitable for k3s.
- **Cluster Orchestration**: Define the k3s cluster setup and configuration scripts/manifests.
- **GitOps Pipeline**: Configure ArgoCD manifests to deploy the Next.js application into the k3s cluster using a pull-based GitOps model.
- **Local Staging**: Provide a configuration to spin up the entire cluster and ArgoCD pipeline locally (e.g., using `k3d` or `minikube`) to validate the deployment architecture before touching live infrastructure.

## Non-Functional Requirements
- **Documentation**: All architecture decisions and setup steps must be documented in `ARCHITECTURE.md` (with Mermaid diagrams where applicable).
- **Security**: Key placeholders must be added to HashiCorp Vault when new secrets/environment variables are introduced for cluster configurations.

## Acceptance Criteria
- [ ] A functional `Dockerfile` exists and the Next.js app builds successfully.
- [ ] Terraform scripts are written to provision Hetzner infrastructure.
- [ ] k3s configuration files are ready.
- [ ] ArgoCD application manifests are created.
- [ ] The entire stack can be successfully spun up and verified in a local Kubernetes environment (like `k3d`).

## Out of Scope
- Syncing Obsidian Markdown content.
- Final provisioning of the live Hetzner cluster (this track ends at local verification and script creation).
