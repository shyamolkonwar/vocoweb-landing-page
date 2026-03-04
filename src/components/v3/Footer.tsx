"use client";

import Link from "next/link";
import { useState, useMemo } from "react";

export default function Footer() {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const toggleSection = (section: string) => {
    setOpenSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const linkCategories = [
    {
      id: "product",
      title: "Product",
      links: [
        { href: "/mission", label: "Mission" },
        { href: "/vision", label: "Vision" },
        { href: "/security", label: "Security" },
      ]
    },
    {
      id: "company",
      title: "Company",
      links: [
        { href: "/about", label: "About" },
        { href: "/careers", label: "Careers" },
        { href: "/contact", label: "Contact" },
      ]
    },
    {
      id: "official",
      title: "Official",
      links: [
        { href: "/report", label: "Report" },
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
      ]
    },
  ];

  return (
    <footer className="w-full border-t border-[#1C1E26] pt-12 pb-8 mt-10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-12 w-full">
        {/* Desktop: Horizontal layout | Mobile: Centered stacked */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Logo & Tagline */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 text-[#F4F6FB]">
              <div className="size-4 text-[#C8D8F0]">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4L4 44H44L24 4Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="4" />
                  <circle cx="24" cy="28" fill="currentColor" r="4" />
                </svg>
              </div>
              <h2 className="text-[#F4F6FB] font-bold uppercase tracking-widest" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                RIVTOR
              </h2>
            </Link>
            <p className="text-[#8892A4] text-sm max-w-xs" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Engineering the end of legacy infrastructure.
            </p>

            {/* Sponsor Badge */}
            <div className="flex flex-row items-center gap-2 mt-1">
              <span className="text-[#8892A4] text-[10px] uppercase tracking-wider" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                Supported by
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://e2b.dev/startups"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/White-1.png"
                    alt="E2B"
                    className="h-4 w-auto hover:opacity-80 transition-opacity"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Link Categories - Desktop: Horizontal | Mobile: Accordions */}
          <div className="hidden md:flex gap-16 flex-wrap">
            <div className="flex flex-col gap-4">
              <h4 className="text-[#F4F6FB] font-bold uppercase text-sm" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                Product
              </h4>
              <Link href="/mission" className="text-[#8892A4] hover:text-[#C8D8F0] text-sm transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Mission
              </Link>
              <Link href="/vision" className="text-[#8892A4] hover:text-[#C8D8F0] text-sm transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Vision
              </Link>
              <Link href="/security" className="text-[#8892A4] hover:text-[#C8D8F0] text-sm transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Security
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-[#F4F6FB] font-bold uppercase text-sm" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                Company
              </h4>
              <Link href="/about" className="text-[#8892A4] hover:text-[#C8D8F0] text-sm transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                About
              </Link>
              <Link href="/careers" className="text-[#8892A4] hover:text-[#C8D8F0] text-sm transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Careers
              </Link>
              <Link href="/contact" className="text-[#8892A4] hover:text-[#C8D8F0] text-sm transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Contact
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-[#F4F6FB] font-bold uppercase text-sm" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                Official
              </h4>
              <Link href="/report" className="text-[#8892A4] hover:text-[#C8D8F0] text-sm transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Report
              </Link>
              <Link href="/privacy" className="text-[#8892A4] hover:text-[#C8D8F0] text-sm transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#8892A4] hover:text-[#C8D8F0] text-sm transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Mobile Accordions - Hidden on desktop */}
          <div className="md:hidden w-full">
            {linkCategories.map((category) => {
              const isOpen = openSections.includes(category.id);
              return (
                <div key={category.id} className="w-full">
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleSection(category.id)}
                    className="flex items-center justify-between w-full py-2"
                  >
                    <h4 className="text-[#F4F6FB] font-bold uppercase text-sm" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                      {category.title}
                    </h4>
                    {/* Mobile +/- Icon */}
                    <span className="text-[#C8D8F0] text-lg leading-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Links - Collapsed on mobile when closed */}
                  <div className={`flex flex-col gap-3 overflow-hidden transition-all duration-200 ${isOpen ? "max-h-48 mt-3 pointer-events-auto" : "max-h-0"}`}>
                    {category.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="text-[#8892A4] hover:text-[#C8D8F0] text-sm transition-colors"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Legal & Copyright */}
      <div className="max-w-[1440px] mx-auto mt-12 pt-8 border-t border-[#1C1E26] flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-6 lg:px-12 w-full">
        <p className="text-[#8892A4] text-xs" style={{ fontFamily: "var(--font-inter), sans-serif" }}>© {currentYear} Rivtor Industries. All rights reserved.</p>
        <div className="flex gap-4 items-center">
          <span className="text-[#8892A4] text-xs" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Connect</span>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/rivtor.hq/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8892A4] hover:text-[#C8D8F0] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          {/* X */}
          <a
            href="https://x.com/RivtorHQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8892A4] hover:text-[#C8D8F0] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/rivtor/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8892A4] hover:text-[#C8D8F0] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/rivtor-labs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8892A4] hover:text-[#C8D8F0] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
