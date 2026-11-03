// Shape of the multi-language legal pages of Pipe Mess (privacy policy, account deletion).
// One document per language; the page shows all of them, one after the other, with a language selector.

export type LegalLang = 'en' | 'es' | 'ca';

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LegalDocument {
  lang: LegalLang;
  languageName: string;
  title: string;
  lastUpdated: string;
  intro: string[];
  sections: LegalSection[];
}

/** Every URL written in a document's texts (intro, paragraphs and bullets). */
export function urlsInDocument(doc: LegalDocument): string[] {
  const texts = [
    ...doc.intro,
    ...doc.sections.flatMap((section) => [...(section.paragraphs ?? []), ...(section.bullets ?? [])]),
  ];
  return [...new Set(texts.flatMap((text) => text.match(/https?:\/\/[^\s)]+/g) ?? []))];
}
