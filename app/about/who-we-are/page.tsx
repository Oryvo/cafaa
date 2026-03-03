import Link from 'next/link';
import Container from '../../components/Container';

export const metadata = {
  title: 'CAFAA | Who We Are',
  description: 'Learn about CAFAA and our role in the finance industry.',
};

export default function WhoWeAre() {
  return (
    <div className="min-h-screen bg-white">
      <section className="hero section-padding py-20">
        <Container>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Who We Are</h1>
          <p className="text-lg text-gray-300">A professional association representing commercial and asset finance advisers.</p>
        </Container>
      </section>

      <section className="section-padding py-10 md:py-14">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Identity</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Founded to support finance professionals.</li>
            <li>Committed to ethics and excellence.</li>
            <li>National representation across Aotearoa.</li>
          </ul>
        </Container>
      </section>

      <section className="section-padding bg-gray-50 py-10 md:py-14">
        <Container className="text-center">
          <p className="mb-4">Join our community or get in touch for more information.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership" className="btn-primary w-full sm:w-auto">Join CAFAA</Link>
            <Link href="/contact" className="btn-secondary w-full sm:w-auto">Contact Us</Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
