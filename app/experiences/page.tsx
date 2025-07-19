import React from "react";
import ScrollStack, { ScrollStackItem } from '@/components/scroll-stack';
import Image from 'next/image';
import xtillion from '@/public/xtillion.png';
import cegsoft from '@/public/cegsoft.png';
import ArrowDown from "@/components/arrow-down";
import ArrowUp from "@/components/arrow-up";

const Experiences = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full relative">      
      <div className="flex flex-col items-center justify-center w-full h-full gap-8">
        {/* Card 1: Xtillion */}
        <div className="bg-primary-foreground dark:bg-zinc-900 rounded-2xl shadow-lg p-8 flex flex-col w-full max-w-[61vw]">
          <div className="flex flex-row items-start justify-between w-full mb-2">
            <div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <Image
                    src={xtillion}
                    alt="Xtillion Logo"
                    width={120}
                    height={120}
                    className="object-contain mr-2"
                  />
                </div>
                <h3 className="text-md font-semibold text-foreground mt-2 italic">Software Engineering Intern</h3>
              </div>
            </div>
            <div className="flex-shrink-0 ml-4 flex flex-col items-end">
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-0 whitespace-nowrap">
                June 2025 - August 2025
              </span>
            </div>
          </div>
          <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-200 text-sm">
            <p className="mb-1 font-semibold">Internal Project:</p>
            <ul className="mb-2 ml-5 list-disc">
              <li>Built an end-to-end agentic AI evaluation framework to benchmark LLM performance across specific business use cases.</li>
              <li>Engineered a FastAPI backend in Python with RESTful endpoints, Pydantic validations, and SQLAlchemy CRUD operations.</li>
              <li>Developed a Next.js frontend using React and Typescript. Deployed the Dockerized UI and API to AWS for production use.</li>
            </ul>
            <p className="mb-1 font-semibold">Client Project:</p>
            <ul className="ml-5 list-disc">
              <li>Conducted research for a B2B client serving Fortune 500 companies, analyzing system architecture and integration needs.</li>
              <li>Built a Python ETL tool that converts ~10,000 lines of CSV and JSON parameters into a compliant text format for submission.</li>
              <li>Ensured accuracy with 20+ unit tests, validating output integrity against conditional rules based on 300+ pages of specification.</li>
            </ul>
          </ul>
        </div>
        {/* Card 2: Cegsoft */}
        <div className="bg-primary-foreground dark:bg-zinc-900 rounded-2xl shadow-lg p-8 flex flex-col w-full max-w-[61vw]">
          <div className="flex flex-row items-start justify-between w-full mb-2">
            <div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <Image
                    src={cegsoft}
                    alt="Cegsoft Logo"
                    width={120}
                    height={120}
                    className="object-contain mr-2"
                  />
                </div>
                <h3 className="text-md font-semibold text-foreground mt-2 italic">Software Developer Intern</h3>
              </div>
            </div>
            <div className="flex-shrink-0 ml-4 flex flex-col items-end">
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-0 whitespace-nowrap">
                June 2024 - July 2024
              </span>
            </div>
          </div>
          <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-200 text-sm">
            <li>Worked in a cross-functional agile team to build an internal tool for managing Expert Tax user accounts and licenses.</li>
            <li>Developed UI/UX in the front-end using TypeScript and React, and built RESTful API endpoints with C# and .NET 8.</li>
            <li>Deployed a solution that increased the efficiency of 5 members of the support team, on average by 2+ hours daily.</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <ArrowDown label="Projects" target="projects" />
      </div>
    </div>
  );
};

export default Experiences;