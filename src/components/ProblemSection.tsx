export default function ProblemSection() {
    return (
        <section id="about" className="bg-[#FAFAFA] border-t border-b border-[#E5E5E5] py-20">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    {/* Label Column */}
                    <div className="md:col-span-4">
                        <span className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252]">
                            THE PROBLEM
                        </span>
                    </div>

                    {/* Content Column */}
                    <div className="md:col-span-8">
                        <div className="max-w-2xl">
                            <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] text-[#0A0A0A] mb-6">
                                The Startup Graveyard
                            </h2>

                            <p className="text-lg text-[#525252] leading-relaxed mb-6">
                                You&apos;ve probably been there. You have an idea, you&apos;re excited, and you start building. Then reality hits:
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <span className="text-[#0A0A0A] font-bold shrink-0">→</span>
                                    <p className="text-[#525252]">
                                        <strong className="text-[#0A0A0A]">You built the wrong thing.</strong> Turns out nobody actually wants what you made.
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-[#0A0A0A] font-bold shrink-0">→</span>
                                    <p className="text-[#525252]">
                                        <strong className="text-[#0A0A0A]">You skipped planning.</strong> You jumped straight to coding without knowing what features you actually need.
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-[#0A0A0A] font-bold shrink-0">→</span>
                                    <p className="text-[#525252]">
                                        <strong className="text-[#0A0A0A]">You&apos;re stuck in tool hell.</strong> Research in one app, planning in another, coding in a third, payments in a fourth. Nothing connects.
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-[#0A0A0A] font-bold shrink-0">→</span>
                                    <p className="text-[#525252]">
                                        <strong className="text-[#0A0A0A]">You can&apos;t actually launch.</strong> Your app works on your laptop but breaks the moment real users touch it.
                                    </p>
                                </div>
                            </div>

                            <p className="text-lg md:text-xl font-bold tracking-tight text-[#0A0A0A] mb-4">
                                Most platforms just help you write code faster. But fast code that solves the wrong problem is still worthless.
                            </p>

                            <p className="text-lg text-[#525252]">
                                VocoWeb is different. We help you build the <em className="italic">right</em> thing, the <em className="italic">right</em> way.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
