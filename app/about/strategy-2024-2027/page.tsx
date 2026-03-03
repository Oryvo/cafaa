import Link from 'next/link';
import Container from '../../components/Container';

export const metadata = {
  title: 'CAFAA | Strategy 2024–2027',
  description: 'Our strategic plan guiding growth and impact from 2024 to 2027.',
};

export default function Strategy2024() {
  return (
    <div className="min-h-screen bg-white">
      <section className="hero section-padding py-20">
        <Container>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Strategy 2024–2027</h1>
          <p className="text-lg text-gray-700">Key goals for the coming years.</p>
        </Container>
      </section>

      <section className="section-padding py-10 md:py-14">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Strategic Themes</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Professional development & education.</li>
            <li>Advocacy and industry leadership.</li>
            <li>Member engagement and growth.</li>
          </ul>
        </Container>
      </section>

      <section className="section-padding bg-gray-50 py-10 md:py-14">
        <Container className="text-center">
          <p className="mb-4">Support our strategy by joining or contacting us.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership" className="btn-primary w-full sm:w-auto">Join CAFAA</Link>
            <Link href="/contact" className="btn-secondary w-full sm:w-auto">Contact Us</Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
