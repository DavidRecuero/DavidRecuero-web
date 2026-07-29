'use client';

import { useEffect, useRef } from 'react';
import { navLinks } from '@/data/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  //Gets the height of the header and updates the CSS variable
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateHeight = () => {
      const height = header.getBoundingClientRect().height;
      document.documentElement.style.setProperty('--header-height', `${height}px`);
    };

    updateHeight();

    const observer = new ResizeObserver(() => {
      updateHeight();
    });

    observer.observe(header);

    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className="w-full backdrop-blur-md bg-background/60 font-mono text-primary/60 sticky top-0 z-50"
    >
      {/* HEADER - Title */}
      <div className="w-full py-4 px-6 text-center">
        <Link
          href="/"
          className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 group"
        >
          <span className="text-xl sm:text-2xl tracking-tight group-hover:text-primary transition-colors">
            David Recuero Redrado
          </span>
          <span className="hidden sm:inline text-tertiary/60">|</span>
          <span className="text-sm text-tertiary/60 tracking-wide">
            Software Developer
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
                    ? 'border-tertiary/60 hover:text-primary'
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