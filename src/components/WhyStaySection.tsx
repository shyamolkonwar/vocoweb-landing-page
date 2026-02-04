export default function WhyStaySection() {
    return (
        <section className="py-20 bg-[#FAFAFA] border-b border-[#E5E5E5]">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252] block mb-4">
                            WHY PEOPLE STAY (EVEN THOUGH THEY CAN LEAVE)
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-[#0A0A0A]">
                            Voluntary Lock-In: You Stay Because We&apos;re Valuable
                        </h2>
                    </div>

                    <p className="text-lg text-[#525252] mb-12 text-center">
                        We don&apos;t trap you. You can export your code anytime. But here&apos;s why most people choose to stay:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 border border-[#E5E5E5]" style={{ borderRadius: "2px" }}>
                            <h3 className="font-bold text-[#0A0A0A] mb-3">Your Research Lives Here</h3>
                            <p className="text-[#525252] text-sm leading-relaxed">
                                All the market insights and validated opportunities that led to your product? That&apos;s in VocoWeb.
                            </p>
                        </div>

                        <div className="bg-white p-8 border border-[#E5E5E5]" style={{ borderRadius: "2px" }}>
                            <h3 className="font-bold text-[#0A0A0A] mb-3">Your Strategy Lives Here</h3>
                            <p className="text-[#525252] text-sm leading-relaxed">
                                The product plans, user flows, and specifications? Also in VocoWeb.
                            </p>
                        </div>

                        <div className="bg-white p-8 border border-[#E5E5E5]" style={{ borderRadius: "2px" }}>
                            <h3 className="font-bold text-[#0A0A0A] mb-3">We Handle the Annoying Stuff</h3>
                            <p className="text-[#525252] text-sm leading-relaxed">
                                When you export your code, it includes our payment and login tools. Sure, you <em className="italic">could</em> rebuild all that yourself and deal with international tax law and password security... but why would you?
                            </p>
                        </div>

                        <div className="bg-white p-8 border border-[#E5E5E5]" style={{ borderRadius: "2px" }}>
                            <h3 className="font-bold text-[#0A0A0A] mb-3">We Grow With You</h3>
                            <p className="text-[#525252] text-sm leading-relaxed">
                                As your business makes more money, we handle more payments, manage more users, and provide more infrastructure. Leaving means hiring an accountant, a DevOps team, and a compliance lawyer.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-xl font-medium text-[#0A0A0A]">
                            People stay because we make running a business easier, not because we&apos;re hiding the exit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
