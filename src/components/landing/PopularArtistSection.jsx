import React from "react";
import WhiteLinkButton from "../WhiteLinkButton";
import ferhatPP from "../../assets/landing/ferhatPP.jpg";
import sebastianPP from "../../assets/landing/sebastianPP.jpg";
import javierPP from "../../assets/landing/javierPP.jpg";
import ericaPP from "../../assets/landing/ericaPP.jpg";

function PopularArtistSection() {
  // Organizing the data into an array keeps the JSX clean and DRY
  const artists = [
    { id: 1, name: "Ferhat Deniz", img: ferhatPP },
    { id: 2, name: "Sebastian", img: sebastianPP },
    { id: 3, name: "Javier Miranda", img: javierPP },
    { id: 4, name: "Erick Butler", img: ericaPP },
  ];

  return (
    <div className="relative py-20 text-white overflow-hidden">
      {/* Subtle top-right background glow to match the design */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-grad-start opacity-[0.08] blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Main Container */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12 md:mb-16">
          <h1 className="font-clash text-4xl sm:text-5xl md:text-6xl font-semibold!">
            Popular Artists
          </h1>
          <WhiteLinkButton>View all Artists</WhiteLinkButton>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 justify-items-center">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Profile Picture Container */}
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden mb-5">
                <img
                  src={artist.img}
                  alt={artist.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out grayscale-[20%] group-hover:grayscale-0"
                />
              </div>

              {/* Artist Name */}
              <h3 className="font-clash text-xl md:text-2xl font-light! text-white/90 group-hover:text-white transition-colors duration-300 text-center">
                {artist.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularArtistSection;
