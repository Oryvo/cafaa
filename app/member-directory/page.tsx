import { Metadata } from 'next';
import Link from 'next/link';
import Container from '../components/Container';
import { siteContent } from '../Content/siteContent';

const content = siteContent['/member-directory'];

export const metadata: Metadata = {
  title: 'Member Directory - CAFAA',
  description: content.description,
};

export default function MemberDirectory() {
  return (
    <div className="min-h-screen bg-white">
      <section className="hero section-padding py-20">
        <Container>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{content.title}</h1>
          <p className="text-lg text-gray-700">{content.intro}</p>
        </Container>
      </section>

      <section className="section-padding py-10 md:py-14">
        <Container>
          <p className="text-gray-700">[Directory list placeholder with filters]</p>
        </Container>
      </section>

      <section className="section-padding bg-gray-50 py-10 md:py-14">
        <Container className="text-center">
          <p className="mb-4">Looking for specific members?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership" className="btn-primary w-full sm:w-auto">Join CAFAA</Link>
            <Link href="/contact" className="btn-secondary w-full sm:w-auto">Contact Us</Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
