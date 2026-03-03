import Link from 'next/link';
import Container from '../../components/Container';

export const metadata = {
  title: 'CAFAA | Young Professionals',
  description: 'Resources and events for early-career finance advisers.',
};

export default function YoungProfessionals() {
  return (
    <div className="min-h-screen bg-white">
      <section className="hero section-padding py-20">
        <Container>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Young Professionals</h1>
          <p className="text-lg text-gray-700">Supporting the next generation in finance.</p>
        </Container>
      </section>

      <section className="section-padding py-10 md:py-14">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Mentoring and peer networks.</li>
            <li>Access to education and training.</li>
            <li>Opportunities at events and conferences.</li>
          </ul>
        </Container>
      </section>

      <section className="section-padding bg-gray-50 py-10 md:py-14">
        <Container className="text-center">
          <p className="mb-4">Get started as a finance professional.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership" className="btn-primary w-full sm:w-auto">Join CAFAA</Link>
            <Link href="/contact" className="btn-secondary w-full sm:w-auto">Contact Us</Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
