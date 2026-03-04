"use client";

import { useState } from "react";

interface WaitlistDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistDialog({ isOpen, onClose }: WaitlistDialogProps) {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    business_name: "",
    country: "",
  });
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
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to join waitlist");
      }

      setStatus("success");
      setFormData({ email: "", name: "", business_name: "", country: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  const handleClose = () => {
    setStatus("idle");
    setErrorMessage("");
    setFormData({ email: "", name: "", business_name: "", country: "" });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      <div className="relative bg-[#0E0F12] border border-[#1C1E26] rounded-lg max-w-md w-full p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
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
        <div className="flex flex-col gap-6 text-left">
          <div>
            <h3 className="text-2xl font-bold text-[#F4F6FB] mb-2" style={{ fontFamily: "var(--font-geist), sans-serif" }}>
              Join the Waitlist
            </h3>
            <p className="text-[#8892A4] text-sm" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Be the first to know when we launch. Get early access to Rivtor.
            </p>
          </div>

          {status === "success" ? (
            <div className="p-4 bg-[#C8D8F0]/10 border border-[#C8D8F0]/30 text-[#C8D8F0] rounded">
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
                <label htmlFor="name" className="block text-xs text-[#8892A4] uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                  Name <span className="text-[#C8D8F0]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-[#060608] border border-[#1C1E26] text-[#F4F6FB] p-3 focus:outline-none focus:border-[#C8D8F0] transition-colors placeholder-[#8892A4] rounded"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs text-[#8892A4] uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                  Email Address <span className="text-[#C8D8F0]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-[#060608] border border-[#1C1E26] text-[#F4F6FB] p-3 focus:outline-none focus:border-[#C8D8F0] transition-colors placeholder-[#8892A4] rounded"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                />
              </div>

              <div>
                <label htmlFor="business_name" className="block text-xs text-[#8892A4] uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                  Business Name <span className="text-[#8892A4]">(optional)</span>
                </label>
                <input
                  type="text"
                  id="business_name"
                  name="business_name"
                  value={formData.business_name}
                  onChange={handleChange}
                  placeholder="Your Company Inc."
                  className="w-full bg-[#060608] border border-[#1C1E26] text-[#F4F6FB] p-3 focus:outline-none focus:border-[#C8D8F0] transition-colors placeholder-[#8892A4] rounded"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-xs text-[#8892A4] uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                  Country <span className="text-[#C8D8F0]">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full bg-[#060608] border border-[#1C1E26] text-[#F4F6FB] p-3 focus:outline-none focus:border-[#C8D8F0] transition-colors rounded"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  <option value="">Select your country</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Japan">Japan</option>
                  <option value="Singapore">Singapore</option>
                  <option value="India">India</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Spain">Spain</option>
                  <option value="Italy">Italy</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Norway">Norway</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Austria">Austria</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="South Korea">South Korea</option>
                  <option value="China">China</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {status === "error" && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded">
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
