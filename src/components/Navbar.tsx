"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div className="glass-effect rounded-full px-4 py-2 md:px-6 md:py-3 border border-gray-700/70 shadow-lg flex items-center gap-6">
                {/* Brand */}
                <Link
                    href="/"
                    className="font-mono text-xs uppercase tracking-[0.15em] text-signal-white"
                    aria-label="VocoWeb Home"
                >
                    VocoWeb
                </Link>

                {/* Divider */}
                <span className="w-px h-4 bg-gray-700 hidden md:inline-block" />

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="#architecture"
                        className="font-mono text-xs uppercase tracking-[0.12em] text-gray-300 hover:text-signal-white transition-colors"
                    >
                        Architecture
                    </Link>
                    <Link
                        href="#pricing"
                        className="font-mono text-xs uppercase tracking-[0.12em] text-gray-300 hover:text-signal-white transition-colors"
                    >
                        Pricing
                    </Link>
                </div>

                {/* CTA */}
                {/* CTA */}
                <a
                    href="https://app.vocoweb.in"
                    className="ml-2 bg-safety-orange text-void-black font-mono text-xs uppercase tracking-[0.12em] px-4 py-2 rounded-full hover:bg-orange-500 transition-colors"
                >
                    Start Building
                </a>
            </div>
        </nav>
    );
}
