import React from "react";
import HeroSection from "../components/landing/HeroSection";
import BitcoinSection from "../components/landing/BitcoinSection";
import TrendingSection from "../components/landing/TrendingSection";
import CommunitySection from "../components/landing/CommunitySection";
import PopularArtistSection from "../components/landing/PopularArtistSection";

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
