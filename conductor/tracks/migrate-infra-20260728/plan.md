# Implementation Plan: Migrate to New Architecture and Hosting

Track Time Estimation: [Estimated: 8 hours, Start: -, End: -, Duration: -]

## Phase 1: Containerize the Application
Time Estimation: [Estimated: 1 hour, Start: 2026-07-28T13:03:35-05:00, End: 2026-07-28T16:04:42-05:00, Duration: 3 hours 1 min]
- [x] Task: Write basic test/validation for Docker build [a30b31a] [Estimated: 15 mins, Start: 2026-07-28T13:03:35-05:00, End: 2026-07-28T13:10:10-05:00, Duration: 7 mins]
- [x] Task: Create optimized Next.js App Router Dockerfile [3204455] [Estimated: 30 mins, Start: 2026-07-28T13:10:46-05:00, End: 2026-07-28T13:20:22-05:00, Duration: 10 mins]
- [x] Task: Refactor/verify local Docker build and update `ARCHITECTURE.md` [4e3b636] [Estimated: 15 mins, Start: 2026-07-28T13:20:48-05:00, End: 2026-07-28T13:22:28-05:00, Duration: 2 mins]
- [x] Task: Conductor - User Manual Verification 'Phase 1: Containerize the Application' (Protocol in workflow.md) [Approved] [Estimated: -, Start: 2026-07-28T13:22:42-05:00, End: 2026-07-28T16:04:42-05:00, Duration: 2 hours 42 mins]

## Phase 2: Local Staging Environment Setup
Time Estimation: [Estimated: 2 hours, Start: 2026-07-28T16:11:36-05:00, End: 2026-07-28T18:28:53-05:00, Duration: 2 hours 17 mins]
- [x] Task: Write validation scripts to check cluster health in local environment (kind/minikube) [8aacdcf] [Estimated: 30 mins, Start: 2026-07-28T16:11:36-05:00, End: 2026-07-28T18:11:42-05:00, Duration: 2 hours]
- [x] Task: Create kind cluster configuration files and setup scripts [8aacdcf] [Estimated: 45 mins, Start: 2026-07-28T16:11:36-05:00, End: 2026-07-28T18:11:42-05:00, Duration: 2 hours]
- [x] Task: Deploy Next.js container to local kind and ensure networking/ingress works [75763fc] [Estimated: 45 mins, Start: 2026-07-28T18:14:54-05:00, End: 2026-07-28T18:22:58-05:00, Duration: 8 mins]
- [x] Task: Conductor - User Manual Verification 'Phase 2: Local Staging Environment Setup' (Protocol in workflow.md) [Approved] [Estimated: 15 mins, Start: 2026-07-28T18:23:53-05:00, End: 2026-07-28T18:28:53-05:00, Duration: 5 mins]

## Phase 3: GitOps Integration with ArgoCD
Time Estimation: [Estimated: 2 hours, Start: 2026-07-28T18:28:53-05:00, End: -, Duration: -]
- [x] Task: Create ArgoCD application manifests (Application, AppProject) [35fa4b1] [Estimated: 45 mins, Start: 2026-07-28T18:28:53-05:00, End: 2026-07-28T23:13:48-05:00, Duration: 4 hours 45 mins]
- [~] Task: Deploy ArgoCD to local kind cluster and bootstrap the Next.js app via GitOps [Estimated: 1 hour, Start: 2026-07-28T23:13:48-05:00, End: -, Duration: -]
- [ ] Task: Document ArgoCD architecture and UI access in `ARCHITECTURE.md` [Estimated: 15 mins, Start: -, End: -, Duration: -]
- [ ] Task: Conductor - User Manual Verification 'Phase 3: GitOps Integration with ArgoCD' (Protocol in workflow.md)

## Phase 4: Infrastructure as Code (Terraform)
Time Estimation: [Estimated: 3 hours, Start: -, End: -, Duration: -]
- [ ] Task: Define HashiCorp Vault placeholders for Hetzner API tokens [Estimated: 30 mins, Start: -, End: -, Duration: -]
- [ ] Task: Write Terraform scripts for Hetzner network, firewall, and compute provisioning [Estimated: 2 hours, Start: -, End: -, Duration: -]
- [ ] Task: Run `terraform plan` to validate configs and update `ARCHITECTURE.md` with infrastructure diagram [Estimated: 30 mins, Start: -, End: -, Duration: -]
- [ ] Task: Conductor - User Manual Verification 'Phase 4: Infrastructure as Code (Terraform)' (Protocol in workflow.md)
