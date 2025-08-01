"use client";

import React, { useState } from "react";
import { HighlightText } from "@/animations/highlight";

const projects = [
  {
    id: 1,
    name: "AI Task Planner",
    description: "An intelligent AI assistant that helps manage calendars and schedule tasks through natural language conversations.",
    longDescription: "Task Bot is a comprehensive AI-powered productivity tool that integrates with Google Calendar and provides intelligent task management through natural language processing. Built with modern web technologies and AI APIs.",
    techStack: ["TypeScript", "React", "Python", "FastAPI", "LangChain", "OpenAI API"],
    image: "/xtillion.png",
    youtubeId: "aWEhcZcObjc",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/yourusername/ai-task-planner",
    features: [
      "AI-powered task prioritization",
      "Natural language task creation",
      "Intelligent scheduling algorithms",
      "Team collaboration tools",
      "Progress tracking & analytics",
      "Mobile-responsive design"
    ],
    category: "AI/ML",
    status: "Completed"
  },
  {
    id: 2,
    name: "Book Explorer",
    description: "A comprehensive book tracking application that helps users manage their reading journey with reviews and recommendations.",
    longDescription: "Book Explorer is a feature-rich reading companion that allows users to discover, track, and review books while providing personalized recommendations based on reading history and preferences.",
    techStack: ["React", "TypeScript", "Node.js", "MongoDB", "Express"],
    image: "/cegsoft.png",
    youtubeId: "6nU5VK8QCH0",
    demoUrl: "https://book-tracker-demo.example.com",
    githubUrl: "https://github.com/yourusername/book-tracker",
    features: [
      "Book search and discovery",
      "Reading progress tracking",
      "Personal reviews and ratings",
      "Reading goals and challenges",
      "AI-powered recommendations",
      "Social reading features"
    ],
    category: "Web App",
    status: "In Development"
  },
  {
    id: 3,
    name: "Photo Booth Pro",
    description: "A modern photo booth application with real-time filters, effects, and sharing capabilities for events.",
    longDescription: "Photo Booth Pro is a professional-grade photo booth application designed for events and parties, featuring real-time image processing, custom filters, and seamless social media integration.",
    techStack: ["React Native", "Node.js", "AWS S3", "Firebase"],
    image: "/placeholder.svg",
    youtubeId: "YvdplIZsOZU",
    demoUrl: "https://photobooth-demo.example.com",
    githubUrl: "https://github.com/yourusername/photo-booth-pro",
    features: [
      "Real-time photo filters",
      "Custom effect creation",
      "Social media integration",
      "Cloud storage with AWS",
      "Event management dashboard",
      "Analytics and insights"
    ],
    category: "Mobile",
    status: "Beta"
  }
];

type Project = {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  techStack: string[];
  image: string;
  youtubeId: string;
  demoUrl: string;
  githubUrl: string;
  features: string[];
  category: string;
  status: string;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "AI/ML", "Web App", "Mobile"];
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="relative w-full bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
              Featured <HighlightText text="Projects" />
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12">
              A showcase of my technical expertise and creative problem-solving through real-world applications
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    filter === category
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg'
                      : 'bg-white/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-white/70 dark:hover:bg-slate-800/70 backdrop-blur-sm border border-white/20 dark:border-slate-700/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group w-full max-w-sm bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-white/20 dark:border-slate-700/50 overflow-hidden hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                {/* Project Video */}
                <div className="relative h-64 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&showinfo=0&loop=1&playlist=${project.youtubeId}&fs=0&iv_load_policy=3&disablekb=1&cc_load_policy=0`}
                    title={project.name}
                    className="w-full h-full object-cover pointer-events-none"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={false}
                  />
                  {/* Invisible overlay to prevent any YouTube interactions */}
                  <div className="absolute inset-0 z-5 bg-transparent"></div>
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1 text-xs rounded-full font-medium shadow-md ${
                      project.status === 'Completed' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/90 dark:text-emerald-300' :
                      project.status === 'In Development' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/90 dark:text-blue-300' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/90 dark:text-yellow-300'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 cursor-pointer" onClick={() => setSelectedProject(project)}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-lg">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-lg">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* View Details */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Click for more details
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 rounded-full">
              <span className="text-slate-600 dark:text-slate-400">Interested in working together?</span>
              <a href="mailto:ignaciosadurni@gmail.com" className="text-slate-900 dark:text-white font-semibold hover:underline">
                Get In Touch →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />
          <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-700/50">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-6 border-b border-slate-200 dark:border-slate-700">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{selectedProject.name}</h2>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 text-sm rounded-full font-medium ${
                      selectedProject.status === 'Completed' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300' :
                      selectedProject.status === 'In Development' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                    }`}>
                      {selectedProject.status}
                    </span>
                    <span className="text-sm px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Project Video */}
              <div className="relative h-80 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-2xl overflow-hidden mb-6">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedProject.youtubeId}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&showinfo=0&loop=1&playlist=${selectedProject.youtubeId}&iv_load_policy=3&cc_load_policy=0`}
                  title={selectedProject.name}
                  className="w-full h-full rounded-2xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">About this project</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.techStack.map((tech, index) => (
                    <span key={index} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
                <a 
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl font-semibold hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;