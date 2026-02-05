'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const products = [
  {
    id: '01',
    name: 'VocoResearch',
    phase: 'PHASE 2: IN DEVELOPMENT',
    headline: 'Intelligence, Not Intuition.',
    copy: 'We are training deep-search agents to validate market demand before you commit resources.',
    status: 'Deploying Q3 2026. Join Phase 1 to secure priority access.',
    active: false,
  },
  {
    id: '02',
    name: 'VocoStrategy',
    phase: 'PHASE 2: IN DEVELOPMENT',
    headline: 'The AI Product Manager.',
    copy: 'Converting unstructured notes into formal Product Requirement Documents (PRDs) and database schemas. No more vague prompts.',
    status: 'In internal beta testing.',
    active: false,
  },
  {
    id: '03',
    name: 'VocoBuild',
    phase: 'PHASE 1: LIVE NOW',
    headline: 'Industrial-Grade Generation.',
    copy: 'The core of the system is ready. Generate clean, production-ready React & Node.js applications.',
    features: [
      'Zero Token Metering',
      'Webcontainer Architecture',
      'Export Native'
    ],
    active: true, // "The Builder is bright"
  },
  {
    id: '04',
    name: 'The Foundry',
    phase: 'PHASE 3: COMING SOON',
    headline: 'Operational Sovereignty.',
    copy: 'The integrated backbone for global tax, payments, and identity management.',
    status: 'Architecting the financial layer.',
    active: false,
  },
];

const specs = [
  {
    category: 'INFRASTRUCTURE',
    items: [
      { label: 'Architecture', value: 'WebContainer Technology' },
      { label: 'Cold Start', value: '< 100ms' },
      { label: 'Isolation', value: 'Complete' }
    ]
  },
  {
    category: 'CODE STANDARDS',
    items: [
      { label: 'Frontend', value: 'React / Node.js' },
      { label: 'Language', value: 'TypeScript Native' },
      { label: 'Export', value: 'Full GitHub Export' },
    ]
  },
  {
    category: 'FINANCE',
    items: [
      { label: 'Payments', value: 'Stripe Connect Ready' },
      { label: 'MoR', value: 'Coming Soon' }, // Merchant of Record
      { label: 'Global Tax', value: 'Automated' }, // Augmented -> Automated (simplified)
    ]
  },
  {
    category: 'FREEDOM',
    items: [
      { label: 'Generation', value: 'Unmetered' },
      { label: 'Projects', value: 'Unlimited' },
      { label: 'Support', value: 'Docker Container' },
    ]
  }
];

export default function XRaySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#050505] py-24 md:py-32 px-4 overflow-hidden scroll-mt-40"
      id="architecture"
    >
      <motion.div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen"
        style={{ backgroundImage: 'url("/noise.png")', y: bgY }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-[#F5F5F7] text-4xl md:text-5xl font-bold tracking-tight mb-4">
            The Master Plan
          </h2>
          <div className="h-1 w-24 bg-[#FF4D00]" />
        </motion.div>

        {/* Product Grid (Ghost UI) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className={`
                relative p-8 rounded-2xl border transition-all duration-500
                ${product.active
                  ? 'bg-[#0A0A0A] border-[#FF4D00] shadow-[0_0_30px_rgba(255,77,0,0.1)] opacity-100'
                  : 'bg-[#080808] border-[#333]/50 opacity-60 hover:opacity-80 hover:border-[#333]'
                }
              `}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              {product.active && (
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(600px circle at 50% 0%, rgba(255,77,0,0.10), transparent 60%)'
                  }}
                  animate={{ opacity: [0.55, 0.9, 0.55] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                />
              )}
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <span className={`text-xs font-mono tracking-widest uppercase ${product.active ? 'text-[#FF4D00]' : 'text-[#666]'}`}>
                  {product.id}. {product.name}
                </span>
                <span className="text-[10px] font-mono border border-[#333] px-2 py-1 rounded text-[#888] bg-[#000]">
                  {product.phase}
                </span>
              </div>

              {/* Content */}
              <h3 className={`text-2xl font-bold mb-3 ${product.active ? 'text-white' : 'text-[#888]'}`}>
                {product.headline}
              </h3>
              <p className="text-[#888] text-sm leading-relaxed mb-6">
                {product.copy}
              </p>

              {/* Footer / Features */}
              {product.active ? (
                <div className="grid grid-cols-1 gap-2 border-t border-[#333] pt-4 mt-auto">
                  {product.features?.map(feat => (
                    <div key={feat} className="flex items-center gap-2 text-xs font-mono text-[#CCC]">
                      <span className="text-[#FF4D00]">✓</span> {feat}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center gap-2 text-xs font-mono text-[#555] border-t border-[#333]/50 pt-4 mt-auto">
                  <span className="animate-pulse">●</span> {product.status}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* THE SPECS */}
        <div className="border-t border-[#333] pt-20">
          <motion.div
            className="mb-12 text-center md:text-left"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h3 className="text-xl font-mono text-[#F5F5F7] mb-2 uppercase tracking-wide">
              The Specs <span className="text-[#444] ml-2">{'//'} Pure facts. No marketing.</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {specs.map((spec, index) => (
              <motion.div
                key={spec.category}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.06 }}
              >
                <h4 className="font-mono text-[10px] text-[#FF4D00] mb-6 tracking-[0.2em] uppercase border-b border-[#333] pb-2 inline-block w-full">
                  {spec.category}
                </h4>
                <div className="space-y-4">
                  {spec.items.map((item) => (
                    <div key={item.label} className="flex flex-col gap-1">
                      <span className="text-[#555] text-[10px] font-mono uppercase">{item.label}</span>
                      <span className="text-[#E5E5E5] text-sm font-mono">{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
