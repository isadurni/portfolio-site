"use client";
import { useEffect } from "react";
import Hero from "./hero/page";
import About from "./experiences/page";
import Projects from "./projects/page";
import Stack from "./stack/page";
import Mode from "@/components/mode";
import TestPage from "./test/page";

export default function Home() {
  useEffect(() => {
    // Theme initialization
    const setTheme = (theme: string) => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // On load, set theme from localStorage or system preference
    try {
      const theme = localStorage.getItem("theme");
      if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    } catch (e) {
      // Fallback to system preference if localStorage is not available
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      {/* Dark/Light Mode Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <Mode />
      </div>
      <div className="w-full">
        <TestPage />
      </div>
      <section id="hero" className="w-full">
        <Hero />
      </section>
      <section id="experiences" className="w-full">
        <About />
      </section>
      <section id="projects" className="w-full">
        <Projects />
      </section>
      {/* <section id="stack" className="w-full">
        <Stack />
      </section> */}
    </div>
  );
}
