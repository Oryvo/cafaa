import Link from 'next/link';
import ImageSlider from './components/ImageSlider';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="hero py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
                The Professional Home for Aotearoa&apos;s Commercial &amp; Asset Finance Advisers
              </h1>
              <p className="text-lg md:text-xl font-semibold mb-5" style={{ color: 'rgba(255,255,255,0.75)' }}>
                New Zealand&apos;s Peak Industry Body — Raising Standards, Building Careers, and Shaping Policy for Commercial Finance Professionals Nationwide.
              </p>
              <p className="text-base md:text-lg mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                The commercial and asset finance sector is one of New Zealand&apos;s most important growth engines. CAFAA is the member-led organisation built by and for New Zealand finance professionals — lifting capability through rigorous education, protecting your livelihood through advocacy with the FMA and Parliament, and connecting you with a nationwide network of peers, partners, and decision-makers.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/membership" className="btn-primary" style={{ backgroundColor: '#fff', color: 'var(--primary) !important' }}>
                  Join CAFAA — Elevate Your Practice
                </Link>
                <Link href="/education" className="btn-secondary">
                  Explore Education Pathways
                </Link>
              </div>
            </div>
            <div className="w-full">
              <ImageSlider />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why CAFAA Exists ─────────────────────────────────────── */}
      <section className="py-20" style={{ background: 'var(--surface)' }}>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why CAFAA Exists</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              ['Uncompromising Professional Standards', 'Trust is the foundation of every commercial finance transaction. CAFAA holds its members to the highest ethical and operational benchmarks — because Kiwi businesses deserve nothing less than advisers they can rely on completely.'],
              ['Future-Proof Education & CPD', 'The regulatory and lending landscape in New Zealand is in constant motion. From the evolving FSLAA to shifting lender appetite across the OCR cycle, staying current is not optional — it is a professional obligation.'],
              ['Relentless Industry Advocacy', 'A solo adviser cannot change government policy. Together, CAFAA members command the economic weight of billions of dollars in annual commercial lending — a voice that Wellington cannot ignore.'],
              ['A Connected National Ecosystem', 'Commercial finance is a relationship business. CAFAA creates the connections that matter: between advisers and lender BDMs, emerging professionals and seasoned mentors, and regional firms and national policy conversations.'],
            ].map(([title, body]) => (
              <div key={title} className="card p-8">
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p style={{ color: 'var(--muted)' }} className="leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Serve ─────────────────────────────────────────── */}
      <section className="py-20" style={{ background: 'var(--background)' }}>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Who We Serve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              ['Commercial & Asset Finance Advisers', 'Independent advisers and self-employed professionals structuring complex equipment, property, and business finance solutions for Kiwi enterprises. CAFAA provides the professional recognition, education, and community that solo practitioners need to compete at the highest level.'],
              ['Brokerage & Advisory Firms', "Multi-adviser firms seeking a credible industry affiliation that enhances their brand, attracts quality talent, and signals to lenders and clients that their team operates to the sector's highest standards."],
              ['Lenders & Finance Providers', "Banks, non-bank lenders, and specialist finance companies that want to engage with an accredited, professional intermediary channel. Affiliate membership gives lenders direct access to CAFAA's nationwide adviser network."],
              ['Allied Service Providers', "Legal, technology, compliance, accounting, and insurance firms that support the commercial finance ecosystem. Affiliate membership positions your organisation as a trusted partner to New Zealand's finance adviser community."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-xl p-8 shadow-sm" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--primary)' }}>{title}</h3>
                <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Membership CTA ───────────────────────────────────────── */}
      <section className="py-20" style={{ background: 'var(--surface)' }}>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">Join the Peak Body for Commercial Finance</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--muted)' }}>
            CAFAA membership is the clearest signal you can send to the market: that you are serious about your profession, your clients, and the future of commercial finance in Aotearoa. Joining takes minutes. The professional advantages last a career.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/membership" className="btn-primary">
              Join CAFAA — Elevate Your Practice
            </Link>
            <Link href="/about" className="btn-secondary">
              Learn About CAFAA
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ──────────────────────────────────────────── */}
      <section className="hero py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with CAFAA</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Whether you are joining as a member, exploring education, or seeking industry engagement — our team is ready to help.
          </p>
          <Link href="/contact" className="btn-secondary">
            Get in Touch
          </Link>
        </div>
      </section>

    </div>
  );
}
