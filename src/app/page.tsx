import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-12 px-6 md:py-32 md:px-16 bg-zinc-50 dark:bg-black">
        <header>
          <div className="flex justify-center mb-8">
            <Image
                src="/images/_F1A1707_square_2.jpg"
                height={90}
                width={90}
                alt="resume profile picture"
                className="rounded-full object-cover shadow-md"
            />
          </div>
          <h1>Alec J. Vaughn</h1>
          <div className="contact-info">
            <span>120 Hayes St.</span>, <span>Claremont, MN  55924</span>
            <br />
            (507) 271-5444 | alecjvaughn@gmail.com
            <div className="flex justify-center gap-4 mt-2">
              <a href="https://linkedin.com/in/alecjvaughn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://github.com/alecjvaughn" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </header>
        <section className="w-full flex flex-col md:flex-row gap-4 md:gap-0">
          <h2 className="w-full md:w-1/5 shrink-0 md:pr-8">Summary</h2>
          <div className="section-content w-full md:w-4/5">
            <p>
              Software Engineer & Technical Lead Certified GenAI Associate Engineer with 4 years of experience building technical solutions for enterprise security environments. Specializes in bridging the gap between complex backend data and intuitive User Interfaces. Proficient in JavaScript (React/Next.js) and Python, with deep domain expertise in Incident Response, SOC Compliance, and Cloud Infrastructure. Eager to apply a security-first mindset to build scalable, high-performance frontends for CrowdStrike’s Intelligence team.
            </p>
          </div>
        </section>
        <section className="w-full flex flex-col md:flex-row gap-4 md:gap-0">
          <h2 className="w-full md:w-1/5 shrink-0 md:pr-8">Core Skills</h2>
          <div className="section-content w-full md:w-4/5">
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li>Front-End &amp; Web: React, Next.js, JavaScript (ES6+), HTML5/CSS3, Tailwind CSS, Firebase (Hosting/DB), RESTful APIs, JSON.</li>
              <li>Backend &amp; Scripting: Python, SQL, Bash/Shell, Node.js concepts.</li>
              <li>Cloud &amp; Infrastructure: Microsoft Azure (Specialist – AZ-120), Cloud Data Services, CI/CD (GitLab/Jenkins).</li>
              <li>Security Domain: Incident Response, SOC Compliance, Identity Access Management (IAM), Data Privacy.</li>
            </ul>
          </div>
        </section>
        <section className="w-full flex flex-col md:flex-row gap-4 md:gap-0">
          <h2 className="w-full md:w-1/5 shrink-0 md:pr-8">Professional Experience</h2>
          <div className="section-content w-full md:w-4/5">
            <div className="job">
              <div className="job-header">HCLTech / SEAL Consulting (Lumen Engagement) | Sep 2021 – Nov 2025</div>
              <div className="job-role">Lead Consultant / Software &amp; Automation Engineer</div>
              <ul className="list-disc list-outside ml-5 space-y-2">
                <li>Automation Engineering: Engineered a custom Python automation suite using the Azure SDK to modernize legacy system health checks (HANA Minichecks), reducing manual diagnostic time by 20% and centralizing critical threat notifications.</li>
                <li>Data Pipeline Optimization: Leveraged Azure Databricks and SQL to architect complex queries against large system logs, identifying usage patterns and cost-saving opportunities through complex table joins.</li>
                <li>Generative AI Implementation: Applied Generative AI principles (RAG concepts) and LangChain workflows to design experimental scripts for parsing unstructured technical logs into structured data for analysis.</li>
                <li>DevOps & Code Governance: Contributed to internal source code management by submitting pull requests and enforcing Git branching strategies to ensure secure and deployable automation codebases.</li>
                <li>Cloud Architecture: Managed the technical configuration of hybrid-cloud infrastructure on Microsoft Azure, ensuring application scalability and alignment with DevOps best practices for high-availability environments.</li>
                <li>Incident Response: Orchestrated critical network failovers (MPLS to S2S VPN) during high-severity outages, restoring secure connectivity for enterprise clients and maintaining strict Service Level Agreements (SLAs).</li>    
              </ul>
            </div>
            <div className="job">
              <div className="job-header">Goodman Telecom Services | Aug 2019 – Aug 2021</div>
              <div className="job-role">OSP Engineering Associate II</div>
              <ul className="list-disc list-outside ml-5 space-y-2">
                <li>API Integration: Developed Python scripts utilizing the Google Maps API to automate the extraction of geospatial coordinate data, translating unstructured survey metrics into precise engineering documents.</li>
                <li>Data Visualization: Designed and deployed interactive executive dashboards in Dynamics 365, consolidating real-time project metrics to provide leadership with actionable portfolio insights.</li>
                <li>Tool Optimization: Evaluated open-source GIS tools against proprietary software to optimize engineering workflows, conducting technical feasibility analysis to improve data processing efficiency.</li>
              </ul>
            </div>
            <div className="job">
              <div className="job-header">Preventice Solutions | Dec 2018 – May 2019</div>
              <div className="job-role">DevOps Engineer</div>
              <ul className="list-disc list-outside ml-5 space-y-2">
                <li>Cloud Migration: Orchestrated the migration of legacy version control systems to Azure DevOps (Git), standardizing toolsets and enabling modern CI/CD workflows for the development team.</li>
                <li>Pipeline Automation: Refactored PowerShell triggers for Continuous Delivery pipelines, automating environment builds on Windows Server 2012 to reduce deployment friction and configuration drift.</li>
                <li>Infrastructure Analysis: Evaluated Virtual Machine Scale Sets (VMSS) and Infrastructure-as-Code (IaC) templates to standardize scalable cloud deployments and improve system resilience.</li>  
              </ul>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col md:flex-row gap-4 md:gap-0">
          <h2 className="w-full md:w-1/5 shrink-0 md:pr-8">Technical Projects</h2>
          <div className="section-content w-full md:w-4/5">
            <div className="job">
              <div className="job-header">Personal Portfolio & Web Lab | 2026</div>
              <div className="job-role">Role: Full Stack Developer</div>
              <ul className="list-disc list-outside ml-5 space-y-2">
                <li>Architecture: Designed and deployed a responsive Single Page Application (SPA) using Next.js and React.</li>
                <li>Cloud Integration: Integrated Firebase for backend database and hosting, ensuring scalable performance.</li>
                <li>UI/UX: Implemented modern CSS frameworks to create an intuitive, accessible user interface for showcasing engineering projects.</li>
                {/* <li>Next.js portfolio website (this site) showcasing projects and skills, built with TypeScript, Tailwind CSS, and deployed on Vercel.</li> */}
              </ul>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col md:flex-row gap-4 md:gap-0">
          <h2 className="w-full md:w-1/5 shrink-0 md:pr-8">Education</h2>
          <div className="section-content w-full md:w-4/5">
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li>Winona State University – Bachelor of Science, Computer Sciences (May 2018, Cum Laude).</li>
            </ul>
          </div>
        </section>
        <section className="w-full flex flex-col md:flex-row gap-4 md:gap-0">
          <h2 className="w-full md:w-1/5 shrink-0 md:pr-8">Certifications</h2>
          <div className="section-content w-full md:w-4/5">
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li>Certified GenAI Associate Engineer | July 2025</li>
              <li>Microsoft Certified: Azure for SAP Workloads Specialty | November 2024</li>
              <li>Lean Six Sigma White Belt | July 2024</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}