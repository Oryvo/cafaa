import Link from 'next/link';
import Container from '../../components/Container';

export const metadata = {
  title: 'CAFAA | CPD Policy',
  description: 'Details of our continuing professional development policy.',
};

export default function CPDPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <section className="hero section-padding py-20">
        <Container>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">CPD Policy</h1>
          <p className="text-lg text-gray-700">Our standards for ongoing education.</p>
        </Container>
      </section>
      <section className="section-padding py-10 md:py-14">
        <Container>
          <p className="text-gray-700">[Policy description or links]</p>
        </Container>
      </section>

      <section className="section-padding bg-gray-50 py-10 md:py-14">
        <Container className="text-center">
          <p className="mb-4">Questions about CPD?</p>
          <a href="/contact" className="btn-secondary w-full sm:w-auto">Contact Us</a>
        </Container>
      </section>
    </div>
  );
}
