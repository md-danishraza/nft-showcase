import React from "react";
import HighLightButton from "../HighlightButton";
import aboutHeroImg from "../../assets/about/aboutHero.jpg";

function AboutHero() {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pb-32 ">
      {/* Animated Floating Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 rounded-full bg-grad-start opacity-20 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 -right-40 w-96 h-96 rounded-full bg-grad-end opacity-20 blur-[100px] animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-gradient-to-r from-grad-start to-grad-end opacity-15 blur-[120px] animate-blob-float"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <h1 className="font-clash font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              About <span className="text-highlight">NFTme</span>
            </h1>
            <p className="font-poppins text-base md:text-lg text-white/70 max-w-lg mx-auto lg:mx-0 mb-8">
              We're revolutionizing the digital art world by connecting creators
              with collectors in a seamless, transparent, and innovative
              marketplace.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <HighLightButton>Learn More</HighLightButton>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-grad-start/30 to-grad-end/30 rounded-full blur-3xl scale-110 group-hover:scale-125 transition-transform duration-700"></div>
              <img
                src={aboutHeroImg}
                alt="About NFTme"
                className="relative w-full rounded-2xl max-w-md lg:max-w-lg h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
