import React from "react";
import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import MissionVision from "../components/about/MissionVision";
import TeamSection from "../components/about/TeamSection";
import StatsSection from "../components/about/StatsSection";
import JoinCommunity from "../components/about/JoinCommunity";

function AboutPage() {
  return (
    <main className="bg-brand-bg">
      <AboutHero />
      <StatsSection />
      <OurStory />
      <MissionVision />
      <TeamSection />
      <JoinCommunity />
    </main>
  );
}

export default AboutPage;
