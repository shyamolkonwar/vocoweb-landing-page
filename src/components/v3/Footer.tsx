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
        { href: "#", label: "About" },
        { href: "#", label: "Careers" },
        { href: "/contact", label: "Contact" },
      ]
    },
    {
      id: "resources",
      title: "Resources",
      links: [
        { href: "#", label: "Documentation" },
        { href: "#", label: "API Reference" },
        { href: "#", label: "Status" },
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
            <div className="flex flex-col gap-2 mt-1">
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
                <a
                  href="https://www.microsoft.com/startups"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white rounded px-1.5 py-0.5 text-[10px] hover:opacity-80 transition-opacity leading-tight font-bold"
                  style={{ fontFamily: "var(--font-inter), sans-serif", backgroundImage: "linear-gradient(to right, rgb(242, 80, 34), rgb(127, 186, 0), rgb(0, 164, 239), rgb(255, 185, 0))" }}
                >
                  Microsoft for Startups
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
              <Link href="#" className="text-[#8892A4] hover:text-[#C8D8F0] text-sm transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                About
              </Link>
              <Link href="#" className="text-[#8892A4] hover:text-[#C8D8F0] text-sm transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Careers
              </Link>
              <Link href="/contact" className="text-[#8892A4] hover:text-[#C8D8F0] text-sm transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Contact
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-[#F4F6FB] font-bold uppercase text-sm" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                Resources
              </h4>
              <Link href="#" className="text-[#8892A4] hover:text-[#C8D8F0] text-sm transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Documentation
              </Link>
              <Link href="#" className="text-[#8892A4] hover:text-[#C8D8F0] text-sm transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                API Reference
              </Link>
              <Link href="#" className="text-[#8892A4] hover:text-[#C8D8F0] text-sm transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Status
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
        <div className="flex gap-6">
          <Link href="/privacy" className="text-[#8892A4] hover:text-[#C8D8F0] text-xs transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-[#8892A4] hover:text-[#C8D8F0] text-xs transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
