import Container from '../../components/Container';

export const metadata = {
  title: 'CAFAA | Resource Exchange',
  description: 'Submit or find shared industry resources.',
};

export default function ResourceExchange() {
  return (
    <div className="min-h-screen bg-white">
      <section className="hero section-padding py-20">
        <Container>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Resource Exchange</h1>
          <p className="text-lg text-gray-700">Share or search practical resources.</p>
        </Container>
      </section>
      <section className="section-padding py-10 md:py-14">
        <Container>
          <form className="space-y-6">
            <div>
              <label className="block mb-1 font-medium">Title</label>
              <input type="text" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Category</label>
              <input type="text" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Link / File</label>
              <input type="text" className="w-full border rounded px-3 py-2" placeholder="URL or upload placeholder" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Notes</label>
              <textarea className="w-full border rounded px-3 py-2" rows={3}></textarea>
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto">Submit Resource</button>
          </form>
        </Container>
      </section>
    </div>
  );
}
