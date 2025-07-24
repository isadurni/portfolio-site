"use client";

import { IconArrowLeft, IconArrowRight, IconExternalLink, IconBrandGithub } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useRef } from "react";

type Project = {
  name: string;
  description: string;
  techStack: string;
  image: string;
  video?: string; // Local video file
  youtubeId?: string; // YouTube video ID
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
};

// Helper function to extract YouTube ID from URL
const getYouTubeId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export const ProjectShowcase = ({
  projects,
  autoplay = false,
}: {
  projects: Project[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  // For tech stack marquee animation
  const techStackRef = useRef<HTMLDivElement>(null);
  const [marqueeKey, setMarqueeKey] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % projects.length);
    setMarqueeKey((k) => k + 1); // Reset marquee animation on project change
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
    setMarqueeKey((k) => k + 1); // Reset marquee animation on project change
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (autoplay) {
      // Make autoplay slower: was 5000ms, now 9000ms
      const interval = setInterval(handleNext, 9000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  // Fixed rotation values to prevent hydration mismatch
  const getRotationForIndex = (index: number) => {
    const rotations = [0, 0, 0, 0]; // No rotation to prevent hydration issues
    return rotations[index % rotations.length];
  };

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 font-sans antialiased md:px-8 lg:px-12">
        <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-2">
                {projects[0]?.name || "Loading..."}
              </h3>
            </div>
          </div>
          <div>
            <div className="relative h-80 w-full">
              {/* Placeholder while mounting */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Prepare the duplicated tech stack string for marquee effect
  const techStack = projects[active].techStack;
  const techStackMarquee = `${techStack}   •   ${techStack}   •   ${techStack}`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 font-sans antialiased md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        {/* TEXT COLUMN - now on the left */}
        <div className="flex flex-col justify-between">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-2 select-none">
              {projects[active].name}
            </h3>
            <div className="overflow-hidden whitespace-nowrap mb-4 mt-4 w-full">
              <motion.div
                key={marqueeKey}
                initial={{ x: "0%" }}
                animate={{ x: "-50%" }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  // Make marquee slower: was 10s, now 22s
                  duration: 22,
                  ease: "linear",
                }}
                className="inline-block"
                style={{ minWidth: "200%" }}
                ref={techStackRef}
              >
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium px-2">
                  {techStackMarquee}
                </span>
              </motion.div>
            </div>
            {/* Description paragraph without animation */}
            <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-neutral-300 mb-6 select-none">
              {projects[active].description}
            </p>
            
            {/* Features List */}
            <div className="mb-6">
              <h4 className="text-base md:text-lg font-semibold text-black dark:text-white mb-3">Key Features:</h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {projects[active].features.map((feature, index) => {
                  const isLeftColumn = index < Math.ceil(projects[active].features.length / 2);
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: isLeftColumn ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center text-xs md:text-sm text-gray-600 dark:text-neutral-300"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                      <span className="truncate">{feature}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Project Links */}
            <div className="flex gap-4">
              {projects[active].demoUrl && (
                <a
                  href={projects[active].demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <IconExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {projects[active].githubUrl && (
                <a
                  href={projects[active].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  <IconBrandGithub className="w-4 h-4" />
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        </div>
        {/* VIDEO/IMAGE COLUMN - now on the right */}
        <div className="flex flex-col items-center justify-center h-full">
          <div className="relative h-80 w-full flex items-center justify-center">            
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.div
                  key={project.image}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: getRotationForIndex(index),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : getRotationForIndex(index),
                    zIndex: isActive(index)
                      ? 40
                      : projects.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: getRotationForIndex(index),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom flex items-center justify-center"
                >
                  {project.youtubeId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&loop=1&playlist=${project.youtubeId}&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1`}
                      title={project.name}
                      className="h-full w-full rounded-3xl object-cover object-center shadow-2xl"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full rounded-3xl object-cover object-center shadow-2xl"
                      draggable={false}
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-center shadow-2xl"
                    />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {/* Enhanced Project Navigation with Arrows */}
          <div className="flex items-center justify-between mt-8 w-full max-w-2xl px-4 md:px-0">
            {/* Previous Project */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={handlePrev}
              className="text-xs md:text-sm text-gray-500 dark:text-gray-400 text-center flex-1 max-w-20 md:max-w-32 group cursor-pointer transition-all duration-200 hover:scale-110 select-none"
            >
              <div className="text-xs text-gray-400 dark:text-gray-500 mb-1 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">Previous</div>
              <div className="truncate group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">{projects[(active - 1 + projects.length) % projects.length].name}</div>
            </motion.div>
            
            {/* Navigation Controls */}
            <div className="flex items-center gap-1 md:gap-2">
              <button
                onClick={handlePrev}
                className="group/button flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-gray-100/50 dark:bg-neutral-800/50 hover:bg-gray-200/70 dark:hover:bg-neutral-700/70 transition-all duration-200 hover:scale-105"
                aria-label="Previous Project"
              >
                <IconArrowLeft className="h-3 w-3 md:h-4 md:w-4 text-gray-600 dark:text-gray-400 transition-transform duration-300 group-hover/button:rotate-12" />
              </button>
              
              {/* Current Project Indicator */}
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center px-2 md:px-4 py-1 md:py-2 group cursor-pointer transition-all duration-200 hover:scale-110 select-none"
              >
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">Current</div>
                <div className="text-xs md:text-sm font-semibold text-black dark:text-white text-center max-w-24 md:max-w-40 truncate group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors">
                  {projects[active].name}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                  {active + 1} of {projects.length}
                </div>
              </motion.div>
              
              <button
                onClick={handleNext}
                className="group/button flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-gray-100/50 dark:bg-neutral-800/50 hover:bg-gray-200/70 dark:hover:bg-neutral-700/70 transition-all duration-200 hover:scale-105"
                aria-label="Next Project"
              >
                <IconArrowRight className="h-3 w-3 md:h-4 md:w-4 text-gray-600 dark:text-gray-400 transition-transform duration-300 group-hover/button:-rotate-12" />
              </button>
            </div>
            
            {/* Next Project */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={handleNext}
              className="text-xs md:text-sm text-gray-500 dark:text-gray-400 text-center flex-1 max-w-20 md:max-w-32 group cursor-pointer transition-all duration-200 hover:scale-110 select-none"
            >
              <div className="text-xs text-gray-400 dark:text-gray-500 mb-1 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">Next</div>
              <div className="truncate group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">{projects[(active + 1) % projects.length].name}</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}; 