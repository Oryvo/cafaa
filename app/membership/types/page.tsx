import Link from 'next/link';
import Container from '../../components/Container';

export const metadata = {
  title: 'CAFAA | Membership Types',
  description: 'Explore the different categories of CAFAA membership.',
};

export default function MembershipTypes() {
  return (
    <div className="min-h-screen bg-white">
      <section className="hero section-padding py-20">
        <Container>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Membership Types</h1>
          <p className="text-lg text-gray-700">Choose the category that fits your practice.</p>
        </Container>
      </section>

      <section className="section-padding py-10 md:py-14">
        <Container>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Full Members</li>
            <li>Associate Members</li>
            <li>Affiliate Members</li>
            <li>Provisional Members</li>
          </ul>
        </Container>
      </section>

      <section className="section-padding bg-gray-50 py-10 md:py-14">
        <Container className="text-center">
          <p className="mb-4">Ready to join? Select your membership type.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership" className="btn-primary w-full sm:w-auto">Apply Now</Link>
            <Link href="/contact" className="btn-secondary w-full sm:w-auto">Contact Us</Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
