"use client";

import React, { useState } from "react";
import { HighlightText } from "@/animations/highlight";

const skillCategories = [
  {
    name: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 90, icon: "⚛️" },
      { name: "TypeScript", level: 85, icon: "📘" },
      { name: "JavaScript", level: 95, icon: "💛" },
      { name: "HTML/CSS", level: 90, icon: "🎯" },
      { name: "Tailwind CSS", level: 85, icon: "💨" },
      { name: "Next.js", level: 80, icon: "⚡" }
    ]
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 85, icon: "🟢" },
      { name: "Python", level: 80, icon: "🐍" },
      { name: "FastAPI", level: 75, icon: "🚀" },
      { name: "Express.js", level: 80, icon: "📦" },
      { name: "MongoDB", level: 75, icon: "🍃" },
      { name: "PostgreSQL", level: 70, icon: "🐘" }
    ]
  },
  {
    name: "Tools & Technologies",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 90, icon: "🌿" },
      { name: "AWS", level: 70, icon: "☁️" },
      { name: "Docker", level: 65, icon: "🐳" },
      { name: "Firebase", level: 75, icon: "🔥" },
      { name: "Figma", level: 80, icon: "🎨" },
      { name: "VS Code", level: 95, icon: "💙" }
    ]
  },
  {
    name: "AI & Machine Learning",
    icon: "🤖",
    skills: [
      { name: "OpenAI API", level: 80, icon: "🧠" },
      { name: "LangChain", level: 75, icon: "🔗" },
      { name: "TensorFlow", level: 60, icon: "🔥" },
      { name: "Pandas", level: 70, icon: "🐼" },
      { name: "NumPy", level: 75, icon: "🔢" },
      { name: "Scikit-learn", level: 65, icon: "📊" }
    ]
  }
];

const Stack = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="relative w-full bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
              Technical <HighlightText text="Skills" />
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels across different technologies
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeCategory === index
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg scale-105'
                    : 'bg-white/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-white/70 dark:hover:bg-slate-800/70 backdrop-blur-sm border border-white/20 dark:border-slate-700/50'
                }`}
              >
                <span className="text-2xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={index}
                className="group p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-xl flex items-center justify-center text-xl">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{skill.name}</h3>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      {skill.level}% Proficiency
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mt-1">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-white/20 dark:border-slate-700/50">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">20+</h3>
              <p className="text-slate-600 dark:text-slate-400">Technologies Mastered</p>
            </div>

            <div className="text-center p-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-white/20 dark:border-slate-700/50">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">3+</h3>
              <p className="text-slate-600 dark:text-slate-400">Years of Experience</p>
            </div>

            <div className="text-center p-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-white/20 dark:border-slate-700/50">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">10+</h3>
              <p className="text-slate-600 dark:text-slate-400">Projects Completed</p>
            </div>
          </div>

          {/* Learning & Growth */}
          <div className="text-center">
            <div className="inline-block p-8 bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-950/30 dark:to-emerald-950/30 rounded-3xl border border-blue-200/50 dark:border-blue-800/50">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Continuous Learning
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl">
                I'm passionate about staying current with emerging technologies and continuously expanding my skill set. 
                Currently exploring advanced AI/ML techniques and cloud architecture patterns.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-xl text-sm font-medium">
                  🔥 Currently Learning: Advanced React Patterns
                </span>
                <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-xl text-sm font-medium">
                  🎯 Next: Kubernetes & DevOps
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;