import Container from '../../components/Container';
import Link from 'next/link';

export const metadata = {
  title: 'CAFAA | Upcoming Events',
  description: 'View upcoming CAFAA events and sessions.',
};

export default function UpcomingEvents() {
  return (
    <div className="min-h-screen bg-white">
      <section className="hero section-padding py-20">
        <Container>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Upcoming Events</h1>
          <p className="text-lg text-gray-700">Stay informed about our next events.</p>
        </Container>
      </section>
      <section className="section-padding py-10 md:py-14">
        <Container>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Annual Conference 2026</li>
            <li>Monthly Professional Webinars</li>
          </ul>
        </Container>
      </section>
      <section className="section-padding bg-gray-50 py-10 md:py-14">
        <Container className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events" className="btn-primary w-full sm:w-auto">All Events</Link>
            <Link href="/membership" className="btn-secondary w-full sm:w-auto">Join CAFAA</Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
