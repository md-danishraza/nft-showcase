import React from "react";
import HighLightButton from "../HighlightButton";

function JoinCommunity() {
  return (
    <div className="relative py-20 md:py-28 ">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-grad-start/20 to-grad-end/20 blur-[150px] animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="bg-gradient-to-r from-grad-start/10 to-grad-end/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16 text-center border border-white/10">
          <h2 className="font-clash font-semibold text-3xl md:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
            Join Our Community
          </h2>
          <p className="font-poppins text-white/60 max-w-2xl mx-auto mb-8">
            Be part of something extraordinary. Connect with artists,
            collectors, and creators who are shaping the future of digital art.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <HighLightButton>Join Discord</HighLightButton>
            <button className="px-6 py-3 rounded-full border border-white/20 hover:border-highlight/50 text-white font-poppins font-semibold transition-all duration-300 hover:bg-white/5">
              Follow on Twitter
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="font-poppins text-xs text-white/40">
              Join 50,000+ members already in our community
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinCommunity;
