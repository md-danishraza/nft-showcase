import React from "react";
import HighLightButton from "../HighlightButton";
// import featuresHeroImg from "../../assets/features/featuresHero.png";
import featuresHeroImg from "../../assets/about/aboutHero.jpg";
function FeaturesHero() {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 ">
      {/* Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 rounded-full bg-grad-start opacity-20 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 -right-40 w-96 h-96 rounded-full bg-grad-end opacity-20 blur-[100px] animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-grad-start to-grad-end opacity-10 blur-[120px] animate-blob-float"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-clash font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent animate-fade-in-up">
            Powerful Features for
            <span className="text-highlight"> Creators & Collectors</span>
          </h1>
          <p className="font-poppins text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
            Everything you need to create, discover, and trade digital art NFTs
            in one seamless platform.
          </p>
          <div className="animate-fade-in-up animation-delay-400">
            <HighLightButton>Start Creating</HighLightButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesHero;
