import Link from 'next/link';
import Container from '../../components/Container';

export const metadata = {
  title: 'CAFAA | Diversity, Equity & Inclusion',
  description: 'Our commitment to DEI within the finance profession.',
};

export default function DiversityEquityInclusion() {
  return (
    <div className="min-h-screen bg-white">
      <section className="hero section-padding py-20">
        <Container>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Diversity, Equity & Inclusion</h1>
          <p className="text-lg text-gray-700">Fostering an inclusive finance community.</p>
        </Container>
      </section>

      <section className="section-padding py-10 md:py-14">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Approach</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Promoting equitable access to opportunities.</li>
            <li>Supporting diverse voices in our industry.</li>
            <li>Providing education and resources.</li>
          </ul>
        </Container>
      </section>

      <section className="section-padding bg-gray-50 py-10 md:py-14">
        <Container className="text-center">
          <p className="mb-4">Learn more or get involved.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership" className="btn-primary w-full sm:w-auto">Join CAFAA</Link>
            <Link href="/contact" className="btn-secondary w-full sm:w-auto">Contact Us</Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
