import React from "react";
import Image from 'next/image';
import cegsoft from '@/public/cegsoft.png';

const cegBullets = [
  "Worked in a cross-functional agile team to build an internal tool for managing Expert Tax user accounts and licenses.",
  "Developed UI/UX in the front-end using TypeScript and React, and built RESTful API endpoints with C# and .NET 8.",
  "Deployed a solution that increased the efficiency of 5 members of the support team, on average by 2+ hours daily.",
];

const CegsoftExperience = ({ onClose }: { onClose?: () => void }) => {
  const cardBaseClass =
    "bg-gray-100/50 dark:bg-black/60 rounded-xl shadow-lg p-6 space-y-4 overflow-auto min-w-0 flex flex-col justify-between items-start h-full relative";

  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full"
      style={{ minHeight: 400, height: "100%" }}
    >
      <div
        className={cardBaseClass}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="flex flex-row items-start justify-between w-full mb-2">
          <div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <Image
                  src={cegsoft}
                  alt="Cegsoft Logo"
                  width={130}
                  height={130}
                  className="object-contain mr-2"
                />
              </div>
              <h3 className="text-md font-semibold text-foreground mt-2">
                Software Developer Intern
              </h3>
              <span className="text-sm text-muted-foreground mt-0 whitespace-nowrap">
                June 2024 - July 2024
              </span>
              <span className="text-sm text-muted-foreground mt-0 whitespace-nowrap">
                Guaynabo, PR
              </span>
              <ul className="list-disc list-inside text-sm text-muted-foreground mt-5 pl-2 space-y-2">
                {cegBullets.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CegsoftExperience;