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
      { Icon: FaHtml5, color: "#E34F26" },
      { Icon: FaCss3Alt, color: "#1572B6" },
      { Icon: SiTypescript, color: "#3178C6" },
      { Icon: FaJs, color: "#F7DF1E" },
      { Icon: FaReact, color: "#61DAFB" }
    ]
  },
  {
    label: "Backend",
    icons: [
      { Icon: FaPython, color: "#3776AB" },
      { Icon: FaNodeJs, color: "#339933" },
      { Icon: SiFastapi, color: "#009688" },
      { Icon: SiDotnet, color: "#512BD4" }
    ]
  },
  {
    label: "Database",
    icons: [
      { Icon: SiMongodb, color: "#47A248" },
      { Icon: SiPostgresql, color: "#336791" }
    ]
  },
  {
    label: "Cloud",
    icons: [
      { Icon: FaAws, color: "#FF9900" },
      { Icon: FaCloud, color: "#0078D4" }
    ]
  },
  {
    label: "Extras",
    icons: [
      { Icon: FaGithub, color: "#181717" },
      { Icon: FaDocker, color: "#2496ED" }
    ]
  }
];

const TechStack = () => {
  const [hovered, setHovered] = useState<number | null>(null);

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
              <span>{layer.label}</span>
              {hovered === idx && (
                <div className="skills">
                  <div className="icons-grid">
                    {layer.icons.map((iconData, iconIdx) => (
                      <div key={iconIdx} className="icon-wrapper">
                        <iconData.Icon 
                          size={32} 
                          color={iconData.color}
                          className="tech-icon"
                        />
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
    width: 600px;
    height: 70vh;
    min-height: 500px;
    max-height: 800px;
    border-radius: 12px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 1.5em;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .layer {
    height: 100%;
    flex: 1;
    overflow: hidden;
    cursor: pointer;
    border-radius: 8px;
    transition: all .5s ease;
    background: #ffffff;
    border: 2px solid #e5e7eb;
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
    margin-top: 10px;
  }

  .layer:hover {
    flex: 3;
    transform: scale(1.02);
    box-shadow: 0 15px 40px rgba(107, 114, 128, 0.15);
    border-color: #9ca3af;
  }

  .layer span {
    font-size: 1.3em;
    font-weight: bold;
    text-transform: uppercase;
    color: #6b7280;
    letter-spacing: .1em;
    transition: all .5s ease;
    margin-bottom: 0.5em;
  }

  .layer:hover span {
    font-size: 1.6em;
    margin-bottom: 1em;
    color: #374151;
  }

  .skills {
    opacity: 1;
    transform: translateY(0);
    transition: all .5s ease;
    color: #6b7280;
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
    gap: 1rem;
    margin-top: 1rem;
  }

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  .icon-wrapper:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .tech-icon {
    transition: all 0.3s ease;
  }

  .icon-wrapper:hover .tech-icon {
    transform: scale(1.1);
  }

  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    .stack {
      background: #f9fafb;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    
    .layer {
      background: #f9fafb;
      border-color: #e5e7eb;
    }

    .layer:hover {
      border-color: #9ca3af;
      box-shadow: 0 15px 40px rgba(107, 114, 128, 0.15);
    }

    .layer span {
      color: #6b7280;
    }

    .layer:hover span {
      color: #374151;
    }

    .skills {
      color: #6b7280;
    }
  }
`;

export default TechStack; 