import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-[#050505] text-[#F5F5F7]">
            <Navbar />

            {/* Content */}
            <article className="container py-32 max-w-4xl relative z-10">
                <div className="mb-12">
                    <div className="font-mono text-xs text-[#FF4D00] uppercase tracking-wider mb-4">
                        Legal Documentation
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F7] mb-6">
                        Privacy Policy
                    </h1>
                    <p className="font-mono text-sm text-[#A0A0A0]">
                        Effective Date: February 2, 2026 • Last Updated: February 2, 2026
                    </p>
                </div>

                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-sans prose-headings:text-[#F5F5F7] prose-p:text-[#A0A0A0] prose-li:text-[#A0A0A0] prose-strong:text-[#F5F5F7]">
                    {/* Section 1 */}
                    <section className="mb-12 border-b border-[#1A1A1A] pb-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="font-mono text-[#FF4D00] text-sm">01</span> Introduction
                        </h2>
                        <p className="leading-relaxed mb-4">
                            Welcome to VocoWeb. We are committed to protecting your personal information and your intellectual property.
                        </p>
                        <p className="leading-relaxed mb-4">
                            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our AI-powered application building services (the &quot;Service&quot;).
                        </p>
                        <p className="leading-relaxed">
                            We built VocoWeb to be the &quot;adult in the room&quot; regarding infrastructure and data safety. Unlike other platforms, we treat your project data as your asset, not ours.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="mb-12 border-b border-[#1A1A1A] pb-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="font-mono text-[#FF4D00] text-sm">02</span> Information We Collect
                        </h2>
                        <p className="leading-relaxed mb-6">
                            We collect information that identifies, relates to, describes, or could reasonably be linked to you (&quot;Personal Data&quot;).
                        </p>

                        <h3 className="text-xl font-semibold text-[#F5F5F7] mb-4">A. Information You Provide to Us</h3>
                        <ul className="list-disc list-inside space-y-3 mb-8 ml-4">
                            <li><strong className="text-[#F5F5F7]">Account Information:</strong> Name, email address, and password when you register.</li>
                            <li><strong className="text-[#F5F5F7]">Billing Information:</strong> If you subscribe to a paid plan (Builder/Founder), our payment processors collect your billing address and payment method details. We do not store raw credit card numbers on our servers.</li>
                            <li><strong className="text-[#F5F5F7]">Project Data:</strong> The code, assets, databases, text prompts, and architectural specifications you input into VocoWeb to build your applications.</li>
                            <li><strong className="text-[#F5F5F7]">Support Data:</strong> Information you provide when contacting customer support or reporting bugs.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-[#F5F5F7] mb-4">B. Information We Collect Automatically</h3>
                        <ul className="list-disc list-inside space-y-3 ml-4">
                            <li><strong className="text-[#F5F5F7]">Usage Data:</strong> Details of your visits to our Site, including traffic data, logs, and other communication data.</li>
                            <li><strong className="text-[#F5F5F7]">Device Data:</strong> IP address, operating system, and browser type.</li>
                            <li><strong className="text-[#F5F5F7]">Cookies:</strong> We use cookies to manage sessions and authentication. We do not use third-party tracking cookies to sell your data to advertisers.</li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section className="mb-12 border-b border-[#1A1A1A] pb-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="font-mono text-[#FF4D00] text-sm">03</span> How We Use Your Information
                        </h2>
                        <p className="leading-relaxed mb-4">We use your data for the following specific purposes:</p>
                        <ul className="list-disc list-inside space-y-3 ml-4">
                            <li><strong className="text-[#F5F5F7]">To Provide the Service:</strong> Creating accounts, spinning up your isolated WebContainers, and managing your deployments.</li>
                            <li><strong className="text-[#F5F5F7]">To Power the AI Builder:</strong> Your prompts and code context are sent to our AI providers (e.g., Anthropic, OpenAI) solely for the purpose of generating your requested code.</li>
                            <li><strong className="text-[#F5F5F7]">To Process Payments:</strong> Facilitating transactions through our Merchant of Record infrastructure.</li>
                            <li><strong className="text-[#F5F5F7]">To Ensure Security:</strong> Monitoring for bot attacks, abuse of our &quot;Unlimited Iteration&quot; policy, and unauthorized access attempts.</li>
                            <li><strong className="text-[#F5F5F7]">To Communicate:</strong> Sending transactional emails (invoices, password resets) and product updates.</li>
                        </ul>
                    </section>

                    {/* Section 4 */}
                    <section className="mb-12 border-b border-[#1A1A1A] pb-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="font-mono text-[#FF4D00] text-sm">04</span> Your Code & AI Training (The &quot;No-Theft&quot; Guarantee)
                        </h2>
                        <p className="leading-relaxed mb-4">
                            We know you are building a business, not just a toy. Your intellectual property is paramount.
                        </p>
                        <ul className="list-disc list-inside space-y-3 ml-4">
                            <li><strong className="text-[#F5F5F7]">Ownership:</strong> You retain full ownership of all code, assets, and databases generated within VocoWeb.</li>
                            <li><strong className="text-[#F5F5F7]">AI Training Policy:</strong> We do not use your private project code to train our public AI models. Your proprietary algorithms and business logic remain confidential.</li>
                            <li><strong className="text-[#F5F5F7]">Isolation:</strong> Your code runs in isolated WebContainers. It is not shared with other users, nor does it &quot;leak&quot; into a shared knowledge base.</li>
                        </ul>
                    </section>

                    {/* Section 5 */}
                    <section className="mb-12 border-b border-[#1A1A1A] pb-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="font-mono text-[#FF4D00] text-sm">05</span> Sharing Your Information
                        </h2>
                        <p className="leading-relaxed mb-4">
                            We do not sell your Personal Data. We only share information in the following limited circumstances:
                        </p>
                        <ul className="list-disc list-inside space-y-3 ml-4">
                            <li><strong className="text-[#F5F5F7]">Service Providers:</strong> With trusted third parties who assist us in operating our website, provided they agree to keep this information confidential.</li>
                            <li><strong className="text-[#F5F5F7]">Legal Compliance:</strong> If required by law, regulation, or legal process.</li>
                            <li><strong className="text-[#F5F5F7]">Business Transfers:</strong> In connection with a merger, sale of company assets, or acquisition.</li>
                        </ul>
                    </section>

                    {/* Section 6 */}
                    <section className="mb-12 border-b border-[#1A1A1A] pb-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="font-mono text-[#FF4D00] text-sm">06</span> Data Retention & Export
                        </h2>
                        <ul className="list-disc list-inside space-y-3 ml-4">
                            <li><strong className="text-[#F5F5F7]">Retention:</strong> We retain your account information and project data for as long as your account is active.</li>
                            <li><strong className="text-[#F5F5F7]">The &quot;Eject Button&quot;:</strong> Unlike competitors who lock you in, you may export your full source code (GitHub/ZIP) and database dumps at any time.</li>
                            <li><strong className="text-[#F5F5F7]">Deletion:</strong> If you delete your account, your Personal Data and Project Data are permanently removed from our active databases within 30 days.</li>
                        </ul>
                    </section>

                    {/* Section 7 */}
                    <section className="mb-12 border-b border-[#1A1A1A] pb-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="font-mono text-[#FF4D00] text-sm">07</span> Security of Your Data
                        </h2>
                        <p className="leading-relaxed mb-4">
                            We implement enterprise-grade security measures to protect your data:
                        </p>
                        <ul className="list-disc list-inside space-y-3 mb-4 ml-4">
                            <li><strong className="text-[#F5F5F7]">Encryption:</strong> Data is encrypted in transit (SSL/TLS) and at rest.</li>
                            <li><strong className="text-[#F5F5F7]">Isolation:</strong> We use WebContainer technology to strictly isolate your application&apos;s environment from other tenants.</li>
                            <li><strong className="text-[#F5F5F7]">Access Control:</strong> Access to your private data by our staff is restricted to necessary personnel and logged.</li>
                        </ul>
                        <p className="leading-relaxed">
                            However, no method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
                        </p>
                    </section>

                    {/* Section 8 */}
                    <section className="mb-12 border-b border-[#1A1A1A] pb-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="font-mono text-[#FF4D00] text-sm">08</span> Children&apos;s Privacy
                        </h2>
                        <p className="leading-relaxed">
                            Our Service is not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13.
                        </p>
                    </section>

                    {/* Section 9 */}
                    <section className="mb-12 border-b border-[#1A1A1A] pb-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="font-mono text-[#FF4D00] text-sm">09</span> Changes to This Policy
                        </h2>
                        <p className="leading-relaxed">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Effective Date.&quot;
                        </p>
                    </section>

                    {/* Section 10 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="font-mono text-[#FF4D00] text-sm">10</span> Contact Us
                        </h2>
                        <p className="leading-relaxed mb-4">
                            If you have any questions about this Privacy Policy or our data practices, please contact us:
                        </p>
                        <p className="leading-relaxed mt-2 p-4 bg-[#1A1A1A] rounded-lg border border-[#333] inline-block">
                            <strong className="text-[#F5F5F7]">Email:</strong> <span className="text-[#A0A0A0]">office@vocoweb.in</span>
                        </p>
                    </section>
                </div>

                <div className="mt-20 pt-8 border-t border-[#1A1A1A] text-center">
                    <Link
                        href="/"
                        className="inline-block px-8 py-3 border border-[#333] rounded hover:bg-[#1A1A1A] hover:border-[#F5F5F7] hover:text-[#F5F5F7] transition-all font-mono text-sm uppercase tracking-wider text-[#A0A0A0]"
                    >
                        Return to Home
                    </Link>
                </div>
            </article>
            <Footer />
        </main>
    );
}
