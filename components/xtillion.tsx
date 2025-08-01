import React from "react";
import Image from 'next/image';
import xtillion from '@/public/xtillion.png';
import { IconArrowRight } from "@tabler/icons-react";

const xtillionBullets = [
  "Built an end-to-end agentic AI evaluation framework to benchmark LLM performance across specific business use cases.",
  "Engineered a FastAPI backend in Python with RESTful endpoints, Pydantic validations, and SQLAlchemy CRUD operations on a PostgreSQL DB.",
  "Developed a Next.js frontend using React and Typescript. Deployed the Dockerized UI and API to AWS for production use.",
  "Conducted research for a B2B client serving Fortune 500 companies, analyzing system architecture and integration needs.",
  "Built a Python ETL tool that converts ~10,000 lines of CSV and JSON parameters into a compliant text format for submission.",
  "Ensured accuracy with 20+ unit tests, validating output integrity against conditional rules based on 300+ pages of documents.",
];

const XtillionExperience = ({ onClose, onNext }: { onClose?: () => void; onNext?: () => void }) => {
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
                  src={xtillion}
                  alt="Xtillion Logo"
                  width={130}
                  height={130}
                  className="object-contain mr-2"
                />
              </div>
              <h3 className="text-sm md:text-md font-semibold text-foreground mt-2">
                Software Engineering Intern
              </h3>
              <span className="text-xs md:text-sm text-muted-foreground mt-0 whitespace-nowrap">
                June 2025 - August 2025
              </span>
              <p className="text-xs md:text-sm text-muted-foreground">
                San Juan, PR
              </p>
              {/* Bullets moved up after location */}
              <div className="space-y-4 mt-5">
                <div>
                  <h4 className="text-xs md:text-sm font-semibold text-foreground mb-2">Internal Project:</h4>
                  <ul className="list-disc list-inside text-xs md:text-sm text-muted-foreground pl-2 space-y-1">
                    {xtillionBullets.slice(0, 3).map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs md:text-sm font-semibold text-foreground mb-2">Client Project:</h4>
                  <ul className="list-disc list-inside text-xs md:text-sm text-muted-foreground pl-2 space-y-1">
                    {xtillionBullets.slice(3).map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Next button - bottom right */}
        {onNext && (
          <button
            onClick={onNext}
            className="absolute bottom-4 right-4 group/button flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 hover:bg-muted/70 transition-all duration-200 hover:scale-105"
            aria-label="Next to Cegsoft"
          >
            <span className="text-xs md:text-sm text-muted-foreground font-medium">View CEGsoft</span>
            <IconArrowRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover/button:-rotate-12" />
          </button>
        )}
        
      </div>
    </div>
  );
};

export default XtillionExperience;