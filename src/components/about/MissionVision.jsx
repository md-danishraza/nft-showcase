import React from "react";

function MissionVision() {
  return (
    <div className="relative py-20 md:py-28 bg-white/5 ">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-grad-end opacity-5 blur-[150px] animate-blob-float"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-clash font-semibold text-3xl md:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
            Our Mission & Vision
          </h2>
          <p className="font-poppins text-white/60">
            Driving the future of digital art with purpose and passion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-highlight/30 transition-all duration-500 animate-fade-in-up">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-grad-start/5 to-grad-end/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-grad-start/20 to-grad-end/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-clash font-semibold text-2xl mb-4 text-white">
                Our Mission
              </h3>
              <p className="font-poppins text-white/60 leading-relaxed">
                To empower artists worldwide by providing a decentralized
                platform where they can showcase, monetize, and protect their
                digital creations while offering collectors authentic,
                verifiable art pieces.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-highlight/30 transition-all duration-500 animate-fade-in-up animation-delay-200">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-grad-start/5 to-grad-end/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-grad-start/20 to-grad-end/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">👁️</span>
              </div>
              <h3 className="font-clash font-semibold text-2xl mb-4 text-white">
                Our Vision
              </h3>
              <p className="font-poppins text-white/60 leading-relaxed">
                To become the world's leading digital art ecosystem where
                creativity knows no boundaries, and every artist can thrive in
                the new creative economy powered by blockchain technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionVision;
