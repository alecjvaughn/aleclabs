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
- **Firebase CLI** (`npm install -g firebase-tools`)

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

This project uses Terraform to provision infrastructure (Cloud Run) and Firebase Hosting for the frontend delivery.

1.  **Authenticate:**
    ```bash
    gcloud auth application-default login
    firebase login
    ```
    **For GitHub Actions deployments**, ensure you have the following repository secrets configured. When creating the secrets, paste the **entire contents** of the downloaded JSON key file.
    1.  `GCP_SA_KEY`: Contains the JSON key for a service account used to deploy to Cloud Run. It requires these minimum IAM roles:
        - `Cloud Run Developer` (`roles/run.developer`)
        - `Artifact Registry Writer` (`roles/artifactregistry.writer`)
        - `Service Account User` (`roles/iam.serviceAccountUser`)
    2.  `FIREBASE_SERVICE_ACCOUNT_ALECLABS_WEBSITE`: Contains the JSON key for a service account used to deploy to Firebase Hosting. It requires this minimum IAM role:
        - `Firebase Hosting Admin` (`roles/firebasehosting.admin`)

2.  **Deploy Infrastructure (Cloud Run):**
    This uses Terraform to provision the necessary cloud infrastructure like Cloud Run and Artifact Registry. Application code is deployed separately via GitHub Actions on a push to the `main` branch.
    ```bash
    make ansible-deploy
    ```

3.  **Deploy Hosting Configuration (Firebase):**
    This deploys the Firebase Hosting configuration, which contains the rewrite rules that point to the Cloud Run service.
    ```bash
    make deploy-hosting
    ```

## 🕹 Command Reference

| Command | Description |
| :--- | :--- |
| `make up` | Deploy infrastructure via Terraform. |
| `make down` | Destroy infrastructure and cleanup. |
| `make clean-all` | Full environment reset (Terraform, Docker, Node). |
| `make ansible-deploy` | Orchestrate deployment with Ansible. |
| `make deploy-hosting` | Deploy Firebase Hosting configuration. |
