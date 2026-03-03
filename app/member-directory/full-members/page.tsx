import Container from '../../components/Container';

export const metadata = {
  title: 'CAFAA | Full Members Directory',
  description: 'List of full members of CAFAA.',
};

export default function FullMembers() {
  return (
    <div className="min-h-screen bg-white">
      <section className="hero section-padding py-20">
        <Container>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Full Members</h1>
          <p className="text-lg text-gray-700">Directory of full voting members.</p>
        </Container>
      </section>
      <section className="section-padding py-10 md:py-14">
        <Container>
          <p className="text-gray-700">[Full members list placeholder]</p>
        </Container>
      </section>
      <section className="section-padding bg-gray-50 py-10 md:py-14">
        <Container className="text-center">
          <p className="mb-4">Interested in joining as a full member?</p>
          <a href="/membership" className="btn-primary w-full sm:w-auto">Join CAFAA</a>
        </Container>
      </section>
    </div>
  );
}
