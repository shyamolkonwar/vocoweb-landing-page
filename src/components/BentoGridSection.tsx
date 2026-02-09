'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, ShieldCheck, BrainCircuit, Hammer, Activity } from 'lucide-react';

const features = [
  {
    id: 'factory',
    title: 'Global Edge Deployment',
    phase: 'PHASE 1: THE FACTORY (LIVE)',
    headline: 'Instant, Serverless Deployment to a Distributed Global Network',
    copy: 'Zero config, infinite scale. Deploy to a managed edge infrastructure for global scale and zero latency.',
    status: 'Status: Available Now',
    size: 'large',
    icon: <Hammer className="w-8 h-8 text-safety-orange" />,
    highlight: true
  },
  {
    id: 'fortress',
    title: 'Private MicroVM Sovereignty',
    phase: 'PHASE 2: THE FORTRESS (IN DEVELOPMENT)',
    headline: 'Hardware-Isolated Firecracker MicroVMs',
    copy: 'The rollout of hardware-isolated Firecracker MicroVMs for data-sensitive Enterprise workloads requiring true isolation.',
    status: 'Status: In Development',
    size: 'medium',
    icon: <ShieldCheck className="w-8 h-8 text-safety-orange" />
  },
  {
    id: 'standard',
    title: 'The Compliance Kernel',
    phase: 'PHASE 3: THE STANDARD (DEPLOYING)',
    headline: 'Standardizing Identity and Commerce',
    copy: 'The release of our proprietary SDKs to standardize Identity (@vocoweb/auth) and Commerce (@vocoweb/pay) across the ecosystem.',
    status: 'Status: Deploying Now',
    size: 'medium',
    icon: <ShieldCheck className="w-8 h-8 text-safety-orange" />
  },
  {
    id: 'intellectual',
    title: 'VocoStrategy',
    phase: 'PHASE 4: THE INTELLECTUAL LAYER (ALPHA)',
    headline: 'From "Prompting" to "Planning"',
    copy: 'The shift to an AI Product Manager that converts abstract intent into rigorous technical specifications (PRDs).',
    status: 'Status: Alpha Access',
    size: 'large',
    icon: <BrainCircuit className="w-8 h-8 text-safety-orange" />
  }
];

export default function BentoGridSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="py-32 relative">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="eyebrow mb-4">THE ROADMAP</div>
          <h2 className="heading-lg mb-6">The Master Plan.</h2>
          <p className="body-text-large max-w-3xl mx-auto">
            We are executing a multi-phase transition to autonomous enterprise.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className={`glass-effect rounded-lg p-8 relative overflow-hidden ${feature.size === 'large' ? 'md:col-span-2 lg:col-span-2' : ''
                } ${feature.highlight ? 'border-safety-orange' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              {/* Animated background for highlighted feature */}
              {feature.highlight && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-safety-orange/10 to-transparent"
                  animate={{
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}

              {/* Icon */}
              <motion.div
                className="mb-6"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
              >
                {feature.icon}
              </motion.div>

              {/* Phase indicator */}
              {feature.phase && (
                <motion.div
                  className="eyebrow mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {feature.phase}
                </motion.div>
              )}

              {/* Title */}
              <motion.h3
                className="heading-md mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {feature.headline}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="body-text mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 + 0.6 }}
              >
                {feature.copy}
              </motion.p>

              {/* Status */}
              {feature.status && (
                <motion.div
                  className="font-mono text-xs text-safety-orange"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                >
                  {feature.status}
                </motion.div>
              )}

              {/* Radar animation for research */}
              {feature.id === 'research' && (
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full border-2 border-safety-orange/30 rounded-full">
                    <div className="absolute top-0 left-1/2 w-px h-1/2 bg-safety-orange origin-bottom"></div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-flex items-center space-x-4">
            <button className="btn-primary">
              Join Phase 1
            </button>
            <div className="font-mono text-sm text-gray-500">
              Secure priority access to future phases
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}