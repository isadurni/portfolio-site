"use client";

import React, { useState, useRef, useEffect } from "react";
import TechStack from "@/components/tech-stack";
import { TypingText } from "@/animations/typing";
import { HighlightText } from "@/animations/highlight";

const Stack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [key, setKey] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setKey(prev => prev + 1);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px"
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
    <div ref={sectionRef} className="flex flex-col items-center justify-center w-full min-h-screen md:h-screen relative">
      {/* Title */}
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-center">
          Technical <HighlightText text="Skills" />
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium text-center">
          <span className="md:hidden">Favorite Tools and Technologies</span>
          {isVisible && (
            <div className="hidden md:inline">
              <TypingText
                key={key}
                text={"Favorite Tools and Technologies"}
                duration={100}
                cursor
                className="inline"
                cursorClassName="bg-gray-600 dark:bg-gray-300"
              />
            </div>
          )}
        </h2>
      </div>
      
      {/* Tech Stack Component */}
      <div className="w-full flex justify-center mt-16">
        <TechStack />
      </div>
    </div>
  );
};

export default Stack;
