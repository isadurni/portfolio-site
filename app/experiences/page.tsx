"use client";

import React, { useState, useRef, useEffect } from "react";
import Experiences from "@/components/experiences";
import ArrowDown from "@/components/arrow-down";
import XtillionExperience from "@/components/xtillion";
import CegsoftExperience from "@/components/ceg";
import { TypingText } from "@/animations/typing";

const education = [
  {
    school: "University of Notre Dame",
    degree: "B.S. in Computer Science",
    years: "2022 – 2026",
    details: [
      "Minor in Engineering Corporate Practice",
      "London Program, Spring 2025",
    ],
  },
  {
    school: "The Baldwin School of Puerto Rico",
    degree: "International Baccalaureate (IB) Diploma",
    years: "2018 – 2022",
    details: [],
  },
];

const aboutCardBaseClass =
  "bg-gray-100/50 dark:bg-neutral-800/80 rounded-xl shadow-lg p-6 space-y-4 overflow-auto min-w-0 flex flex-col justify-between items-start relative transition-all duration-200 ease-in-out hover:bg-gray-200/90 dark:hover:bg-neutral-700/90 hover:scale-[1.035]";

const About = () => {
  const [xtillionOpen, setXtillionOpen] = useState(false);
  const [cegsoftOpen, setCegsoftOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [key, setKey] = useState(0); // Key to force re-render of TypingText
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setKey(prev => prev + 1); // Increment key to force re-render
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "0px 0px -100px 0px" // Trigger slightly before the section is fully in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col justify-between h-full px-6 py-12 bg-background text-foreground">
      {/* Title added to match Projects section */}
      <div className="flex flex-col items-center justify-center w-full mb-6">
        <h1 className="text-5xl font-bold mb-2 text-center">
          About Me
        </h1>
        <h2 className="text-3xl text-gray-600 dark:text-gray-300 font-medium text-center">
          {isVisible && (
            <TypingText
              key={key} // Force re-render with new key
              text={[
                "Education & Work Experience",
              ]}
              duration={100}
              cursor
              className="inline"
              cursorClassName="bg-gray-600 dark:bg-gray-300"
            />
          )}
        </h2>
      </div>
      
      {/* Main content */}
      <div className="flex flex-col items-center justify-center flex-1">
        <div
          className="w-full max-w-4xl"
          style={{
            minHeight: 400,
            height: "50vh",
            maxHeight: 600,
            overflow: "visible",
          }}
        >
          {/* When experience is open, take full width of the container */}
          {xtillionOpen || cegsoftOpen ? (
            <div className="w-full h-full">
              {xtillionOpen ? (
                <XtillionExperience onClose={() => setXtillionOpen(false)} />
              ) : (
                <CegsoftExperience onClose={() => setCegsoftOpen(false)} />
              )}
            </div>
          ) : (
            /* Normal two-column layout when no experience is open */
            <div className="flex flex-col lg:flex-row gap-8 w-full h-full">
              {/* Main Info Card */}
              <div
                className={`flex-1 ${aboutCardBaseClass}`}
                style={{
                  minHeight: 0,
                  maxHeight: "100%",
                }}
              >
                <section className="w-full p-2">
                  <h1 className="text-xl font-bold mb-1">Intro</h1>
                  <p className="text-base text-muted-foreground">
                    Hi I'm <span className="font-semibold">Ignacio!</span>
                  </p>
                  <ul className="list-disc list-inside text-md text-muted-foreground mt-0.5">
                    <li>
                      Computer Science and Software Engineering
                    </li>
                    <li>
                      Senior at the University of Notre Dame (Go Irish!)
                    </li>
                    <li>
                      San Juan, Puerto Rico → South Bend, Indiana
                    </li>

                    <li className="italic font-semibold">
                      Status: Searching for full-time opportunities...
                    </li>
                  </ul>
                </section>

                <section className="w-full">
                  <h2 className="text-xl font-semibold">Education</h2>
                  <ul className="space-y-2">
                    {education.map((edu, idx) => (
                      <li key={idx} className="border-l-4 border-primary pl-3 mt-3">
                        <div className="flex justify-between items-center">
                          <span className="font-bold">{edu.school}</span>
                          <span className="text-md text-muted-foreground">{edu.years}</span>
                        </div>
                        <div className="italic text-md">{edu.degree}</div>
                        <ul className="list-disc list-inside text-md text-muted-foreground mt-0.5">
                          {edu.details.map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
              
              {/* Experiences Card */}
              <div
                className="flex-1"
                style={{
                  minHeight: 0,
                  maxHeight: "100%",
                  overflow: "visible",
                  maxWidth: 380,
                }}
              >
                <Experiences 
                  onXtillionClick={() => setXtillionOpen(true)}
                  onCegsoftClick={() => setCegsoftOpen(true)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Arrow pointing to projects - positioned at bottom of page */}
      <div className="w-full flex justify-center">
        <ArrowDown label="Projects" />
      </div>
    </div>
  );
};

export default About;