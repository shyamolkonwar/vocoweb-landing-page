import Link from "next/link";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <header className="h-16 border-b border-[#E5E5E5] bg-white sticky top-0 z-50">
                <div className="container h-full flex items-center">
                    <Link
                        href="/"
                        className="font-sans font-semibold text-xl tracking-[-0.04em] text-[#0A0A0A]"
                    >
                        VocoWeb
                    </Link>
                </div>
            </header>

            {/* Content */}
            <article className="container py-16 max-w-3xl">
                <h1 className="text-4xl font-bold tracking-[-0.03em] text-[#0A0A0A] mb-2">
                    Terms of Service
                </h1>
                <p className="text-[#525252] mb-12">
                    Effective Date: February 2, 2026 • Last Updated: February 2, 2026
                </p>

                <div className="prose prose-gray max-w-none">
                    {/* Section 1 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0A0A0A] mb-4">
                            1. Introduction & Acceptance
                        </h2>
                        <p className="text-[#525252] leading-relaxed mb-4">
                            These Terms of Service (&quot;Terms&quot;) constitute a binding legal agreement between you (&quot;User,&quot; &quot;You&quot;) and VocoWeb (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;), regarding your access to and use of the VocoWeb website and application building platform (the &quot;Service&quot;).
                        </p>
                        <p className="text-[#525252] leading-relaxed mb-4">
                            By registering for an account, accessing, or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the Service.
                        </p>
                        <div className="bg-[#FAFAFA] border border-[#E5E5E5] p-4 mt-4" style={{ borderRadius: "2px" }}>
                            <p className="text-[#0A0A0A] font-semibold mb-2">⚠️ NOTICE REGARDING BETA STATUS</p>
                            <p className="text-[#525252] text-sm leading-relaxed">
                                Please note that VocoWeb is currently in Beta 1.0. The Service is still under active development and may contain bugs, errors, or feature limitations. You acknowledge that you are using the Service at your own risk.
                            </p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0A0A0A] mb-4">
                            2. Description of Service
                        </h2>
                        <p className="text-[#525252] leading-relaxed">
                            VocoWeb is an AI-powered development platform that assists users in building, deploying, and hosting web applications. We provide the infrastructure (hosting, authentication, databases) and AI tools to generate code.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0A0A0A] mb-4">
                            3. Intellectual Property & Ownership
                        </h2>

                        <h3 className="text-lg font-semibold text-[#0A0A0A] mb-3">A. Your Ownership (No Lock-In)</h3>
                        <p className="text-[#525252] leading-relaxed mb-4">
                            You retain full ownership of the intellectual property rights to the applications, code, databases, and content you create using VocoWeb (&quot;User Projects&quot;). We do not claim ownership over your business logic or generated source code. You are free to export your code and host it elsewhere at any time.
                        </p>

                        <h3 className="text-lg font-semibold text-[#0A0A0A] mb-3">B. Our License to You</h3>
                        <p className="text-[#525252] leading-relaxed mb-4">
                            We grant you a limited, non-exclusive, non-transferable, revocable license to use our Service to build and host your applications in accordance with these Terms.
                        </p>

                        <h3 className="text-lg font-semibold text-[#0A0A0A] mb-3">C. Our Rights</h3>
                        <p className="text-[#525252] leading-relaxed">
                            VocoWeb retains all rights to the underlying platform, pre-built infrastructure modules (e.g., the &quot;Foundry&quot; dashboard, proprietary deployment scripts), and our AI orchestration engine.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0A0A0A] mb-4">
                            4. AI Limitations & User Responsibility
                        </h2>

                        <h3 className="text-lg font-semibold text-[#0A0A0A] mb-3">A. AI &quot;Hallucinations&quot; & Errors</h3>
                        <p className="text-[#525252] leading-relaxed mb-2">
                            You acknowledge that VocoWeb uses Artificial Intelligence (AI) to generate code. AI can make mistakes, generate insecure code, or &quot;hallucinate&quot; functionality that does not exist.
                        </p>
                        <ul className="list-disc list-inside text-[#525252] space-y-2 mb-4">
                            <li><strong className="text-[#0A0A0A]">You are the final editor:</strong> You are solely responsible for reviewing, testing, and securing the code generated by VocoWeb before deploying it to a production environment.</li>
                            <li><strong className="text-[#0A0A0A]">No Warranty on Code:</strong> We do not guarantee that AI-generated code will be error-free, secure, or suitable for any specific purpose.</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-[#0A0A0A] mb-3">B. Liability for Business Losses</h3>
                        <p className="text-[#525252] leading-relaxed">
                            VocoWeb is a tool, not a CTO. We are not liable for any financial losses, data breaches, or business interruptions caused by bugs in the applications you build using our Service.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0A0A0A] mb-4">
                            5. Accounts & Security
                        </h2>
                        <ul className="list-disc list-inside text-[#525252] space-y-2">
                            <li><strong className="text-[#0A0A0A]">Registration:</strong> You must provide accurate and complete information when creating an account.</li>
                            <li><strong className="text-[#0A0A0A]">Credentials:</strong> You are responsible for maintaining the confidentiality of your password and API keys. You are fully responsible for all activities that occur under your account.</li>
                            <li><strong className="text-[#0A0A0A]">Notification:</strong> You must notify us immediately of any unauthorized use of your account.</li>
                        </ul>
                    </section>

                    {/* Section 6 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0A0A0A] mb-4">
                            6. Payment, Subscriptions, and Refunds
                        </h2>

                        <h3 className="text-lg font-semibold text-[#0A0A0A] mb-3">A. Subscription Plans</h3>
                        <p className="text-[#525252] leading-relaxed mb-4">
                            VocoWeb offers paid subscription plans (e.g., &quot;Builder,&quot; &quot;Founder&quot;). You agree to pay the fees associated with your chosen plan. Payments are processed by our third-party Merchant of Record.
                        </p>

                        <h3 className="text-lg font-semibold text-[#0A0A0A] mb-3">B. Cancellation</h3>
                        <p className="text-[#525252] leading-relaxed mb-4">
                            You may cancel your subscription at any time via your dashboard. Your access to paid features will continue until the end of the current billing cycle.
                        </p>

                        <h3 className="text-lg font-semibold text-[#0A0A0A] mb-3">C. No Refunds on Usage</h3>
                        <p className="text-[#525252] leading-relaxed">
                            Due to the significant costs of AI computation and infrastructure, we do not offer refunds for partial months or unused time, nor do we offer refunds based on dissatisfaction with specific AI outputs.
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0A0A0A] mb-4">
                            7. Fair Use Policy (&quot;Unlimited&quot; Iterations)
                        </h2>
                        <p className="text-[#525252] leading-relaxed mb-4">
                            To maintain the quality of our Service for all users, &quot;Unlimited AI Iterations&quot; are subject to this Fair Use Policy:
                        </p>
                        <ul className="list-disc list-inside text-[#525252] space-y-2">
                            <li><strong className="text-[#0A0A0A]">Human-Speed Usage:</strong> The Service is intended for human developers. Automated scripts, bots, or excessive usage patterns that suggest non-human interaction are prohibited.</li>
                            <li><strong className="text-[#0A0A0A]">Account Sharing:</strong> Sharing a single account among multiple developers to avoid paying for seats is prohibited.</li>
                            <li><strong className="text-[#0A0A0A]">Remedy:</strong> If we detect abuse, we reserve the right to throttle your request speed or temporarily suspend your account until usage returns to normal levels.</li>
                        </ul>
                    </section>

                    {/* Section 8 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0A0A0A] mb-4">
                            8. Prohibited Uses
                        </h2>
                        <p className="text-[#525252] leading-relaxed mb-4">You agree not to use VocoWeb to:</p>
                        <ul className="list-disc list-inside text-[#525252] space-y-2">
                            <li>Build applications that facilitate illegal activities, fraud, or harassment.</li>
                            <li>Host malicious code, viruses, or spyware.</li>
                            <li>Attempt to reverse engineer, decompile, or hack the VocoWeb platform.</li>
                            <li>Resell the VocoWeb API or infrastructure without our express written permission.</li>
                        </ul>
                    </section>

                    {/* Section 9 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0A0A0A] mb-4">
                            9. Termination
                        </h2>
                        <p className="text-[#525252] leading-relaxed mb-4">
                            We may terminate or suspend your account immediately, without prior notice or liability, if you breach these Terms. Upon termination, your right to use the Service will immediately cease.
                        </p>
                        <p className="text-[#525252] leading-relaxed">
                            <strong className="text-[#0A0A0A]">Data Export:</strong> In the event of termination (unless for malicious illegal activity), we will provide a reasonable window (30 days) for you to export your Project Data.
                        </p>
                    </section>

                    {/* Section 10 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0A0A0A] mb-4">
                            10. Disclaimer of Warranties
                        </h2>
                        <div className="bg-[#FAFAFA] border border-[#E5E5E5] p-4" style={{ borderRadius: "2px" }}>
                            <p className="text-[#525252] text-sm leading-relaxed mb-4">
                                THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. VOCOWEB EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                            </p>
                            <p className="text-[#525252] text-sm leading-relaxed">
                                WE DO NOT WARRANT THAT (I) THE SERVICE WILL MEET YOUR SPECIFIC REQUIREMENTS, (II) THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, OR (III) THE RESULTS (CODE/APPS) OBTAINED FROM THE SERVICE WILL BE ACCURATE OR RELIABLE.
                            </p>
                        </div>
                    </section>

                    {/* Section 11 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0A0A0A] mb-4">
                            11. Limitation of Liability
                        </h2>
                        <div className="bg-[#FAFAFA] border border-[#E5E5E5] p-4" style={{ borderRadius: "2px" }}>
                            <p className="text-[#525252] text-sm leading-relaxed mb-4">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL VOCOWEB BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE.
                            </p>
                            <p className="text-[#525252] text-sm leading-relaxed">
                                OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRIOR TO THE CLAIM.
                            </p>
                        </div>
                    </section>

                    {/* Section 12 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0A0A0A] mb-4">
                            12. Governing Law
                        </h2>
                        <p className="text-[#525252] leading-relaxed">
                            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the VocoWeb operating entity is located, without regard to its conflict of law provisions.
                        </p>
                    </section>

                    {/* Section 13 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0A0A0A] mb-4">
                            13. Contact Us
                        </h2>
                        <p className="text-[#525252] leading-relaxed">
                            If you have any questions about these Terms, please contact us at:
                        </p>
                        <p className="text-[#525252] leading-relaxed mt-2">
                            <strong className="text-[#0A0A0A]">Email:</strong> shyamol@fusionfocus.in
                        </p>
                    </section>
                </div>

                {/* Back Link */}
                <div className="mt-12 pt-8 border-t border-[#E5E5E5]">
                    <Link
                        href="/"
                        className="font-mono text-sm uppercase tracking-[0.05em] text-[#525252] hover:text-[#0A0A0A] transition-colors"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </article>
        </main>
    );
}
