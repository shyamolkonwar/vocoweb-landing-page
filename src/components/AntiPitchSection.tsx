export default function AntiPitchSection() {
    return (
        <section id="manifesto" className="bg-[#FAFAFA] border-t border-b border-[#E5E5E5] py-20">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    {/* Label Column */}
                    <div className="md:col-span-4">
                        <span className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252]">
                            THE REALITY CHECK
                        </span>
                    </div>

                    {/* Content Column */}
                    <div className="md:col-span-8">
                        <div className="max-w-2xl">
                            <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] text-[#0A0A0A] mb-6">
                                The &quot;Vibe Coding&quot; Hangover
                            </h2>

                            <p className="text-lg md:text-xl text-[#525252] leading-relaxed mb-6">
                                You&apos;ve seen the demos. You type a prompt, it builds a landing page.
                                Then you try to add payments, and everything breaks.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <span className="text-[#0A0A0A] font-bold shrink-0">→</span>
                                    <p className="text-[#525252]">
                                        <strong className="text-[#0A0A0A]">The Token Trap:</strong> You spend $200 in &quot;credits&quot; just to fix the bugs the AI created.
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-[#0A0A0A] font-bold shrink-0">→</span>
                                    <p className="text-[#525252]">
                                        <strong className="text-[#0A0A0A]">The Deployment Cliff:</strong> It works in the chat window, but crashes in production.
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-[#0A0A0A] font-bold shrink-0">→</span>
                                    <p className="text-[#525252]">
                                        <strong className="text-[#0A0A0A]">The Data Roulette:</strong> One bad prompt deletes your database or mixes test users with live data.
                                    </p>
                                </div>
                            </div>

                            <p className="text-lg md:text-xl text-[#0A0A0A] font-medium leading-relaxed">
                                VocoWeb isn&apos;t a slot machine. It&apos;s a foundry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
