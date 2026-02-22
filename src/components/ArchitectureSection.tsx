'use client';

import { motion } from 'framer-motion';

const features = [
  {
    id: "01",
    title: "Compliance as code.",
    description: "We do not rely on generative probability for security. The Rivtor Kernel is a hardened standard library that enforces compliance, identity management, and data residency at the compiler level. The logic is injected, not written.",
  },
  {
    id: "02",
    title: "Data boundary enforcement.",
    description: "For the European market, compliance is binary. The runtime environment strictly enforces geographical data boundaries, ensuring applications meet enterprise governance from the first deployment.",
  },
  {
    id: "03",
    title: "Integrated merchant infrastructure.",
    description: "Revenue logic is native to the environment. The architecture creates a direct bridge between application functions and global financial rails, handling payments, invoicing, and tax calculations autonomously.",
  },
  {
    id: "04",
    title: "Universal access governance.",
    description: "Identity is the perimeter. Rivtor inherits a banking-grade identity provider, enforcing multi-tenancy, role-based access control, and enterprise single sign-on at the infrastructure level.",
  },
];

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="py-32 md:py-48 bg-[#070707] border-t border-[#262626]">
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
            The Architecture
          </h2>
          <p className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-[#F3F4F6] max-w-4xl leading-tight" style={{ letterSpacing: '-0.02em' }}>
            Proprietary technology. Standardizing the unstandardizable.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-[#141414] border border-[#262626] p-8 md:p-10"
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="font-mono text-xs text-[#9CA3AF]">{feature.id}</span>
              </div>
              <h3 className="font-sans text-2xl font-semibold text-[#F3F4F6] mb-4 leading-snug" style={{ letterSpacing: '-0.01em' }}>
                {feature.title}
              </h3>
              <p className="font-sans text-[#9CA3AF] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
