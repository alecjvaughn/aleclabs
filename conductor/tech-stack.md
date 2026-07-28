# Technology Stack

## Core Language & Frameworks
- **Language**: TypeScript (Strict mode)
- **Frontend Framework**: Next.js (App Router)
  - **Justification**: Selected for native SSR/SSG capabilities, which are crucial for advanced SEO, structured data (JSON-LD), and serving `llms.txt`. It natively supports React Server Components, minimizing client bundle sizes.
  - **Competitors & Tradeoffs**: *Remix* is fantastic for data-heavy, mutation-driven apps, but Next.js leads in static site generation (SSG) for portfolios. *Astro* is incredibly fast for pure static sites, but Next.js offers a smoother path when expanding into dynamic, authenticated mini-apps (the future vision).
- **UI & Styling**: Tailwind CSS
  - **Justification**: Configured with CSS variables to enforce a strict Design Token Architecture for accessible Dark Mode and semantic colors. It compiles to a zero-runtime, minimal CSS file, securing 100/100 Lighthouse scores.
  - **Competitors & Tradeoffs**: *CSS-in-JS (Styled Components)* adds runtime overhead and JS bloat. *Panda CSS* is a strong zero-runtime alternative, but Tailwind remains the industry standard, making the codebase instantly recognizable to hiring managers.

## Interactive & Visual Elements
- **3D Graphics**: React Three Fiber (Three.js)
  - **Justification**: Allows for declarative, performance-first 3D hero elements with progressive enhancement while keeping 3D state perfectly synced with React UI state.
  - **Competitors & Tradeoffs**: *Raw Three.js* offers marginally higher theoretical performance but is much harder to maintain alongside a React app. *Spline* is great for no-code 3D, but R3F proves deep engineering capability.
- **Animations**: Native CSS scroll-driven animations & Framer Motion
  - **Justification**: CSS `animation-timeline` provides zero-JS thread blocking for scroll events. Framer Motion handles complex, physics-based viewport transitions.
  - **Competitors & Tradeoffs**: *GSAP* is historically the most powerful animation library, but it is heavy and imperative. Framer Motion is declarative and plays better within the React ecosystem.

## Content & Data
- **Content Source**: Local Markdown/MDX (Obsidian)
  - **Justification**: Ensures a fast, reliable, and version-controlled content delivery system synced directly from a personal knowledge base.
  - **Competitors & Tradeoffs**: *Headless CMS (Sanity, Contentful)*. A CMS offers a great UI for non-technical writers, but for a developer portfolio, local MDX is faster to author (via Obsidian), completely free, and acts as a demonstration of markdown parsing.

## Infrastructure & Orchestration (GitOps)
- **Containerization**: Docker
  - **Justification**: Optimized, single-stage application builds (unless multi-stage caching proves tangibly beneficial).
- **Cluster Management**: Kubernetes
  - **Justification**: Upgrading from Cloud Run provides robust orchestration, networking, and a foundation for the future multi-tenant SaaS lab. Crucially, it serves as a live demonstration of SRE/Platform Engineering skills.
  - **Competitors & Tradeoffs**: *Serverless (Vercel, Cloud Run)* is vastly simpler and cheaper. However, they abstract away the infrastructure layer, hiding the very DevOps/K8s skills this portfolio is designed to showcase to recruiters.
- **Continuous Deployment**: ArgoCD
  - **Justification**: Enforces a GitOps methodology with automated Blue/Green deployments via a pull-based model, preventing configuration drift.
  - **Competitors & Tradeoffs**: *GitHub Actions (Direct Push)* is easier to set up but prone to drift and lacks cluster state awareness. *FluxCD* is highly capable, but ArgoCD's UI provides a visual dashboard that is excellent for including in portfolio case studies.
- **Infrastructure as Code (IaC)**: Terraform
  - **Justification**: For provisioning the foundational Kubernetes clusters and associated cloud services. Crucial for the geographic flexibility strategy (tearing down and spinning up clusters on demand).
- **Hosting Provider**: Hetzner Cloud
  - **Justification**: Provides unparalleled compute-per-dollar compared to Azure or DigitalOcean, making it the perfect platform for an always-on, extensible Kubernetes (k3s) homelab/portfolio.
  - **Competitors & Tradeoffs**: *Azure (AKS)* and *DigitalOcean (DOKS)* offer managed Kubernetes which reduces maintenance burden, but they are significantly more expensive. Hetzner requires manual bootstrapping (via Terraform/Ansible) but perfectly demonstrates advanced Platform Engineering skills.
