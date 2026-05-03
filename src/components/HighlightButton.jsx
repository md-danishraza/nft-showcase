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
        w-[180px] h-[50px] 
        rounded-l-[12px] 
        bg-gradient-to-r from-grad-start to-grad-end 
        text-white font-clash font-semibold text-base uppercase tracking-[0.2em]
        transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-highlight/25 active:scale-95
        ${className}
      `}
      style={{
        clipPath: "polygon(0 0, 100% 0, calc(100% - 24px) 100%, 0 100%)",
      }}
    >
      {children}
    </button>
  );
}
