import { Metadata } from 'next';
import Link from 'next/link';
import Container from '../../components/Container';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/about/young-professionals'];

export const metadata: Metadata = {
  title: 'Young Professionals - CAFAA',
  description: content.description,
};

export default function YoungProfessionals() {
  return (
    <div className="min-h-screen bg-white">
      <section className="hero section-padding py-20">
        <Container>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{content.title}</h1>
          <p className="text-lg text-gray-700">{content.intro}</p>
        </Container>
      </section>

      {content.sections.map((section, index) => (
        <section key={index} className={`section-padding py-10 md:py-14 ${index % 2 === 1 ? 'bg-gray-50' : ''}`}>
          <Container>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">{section.heading}</h2>
            {section.body && <p className="text-gray-700 mb-4">{section.body}</p>}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="space-y-3 text-gray-700">
                {section.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-primary font-bold flex-shrink-0">›</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </Container>
        </section>
      ))}

      {content.ctas && content.ctas.length > 0 && (
        <section className="section-padding bg-gray-50 py-10 md:py-14">
          <Container className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {content.ctas.map((cta, index) => (
                <Link key={index} href={cta.href} className={`${cta.variant === 'secondary' ? 'btn-secondary' : 'btn-primary'} w-full sm:w-auto`}>{cta.label}</Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </div>
  );
}
