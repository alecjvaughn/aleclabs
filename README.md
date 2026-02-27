# AlecLabs Portfolio

A modern, containerized personal portfolio and web lab built with Next.js, deployed on Google Cloud Run using Terraform and Ansible.

## 🚀 Tech Stack

- **Frontend**: Next.js 16 (App Router), React 18, TypeScript, Tailwind CSS.
- **Infrastructure**: Google Cloud Run, Artifact Registry.
- **IaC**: Terraform.
- **Orchestration**: Ansible, GNU Make.
- **Containerization**: Docker (Multi-stage builds with non-root security).

## 🛠 Prerequisites

Ensure you have the following installed locally:

- **Node.js** (v20+) & npm
- **Docker** (Desktop or Colima)
- **Terraform** (v1.0+)
- **Ansible**
- **Google Cloud SDK** (`gcloud`)

## 💻 Local Development

### Standard Node.js
```bash
make clean-install
npm run dev
```
Open http://localhost:3000 to view it in the browser.

### Dockerized
```bash
make docker-up
```
The app will be available at http://localhost:8080.

## ☁️ Deployment

This project uses Terraform to provision infrastructure on Google Cloud Platform.

1.  **Authenticate with GCP:**
    ```bash
    gcloud auth application-default login
    ```

2.  **Deploy via Ansible (Recommended):**
    This runs pre-flight checks, Terraform apply, and health verification.
    ```bash
    make ansible-deploy
    ```

## 🕹 Command Reference

| Command | Description |
| :--- | :--- |
| `make up` | Deploy infrastructure via Terraform. |
| `make down` | Destroy infrastructure and cleanup. |
| `make clean-all` | Full environment reset (Terraform, Docker, Node). |
| `make ansible-deploy` | Orchestrate deployment with Ansible. |
