import React from "react";
import storyImg from "../../assets/about/storyImg.jpg"; // You'll need to add this image

function OurStory() {
  return (
    <div className="relative py-20 md:py-28 ">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[20%] w-80 h-80 rounded-full bg-grad-start opacity-5 blur-[120px] animate-float-3"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Image */}
          <div className="relative group animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-r from-grad-start/20 to-grad-end/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <img
              src={storyImg}
              alt="Our Story"
              className="relative w-full h-auto rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          {/* Right Content */}
          <div className="animate-fade-in-up animation-delay-200">
            <div className="inline-block mb-4">
              <span className="text-highlight font-poppins text-sm uppercase tracking-wider">
                Our Story
              </span>
              <div className="w-full h-0.5 bg-gradient-to-r from-grad-start to-grad-end mt-1"></div>
            </div>
            <h2 className="font-clash font-semibold text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Bridging Creativity & Blockchain
            </h2>
            <p className="font-poppins text-white/70 mb-4 leading-relaxed">
              Founded in 2022, NFTme emerged from a passion to democratize the
              art world. We saw talented creators struggling to get recognition
              and collectors finding it difficult to discover authentic digital
              art.
            </p>
            <p className="font-poppins text-white/70 mb-6 leading-relaxed">
              Today, we're proud to be home to thousands of artists and
              collectors who believe in the power of digital ownership. Our
              platform has facilitated over $50M in art transactions, making us
              one of the fastest-growing NFT marketplaces.
            </p>
            <div className="flex items-center gap-2 text-white/50 font-poppins text-sm">
              <span>✨ 1M+ Transactions</span>
              <span className="w-1 h-1 rounded-full bg-white/30"></span>
              <span>🎨 5K+ Artists</span>
              <span className="w-1 h-1 rounded-full bg-white/30"></span>
              <span>🌍 100+ Countries</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
