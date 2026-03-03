import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About CAFAA - Commercial & Asset Finance Advisers Association',
  description: 'Learn about CAFAA, our history, mission, and commitment to advancing the commercial and asset finance industry in New Zealand.',
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="hero section-padding py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About CAFAA</h1>
          <p className="text-xl text-accent">
            Understanding our commitment to the finance advisory community
          </p>
        </div>
      </section>

      {/* History */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Our History</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                CAFAA was established as the premier professional association for commercial and asset finance advisers across Aotearoa New Zealand. Our organization brings together experienced professionals who are dedicated to excellence in the finance advisory sector.
              </p>
              <p className="text-lg text-gray-700">
                Since our foundation, we have been instrumental in shaping the landscape of commercial finance through education, advocacy, and the promotion of professional standards.
              </p>
            </div>
            <div className="bg-accent/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">Key Milestones</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">›</span>
                  <span>Established as the leading professional association for finance advisers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">›</span>
                  <span>Developed comprehensive professional standards framework</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">›</span>
                  <span>Launched industry-leading education and training programs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">›</span>
                  <span>Expanded advocacy initiatives with government and regulators</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card bg-white text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Excellence</h3>
              <p className="text-gray-700">
                We pursue excellence in all aspects of our work and professional practice.
              </p>
            </div>
            <div className="card bg-white text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Collaboration</h3>
              <p className="text-gray-700">
                We work together to advance the interests of our members and profession.
              </p>
            </div>
            <div className="card bg-white text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Integrity</h3>
              <p className="text-gray-700">
                We maintain the highest ethical standards in all professional conduct.
              </p>
            </div>
            <div className="card bg-white text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Growth</h3>
              <p className="text-gray-700">
                We support continuous learning and professional development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-20 h-20 bg-accent/20 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Executive Director</h3>
              <p className="text-gray-700 mb-2">Leadership Position</p>
              <p className="text-sm text-gray-500">info@cafaa.nz</p>
            </div>
            <div className="card text-center">
              <div className="w-20 h-20 bg-accent/20 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Board Chairman</h3>
              <p className="text-gray-700 mb-2">Board Leadership</p>
              <p className="text-sm text-gray-500">info@cafaa.nz</p>
            </div>
            <div className="card text-center">
              <div className="w-20 h-20 bg-accent/20 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Education Lead</h3>
              <p className="text-gray-700 mb-2">Professional Development</p>
              <p className="text-sm text-gray-500">info@cafaa.nz</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
