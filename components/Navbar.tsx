'use client';

import { useRef } from 'react';
import { generalData } from '@/data/cv';
import { navLinks } from '@/data/siteConfig';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useHeaderHeight } from '@/hooks/useHeaderHeight';

export default function Navbar() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  //Gets the height of the header and updates the CSS variable
  useHeaderHeight(headerRef);

  return (
    <header
      ref={headerRef}
      className="w-full backdrop-blur-md bg-background/navbar-transparency font-mono text-primary/navbar-transparency border-b border-tertiary/navbar-border-transparency sticky top-0 z-50"
    >
      {/* HEADER - Title */}
      <div className="w-full py-4 px-6 text-center">
        <Link
          href="/"
          className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 group"
        >
          <span className="text-xl sm:text-2xl tracking-tight group-hover:text-primary transition-colors">
            {generalData.myName}
          </span>
          <span className="hidden sm:inline text-tertiary/navbar-transparency">|</span>
          <span className="text-sm text-tertiary/navbar-transparency tracking-wide">
            {generalData.position}
          </span>
        </Link>
      </div>

      {/* NAVIGATION - Buttons */}
      <nav className="w-full py-3 px-6">
        <ul className="max-w-4xl mx-auto grid grid-cols-3 text-center text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`inline-block py-1 transition-colors border-b ${
                  pathname === link.href
                    ? 'border-tertiary/navbar-transparency hover:text-primary'
                    : 'border-transparent hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}