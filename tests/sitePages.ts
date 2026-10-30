import { navLinks } from '../data/siteConfig';

export type SitePage = {
  path: string;
  label: string;
  /** Expected <title> */
  title: RegExp;
};

// Every public page of the site. Site-wide tests (metadata, overflow, accessibility) run on all of them.
// Pages outside the navbar must be added here explicitly, or no site-wide test will cover them.
export const sitePages: SitePage[] = [
  ...navLinks.map((link) => ({ path: link.href, label: link.label, title: /David Recuero/ })),
  // Linked from the Google Play listing of Pipe Mess: must stay reachable at this exact URL
  { path: '/pipemess/privacy', label: 'Pipe Mess privacy', title: /Pipe Mess/ },
];
