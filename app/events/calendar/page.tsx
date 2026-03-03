import Container from '../../components/Container';

export const metadata = {
  title: 'CAFAA | Events Calendar',
  description: 'Calendar placeholder for CAFAA events.',
};

export default function EventsCalendar() {
  return (
    <div className="min-h-screen bg-white">
      <section className="hero section-padding py-20">
        <Container>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Events Calendar</h1>
          <p className="text-lg text-gray-700">Calendar coming soon.</p>
        </Container>
      </section>
      <section className="section-padding py-10 md:py-14">
        <Container>
          <div className="text-gray-700">[Calendar placeholder]</div>
        </Container>
      </section>

      <section className="section-padding bg-gray-50 py-10 md:py-14">
        <Container className="text-center">
          <p className="mb-4">Check back for full schedule soon.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/events/upcoming" className="btn-primary w-full sm:w-auto">Upcoming Events</a>
            <a href="/membership" className="btn-secondary w-full sm:w-auto">Join CAFAA</a>
          </div>
        </Container>
      </section>
    </div>
  );
}
