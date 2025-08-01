"use client";

import React from "react";
import UnicornScene from "unicornstudio-react";

export default function TestPage() {
  return (
    <div className="w-full relative" style={{ height: "100vh" }}>
      {/* UnicornScene Background */}
      <div className="absolute inset-0" style={{ width: "100%", height: "100%", overflow: "hidden" }}>
        <UnicornScene
          projectId="IDW7axLOeNpHN6m9wBij"
          width="100%"
          height="100%"
        />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center md:p-8">
        <div className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
          Ignacio Sadurní
        </div>
        <div className="hidden md:flex space-x-8 text-white font-medium">
          <a
            href="#about"
            className="hover:text-gray-200 transition-colors drop-shadow-lg transform transition-transform duration-200 hover:scale-120"
          >
            ABOUT ME
          </a>
          <a
            href="#experience"
            className="hover:text-gray-200 transition-colors drop-shadow-lg transform transition-transform duration-200 hover:scale-120"
          >
            EXPERIENCE
          </a>
          <a
            href="#projects"
            className="hover:text-gray-200 transition-colors drop-shadow-lg transform transition-transform duration-200 hover:scale-120"
          >
            PROJECTS
          </a>
          <a
            href="#contact"
            className="hover:text-gray-200 transition-colors drop-shadow-lg transform transition-transform duration-200 hover:scale-120"
          >
            CONTACT
          </a>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center min-h-[calc(100vh-120px)] px-6 md:px-16">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Main heading */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-8 drop-shadow-2xl">
                Software Dreams,
                <br />
                <span className="text-gray-200">Engineered</span>
              </h1>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="px-8 py-4 bg-white/90 text-gray-900 rounded-lg font-semibold hover:bg-white transition-colors backdrop-blur-sm">
                  Download Resume
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors backdrop-blur-sm">
                  Contact Me
                </button>
              </div>
            </div>

            {/* Right side - Description */}
            <div className="lg:pl-8">
              <p className="text-lg md:text-xl text-white leading-relaxed drop-shadow-lg">
                From concept to deployment, I craft innovative software solutions that bring ideas to life. 
                As a Computer Science student at Notre Dame, I combine academic excellence with real-world 
                experience to deliver impactful technology.
              </p>
              
              {/* Stats or highlights */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30">
                  <div className="text-2xl font-bold text-white drop-shadow-lg">3+</div>
                  <div className="text-sm text-gray-200 drop-shadow-lg">Years Coding</div>
                </div>
                <div className="text-center p-4 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30">
                  <div className="text-2xl font-bold text-white drop-shadow-lg">10+</div>
                  <div className="text-sm text-gray-200 drop-shadow-lg">Projects Built</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-12 h-20 border-2 border-white rounded-full p-2 backdrop-blur-sm bg-white/10">
          <div className="w-2 h-3 bg-white rounded-full mx-auto animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}
