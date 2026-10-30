'use client';

import { SectionId } from '@/types/project';
import { portfolioSections } from '@/data/projects';

interface PortfolioNavProps {
  activeSection: SectionId;
  onSelectSection: (id: SectionId) => void;
}

export default function PortfolioNav({ activeSection, onSelectSection }: PortfolioNavProps) {
  return (
    <nav aria-label="Portfolio sections" className="sticky z-40 w-full bg-background/navbar-transparency backdrop-blur-md border-b border-tertiary/navbar-border-transparency py-2 transition-all top-[var(--header-height,64px)] font-mono text-secondary shadow-sm">
      <ul className="max-w-4xl mx-auto px-4 flex justify-center gap-12 text-center text-xs">
        {portfolioSections.map((section) => (
          <li key={section.id}>
            <button
              type="button"
              onClick={() => onSelectSection(section.id)}
              aria-current={activeSection === section.id ? 'true' : undefined}
              className={`inline-block py-1 transition-colors border-b cursor-pointer ${
                activeSection === section.id
                    ? 'border-tertiary/navbar-transparency hover:text-primary'
                    : 'border-transparent hover:text-primary'
              }`}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}