import React from "react";
import { ProjectShowcase } from "@/components/project-showcase";
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
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen relative">
      <div className="w-full">
        <ProjectShowcase projects={projects} autoplay={false} />
      </div>
      <div className="flex justify-center absolute bottom-4 left-0 w-full">
        <ArrowDown label="More About Me" target="more" />
      </div>
    </div>
  );
};

export default Projects;