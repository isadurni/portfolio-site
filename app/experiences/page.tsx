"use client";

import React, { useState } from "react";
import { HighlightText } from "@/animations/highlight";
import XtillionExperience from "@/components/xtillion";
import CegsoftExperience from "@/components/ceg";

const education = [
  {
    school: "University of Notre Dame",
    degree: "B.S. in Computer Science",
    years: "2022 - 2026",
    details: [
      "Minor in Engineering Corporate Practice",
      "London Program, Spring 2025",
      "Dean's List, GPA: 3.8/4.0"
    ],
  },
  {
    school: "The Baldwin School of Puerto Rico",
    degree: "International Baccalaureate (IB) Diploma",
    years: "2020 - 2022",
    details: [
      "IB Score: 42/45",
      "Valedictorian"
    ],
  },
];

const experiences = [
  {
    company: "Xtillion",
    role: "Software Engineering Intern",
    period: "Summer 2024",
    description: "Built full-stack web applications using React and Node.js, collaborated with senior developers on production systems.",
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
    type: "internship"
  },
  {
    company: "CegSoft",
    role: "Frontend Developer",
    period: "2023 - Present",
    description: "Developed responsive web interfaces and improved user experience across multiple client projects.",
    technologies: ["React", "JavaScript", "CSS", "HTML"],
    type: "contract"
  }
];

const About = () => {
  const [xtillionOpen, setXtillionOpen] = useState(false);
  const [cegsoftOpen, setCegsoftOpen] = useState(false);

  return (
    <div className="relative w-full bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
              My <HighlightText text="Journey" />
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Building expertise through education and hands-on experience in software development
            </p>
          </div>

          {/* Experience & Education Grid */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Experience Timeline */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                Experience
              </h2>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    {/* Timeline line */}
                    {index !== experiences.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-16 bg-slate-200 dark:bg-slate-700"></div>
                    )}
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center">
                        <div className={`w-4 h-4 rounded-full ${exp.type === 'internship' ? 'bg-emerald-500' : 'bg-blue-500'}`}></div>
                      </div>
                      
                      <div 
                        className="flex-1 p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all duration-300 cursor-pointer"
                        onClick={() => {
                          if (exp.company === "Xtillion") setXtillionOpen(true);
                          if (exp.company === "CegSoft") setCegsoftOpen(true);
                        }}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.company}</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium">{exp.role}</p>
                          </div>
                          <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                            {exp.period}
                          </span>
                        </div>
                        
                        <p className="text-slate-600 dark:text-slate-400 mb-4">{exp.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg">
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="mt-4 text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          Click to view details
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Timeline */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                Education
              </h2>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    {/* Timeline line */}
                    {index !== education.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-16 bg-slate-200 dark:bg-slate-700"></div>
                    )}
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                      </div>
                      
                      <div className="flex-1 p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all duration-300">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.school}</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium">{edu.degree}</p>
                          </div>
                          <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                            {edu.years}
                          </span>
                        </div>
                        
                        {edu.details.length > 0 && (
                          <ul className="space-y-2">
                            {edu.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Preview */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 rounded-full">
              <span className="text-slate-600 dark:text-slate-400">Interested in my technical skills?</span>
              <a href="#stack" className="text-slate-900 dark:text-white font-semibold hover:underline">
                View Skills →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Experience Details */}
      {(xtillionOpen || cegsoftOpen) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => {
              setXtillionOpen(false);
              setCegsoftOpen(false);
            }}
          />
          <div className="relative z-10 w-full max-w-4xl max-h-[80vh] overflow-y-auto">
            {xtillionOpen && (
              <XtillionExperience 
                onClose={() => setXtillionOpen(false)} 
                onNext={() => {
                  setXtillionOpen(false);
                  setCegsoftOpen(true);
                }}
              />
            )}
            {cegsoftOpen && (
              <CegsoftExperience 
                onClose={() => setCegsoftOpen(false)} 
                onPrev={() => {
                  setCegsoftOpen(false);
                  setXtillionOpen(true);
                }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default About;