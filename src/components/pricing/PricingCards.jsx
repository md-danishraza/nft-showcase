import React from "react";
import HighLightButton from "../HighlightButton";

function PricingCards({ isYearly }) {
  const plans = [
    {
      id: "creator",
      name: "Creator",
      price: { monthly: 0, yearly: 0 },
      originalPrice: { monthly: 0, yearly: 0 },
      description: "Perfect for beginners exploring NFTs",
      features: [
        "Mint up to 10 NFTs/month",
        "2% platform fee",
        "Basic analytics",
        "Community support",
        "Standard listing",
      ],
      buttonText: "Get Started",
      popular: false,
      gradient: "from-grad-start/20 to-grad-end/20",
      buttonVariant: "outline",
    },
    {
      id: "pro",
      name: "Pro Artist",
      price: { monthly: 29, yearly: 278 },
      originalPrice: { monthly: 29, yearly: 348 },
      description: "For serious creators and artists",
      features: [
        "Unlimited NFT mints",
        "1% platform fee",
        "Advanced analytics",
        "Priority support (24/7)",
        "Verified artist badge",
        "Featured placement",
        "Royalty up to 15%",
      ],
      buttonText: "Start Pro Trial",
      popular: true,
      gradient: "from-grad-start to-grad-end",
      buttonVariant: "gradient",
    },
    {
      id: "collector",
      name: "Collector",
      price: { monthly: 19, yearly: 182 },
      originalPrice: { monthly: 19, yearly: 228 },
      description: "For active collectors and traders",
      features: [
        "0.5% trading fee",
        "Early access to drops",
        "Portfolio analytics",
        "Private collector groups",
        "Whitelist spots",
        "Premium support",
      ],
      buttonText: "Join Waitlist",
      popular: false,
      gradient: "from-grad-start/20 to-grad-end/20",
      buttonVariant: "outline",
    },
  ];

  // Calculate savings
  const getYearlySavings = (monthlyPrice, yearlyPrice) => {
    if (monthlyPrice === 0) return 0;
    const monthlyTotal = monthlyPrice * 12;
    return monthlyTotal - yearlyPrice;
  };

  return (
    <div className="relative py-16 md:py-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-grad-start opacity-10 blur-[150px] animate-float-3"></div>
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] rounded-full bg-grad-end opacity-10 blur-[150px] animate-float-2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => {
            const currentPrice = isYearly
              ? plan.price.yearly
              : plan.price.monthly;
            const originalPrice = isYearly
              ? plan.originalPrice.yearly
              : plan.originalPrice.monthly;
            const hasSavings = originalPrice > currentPrice;
            const savingsAmount = getYearlySavings(
              plan.price.monthly,
              plan.price.yearly
            );

            return (
              <div
                key={plan.id}
                className={`relative group animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-grad-start to-grad-end text-white text-xs font-poppins font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Card */}
                <div
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border transition-all duration-500 hover:-translate-y-2 ${
                    plan.popular
                      ? "border-highlight/50 shadow-2xl shadow-highlight/10"
                      : "border-white/10 hover:border-highlight/30"
                  }`}
                >
                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`}
                  ></div>

                  {/* Plan Name */}
                  <h3 className="font-clash font-semibold text-2xl text-white mb-2">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1 flex-wrap">
                      <span className="font-clash font-bold text-4xl md:text-5xl text-white">
                        ${currentPrice}
                      </span>
                      <span className="font-poppins text-white/50 ml-1">
                        /{isYearly ? "year" : "month"}
                      </span>

                      {/* Original price crossed out */}
                      {hasSavings && currentPrice !== 0 && (
                        <span className="font-poppins text-white/30 text-sm line-through ml-2">
                          ${originalPrice}/{isYearly ? "year" : "month"}
                        </span>
                      )}
                    </div>

                    {/* Savings badge for yearly */}
                    {isYearly && savingsAmount > 0 && (
                      <div className="mt-2">
                        <span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
                          Save ${savingsAmount}/year
                        </span>
                      </div>
                    )}

                    {plan.price.monthly === 0 && (
                      <span className="font-poppins text-white/50 text-sm">
                        forever
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="font-poppins text-white/60 text-sm mb-6 pb-6 border-b border-white/10">
                    {plan.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <svg
                          className="w-5 h-5 text-highlight flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="font-poppins text-sm text-white/70">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <div className="mt-auto">
                    {plan.buttonVariant === "gradient" ? (
                      <HighLightButton className="w-full">
                        {plan.buttonText}
                      </HighLightButton>
                    ) : (
                      <button
                        className={`w-full py-3 rounded-full font-poppins font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
                          plan.popular
                            ? "bg-gradient-to-r from-grad-start to-grad-end text-white hover:brightness-110 hover:scale-105"
                            : "border border-white/20 text-white hover:border-highlight/50 hover:bg-white/5 hover:scale-105"
                        }`}
                      >
                        {plan.buttonText}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 animate-fade-in-up animation-delay-600">
          <p className="font-poppins text-white/40 text-sm">
            All plans include basic minting tools, marketplace access, and
            community features.
            <br />
            No credit card required for the Creator plan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PricingCards;
