# Implementation Plan: Migrate to New Architecture and Hosting

Track Time Estimation: [Estimated: 8 hours, Start: -, End: -, Duration: -]

## Phase 1: Containerize the Application
Time Estimation: [Estimated: 1 hour, Start: -, End: -, Duration: -]
- [x] Task: Write basic test/validation for Docker build [a30b31a] [Estimated: 15 mins, Start: 2026-07-28T13:03:35-05:00, End: 2026-07-28T13:10:10-05:00, Duration: 7 mins]
- [ ] Task: Create optimized Next.js App Router Dockerfile [Estimated: 30 mins, Start: -, End: -, Duration: -]
- [ ] Task: Refactor/verify local Docker build and update `ARCHITECTURE.md` [Estimated: 15 mins, Start: -, End: -, Duration: -]
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Containerize the Application' (Protocol in workflow.md)

## Phase 2: Local Staging Environment Setup
Time Estimation: [Estimated: 2 hours, Start: -, End: -, Duration: -]
- [ ] Task: Write validation scripts to check cluster health in local environment (k3d/minikube) [Estimated: 30 mins, Start: -, End: -, Duration: -]
- [ ] Task: Create k3d cluster configuration files and setup scripts [Estimated: 45 mins, Start: -, End: -, Duration: -]
- [ ] Task: Deploy Next.js container to local k3d and ensure networking/ingress works [Estimated: 45 mins, Start: -, End: -, Duration: -]
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Local Staging Environment Setup' (Protocol in workflow.md)

## Phase 3: GitOps Integration with ArgoCD
Time Estimation: [Estimated: 2 hours, Start: -, End: -, Duration: -]
- [ ] Task: Create ArgoCD application manifests (Application, AppProject) [Estimated: 45 mins, Start: -, End: -, Duration: -]
- [ ] Task: Deploy ArgoCD to local k3d cluster and bootstrap the Next.js app via GitOps [Estimated: 1 hour, Start: -, End: -, Duration: -]
- [ ] Task: Document ArgoCD architecture and UI access in `ARCHITECTURE.md` [Estimated: 15 mins, Start: -, End: -, Duration: -]
- [ ] Task: Conductor - User Manual Verification 'Phase 3: GitOps Integration with ArgoCD' (Protocol in workflow.md)

## Phase 4: Infrastructure as Code (Terraform)
Time Estimation: [Estimated: 3 hours, Start: -, End: -, Duration: -]
- [ ] Task: Define HashiCorp Vault placeholders for Hetzner API tokens [Estimated: 30 mins, Start: -, End: -, Duration: -]
- [ ] Task: Write Terraform scripts for Hetzner network, firewall, and compute provisioning [Estimated: 2 hours, Start: -, End: -, Duration: -]
- [ ] Task: Run `terraform plan` to validate configs and update `ARCHITECTURE.md` with infrastructure diagram [Estimated: 30 mins, Start: -, End: -, Duration: -]
- [ ] Task: Conductor - User Manual Verification 'Phase 4: Infrastructure as Code (Terraform)' (Protocol in workflow.md)
