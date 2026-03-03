import Link from 'next/link';
import Container from '../../components/Container';

export const metadata = {
  title: 'CAFAA | Constitution',
  description: 'Access the CAFAA constitution document.',
};

export default function Constitution() {
  return (
    <div className="min-h-screen bg-white">
      <section className="hero section-padding py-20">
        <Container>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Constitution</h1>
          <p className="text-lg text-gray-700">Our governing document and bylaws.</p>
        </Container>
      </section>
      <section className="section-padding py-10 md:py-14">
        <Container>
          <p className="text-gray-700">[Link or summary of constitution goes here]</p>
        </Container>
      </section>

      <section className="section-padding bg-gray-50 py-10 md:py-14">
        <Container className="text-center">
          <p className="mb-4">Need more governance information?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/membership" className="btn-primary w-full sm:w-auto">Join CAFAA</a>
            <a href="/contact" className="btn-secondary w-full sm:w-auto">Contact Us</a>
          </div>
        </Container>
      </section>
    </div>
  );
}
