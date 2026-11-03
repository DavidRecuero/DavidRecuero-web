import { Fragment } from 'react';
import type { LegalDocument } from '@/data/legalDocument';

// Turns URLs and email addresses inside a text into links.
const LINK_PATTERN = /(https?:\/\/[^\s)]+|[\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g;

function LinkedText({ text }: { text: string }) {
  const parts = text.split(LINK_PATTERN);
  return (
    <>
      {parts.map((part, i) => {
        if (i % 2 === 0) return <Fragment key={i}>{part}</Fragment>;
        const href = part.includes('@') ? `mailto:${part}` : part;
        return (
          <a
            key={i}
            href={href}
            className="text-accent underline underline-offset-2 break-all"
            target={part.includes('@') ? undefined : '_blank'}
            rel={part.includes('@') ? undefined : 'noopener noreferrer'}
          >
            {part}
          </a>
        );
      })}
    </>
  );
}

/**
 * A legal page in several languages (Pipe Mess privacy policy, account deletion):
 * a language selector, then one <article id={lang} lang={lang}> per language.
 * Google Play links to these pages, so the language anchors (#en, #es, #ca) are part of their URL.
 */
export default function LegalDocuments({ documents }: { documents: LegalDocument[] }) {
  return (
    <main className="min-h-screen background text-primary px-6 sm:px-12 pt-6 md:pt-12 pb-32 max-w-3xl mx-auto w-full">
      {/* Language selector */}
      <nav aria-label="Language" className="font-mono text-sm text-secondary mb-10 flex gap-4 justify-center">
        {documents.map((doc) => (
          <a key={doc.lang} href={`#${doc.lang}`} className="hover:text-primary underline-offset-4 hover:underline">
            {doc.languageName}
          </a>
        ))}
      </nav>

      {documents.map((doc) => (
        <article
          key={doc.lang}
          id={doc.lang}
          lang={doc.lang}
          className="mb-20 pt-4"
          style={{ scrollMarginTop: 'calc(var(--header-height, 64px) + 16px)' }}
        >
          <h1 className="font-mono text-2xl sm:text-3xl tracking-tight mb-2">{doc.title}</h1>
          <p className="font-mono text-xs text-muted mb-8">{doc.lastUpdated}</p>

          {doc.intro.map((p, i) => (
            <p key={i} className="text-secondary leading-relaxed mb-4">
              <LinkedText text={p} />
            </p>
          ))}

          {doc.sections.map((section) => (
            <section key={section.heading} className="mt-8">
              <h2 className="font-mono text-base sm:text-lg text-primary mb-3">{section.heading}</h2>
              {section.bullets && (
                <ul className="list-disc pl-6 space-y-1 text-secondary leading-relaxed mb-4">
                  {section.bullets.map((b, i) => (
                    <li key={i}>
                      <LinkedText text={b} />
                    </li>
                  ))}
                </ul>
              )}
              {section.paragraphs?.map((p, i) => (
                <p key={i} className="text-secondary leading-relaxed mb-4">
                  <LinkedText text={p} />
                </p>
              ))}
            </section>
          ))}
        </article>
      ))}
    </main>
  );
}
