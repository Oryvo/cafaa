import { Metadata } from 'next';
import Link from 'next/link';
import { siteContent } from '../Content/siteContent';

const content = siteContent['/membership'];

export const metadata: Metadata = {
  title: 'Membership - CAFAA',
  description: content.description,
};

export default function Membership() {
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
            {index === 0 && (
              <h2 className="text-4xl font-bold text-center mb-12">{section.heading}</h2>
            )}
            {index !== 0 && (
              <h2 className="text-4xl font-bold mb-8">{section.heading}</h2>
            )}

            {section.body && (
              <p className="text-lg text-gray-700 mb-6 max-w-3xl">{section.body}</p>
            )}

            {section.bullets && section.bullets.length > 0 && (
              <div className={index === 0 ? 'grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 max-w-3xl' : ''}>
                <ul className={index === 0 ? 'space-y-3' : 'space-y-3 text-lg text-gray-700 mb-6 max-w-3xl'}>
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex gap-3">
                      <span className="text-primary font-bold flex-shrink-0">›</span>
                      <span className={index === 0 ? 'text-gray-700' : ''}>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* CTAs */}
      {content.ctas && content.ctas.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {content.ctas.map((cta, index) => (
                <Link
                  key={index}
                  href={cta.href}
                  className={`px-8 py-3 rounded-lg font-semibold text-center transition ${
                    cta.variant === 'secondary'
                      ? 'btn-secondary'
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
