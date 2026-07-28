# AlecLabs Portfolio

A modern, containerized personal portfolio and web lab built with Next.js (App Router), deployed on an always-on Kubernetes (k3s) cluster via GitOps.

## 🚀 Tech Stack

- **Frontend**: Next.js 16 (App Router), React 18, TypeScript, Tailwind CSS.
- **3D & Animation**: React Three Fiber, Framer Motion, Native CSS Scroll-driven animations.
- **Infrastructure**: Hetzner Cloud VPS (k3s Cluster), Cloudflare (CDN).
- **IaC**: Terraform.
- **Orchestration / GitOps**: Kubernetes, ArgoCD.
- **Containerization**: Docker.

## 🛠 Prerequisites

Ensure you have the following installed locally:

- **Node.js** (v20+) & npm
- **Docker** (Desktop or Colima)
- **Terraform** (v1.0+)
- **kubectl** (for interacting with the k3s cluster)

## 💻 Local Development

```bash
npm install
npm run dev
```
Open http://localhost:3000 to view it in the browser.

## ☁️ Deployment Architecture

This project has migrated from a Serverless Google Cloud Run architecture to a bare-metal Kubernetes deployment on Hetzner Cloud. 
This migration enables an always-on infrastructure playground (eliminating serverless cold starts) and serves as a demonstration of advanced SRE/Platform Engineering skills (GitOps, declarative infrastructure).

Read the detailed [Architecture Documentation](./ARCHITECTURE.md) for more information on the infrastructure and the justification behind the tech stack choices.

### Deployment Flow

1.  **Provision Infrastructure:**
    Terraform is used to provision the foundational Hetzner Cloud VPS instances and configure the initial networking/firewalls.

2.  **Cluster Bootstrapping:**
    A lightweight Kubernetes distribution (`k3s`) is deployed onto the VPS.

3.  **GitOps (ArgoCD):**
    Application code and Kubernetes manifests are synchronized automatically via ArgoCD. When changes are merged to the `main` branch, a CI pipeline builds and pushes the Docker container to a registry, and ArgoCD automatically pulls the new image and updates the cluster state.
