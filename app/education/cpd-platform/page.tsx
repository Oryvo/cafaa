import Link from 'next/link';
import Container from '../../components/Container';

export const metadata = {
  title: 'CAFAA | CPD Platform',
  description: 'Continual professional development platform details.',
};

export default function CPDPlatform() {
  return (
    <div className="min-h-screen bg-white">
      <section className="hero section-padding py-20">
        <Container>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">CPD Platform</h1>
          <p className="text-lg text-gray-700">Track and complete CPD requirements online.</p>
        </Container>
      </section>

      <section className="section-padding py-10 md:py-14">
        <Container>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Log activities and earn points.</li>
            <li>Access resources and webinars.</li>
          </ul>
        </Container>
      </section>

      <section className="section-padding bg-gray-50 py-10 md:py-14">
        <Container className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/education" className="btn-primary w-full sm:w-auto">Back to Education</Link>
            <Link href="/membership" className="btn-secondary w-full sm:w-auto">Join CAFAA</Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
