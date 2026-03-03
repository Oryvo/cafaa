import Link from 'next/link';
import Container from '../../components/Container';

export const metadata = {
  title: 'CAFAA | Compliance Requirements',
  description: 'Standards and compliance obligations for members.',
};

export default function ComplianceRequirements() {
  return (
    <div className="min-h-screen bg-white">
      <section className="hero section-padding py-20">
        <Container>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Compliance Requirements</h1>
          <p className="text-lg text-gray-700">Member obligations for ethical practice.</p>
        </Container>
      </section>

      <section className="section-padding py-10 md:py-14">
        <Container>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Adhere to the code of ethics.</li>
            <li>Maintain accurate records.</li>
            <li>Complete required continuing education.</li>
          </ul>
        </Container>
      </section>

      <section className="section-padding bg-gray-50 py-10 md:py-14">
        <Container className="text-center">
          <p className="mb-4">Questions about compliance?</p>
          <Link href="/contact" className="btn-secondary w-full sm:w-auto">Contact Us</Link>
        </Container>
      </section>
    </div>
  );
}
