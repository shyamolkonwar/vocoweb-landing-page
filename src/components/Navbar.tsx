"use client";

import Link from "next/link";
import { useState } from "react";
import LowIntentModal from "./modals/LowIntentModal";

export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <nav className="h-16 border-b border-[#E5E5E5] bg-white sticky top-0 z-50">
                <div className="container h-full flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="font-sans font-semibold text-xl tracking-[-0.04em] text-[#0A0A0A]"
                    >
                        VocoWeb
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-8">
                        <div className="hidden md:flex items-center gap-6">
                            <Link
                                href="#manifesto"
                                className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252] hover:text-[#0A0A0A] transition-colors"
                            >
                                Manifesto
                            </Link>
                            <Link
                                href="#pricing"
                                className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252] hover:text-[#0A0A0A] transition-colors"
                            >
                                Pricing
                            </Link>
                            <Link
                                href="#faq"
                                className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252] hover:text-[#0A0A0A] transition-colors"
                            >
                                FAQ
                            </Link>
                        </div>

                        {/* CTA Button */}
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="h-8 px-4 bg-black text-white font-mono text-xs uppercase tracking-[0.05em] hover:opacity-90 transition-opacity"
                            style={{ borderRadius: 0 }}
                        >
                            Start Building
                        </button>
                    </div>
                </div>
            </nav>

            <LowIntentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
