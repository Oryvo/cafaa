import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Advocacy - CAFAA',
  description: 'CAFAA advocacy initiatives, policy positions, and industry representation for commercial and asset finance advisers in New Zealand.',
};

export default function Advocacy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="hero section-padding py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Industry Advocacy</h1>
          <p className="text-xl text-accent">
            Representing the interests of finance advisers across Aotearoa
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Our Advocacy Mission</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            CAFAA actively advocates for the commercial and asset finance industry across Aotearoa. We work collaboratively with government agencies, regulators, and industry stakeholders to shape policy and drive positive change for our members.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Policy Development</h3>
              <p className="text-gray-700">
                We contribute to the development of regulatory frameworks and industry policies that affect our members' operations.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Stakeholder Engagement</h3>
              <p className="text-gray-700">
                We maintain strong relationships with government, regulators, and industry bodies to ensure the voice of finance advisers is heard.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Representation</h3>
              <p className="text-gray-700">
                We represent the collective interests of our members in consultations and industry forums.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Initiatives */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Current Advocacy Initiatives</h2>
          <div className="max-w-3xl mx-auto">
            <div className="card mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Regulatory Framework Review</h3>
              <p className="text-gray-700 mb-4">
                CAFAA is actively engaged in consultations on regulatory frameworks affecting the finance advisory sector, working to ensure fair and proportionate requirements.
              </p>
              <p className="text-sm text-primary">In Progress</p>
            </div>

            <div className="card mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Digital Finance Standards</h3>
              <p className="text-gray-700 mb-4">
                Contributing to discussions on digital transformation and cybersecurity standards for financial advisers and platforms.
              </p>
              <p className="text-sm text-primary">In Progress</p>
            </div>

            <div className="card mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Development Standards</h3>
              <p className="text-gray-700 mb-4">
                Advocating for recognition of professional qualifications and advancing continuing professional development requirements.
              </p>
              <p className="text-sm text-primary">Active</p>
            </div>

            <div className="card mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">SME Financing Accessibility</h3>
              <p className="text-gray-700 mb-4">
                Working with government and financial institutions to improve access to commercial finance for small and medium-sized enterprises.
              </p>
              <p className="text-sm text-primary">Active</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Get Involved in Advocacy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Member Consultation</h3>
              <p className="text-gray-700 mb-6">
                As a CAFAA member, you have the opportunity to provide input on advocacy positions and policy responses.
              </p>
              <button className="btn-primary">Join Our Committees</button>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Supplier Partnerships</h3>
              <p className="text-gray-700 mb-6">
                If you're a software provider or service provider, explore partnership opportunities with CAFAA.
              </p>
              <button className="btn-primary">Learn About Partnerships</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
