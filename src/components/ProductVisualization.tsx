import { Check } from "lucide-react";

const features = [
    "Secure, Isolated Hosting – Your app runs safely, separate from everyone else",
    "Payment Processing Ready – Accept money without setting up payment processors",
    "Automatic Daily Backups – Never lose your work",
    "One-Click Undo – Fix mistakes instantly",
    "Unlimited Building – No metered fees, no token anxiety",
    "Full Code Export – Download everything, anytime",
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
                    className="border border-[#E5E5E5] mb-12 overflow-hidden bg-white"
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
                    <div className="flex h-[400px]">
                        {/* Sidebar */}
                        <div className="w-48 border-r border-[#E5E5E5] p-4 hidden md:block bg-[#FAFAFA]">
                            <div className="space-y-4">
                                <div className="h-4 w-full bg-[#E5E5E5]" style={{ borderRadius: "2px" }}></div>
                                <div className="h-4 w-3/4 bg-[#E5E5E5]" style={{ borderRadius: "2px" }}></div>
                                <div className="h-4 w-5/6 bg-[#E5E5E5]" style={{ borderRadius: "2px" }}></div>
                                <div className="h-4 w-2/3 bg-[#E5E5E5]" style={{ borderRadius: "2px" }}></div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 p-8 bg-white">
                            <div className="grid grid-cols-3 gap-6 mb-8">
                                <div className="h-24 bg-[#FAFAFA] border border-[#E5E5E5]" style={{ borderRadius: "2px" }}></div>
                                <div className="h-24 bg-[#FAFAFA] border border-[#E5E5E5]" style={{ borderRadius: "2px" }}></div>
                                <div className="h-24 bg-[#FAFAFA] border border-[#E5E5E5]" style={{ borderRadius: "2px" }}></div>
                            </div>
                            <div className="h-48 bg-[#FAFAFA] border border-[#E5E5E5]" style={{ borderRadius: "2px" }}></div>
                        </div>
                    </div>
                </div>

                {/* Feature List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                    {features.map((feature, index) => {
                        const [title, desc] = feature.split(" – ");
                        return (
                            <div
                                key={index}
                                className="flex items-start gap-3 p-4 border border-[#E5E5E5] hover:border-[#0A0A0A] transition-colors bg-white"
                                style={{ borderRadius: "2px" }}
                            >
                                <Check className="w-5 h-5 text-[#0A0A0A] flex-shrink-0 mt-0.5" />
                                <div className="text-sm">
                                    <span className="font-bold text-[#0A0A0A]">{title}</span>
                                    {desc && <span className="text-[#525252] block mt-1">{desc}</span>}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
