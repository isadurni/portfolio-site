import React from "react";
import Image from 'next/image';
import xtillion from '@/public/xtillion.png';
import cegsoft from '@/public/cegsoft.png';
import { PulsatingButton } from './pulsating-button';

// Accepts callbacks to notify parent when cards are clicked
const Experiences = ({ 
  onXtillionClick, 
  onCegsoftClick 
}: { 
  onXtillionClick?: () => void;
  onCegsoftClick?: () => void;
}) => {
  const CARD_HEIGHT = 190;
  // Updated cardBaseClass for hover effect: slightly grey bg and scale up
  const cardBaseClass =
    "bg-gray-100/50 dark:bg-neutral-800/80 rounded-xl shadow-lg p-6 space-y-4 overflow-auto min-w-0 flex flex-col justify-between items-start relative transition-all duration-200 ease-in-out hover:bg-gray-200/90 dark:hover:bg-neutral-700/90 hover:scale-[1.035] cursor-pointer";

  return (
    <div
      className="flex flex-col items-center justify-between h-full"
      style={{
        minHeight: 400,
        height: "100%",
        maxWidth: 380, // Make the entire component less wide
        width: "100%",
      }}
    >
      {/* Top Card (Xtillion) */}
      <div
        key="xtillion"
        className={cardBaseClass}
        style={{
          minHeight: CARD_HEIGHT,
          maxHeight: CARD_HEIGHT,
          height: CARD_HEIGHT,
          width: "100%",
        }}
        onClick={onXtillionClick}
      >
        {/* Date in top right */}
        <span className="absolute top-4 right-4 text-xs md:text-sm text-muted-foreground whitespace-nowrap">
          Summer 2025
        </span>
        <div className="flex flex-row items-center justify-between w-full mb-2 h-full">
          <div className="flex flex-col justify-center h-full">
            <div className="flex flex-col">
              <div className="flex items-center">
                <Image
                  src={xtillion}
                  alt="Xtillion Logo"
                  width={150}
                  height={100}
                  className="object-contain mr-2"
                />
              </div>
              <h3 className="text-sm md:text-md font-semibold text-foreground mt-2">
                Software Engineer
              </h3>
              <h3 className="text-xs md:text-sm text-muted-foreground italic">
                Internship
              </h3>
            </div>
          </div>
        </div>
        
        {/* View button */}
        <div className="absolute bottom-4 right-4">
          <PulsatingButton
            onClick={onXtillionClick}
            className="text-sm"
            variant="green"
            duration="2s"
          >
            View
          </PulsatingButton>
        </div>
      </div>

      {/* Spacer to push cards apart */}
      <div className="flex-1 min-h-8" />

      {/* Bottom Card (Cegsoft) */}
      <div
        key="cegsoft"
        className={cardBaseClass}
        style={{
          minHeight: CARD_HEIGHT,
          maxHeight: CARD_HEIGHT,
          height: CARD_HEIGHT,
          width: "100%",
        }}
        onClick={onCegsoftClick}
      >
        {/* Date in top right */}
        <span className="absolute top-4 right-4 text-xs md:text-sm text-muted-foreground whitespace-nowrap">
          Summer 2024
        </span>
        <div className="flex flex-row items-center justify-between w-full mb-2 h-full">
          <div className="flex flex-col justify-center h-full">
            <div className="flex flex-col">
              <div className="flex items-center">
                <Image
                  src={cegsoft}
                  alt="Cegsoft Logo"
                  width={150}
                  height={100}
                  className="object-contain mr-2"
                />
              </div>
              <h3 className="text-sm md:text-md font-semibold text-foreground mt-2">
                Software Developer
              </h3>
              <h3 className="text-xs md:text-sm text-muted-foreground italic">
                Internship
              </h3>
            </div>
          </div>
        </div>
        
        {/* View button */}
        <div className="absolute bottom-4 right-4">
          <PulsatingButton
            onClick={onCegsoftClick}
            className="text-sm"
            variant="green"
            duration="2s"
          >
            View
          </PulsatingButton>
        </div>
      </div>
    </div>
  );
};

export default Experiences;