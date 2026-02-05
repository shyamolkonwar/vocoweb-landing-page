'use client';
import { sendGTMEvent, ANALYTICS_EVENTS } from '@/lib/analytics';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export default function ReportPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        severity: 'low',
        description: '',
        steps_to_reproduce: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            const res = await fetch('/api/report', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error('Failed to send report');
            }

            sendGTMEvent({
                action: ANALYTICS_EVENTS.SUBMIT_VULNERABILITY_REPORT,
                category: ANALYTICS_EVENTS.CATEGORY_FORM,
                label: formData.severity,
            });

            setStatus('success');
            setFormData({ name: '', email: '', severity: 'low', description: '', steps_to_reproduce: '' });
        } catch (error) {
            console.error(error);
            setStatus('error');
            setErrorMessage('Something went wrong. Please try again later.');
        }
    };

    return (
        <main className="min-h-screen bg-[#050505] text-[#F5F5F7]">
            <Navbar />

            <div className="container pt-32 pb-20 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                    {/* Left Column: Info */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="font-mono text-xs text-[#FF4D00] uppercase tracking-wider mb-4">
                                Security Intelligence
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F5F5F7] mb-6 leading-tight">
                                Report <br />
                                Vulnerability
                            </h1>
                            <p className="font-mono text-sm text-[#A0A0A0] leading-relaxed max-w-sm mb-12">
                                Help us strengthen the core. Submit detailed reports on potential security flaws or anomalies.
                            </p>

                            <div className="p-6 bg-[#1A1A1A] border border-[#333] rounded-lg mb-8">
                                <div className="flex items-start gap-4">
                                    <AlertTriangle className="w-6 h-6 text-[#FF4D00] flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-mono text-sm text-[#F5F5F7] uppercase tracking-wider mb-2">Encrypted Transmission</h3>
                                        <p className="text-[#A0A0A0] text-sm leading-relaxed">
                                            Your report is encrypted end-to-end. We review all submissions within 24 hours. Critical issues may be eligible for our bug bounty program.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#FF4D00] to-red-600 opacity-10 blur-2xl rounded-lg pointer-events-none" />

                        <motion.form
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            onSubmit={handleSubmit}
                            className="relative bg-[#0A0A0A] border border-[#2A2A2A] p-8 md:p-10 rounded-xl shadow-2xl"
                        >
                            <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block font-mono text-xs text-[#666] uppercase tracking-wider mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-[#111] border border-[#333] text-[#F5F5F7] p-3 focus:outline-none focus:border-[#FF4D00] transition-colors rounded-none placeholder-[#444]"
                                            placeholder="NAME"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block font-mono text-xs text-[#666] uppercase tracking-wider mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-[#111] border border-[#333] text-[#F5F5F7] p-3 focus:outline-none focus:border-[#FF4D00] transition-colors rounded-none placeholder-[#444]"
                                            placeholder="EMAIL"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="severity" className="block font-mono text-xs text-[#666] uppercase tracking-wider mb-2">
                                        Severity Level
                                    </label>
                                    <select
                                        id="severity"
                                        value={formData.severity}
                                        onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
                                        className="w-full bg-[#111] border border-[#333] text-[#F5F5F7] p-3 focus:outline-none focus:border-[#FF4D00] transition-colors rounded-none appearance-none"
                                    >
                                        <option value="low">Low - Cosmetic / User Experience</option>
                                        <option value="medium">Medium - Functional Issue</option>
                                        <option value="high">High - Data Integrity / Access</option>
                                        <option value="critical">Critical - System Compromise</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="description" className="block font-mono text-xs text-[#666] uppercase tracking-wider mb-2">
                                        Issue Description
                                    </label>
                                    <textarea
                                        id="description"
                                        required
                                        rows={3}
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        className="w-full bg-[#111] border border-[#333] text-[#F5F5F7] p-3 focus:outline-none focus:border-[#FF4D00] transition-colors rounded-none placeholder-[#444] resize-none"
                                        placeholder="DESCRIBE THE VULNERABILITY..."
                                    />
                                </div>

                                <div>
                                    <label htmlFor="steps" className="block font-mono text-xs text-[#666] uppercase tracking-wider mb-2">
                                        Steps to Reproduce (Optional)
                                    </label>
                                    <textarea
                                        id="steps"
                                        rows={3}
                                        value={formData.steps_to_reproduce}
                                        onChange={(e) => setFormData({ ...formData, steps_to_reproduce: e.target.value })}
                                        className="w-full bg-[#111] border border-[#333] text-[#F5F5F7] p-3 focus:outline-none focus:border-[#FF4D00] transition-colors rounded-none placeholder-[#444] resize-none"
                                        placeholder="1. GO TO..."
                                    />
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full bg-[#F5F5F7] text-[#050505] font-mono text-sm uppercase tracking-wider py-4 hover:bg-[#FF4D00] hover:text-[#050505] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status === 'submitting' ? 'Transmitting Report...' : 'Submit Report'}
                                    </button>
                                </div>

                                {status === 'success' && (
                                    <div className="p-4 bg-[rgba(0,255,100,0.1)] border border-green-900 text-green-400 text-sm font-mono text-center">
                                        REPORT RECEIVED anonymously. THANK YOU.
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div className="p-4 bg-[rgba(255,0,0,0.1)] border border-red-900 text-red-400 text-sm font-mono text-center">
                                        {errorMessage}
                                    </div>
                                )}
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
