import React from "react";

interface ArrowProps {
  label: string;
}

const Arrow: React.FC<ArrowProps> = ({ label }) => {
  return (
    <div className="flex flex-col items-center mt-4">
      <a
        href="#hero"
        className="focus:outline-none cursor-pointer hover:opacity-80 transition-opacity"
        aria-label={`Scroll up to ${label}`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="animate-bounce rotate-180"
        >
          <polyline
            points="6 9 12 15 18 9"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <span className="text-xs text-gray-500 mt-1">{label}</span>
    </div>
  );
};

export default Arrow; 