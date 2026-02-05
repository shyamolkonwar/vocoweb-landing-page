'use client';
import { sendGTMEvent, ANALYTICS_EVENTS } from '@/lib/analytics';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

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

  const spotlightX = useTransform(mouseXSpring, [-1, 1], [-100, 100]);
  const spotlightY = useTransform(mouseYSpring, [-1, 1], [-100, 100]);
  const dashboardRotateX = useTransform(mouseYSpring, [-1, 1], [10, -10]);
  const dashboardRotateY = useTransform(mouseXSpring, [-1, 1], [-10, 10]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40">
      {/* Background gradient that responds to mouse */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, 
            rgba(255, 77, 0, 0.1) 0%, 
            rgba(255, 77, 0, 0.05) 25%, 
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

      <div className="container relative z-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="eyebrow mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              VocoWeb • Build for Good
            </motion.div>

            <motion.h1
              className="heading-xl mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              The Business
              <br />
              Operating System
            </motion.h1>

            <motion.p
              className="body-text-large max-w-3xl mx-auto mb-12 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              From concept to IPO on a single, secure foundation.
              <br />
              Most AI tools generate code. VocoWeb architects the first end-to-end platform to validate, build, and operate sustainable companies.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <a
                href="https://app.vocoweb.in"
                onClick={() => sendGTMEvent({
                  action: ANALYTICS_EVENTS.CLICK_HERO_CTA,
                  category: ANALYTICS_EVENTS.CATEGORY_ENGAGEMENT,
                  label: 'start_building_main'
                })}
                className="btn-primary"
              >
                Start Building
              </a>
              <div className="font-mono text-sm text-gray-400">
                STATUS: BUILDER [ONLINE]
              </div>
            </motion.div>
          </motion.div>

          {/* Dashboard Monolith */}
          <motion.div
            className="relative mx-auto"
            style={{
              perspective: '1000px',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <motion.div
              className="relative w-full max-w-4xl mx-auto"
              style={{
                rotateX: dashboardRotateX,
                rotateY: dashboardRotateY,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Dashboard Mockup */}
              <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-lg border border-gray-800 p-8 shadow-2xl">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-safety-orange"></div>
                    <div className="font-mono text-sm text-gray-300">VocoWeb Dashboard</div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Project Card */}
                  <div className="bg-[#0A0A0A] border border-gray-700 rounded p-6">
                    <div className="font-mono text-xs text-safety-orange mb-2">ACTIVE PROJECT</div>
                    <div className="font-sans text-lg font-semibold mb-4">E-commerce Platform</div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Status</span>
                        <span className="text-green-400">Building</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Architecture</span>
                        <span className="text-gray-300">Modern Cloud</span>
                      </div>
                    </div>
                  </div>

                  {/* Metrics Card */}
                  <div className="bg-[#0A0A0A] border border-gray-700 rounded p-6">
                    <div className="font-mono text-xs text-safety-orange mb-2">SYSTEM METRICS</div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Startup Time</span>
                        <span className="font-mono text-green-400">Instant</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Security</span>
                        <span className="font-mono text-green-400">Maximum</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Export</span>
                        <span className="font-mono text-green-400">Simple</span>
                      </div>
                    </div>
                  </div>

                  {/* Code Preview */}
                  <div className="bg-[#0A0A0A] border border-gray-700 rounded p-6">
                    <div className="font-mono text-xs text-safety-orange mb-2">CODE PREVIEW</div>
                    <div className="font-mono text-xs space-y-1">
                      <div className="text-blue-400">import</div>
                      <div className="text-gray-300">ReactNode</div>
                      <div className="text-blue-400">from</div>
                      <div className="text-green-400">&apos;react&apos;;</div>
                      <div className="text-gray-500">Production ready</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Status Bar */}
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="font-mono text-xs text-gray-300">SYSTEM ONLINE</span>
                      </div>
                      <div className="font-mono text-xs text-gray-500">Phase 1 Operational</div>
                    </div>
                    <div className="font-mono text-xs text-gray-400">© 2026 VocoWeb.</div>
                  </div>
                </div>
              </div>

              {/* Metallic bevel effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="font-mono text-xs text-gray-500">Scroll to explore</div>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
