"use client";

import { useState } from "react";


interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question: "Do you charge extra when I make changes to my app?",
        answer:
            "Nope. Build and rebuild as much as you want. No hidden fees, no token counting, no surprise bills.",
    },
    {
        question: "What if I want to leave VocoWeb?",
        answer:
            "Export your complete project files or download them as a ZIP file. You own everything you build. We're confident you'll stay because we're helpful, not because we're holding your work hostage.",
    },
    {
        question: "How is this different from other AI builders?",
        answer:
            "Most platforms only help you write code. We help you figure out what to build (research), how to build it (planning), actually build it (development), and run it as a business (payments, users, analytics). It's the complete journey in one place.",
    },
    {
        question: "I'm not technical. Can I actually use this?",
        answer:
            "That's exactly who we built this for. You don't need any technical background. We handle all the complex setup so you can focus on building something people want.",
    },
    {
        question: "Is my data safe?",
        answer:
            "Yes. Your app runs in its own isolated environment with daily backups and enterprise-grade security. We take this seriously.",
    },
    {
        question: "What happens to my research and planning if I leave?",
        answer:
            "All your research reports, product plans, and documentation can be exported along with your code. Nothing is locked away.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        const newIndex = openIndex === index ? null : index;
        setOpenIndex(newIndex);


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
