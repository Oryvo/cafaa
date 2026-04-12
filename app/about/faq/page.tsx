import { Metadata } from 'next';
import Link from 'next/link';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/about/faq'];

export const metadata: Metadata = {
  title: 'FAQ — CAFAA',
  description: content.description,
};

export default function FAQ() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      {/* Hero */}
      <section className="hero py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">{content.title}</h1>
          <p className="text-base md:text-lg max-w-3xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>{content.intro}</p>
        </div>
      </section>

      {/* Q&A sections */}
      {content.sections.map((section, index) => (
        <section
          key={index}
          className="py-12 md:py-16"
          style={{ background: index % 2 === 1 ? 'var(--background)' : 'var(--surface)' }}
        >
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">{section.heading}</h2>
            {section.body && (
              <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>{section.body}</p>
            )}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="space-y-3">
                {section.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex gap-3" style={{ color: 'var(--muted)' }}>
                    <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: 'var(--primary)' }}>›</span>
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      {/* CTAs */}
      {content.ctas && content.ctas.length > 0 && (
        <section className="py-14" style={{ background: 'var(--background)' }}>
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {content.ctas.map((cta, index) => (
                <Link
                  key={index}
                  href={cta.href}
                  className={cta.variant === 'secondary' ? 'btn-secondary' : 'btn-primary'}
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
