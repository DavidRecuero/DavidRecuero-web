'use client';
 
import { useState, useEffect, useMemo } from 'react';
//Data imports
import { projects, portfolioSections } from '@/data/projects';
//Types imports
import { SectionId } from '@/types/project';
//Components imports
import ProjectCard from '@/components/ProjectCard';
import PortfolioNav from '@/components/PortfolioNav';

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState<SectionId>(portfolioSections[0].id);

  //Prefilter projects by section to avoid filtering on every render
  const projectsBySection = useMemo(() => {
    return portfolioSections.map(section => ({
      ...section,
      projects: projects.filter((p) => p.category === section.id)
    }));
  }, []);

 useEffect(() => {
    let frameId = 0;

    const updateActiveSection = () => {
      const threshold = window.innerHeight / 2;

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1;

      let current = portfolioSections[0].id;
      if (atBottom) {
        current = portfolioSections[portfolioSections.length - 1].id;
      } else {
        for (const section of portfolioSections) {
          const element = document.getElementById(section.id);
          if (element && element.getBoundingClientRect().top <= threshold) {
            current = section.id;
          }
        }
      }

      setActiveSection(current);
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, []);

  // Function to scroll to a specific section smoothly
  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen background pb-64">
      
      {/* SECTIONS BAR */}
      <PortfolioNav activeSection={activeSection} onSelectSection={scrollToSection} />

      {/* PROJECTS CONTENT */}
      <div className="max-w-screen-2xl mx-auto px-4 mt-8 space-y-16">
          {projectsBySection.map((section) => (
              <section 
                key={section.id}
                id={section.id} 
                className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8"
                style={{ scrollMarginTop: 'calc(var(--header-height, 64px) + 80px)' }}
              >
                {section.projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </section>
          ))}
        </div>
      </main>
  );
}