"use client";

import { useState } from "react";

interface WaitlistDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistDialog({ isOpen, onClose }: WaitlistDialogProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to join waitlist");
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  const handleClose = () => {
    setStatus("idle");
    setErrorMessage("");
    setEmail("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Dialog */}
      <div className="relative bg-[#0E0F12] border border-[#1C1E26] rounded-lg max-w-md w-full p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#8892A4] hover:text-[#C8D8F0] transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-2xl font-bold text-[#F4F6FB] mb-2" style={{ fontFamily: "var(--font-geist), sans-serif" }}>
              Join the Waitlist
            </h3>
            <p className="text-[#8892A4] text-sm" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Be the first to know when we launch. Get early access to Rivtor.
            </p>
          </div>

          {status === "success" ? (
            <div className="p-4 bg-[#C8D8F0]/10 border border-[#C8D8F0]/30 text-[#C8D8F0] text-center rounded">
              <p className="font-semibold" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                YOU'RE ON THE LIST
              </p>
              <p className="text-sm mt-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                We'll notify you when Rivtor is ready.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="email" className="block text-xs text-[#8892A4] uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-[#060608] border border-[#1C1E26] text-[#F4F6FB] p-3 focus:outline-none focus:border-[#C8D8F0] transition-colors placeholder-[#8892A4] rounded"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                />
              </div>

              {status === "error" && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center rounded">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-[#C8D8F0] text-[#060608] text-sm font-bold uppercase tracking-widest py-3 hover:bg-[#C8D8F0]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded"
                style={{ fontFamily: "var(--font-geist-mono), monospace" }}
              >
                {status === "submitting" ? "Joining..." : "Join Waitlist"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
