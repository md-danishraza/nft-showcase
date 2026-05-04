import React from "react";
import HeroSection from "../components/HeroSection";
import BitcoinSection from "../components/BitcoinSection";
import TrendingSection from "../components/TrendingSection";
import CommunitySection from "../components/CommunitySection";
import PopularArtistSection from "../components/PopularArtistSection";

function Landing() {
  return (
    <div className="">
      <HeroSection />
      <BitcoinSection />
      <TrendingSection />
      <PopularArtistSection />
      <CommunitySection />
    </div>
  );
}

export default Landing;
