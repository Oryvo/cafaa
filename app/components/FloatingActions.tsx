"use client";

import { useEffect, useState } from "react";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShowTop(window.scrollY > 200);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const phone = "+64274000000"; // replace with real number if needed
  const waLink = `https://wa.me/${phone.replace(/[^0-9]/g, "")}`;

  return (
    <div aria-hidden className="pointer-events-none">
      {/* Scroll to top - left */}
      <div className="fixed left-4 bottom-6 z-50">
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`pointer-events-auto ${showTop ? "opacity-100" : "opacity-0"} transition-opacity bg-white border border-gray-200 text-gray-800 w-12 h-12 rounded-full shadow-lg flex items-center justify-center`}
        >
          ↑
        </button>
      </div>

      {/* WhatsApp - right */}
      <div className="fixed right-4 bottom-6 z-50">
        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="pointer-events-auto bg-primary w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-green text-lg"
        >
          {/* WhatsApp icon simple */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12.04C21 17.06 16.97 21.09 11.95 21.09C10.02 21.09 8.2 20.59 6.64 19.69L3 21.5l1.83-3.64C4 16.78 3.53 14.95 3.53 13.02C3.53 8 7.56 3.97 12.58 3.97C17.6 3.97 21.63 8 21.63 13.02H21z" fill="green"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
