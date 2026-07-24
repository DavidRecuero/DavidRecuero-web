'use client';

import { navLinks } from '@/app/data/data';
import Link from 'next/link';
import { usePathname  } from 'next/navigation';    // Hook to get the current pathname for active link styling

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full backdrop-blur-md bg-slate-200/60 font-mono text-slate-800/60 sticky top-0 z-50">
      {/* HEADER - Title*/}
      <div className="w-full py-4 px-6 text-center">
        <Link href="/" className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 group">
          <span className="text-xl sm:text-2xl tracking-tight group-hover:text-slate-800 transition-colors">
            David Recuero
          </span>
          <span className="hidden sm:inline text-slate-400/60">|</span>
          <span className="text-sm text-slate-400/60 tracking-wide">
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
                    ? 'border-slate-400/60 hover:text-slate-800'
                    : 'border-transparent hover:text-slate-800'
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