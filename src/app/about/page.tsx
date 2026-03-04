"use client";

import Navbar from '@/components/v3/Navbar';
import Footer from '@/components/v3/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#060608] text-[#F4F6FB]">
      <Navbar />

      <div className="max-w-4xl mx-auto pt-32 pb-20 px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#C8D8F0] text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
            About Us
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F4F6FB] mb-6 leading-tight" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
            About Rivtor
          </h1>
        </div>

        {/* Content Sections */}
        <div className="flex flex-col gap-16">
          {/* Opening Question */}
          <section className="flex flex-col gap-6">
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p className="text-[#C8D8F0] font-medium text-xl">
                We started with a question nobody was asking seriously enough.
              </p>
              <p className="text-[#C8D8F0] font-medium text-lg">
                What happens to a company when it no longer needs humans to run it?
              </p>
              <p>
                Not a smaller team. Not a more efficient team. No team at all — operating, executing, deciding — across every function, every department, every responsibility that keeping an organization alive and growing requires.
              </p>
              <p>
                Most people who encountered that question treated it as science fiction. We treated it as a product roadmap.
              </p>
            </div>
          </section>

          {/* Where This Began */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              Where This Began
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                Rivtor did not begin as an infrastructure company. It began as an observation.
              </p>
              <p>
                Every founder who has ever tried to build something serious has run into the same wall. The idea is clear. The market is real. The will is genuine. And then reality arrives in the form of a hiring plan, a runway calculation, a six-month timeline before anything ships, a coordination overhead that grows faster than the output it is supposed to produce.
              </p>
              <p>
                The constraint was never the vision. The constraint was always the execution layer between the vision and its realization. The team you needed to hire. The processes you needed to build. The organizational machinery that had to exist before the company could function.
              </p>
              <p className="text-[#C8D8F0] font-medium">
                We looked at that constraint and decided it was an engineering problem, not a permanent feature of how companies work. And we started building.
              </p>
            </div>
          </section>

          {/* What We Found */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              What We Found When We Started Building
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                The first thing we discovered was that the problem was deeper than it appeared. Building autonomous systems that could perform isolated tasks was not the hard part. The hard part was building systems that could hold accountability for outcomes. Systems that maintained context not just within a single task but across the entire operating history of a company. Systems that could make decisions that were coherent with decisions made six months ago by the same organization, informed by everything that had happened in between.
              </p>
              <p className="text-[#C8D8F0] font-medium">
                The difference between a task-completing system and an organization-running system is the difference between a calculator and a CFO. Both work with numbers. Only one is responsible for what the numbers mean.
              </p>
              <p>
                We built toward the CFO. Toward the CMO. Toward the CTO and the CEO and every function beneath them. We built toward the version of AI that does not wait to be directed on each step but holds a role, understands its domain, and executes continuously toward an outcome it is genuinely responsible for.
              </p>
              <p className="text-[#C8D8F0] font-medium">
                That is what Rivtor is. Not a tool that makes humans more efficient. An architecture that makes certain categories of human labor unnecessary.
              </p>
            </div>
          </section>

          {/* The Founding Perspective */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              The Founding Perspective
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                Shyamol Konwar founded Rivtor on a belief that sits at the intersection of two observations that most people hold separately.
              </p>
              <p>
                The first observation: the most important limiting factor in what gets built in the world is not the quality of ideas. There are extraordinary ideas everywhere, held by people with the intelligence and determination to execute them. The limiting factor is the execution infrastructure required to turn those ideas into operating organizations. That infrastructure is expensive, slow to assemble, and fragile in ways that have nothing to do with the quality of the underlying idea.
              </p>
              <p>
                The second observation: the capability to replace that execution infrastructure with artificial intelligence is not a future possibility. It is a present reality being developed faster than most organizations have begun to understand, let alone respond to.
              </p>
              <p className="text-[#C8D8F0] font-medium">
                Put those two observations together and the conclusion is not subtle. The foundational layer of autonomous organizational operation needs to be built now, by people who understand both the technical architecture required and the weight of what they are building.
              </p>
              <p className="text-[#C8D8F0] font-medium">
                That is the company Rivtor set out to be. That is the company we are building every day.
              </p>
            </div>
          </section>

          {/* What We Believe About Organizations */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              What We Believe About Organizations
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                We hold a specific view of what an organization is, and it shapes everything we build.
              </p>
              <p>
                An organization is an information-processing system. It takes in signals from the world, makes decisions about what those signals mean, acts on those decisions, measures the results, and updates its understanding accordingly. That loop, repeated continuously across every function of a company, is what an organization actually does beneath all the cultural and structural complexity we layer on top of it.
              </p>
              <p>
                For all of human history, that loop required humans at every node because humans were the only available intelligence capable of running it. The hierarchy, the management layers, the reporting structures, the performance reviews, the entire organizational architecture that we treat as natural and inevitable, all of it exists because coordinating human intelligence toward a shared goal requires enormous structural overhead.
              </p>
              <p className="text-[#C8D8F0] font-medium">
                Remove the requirement for human intelligence at every node and the entire organizational architecture changes. Not incrementally. Fundamentally. The coordination overhead collapses. The speed of the loop accelerates by orders of magnitude. The consistency of execution stops being subject to the variability of human performance, attention, motivation, and communication. The organization becomes something genuinely different from what organizations have been.
              </p>
              <p className="text-[#C8D8F0] font-medium">
                We are building the infrastructure for that different thing.
              </p>
            </div>
          </section>

          {/* What We Are Not */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              What We Are Not
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                We are precise about what Rivtor is, which means we are equally precise about what it is not.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-[#C8D8F0] font-bold text-lg mb-2">We are not a productivity tool.</h3>
                  <p>Productivity tools make humans faster at doing work. Rivtor eliminates the need for humans to do certain categories of work at all. These are different value propositions aimed at different futures.</p>
                </div>
                <div>
                  <h3 className="text-[#C8D8F0] font-bold text-lg mb-2">We are not an AI assistant platform.</h3>
                  <p>Assistants help. Agents are responsible. The systems we build do not help a human execute a strategy. They execute the strategy. The distinction is not semantic. It determines the entire architecture of what you build.</p>
                </div>
                <div>
                  <h3 className="text-[#C8D8F0] font-bold text-lg mb-2">We are not a no-code platform.</h3>
                  <p>No-code platforms lower the barrier to human-operated software. Rivtor removes the human operator from the operating loop entirely. The target state is not a more accessible tool. It is an autonomous system.</p>
                </div>
                <div>
                  <h3 className="text-[#C8D8F0] font-bold text-lg mb-2">We are not building for the short term.</h3>
                  <p>The infrastructure we are building is designed to be the foundational layer of autonomous organizational operation for decades. We make decisions accordingly, including decisions that sacrifice short-term momentum for long-term architectural integrity.</p>
                </div>
              </div>
            </div>
          </section>

          {/* How We Work */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              How We Work
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                Rivtor operates with a specific internal standard that we apply to every decision we make, every system we build, and every commitment we make to the people who run their organizations on our infrastructure.
              </p>
              <div className="space-y-4">
                <p className="text-[#C8D8F0] font-medium">
                  We build for production, not demonstration. The gap between an impressive demonstration and a reliable production system is where most AI companies currently live. We have made a deliberate choice to close that gap before we expand our surface area. Every capability we ship is built to the standard of something a serious operator can trust with their most important work.
                </p>
                <p className="text-[#C8D8F0] font-medium">
                  We are honest about limitations. The vision we are working toward is clear. The distance between where we are and where we are going is real, and we do not obscure it. The people who build on Rivtor deserve an accurate picture of what the system can and cannot do today. Trust is built on accuracy, not optimism.
                </p>
                <p className="text-[#C8D8F0] font-medium">
                  We hold the founder&apos;s intent as the highest architectural principle. Every agent we build, every system we deploy, every autonomous decision made on behalf of a Rivtor-powered organization must be traceable back to the intent of the person who authored that organization. Autonomy without accountability to the founder&apos;s vision is not a product. It is a liability.
                </p>
                <p className="text-[#C8D8F0] font-medium">
                  We move with urgency and without shortcuts. The window in which the foundational architecture of autonomous organizational operation gets established is not permanently open. We are aware of that. We move accordingly. But urgency has never been a justification for compromising the reliability standard that this work demands.
                </p>
              </div>
            </div>
          </section>

          {/* What We Are Building Toward */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              What We Are Building Toward
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                We want to be honest about the destination because we think vagueness here is a form of dishonesty.
              </p>
              <p>
                We are building toward a world in which a single person with a clear vision can operate a company of any complexity without hiring a human being to execute any part of it. Where the founder authors the organization and the agents run it. Where the quality of the idea is the only meaningful constraint on what gets built.
              </p>
              <p>
                We are building toward a world in which the best-run organizations are not the ones with the most people but the ones with the clearest vision and the most capable autonomous infrastructure executing it.
              </p>
              <p>
                We are building toward a world in which the work that humans do inside organizations is the work that only humans can do. The vision. The values. The relationships. The judgment on the questions that genuinely require it. And everything else is handled by systems that are better suited to handle it.
              </p>
              <p className="text-[#C8D8F0] font-medium text-lg">
                That world is closer than most people think. We are building the infrastructure for it. And we will not stop until it exists.
              </p>
            </div>
          </section>

          {/* Careers CTA */}
          <section className="p-8 bg-[#0E0F12] border border-[#1C1E26] rounded-lg">
            <h2 className="text-xl font-bold text-[#F4F6FB] mb-4" style={{ fontFamily: "var(--font-geist), sans-serif" }}>
              Come Build With Us
            </h2>
            <p className="text-[#8892A4] mb-6 leading-relaxed" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Rivtor is growing. We are looking for people who have read this page and felt something other than skepticism. People who recognize the problem, believe in the architecture, and want to be part of the team that builds it correctly.
            </p>
            <p className="text-[#8892A4] mb-6" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              If that is you, we want to hear from you.
            </p>
            <a
              href="mailto:careers@rivtor.com"
              className="inline-block bg-[#C8D8F0] text-[#060608] text-sm font-bold uppercase tracking-widest py-3 px-8 hover:bg-[#C8D8F0]/90 transition-colors rounded"
              style={{ fontFamily: "var(--font-geist-mono), monospace" }}
            >
              careers@rivtor.com
            </a>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
