import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#1A0A0D', color: '#C9B8BC' }}>
      <div className="container mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <p className="font-bold text-white text-lg mb-1">CAFAA</p>
            <p className="text-xs mb-3 leading-snug" style={{ color: '#A08890' }}>
              Commercial &amp; Asset Finance Advisers<br />Association of Aotearoa
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#C9B8BC' }}>
              New Zealand&apos;s peak body for commercial and asset finance professionals — advancing standards, education, and advocacy nationwide.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: '#fff' }}>Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['/', 'Home'],
                ['/about', 'About CAFAA'],
                ['/membership', 'Membership'],
                ['/education', 'Education & CPD'],
                ['/events', 'Events'],
                ['/advocacy', 'Advocacy'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors" style={{ color: '#C9B8BC' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: '#fff' }}>Resources</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['/resources', 'Member Resources'],
                ['/news', 'News & Insights'],
                ['/member-directory', 'Member Directory'],
                ['/members-area', 'Members Area'],
                ['/contact', 'Contact Us'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors" style={{ color: '#C9B8BC' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: '#fff' }}>Contact</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:info@cafaa.co.nz"
                  className="hover:text-white transition-colors"
                  style={{ color: '#C9B8BC' }}
                >
                  info@cafaa.co.nz
                </a>
              </li>
              <li style={{ color: '#A08890' }}>New Zealand</li>
              <li style={{ color: '#A08890' }}>Mon–Fri, 9:00am–5:00pm NZST</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm"
          style={{ borderColor: '#3D1820', color: '#A08890' }}
        >
          <p>&copy; {currentYear} CAFAA. All rights reserved.</p>
          <div className="flex gap-6">
            {[
              ['/legal/privacy-policy', 'Privacy Policy'],
              ['/legal/terms-and-conditions', 'Terms of Use'],
              ['/legal/disclaimer', 'Disclaimer'],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="hover:text-white transition-colors"
                style={{ color: '#A08890' }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
