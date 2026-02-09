'use client';
import { sendGTMEvent, ANALYTICS_EVENTS } from '@/lib/analytics';
import { motion } from 'framer-motion';

const pricingPlans = [
  {
    id: 'free',
    name: 'Free Forever',
    price: '$0',
    period: 'forever',
    description: 'For testing the engine.',
    features: [
      'Limited AI Generation (Eco Mode)',
      'Live Preview Environment',
      'Kernel: Read-Only Access',
      'Cannot Deploy to Production',
      'Non-Commercial License'
    ],
    cta: 'Start Testing',
    highlight: false
  },
  {
    id: 'builder',
    name: 'Builder Access',
    price: '$39',
    period: 'month',
    description: 'For validating commercial viability.',
    features: [
      'Infrastructure: 3 Live Edge Deployments',
      'Core Engine: VocoBuild Access (Eco Mode)',
      'Commerce: Stripe Integration Capabilities',
      'Asset Control: Full Code Export (GitHub/ZIP)',
      'Identity: Standard Auth Integration'
    ],
    cta: 'Secure Access',
    highlight: false
  },
  {
    id: 'founder',
    name: 'Founder Access',
    price: '$79',
    period: 'month',
    description: 'For scaling revenue-generating assets.',
    features: [
      'Infrastructure: Unlimited Deployments',
      'Core Engine: Priority Turbo Queue',
      'Intelligence: Alpha Access to VocoStrategy',
      'Compliance: Access to Proprietary Kernel Modules',
      'Support: Direct Founder Channel'
    ],
    cta: 'Join The Foundry',
    highlight: true
  }
];

const faqs = [
  {
    question: 'What is the VocoWeb Kernel?',
    answer: 'It is our proprietary Standard Library. While others rely on generative probability, the Kernel provides deterministic security. It is a pre-audited, hard-coded layer that handles Authentication, Payments, and Legal Compliance. It ensures that every VocoWeb application is enterprise-grade by default.'
  },
  {
    question: 'How does the infrastructure scale?',
    answer: 'We utilize a Global Edge Network architecture. Unlike traditional servers that hit capacity limits, VocoWeb deployments automatically replicate across global availability zones, ensuring enterprise-grade uptime from Day 1.'
  },
  {
    question: 'Is this platform compliant for the EU market?',
    answer: 'Explicitly. VocoWeb was architected with a "Europe-First" compliance mindset. Our infrastructure defaults to EU data residency, and our Kernel includes automated workflows for GDPR "Right to be Forgotten" and ePrivacy Directive mandates.'
  },
  {
    question: 'Do I retain asset sovereignty?',
    answer: 'Absolute sovereignty. You are building an asset, not renting a service. You retain full ownership of your codebase and data, with the ability to export or self-host your application at any time using our standard open-source libraries.'
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-32 relative scroll-mt-40">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="eyebrow mb-4">PRICING</div>
          <h2 className="heading-lg mb-6">Secure Your Infrastructure.</h2>
          <p className="body-text-large max-w-3xl mx-auto">
            Access to the Foundry is tiered based on operational capacity.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-32">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`glass-effect rounded-lg p-8 relative overflow-hidden ${plan.highlight ? 'border-safety-orange scale-105' : ''
                }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: plan.highlight ? 1.05 : 1.02 }}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-safety-orange text-void-black font-mono text-xs uppercase tracking-wider py-2 text-center">
                  Most Popular
                </div>
              )}

              <div className={plan.highlight ? 'pt-8' : ''}>
                <div className="text-center mb-8">
                  <h3 className="heading-md mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                  <p className="body-text">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                    >
                      <div className="w-2 h-2 bg-safety-orange rounded-full mt-2 flex-shrink-0"></div>
                      <span className="body-text">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.a
                  href="https://app.vocoweb.in"
                  onClick={() => sendGTMEvent({
                    action: ANALYTICS_EVENTS.CLICK_PRICING_PLAN,
                    category: ANALYTICS_EVENTS.CATEGORY_CONVERSION,
                    label: plan.id
                  })}
                  className={`block w-full text-center py-3 font-mono text-sm uppercase tracking-wider transition-colors ${plan.highlight
                    ? 'bg-safety-orange text-void-black hover:bg-orange-500'
                    : 'border border-gray-600 text-signal-white hover:bg-tungsten-grey'
                    }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fair Use Disclaimer */}
        <div className="text-center mb-20">
          <p className="text-xs text-gray-500">
            * Unlimited Standard Generations subject to Fair Use Policy. Turbo Mode credits available for complex logic.
          </p>
        </div>

        {/* Enterprise Card */}
        <motion.div
          className="max-w-4xl mx-auto mb-32 glass-effect rounded-lg p-8 md:p-12 relative overflow-hidden border border-gray-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 md:mb-12">
            <div className="text-center md:text-left">
              <h3 className="heading-md text-white mb-2">Enterprise</h3>
              <p className="body-text text-gray-400 max-w-xl">
                For organizations requiring data sovereignty.
              </p>
            </div>
            <div className="text-center md:text-right">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">Custom</div>
              <div className="text-sm font-mono text-safety-orange uppercase tracking-wider">Contact Us</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-safety-orange rounded-full mt-2 flex-shrink-0" />
                <div className="body-text">
                  <span className="text-white font-medium">Private Cloud Deployment (BYOC)</span>
                  <p className="text-xs text-gray-500 mt-0.5">Bring Your Own Cloud</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-safety-orange rounded-full mt-2 flex-shrink-0" />
                <div className="body-text">
                  <span className="text-white font-medium">Dedicated Instance (Your VPC)</span>
                  <p className="text-xs text-gray-500 mt-0.5">Isolated infrastructure</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-safety-orange rounded-full mt-2 flex-shrink-0" />
                <div className="body-text">
                  <span className="text-white font-medium">SSO / SAML Integration</span>
                  <p className="text-xs text-gray-500 mt-0.5">Enterprise identity</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-safety-orange rounded-full mt-2 flex-shrink-0" />
                <div className="body-text">
                  <span className="text-white font-medium">99.9% Uptime SLA</span>
                  <p className="text-xs text-gray-500 mt-0.5">Guaranteed reliability</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-safety-orange rounded-full mt-2 flex-shrink-0" />
                <div className="body-text">
                  <span className="text-white font-medium">Custom Contracts & Invoicing</span>
                  <p className="text-xs text-gray-500 mt-0.5">Flexible billing</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/contact"
              onClick={() => sendGTMEvent({
                action: ANALYTICS_EVENTS.CLICK_PRICING_PLAN,
                category: ANALYTICS_EVENTS.CATEGORY_CONVERSION,
                label: 'enterprise_contact'
              })}
              className="inline-block bg-white text-black font-mono text-sm uppercase tracking-wider px-8 py-3 rounded hover:bg-gray-200 transition-colors"
            >
              Contact Sales
            </a>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <div className="eyebrow mb-4">FAQ</div>
            <h3 className="heading-md mb-4">Operational Intelligence</h3>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="font-semibold text-lg mb-3 text-signal-white">
                  Q: {faq.question}
                </h4>
                <p className="body-text text-gray-300">
                  A: {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
