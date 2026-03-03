import Container from '../../components/Container';

export const metadata = {
  title: 'CAFAA | Associate Members Directory',
  description: 'List of associate members of CAFAA.',
};

export default function AssociateMembers() {
  return (
    <div className="min-h-screen bg-white">
      <section className="hero section-padding py-20">
        <Container>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Associate Members</h1>
          <p className="text-lg text-gray-700">Directory of associate members.</p>
        </Container>
      </section>
      <section className="section-padding py-10 md:py-14">
        <Container>
          <p className="text-gray-700">[Associate members list placeholder]</p>
        </Container>
      </section>
      <section className="section-padding bg-gray-50 py-10 md:py-14">
        <Container className="text-center">
          <p className="mb-4">Become an associate member today.</p>
          <a href="/membership" className="btn-primary w-full sm:w-auto">Join CAFAA</a>
        </Container>
      </section>
    </div>
  );
}
