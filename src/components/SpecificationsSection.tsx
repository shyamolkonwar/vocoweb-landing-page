'use client';

import { motion } from 'framer-motion';

const specs = [
  {
    category: "Infrastructure",
    items: [
      "Serverless edge network.",
      "Containerized build environments.",
      "Sub-100ms cold starts.",
    ],
  },
  {
    category: "Compliance",
    items: [
      "EU-native data residency.",
      "Automated right to be forgotten.",
      "WCAG 2.1 AA enforced.",
    ],
  },
  {
    category: "Commerce",
    items: [
      "Stripe Connect integration.",
      "Pre-built pricing user interface.",
      "EU-compliant PDF invoice generation.",
    ],
  },
  {
    category: "Code Standards",
    items: [
      "React and Node architecture.",
      "TypeScript native.",
      "Full GitHub synchronization.",
    ],
  },
];

export default function SpecificationsSection() {
  return (
    <section id="specifications" className="py-32 md:py-48 bg-[#141414] border-t border-[#262626]">
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
            The Specifications
          </h2>
        </motion.div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h3 className="font-mono text-xs text-[#9CA3AF] uppercase tracking-widest mb-6 pb-3 border-b border-[#262626]">
                {spec.category}
              </h3>
              <ul className="space-y-3">
                {spec.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="font-sans text-[#9CA3AF] leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
