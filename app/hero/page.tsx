import React from "react";
import Socials from "@/components/socials";
import Arrow from "@/components/arrow-down";
import { TypingText } from "@/animations/typing";
import Threads from "@/components/threads";

const Hero = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      {/* Top: Name and subtitle */}
      <div className="flex flex-col items-center justify-center mt-30 mb-8">
        <h1 className="text-5xl font-bold mb-2">Ignacio Sadurní</h1>
        <h2 className="text-3xl text-gray-600 dark:text-gray-300 font-medium mb-1">
          <TypingText
            text={[
              "Software Engineer",
              "Full Stack Developer",
              "Ex-Xtillion",
            ]}
            duration={100}
            cursor
            loop
            holdDelay={1200}
            className="inline"
            cursorClassName="bg-gray-600 dark:bg-gray-300"
          />
        </h2>
      </div>
      <div className="flex w-full h-full flex-col items-start">
        <div className="w-full h-full">
          <Threads
            amplitude={3}
            distance={0}
            enableMouseInteraction={false}
          />
        </div>
      </div>
      {/* Bottom: University and Location */}
      <div className="flex flex-col items-center mb-4 mt-auto">
        <Socials />
        <h3 className="text-xl text-gray-500 dark:text-gray-400 mt-4 mb-1">
          CS @ <a href="https://www.nd.edu/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">The University of Notre Dame</a>
        </h3>
        <h3 className="text-xl text-gray-500 dark:text-gray-400 mb-20">
          San Juan, Puerto Rico
        </h3>
        <Arrow label="Experiences" />
      </div>
    </div>
  );
};

export default Hero;