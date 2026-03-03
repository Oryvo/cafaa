import { Metadata } from 'next';
import MembershipForm from '../components/MembershipForm';

export const metadata: Metadata = {
  title: 'Membership - CAFAA',
  description: 'Join CAFAA and access exclusive benefits, professional development, and networking opportunities for finance advisers in New Zealand.',
};

export default function Membership() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="hero section-padding py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Membership</h1>
          <p className="text-xl text-accent">
            Join a community of professional finance advisers
          </p>
        </div>
      </section>

      {/* Who Should Join */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Who Should Join CAFAA?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Finance Advisers</h3>
              <p className="text-gray-700">
                Professional advisers providing commercial and asset finance advisory services to clients across Aotearoa.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Owners</h3>
              <p className="text-gray-700">
                Business owners and company directors looking to enhance their professional credentials and stay current with industry trends.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Professionals</h3>
              <p className="text-gray-700">
                Professionals from finance, lending, and advisory services seeking professional development and industry connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Membership Benefits</h2>
          
          {/* Core Benefits */}
          <div className="max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">What You Get as a Member</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">✓</div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Professional Development</h4>
                  <p className="text-gray-700">
                    Access to comprehensive education programs, webinars, workshops, and training courses designed to enhance your expertise and skills in commercial and asset finance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">✓</div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Industry Networking</h4>
                  <p className="text-gray-700">
                    Connect with peers and industry leaders through exclusive networking events, conferences, and regional meetups. Build valuable professional relationships and business opportunities.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">✓</div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Exclusive Resources</h4>
                  <p className="text-gray-700">
                    Access premium resources including market reports, industry data, compliance guides, templates, tools, and best practice frameworks.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">✓</div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Advocacy & Representation</h4>
                  <p className="text-gray-700">
                    Have your voice heard. CAFAA advocates on behalf of members to government, regulators, and industry stakeholders, shaping policies that affect your practice.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">✓</div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">News & Insights</h4>
                  <p className="text-gray-700">
                    Stay informed with regular news updates, industry alerts, and analysis of market trends and regulatory changes affecting commercial finance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">✓</div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Professional Credibility</h4>
                  <p className="text-gray-700">
                    Enhance your professional reputation with CAFAA membership recognition. Demonstrate your commitment to professional standards and excellence.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">✓</div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Member Directory</h4>
                  <p className="text-gray-700">
                    Be listed in our member directory, increasing your visibility and accessibility to potential referral partners and clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Application */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Apply for Membership</h2>
          
          <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg p-8">
            <p className="text-gray-700 mb-8">
              Ready to join CAFAA? Complete the form below to apply for membership. We're excited to welcome new members to our professional community. Our membership team will review your application and be in touch within 5 business days.
            </p>
            
            <MembershipForm />
          </div>
        </div>
      </section>

      {/* Membership Levels */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Membership Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Associate Member</h3>
              <p className="text-sm text-gray-600 mb-4">For professionals new to the industry</p>
              <div className="border-t py-6 mb-6">
                <p className="text-2xl font-bold text-primary mb-4">$199/year</p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li>✓ Access to webinars</li>
                  <li>✓ Resource library</li>
                  <li>✓ Monthly newsletter</li>
                  <li>✓ Member events</li>
                </ul>
              </div>
              <button className="btn-primary w-full">Select</button>
            </div>

            <div className="card bg-primary text-white border-2 border-primary relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold">
                POPULAR
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Member</h3>
              <p className="text-sm text-accent mb-4">For established advisers</p>
              <div className="border-t border-primary py-6 mb-6">
                <p className="text-2xl font-bold mb-4">$399/year</p>
                <ul className="space-y-3 text-sm">
                  <li>✓ All Associate benefits</li>
                  <li>✓ Premium resources</li>
                  <li>✓ Conference tickets</li>
                  <li>✓ Market reports</li>
                  <li>✓ Priority support</li>
                </ul>
              </div>
              <button className="bg-white text-primary font-semibold py-2 px-4 rounded hover:bg-accent/10 transition w-full">Select</button>
            </div>

            <div className="card bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Corporate Member</h3>
              <p className="text-sm text-gray-600 mb-4">For companies & organizations</p>
              <div className="border-t py-6 mb-6">
                <p className="text-2xl font-bold text-primary mb-4">Custom</p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li>✓ All Professional benefits</li>
                  <li>✓ Multiple staff access</li>
                  <li>✓ Branding opportunities</li>
                  <li>✓ Dedicated account manager</li>
                </ul>
              </div>
              <button className="btn-secondary w-full">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What are the membership eligibility requirements?</h3>
              <p className="text-gray-700">
                We welcome professional finance advisers, business owners, and industry professionals. You should have a genuine interest in commercial and asset finance and a commitment to professional development.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can I cancel my membership?</h3>
              <p className="text-gray-700">
                Yes, you can cancel your membership at any time. Please contact our membership team at least 30 days before your renewal date to discuss your options.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How long does the membership review process take?</h3>
              <p className="text-gray-700">
                Our membership team typically reviews applications within 5 business days and will be in touch with you regarding your application status.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Is membership renewable?</h3>
              <p className="text-gray-700">
                Yes, membership is annual and automatically renewable. You'll receive a renewal notice 30 days before your membership expires.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
