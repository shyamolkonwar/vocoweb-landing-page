"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import LowIntentModal from "./modals/LowIntentModal";
import HighIntentForm from "./modals/HighIntentForm";

interface Plan {
    name: string;
    description: string;
    price: number;
    features: string[];
    cta: string;
    recommended?: boolean;
}

const plans: Plan[] = [
    {
        name: "Builder",
        description: "For people testing ideas",
        price: 39,
        features: [
            "3 Active Projects",
            "Unlimited Building (No Token Fees)",
            "Basic Analytics",
            "Community Support",
            "One-Click Deployment",
            "SSL Security Included",
        ],
        cta: "Start Building",
    },
    {
        name: "Founder",
        description: "For people ready to make money",
        price: 79,
        features: [
            "Unlimited Projects (10 Live Apps)",
            "Unlimited Building (No Token Fees)",
            "Payment Processing Enabled",
            "Priority Support (Talk to Real People)",
            "Export to GitHub",
            "Custom Domain Names",
        ],
        cta: "Start Your Business",
        recommended: true,
    },
];

export default function PricingSection() {
    const [isYearly, setIsYearly] = useState(false);
    const [lowIntentModalOpen, setLowIntentModalOpen] = useState(false);
    const [highIntentFormOpen, setHighIntentFormOpen] = useState(false);

    const handleCTA = (plan: Plan) => {
        if (plan.recommended) {
            setHighIntentFormOpen(true);
        } else {
            setLowIntentModalOpen(true);
        }
    };

    return (
        <>
            <section id="pricing" className="py-20 border-b border-[#E5E5E5] bg-[#FAFAFA]">
                <div className="container">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <span className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252] block mb-4">
                            PRICING
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-[#0A0A0A]">
                            Pay for Results, Not Attempts
                        </h2>
                    </div>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <span
                            className={`font-mono text-sm uppercase tracking-[0.05em] ${!isYearly ? "text-[#0A0A0A]" : "text-[#525252]"
                                }`}
                        >
                            Monthly
                        </span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className={`relative w-12 h-6 border border-[#E5E5E5] transition-colors ${isYearly ? "bg-[#0A0A0A]" : "bg-white"
                                }`}
                            style={{ borderRadius: "2px" }}
                            aria-label="Toggle yearly billing"
                        >
                            <span
                                className={`absolute top-0.5 w-5 h-5 transition-all ${isYearly
                                    ? "left-6 bg-white"
                                    : "left-0.5 bg-[#0A0A0A]"
                                    }`}
                                style={{ borderRadius: "2px" }}
                            />
                        </button>
                        <span
                            className={`font-mono text-sm uppercase tracking-[0.05em] ${isYearly ? "text-[#0A0A0A]" : "text-[#525252]"
                                }`}
                        >
                            Yearly (-20%)
                        </span>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`p-8 relative bg-white ${plan.recommended
                                    ? "border-[#0A0A0A] border-2"
                                    : "border border-[#E5E5E5]"
                                    }`}
                                style={{ borderRadius: "2px" }}
                            >
                                {/* Recommended Badge */}
                                {plan.recommended && (
                                    <div
                                        className="absolute -top-3 left-8 bg-[#0A0A0A] text-white px-3 py-1 font-mono text-xs uppercase tracking-[0.05em]"
                                        style={{ borderRadius: "2px" }}
                                    >
                                        Recommended
                                    </div>
                                )}

                                {/* Plan Name */}
                                <h3 className="text-2xl font-bold tracking-[-0.02em] text-[#0A0A0A] mb-2">
                                    {plan.name}
                                </h3>

                                {/* Description */}
                                <p className="text-[#525252] mb-6 italic">{plan.description}</p>

                                {/* Price */}
                                <div className="mb-8">
                                    <span className="text-4xl font-bold tracking-[-0.03em] text-[#0A0A0A]">
                                        ${isYearly ? Math.floor(plan.price * 0.8) : plan.price}
                                    </span>
                                    <span className="text-[#525252] ml-1">/mo</span>
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li
                                            key={featureIndex}
                                            className="flex items-start gap-3"
                                        >
                                            <Check className="w-5 h-5 text-[#0A0A0A] flex-shrink-0 mt-0.5" />
                                            <span className="text-[#525252] text-sm">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button
                                    onClick={() => handleCTA(plan)}
                                    className={`w-full h-12 font-mono text-sm uppercase tracking-[0.05em] transition-opacity ${plan.recommended
                                        ? "bg-[#0A0A0A] text-white hover:opacity-90"
                                        : "bg-white text-[#0A0A0A] border border-[#0A0A0A] hover:bg-[#FAFAFA]"
                                        }`}
                                    style={{ borderRadius: 0 }}
                                >
                                    {plan.cta}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <LowIntentModal
                isOpen={lowIntentModalOpen}
                onClose={() => setLowIntentModalOpen(false)}
            />
            <HighIntentForm
                isOpen={highIntentFormOpen}
                onClose={() => setHighIntentFormOpen(false)}
            />
        </>
    );
}
