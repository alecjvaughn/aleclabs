import React from 'react';
import Image from "next/image";

export default function ResumePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-12 px-6 md:py-32 md:px-16 bg-zinc-50 dark:bg-black">
        <header>
          <div className="flex justify-center mb-8">
            <Image src="/images/profile.jpg" height={90} width={90} alt="resume profile picture" className="rounded-full object-cover shadow-md" />
          </div>
          <h1>ALEC J. VAUGHN</h1>
          <div className="contact-info w-full text-center">
            <div>120 Hayes St<br/>Claremont, MN  55924</div>
            <div>507-271-5444 | alecjvaughn@gmail.com</div>
            <div className="flex justify-center gap-4 mt-2">
              <a href="http://linkedin.com/alecjvaughn" target="_blank" rel="noopener noreferrer" aria-label="linkedin.com/alecjvaughn" className="hover:opacity-80"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg></a> <a href="https://github.com/alecjvaughn" target="_blank" rel="noopener noreferrer" aria-label="github.com/alecjvaughn" className="hover:opacity-80"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></a> 
            </div>
          </div>
        </header>

        <section className="w-full flex flex-col md:flex-row gap-4 md:gap-0">
          <h2 className="w-full md:w-1/5 shrink-0 md:pr-8">Summary</h2>
          <div className="section-content w-full md:w-4/5">
            <p>Data Engineer and Certified GenAI Associate Engineer with nearly 4 years of experience designing scalable data architectures, optimizing ETL/ELT pipelines, and automating data workflows. Proficient in Python and SQL, with a proven track record of leveraging Azure Databricks to ingest, clean, and transform large-scale unstructured datasets for enterprise analytics. Eager to apply strong problem-solving methodologies and cloud platform expertise to build secure, high-performance data solutions for Mayo Clinic's Advanced Data Lake.</p>
          </div>
        </section>

        <section className="w-full flex flex-col md:flex-row gap-4 md:gap-0">
          <h2 className="w-full md:w-1/5 shrink-0 md:pr-8">Core Skills</h2>
          <div className="section-content w-full md:w-4/5">
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li>Data Engineering: ETL/ELT Pipelines, Data Modeling, Azure Databricks, Data Cleansing & Validation, Big Data Concepts.</li>
              <li>Languages & AI: Python (pandas, NumPy, Azure SDK), SQL (Advanced), Generative AI, RAG Pipelines.</li>
              <li>Cloud & Infrastructure: Microsoft Azure (AZ-120), Google Cloud Platform (GCP) concepts, Infrastructure-as-Code (Terraform/ARM), Docker.</li>
              <li>Tools & Methodologies: Git Version Control, CI/CD Pipelines (GitLab/Jenkins), Root Cause Analysis, Agile/Scrum.</li>
            </ul>
          </div>
        </section>

        <section className="w-full flex flex-col md:flex-row gap-4 md:gap-0">
          <h2 className="w-full md:w-1/5 shrink-0 md:pr-8">Professional Experience</h2>
          <div className="section-content w-full md:w-4/5">
            <div className="job">
              <div className="job-header">HCLTech / SEAL Consulting (Lumen Engagement) | Remote, US</div>
              <div className="job-role">Lead Consultant / SAP Basis Administrator | Sept 2021 – Present</div>
              <ul className="list-disc list-outside ml-5 space-y-2">
                <li>Data Pipeline Development: Designed and optimized data pipelines using Azure Databricks and SQL to ingest, assemble, and analyze large-scale datasets, uncovering enterprise cost-saving opportunities through complex table joins.</li>
                <li>ETL Automation: Engineered Python automation scripts to extract, transform, and load (ETL) unstructured system health metrics, reducing manual data processing time by 20% and ensuring high data reliability.</li>
                <li>Data Quality & Troubleshooting: Executed root cause analysis and resolved complex data inconsistencies within system performance logs, performing periodic data quality reviews to ensure 100% compliance.</li>
                <li>AI & Data Modeling: Applied Generative AI principles and RAG concepts to build experimental data models parsing unstructured technical logs into structured formats for advanced machine learning analytics.</li>
                <li>Cloud Infrastructure: Supported cloud-based data platforms across Microsoft Azure, ensuring secure and scalable architecture aligned with enterprise digital transformation initiatives.</li>
                <li>CI/CD & Collaboration: Built automated data verification workflows and contributed to CI/CD pipelines utilizing Git branching strategies, collaborating across cross-functional teams to deliver reliable data solutions.</li>
              </ul>
            </div>
            <div className="job">
              <div className="job-header">Goodman Telecom Services | Remote, MN</div>
              <div className="job-role">OSP Engineering Associate II | Sept 2019 – Aug 2021</div>
              <ul className="list-disc list-outside ml-5 space-y-2">
                <li>Data Integration: Developed Python scripts utilizing Google Maps APIs to automate the extraction and transformation of large-scale, unstructured geospatial data into precise engineering datasets.</li>
                <li>Data Visualization: Built interactive data visualizations and executive dashboards in Dynamics 365, delivering actionable insights and clear data summaries to both technical and non-technical stakeholders.</li>
                <li>Process Improvement: Researched new data sources and evaluated open-source GIS tools to continually improve data management processes and workflow efficiency</li>
              </ul>
            </div>
            <div className="job">
              <div className="job-header">Preventice Solutions | Rochester, MN</div>
              <div className="job-role">DevOps Engineer | Dec 2018 – May 2019</div>
              <ul className="list-disc list-outside ml-5 space-y-2">
                <li>Infrastructure-as-Code: Orchestrated the migration of legacy systems to Azure, evaluating ARM templates and VMSS to manage scalable cloud infrastructure (comparable to Terraform deployments).</li>
                <li>Pipeline Automation: Refactored PowerShell deployment triggers to automate environment builds, aiding in the verification and testing of data across robust Continuous Delivery (CI/CD) pipelines.</li>
                <li>Database Migrations: Acted as the DevOps Subject Matter Expert for database migrations, ensuring security, integrity, and compliance across complex system architectures.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col md:flex-row gap-4 md:gap-0">
          <h2 className="w-full md:w-1/5 shrink-0 md:pr-8">Technical Projects</h2>
          <div className="section-content w-full md:w-4/5">
            <div className="job">
              <div className="job-header">Cloud-Native Portfolio Platform | Rochester, MN</div>
              <div className="job-role">Role: Full Stack Developer | 2026 – Next.js (React), Docker, Firebase (NoSQL), CI/CD</div>
              <ul className="list-disc list-outside ml-5 space-y-2">
                <li>Full-Stack Development: Built a responsive Single Page Application (SPA) using Next.js and React, integrating a Firebase NoSQL backend to manage dynamic content and user analytics.</li>
                <li>Containerized Deployment: Containerized the application using Docker and Terraform to ensure environment consistency between development and production, adhering to modern DevOps best practices.</li>
                <li>Automated Delivery: Implemented a CI/CD pipeline via GitHub Actions to automate build and deployment processes, ensuring rapid iteration and zero-downtime updates.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col md:flex-row gap-4 md:gap-0">
          <h2 className="w-full md:w-1/5 shrink-0 md:pr-8">Education</h2>
          <div className="section-content w-full md:w-4/5">
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li>B.S., Computer Science (Cum Laude) | Winona State University | May 2018</li>
            </ul>
          </div>
        </section>

        <section className="w-full flex flex-col md:flex-row gap-4 md:gap-0">
          <h2 className="w-full md:w-1/5 shrink-0 md:pr-8">Certifications</h2>
          <div className="section-content w-full md:w-4/5">
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li>Certified GenAI Associate Engineer | July 2025</li>
              <li>Microsoft Certified: Azure for SAP Workloads Specialty (AZ-120) | Nov 2024</li>
              <li>Lean Six Sigma White Belt | July 2024</li>
              <li>Certified Scrum Master | March 2020</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
