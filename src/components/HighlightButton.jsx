import React from "react";

export default function HighLightButton({
  children = "EXPLORE",
  onClick,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative flex items-center justify-center 
        px-8 py-3
        min-w-[180px] h-[50px]
        text-white font-clash font-semibold text-sm sm:text-base uppercase tracking-[0.2em]
        transition-all duration-300 
        hover:brightness-110 hover:shadow-lg hover:shadow-highlight/30 hover:scale-105
        active:scale-95
        overflow-hidden
        group
        ${className}
      `}
      style={{
        background: "linear-gradient(to bottom, #DD24E1, #5117F4)",
        borderRadius: "12px 0 0 12px",
        clipPath: "polygon(0 0, 100% 0, calc(100% - 20px) 100%, 0 100%)",
      }}
    >
      {/* Shine effect on hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

      {/* Button Text */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
