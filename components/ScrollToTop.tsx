'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    const target = id ? document.getElementById(id) : null;

    if (!target) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }

    // Waits two frames so the Navbar has set --header-height (used by the section's scroll-margin-top)
    let frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: 'instant', block: 'start' });
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
