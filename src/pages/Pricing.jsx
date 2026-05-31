import React from "react";
import PricingHero from "../components/pricing/PricingHero";
import PricingCards from "../components/pricing/PricingCards";
import FAQSection from "../components/pricing/FAQsection";
import { useState } from "react";
function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <main className="bg-brand-bg">
      <PricingHero isYearly={isYearly} setIsYearly={setIsYearly} />
      <PricingCards isYearly={isYearly} />
      <FAQSection />
    </main>
  );
}

export default PricingPage;
