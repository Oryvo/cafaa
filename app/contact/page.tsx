import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { siteContent } from '../Content/siteContent';

const content = siteContent['/contact'];

export const metadata: Metadata = {
  title: 'Contact — CAFAA',
  description: content.description,
};

export default function Contact() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>

      {/* Hero */}
      <section className="hero py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
            {content.title}
          </h1>
          <p className="text-base md:text-lg max-w-3xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.88)' }}>
            {content.intro}
          </p>
        </div>
      </section>

      {/* How we can help */}
      {content.sections.slice(0, 1).map((section, index) => (
        <section key={index} className="py-14 md:py-20" style={{ background: 'var(--surface)' }}>
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{section.heading}</h2>
            {section.bullets && section.bullets.length > 0 && (
              <ul className="space-y-3 max-w-3xl">
                {section.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-base md:text-lg" style={{ color: 'var(--muted)' }}>
                    <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: 'var(--primary)' }}>›</span>
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      {/* Contact details */}
      {content.sections.slice(1, 2).map((section, index) => (
        <section key={index} className="py-14 md:py-16" style={{ background: 'var(--background)' }}>
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{section.heading}</h2>
            {section.body && (
              <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>{section.body}</p>
            )}
          </div>
        </section>
      ))}

      {/* Contact Form */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Send Us a Message</h2>
          <div className="rounded-xl p-6 md:p-10 shadow-sm" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTAs */}
      {content.ctas && content.ctas.length > 0 && (
        <section className="py-14 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {content.ctas.map((cta, index) => (
                <Link
                  key={index}
                  href={cta.href}
                  className={
                    cta.variant === 'secondary' ? 'btn-secondary'
                    : cta.variant === 'accent' ? 'btn-accent'
                    : 'btn-primary'
                  }
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
