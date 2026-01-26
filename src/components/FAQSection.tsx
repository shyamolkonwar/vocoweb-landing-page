"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question: "What exactly is the 'Merchant of Record' feature?",
        answer:
            "When you use VocoWeb's Merchant of Record, we become the legal seller of your product. This means we handle all payment processing, sales tax collection, VAT compliance, and chargeback disputes. You never have to worry about Stripe bans or PayPal freezes, we take on that risk so you can focus on building your product.",
    },
    {
        question: "Can I migrate my existing project to VocoWeb?",
        answer:
            "Yes! We support migrations from most major platforms and frameworks. Our team will work with you to ensure a smooth transition. For complex migrations, Founder plan members get dedicated migration support at no extra cost.",
    },
    {
        question: "How is VocoWeb different from Bubble, Webflow, or other no-code tools?",
        answer:
            "Unlike traditional no-code tools, VocoWeb generates real, production-ready code that you own. We don't lock you into a proprietary platform. Plus, we include business infrastructure (payments, compliance, analytics) that other tools treat as 'integrations you figure out yourself.'",
    },
    {
        question: "What if I need custom features or integrations?",
        answer:
            "VocoWeb is built for extensibility. You can add custom code, integrate third-party APIs, and modify anything. Founder plan members also get access to our AI coding assistant that can help build custom features based on your specifications.",
    },
    {
        question: "Is my data secure?",
        answer:
            "Absolutely. All projects run on isolated MicroVMs with enterprise-grade security. We use end-to-end encryption, and never access your customer data. Your code and data are yours, we just provide the infrastructure.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        const newIndex = openIndex === index ? null : index;
        setOpenIndex(newIndex);

        if (newIndex !== null) {
            trackEvent("FAQ_EXPAND", { question: faqItems[index].question });
        }
    };

    return (
        <section className="py-20 border-b border-[#E5E5E5]">
            <div className="container max-w-3xl">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252] block mb-4">
                        FAQ
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-[#0A0A0A]">
                        Questions? Answered.
                    </h2>
                </div>

                {/* FAQ Accordion */}
                <div className="divide-y divide-[#E5E5E5] border-t border-b border-[#E5E5E5]">
                    {faqItems.map((item, index) => (
                        <div key={index}>
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full py-6 flex items-center justify-between text-left group"
                                aria-expanded={openIndex === index}
                            >
                                <span className="text-lg font-medium text-[#0A0A0A] pr-8 group-hover:text-[#525252] transition-colors">
                                    {item.question}
                                </span>
                                <span
                                    className={`text-2xl text-[#525252] transition-transform duration-200 ease-out flex-shrink-0 ${openIndex === index ? "rotate-45" : ""
                                        }`}
                                >
                                    +
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-200 ease-out ${openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                                    }`}
                            >
                                <p className="text-[#525252] leading-relaxed pr-12">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
