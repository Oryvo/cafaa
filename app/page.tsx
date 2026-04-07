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
                Empowering Aotearoa’s Commercial & Asset Finance Professionals
              </h1>
              <p className="text-2xl md:text-3xl font-semibold mb-6 text-accent">
                The Peak Industry Body Championing Capability, Credibility, and Commercial Growth in New Zealand.
              </p>
              <p className="text-lg mb-8 text-gray-100 max-w-3xl" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                Welcome to the Commercial and Asset Finance Association of Aotearoa (CAFAA). We are the professional home for New Zealand’s commercial and asset finance community. In an increasingly complex financial landscape, businesses need capital to grow, and they rely on highly skilled, ethical, and connected advisers to secure it. CAFAA exists to champion those professionals. We elevate industry standards, provide world-class education, and deliver fierce advocacy to ensure our members and the Kiwi businesses they support can thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/membership" className="btn-primary inline-block">
                  Join CAFAA Today – Elevate Your Practice
                </Link>
                <Link href="/education" className="btn-secondary inline-block text-white border-white">
                  Explore Our Education Pathways
                </Link>
              </div>
            </div>
            <ImageSlider />
          </div>
        </div>
      </section>

      {/* Why CAFAA Exists */}
      <section className="section-padding py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Why CAFAA Exists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Uncompromising Professional Standards</h3>
              <p className="text-gray-700">We build absolute trust in the market by holding our members to the highest ethical and operational benchmarks.</p>
            </div>
            <div className="card bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Elite Education & CPD</h3>
              <p className="text-gray-700">We future-proof our advisers through continuous, highly relevant professional development tailored to the NZ market.</p>
            </div>
            <div className="card bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Relentless Industry Advocacy</h3>
              <p className="text-gray-700">We represent the sector’s interests in Wellington and with regulators, ensuring policy supports—rather than stifles—commercial growth.</p>
            </div>
            <div className="card bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">A Connected Ecosystem</h3>
              <p className="text-gray-700">We forge a powerful, collaborative network of brokers, lenders, and service providers across Aotearoa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-padding bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Who We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-gray-700">
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Commercial & Asset Finance Advisers</h3>
              <p>Independent professionals structuring complex debt for Kiwi enterprises.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Brokerages & Advisory Firms</h3>
              <p>High-performing teams seeking to elevate their market credibility.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Lenders & Financiers</h3>
              <p>Banks and non-bank lenders looking to partner with elite, accredited intermediaries.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Industry Service Providers</h3>
              <p>Legal, tech, and compliance firms that fuel the sector.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="section-padding py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Peak Body for Commercial Finance</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            CAFAA membership signals your commitment to excellence and gives you access to the resources, credibility, and connections that matter in New Zealand’s commercial finance market.
          </p>
          <Link href="/membership" className="btn-primary inline-block">
            Join CAFAA Today – Elevate Your Practice
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Partner with CAFAA</h2>
          <p className="text-xl text-accent mb-8">
            Whether you are joining as a member, exploring education, or seeking industry engagement, our team is ready to help.
          </p>
          <Link href="/contact" className="btn-secondary text-white border-white inline-block">
            Contact CAFAA
          </Link>
        </div>
      </section>
    </div>
  );
}
