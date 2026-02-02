import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#FAFAFA] border-t border-[#E5E5E5]">
            <div className="container py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & Tagline */}
                    <div className="text-center md:text-left">
                        <Link
                            href="/"
                            className="font-sans font-semibold text-xl tracking-[-0.04em] text-[#0A0A0A]"
                        >
                            VocoWeb
                        </Link>
                        <p className="text-[#525252] text-sm mt-1">
                            Build the Business. We&apos;ll Run the Code.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex items-center gap-6">
                        <Link
                            href="#manifesto"
                            className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252] hover:text-[#0A0A0A] transition-colors"
                        >
                            Manifesto
                        </Link>
                        <Link
                            href="/privacy"
                            className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252] hover:text-[#0A0A0A] transition-colors"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/terms"
                            className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252] hover:text-[#0A0A0A] transition-colors"
                        >
                            Terms
                        </Link>
                    </nav>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-6 border-t border-[#E5E5E5] text-center">
                    <p className="font-mono text-xs tracking-[0.05em] text-[#525252]">
                        © 2026 VocoWeb. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
