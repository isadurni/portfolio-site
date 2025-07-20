import React from "react";
import Image from 'next/image';
import xtillion from '@/public/xtillion.png';

const xtillionBullets = [
  "Built an end-to-end agentic AI evaluation framework to benchmark LLM performance across specific business use cases.",
  "Engineered a FastAPI backend in Python with RESTful endpoints, Pydantic validations, and SQLAlchemy CRUD operations.",
  "Developed a Next.js frontend using React and Typescript. Deployed the Dockerized UI and API to AWS for production use.",
  "Conducted research for a B2B client serving Fortune 500 companies, analyzing system architecture and integration needs.",
  "Built a Python ETL tool that converts ~10,000 lines of CSV and JSON parameters into a compliant text format for submission.",
  "Ensured accuracy with 20+ unit tests, validating output integrity against conditional rules based on 300+ pages of specification.",
];

const XtillionExperience = ({ onClose }: { onClose?: () => void }) => {
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
                  src={xtillion}
                  alt="Xtillion Logo"
                  width={130}
                  height={130}
                  className="object-contain mr-2"
                />
              </div>
              <h3 className="text-md font-semibold text-foreground mt-2">
                Software Engineering Intern
              </h3>
              <p className="text-sm text-muted-foreground">
                San Juan, PR
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 ml-4 flex flex-col items-end">
            <span className="text-sm text-muted-foreground mt-0 whitespace-nowrap">
              June 2025 - August 2025
            </span>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Internal Project:</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground pl-2 space-y-1">
              {xtillionBullets.slice(0, 3).map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Client Project:</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground pl-2 space-y-1">
              {xtillionBullets.slice(3).map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XtillionExperience;