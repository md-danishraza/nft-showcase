import React from "react";
import ericImg from "../assets/landing/ericImg.jpg";
import ferhatImg from "../assets/landing/ferhatImg.jpg";
import javierImg from "../assets/landing/javierImg.jpg";
import miladImg from "../assets/landing/miladImg.jpg";
import polinaImg from "../assets/landing/polinaImg.jpg";
import sebastianImg from "../assets/landing/sebastianImg.jpg";
import WhiteLinkButton from "./WhiteLinkButton";

function TrendingSection() {
  return (
    <div className="relative py-20 md:py-28 lg:py-32 text-white">
      {/* Large Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top Left Large Blob */}
        <div className="absolute top-[10%] -left-48 w-[600px] h-[600px] rounded-full bg-grad-start opacity-10 blur-[120px] animate-pulse-slow"></div>

        {/* Center Right Large Blob */}
        <div className="absolute top-[40%] -right-48 w-[600px] h-[600px] rounded-full bg-grad-end opacity-10 blur-[120px] animate-pulse-slow animation-delay-1000"></div>

        {/* Bottom Left Blob */}
        <div className="absolute bottom-[10%] -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-grad-start to-grad-end opacity-8 blur-[140px] animate-blob-float"></div>

        {/* Top Right Small Blob */}
        <div className="absolute top-[20%] right-[10%] w-72 h-72 rounded-full bg-highlight opacity-5 blur-[100px] animate-float-3"></div>

        {/* Bottom Right Blob */}
        <div className="absolute bottom-[20%] right-[5%] w-80 h-80 rounded-full bg-grad-start opacity-8 blur-[110px] animate-float-7"></div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* ================= LEFT COLUMN ================= */}
          <div className="flex flex-col gap-12 md:gap-14 lg:gap-16">
            {/* Header Section */}
            <div className="max-w-md animate-fade-in-up">
              <h1 className="font-clash font-semibold text-5xl sm:text-6xl md:text-7xl leading-tight mb-5 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                Trending This Week
              </h1>
              <p className="font-poppins text-sm sm:text-base text-white/60 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur dolore adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>

            {/* Card 1: Sebastian */}
            <div className="group animate-fade-in-up animation-delay-200">
              <div className="flex justify-between items-end mb-3">
                <div>
                  <h2 className="font-clash font-semibold text-xl sm:text-2xl lg:text-3xl text-white group-hover:text-highlight transition-colors duration-300">
                    Sebastian
                  </h2>
                  <p className="font-poppins text-[11px] sm:text-xs text-white/50 mt-1">
                    Golden Flower
                  </p>
                </div>
                <span className="font-poppins font-medium text-sm sm:text-base text-grad-start">
                  2.3 ETH
                </span>
              </div>
              <div className="relative overflow-hidden ">
                {/* Image Rim Light Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-grad-start/30 to-grad-end/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500  z-10"></div>
                <img
                  src={sebastianImg}
                  alt="Sebastian"
                  className="w-full h-auto object-cover  transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Card 3: Javier Miranda */}
            <div className="group animate-fade-in-up animation-delay-400">
              <div className="flex justify-between items-end mb-3">
                <div>
                  <h2 className="font-clash font-semibold text-xl sm:text-2xl lg:text-3xl text-white group-hover:text-highlight transition-colors duration-300">
                    Javier Miranda
                  </h2>
                  <p className="font-poppins text-[11px] sm:text-xs text-white/50 mt-1">
                    Golden Flower
                  </p>
                </div>
                <span className="font-poppins font-medium text-sm sm:text-base text-grad-start">
                  2.3 ETH
                </span>
              </div>
              <div className="relative overflow-hidden ">
                <div className="absolute inset-0 bg-gradient-to-r from-grad-start/30 to-grad-end/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500  z-10"></div>
                <img
                  src={javierImg}
                  alt="Javier Miranda"
                  className="w-full h-auto object-cover  transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Card 5: Milad Fakurian */}
            <div className="group animate-fade-in-up animation-delay-600">
              <div className="flex justify-between items-end mb-3">
                <div>
                  <h2 className="font-clash font-semibold text-xl sm:text-2xl lg:text-3xl text-white group-hover:text-highlight transition-colors duration-300">
                    Milad Fakurian
                  </h2>
                  <p className="font-poppins text-[11px] sm:text-xs text-white/50 mt-1">
                    Golden Flower
                  </p>
                </div>
                <span className="font-poppins font-medium text-sm sm:text-base text-grad-start">
                  2.3 ETH
                </span>
              </div>
              <div className="relative overflow-hidden ">
                <div className="absolute inset-0 bg-gradient-to-r from-grad-start/30 to-grad-end/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500  z-10"></div>
                <img
                  src={miladImg}
                  alt="Milad Fakurian"
                  className="w-full h-auto object-cover  transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="flex flex-col gap-12 md:gap-14 lg:gap-16 md:mt-12 lg:mt-16 xl:mt-20">
            {/* Card 2: Ferhat Deniz */}
            <div className="group animate-fade-in-up animation-delay-300">
              <div className="flex justify-between items-end mb-3">
                <div>
                  <h2 className="font-clash font-semibold text-xl sm:text-2xl lg:text-3xl text-white group-hover:text-highlight transition-colors duration-300">
                    Ferhat Deniz
                  </h2>
                  <p className="font-poppins text-[11px] sm:text-xs text-white/50 mt-1">
                    Golden Flower
                  </p>
                </div>
                <span className="font-poppins font-medium text-sm sm:text-base text-grad-start">
                  2.3 ETH
                </span>
              </div>
              <div className="relative overflow-hidden ">
                <div className="absolute inset-0 bg-gradient-to-r from-grad-start/30 to-grad-end/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500  z-10"></div>
                <img
                  src={ferhatImg}
                  alt="Ferhat Deniz"
                  className="w-full h-auto object-cover  transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Card 4: Polina Kondrashova */}
            <div className="group animate-fade-in-up animation-delay-500">
              <div className="flex justify-between items-end mb-3">
                <div>
                  <h2 className="font-clash font-semibold text-xl sm:text-2xl lg:text-3xl text-white group-hover:text-highlight transition-colors duration-300">
                    Polina Kondrashova
                  </h2>
                  <p className="font-poppins text-[11px] sm:text-xs text-white/50 mt-1">
                    Golden Flower
                  </p>
                </div>
                <span className="font-poppins font-medium text-sm sm:text-base text-grad-start">
                  2.3 ETH
                </span>
              </div>
              <div className="relative overflow-hidden ">
                <div className="absolute inset-0 bg-gradient-to-r from-grad-start/30 to-grad-end/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500  z-10"></div>
                <img
                  src={polinaImg}
                  alt="Polina Kondrashova"
                  className="w-full h-auto object-cover  transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Card 6: Erik Butler */}
            <div className="group animate-fade-in-up animation-delay-700">
              <div className="flex justify-between items-end mb-3">
                <div>
                  <h2 className="font-clash font-semibold text-xl sm:text-2xl lg:text-3xl text-white group-hover:text-highlight transition-colors duration-300">
                    Erik Butler
                  </h2>
                  <p className="font-poppins text-[11px] sm:text-xs text-white/50 mt-1">
                    Golden Flower
                  </p>
                </div>
                <span className="font-poppins font-medium text-sm sm:text-base text-grad-start">
                  2.3 ETH
                </span>
              </div>
              <div className="relative overflow-hidden ">
                <div className="absolute inset-0 bg-gradient-to-r from-grad-start/30 to-grad-end/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500  z-10"></div>
                <img
                  src={ericImg}
                  alt="Erik Butler"
                  className="w-full h-auto object-cover  transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Explore More Button - Bottom Right */}
            <div className="flex justify-end mt-2 md:mt-4 animate-fade-in-up animation-delay-800">
              <WhiteLinkButton href="#" icon="arrow">
                Explore More
              </WhiteLinkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingSection;
