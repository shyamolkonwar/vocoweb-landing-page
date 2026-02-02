import { Shield, Cloud, Download } from "lucide-react";

interface Pillar {
    icon: React.ReactNode;
    title: string;
    problem: string;
    solution: string;
}

const pillars: Pillar[] = [
    {
        icon: <Shield className="w-8 h-8" />,
        title: "The \"Anti-Frankenstein\" Architecture",
        problem: "\"My AI app is a mess of spaghetti code that I can't maintain.\"",
        solution: "Pre-Built Business Blocks. We don't try to \"vibe code\" complex security logic from scratch. We use pre-built, hardened modules for Auth, Payments, and Databases. The AI assembles them; it doesn't invent them.",
    },
    {
        icon: <Cloud className="w-8 h-8" />,
        title: "Escape \"Deployment Hell\"",
        problem: "\"It works on my machine (or the browser), but I can't deploy it.\"",
        solution: "Managed MicroVMs. One-click deployment to isolated, enterprise-grade infrastructure. No DevOps. No shared tenant nightmares. Your app lives in its own secure container from Day 1.",
    },
    {
        icon: <Download className="w-8 h-8" />,
        title: "The \"No-Hostage\" Promise",
        problem: "\"The platform locked my code and banned my account.\"",
        solution: "Full Code Ownership. You are building an asset, not renting a room. Export your full source code to GitHub or a ZIP file at any time. We want you to stay because we're the best, not because you're trapped.",
    },
];

export default function PillarsSection() {
    return (
        <section className="py-20 border-b border-[#E5E5E5]">
            <div className="container">
                {/* Section Header */}
                <div className="mb-12">
                    <span className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252] block mb-4">
                        THE SOLUTION
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-[#0A0A0A]">
                        Build With Certainty.
                    </h2>
                </div>

                {/* Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            className="border border-[#E5E5E5] p-8 hover:border-[#0A0A0A] transition-colors duration-200 group"
                            style={{ borderRadius: "2px" }}
                        >
                            {/* Icon */}
                            <div className="text-[#0A0A0A] mb-6 group-hover:scale-110 transition-transform duration-200">
                                {pillar.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold tracking-[-0.02em] text-[#0A0A0A] mb-4">
                                {pillar.title}
                            </h3>

                            {/* Problem */}
                            <div className="mb-4">
                                <span className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252] block mb-2">
                                    PROBLEM
                                </span>
                                <p className="text-[#525252] text-sm italic">
                                    {pillar.problem}
                                </p>
                            </div>

                            {/* Solution */}
                            <div>
                                <span className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252] block mb-2">
                                    VOCOWEB FIX
                                </span>
                                <p className="text-[#525252] text-sm leading-relaxed">
                                    {pillar.solution}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
