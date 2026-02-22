'use client';

import { motion } from 'framer-motion';

const principles = [
  {
    title: "Zero-latency deployment.",
    description: "Bypassing the friction of traditional engineering. A single directive architects secure databases and managed runtimes instantaneously.",
  },
  {
    title: "Absolute compliance.",
    description: "Built for the rigid logic of the physical world. Audit-ready environments generated to exact regulatory specifications.",
  },
  {
    title: "Institutional architecture.",
    description: "Production-ready infrastructure designed for serious operators. No fragile spreadsheets. No unscalable visual builders.",
  },
];

export default function ManifestoSection() {
  return (
    <section id="manifesto" className="py-32 md:py-48 bg-[#070707] border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-mono text-xs tracking-widest uppercase text-[#E54826] mb-4">
            The Manifesto
          </h2>
          <p className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-[#F3F4F6] max-w-4xl leading-tight" style={{ letterSpacing: '-0.02em' }}>
            Speed is no longer a feature. It is the foundation.
          </p>
          <p className="mt-12 font-sans text-lg text-[#9CA3AF] max-w-2xl leading-relaxed">
            For decades, building enterprise software has been a compromise between speed and scale. That era is over. Rivtor replaces the friction of traditional development with zero-latency execution.
          </p>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="pt-8 border-t border-[#262626]"
            >
              <h3 className="font-sans text-xl font-semibold text-[#F3F4F6] mb-4 leading-snug" style={{ letterSpacing: '-0.01em' }}>
                {principle.title}
              </h3>
              <p className="font-sans text-[#9CA3AF] leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
