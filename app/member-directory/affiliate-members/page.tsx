import Container from '../../components/Container';

export const metadata = {
  title: 'CAFAA | Affiliate Members Directory',
  description: 'List of affiliate members of CAFAA.',
};

export default function AffiliateMembers() {
  return (
    <div className="min-h-screen bg-white">
      <section className="hero section-padding py-20">
        <Container>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Affiliate Members</h1>
          <p className="text-lg text-gray-700">Directory of affiliate members.</p>
        </Container>
      </section>
      <section className="section-padding py-10 md:py-14">
        <Container>
          <p className="text-gray-700">[Affiliate members list placeholder]</p>
        </Container>
      </section>
      <section className="section-padding bg-gray-50 py-10 md:py-14">
        <Container className="text-center">
          <p className="mb-4">Join as an affiliate member.</p>
          <a href="/membership" className="btn-primary w-full sm:w-auto">Join CAFAA</a>
        </Container>
      </section>
    </div>
  );
}
