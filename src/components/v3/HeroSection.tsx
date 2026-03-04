"use client";

import { useState } from "react";
import WaitlistDialog from "./WaitlistDialog";

export default function HeroSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const scrollToArchitecture = () => {
    const element = document.getElementById("architecture");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center text-center max-w-4xl gap-6 md:gap-8 relative py-16 md:py-20 px-4 md:px-6 mx-auto w-full">
      {/* Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] lg:w-[800px] h-[250px] md:h-[350px] lg:h-[500px] bg-[#C8D8F0]/3 md:bg-[#C8D8F0]/4 blur-[100px] md:blur-[120px] rounded-full pointer-events-none z-0" />

      {/* System Status Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C8D8F0]/20 bg-[#C8D8F0]/5 text-xs text-[#C8D8F0] uppercase tracking-widest" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8D8F0] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C8D8F0]" />
        </span>
        System Operational
      </div>

      {/* Headlines */}
      <div className="flex flex-col gap-4 relative z-10">
        <h1 className="text-[#F4F6FB] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight uppercase break-words" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
          The organization{" "}
          <span className="bg-gradient-to-r from-[#C8D8F0] via-[#E8F0FF] to-[#C8D8F0] bg-clip-text text-transparent">
            runs itself.
          </span>
        </h1>
        <h2 className="text-[#8892A4] text-base md:text-xl font-normal max-w-full md:max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
          Rivtor is the engine that converts a single directive into a fully operational, production-grade digital environment. No engineering team. No six-month runway. No compromise.
        </h2>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center relative z-10">
        <button
          onClick={() => setIsDialogOpen(true)}
          className="flex w-full sm:w-auto min-w-[160px] cursor-pointer items-center justify-center rounded bg-[#C8D8F0] text-[#060608] text-sm font-bold h-12 px-6 tracking-wide hover:shadow-[0_0_20px_-5px_#C8D8F0] transition-all uppercase"
          style={{ fontFamily: "var(--font-geist-mono), monospace" }}
        >
          Join Waitlist
        </button>
        <button
          onClick={scrollToArchitecture}
          className="flex w-full sm:w-auto min-w-[160px] cursor-pointer items-center justify-center rounded border border-[#1C1E26] bg-transparent text-[#F4F6FB] text-sm font-bold h-12 px-6 tracking-wide hover:border-[#C8D8F0]/50 hover:bg-[#0E0F12] transition-all uppercase"
          style={{ fontFamily: "var(--font-geist-mono), monospace" }}
        >
          View Architecture
        </button>
      </div>

      {/* Hero Video */}
      <div className="mt-16 w-full h-64 md:h-80 relative rounded border border-[#1C1E26] bg-[#0E0F12]/50 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/poster.png"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80 pointer-events-none"
        >
          <source src="/videos/motion_3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Waitlist Dialog */}
      <WaitlistDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </section>
  );
}
