import React from "react";

interface ArrowProps {
  label: string;
  target?: string;
}

const Arrow: React.FC<ArrowProps> = ({ label, target = "experiences" }) => {
  return (
    <div className="flex flex-col items-center mt-4">
      <span className="text-xs text-gray-500 mb-1">{label}</span>
      <div className="cursor-default">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="animate-bounce"
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
      </div>
    </div>
  );
};

export default Arrow;
