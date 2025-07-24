import React from "react";
import Image from 'next/image';
import cegsoft from '@/public/cegsoft.png';
import { IconArrowRight } from "@tabler/icons-react";

const cegBullets = [
  "Worked in a cross-functional agile team to build an internal tool for managing Expert Tax user accounts and licenses.",
  "Developed UI/UX in the front-end using TypeScript and React, and built RESTful API endpoints with C# and .NET 8.",
  "Deployed a solution that increased the efficiency of 5 members of the support team, on average by 2+ hours daily.",
];

const CegsoftExperience = ({ onClose, onPrev }: { onClose?: () => void; onPrev?: () => void }) => {
  const cardBaseClass =
    "bg-card dark:bg-card rounded-xl shadow-lg p-6 space-y-4 overflow-auto min-w-0 flex flex-col justify-between items-start h-full relative";

  return (
    <div
      className="flex flex-col items-center justify-center w-full"
      style={{ minHeight: 400 }}
    >
      <div
        className={cardBaseClass}
        style={{
          width: "100%",
          minHeight: "fit-content",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-muted hover:bg-muted/80 rounded-full transition-colors"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="flex flex-row items-start justify-between w-full mb-2 pb-16">
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
              <h3 className="text-sm md:text-md font-semibold text-foreground mt-2">
                Software Developer Intern
              </h3>
              <span className="text-xs md:text-sm text-muted-foreground mt-0 whitespace-nowrap">
                June 2024 - July 2024
              </span>
              <span className="text-xs md:text-sm text-muted-foreground mt-0 whitespace-nowrap">
                Guaynabo, PR
              </span>
              <ul className="list-disc list-inside text-xs md:text-sm text-muted-foreground mt-5 pl-2 space-y-2">
                {cegBullets.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Next button - bottom right */}
        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute bottom-4 right-4 group/button flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 hover:bg-muted/70 transition-all duration-200 hover:scale-105"
            aria-label="Next to Xtillion"
          >
            <span className="text-xs md:text-sm text-muted-foreground font-medium">View Xtillion</span>
            <IconArrowRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover/button:-rotate-12" />
          </button>
        )}
        
      </div>
    </div>
  );
};

export default CegsoftExperience;