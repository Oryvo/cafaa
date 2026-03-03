import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources - CAFAA',
  description: 'Access CAFAA resources including guides, white papers, industry data, and tools for commercial and asset finance advisers.',
};

export default function Resources() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="hero section-padding py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Resources & Tools</h1>
          <p className="text-xl text-accent">
            Access guides, data, and tools to support your practice
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Resource Library</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="card">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Guides & Manuals</h3>
              <p className="text-gray-700 mb-6">
                Comprehensive guides covering best practices, regulatory compliance, transaction structuring, and industry processes.
              </p>
              <div className="space-y-2 mb-6 text-gray-700">
                <p>• Finance Advisory Best Practices</p>
                <p>• Regulatory Compliance Handbook</p>
                <p>• Transaction Structuring Guide</p>
                <p>• Client Management Framework</p>
              </div>
              <button className="btn-primary">Access Guides</button>
            </div>

            <div className="card">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Data & Reports</h3>
              <p className="text-gray-700 mb-6">
                Market research, industry statistics, and comprehensive reports on commercial finance trends in New Zealand.
              </p>
              <div className="space-y-2 mb-6 text-gray-700">
                <p>• Market Analysis Reports</p>
                <p>• Industry Statistics</p>
                <p>• Trend Analysis</p>
                <p>• Benchmark Data</p>
              </div>
              <button className="btn-primary">View Reports</button>
            </div>

            <div className="card">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Resources</h3>
              <p className="text-gray-700 mb-6">
                Keep up-to-date with regulatory changes, policy documents, and compliance updates relevant to finance advisers.
              </p>
              <div className="space-y-2 mb-6 text-gray-700">
                <p>• Regulatory Updates</p>
                <p>• Policy Documents</p>
                <p>• Compliance Checklists</p>
                <p>• Legislative Summaries</p>
              </div>
              <button className="btn-primary">Access Resources</button>
            </div>

            <div className="card">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tools & Templates</h3>
              <p className="text-gray-700 mb-6">
                Ready-to-use templates, calculators, and tools to streamline your advisory practice and client management.
              </p>
              <div className="space-y-2 mb-6 text-gray-700">
                <p>• Document Templates</p>
                <p>• Financial Calculators</p>
                <p>• Spreadsheet Tools</p>
                <p>• Client Tracking Systems</p>
              </div>
              <button className="btn-primary">Download Tools</button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Resources</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card bg-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Commercial Finance Market Report 2026</h3>
                  <p className="text-gray-700 mb-4">
                    Comprehensive analysis of market trends, regulatory changes, and opportunities in the commercial and asset finance sector.
                  </p>
                </div>
                <span className="text-sm text-primary font-bold">PDF</span>
              </div>
              <button className="btn-secondary">Download Report</button>
            </div>

            <div className="card bg-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">SME Financing Best Practices Guide</h3>
                  <p className="text-gray-700 mb-4">
                    Practical guide for advisers working with small and medium-sized enterprises. Covers assessment, structuring, and risk management.
                  </p>
                </div>
                <span className="text-sm text-primary font-bold">PDF</span>
              </div>
              <button className="btn-secondary">Download Guide</button>
            </div>

            <div className="card bg-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Regulatory Compliance Handbook</h3>
                  <p className="text-gray-700 mb-4">
                    Up-to-date reference guide on compliance requirements, regulatory frameworks, and best practices for finance advisers.
                  </p>
                </div>
                <span className="text-sm text-primary font-bold">PDF</span>
              </div>
              <button className="btn-secondary">Download Handbook</button>
            </div>
          </div>
        </div>
      </section>

      {/* Member Resources */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Exclusive Member Resources</h2>
          <div className="max-w-3xl mx-auto bg-accent/10 p-8 rounded-lg border border-accent/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Members-Only Access</h3>
            <p className="text-gray-700 mb-6">
              CAFAA members enjoy exclusive access to premium resources, including detailed market reports, advanced tools, and member-only webinars.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Premium Content</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Market Intelligence Reports</li>
                  <li>✓ Advanced Analysis Tools</li>
                  <li>✓ Expert Consultation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Priority Access</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Early Event Registration</li>
                  <li>✓ Member Discussion Forums</li>
                  <li>✓ Direct Support Line</li>
                </ul>
              </div>
            </div>
            <button className="btn-primary">Become a Member</button>
          </div>
        </div>
      </section>
    </div>
  );
}
