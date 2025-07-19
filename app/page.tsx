"use client";
import Hero from "./hero/page";
import Experiences from "./experiences/page";
import Projects from "./projects/page";
import More from "./more/page";

export default function Home() {
  return (
    <div className="w-screen h-screen max-w-screen max-h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory">
      <section id="hero" className="snap-start w-screen h-screen max-w-screen max-h-screen overflow-x-hidden">
        <Hero />
      </section>
      <section id="experiences" className="snap-start w-screen h-screen max-w-screen max-h-screen overflow-x-hidden">
        <Experiences />
      </section>
      <section id="projects" className="snap-start w-screen h-screen max-w-screen max-h-screen overflow-x-hidden">
        <Projects />
      </section>
      <section id="more" className="snap-start w-screen h-screen max-w-screen max-h-screen overflow-x-hidden">
        <More />
      </section>
    </div>
  );
}
