import Link from 'next/link';
import ImageSlider from './components/ImageSlider';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero section-padding py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-white">
                CAFAA: Leading Finance Advisers in Aotearoa
              </h1>
              <p className="text-xl mb-8" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                Advancing commercial and asset finance through professional expertise, education, and advocacy across New Zealand.
              </p>
              <div className="flex gap-4">
                <Link href="/membership" className="btn-primary inline-block boreder-white text-white">
                  Apply for Membership
                </Link>
                <Link href="/contact" className="btn-secondary text-white border-white inline-block">
                  Contact Us
                </Link>
              </div>
            </div>
            <ImageSlider />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Our Mission</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            CAFAA represents and advocates for commercial and asset finance advisers across Aotearoa New Zealand. We are committed to advancing professional standards, supporting industry development, and delivering value to our members and the broader financial services sector.
          </p>
          
          {/* Objectives */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-4xl font-bold text-primary mb-4">📚</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Professional Development</h3>
              <p className="text-gray-700">
                We provide comprehensive education programs and training opportunities to enhance the skills and knowledge of finance advisers across the industry.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl font-bold text-primary mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Industry Advocacy</h3>
              <p className="text-gray-700">
                We advocate on behalf of our members and the broader finance sector, contributing to policy development and regulatory frameworks in New Zealand.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl font-bold text-primary mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Standards & Ethics</h3>
              <p className="text-gray-700">
                We promote high professional standards and ethical practices across the commercial and asset finance industry in Aotearoa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Teaser */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-white">
              <div className="text-sm text-primary font-bold uppercase mb-2">Conference</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Annual Conference 2026</h3>
              <p className="text-gray-700 mb-4">
                Join us for our flagship annual conference featuring industry experts, networking opportunities, and insightful presentations on the latest finance trends.
              </p>
              <p className="text-sm text-gray-500">Coming Soon</p>
            </div>
            <div className="card bg-white">
              <div className="text-sm text-primary font-bold uppercase mb-2">Webinar</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Professional Development Series</h3>
              <p className="text-gray-700 mb-4">
                Monthly webinars covering essential topics for finance advisers including regulations, market trends, and business growth strategies.
              </p>
              <p className="text-sm text-gray-500">Monthly</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/events" className="btn-primary inline-block">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="section-padding py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join CAFAA?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Become part of a thriving professional community. Access exclusive resources, educational programs, and networking events tailored for finance advisers.
          </p>
          <Link href="/membership" className="btn-primary inline-block">
            Learn About Membership
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need More Information?</h2>
          <p className="text-xl text-accent mb-8">
            Get in touch with our team today. We&apos;re here to help.
          </p>
          <Link href="/contact" className="btn-secondary text-white border-white inline-block">
            Contact CAFAA
          </Link>
        </div>
      </section>
    </div>
  );
}
