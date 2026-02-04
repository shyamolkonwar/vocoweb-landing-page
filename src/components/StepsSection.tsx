
interface Step {
    number: number;
    title: string;
    subtitle: string;
    problem: string;
    solution: string;
    details: string;
    benefit: string;
}

const steps: Step[] = [
    {
        number: 1,
        title: "VocoResearch – Find Out What People Actually Want",
        subtitle: "Stop Guessing. Start Knowing.",
        problem: "Most startups fail because they build something nobody asked for. You think your idea is great, but you haven't talked to actual customers or checked what competitors are doing.",
        solution: "Before you write a single line of code, ask VocoWeb to research the market for you.",
        details: "Instead of saying \"Build me a CRM app,\" you say: \"What are people complaining about in reviews of popular CRM tools?\" VocoWeb analyzes competitor reviews, community discussions, social media, and industry trends. It finds the real problems people are willing to pay to solve.",
        benefit: "A clear report showing you validated opportunities—problems that real people are actually struggling with. No more building in the dark."
    },
    {
        number: 2,
        title: "VocoStrategy – Plan Your Product Like a Pro",
        subtitle: "The AI Product Manager You Can't Afford to Hire",
        problem: "You have an idea, but you don't know exactly what features to build, how users should move through your app, or how your data should be organized. So you give vague instructions, and the AI builds... something. Usually the wrong something.",
        solution: "VocoStrategy acts like an experienced product manager who takes your messy notes and turns them into a clear, detailed plan.",
        details: "Upload your thoughts, research findings, or customer feedback. VocoStrategy creates: A detailed product plan showing exactly what you're building, User flows showing how people will move through your app, Data structure showing what information you need to store and how.",
        benefit: "Crystal-clear specifications that ensure you build exactly what you need—not what the AI \"thinks\" you want."
    },
    {
        number: 3,
        title: "VocoBuild – Generate Your App With Confidence",
        subtitle: "Clean Code That Actually Works",
        problem: "Other platforms generate messy code that breaks the moment you try to add a new feature or deploy it for real users.",
        solution: "Because VocoStrategy already created a detailed plan, VocoBuild generates clean, organized code that makes sense.",
        details: "We use pre-built, battle-tested components for critical features like user logins, payments, and data storage. The AI assembles these proven pieces—it doesn't try to invent security systems from scratch. ONE-CLICK DEPLOYMENT: Your app goes live on secure, isolated servers with one click. No wrestling with cloud providers or hiring DevOps experts. YOU OWN YOUR CODE: Export to GitHub or download everything anytime. We're not holding your work hostage.",
        benefit: "You stay because we're useful, not because you're trapped."
    },
    {
        number: 4,
        title: "The Foundry – Run Your Business",
        subtitle: "All the Business Tools You Need, Built In",
        problem: "Even if you build a great app, you still need to handle payments, manage users, stay legally compliant, and understand what's working. Most founders get stuck here.",
        solution: "Your control center for everything that happens after you launch:",
        details: "💰 Payment Processing & Tax Compliance: We handle global payments and tax requirements. 👥 User Management: Professional login systems. 📊 Business Analytics: See who's using your app. 🔒 Automatic Backups & Safety: Daily backups and one-click rollback.",
        benefit: "Sleep better at night."
    }
];

export default function StepsSection() {
    return (
        <section className="py-20 border-b border-[#E5E5E5]">
            <div className="container">
                {/* Section Header */}
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <span className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252] block mb-4">
                        THE SOLUTION
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.03em] text-[#0A0A0A] mb-6">
                        The Complete Business Builder
                    </h2>
                    <p className="text-xl text-[#0A0A0A] font-medium">
                        We&apos;re the only platform that takes you from &quot;I have an idea&quot; to &quot;I&apos;m making money&quot;—without switching tools.
                    </p>
                </div>

                {/* Steps */}
                <div className="space-y-24">
                    {steps.map((step, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-12 border-t border-[#E5E5E5] first:pt-0 first:border-0">
                            {/* Number & Title */}
                            <div className="md:col-span-4">
                                <span className="font-mono text-6xl text-[#E5E5E5] block mb-4">
                                    0{step.number}
                                </span>
                                <h3 className="text-2xl font-bold tracking-[-0.03em] text-[#0A0A0A] mb-2">
                                    {step.title.split(":")[0]}
                                </h3>
                                <p className="text-sm font-mono text-[#525252] tracking-[0.05em] uppercase">
                                    {step.subtitle}
                                </p>
                            </div>

                            {/* Content */}
                            <div className="md:col-span-8 space-y-8">
                                <div>
                                    <span className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252] block mb-2">
                                        THE PROBLEM
                                    </span>
                                    <p className="text-[#525252] leading-relaxed">
                                        {step.problem}
                                    </p>
                                </div>

                                <div>
                                    <span className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252] block mb-2">
                                        HOW VOCOWEB FIXES IT
                                    </span>
                                    <p className="text-[#0A0A0A] font-medium leading-relaxed mb-4">
                                        {step.solution}
                                    </p>
                                    <p className="text-[#525252] leading-relaxed">
                                        {step.details}
                                    </p>
                                </div>

                                <div className="bg-[#FAFAFA] p-6 border border-[#E5E5E5]" style={{ borderRadius: "2px" }}>
                                    <span className="font-mono text-xs uppercase tracking-[0.05em] text-[#0A0A0A] block mb-2">
                                        YOU GET
                                    </span>
                                    <p className="text-[#525252] text-sm">
                                        {step.benefit}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
