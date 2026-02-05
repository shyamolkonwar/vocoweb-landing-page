'use client';
import { sendGTMEvent, ANALYTICS_EVENTS } from '@/lib/analytics';
import { motion } from 'framer-motion';

const pricingPlans = [
  {
    id: 'free',
    name: 'Free Forever',
    price: '$0',
    period: 'forever',
    description: 'Test the engine. See the architecture.',
    features: [
      'Limited AI Generation',
      'Live Preview Environment',
      'Non-Commercial License',
      'Cannot Export or Deploy'
    ],
    cta: 'Start Testing',
    highlight: false
  },
  {
    id: 'builder',
    name: 'The Builder',
    price: '$39',
    period: 'month',
    description: 'Perfect for starting your journey',
    features: [
      'VocoBuild Engine (Live)',
      '3 Active Projects',
      'Unlimited Generations',
      'Full Code Download',
      'Waitlist Priority for VocoResearch'
    ],
    cta: 'Start Building',
    highlight: false
  },
  {
    id: 'founder',
    name: 'The Founder',
    price: '$79',
    period: 'month',
    description: 'For serious builders and teams',
    features: [
      'VocoBuild Engine (Live)',
      'Unlimited Projects',
      'Priority Generation Queue',
      'Real-time Project Sync',
      'Alpha Access to VocoStrategy'
    ],
    cta: 'Join as Founder',
    highlight: true
  }
];

const faqs = [
  {
    question: 'Why are some features locked?',
    answer: 'We are building a Business Operating System, not just a chatbot. We refuse to release the Intelligence Layer (Research/Strategy) until it meets our standard of accuracy. Phase 1 is focused purely on the Build Engine.'
  },
  {
    question: 'Can I really export my code?',
    answer: 'Yes. You are building a business, not renting a room. You can export your complete project files to any platform at any time.'
  },
  {
    question: 'How is the "Builder" different from others?',
    answer: 'Most builders run in shared, fragile web environments. VocoBuild provides dedicated, secure infrastructure for every project. It is built for serious business use, not just experimentation.'
  },
  {
    question: 'What happens when Phase 2 launches?',
    answer: 'Active subscribers will receive automatic access to VocoResearch and VocoStrategy tools as they roll out, likely at no additional cost for early adopters.'
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
          <div className="eyebrow mb-4">Early Access Pricing</div>
          <h2 className="heading-lg mb-6">Build Today. Ready for Tomorrow.</h2>
          <p className="body-text-large max-w-3xl mx-auto">
            Why start with VocoWeb&apos;s builder now? Because the applications you generate today
            are being structured for the ecosystem of tomorrow.
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
                For organizations requiring private infrastructure and guaranteed uptime.
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
                <span className="body-text text-gray-300">Everything in Founder +</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-safety-orange rounded-full mt-2 flex-shrink-0" />
                <div className="body-text">
                  <span className="text-white font-medium">Private Cloud Deployment</span>
                  <p className="text-xs text-gray-500 mt-0.5">Dedicated instance for your organization</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-safety-orange rounded-full mt-2 flex-shrink-0" />
                <div className="body-text">
                  <span className="text-white font-medium">SSO / SAML Integration</span>
                  <p className="text-xs text-gray-500 mt-0.5">Coming soon</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-safety-orange rounded-full mt-2 flex-shrink-0" />
                <div className="body-text">
                  <span className="text-white font-medium">99.9% Uptime SLA</span>
                  <p className="text-xs text-gray-500 mt-0.5">Guaranteed reliability</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-safety-orange rounded-full mt-2 flex-shrink-0" />
                <div className="body-text">
                  <span className="text-white font-medium">Dedicated Account Manager</span>
                  <p className="text-xs text-gray-500 mt-0.5">Direct personal support channel</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-safety-orange rounded-full mt-2 flex-shrink-0" />
                <div className="body-text">
                  <span className="text-white font-medium">Custom Contracts & Invoicing</span>
                  <p className="text-xs text-gray-500 mt-0.5">PDF invoicing available</p>
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
            <h3 className="heading-md mb-4">Honest & Direct</h3>
            <p className="body-text">No marketing speak. Just facts.</p>
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
