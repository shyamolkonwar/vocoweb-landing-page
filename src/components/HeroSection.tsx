"use client";

import { useState } from "react";
import LowIntentModal from "./modals/LowIntentModal";

export default function HeroSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className="py-24 border-b border-[#E5E5E5]">
                <div className="container">
                    {/* Status Pill */}
                    <div className="mb-8">
                        <span className="font-mono text-xs tracking-[0.05em] text-[#0A0A0A]">
                            [ BETA 1.0 ]
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-[#0A0A0A] max-w-4xl leading-tight">
                        Most People Build Apps That Nobody Wants.
                    </h1>

                    {/* Sub-headline */}
                    <p className="mt-6 text-lg md:text-xl text-[#525252] max-w-[700px] leading-relaxed">
                        We help you find the right idea, plan it properly, and turn it into a real business—all in one place.
                    </p>

                    {/* Action Array */}
                    <div className="mt-10">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="h-12 px-8 bg-black text-white font-mono text-sm uppercase tracking-[0.05em] hover:opacity-90 transition-opacity"
                            style={{ borderRadius: 0 }}
                        >
                            Start Building
                        </button>

                        {/* Secondary Data */}
                        <p className="mt-4 font-mono text-xs tracking-[0.05em] text-[#525252]">
                            No Credit Card Required • No Guesswork • No Wasted Effort
                        </p>
                    </div>
                </div>
            </section>

            <LowIntentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
