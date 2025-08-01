"use client";

import React, { useState, useRef, useEffect } from "react";
import Experiences from "@/components/experiences";
import ArrowDown from "@/components/arrow-down";
import XtillionExperience from "@/components/xtillion";
import CegsoftExperience from "@/components/ceg";
import { TypingText } from "@/animations/typing";
import { HighlightText } from "@/animations/highlight";

const education = [
  {
    school: "University of Notre Dame",
    degree: "B.S. in Computer Science",
    years: "2026",
    details: [
      "Minor in Engineering Corporate Practice",
      "London Program, Spring 2025",
    ],
  },
  {
    school: "The Baldwin School of Puerto Rico",
    degree: "International Baccalaureate (IB) Diploma",
    years: "2022",
    details: [],
  },
];



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
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-center">
          Professional <HighlightText text="Journey" />
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium text-center">
          <span className="md:hidden">Education & Work Experience</span>
          {isVisible && (
            <div className="hidden md:inline">
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
            </div>
          )}
        </h2>
      </div>
      
      {/* Main content */}
      <div className="flex flex-col items-center justify-center flex-1">
        <div
          className="w-full max-w-4xl"
          style={{
            minHeight: 400,
            height: "auto",
            maxHeight: "none",
            overflow: "visible",
          }}
        >
          {/* When experience is open, show backdrop and modal */}
          {xtillionOpen || cegsoftOpen ? (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              {/* Backdrop - click outside to close */}
              <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => {
                  if (xtillionOpen) setXtillionOpen(false);
                  if (cegsoftOpen) setCegsoftOpen(false);
                }}
              />
              {/* Modal content */}
              <div className="relative z-10 w-full max-w-4xl h-full max-h-[80vh] p-4 flex items-center justify-center">
                {xtillionOpen ? (
                  <XtillionExperience 
                    onClose={() => setXtillionOpen(false)} 
                    onNext={() => {
                      setXtillionOpen(false);
                      setCegsoftOpen(true);
                    }}
                  />
                ) : (
                  <CegsoftExperience 
                    onClose={() => setCegsoftOpen(false)} 
                    onPrev={() => {
                      setCegsoftOpen(false);
                      setXtillionOpen(true);
                    }}
                  />
                )}
              </div>
            </div>
          ) : (
            /* Mobile: Stacked layout, Desktop: Side-by-side layout */
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full h-full">
              {/* About Me & Education Section */}
              <div className="w-full lg:flex-1 lg:flex lg:flex-col lg:justify-center">
                <section className="w-full p-1 mb-6">
                  <h1 className="text-base md:text-lg lg:text-2xl font-semibold">About Me</h1>
                  <p className="text-sm lg:text-base text-muted-foreground">
                    Hi I'm <span className="font-semibold">Ignacio!</span>
                  </p>
                  <ul className="list-disc list-inside text-sm lg:text-md text-muted-foreground mt-0.5">
                    <li>
                      Computer Science and Software Engineering
                    </li>
                    <li>
                      Senior at the University of Notre Dame (Go Irish!)
                    </li>
                    <li>
                      San Juan, Puerto Rico → South Bend, Indiana
                    </li>
                  </ul>
                </section>

                <section className="w-full">
                  <h2 className="text-base md:text-lg lg:text-2xl font-semibold">Education</h2>
                  <ul className="space-y-2">
                    {education.map((edu, idx) => (
                      <li key={idx} className="flex items-start lg:items-center mt-3">
                        <div className="flex-shrink-0 w-16 lg:w-20 text-xs lg:text-sm text-muted-foreground text-center mt-1 lg:mt-0">
                          {edu.years}
                        </div>
                        <div className="flex-1 border-l-4 border-primary pl-3">
                          <div className="font-bold text-sm lg:text-base">{edu.school}</div>
                          <div className="italic text-sm lg:text-md">{edu.degree}</div>
                          <ul className="list-disc list-inside text-sm lg:text-md text-muted-foreground mt-0.5">
                            {edu.details.map((d, i) => (
                              <li key={i}>{d}</li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
              
              {/* Experiences Card */}
              <div className="w-full lg:flex-1 lg:flex lg:justify-center">
                <div className="w-full max-w-sm lg:max-w-none" style={{ maxWidth: 380 }}>
                  <Experiences 
                    onXtillionClick={() => setXtillionOpen(true)}
                    onCegsoftClick={() => setCegsoftOpen(true)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Arrow pointing to projects - positioned at bottom of page */}
      <div className="w-full flex justify-center hidden md:flex">
        <ArrowDown label="Projects" />
      </div>
    </div>
  );
};

export default About;