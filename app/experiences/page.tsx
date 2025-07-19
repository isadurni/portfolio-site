import React, { useState } from "react";
import ScrollStack, { ScrollStackItem } from '@/components/scroll-stack';
import Image from 'next/image';
import xtillion from '@/public/xtillion.png';
import cegsoft from '@/public/cegsoft.png';
import ArrowDown from "@/components/arrow-down";
import ArrowUp from "@/components/arrow-up";
import { motion } from "motion/react";

// Card data for easier mapping
const cards = [
  {
    key: "xtillion",
    logo: xtillion,
    logoAlt: "Xtillion Logo",
    title: "Software Engineering Internship",
    date: "June - August 2025",
    bulletPoints: [
      "Built an end-to-end agentic AI evaluation framework to benchmark LLM performance across specific business use cases.",
      "Engineered a FastAPI backend in Python with RESTful endpoints, Pydantic validations, and SQLAlchemy CRUD operations.",
      "Developed a Next.js frontend using React and Typescript. Deployed the Dockerized UI and API to AWS for production use.",
      "Conducted research for a B2B client serving Fortune 500 companies, analyzing system architecture and integration needs.",
      "Built a Python ETL tool that converts ~10,000 lines of CSV and JSON parameters into a compliant text format for submission.",
      "Ensured accuracy with 20+ unit tests, validating output integrity against conditional rules based on 300+ pages of specification."
    ],
    logoWidth: 140, // Make Xtillion logo bigger
    logoHeight: 140,
  },
  {
    key: "cegsoft",
    logo: cegsoft,
    logoAlt: "Cegsoft Logo",
    title: "Software Developer Internship",
    date: "June - July 2024",
    bulletPoints: [
      "Worked in a cross-functional agile team to build an internal tool for managing Expert Tax user accounts and licenses.",
      "Developed UI/UX in the front-end using TypeScript and React, and built RESTful API endpoints with C# and .NET 8.",
      "Deployed a solution that increased the efficiency of 5 members of the support team, on average by 2+ hours daily."
    ],
    logoWidth: 120,
    logoHeight: 100,
  },
];

// Helper to force remount of bullet list for animation reset
const BulletList = ({ points, animateKey, isActive }: { points: string[], animateKey: string, isActive: boolean }) => {
  return (
    <ul className="mb-2 ml-5 list-disc">
      {points.map((point, pointIndex) => (
        <motion.li
          key={animateKey + '-' + pointIndex}
          initial={{ opacity: 0, y: -10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ delay: isActive ? 0.15 * (pointIndex + 1) : 0 }}
          className="flex items-center text-sm text-gray-700 dark:text-gray-200 mb-2"
        >
          <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3"></span>
          {point}
        </motion.li>
      ))}
    </ul>
  );
};

const Experiences = () => {
  // Track which card is open (hovered)
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // Used to force remount bullet list for animation reset
  const [bulletAnimKey, setBulletAnimKey] = useState<number>(0);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full relative">
      <div className="absolute top-15 left-0 w-full flex flex-col items-center z-20">
        <h1 className="text-5xl font-bold">Experience</h1>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full gap-8 mt-25">
        {cards.map((card, idx) => (
          <div
            key={card.key}
            className={`
              group
              bg-primary-foreground dark:bg-zinc-900
              rounded-2xl shadow-lg
              p-8 flex flex-col w-full max-w-[61vw]
              transition-all duration-300
              cursor-pointer
              ${openIndex === idx ? "scale-105 shadow-2xl z-10" : "scale-100 opacity-90"}
              hover:scale-105 hover:shadow-2xl hover:z-10
              `}
            onMouseEnter={() => {
              setOpenIndex(idx);
              setBulletAnimKey(prev => prev + 1); // force remount for animation reset
            }}
            onMouseLeave={() => {
              setOpenIndex(null);
              setBulletAnimKey(prev => prev + 1); // force remount for animation reset
            }}
            tabIndex={0}
            onFocus={() => {
              setOpenIndex(idx);
              setBulletAnimKey(prev => prev + 1);
            }}
            onBlur={() => {
              setOpenIndex(null);
              setBulletAnimKey(prev => prev + 1);
            }}
            aria-expanded={openIndex === idx}
            style={{
              maxHeight: openIndex === idx ? 700 : 180,
              overflow: "hidden",
              boxShadow: openIndex === idx
                ? "0 8px 32px 0 rgba(0,0,0,0.18)"
                : "0 2px 8px 0 rgba(0,0,0,0.10)",
            }}
          >
            <div className="flex flex-row items-start justify-between w-full mb-2">
              <div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <Image
                      src={card.logo}
                      alt={card.logoAlt}
                      width={card.logoWidth}
                      height={card.logoHeight}
                      className="object-contain mr-2"
                    />
                  </div>
                  <h3 className="text-md font-semibold text-foreground mt-2">{card.title}</h3>
                </div>
              </div>
              <div className="flex-shrink-0 ml-4 flex flex-col items-end">
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-0 whitespace-nowrap">
                  {card.date}
                </span>
              </div>
            </div>
            {/* Animate details in/out */}
            <div
              className={`
                transition-all duration-300
                ${openIndex === idx ? "opacity-100 max-h-[600px] mt-2" : "opacity-0 max-h-0 mt-0 pointer-events-none"}
                overflow-hidden
              `}
              aria-hidden={openIndex !== idx}
            >
              <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-200 text-sm">
                {/* Key on bulletAnimKey and idx to force remount and reset animation */}
                <BulletList
                  key={bulletAnimKey + '-' + idx}
                  points={card.bulletPoints}
                  animateKey={bulletAnimKey + '-' + idx}
                  isActive={openIndex === idx}
                />
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-4">
        <ArrowDown label="Projects" target="projects" />
      </div>
      <style jsx>{`
        /* For smooth max-height transition */
        div[aria-expanded] {
          transition: max-height 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s, transform 0.3s;
        }
      `}</style>
    </div>
  );
};

export default Experiences;