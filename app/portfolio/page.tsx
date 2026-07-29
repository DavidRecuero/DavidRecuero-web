'use client';

import { useState, useEffect } from 'react';
import { PROJECTS } from '../../data/projects';
import ProjectCard from '../../components/ProjectCard';

type SectionId = 'my-code' | 'commercial';

const portfolioSections: { id: SectionId; label: string }[] = [
  { id: 'my-code', label: 'My Code' },
  { id: 'commercial', label: 'Commercial Products' },
];

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState<SectionId>('my-code');

  const myCodeProjects = PROJECTS.filter((p) => p.category === 'my-code');
  const commercialProjects = PROJECTS.filter((p) => p.category === 'commercial');

  // Scrollspy effect to update the active section based on scroll position
  useEffect(() => {
    const rawHeight = getComputedStyle(document.documentElement)
      .getPropertyValue('--header-height')
      .trim();
    
    const headerHeight = parseInt(rawHeight, 10) || 64;
    
    const topMargin = -(headerHeight + 80);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      { rootMargin: `${topMargin}px 0px -50% 0px` }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Function to scroll to a specific section smoothly
  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen background pb-20">
      
      {/* SECTIONS BAR */}
      <nav 
        className="sticky z-40 w-full bg-background/60 backdrop-blur-md border-y border-tertiary/60 py-1 transition-all top-[var(--header-height,64px)] font-mono text-primary/60"
      >
        <ul className="max-w-4xl mx-auto px-4 flex justify-center gap-12 text-center text-xs">
          {portfolioSections.map((section) => (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`inline-block py-1 transition-colors border-b ${
                  activeSection === section.id
                    ? 'border-tertiary/60 hover:text-primary'
                    : 'border-transparent hover:text-primary'
                }`}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>


      {/* PROJECTS CONTENT */}
      <div className="max-w-5xl mx-auto px-4 mt-4 space-y-4">

        {/* MY CODE PROJECTS */}
        <section 
          id="my-code" 
          className="space-y-6"
          style={{ scrollMarginTop: 'calc(var(--header-height, 64px) + 72px)' }}
        >
          {myCodeProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      
        {/* COMMERCIAL PROJECTS */}
        <section 
          id="commercial" 
          className="space-y-6"
          style={{ scrollMarginTop: 'calc(var(--header-height, 64px) + 72px)' }}
        >
          {commercialProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      
      </div>
    </main>
  );
}