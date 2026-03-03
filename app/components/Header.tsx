'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="font-bold text-lg text-gray-900">
              CAFAA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-gray-700 hover:text-primary transition">About</Link>
            <Link href="/membership" className="text-gray-700 hover:text-primary transition">Membership</Link>
            <Link href="/education" className="text-gray-700 hover:text-primary transition">Education</Link>
            <Link href="/advocacy" className="text-gray-700 hover:text-primary transition">Advocacy</Link>
            <Link href="/events" className="text-gray-700 hover:text-primary transition">Events</Link>
            <Link href="/resources" className="text-gray-700 hover:text-primary transition">Resources</Link>
            <Link href="/news" className="text-gray-700 hover:text-primary transition">News</Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
          {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-3">
              <Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary transition py-2">About</Link>
              <Link href="/membership" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary transition py-2">Membership</Link>
              <Link href="/education" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary transition py-2">Education</Link>
              <Link href="/advocacy" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary transition py-2">Advocacy</Link>
              <Link href="/events" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary transition py-2">Events</Link>
              <Link href="/resources" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary transition py-2">Resources</Link>
              <Link href="/news" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary transition py-2">News</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary transition py-2">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
