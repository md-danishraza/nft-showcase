import React from "react";

const features = [
  {
    icon: "🎨",
    title: "Mint Your Art",
    description:
      "Easily mint your digital artwork as NFTs with our simple, low-cost minting process. No coding required.",
    highlight: "0.02 ETH fee",
  },
  {
    icon: "🛡️",
    title: "Verified Ownership",
    description:
      "Every transaction is recorded on the blockchain, providing immutable proof of authenticity and ownership.",
    highlight: "100% Secure",
  },
  {
    icon: "💎",
    title: "Royalty System",
    description:
      "Set your own royalty percentage and earn passive income every time your art is resold.",
    highlight: "Up to 10% Royalties",
  },
  {
    icon: "🌐",
    title: "Multi-Chain Support",
    description:
      "Buy, sell, and trade across multiple blockchains including Ethereum, Polygon, and Solana.",
    highlight: "3+ Chains",
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    description:
      "Track your sales, view portfolio performance, and gain insights with real-time analytics.",
    highlight: "Real-time Data",
  },
  {
    icon: "🤝",
    title: "Community Governance",
    description:
      "Participate in platform decisions through our DAO. Your voice matters in shaping NFTme.",
    highlight: "DAO Powered",
  },
];

function FeaturesGrid() {
  return (
    <div className="relative py-20 md:py-28 ">
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-grad-start opacity-10 blur-[150px] animate-float-3"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-clash font-semibold text-3xl md:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
            Everything You Need
          </h2>
          <p className="font-poppins text-white/60">
            Powerful tools that make NFT creation and trading simple
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-highlight/30 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-grad-start/5 to-grad-end/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-grad-start/20 to-grad-end/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{feature.icon}</span>
              </div>

              {/* Title */}
              <h3 className="font-clash font-semibold text-xl lg:text-2xl text-white mb-3 group-hover:text-highlight transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-poppins text-white/60 text-sm leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Highlight Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 group-hover:border-highlight/30 transition-colors">
                <span className="font-poppins text-xs text-highlight">
                  {feature.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesGrid;
