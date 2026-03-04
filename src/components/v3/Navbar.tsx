"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      // Don't close if clicking on the hamburger button
      const hamburgerButton = (event.target as Element)?.closest('[aria-label="Toggle menu"]');
      if (menuRef.current && !menuRef.current.contains(target) && !hamburgerButton) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between whitespace-nowrap border-b border-[#1C1E26] bg-[#060608]/80 backdrop-blur-md z-50 px-4 md:px-6 lg:px-12 py-3 md:py-4 h-14 md:h-16 max-w-[1440px] mx-auto w-full">
      <Link href="/" className="flex items-center gap-4 text-[#F4F6FB]">
        <div className="size-6 text-[#C8D8F0]">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4L4 44H44L24 4Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="4" />
            <circle cx="24" cy="28" fill="currentColor" r="4" />
          </svg>
        </div>
        <h2 className="text-[#F4F6FB] text-lg font-bold leading-tight tracking-wider uppercase" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
          RIVTOR
        </h2>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
        <a href="#capabilities" className="text-[#8892A4] hover:text-[#C8D8F0] transition-colors text-sm font-medium" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
          Capabilities
        </a>
        <a href="#architecture" className="text-[#8892A4] hover:text-[#C8D8F0] transition-colors text-sm font-medium" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
          Architecture
        </a>
        <a href="#specs" className="text-[#8892A4] hover:text-[#C8D8F0] transition-colors text-sm font-medium" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
          Specs
        </a>
        <a href="#pricing" className="text-[#8892A4] hover:text-[#C8D8F0] transition-colors text-sm font-medium" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
          Pricing
        </a>
      </nav>

      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-3">
        <a href="https://app.rivtor.com" className="min-w-[84px] flex items-center justify-center overflow-hidden rounded bg-[#C8D8F0] hover:bg-[#C8D8F0]/90 transition-colors text-[#060608] text-sm font-bold h-9 px-4 tracking-wide uppercase" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
          Request Engine Access
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden flex flex-col items-center justify-center gap-1.5 w-8 h-8 text-[#C8D8F0]"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu Dropdown */}
      <div
        ref={menuRef}
        className={`md:hidden absolute top-full left-0 right-0 bg-[#0E0F12] border-b border-[#1C1E26] shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-4 py-4 gap-0">
          {/* Nav Links */}
          <a
            href="#capabilities"
            onClick={closeMenu}
            className="text-[#8892A4] hover:text-[#C8D8F0] transition-colors text-sm font-medium py-3 border-b border-[#1C1E26] transform transition-all duration-300 ease-out"
            style={{ fontFamily: "var(--font-inter), sans-serif", transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-20px)", opacity: isMobileMenuOpen ? 1 : 0, transitionDelay: isMobileMenuOpen ? "50ms" : "0ms" }}
          >
            Capabilities
          </a>
          <a
            href="#architecture"
            onClick={closeMenu}
            className="text-[#8892A4] hover:text-[#C8D8F0] transition-colors text-sm font-medium py-3 border-b border-[#1C1E26] transform transition-all duration-300 ease-out"
            style={{ fontFamily: "var(--font-inter), sans-serif", transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-20px)", opacity: isMobileMenuOpen ? 1 : 0, transitionDelay: isMobileMenuOpen ? "100ms" : "0ms" }}
          >
            Architecture
          </a>
          <a
            href="#specs"
            onClick={closeMenu}
            className="text-[#8892A4] hover:text-[#C8D8F0] transition-colors text-sm font-medium py-3 border-b border-[#1C1E26] transform transition-all duration-300 ease-out"
            style={{ fontFamily: "var(--font-inter), sans-serif", transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-20px)", opacity: isMobileMenuOpen ? 1 : 0, transitionDelay: isMobileMenuOpen ? "150ms" : "0ms" }}
          >
            Specs
          </a>
          <a
            href="#pricing"
            onClick={closeMenu}
            className="text-[#8892A4] hover:text-[#C8D8F0] transition-colors text-sm font-medium py-3 border-b border-[#1C1E26] transform transition-all duration-300 ease-out"
            style={{ fontFamily: "var(--font-inter), sans-serif", transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-20px)", opacity: isMobileMenuOpen ? 1 : 0, transitionDelay: isMobileMenuOpen ? "200ms" : "0ms" }}
          >
            Pricing
          </a>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 pt-4">
            <a
              href="https://app.rivtor.com"
              onClick={closeMenu}
              className="w-full flex items-center justify-center overflow-hidden rounded bg-[#C8D8F0] hover:bg-[#C8D8F0]/90 transition-colors text-[#060608] text-sm font-bold h-10 px-4 tracking-wide uppercase"
              style={{ fontFamily: "var(--font-geist-mono), monospace" }}
            >
              Request Engine Access
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
