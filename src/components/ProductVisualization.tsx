import { Check } from "lucide-react";

const features = [
    "Managed MicroVM Hosting (Isolated & Secure)",
    "Merchant of Record Module (Stripe/PayPal wrapper)",
    "Automated Daily Backups (Never lose data)",
    "One-Click Rollbacks (Undo mistakes instantly)",
    "Zero Metered AI Fees (Iterate without fear)",
    "Full Source Export (No vendor lock-in)",
];

export default function ProductVisualization() {
    return (
        <section className="py-20 border-b border-[#E5E5E5]">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252] block mb-4">
                        THE DASHBOARD
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-[#0A0A0A]">
                        Everything You Need. Nothing You Don&apos;t.
                    </h2>
                </div>

                {/* Dashboard Wireframe */}
                <div
                    className="border border-[#E5E5E5] mb-12 overflow-hidden"
                    style={{ borderRadius: "2px" }}
                >
                    {/* Header Bar */}
                    <div className="h-10 bg-[#FAFAFA] border-b border-[#E5E5E5] flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#E5E5E5]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#E5E5E5]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#E5E5E5]"></div>
                        <div className="ml-4 h-4 w-32 bg-[#E5E5E5]" style={{ borderRadius: "2px" }}></div>
                    </div>

                    {/* Content Area */}
                    <div className="flex">
                        {/* Sidebar */}
                        <div className="w-48 border-r border-[#E5E5E5] p-4 hidden md:block">
                            <div className="space-y-3">
                                <div className="h-4 w-full bg-[#0A0A0A]" style={{ borderRadius: "2px" }}></div>
                                <div className="h-4 w-3/4 bg-[#E5E5E5]" style={{ borderRadius: "2px" }}></div>
                                <div className="h-4 w-5/6 bg-[#E5E5E5]" style={{ borderRadius: "2px" }}></div>
                                <div className="h-4 w-2/3 bg-[#E5E5E5]" style={{ borderRadius: "2px" }}></div>
                                <div className="h-4 w-3/4 bg-[#E5E5E5]" style={{ borderRadius: "2px" }}></div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 p-6">
                            {/* Stats Row */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="border border-[#E5E5E5] p-4"
                                        style={{ borderRadius: "2px" }}
                                    >
                                        <div className="h-3 w-16 bg-[#E5E5E5] mb-2" style={{ borderRadius: "2px" }}></div>
                                        <div className="h-6 w-12 bg-[#0A0A0A]" style={{ borderRadius: "2px" }}></div>
                                    </div>
                                ))}
                            </div>

                            {/* Chart Placeholder */}
                            <div
                                className="border border-[#E5E5E5] p-6 h-40 flex items-end justify-center gap-2"
                                style={{ borderRadius: "2px" }}
                            >
                                {[40, 65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                                    <div
                                        key={i}
                                        className="w-8 bg-[#0A0A0A] opacity-80"
                                        style={{ height: `${height}%`, borderRadius: "2px" }}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 p-4 border border-[#E5E5E5]"
                            style={{ borderRadius: "2px" }}
                        >
                            <Check className="w-5 h-5 text-[#0A0A0A] flex-shrink-0" />
                            <span className="text-[#525252] text-sm">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
