import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events - CAFAA',
  description: 'CAFAA events, conferences, webinars, and networking opportunities for commercial and asset finance advisers.',
};

export default function Events() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="hero section-padding py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Events & Conferences</h1>
          <p className="text-xl text-accent">
            Connect, learn, and network with peers across the industry
          </p>
        </div>
      </section>

      {/* Featured Events */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card border-l-4 border-primary">
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-6">
                <div>
                  <div className="text-sm text-primary font-bold uppercase mb-2">Conference</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">CAFAA Annual Conference 2026</h3>
                  <p className="text-gray-700 mb-4">
                    Our flagship annual conference brings together industry leaders, practitioners, and innovators for two days of premium content, networking, and professional development. Features keynote speakers, panel discussions, and industry workshops.
                  </p>
                  <div className="space-y-2 text-gray-600 mb-6">
                    <p>📅 <strong>Dates:</strong> May 20-21, 2026</p>
                    <p>📍 <strong>Location:</strong> Wellington Convention Centre, Wellington</p>
                    <p>👥 <strong>Expected Attendance:</strong> 500+ attendees</p>
                  </div>
                  <button className="btn-primary">Register Now</button>
                </div>
              </div>
            </div>

            <div className="card border-l-4 border-accent">
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-6">
                <div>
                  <div className="text-sm text-accent font-bold uppercase mb-2">Webinar Series</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Professional Development Webinars</h3>
                  <p className="text-gray-700 mb-4">
                    Monthly webinars covering current industry topics, regulatory updates, market trends, and best practices. Delivered online for maximum accessibility across Aotearoa.
                  </p>
                  <div className="space-y-2 text-gray-600 mb-6">
                    <p>📅 <strong>Frequency:</strong> Second Thursday of each month</p>
                    <p>🕐 <strong>Time:</strong> 12:00 PM - 1:00 PM NZDT</p>
                    <p>💻 <strong>Format:</strong> Online via Zoom</p>
                  </div>
                  <button className="btn-primary">View Schedule</button>
                </div>
              </div>
            </div>

            <div className="card border-l-4 border-secondary">
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-6">
                <div>
                  <div className="text-sm text-secondary font-bold uppercase mb-2">Regional Event</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Regional Networking Breakfasts</h3>
                  <p className="text-gray-700 mb-4">
                    Informal networking events across major cities. Connect with local peers, share experiences, and discuss industry developments in a relaxed setting.
                  </p>
                  <div className="space-y-2 text-gray-600 mb-6">
                    <p>📍 <strong>Locations:</strong> Auckland, Wellington, Christchurch, Tauranga</p>
                    <p>📅 <strong>Frequency:</strong> Quarterly</p>
                    <p>🥐 <strong>Format:</strong> In-person breakfast event</p>
                  </div>
                  <button className="btn-primary">Find Your Region</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Event Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Conferences & Summits</h3>
              <p className="text-gray-700 mb-4">
                Large-scale professional events featuring keynote speakers, panel discussions, workshops, and extensive networking opportunities.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Multiple track programs</li>
                <li>✓ Industry expert speakers</li>
                <li>✓ Dedicated networking time</li>
              </ul>
            </div>

            <div className="card bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Webinars & Training</h3>
              <p className="text-gray-700 mb-4">
                Online educational sessions covering regulatory updates, market trends, technical skills, and professional development topics.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Expert-led sessions</li>
                <li>✓ Interactive Q&A</li>
                <li>✓ Recorded for members</li>
              </ul>
            </div>

            <div className="card bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Workshops & Masterclasses</h3>
              <p className="text-gray-700 mb-4">
                Intensive, focused learning experiences on specific topics. Limited attendance for maximum interaction and practical application.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Small group size</li>
                <li>✓ Hands-on learning</li>
                <li>✓ Practical resources</li>
              </ul>
            </div>

            <div className="card bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Networking Events</h3>
              <p className="text-gray-700 mb-4">
                Casual and formal networking opportunities to connect with peers, share experiences, and build professional relationships.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Regional events</li>
                <li>✓ Social activities</li>
                <li>✓ Business development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
