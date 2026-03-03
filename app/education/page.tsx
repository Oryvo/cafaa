import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Education & Training - CAFAA',
  description: 'Explore CAFAA education programs, professional development courses, and training opportunities for commercial and asset finance advisers.',
};

export default function Education() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="hero section-padding py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Education & Training</h1>
          <p className="text-xl text-accent">
            Professional development programs for finance advisers
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Education Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Foundation Certificate</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive introduction to commercial and asset finance advisory. Covering regulatory frameworks, industry standards, and fundamental principles.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Core finance principles</li>
                <li>✓ Regulatory compliance</li>
                <li>✓ Client relationship management</li>
                <li>✓ Professional ethics</li>
              </ul>
              <button className="btn-primary">Learn More</button>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Advanced Diploma</h3>
              <p className="text-gray-700 mb-4">
                Advanced training for experienced advisers. Focus on complex transactions, portfolio management, and business development strategies.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Complex transaction structuring</li>
                <li>✓ Risk management</li>
                <li>✓ Market analysis</li>
                <li>✓ Strategic business planning</li>
              </ul>
              <button className="btn-primary">Learn More</button>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Specialist Certifications</h3>
              <p className="text-gray-700 mb-4">
                Focused certifications in specific areas: SME financing, equipment leasing, supply chain finance, and more.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ SME financing</li>
                <li>✓ Equipment leasing</li>
                <li>✓ Supply chain finance</li>
                <li>✓ Technology & digital solutions</li>
              </ul>
              <button className="btn-primary">Learn More</button>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Continuing Professional Development</h3>
              <p className="text-gray-700 mb-4">
                Ongoing CPD programs to maintain and update professional knowledge. Includes webinars, workshops, and industry seminars.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Monthly webinars</li>
                <li>✓ Annual workshops</li>
                <li>✓ Industry seminars</li>
                <li>✓ Regulatory updates</li>
              </ul>
              <button className="btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose CAFAA Education?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">👨‍🏫</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Instructors</h3>
              <p className="text-gray-700">
                Learn from industry experts with extensive experience in commercial and asset finance.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Recognized Qualifications</h3>
              <p className="text-gray-700">
                Gain qualifications that are highly valued across the New Zealand finance industry.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Learning</h3>
              <p className="text-gray-700">
                Choose from online, in-person, or hybrid learning formats to suit your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
