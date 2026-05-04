import React from "react";

export default function WhiteLinkButton({
  children,
  href = "#",
  onClick,
  className = "",
  icon = "none",
}) {
  // 1. Updated base classes for a solid white button
  const baseClasses = `
    group relative inline-flex items-center justify-center gap-2
    bg-white text-black font-clash font-semibold text-base md:text-lg
    px-6 py-3 rounded-md transition-all duration-300
    hover:bg-gray-100 hover:scale-105 active:scale-95
    ${className}
  `;

  const content = (
    <>
      <span className="transition-all duration-300">{children}</span>
      {icon === "arrow" && (
        <svg
          // 2. Updated hover animation to move diagonally (up and right)
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {/* 3. Updated SVG path to an up-right arrow (↗) */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M18 6H8M18 6v10"
          />
        </svg>
      )}
    </>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className={baseClasses}>
        {content}
      </button>
    );
  }

  return (
    <a href={href} className={baseClasses}>
      {content}
    </a>
  );
}
