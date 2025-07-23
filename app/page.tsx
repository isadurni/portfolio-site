"use client";
import { useEffect } from "react";
import Hero from "./hero/page";
import About from "./experiences/page";
import Projects from "./projects/page";
import Stack from "./stack/page";
import Mode from "@/components/mode";

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
    <div className="w-screen h-screen max-w-screen max-h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory relative">
      <div className="fixed top-6 right-10 z-50 pointer-events-auto">
        {/* Mode toggle for dark/light mode */}
        <Mode />
      </div>
      <section id="hero" className="snap-start w-screen h-screen max-w-screen max-h-screen overflow-x-hidden">
        <Hero />
      </section>
      <section id="experiences" className="snap-start w-screen h-screen max-w-screen max-h-screen overflow-x-hidden">
        <About />
      </section>
      <section id="projects" className="snap-start w-screen h-screen max-w-screen max-h-screen overflow-x-hidden">
        <Projects />
      </section>
      <section id="stack" className="snap-start w-screen h-screen max-w-screen max-h-screen overflow-x-hidden">
        <Stack />
      </section>
    </div>
  );
}
