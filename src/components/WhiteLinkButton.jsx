import React from "react";

export default function WhiteLinkButton({
  children,
  href = "#",
  onClick,
  className = "",
  icon = "none",
}) {
  const baseClasses = `
    group relative inline-flex items-center gap-2
    font-poppins font-medium text-base md:text-lg
    text-white border-b-2 border-white/30
    hover:border-white/80
    pb-1.5 transition-all duration-300
    hover:gap-3 hover:text-highlight
    ${className}
  `;

  const content = (
    <>
      <span className="transition-all duration-300">{children}</span>
      {icon === "arrow" && (
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
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
