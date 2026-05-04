import React from "react";
import HighLightButton from "./HighlightButton";
import heroImg from "../assets/landing/heroImg.png";

function HeroSection() {
  return (
    <div className="relative pt-32">
      {/* Animated Floating Blobs - Rim Light Effect */}
      <div className="absolute inset-0  pointer-events-none ">
        {/* Large Blob 1 - Top Left */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-grad-start opacity-20 blur-[80px] animate-pulse-slow"></div>

        {/* Large Blob 2 - Bottom Right */}
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-grad-end opacity-20 blur-[80px] animate-pulse-slow animation-delay-1000"></div>

        {/* Large Blob 3 - Center Right */}
        <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-gradient-to-r from-grad-start to-grad-end opacity-15 blur-[100px] animate-blob-float"></div>

        {/* Small Floating Blobs - Random positions */}
        <div className="absolute top-20 left-[15%] w-12 h-12 rounded-full bg-grad-start opacity-25 blur-xl animate-float-1"></div>
        <div className="absolute bottom-32 left-[10%] w-8 h-8 rounded-full bg-grad-end opacity-30 blur-lg animate-float-2"></div>
        <div className="absolute top-1/2 right-[20%] w-16 h-16 rounded-full bg-grad-start opacity-20 blur-xl animate-float-3"></div>
        <div className="absolute bottom-40 right-[15%] w-10 h-10 rounded-full bg-grad-end opacity-25 blur-lg animate-float-4"></div>
        <div className="absolute top-60 left-[30%] w-6 h-6 rounded-full bg-highlight opacity-30 blur-md animate-float-5"></div>
        <div className="absolute bottom-20 left-[40%] w-14 h-14 rounded-full bg-grad-start opacity-15 blur-xl animate-float-6"></div>
        <div className="absolute top-[70%] right-[25%] w-20 h-20 rounded-full bg-grad-end opacity-20 blur-2xl animate-float-7"></div>
        <div className="absolute top-[15%] right-[10%] w-5 h-5 rounded-full bg-highlight opacity-40 blur-sm animate-float-8"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 gap-y-24 lg:gap-20">
          {/* Left Container - Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none order-2 lg:order-1">
            {/* Main Heading */}
            <h1 className="font-clash font-semibold text-5xl sm:text-6xl md:text-7xl leading-tight sm:leading-tight md:leading-tight lg:leading-[1.2] mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent animate-fade-in-up">
              Discover Rare Collections Of Art & NFT's
            </h1>

            {/* Subtitle */}
            <p className="font-poppins text-base  text-white/70 max-w-lg mx-auto lg:mx-0 mb-10 animate-fade-in-up animation-delay-200">
              Create, Explore, & Collect Digital Art NFTs
            </p>

            {/* Button */}
            <div className="animate-fade-in-up animation-delay-400 flex justify-center lg:justify-start">
              <HighLightButton>EXPLORE</HighLightButton>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 sm:gap-10 md:gap-12 mt-16 sm:mt-20 animate-fade-in-up animation-delay-600">
              <div className="text-center lg:text-left">
                <p className="font-clash font-semibold text-2xl lg:text-3xl text-white">
                  32k<span className="text-highlight">+</span>
                </p>
                <p className="font-poppins text-sm sm:text-base text-white/60 mt-2">
                  Artwork
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-clash font-semibold text-2xl lg:text-3xl text-white">
                  20k<span className="text-highlight">+</span>
                </p>
                <p className="font-poppins text-sm sm:text-base text-white/60 mt-2">
                  Auctions
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-clash font-semibold text-2xl lg:text-3xl text-white">
                  10k<span className="text-highlight">+</span>
                </p>
                <p className="font-poppins text-sm sm:text-base text-white/60 mt-2">
                  Artists
                </p>
              </div>
            </div>
          </div>

          {/* Right Container - Hero Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in-right order-1 lg:order-2">
            <div className="relative group">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-grad-start/30 to-grad-end/30 rounded-full blur-3xl scale-110 group-hover:scale-125 transition-transform duration-700"></div>

              {/* Main Image */}
              <img
                src={heroImg}
                alt="Hero NFT Illustration"
                className="relative w-full max-w-md  h-auto object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />

              {/* Small floating decorative dots around image */}
              <div className="absolute -top-6 -right-6 w-3 h-3 rounded-full bg-grad-start opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-2 h-2 rounded-full bg-grad-end opacity-60 animate-pulse animation-delay-500"></div>
              <div className="absolute top-1/2 -right-8 w-1.5 h-1.5 rounded-full bg-highlight opacity-50 animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
