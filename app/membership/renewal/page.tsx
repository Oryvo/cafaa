import Container from '../../components/Container';

export const metadata = {
  title: 'CAFAA | Membership Renewal',
  description: 'Renew your CAFAA membership quickly and easily.',
};

export default function Renewal() {
  return (
    <div className="min-h-screen bg-white">
      <section className="hero section-padding py-20">
        <Container>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Membership Renewal</h1>
          <p className="text-lg text-gray-700">Please complete the form to renew.</p>
        </Container>
      </section>

      <section className="section-padding py-10 md:py-14">
        <Container>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input type="text" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input type="email" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Member ID</label>
              <input type="text" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Company</label>
              <input type="text" className="w-full border rounded px-3 py-2" />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1 font-medium">Message</label>
              <textarea className="w-full border rounded px-3 py-2" rows={4}></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button type="submit" className="btn-primary w-full sm:w-auto">Submit Renewal</button>
            </div>
          </form>
        </Container>
      </section>

      <section className="section-padding bg-gray-50 py-10 md:py-14">
        <Container className="text-center">
          <p className="mb-4">Questions about renewal?</p>
          <a href="/contact" className="btn-secondary w-full sm:w-auto">Contact Us</a>
        </Container>
      </section>
    </div>
  );
}
