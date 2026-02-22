'use client';

import { motion } from 'framer-motion';

const phases = [
  {
    phase: "Phase 1",
    title: "The factory",
    status: "Live",
    description: "Unmetered generation deployed to a managed, globally distributed edge infrastructure. Zero configuration required.",
  },
  {
    phase: "Phase 2",
    title: "The fortress",
    status: "Rolling Alpha",
    description: "Hardware-isolated micro-virtual machines designed for data-sensitive enterprise workloads requiring absolute physical separation.",
  },
  {
    phase: "Phase 3",
    title: "The standard",
    status: "Deploying",
    description: "The release of proprietary software development kits to standardize enterprise identity and global commerce across the ecosystem.",
  },
  {
    phase: "Phase 4",
    title: "The intellectual layer",
    status: "Internal Testing",
    description: "The transition to an autonomous product manager that converts abstract corporate intent into rigorous technical specifications prior to deployment.",
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-32 md:py-48 bg-[#070707] border-t border-[#262626]">
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
            The Roadmap
          </h2>
          <p className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-[#F3F4F6] max-w-4xl leading-tight" style={{ letterSpacing: '-0.02em' }}>
            The progressive deployment.
          </p>
          <p className="mt-6 font-sans text-lg text-[#9CA3AF] max-w-2xl leading-relaxed">
            We are executing a multi-phase transition to autonomous enterprise infrastructure.
          </p>
        </motion.div>

        {/* Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-[#141414] border border-[#262626] p-6 md:p-8"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#9CA3AF] uppercase tracking-wider">
                  {item.phase}
                </span>
                <span className="font-mono text-xs text-[#E54826] uppercase tracking-wider">
                  {item.status}
                </span>
              </div>
              <h3 className="font-sans text-xl font-semibold text-[#F3F4F6] mb-3 leading-snug" style={{ letterSpacing: '-0.01em' }}>
                {item.title}
              </h3>
              <p className="font-sans text-sm text-[#9CA3AF] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
