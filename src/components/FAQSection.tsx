"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question: "Do you charge for \"tokens\" or \"credits\" when I edit my app?",
        answer:
            "No. We believe metered billing discourages perfection. Your monthly subscription covers your build time. You shouldn't be penalized for iterating on your product.",
    },
    {
        question: "Is it really unlimited? What if I build all day?",
        answer:
            "Yes! We want you to iterate until perfection. \"Unlimited\" applies to one human building at human speed. We simply have a Fair Use Policy to prevent bots, automated scripts, and account sharing. As long as you are a real person building a real business, you'll never hit a limit.",
    },
    {
        question: "What happens if I want to leave VocoWeb?",
        answer:
            "You take your business with you. On the Founder plan, you can export your entire codebase. We use standard stacks (React/Node/Postgres), so your code runs anywhere, not just on our proprietary systems.",
    },
    {
        question: "How is this different from Lovable or Bolt?",
        answer:
            "Those tools are fantastic for frontend design but struggle with backend logic and deployment. VocoWeb puts infrastructure first—we handle the \"boring\" hard stuff (payments, database security, hosting) so the AI can focus on your unique features.",
    },
    {
        question: "Is my data safe?",
        answer:
            "Yes. Unlike platforms that mix tenant data, VocoWeb deploys your project to its own isolated MicroVM. We also perform automated daily backups so you never lose progress due to an AI hallucination.",
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
        <section id="faq" className="py-20 border-b border-[#E5E5E5]">
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
