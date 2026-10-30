import type { Metadata } from 'next';
import { Fragment } from 'react';
import { privacyPolicies } from '@/data/pipemessPrivacy';

export const metadata: Metadata = {
  title: 'Pipe Mess – Privacy Policy',
  description: 'Privacy policy for the Pipe Mess mobile game.',
};

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

export default function PipeMessPrivacyPage() {
  return (
    <main className="min-h-screen background text-primary px-6 sm:px-12 pt-6 md:pt-12 pb-32 max-w-3xl mx-auto w-full">
      {/* Language selector */}
      <nav className="font-mono text-sm text-secondary mb-10 flex gap-4 justify-center">
        {privacyPolicies.map((policy) => (
          <a key={policy.lang} href={`#${policy.lang}`} className="hover:text-primary underline-offset-4 hover:underline">
            {policy.languageName}
          </a>
        ))}
      </nav>

      {privacyPolicies.map((policy) => (
        <article
          key={policy.lang}
          id={policy.lang}
          lang={policy.lang}
          className="mb-20 pt-4"
          style={{ scrollMarginTop: 'calc(var(--header-height, 64px) + 16px)' }}
        >
          <h1 className="font-mono text-2xl sm:text-3xl tracking-tight mb-2">{policy.title}</h1>
          <p className="font-mono text-xs text-muted mb-8">{policy.lastUpdated}</p>

          {policy.intro.map((p, i) => (
            <p key={i} className="text-secondary leading-relaxed mb-4">
              <LinkedText text={p} />
            </p>
          ))}

          {policy.sections.map((section) => (
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
