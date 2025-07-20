"use client";

import React, { useState, useRef, useEffect } from "react";
import Arrow from "@/components/arrow-down";
import { TypingText } from "@/animations/typing";
import Threads from "@/components/threads";
import LinkedIn from "@/components/linkedin";
import Github from "@/components/github";

const Hero = () => {
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
    <div ref={sectionRef} className="h-screen w-full flex flex-col">
      {/* Top: Name and subtitle */}
      <div className="flex flex-col items-center justify-center mt-25 mb-8">
        <h1 className="text-5xl font-bold mb-2">
          Ignacio Sadurní
        </h1>
        <h2 className="text-3xl text-gray-600 dark:text-gray-300 font-medium">
          {isVisible && (
            <TypingText
              key={key} // Force re-render with new key
              text={[
                "Software Engineer",
              ]}
              duration={100}
              cursor
              className="inline"
              cursorClassName="bg-gray-600 dark:bg-gray-300"
            />
          )}
        </h2>
      </div>
      <div className="flex w-full h-full flex-col items-start">
        <div className="w-full h-full">
          <Threads
            amplitude={2.5}
            distance={0}
            enableMouseInteraction={false}
          />
        </div>
      </div>
      {/* Bottom: University and Location */}
      <div className="flex flex-col items-center mb-5 mt-auto">
        <div className="flex flex-row items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <LinkedIn />
            <Github />
          </div>
          {/* Vertical Divider */}
          <div className="h-25 w-px bg-gray-300 dark:bg-gray-600 mx-2" />
          {/* Info Rows */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-gray-500 dark:text-gray-400 mb-1 mt-8">
              San Juan, Puerto Rico
            </h3>
            <h3 className="text-l text-gray-500 dark:text-gray-400 mb-1">
              <a href="mailto:ignaciosadurni@gmail.com" className="hover:text-blue-400 transition-colors">ignaciosadurni@gmail.com</a>
            </h3>
            <h3 className="text-l text-gray-500 dark:text-gray-400 mb-10">
              +1 (787) 243-4859
            </h3>
          </div>
        </div>
        <Arrow label="Bio" />
      </div>
    </div>
  );
};

export default Hero;