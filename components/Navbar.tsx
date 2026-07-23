'use client';

import Link from 'next/link';
import { usePathname  } from 'next/navigation';    // Hook to get the current pathname for active link styling

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full backdrop-blur-md bg-slate-200/60 text-slate-800/60 sticky top-0 z-50">
      {/* HEADER - Title*/}
      <div className="w-full py-4 px-6 text-center">
        <Link href="/" className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 group">
          <span className="text-xl sm:text-2xl font-mono tracking-tight group-hover:text-slate-800 transition-colors">
            David Recuero
          </span>
          <span className="hidden sm:inline text-slate-400/60">|</span>
          <span className="text-sm text-slate-400/60 font-mono tracking-wide">
            Software Developer
          </span>
        </Link>
      </div>

      {/* NAVIGATION - Buttons */}
      <nav className="w-full py-3 px-6">
        <ul className="max-w-4xl mx-auto grid grid-cols-3 text-center text-sm font-mono">
          <li>
            <Link href="/projects" 
            className={`inline-block py-1 transition-colors border-b ${
                  pathname === '/projects'
                    ? 'border-slate-400/60 hover:text-slate-800'
                    : 'border-transparent hover:text-slate-800'
            }`}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/" 
            className={`inline-block py-1 transition-colors border-b ${
                  pathname === '/'
                    ? 'border-slate-400/60 hover:text-slate-800'
                    : 'border-transparent hover:text-slate-800'
            }`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/contact" 
            className={`inline-block py-1 transition-colors border-b ${
                  pathname === '/contact'
                    ? 'border-slate-400/60 hover:text-slate-800'
                    : 'border-transparent hover:text-slate-800'
            }`}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}