import { Metadata } from 'next';
import Link from 'next/link';
import { siteContent } from '../Content/siteContent';

const content = siteContent['/resources'];

export const metadata: Metadata = {
  title: 'Resources - CAFAA',
  description: content.description,
};

export default function Resources() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero section-padding py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">{content.title}</h1>
          <p className="text-xl text-accent">{content.intro}</p>
        </div>
      </section>

      {/* Content Sections */}
      {content.sections.map((section, index) => (
        <section
          key={index}
          className={`section-padding ${index % 2 === 1 ? 'bg-gray-50' : ''}`}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8">{section.heading}</h2>

            {section.body && (
              <p className="text-lg text-gray-700 mb-6 max-w-3xl">{section.body}</p>
            )}

            {section.bullets && section.bullets.length > 0 && (
              <ul className="space-y-3 text-lg text-gray-700 mb-6 max-w-3xl">
                {section.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex gap-3">
                    <span className="text-primary font-bold flex-shrink-0">›</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      {/* CTAs */}
      {content.ctas && content.ctas.length > 0 && (
        <section className="section-padding bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {content.ctas.map((cta, index) => (
                <Link
                  key={index}
                  href={cta.href}
                  className={`px-8 py-3 rounded-lg font-semibold text-center transition ${
                    cta.variant === 'secondary'
                      ? 'btn-secondary'
                      : cta.variant === 'accent'
                      ? 'btn-accent'
                      : 'btn-primary'
                  }`}
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
