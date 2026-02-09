'use client';

import { motion } from 'framer-motion';
import { useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BrochurePage() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <SmoothScrollProvider>
      <Navbar />
      <main className="min-h-screen bg-void-black">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40">
          {/* Background gradient that responds to mouse */}
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%',
                rgba(255, 77, 0, 0.1) 0%,
                rgba(255, 77, 0, 0.05) 25%,
                transparent 50%)`
            }}
          />

          {/* Spotlight effect */}
          <motion.div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${50 + mousePosition.x * 30}% ${50 + mousePosition.y * 30}%',
                rgba(255, 255, 255, 0.08) 0%,
                rgba(255, 255, 255, 0.04) 20%,
                transparent 40%)`,
            }}
          />

          <div className="container relative z-20">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center"
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
                  VocoWeb
                </motion.div>

                <motion.h1
                  className="heading-xl mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  The End-to-End
                  <br />
                  Business Foundry
                </motion.h1>

                <motion.p
                  className="heading-lg text-safety-orange mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Stop building code. Start building assets.
                </motion.p>

                <motion.div
                  className="font-mono text-sm text-gray-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  STATUS: BUILDER [ONLINE]
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Market Gap Section */}
        <section className="py-32 relative border-t border-gray-800">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="eyebrow mb-4">THE MARKET GAP</div>
              <h2 className="heading-lg mb-8">
                <span className="text-safety-orange">&ldquo;</span>
                Code Generation is Solved.
                <br />
                Business Building is Broken.
                <span className="text-safety-orange">&rdquo;</span>
              </h2>
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p
                className="body-text-large mb-12 text-gray-300"
                variants={itemVariants}
              >
                We are witnessing an explosion of AI coding tools (Replit, Bolt, Cursor). While they have democratized writing code, they have failed to democratize building a business.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'The "Token Trap"',
                    description: 'Competitors charge per-prompt, incentivizing failure and creating unpredictable bills for founders.'
                  },
                  {
                    title: 'The "Toy" Problem',
                    description: 'Apps generated by current AI tools are fragile "sandboxes." They break when exposed to real-world traffic, payments, or compliance regulations.'
                  },
                  {
                    title: 'The "Compliance Void"',
                    description: 'Current tools ignore the complex reality of operating a SaaS—GDPR, VAT, Security, and Identity—leaving founders legally exposed.'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="glass-effect p-8"
                    variants={itemVariants}
                  >
                    <div className="font-mono text-xs text-safety-orange mb-4">
                      0{index + 1}
                    </div>
                    <h3 className="heading-md mb-4">{item.title}</h3>
                    <p className="body-text">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-12 p-8 border border-safety-orange bg-safety-orange/5"
                variants={itemVariants}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-safety-orange">
                    <span className="font-mono text-void-black font-bold">OP</span>
                  </div>
                  <div>
                    <h3 className="heading-md mb-2">The Opportunity</h3>
                    <p className="body-text-large text-signal-white">
                      The market doesn&apos;t need a faster text editor. It needs an <span className="text-safety-orange font-semibold">Autonomous CTO & Compliance Officer.</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Our Solution Section */}
        <section className="py-32 relative border-t border-gray-800">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="eyebrow mb-4">OUR SOLUTION</div>
              <h2 className="heading-lg mb-6">
                VocoWeb is not a Code Editor.
                <br />
                <span className="text-safety-orange">It is a Sovereign Business Operating System.</span>
              </h2>
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="body-text-large mb-12 text-gray-300">
                VocoWeb replaces the fragmented stack of &ldquo;Dev Agency + DevOps + Legal Consultant&rdquo; with a unified, automated platform. We target the <span className="text-signal-white font-semibold">Non-Technical B2B Founder</span>, specifically in bureaucracy-heavy markets like the EU, providing a &ldquo;Golden Path&rdquo; from idea to revenue.
              </p>
            </motion.div>

            {/* Solution Cards */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Anti-Fragile Builder */}
              <motion.div
                className="lg:col-span-1 glass-effect p-8"
                variants={itemVariants}
              >
                <div className="font-mono text-xs text-safety-orange mb-4">
                  01
                </div>
                <h3 className="heading-md mb-4">The "Anti-Fragile" Builder</h3>
                <p className="body-text mb-4 text-gray-400">
                  Unlike competitors that "vibe code" from scratch (leading to bugs), VocoWeb utilizes a <span className="text-signal-white">Proprietary Kernel</span>.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-safety-orange"></div>
                    <span className="font-mono text-xs text-gray-300">Configuration &gt; Generation</span>
                  </div>
                  <p className="body-text text-sm">
                    Our AI doesn&apos;t write risky business logic. It configures our pre-tested, hardened modules (<span className="font-mono text-safety-orange">@vocoweb/kernel</span>).
                  </p>
                  <div className="mt-4 p-4 bg-void-black border border-gray-800">
                    <div className="font-mono text-xs text-green-400 mb-1">RESULT</div>
                    <p className="body-text text-sm text-signal-white">
                      Applications that are secure, strictly typed, and deployable by default.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Compliance Shield */}
              <motion.div
                className="lg:col-span-1 glass-effect p-8 border-safety-orange border"
                variants={itemVariants}
              >
                <motion.div
                  className="absolute inset-0 bg-safety-orange/5 pointer-events-none"
                  animate={{
                    opacity: [0.02, 0.05, 0.02],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative">
                  <div className="font-mono text-xs text-safety-orange mb-4">
                    02
                  </div>
                  <h3 className="heading-md mb-4">The "Compliance Shield"</h3>
                  <div className="eyebrow mb-4">Our Monopoly Moat</div>
                  <p className="body-text mb-6 text-gray-400">
                    We automate the bureaucracy that kills startups.
                  </p>
                  <div className="space-y-4">
                    {[
                      { name: 'Auto-GDPR', desc: 'Apps ship with dynamic "Right to be Forgotten" engines and ePrivacy-compliant cookie walls.' },
                      { name: 'Auto-Tax', desc: 'Integrated VAT/GST handling for EU B2B transactions.' },
                      { name: 'Sovereignty', desc: 'Guaranteed data residency in EU regions. We keep founders out of jail.' }
                    ].map((item, idx) => (
                      <div key={idx} className="p-4 bg-void-black border border-gray-800">
                        <div className="font-mono text-xs text-safety-orange mb-2">{item.name}</div>
                        <p className="body-text text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Financial Engine */}
              <motion.div
                className="lg:col-span-1 glass-effect p-8"
                variants={itemVariants}
              >
                <div className="font-mono text-xs text-safety-orange mb-4">
                  03
                </div>
                <h3 className="heading-md mb-4">The "Financial Engine"</h3>
                <div className="space-y-6">
                  <div className="p-4 bg-void-black border border-gray-800">
                    <div className="font-mono text-xs text-safety-orange mb-2">MERCHANT OF RECORD READY</div>
                    <p className="body-text text-sm">
                      Pre-wired Stripe integration that handles the UI, Webhooks, and Invoicing.
                    </p>
                  </div>
                  <div className="p-4 bg-void-black border border-gray-800">
                    <div className="font-mono text-xs text-safety-orange mb-2">BUSINESS INTELLIGENCE</div>
                    <p className="body-text text-sm">
                      A "Foundry Dashboard" that visualizes Users, Revenue, and Churn—not just server logs.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Proprietary Technology Section */}
        <section className="py-32 relative border-t border-gray-800">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="eyebrow mb-4">PROPRIETARY TECHNOLOGY</div>
              <h2 className="heading-lg mb-6">
                We don&apos;t sell generic AI.
                <br />
                <span className="text-safety-orange">We sell a proprietary Standard Library.</span>
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  name: '@vocoweb/kernel',
                  description: 'The "Brain" that enforces security and prevents data leaks.',
                  accent: true
                },
                {
                  name: '@vocoweb/tenant',
                  description: 'Enterprise-grade Multi-Tenancy (Teams & RBAC) out of the box.'
                },
                {
                  name: '@vocoweb/shield',
                  description: 'A runtime firewall that blocks non-compliant traffic and data egress.'
                },
                {
                  name: 'Managed Infrastructure',
                  description: 'A wrapper around high-performance Global Edge Network ensuring zero-latency deployment and instant "One-Click" deployment.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`p-8 ${item.accent ? 'bg-safety-orange text-void-black' : 'glass-effect'}`}
                  variants={itemVariants}
                >
                  <div className={`font-mono text-xs ${item.accent ? 'text-void-black/70' : 'text-safety-orange'} mb-4`}>
                    {item.name}
                  </div>
                  <p className={`body-text ${item.accent ? 'text-void-black' : ''}`}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Business Model Section */}
        <section className="py-32 relative border-t border-gray-800">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="eyebrow mb-4">BUSINESS MODEL</div>
              <h2 className="heading-lg">
                Aligned Incentives.
                <br />
                <span className="text-safety-orange">No "Token Burn."</span>
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="glass-effect p-8"
                variants={itemVariants}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-safety-orange">
                    <span className="font-mono text-void-black font-bold text-xl">01</span>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-safety-orange mb-1">SUBSCRIPTION</div>
                    <h3 className="heading-md">SaaS Subscription</h3>
                  </div>
                </div>
                <div className="font-mono text-4xl font-bold text-safety-orange mb-4">
                  $39 - $79<span className="text-lg text-gray-400">/mo</span>
                </div>
                <p className="body-text">
                  Predictable pricing for the "Factory." Founders pay for the certainty of our infrastructure and the "Eco Mode" unlimited iteration engine.
                </p>
              </motion.div>

              <motion.div
                className="glass-effect p-8 border-safety-orange border"
                variants={itemVariants}
              >
                <motion.div
                  className="absolute inset-0 bg-safety-orange/5 pointer-events-none rounded"
                  animate={{
                    opacity: [0.02, 0.08, 0.02],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 flex items-center justify-center bg-safety-orange">
                      <span className="font-mono text-void-black font-bold text-xl">02</span>
                    </div>
                    <div>
                      <div className="font-mono text-xs text-safety-orange mb-1">FINTech</div>
                      <h3 className="heading-md">The "Gateway" Fee</h3>
                    </div>
                  </div>
                  <p className="body-text mb-4">
                    We capture a percentage of the transaction volume (GMV) processed by successful apps built on VocoWeb.
                  </p>
                  <div className="p-4 bg-void-black border border-gray-800">
                    <div className="font-mono text-xs text-green-400">
                      We grow when our users grow.
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* The Vision Section */}
        <section className="py-32 relative border-t border-gray-800">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="eyebrow mb-4">THE VISION</div>
              <h2 className="heading-xl mb-8">
                The One-Person
                <br />
                <span className="text-safety-orange">Unicorn.</span>
              </h2>
              <p className="body-text-large mb-12 text-gray-300">
                We are building the infrastructure that enables a single non-technical founder to operate a scalable, compliant, revenue-generating software company without hiring a single employee.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="glass-effect p-8">
                  <div className="font-mono text-xs text-safety-orange mb-4">CURRENT STATUS</div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="body-text">MVP Live</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="body-text">Deployment Engine Active</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="body-text">Kernel Architecture Defined</span>
                    </li>
                  </ul>
                </div>

                <div className="glass-effect p-8 border-safety-orange border">
                  <div className="font-mono text-xs text-safety-orange mb-4">NEXT MILESTONE</div>
                  <div className="body-text-large text-signal-white">
                    Dominating the EU B2B Founder niche.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tagline Section */}
        <section className="py-32 relative border-t border-gray-800">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="eyebrow mb-6">VocoWeb</div>
              <h2 className="heading-lg text-safety-orange max-w-4xl mx-auto">
                Operational Certainty in an AI World.
              </h2>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
