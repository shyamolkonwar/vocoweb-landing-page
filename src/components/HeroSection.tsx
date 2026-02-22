'use client';

import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;

      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Background gradient that responds to mouse */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%,
            rgba(229, 72, 38, 0.1) 0%,
            rgba(229, 72, 38, 0.05) 25%,
            transparent 50%)`
        }}
      />

      {/* Spotlight effect */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 30}% ${50 + mousePosition.y * 30}%,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.04) 20%,
            transparent 40%)`,
        }}
      />

      <div className="container relative z-20 max-w-7xl mx-auto px-6 md:px-12">
        {/* Backed by Jacobs Capital */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-6"
        >
          <p className="font-mono text-xs tracking-widest uppercase text-[#9CA3AF]">
            Official V1 Released.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F3F4F6] mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ letterSpacing: '-0.02em' }}
          >
            Engineering the end of legacy software.
          </motion.h1>

          <motion.p
            className="font-sans text-lg md:text-xl text-[#9CA3AF] max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            The foundational engine for instant, production-grade infrastructure.
            We collapse six-month development cycles into a single moment of execution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link
              href="#pricing"
              className="inline-block bg-[#E54826] text-[#070707] font-mono text-sm font-semibold uppercase tracking-widest px-8 py-4 hover:bg-[#C43D1F] transition-colors"
            >
              Request Engine Access
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-b from-[#262626] to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
