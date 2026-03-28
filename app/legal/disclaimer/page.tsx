import { Metadata } from 'next';
import Container from '../../components/Container';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/legal/disclaimer'];

export const metadata: Metadata = {
  title: 'Disclaimer - CAFAA',
  description: content.description,
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white">
      <Container className="py-20">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">{content.title}</h1>
        <p className="text-gray-700">{content.intro}</p>
      </Container>
      <section className="section-padding bg-gray-50 py-10 md:py-14">
        <Container className="text-center">
          <p className="mb-4">Questions about this disclaimer?</p>
          <a href="/contact" className="btn-secondary w-full sm:w-auto">Contact Us</a>
        </Container>
      </section>
    </div>
  );
}
