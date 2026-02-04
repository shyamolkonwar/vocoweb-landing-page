import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#FAFAFA] border-t border-[#E5E5E5]">
            <div className="container py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Brand */}
                    <div>
                        <Link
                            href="/"
                            className="font-sans font-semibold text-xl tracking-[-0.04em] text-[#0A0A0A] block"
                        >
                            VocoWeb
                        </Link>
                        <p className="text-[#525252] mt-2 max-w-sm">
                            Stop switching between ten different tools. Build your entire business in one place.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col md:flex-row md:justify-end gap-6 md:gap-8">
                        <Link
                            href="#about"
                            className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252] hover:text-[#0A0A0A] transition-colors"
                        >
                            About
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
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-[#E5E5E5] text-center md:text-left">
                    <p className="font-mono text-xs tracking-[0.05em] text-[#525252]">
                        © 2026 VocoWeb. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
