'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
// using Heroicons for dropdown indicators and menu toggles – run
//   npm install @heroicons/react
// if you haven't added the package yet
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
      { label: 'Strategy 2024-2027', href: '/about/strategy-2024-2027' },
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

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});
  const [expandedMobileItems, setExpandedMobileItems] = useState<{ [key: string]: boolean }>({});
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-dropdown-trigger]') && !target.closest('[data-dropdown-menu]')) {
        setOpenDropdowns({});
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false); // eslint-disable-line react-hooks/set-state-in-effect
  }, [pathname]);

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const toggleMobileItem = (label: string) => {
    setExpandedMobileItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleKeyDown = (e: React.KeyboardEvent, label: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleDropdown(label);
    } else if (e.key === 'Escape') {
      setOpenDropdowns({});
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center lg:justify-start flex-1 lg:flex-none gap-2 navbar-brand">
            <div className="w-full h-24 md:w-48 md:h-14 rounded-lg overflow-hidden relative">
              <Image id='logo'
                src="/logo/logo.jpeg"
                alt="CAFAA logo"
                  fill
                className="object-cover object-center"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {menuStructure.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={() => item.submenu && toggleDropdown(item.label)}
                  onKeyDown={(e) => item.submenu && handleKeyDown(e, item.label)}
                  onMouseEnter={() =>
                    item.submenu && setOpenDropdowns({ [item.label]: true })
                  }
                  data-dropdown-trigger={item.submenu ? '' : undefined}
                  aria-haspopup={item.submenu ? 'true' : 'false'}
                  aria-expanded={openDropdowns[item.label] ? 'true' : 'false'}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 navbar-link ${
                    isActive(item.href) ? 'active' : ''
                  }`}
                  style={isActive(item.href) ? { backgroundColor: 'var(--primary)', color: 'white' } : { color: 'var(--foreground)' }}
                >
                  {item.label}
                  {item.submenu && (
                    <ChevronDownIcon
                      className={`w-4 h-4 transition-transform ${
                        openDropdowns[item.label] ? 'rotate-180' : ''
                      } group-hover:rotate-180`}
                    />
                  )}
                </button>

                {/* Dropdown Menu - visibility is controlled by state OR hover (group-hover) */}
                {item.submenu && (
                  <div
                    ref={(el) => {
                      if (el) dropdownRefs.current[item.label] = el;
                    }}
                    data-dropdown-menu
                    role="menu"
                    className={`absolute left-0 mt-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 ${
                      openDropdowns[item.label] ? '' : 'hidden'
                    } group-hover:block`}
                    style={{ top: '100%' }}
                  >
                    {item.submenu.map((subitem, idx) => (
                      <div key={subitem.href}>
                        <Link
                          href={subitem.href}
                          role="menuitem"
                          className={`block px-4 py-2.5 text-sm font-medium transition-colors navbar-link ${
                            isActive(subitem.href) ? 'active' : ''
                          } ${
                            isActive(subitem.href)
                              ? 'bg-opacity-10'
                              : 'hover:bg-gray-50'
                          }`}
                          style={
                            isActive(subitem.href)
                              ? { backgroundColor: 'var(--primary)', color: 'white' }
                              : { color: 'var(--foreground)' }
                          }
                        >
                          {subitem.label}
                        </Link>
                        {idx < item.submenu!.length - 1 && (
                          <div className="h-px bg-gray-100 my-1"></div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/members-area"
              className="text-sm font-medium transition navbar-link"
              style={{ color: 'var(--primary)' }}
            >
              Member Login
            </Link>
            <Link
              href="/membership"
              className="px-4 py-2 text-sm font-semibold text-white rounded-lg transition hover:opacity-90 navbar-cta"
            >
              Join CAFAA
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4 space-y-2">
            {menuStructure.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleMobileItem(item.label)}
                      className={`w-full text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-colors flex justify-between items-center navbar-link ${
                        isActive(item.href) ? 'active' : ''
                      }`}
                      style={
                        isActive(item.href)
                          ? { backgroundColor: 'var(--primary)', color: 'white' }
                          : { color: 'var(--foreground)' }
                      }
                      aria-expanded={expandedMobileItems[item.label] ? 'true' : 'false'}
                    >
                      {item.label}
                        <ChevronDownIcon
                          className={`w-4 h-4 transition-transform ${
                            expandedMobileItems[item.label] ? 'rotate-180' : ''
                          }`}
                        />
                    </button>

                    {/* Mobile Submenu */}
                    {expandedMobileItems[item.label] && (
                      <div className="bg-gray-50 rounded-lg mt-1 py-2 px-2 space-y-1">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.href}
                            href={subitem.href}
                            className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors navbar-link ${
                              isActive(subitem.href) ? 'active' : ''
                            }`}
                            style={
                              isActive(subitem.href)
                                ? { backgroundColor: 'var(--primary)', color: 'white' }
                                : { color: 'var(--foreground)' }
                            }
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors navbar-link ${
                      isActive(item.href) ? 'active' : ''
                    }`}
                    style={
                      isActive(item.href)
                        ? { backgroundColor: 'var(--primary)', color: 'white' }
                        : { color: 'var(--foreground)' }
                    }
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="border-t pt-4 mt-4 space-y-2">
              <Link
                href="/members-area"
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition text-center"
              >
                Member Login
              </Link>
              <Link
                href="/membership"
                className="block px-4 py-2 text-sm font-semibold text-white rounded-lg transition hover:opacity-90 text-center navbar-cta"
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
