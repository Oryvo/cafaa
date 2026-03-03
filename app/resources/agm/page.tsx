import Link from 'next/link';
import Container from '../../components/Container';

export const metadata = {
  title: 'CAFAA | AGM',
  description: 'Information about our annual general meeting.',
};

export default function AGM() {
  return (
    <div className="min-h-screen bg-white">
      <section className="hero section-padding py-20">
        <Container>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Annual General Meeting</h1>
          <p className="text-lg text-gray-700">Details of the upcoming AGM.</p>
        </Container>
      </section>
      <section className="section-padding py-10 md:py-14">
        <Container>
          <p className="text-gray-700">[AGM dates, agenda, minutes link etc.]</p>
        </Container>
      </section>

      <section className="section-padding bg-gray-50 py-10 md:py-14">
        <Container className="text-center">
          <p className="mb-4">Attend or learn more at our AGM.</p>
          <a href="/contact" className="btn-secondary w-full sm:w-auto">Contact Us</a>
        </Container>
      </section>
    </div>
  );
}
