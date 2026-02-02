import Link from "next/link";

export default function PrivacyPolicy() {
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
                    Privacy Policy
                </h1>
                <p className="text-[#525252] mb-12">
                    Effective Date: February 2, 2026 • Last Updated: February 2, 2026
                </p>

                <div className="prose prose-gray max-w-none">
                    {/* Section 1 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0A0A0A] mb-4">
                            1. Introduction
                        </h2>
                        <p className="text-[#525252] leading-relaxed mb-4">
                            Welcome to VocoWeb. We are committed to protecting your personal information and your intellectual property.
                        </p>
                        <p className="text-[#525252] leading-relaxed mb-4">
                            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our AI-powered application building services (the &quot;Service&quot;).
                        </p>
                        <p className="text-[#525252] leading-relaxed">
                            We built VocoWeb to be the &quot;adult in the room&quot; regarding infrastructure and data safety. Unlike other platforms, we treat your project data as your asset, not ours.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0A0A0A] mb-4">
                            2. Information We Collect
                        </h2>
                        <p className="text-[#525252] leading-relaxed mb-4">
                            We collect information that identifies, relates to, describes, or could reasonably be linked to you (&quot;Personal Data&quot;).
                        </p>

                        <h3 className="text-lg font-semibold text-[#0A0A0A] mb-3">A. Information You Provide to Us</h3>
                        <ul className="list-disc list-inside text-[#525252] space-y-2 mb-4">
                            <li><strong className="text-[#0A0A0A]">Account Information:</strong> Name, email address, and password when you register.</li>
                            <li><strong className="text-[#0A0A0A]">Billing Information:</strong> If you subscribe to a paid plan (Builder/Founder), our payment processors collect your billing address and payment method details. We do not store raw credit card numbers on our servers.</li>
                            <li><strong className="text-[#0A0A0A]">Project Data:</strong> The code, assets, databases, text prompts, and architectural specifications you input into VocoWeb to build your applications.</li>
                            <li><strong className="text-[#0A0A0A]">Support Data:</strong> Information you provide when contacting customer support or reporting bugs.</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-[#0A0A0A] mb-3">B. Information We Collect Automatically</h3>
                        <ul className="list-disc list-inside text-[#525252] space-y-2">
                            <li><strong className="text-[#0A0A0A]">Usage Data:</strong> Details of your visits to our Site, including traffic data, logs, and other communication data.</li>
                            <li><strong className="text-[#0A0A0A]">Device Data:</strong> IP address, operating system, and browser type.</li>
                            <li><strong className="text-[#0A0A0A]">Cookies:</strong> We use cookies to manage sessions and authentication. We do not use third-party tracking cookies to sell your data to advertisers.</li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0A0A0A] mb-4">
                            3. How We Use Your Information
                        </h2>
                        <p className="text-[#525252] leading-relaxed mb-4">We use your data for the following specific purposes:</p>
                        <ul className="list-disc list-inside text-[#525252] space-y-2">
                            <li><strong className="text-[#0A0A0A]">To Provide the Service:</strong> Creating accounts, spinning up your isolated MicroVMs, and managing your deployments.</li>
                            <li><strong className="text-[#0A0A0A]">To Power the AI Builder:</strong> Your prompts and code context are sent to our AI providers (e.g., Anthropic, OpenAI) solely for the purpose of generating your requested code.</li>
                            <li><strong className="text-[#0A0A0A]">To Process Payments:</strong> Facilitating transactions through our Merchant of Record infrastructure.</li>
                            <li><strong className="text-[#0A0A0A]">To Ensure Security:</strong> Monitoring for bot attacks, abuse of our &quot;Unlimited Iteration&quot; policy, and unauthorized access attempts.</li>
                            <li><strong className="text-[#0A0A0A]">To Communicate:</strong> Sending transactional emails (invoices, password resets) and product updates.</li>
                        </ul>
                    </section>

                    {/* Section 4 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0A0A0A] mb-4">
                            4. Your Code & AI Training (The &quot;No-Theft&quot; Guarantee)
                        </h2>
                        <p className="text-[#525252] leading-relaxed mb-4">
                            We know you are building a business, not just a toy. Your intellectual property is paramount.
                        </p>
                        <ul className="list-disc list-inside text-[#525252] space-y-2">
                            <li><strong className="text-[#0A0A0A]">Ownership:</strong> You retain full ownership of all code, assets, and databases generated within VocoWeb.</li>
                            <li><strong className="text-[#0A0A0A]">AI Training Policy:</strong> We do not use your private project code to train our public AI models. Your proprietary algorithms and business logic remain confidential.</li>
                            <li><strong className="text-[#0A0A0A]">Isolation:</strong> Your code runs in isolated MicroVMs. It is not shared with other users, nor does it &quot;leak&quot; into a shared knowledge base.</li>
                        </ul>
                    </section>

                    {/* Section 5 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0A0A0A] mb-4">
                            5. Sharing Your Information
                        </h2>
                        <p className="text-[#525252] leading-relaxed mb-4">
                            We do not sell your Personal Data. We only share information in the following limited circumstances:
                        </p>
                        <ul className="list-disc list-inside text-[#525252] space-y-2">
                            <li><strong className="text-[#0A0A0A]">Service Providers:</strong> With trusted third parties who assist us in operating our website, provided they agree to keep this information confidential.</li>
                            <li><strong className="text-[#0A0A0A]">Legal Compliance:</strong> If required by law, regulation, or legal process.</li>
                            <li><strong className="text-[#0A0A0A]">Business Transfers:</strong> In connection with a merger, sale of company assets, or acquisition.</li>
                        </ul>
                    </section>

                    {/* Section 6 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0A0A0A] mb-4">
                            6. Data Retention & Export
                        </h2>
                        <ul className="list-disc list-inside text-[#525252] space-y-2">
                            <li><strong className="text-[#0A0A0A]">Retention:</strong> We retain your account information and project data for as long as your account is active.</li>
                            <li><strong className="text-[#0A0A0A]">The &quot;Eject Button&quot;:</strong> Unlike competitors who lock you in, you may export your full source code (GitHub/ZIP) and database dumps at any time.</li>
                            <li><strong className="text-[#0A0A0A]">Deletion:</strong> If you delete your account, your Personal Data and Project Data are permanently removed from our active databases within 30 days.</li>
                        </ul>
                    </section>

                    {/* Section 7 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0A0A0A] mb-4">
                            7. Security of Your Data
                        </h2>
                        <p className="text-[#525252] leading-relaxed mb-4">
                            We implement enterprise-grade security measures to protect your data:
                        </p>
                        <ul className="list-disc list-inside text-[#525252] space-y-2 mb-4">
                            <li><strong className="text-[#0A0A0A]">Encryption:</strong> Data is encrypted in transit (SSL/TLS) and at rest.</li>
                            <li><strong className="text-[#0A0A0A]">Isolation:</strong> We use MicroVM technology to strictly isolate your application&apos;s environment from other tenants.</li>
                            <li><strong className="text-[#0A0A0A]">Access Control:</strong> Access to your private data by our staff is restricted to necessary personnel and logged.</li>
                        </ul>
                        <p className="text-[#525252] leading-relaxed">
                            However, no method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
                        </p>
                    </section>

                    {/* Section 8 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0A0A0A] mb-4">
                            8. Children&apos;s Privacy
                        </h2>
                        <p className="text-[#525252] leading-relaxed">
                            Our Service is not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13.
                        </p>
                    </section>

                    {/* Section 9 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0A0A0A] mb-4">
                            9. Changes to This Policy
                        </h2>
                        <p className="text-[#525252] leading-relaxed">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Effective Date.&quot;
                        </p>
                    </section>

                    {/* Section 10 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0A0A0A] mb-4">
                            10. Contact Us
                        </h2>
                        <p className="text-[#525252] leading-relaxed">
                            If you have any questions about this Privacy Policy or our data practices, please contact us:
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
