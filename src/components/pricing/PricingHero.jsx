import React from "react";

function PricingHero({ isYearly, setIsYearly }) {
  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 rounded-full bg-grad-start opacity-20 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 -right-40 w-96 h-96 rounded-full bg-grad-end opacity-20 blur-[100px] animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-grad-start to-grad-end opacity-10 blur-[120px] animate-blob-float"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 border border-white/10 animate-fade-in-up">
            <span className="font-poppins text-sm text-highlight">
              Simple, Transparent Pricing
            </span>
          </div>

          <h1 className="font-clash font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent animate-fade-in-up">
            Choose the Plan
            <br />
            That's Right for You
          </h1>

          <p className="font-poppins text-base md:text-lg text-white/70 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Start free, upgrade when you're ready. No hidden fees, cancel
            anytime.
          </p>

          {/* Billing Toggle - Functional */}
          <div className="flex items-center justify-center gap-4 mt-8 animate-fade-in-up animation-delay-400">
            <span
              className={`font-poppins transition-colors duration-300 ${
                !isYearly ? "text-white" : "text-white/50"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative group focus:outline-none"
              aria-label="Toggle billing period"
            >
              <div className="w-14 h-7 bg-white/10 rounded-full border border-white/20 p-1 cursor-pointer transition-all duration-300 group-hover:border-highlight/50">
                <div
                  className={`w-5 h-5 rounded-full bg-gradient-to-r from-grad-start to-grad-end transition-transform duration-300 ease-out ${
                    isYearly ? "translate-x-7" : "translate-x-0"
                  }`}
                ></div>
              </div>
            </button>
            <span
              className={`font-poppins transition-colors duration-300 flex items-center gap-2 ${
                isYearly ? "text-white" : "text-white/50"
              }`}
            >
              Yearly
              <span className="text-xs text-highlight bg-highlight/10 px-2 py-0.5 rounded-full animate-pulse">
                Save 20%
              </span>
            </span>
          </div>

          {/* Savings info */}
          <div className="mt-4 text-center">
            <p className="font-poppins text-xs text-white/40">
              {isYearly
                ? "You're saving 20% with annual billing 💰"
                : "Switch to yearly and save 20%"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingHero;
