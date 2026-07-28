# Product Guidelines

## 1. Visual Design & Aesthetics (2026 Trends)
- **Typography & Layout**: Implement **expressive kinetic typography** for hero sections, paired with high-legibility geometric sans-serifs for body copy. Layouts should utilize **Bento grids** for structured, scannable content organization.
- **Color & Dark Mode**: Adopt a robust **Design Token Architecture** featuring semantic color definitions (e.g., `surface-elevated`, `text-primary-inverse`). Ensure true Dark Mode support with meticulous attention to contrast ratios (WCAG AAA for critical text) and appropriate surface elevations using subtle borders rather than heavy shadows.

## 2. Interactive & 3D Elements
- **Performance-First 3D**: Leverage **Three.js / React Three Fiber** for immersive hero graphics or data visualizations. Implement lazy loading, progressive enhancement, and low-poly models to maintain 60fps.
- **Mobile Fallbacks**: Always provide high-quality fallback assets (videos or images) for mobile devices or users on low-power mode to preserve battery and performance.
- **Scroll-Driven Animations**: Utilize native CSS scroll-driven animations (`animation-timeline`) to avoid JavaScript thread blocking. 

## 3. Accessibility & Inclusivity (WCAG 2.2)
- **Focus & Navigation**: Implement clear, stylized focus states (e.g., `focus-visible` with offset rings). Ensure robust keyboard navigation and functional "Skip to Main Content" links.
- **Reduced Motion**: Respect `prefers-reduced-motion` queries by disabling 3D canvas rendering and kinetic typography, falling back to static layouts or simple opacity fades.
- **Semantic HTML & ARIA**: Use native HTML5 landmarks where possible, supplementing with ARIA only for complex custom interactive components (e.g., the dynamic resume tabs).

## 4. Performance & Core Web Vitals
- **Lighthouse Goals**: Target 100/100 across Performance, Accessibility, Best Practices, and SEO.
- **Optimization Strategy**: Optimize bundle sizes via aggressive code-splitting. Preload critical variable fonts and defer non-critical CSS/JS. Serve all media in modern formats (WebP/AVIF).

## 5. SEO & Discoverability
- **AI Search Optimization**: Implement an `llms.txt` file in the root to help AI agents parse the site structure and content.
- **Structured Data**: Use **JSON-LD** schemas for `ProfilePage`, `Person`, and `Article` (for case studies) to ensure rich snippets.
- **Metadata**: Utilize Open Graph tags, canonical URLs, and dynamic meta descriptions tailored for both human recruiters and search indexing algorithms.

## 6. Case Study Strategy (Storytelling)
- **Structure**: Follow the **STAR Method** (Situation, Task, Action, Result) for all technical case studies.
- **SEO Iteration Case Study**: The site's SEO optimization journey will itself be featured as a core case study. This will be developed through a strict, iterative process loop driven by active human feedback and iterative performance tuning.
- **Recruiter Perspective**: Front-load the business impact, metrics, and high-level architecture before diving into deep technical implementation details. Use diagrams to make complex systems digestible.

## 7. Hosting & Infrastructure Strategy
- **Cloud Provider**: Utilize **Hetzner Cloud** for unmatched compute-per-dollar, enabling a robust, always-on Kubernetes (k3s) playground for a flat, low monthly cost.
- **Geographic Flexibility**: Leverage infrastructure-as-code (Terraform) and GitOps (ArgoCD) to quickly and cost-effectively tear down and spin up clusters in different geographic regions (e.g., East Coast vs. West Coast) to minimize latency for specific target employers.
- **Edge Caching**: Place the bare-metal Hetzner node behind a CDN (e.g., Cloudflare) to mask the underlying IP, protect against DDoS, and cache static assets at the edge for optimal global Core Web Vitals.
