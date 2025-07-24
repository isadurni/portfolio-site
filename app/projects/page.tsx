"use client";

import React, { useState, useRef, useEffect } from "react";
import { ProjectShowcase } from "@/components/project-showcase";
import { TypingText } from "@/animations/typing";
import { HighlightText } from "@/animations/highlight";
import ArrowDown from "@/components/arrow-down";

// Realistic project data with YouTube video support
const projects = [
  {
    name: "AI Chatbot Agent",
    description: "An intelligent AI-powered task management system that uses machine learning to prioritize and categorize tasks. Features natural language processing for task creation and intelligent scheduling algorithms.",
    techStack: "Python • TensorFlow • React • FastAPI • PostgreSQL • LangChain",
    image: "/xtillion.png", // Fallback image
    youtubeId: "aWEhcZcObjc", // AI Task Planner Assistant demo
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/yourusername/ai-task-planner",
    features: [
      "AI-powered task prioritization",
      "Natural language task creation",
      "Intelligent scheduling algorithms",
      "Team collaboration tools",
      "Progress tracking & analytics",
      "Mobile-responsive design"
    ]
  },
  {
    name: "Book Explorer",
    description: "A comprehensive book tracking application that helps users manage their reading journey. Features include book search, reading progress tracking, reviews, and personalized recommendations.",
    techStack: "React • TypeScript • Node.js • MongoDB • Express • Tailwind CSS",
    image: "/placeholder.svg", // Fallback image
    youtubeId: "6nU5VK8QCH0", // Book Tracker App demo
    demoUrl: "https://book-tracker-demo.example.com",
    githubUrl: "https://github.com/yourusername/book-tracker",
    features: [
      "Book search and discovery",
      "Reading progress tracking",
      "Personal book reviews and ratings",
      "Reading goals and challenges",
      "Book recommendations",
      "Responsive web design"
    ]
  },
  {
    name: "Photo Booth App",
    description: "A modern photo booth application with real-time filters, effects, and sharing capabilities. Features user authentication, photo editing tools, and social media integration.",
    techStack: "React Native • Node.js • AWS S3 • Firebase • Image Processing",
    image: "/ceg.png", // Fallback image
    youtubeId: "YvdplIZsOZU", // Photo Booth Pro App demo
    demoUrl: "https://photobooth-demo.example.com",
    githubUrl: "https://github.com/yourusername/photo-booth-pro",
    features: [
      "Real-time photo filters and effects",
      "User authentication system",
      "Photo editing and enhancement tools",
      "Social media sharing integration",
      "Cloud storage with AWS S3",
      "Cross-platform mobile app"
    ]
  },
];

const Projects = () => {
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
    <div ref={sectionRef} className="flex flex-col items-center justify-center w-full min-h-screen md:h-screen relative">
      {/* Title added to match Experiences section */}
      <div className="flex flex-col items-center justify-center w-full mt-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-center">
            Featured <HighlightText text="Projects" />
          </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium text-center">
          <span className="md:hidden">Browse Projects and Explore My Work</span>
          {isVisible && (
            <div className="hidden md:inline">
              <TypingText
                key={key} // Force re-render with new key
                text={[
                  "Browse Projects and Explore My Work",
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
      <div className="w-full">
        <ProjectShowcase projects={projects} autoplay={false} />
      </div>
      
      {/* Arrow pointing to technical skills */}
      <div className="w-full flex justify-center mt-8 hidden md:flex">
        <ArrowDown label="Technical Skills" />
      </div>
    </div>
  );
};

export default Projects;