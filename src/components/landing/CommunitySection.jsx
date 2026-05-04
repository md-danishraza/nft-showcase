import React from "react";
import communityImg from "../../assets/landing/communityImg.jpg";
import HighLightButton from "../HighlightButton";

function CommunitySection() {
  return (
    <div className="relative py-20 md:py-28 lg:py-32 ">
      {/* Large Animated Shining Blobs Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Center Large Blob - Main Shining Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-grad-start/30 via-grad-end/20 to-grad-start/10 blur-[150px] animate-pulse-slow"></div>

        {/* Top Left Shining Blob */}
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-grad-start opacity-20 blur-[120px] animate-blob-float"></div>

        {/* Bottom Right Shining Blob */}
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] rounded-full bg-grad-end opacity-20 blur-[130px] animate-blob-float animation-delay-1000"></div>

        {/* Top Right Accent Blob */}
        <div className="absolute top-[20%] right-[15%] w-80 h-80 rounded-full bg-highlight opacity-15 blur-[100px] animate-float-3"></div>

        {/* Bottom Left Accent Blob */}
        <div className="absolute bottom-[25%] left-[10%] w-96 h-96 rounded-full bg-grad-start opacity-15 blur-[110px] animate-float-7"></div>

        {/* Center Right Highlight */}
        <div className="absolute top-[50%] right-[0%] w-64 h-64 rounded-full bg-highlight opacity-10 blur-[90px] animate-float-1"></div>

        {/* Center Left Highlight */}
        <div className="absolute top-[60%] left-[0%] w-72 h-72 rounded-full bg-grad-end opacity-10 blur-[95px] animate-float-2"></div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* ================= LEFT COLUMN - Image ================= */}
          <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:max-w-none animate-fade-in-up">
            {/* Multiple Glow Layers Behind Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-grad-start via-grad-end to-grad-start opacity-50 blur-[100px] rounded-full animate-pulse-slow"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-highlight opacity-30 blur-[80px] rounded-full animate-blob-float"></div>

            {/* Image Container with Shine Effect */}
            <div className="relative group">
              {/* Rotating Shine Border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-grad-start via-highlight to-grad-end rounded-[2rem] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 animate-spin-slow"></div>

              {/* Image Frame with Gradient Border */}
              <div className="relative p-1 bg-gradient-to-r from-grad-start/50 via-highlight/50 to-grad-end/50 rounded-[2rem]">
                <img
                  src={communityImg}
                  alt="NFT Community Art"
                  className="relative w-full aspect-square object-cover rounded-[1.8rem] shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
              </div>

              {/* Floating Shimmer Effect Overlay */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
              </div>
            </div>

            {/* Decorative Floating Particles */}
            <div className="absolute -top-4 -right-4 w-3 h-3 rounded-full bg-grad-start opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-2 h-2 rounded-full bg-highlight opacity-60 animate-pulse animation-delay-500"></div>
            <div className="absolute top-1/4 -right-6 w-1.5 h-1.5 rounded-full bg-grad-end opacity-50 animate-pulse animation-delay-1000"></div>
            <div className="absolute bottom-1/3 -left-4 w-2 h-2 rounded-full bg-grad-start opacity-40 animate-pulse animation-delay-700"></div>
          </div>

          {/* ================= RIGHT COLUMN - Content ================= */}
          <div className="flex flex-col text-center lg:text-left items-center lg:items-start animate-fade-in-up animation-delay-300">
            {/* Heading with Gradient Text */}
            <h2 className="font-clash font-semibold text-2xl sm:text-3xl md:text-4xl   leading-[1.2] sm:leading-[1.25] tracking-wide mb-8 lg:mb-10 max-w-xl bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Join The Community
              <br className="hidden sm:block" />
              And Get The Best NFT
              <br className="hidden sm:block" />
              Collection
            </h2>

            {/* CTA Button with hover animation */}
            <div className="transform transition-transform duration-300 hover:scale-105">
              <HighLightButton>JOIN COMMUNITY</HighLightButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunitySection;
