import React, { useState, useEffect } from "react";

function StatsSection() {
  const [stats, setStats] = useState({
    artists: "5.2",
    collections: "12.8",
    transactions: "1.2",
    countries: "85",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        artists: (5.2 + Math.random() * 0.3).toFixed(1),
        collections: (12.8 + Math.random() * 0.5).toFixed(1),
        transactions: (1.2 + Math.random() * 0.1).toFixed(1),
        countries: (85 + Math.random() * 2).toFixed(0),
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const statItems = [
    { label: "Artists", value: stats.artists, suffix: "K+" },
    { label: "Collections", value: stats.collections, suffix: "K+" },
    { label: "Transactions", value: stats.transactions, suffix: "M+" },
    { label: "Countries", value: stats.countries, suffix: "+" },
  ];

  return (
    <div className="relative py-16 md:py-20 bg-gradient-to-r from-grad-start/5 to-grad-end/5 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {statItems.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="font-clash font-semibold text-3xl sm:text-4xl md:text-5xl text-white mb-2">
                {stat.value}
                <span className="text-highlight">{stat.suffix}</span>
              </p>
              <p className="font-poppins text-sm text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
