import React from "react";
import FeaturesHero from "../components/features/FeaturesHero";
import FeaturesGrid from "../components/features/FeaturesGrid";
import CTASection from "../components/features/CTASection";

function FeaturesPage() {
  return (
    <main className="bg-brand-bg">
      <FeaturesHero />
      <FeaturesGrid />
      <CTASection />
    </main>
  );
}

export default FeaturesPage;
