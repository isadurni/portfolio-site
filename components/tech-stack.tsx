"use client";

import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaPython, 
  FaNodeJs, 
  FaDatabase, 
  FaAws, 
  FaGithub, 
  FaDocker,
  FaCloud
} from 'react-icons/fa';
import { SiTypescript, SiFastapi, SiMongodb, SiPostgresql, SiDotnet } from 'react-icons/si';

const layers = [
  {
    label: "Frontend",
    icons: [
      { Icon: FaHtml5, color: "#E34F26", name: "HTML5" },
      { Icon: FaCss3Alt, color: "#1572B6", name: "CSS3" },
      { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
      { Icon: FaJs, color: "#F7DF1E", name: "JavaScript" },
      { Icon: FaReact, color: "#61DAFB", name: "React" }
    ]
  },
  {
    label: "Backend",
    icons: [
      { Icon: FaPython, color: "#3776AB", name: "Python" },
      { Icon: FaNodeJs, color: "#339933", name: "Node.js" },
      { Icon: SiFastapi, color: "#009688", name: "FastAPI" },
      { Icon: SiDotnet, color: "#512BD4", name: ".NET" }
    ]
  },
  {
    label: "Database",
    icons: [
      { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
      { Icon: SiPostgresql, color: "#336791", name: "PostgreSQL" }
    ]
  },
  {
    label: "Cloud",
    icons: [
      { Icon: FaAws, color: "#FF9900", name: "AWS" },
      { Icon: FaCloud, color: "#0078D4", name: "Azure" }
    ]
  },
  {
    label: "Extras",
    icons: [
      { Icon: FaGithub, color: "#181717", darkColor: "#ffffff", name: "GitHub" },
      { Icon: FaDocker, color: "#2496ED", name: "Docker" }
    ]
  }
];

const TechStack = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for dark mode
  React.useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <StyledWrapper>
      <div className="stack">
        {layers.map((layer, idx) => (
          <div
            className="layer"
            key={layer.label}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="layer-content">
              <span className="layer-title">{layer.label}</span>
              {hovered === idx && (
                <div className="skills">
                  <div className="icons-grid">
                    {layer.icons.map((iconData, iconIdx) => (
                      <div key={iconIdx} className="icon-wrapper">
                        <div className="icon-container">
                          <iconData.Icon 
                            size={24} 
                            color={isDarkMode && iconData.darkColor ? iconData.darkColor : iconData.color}
                            className={`tech-icon ${iconData.Icon === SiTypescript ? 'typescript-icon' : ''}`}
                          />
                          <span className="skill-name">{iconData.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .stack {
    width: 90vw;
    max-width: 500px;
    height: 50vh;
    min-height: 350px;
    max-height: 500px;
    border-radius: 12px;
    background: var(--card);
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 0.8em;
    box-shadow: var(--shadow-lg);
  }

  @media (min-width: 768px) {
    .stack {
      width: 500px;
      height: 55vh;
      min-height: 400px;
      max-height: 600px;
      gap: 8px;
      padding: 1em;
    }
  }

  .layer {
    height: 100%;
    flex: 1;
    overflow: hidden;
    cursor: pointer;
    border-radius: 6px;
    transition: all .5s ease;
    background: var(--card);
    border: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    position: relative;
  }

  .layer-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    margin-top: 8px;
  }

  .layer:hover {
    flex: 3;
    transform: scale(1.02);
    box-shadow: var(--shadow-xl);
    border-color: var(--muted-foreground);
  }

  .layer span {
    font-weight: 600;
    font-family: var(--font-sans);
    color: var(--muted-foreground);
    letter-spacing: .1em;
    transition: all .5s ease;
    margin-bottom: 0.4em;
  }

  .layer-title {
    text-transform: uppercase;
  }

  .layer:hover span {
    margin-bottom: 0.8em;
    color: var(--foreground);
    font-weight: 600;
  }

  @media (min-width: 768px) {
    .layer span {
      font-weight: 600;
    }

    .layer:hover span {
      font-weight: 600;
    }
  }

  .skills {
    opacity: 1;
    transform: translateY(0);
    transition: all .5s ease;
    color: var(--muted-foreground);
    font-size: 1em;
    text-align: center;
    line-height: 1.5;
    max-width: 500px;
    /* The skills are only rendered on hover, so always visible when present */
  }

  .icons-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    margin-top: 0.8rem;
  }

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .icon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
  }

  .skill-name {
    font-size: 0.6rem;
    font-weight: 400;
    color: var(--muted-foreground);
    text-align: center;
    display: block;
    font-family: var(--font-sans);
    text-transform: none;
  }

  @media (min-width: 768px) {
    .icon-wrapper {
      /* Removed padding to eliminate card effect */
    }

    .skill-name {
      display: block;
    }

    .icons-grid {
      gap: 1.5rem;
    }
  }

  .icon-wrapper:hover {
    transform: translateY(-2px);
  }

  .tech-icon {
    transition: all 0.3s ease;
    width: 36px;
    height: 36px;
  }

  .icon-wrapper:hover .tech-icon {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    .tech-icon {
      width: 48px;
      height: 48px;
    }
  }

  .typescript-icon {
    width: 32px !important;
    height: 32px !important;
  }

  @media (min-width: 768px) {
    .typescript-icon {
      width: 42px !important;
      height: 42px !important;
    }
  }
`;

export default TechStack; 