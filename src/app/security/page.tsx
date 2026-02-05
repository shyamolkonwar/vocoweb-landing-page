import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShieldCheck, Lock, Server, EyeOff } from "lucide-react";

export default function SecurityPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-[#F5F5F7]">
            <Navbar />

            {/* Header */}
            <header className="container pt-32 pb-20 max-w-6xl relative z-10">
                <div className="font-mono text-xs text-[#FF4D00] uppercase tracking-wider mb-4">
                    Infrastructure Security
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F5F5F7] mb-6 leading-tight">
                    Safety in Structure
                </h1>
                <p className="font-mono text-sm text-[#A0A0A0] leading-relaxed max-w-2xl text-lg">
                    We treat your project data as your asset, not ours. VocoWeb is built on a foundation of isolation, encryption, and zero-training guarantees.
                </p>
            </header>

            {/* Core Pillars */}
            <section className="container max-w-6xl pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Card 1 */}
                    <div className="p-8 bg-[#1A1A1A] border border-[#333] rounded-lg">
                        <div className="mb-6 w-12 h-12 bg-[#0A0A0A] border border-[#333] flex items-center justify-center rounded-lg">
                            <Server className="w-6 h-6 text-[#FF4D00]" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#F5F5F7]">Isolated WebContainers</h3>
                        <p className="leading-relaxed text-[#A0A0A0]">
                            Your code runs in a strictly isolated environment. Unlike shared hosting where one tenant can affect another, our WebContainer technology ensures your application's file system, network, and processes are completely sandboxed.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-8 bg-[#1A1A1A] border border-[#333] rounded-lg">
                        <div className="mb-6 w-12 h-12 bg-[#0A0A0A] border border-[#333] flex items-center justify-center rounded-lg">
                            <EyeOff className="w-6 h-6 text-[#FF4D00]" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#F5F5F7]">Zero-Training Guarantee</h3>
                        <p className="leading-relaxed text-[#A0A0A0]">
                            We do not use your private project code to train our public AI models. Your proprietary algorithms, business logic, and trade secrets remain confidential and are never ingested into a shared knowledge base.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-8 bg-[#1A1A1A] border border-[#333] rounded-lg">
                        <div className="mb-6 w-12 h-12 bg-[#0A0A0A] border border-[#333] flex items-center justify-center rounded-lg">
                            <Lock className="w-6 h-6 text-[#FF4D00]" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#F5F5F7]">Encryption Everywhere</h3>
                        <p className="leading-relaxed text-[#A0A0A0]">
                            All data is encrypted in transit using TLS 1.2+ and at rest using AES-256. This includes your source code, environment variables, database credentials, and any customer data stored within our managed databases.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="p-8 bg-[#1A1A1A] border border-[#333] rounded-lg">
                        <div className="mb-6 w-12 h-12 bg-[#0A0A0A] border border-[#333] flex items-center justify-center rounded-lg">
                            <ShieldCheck className="w-6 h-6 text-[#FF4D00]" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#F5F5F7]">Enterprise Compliance</h3>
                        <p className="leading-relaxed text-[#A0A0A0]">
                            Our infrastructure is designed to meet the rigorous standards of modern enterprise compliance. We offer dedicated private cloud deployments and custom SLAs for organizations with specific regulatory requirements.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vulnerability Reporting */}
            <section className="bg-[#1A1A1A] py-20 border-t border-[#333]">
                <div className="container max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6 text-[#F5F5F7]">Report a Vulnerability</h2>
                    <p className="text-[#A0A0A0] mb-8 leading-relaxed">
                        We take security researchers seriously. If you believe you have found a vulnerability in VocoWeb, please report it to us immediately. We offer a bug bounty program for qualified disclosures.
                    </p>
                    <Link
                        href="/report"
                        className="inline-block px-8 py-3 bg-[#FF4D00] text-[#050505] font-mono text-sm uppercase tracking-wider rounded border border-transparent hover:bg-[#CC3D00] transition-all"
                    >
                        Report Issue
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
