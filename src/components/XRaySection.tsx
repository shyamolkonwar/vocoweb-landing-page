'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const products = [
  {
    id: '01',
    name: 'The VocoWeb Kernel™',
    phase: 'PROPRIETARY TECHNOLOGY',
    headline: 'Compliance as Code.',
    copy: 'We do not rely on generative ambiguity for security. We utilize a proprietary, hardened Standard Library (@vocoweb/kernel) that enforces GDPR compliance, Identity Management, and Data Sovereignty at the compiler level. The logic is not written; it is injected.',
    features: [
      'GDPR Compliance Enforced',
      'Identity Management',
      'Data Sovereignty'
    ],
    active: true,
  },
  {
    id: '02',
    name: 'The Sovereignty Shield',
    phase: 'DATA RESIDENCY',
    headline: 'Data Residency Enforcement.',
    copy: 'For the EU market, compliance is binary. VocoWeb\'s runtime environment strictly enforces data boundaries, ensuring your application meets the rigorous demands of enterprise governance from the first deploy.',
    status: 'Runtime Enforcement Active',
    active: false,
  },
  {
    id: '03',
    name: 'The Financial Backbone',
    phase: 'MERCHANT INFRASTRUCTURE',
    headline: 'Integrated Merchant Infrastructure.',
    copy: 'Revenue is not an afterthought. Our architecture creates a direct bridge between your application logic and global financial rails. Payments, invoicing, and tax calculation are native to the VocoWeb environment.',
    features: [
      'Stripe Integration',
      'Auto Invoicing',
      'Tax Calculation'
    ],
    active: false,
  },
  {
    id: '04',
    name: 'The Identity Matrix',
    phase: 'ACCESS GOVERNANCE',
    headline: 'Universal Access Governance.',
    copy: 'Identity is the perimeter. VocoWeb architects do not build login forms; they inherit a banking-grade Identity Provider. Our @vocoweb/tenant system enforces Multi-Tenancy, Role-Based Access Control (RBAC), and Enterprise SSO at the infrastructure level.',
    status: 'You own the user relationship; we secure the access.',
    active: false,
  }
];

const specs = [
  {
    category: 'INFRASTRUCTURE',
    items: [
      { label: 'Runtime', value: 'Serverless Edge Network' },
      { label: 'Cold Start', value: '< 100ms' },
      { label: 'Isolation', value: 'Containerized Build Environments' },
      { label: 'Region', value: 'EU-Native (Frankfurt Default)' }
    ]
  },
  {
    category: 'COMPLIANCE',
    items: [
      { label: 'GDPR', value: 'Automated "Right to be Forgotten"' },
      { label: 'Legal', value: 'Auto-generated Privacy Policy' },
      { label: 'Accessibility', value: 'WCAG 2.1 AA Enforced' },
      { label: 'Export', value: 'Full GitHub Sync (No Lock-in)' }
    ]
  },
  {
    category: 'COMMERCE',
    items: [
      { label: 'Payments', value: 'Stripe Connect Integration' },
      { label: 'Billing', value: 'Pre-built Pricing UI' },
      { label: 'Invoicing', value: 'EU-Compliant PDF Generation' },
      { label: 'Tax', value: 'VAT/GST Logic Ready' }
    ]
  },
  {
    category: 'CODE STANDARDS',
    items: [
      { label: 'Frontend', value: 'React / Node.js' },
      { label: 'Language', value: 'TypeScript Native' },
      { label: 'Generation', value: 'Unmetered' },
      { label: 'Projects', value: 'Unlimited' }
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
          <div className="text-[#FF4D00] font-mono text-xs tracking-[0.2em] uppercase mb-4">THE ARCHITECTURE</div>
          <h2 className="text-[#F5F5F7] text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Proprietary Technology.
          </h2>
          <p className="text-[#666] text-lg">Standardizing the unstandardizable.</p>
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
              {product.features && product.features.length > 0 ? (
                <div className="grid grid-cols-1 gap-2 border-t border-[#333] pt-4 mt-auto">
                  {product.features.map(feat => (
                    <div key={feat} className="flex items-center gap-2 text-xs font-mono text-[#CCC]">
                      <span className="text-[#FF4D00]">✓</span> {feat}
                    </div>
                  ))}
                </div>
              ) : product.status ? (
                <div className="flex items-center gap-2 text-xs font-mono text-[#555] border-t border-[#333]/50 pt-4 mt-auto">
                  <span className="animate-pulse">●</span> {product.status}
                </div>
              ) : null}
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
