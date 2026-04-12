'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface MenuItem {
  label: string;
  href: string;
  submenu?: MenuItem[];
}

const menuStructure: MenuItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    submenu: [
      { label: 'About Us', href: '/about' },
      { label: 'Who We Are', href: '/about/who-we-are' },
      { label: 'Board of Directors', href: '/about/board-of-directors' },
      { label: 'Strategy 2024–2027', href: '/about/strategy-2024-2027' },
      { label: 'Diversity, Equity & Inclusion', href: '/about/diversity-equity-inclusion' },
      { label: 'Women in Finance', href: '/about/women-in-finance' },
      { label: 'Young Professionals', href: '/about/young-professionals' },
      { label: 'FAQ', href: '/about/faq' },
    ],
  },
  {
    label: 'Membership',
    href: '/membership',
    submenu: [
      { label: 'Membership', href: '/membership' },
      { label: 'Membership Types', href: '/membership/types' },
      { label: 'Schedule of Fees', href: '/membership/schedule-of-fees' },
      { label: 'Renewal', href: '/membership/renewal' },
      { label: 'Compliance Requirements', href: '/membership/compliance-requirements' },
      { label: 'Member Directory', href: '/member-directory' },
    ],
  },
  {
    label: 'Education',
    href: '/education',
    submenu: [
      { label: 'Education', href: '/education' },
      { label: 'Certified Commercial Finance Professional', href: '/education/certified-commercial-finance-professional' },
      { label: 'Diploma in Financial Services', href: '/education/diploma-financial-services' },
      { label: 'CPD Platform', href: '/education/cpd-platform' },
    ],
  },
  {
    label: 'Events',
    href: '/events',
    submenu: [
      { label: 'Events', href: '/events' },
      { label: 'Upcoming Events', href: '/events/upcoming' },
      { label: 'Calendar', href: '/events/calendar' },
      { label: 'Awards', href: '/events/awards' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    submenu: [
      { label: 'Resources', href: '/resources' },
      { label: 'Constitution', href: '/resources/constitution' },
      { label: 'CPD Policy', href: '/resources/cpd-policy' },
      { label: 'AGM', href: '/resources/agm' },
      { label: 'Resource Exchange', href: '/resources/resource-exchange' },
    ],
  },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

const activeStyle = { backgroundColor: 'var(--primary)', color: '#fff' };

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedMobileItems, setExpandedMobileItems] = useState<Record<string, boolean>>({});

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setExpandedMobileItems({});
  }, [pathname]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!(e.target as HTMLElement).closest('[data-nav-item]')) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b shadow-sm" style={{ borderColor: 'var(--border)' }}>
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center">
            <div className="relative w-36 h-11 md:w-44 md:h-14">
              <Image
                id="logo"
                src="/logo/logo.jpeg"
                alt="CAFAA — Commercial & Asset Finance Advisers Association of Aotearoa"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {menuStructure.map((item) => (
              <div
                key={item.label}
                data-nav-item
                className="relative"
                onMouseEnter={() => item.submenu && setOpenDropdown(item.label)}
                onMouseLeave={() => item.submenu && setOpenDropdown(null)}
              >
                {/* Items WITH submenu render as buttons; items WITHOUT render as Links */}
                {item.submenu ? (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === item.label}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 navbar-link ${
                      isActive(item.href) ? 'active' : ''
                    }`}
                    style={isActive(item.href) ? activeStyle : undefined}
                  >
                    {item.label}
                    <ChevronDownIcon
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center navbar-link ${
                      isActive(item.href) ? 'active' : ''
                    }`}
                    style={isActive(item.href) ? activeStyle : undefined}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown panel */}
                {item.submenu && openDropdown === item.label && (
                  <div
                    data-nav-item
                    role="menu"
                    className="absolute left-0 top-full mt-1 w-64 bg-white rounded-lg shadow-xl py-1.5 z-50"
                    style={{ border: '1px solid var(--border)' }}
                  >
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.href}
                        href={subitem.href}
                        role="menuitem"
                        className={`block px-4 py-2.5 text-sm font-medium transition-colors navbar-link ${
                          isActive(subitem.href) ? 'active' : ''
                        }`}
                        style={isActive(subitem.href) ? activeStyle : undefined}
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/members-area"
              className="text-sm font-medium px-3 py-2 rounded-md transition-colors navbar-link"
            >
              Member Login
            </Link>
            <Link
              href="/membership"
              className="px-4 py-2 text-sm font-semibold rounded-lg transition navbar-cta"
            >
              Join CAFAA
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition"
            style={{ color: 'var(--foreground)' }}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen
              ? <XMarkIcon className="w-6 h-6" />
              : <Bars3Icon className="w-6 h-6" />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pb-4 border-t pt-3 space-y-1" style={{ borderColor: 'var(--border)' }}>
            {menuStructure.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() =>
                        setExpandedMobileItems((prev) => ({
                          ...prev,
                          [item.label]: !prev[item.label],
                        }))
                      }
                      className={`w-full text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-colors flex justify-between items-center navbar-link ${
                        isActive(item.href) ? 'active' : ''
                      }`}
                      style={isActive(item.href) ? activeStyle : undefined}
                      aria-expanded={expandedMobileItems[item.label] ?? false}
                    >
                      {item.label}
                      <ChevronDownIcon
                        className={`w-4 h-4 transition-transform duration-200 ${
                          expandedMobileItems[item.label] ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedMobileItems[item.label] && (
                      <div className="ml-2 mt-1 rounded-lg py-1.5 space-y-0.5" style={{ background: 'var(--background)' }}>
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.href}
                            href={subitem.href}
                            className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors navbar-link ${
                              isActive(subitem.href) ? 'active' : ''
                            }`}
                            style={isActive(subitem.href) ? activeStyle : undefined}
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  /* Plain link — no submenu */
                  <Link
                    href={item.href}
                    className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors navbar-link ${
                      isActive(item.href) ? 'active' : ''
                    }`}
                    style={isActive(item.href) ? activeStyle : undefined}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="border-t pt-3 mt-2 space-y-2" style={{ borderColor: 'var(--border)' }}>
              <Link
                href="/members-area"
                className="block px-4 py-2.5 text-sm font-medium rounded-lg text-center navbar-link"
              >
                Member Login
              </Link>
              <Link
                href="/membership"
                className="block px-4 py-2.5 text-sm font-semibold rounded-lg text-center navbar-cta"
              >
                Join CAFAA
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
