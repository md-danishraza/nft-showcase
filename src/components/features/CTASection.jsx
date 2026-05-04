import React from "react";
import HighLightButton from "../HighlightButton";

function CTASection() {
  return (
    <div className="relative py-20 md:py-28 ">
      {/* Large Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-grad-start/25 to-grad-end/25 blur-[150px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-highlight opacity-10 blur-[100px] animate-float-1"></div>
        <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-grad-start opacity-10 blur-[100px] animate-float-2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="bg-gradient-to-r from-grad-start/10 to-grad-end/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16 text-center border border-white/10">
          {/* Badge */}
          <div className="inline-block mb-6 px-4 py-1 rounded-full bg-white/5 border border-white/10">
            <span className="font-poppins text-sm text-highlight">
              ✨ Limited Time
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-clash font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
            Ready to Start Your
            <br className="hidden sm:block" />
            NFT Journey?
          </h2>

          {/* Description */}
          <p className="font-poppins text-white/60 max-w-2xl mx-auto mb-8">
            Join thousands of creators already earning on NFTme. Get started
            today with zero gas fees on your first mint.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <HighLightButton>Get Started Free</HighLightButton>
            <button className="px-6 py-3 rounded-full border border-white/20 hover:border-highlight/50 text-white font-poppins font-semibold transition-all duration-300 hover:bg-white/5 hover:scale-105">
              View Documentation
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap justify-center gap-6 text-white/40 text-xs font-poppins">
            <span>✓ No Credit Card Required</span>
            <span>✓ Free 14-day Trial</span>
            <span>✓ Cancel Anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTASection;
