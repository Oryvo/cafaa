import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <span className="font-bold text-white">CAFAA</span>
            </div>
            <p className="text-sm text-gray-400">
              Commercial & Asset Finance Advisers Association of Aotearoa - Advancing the financial services industry in New Zealand.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-accent transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-accent transition">About</Link></li>
              <li><Link href="/membership" className="hover:text-accent transition">Membership</Link></li>
              <li><Link href="/events" className="hover:text-accent transition">Events</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/education" className="hover:text-accent transition">Education</Link></li>
              <li><Link href="/resources" className="hover:text-accent transition">Resources</Link></li>
              <li><Link href="/news" className="hover:text-accent transition">News</Link></li>
              <li><Link href="/advocacy" className="hover:text-accent transition">Advocacy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <p className="text-sm mb-2">Wellington, New Zealand</p>
            <p className="text-sm mb-2">
              <a href="mailto:info@cafaa.nz" className="hover:text-accent transition">info@cafaa.nz</a>
            </p>
            <p className="text-sm">
              <a href="tel:+64274000000" className="hover:text-accent transition">+64 2 7400 0000</a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} CAFAA. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition">Terms of Service</a>
              <a href="#" className="hover:text-accent transition">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
