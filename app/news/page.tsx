import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Updates - CAFAA',
  description: 'Latest news, industry updates, and announcements from CAFAA for commercial and asset finance advisers.',
};

export default function News() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="hero section-padding py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">News & Updates</h1>
          <p className="text-xl text-accent">
            Stay informed with the latest industry news and CAFAA announcements
          </p>
        </div>
      </section>

      {/* Latest News */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Latest News</h2>

            {/* Featured Article */}
            <div className="card mb-8 border-l-4 border-primary">
              <div className="mb-4">
                <span className="inline-block bg-accent/20 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  Featured
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">CAFAA Annual Conference 2026 - Early Bird Registration Now Open</h3>
              <p className="text-sm text-gray-500 mb-4">March 1, 2026</p>
              <p className="text-gray-700 mb-4">
                We&apos;re excited to announce that early bird registration for our flagship Annual Conference 2026 is now open! Join us in Wellington on May 20-21 for two days of industry insights, expert panels, and valuable networking opportunities.
              </p>
              <p className="text-gray-700 mb-6">
                Early bird pricing offers a 20% discount for the first 100 registrations. Book your place today and join 500+ finance professionals for this must-attend event.
              </p>
              <a href="/events" className="btn-primary">Learn More & Register</a>
            </div>

            {/* News Articles */}
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-2">New Regulatory Guidelines for SME Financing</h3>
                <p className="text-sm text-gray-500 mb-4">February 25, 2026</p>
                <p className="text-gray-700 mb-4">
                  The Financial Markets Authority has released updated guidelines for SME financing. CAFAA is analyzing the impact on our members and will provide detailed guidance at the next webinar.
                </p>
                <a href="#" className="text-primary hover:text-secondary font-semibold">Read More →</a>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Advocacy Success: Government Funding for Finance Training</h3>
                <p className="text-sm text-gray-500 mb-4">February 20, 2026</p>
                <p className="text-gray-700 mb-4">
                  Following months of advocacy work, the government has allocated $2M for finance adviser training and professional development programs. This is a major win for the industry and recognizes the importance of professional standards.
                </p>
                <a href="#" className="text-primary hover:text-secondary font-semibold">Read More →</a>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-2">CAFAA Welcomes New Board Member</h3>
                <p className="text-sm text-gray-500 mb-4">February 15, 2026</p>
                <p className="text-gray-700 mb-4">
                We&apos;re pleased to welcome Sarah Mitchell to the CAFAA board. Sarah brings 20 years of experience in commercial finance and will lead our digital transformation initiatives.
                </p>
                <a href="#" className="text-primary hover:text-secondary font-semibold">Read More →</a>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Finance Trends 2026: Market Report Released</h3>
                <p className="text-sm text-gray-500 mb-4">February 10, 2026</p>
                <p className="text-gray-700 mb-4">
                  CAFAA has released its comprehensive Digital Finance Trends report for 2026. The report analyzes the impact of fintech, AI, and automation on the commercial finance sector.
                </p>
                <a href="#" className="text-primary hover:text-secondary font-semibold">Read More →</a>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Upcoming Webinar: Navigating Supply Chain Finance</h3>
                <p className="text-sm text-gray-500 mb-4">February 5, 2026</p>
                <p className="text-gray-700 mb-4">
                  Join us for our next professional development webinar on March 12, where expert panelists will discuss supply chain finance opportunities and emerging opportunities.
                </p>
                <a href="/education" className="text-primary hover:text-secondary font-semibold">Register Now →</a>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Regional Networking Events Commence</h3>
                <p className="text-sm text-gray-500 mb-4">January 30, 2026</p>
                <p className="text-gray-700 mb-4">
                  CAFAA is launching regional networking breakfasts across major cities. The first events are in Auckland and Wellington in March. Connect with peers and discuss industry developments.
                </p>
                <a href="/events" className="text-primary hover:text-secondary font-semibold">Find Your Region →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-accent/10">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Stay Updated</h2>
          <p className="text-lg text-gray-700 mb-8">
            Subscribe to our newsletter for the latest news, updates, and industry insights delivered to your inbox.
          </p>
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="form-input flex-1"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
}
