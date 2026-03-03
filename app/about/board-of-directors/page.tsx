import Link from 'next/link';
import Container from '../../components/Container';

export const metadata = {
  title: 'CAFAA | Board of Directors',
  description: 'Meet the members of the CAFAA board.',
};

export default function BoardOfDirectors() {
  return (
    <div className="min-h-screen bg-white">
      <section className="hero section-padding py-20">
        <Container>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Board of Directors</h1>
          <p className="text-lg text-gray-700">Our governing board drives the organisation forward.</p>
        </Container>
      </section>

      <section className="section-padding py-10 md:py-14">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Leadership Team</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Chairperson and executive officers.</li>
            <li>Experienced finance professionals.</li>
            <li>Guiding strategy and governance.</li>
          </ul>
        </Container>
      </section>

      <section className="section-padding bg-gray-50 py-10 md:py-14">
        <Container className="text-center">
          <p className="mb-4">Interested in governance? Get involved.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership" className="btn-primary w-full sm:w-auto">Join CAFAA</Link>
            <Link href="/contact" className="btn-secondary w-full sm:w-auto">Contact Us</Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
