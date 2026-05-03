import React, { useState, useEffect } from "react";
import bitcoinImg from "../assets/landing/bitcoinwork.jpg";
import WhiteLinkButton from "./WhiteLinkButton";

function BitcoinSection() {
  // Timer state for the "Auction Ends In" section
  const [timeLeft, setTimeLeft] = useState({
    hours: 18,
    minutes: 57,
    seconds: 14,
  });

  useEffect(() => {
    // Simple countdown logic to make the UI feel alive
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            hours = hours > 0 ? hours - 1 : 0;
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative py-20 md:py-28 lg:py-32">
      {/* Container with max-width and padding from our App layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CSS GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image Container */}
          <div className="relative w-full aspect-square max-w-xl mx-auto lg:mx-0 group">
            {/* Powerful Purple/Gradient Glow Behind Image */}
            <div className="absolute inset-0 -m-4 rounded-[2rem] bg-gradient-to-br from-grad-start via-grad-end to-transparent blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

            {/* Image with object-cover to fill the square perfectly */}
            <img
              src={bitcoinImg}
              alt="Bitcoin Art Work"
              className="relative z-10 w-full h-full object-cover rounded-[2rem] shadow-2xl"
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="flex flex-col text-center lg:text-left">
            {/* Heading */}
            <h2 className="font-clash font-semibold text-5xl sm:text-6xl md:text-7xl leading-[1.1] text-white tracking-wide">
              Bitcoin <br />
              Art Work
            </h2>

            {/* Creator Subtext */}
            <p className="font-poppins text-gray-300 mt-6 text-lg">
              Created by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-grad-start to-grad-end font-medium">
                Jonathan Borba
              </span>
            </p>

            {/* Bid and Timer Section */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-8 sm:gap-12 my-10">
              {/* Current Bid */}
              <div className="flex flex-col">
                <p className="font-poppins text-gray-300 text-sm mb-1">
                  Current Bid
                </p>
                <p className="font-clash font-semibold text-4xl text-white">
                  1.09 ETH
                </p>
                <p className="font-poppins text-gray-400 text-sm mt-1">
                  $1,835
                </p>
              </div>

              {/* Vertical Divider (Hidden on mobile, visible on sm+) */}
              <div className="hidden sm:block w-px h-20 bg-gray-600/50"></div>
              {/* Horizontal Divider for Mobile */}
              <div className="block sm:hidden h-px w-32 bg-gray-600/50"></div>

              {/* Auction Ends In */}
              <div className="flex flex-col">
                <p className="font-poppins text-gray-300 text-sm mb-2 text-center lg:text-left">
                  Auction Ends In
                </p>

                {/* Timer Grid */}
                <div className="flex gap-6 text-white text-center">
                  <div className="flex flex-col">
                    <span className="font-clash font-medium text-3xl">
                      {timeLeft.hours.toString().padStart(2, "0")}
                    </span>
                    <span className="font-poppins text-xs text-gray-400 mt-1">
                      Hours
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-clash font-medium text-3xl">
                      {timeLeft.minutes.toString().padStart(2, "0")}
                    </span>
                    <span className="font-poppins text-xs text-gray-400 mt-1">
                      Minutes
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-clash font-medium text-3xl">
                      {timeLeft.seconds.toString().padStart(2, "0")}
                    </span>
                    <span className="font-poppins text-xs text-gray-400 mt-1">
                      Seconds
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex justify-center lg:justify-start mt-2">
              <WhiteLinkButton href="#" icon="arrow">
                View Art Work
              </WhiteLinkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BitcoinSection;
