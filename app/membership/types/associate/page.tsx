import Container from '../../../components/Container';

export const metadata = {
  title: 'CAFAA | Associate Membership',
  description: 'Associate category for non-practising or corporate members.',
};

export default function AssociateMembership() {
  return (
    <div className="min-h-screen bg-white">
      <section className="hero section-padding py-20">
        <Container>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Associate Membership</h1>
          <p className="text-lg text-gray-700">Suited to organisations or individuals not actively practising.</p>
        </Container>
      </section>

      <section className="section-padding py-10 md:py-14">
        <Container>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Access to resources and events.</li>
            <li>No voting rights.</li>
          </ul>
        </Container>
      </section>

      <section className="section-padding bg-gray-50 py-10 md:py-14">
        <Container className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/membership" className="btn-primary w-full sm:w-auto">Apply Now</a>
            <a href="/contact" className="btn-secondary w-full sm:w-auto">Contact Us</a>
          </div>
        </Container>
      </section>
    </div>
  );
}
