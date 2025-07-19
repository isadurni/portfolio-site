import React, { useState, useRef } from 'react';
import styled from 'styled-components';

// SVG for copy icon
const CopyIcon = ({ copied }: { copied?: boolean }) => (
  copied ? (
    // Checkmark icon
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ marginLeft: 1 }} aria-label="Copied" >
      <path d="M7.629 15.314a1 1 0 0 1-1.414 0l-3.536-3.536a1 1 0 1 1 1.414-1.414l2.829 2.828 7.778-7.778a1 1 0 1 1 1.414 1.414l-8.485 8.486z" fill="#fff"/>
    </svg>
  ) : (
    // Copy icon
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ marginLeft: 1 }} aria-label="Copy to clipboard">
      <rect x="7" y="7" width="9" height="9" rx="2" stroke="#fff" strokeWidth="1.5" fill="none"/>
      <rect x="4" y="4" width="9" height="9" rx="2" stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.5"/>
    </svg>
  )
);

const TooltipWithCopy = ({
  value,
  children,
  color,
  onTooltipMouseEnter,
  onTooltipMouseLeave,
}: {
  value: string;
  children: React.ReactNode;
  color?: string;
  onTooltipMouseEnter?: () => void;
  onTooltipMouseLeave?: () => void;
}) => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 1200);
    } catch (err) {
      // fallback: do nothing
    }
  };

  return (
    <div
      className="tooltip"
      style={color ? { backgroundColor: color } : undefined}
      tabIndex={-1}
      onMouseEnter={onTooltipMouseEnter}
      onMouseLeave={onTooltipMouseLeave}
    >
      <span>{children}</span>
      <button
        className="copy-btn"
        aria-label={copied ? "Copied!" : "Copy to clipboard"}
        onClick={handleCopy}
        tabIndex={0}
        type="button"
        style={{ background: "none", border: "none", padding: 0, marginLeft: 4, cursor: "pointer", display: "inline-flex", alignItems: "center" }}
      >
        <CopyIcon copied={copied} />
      </button>
    </div>
  );
};

const Tooltip = () => {
  // Track which tooltip is open by index
  const [openTooltip, setOpenTooltip] = useState<number | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  // --- GLITCH FIX: Track hover state for both icon and tooltip ---
  // This prevents the tooltip from closing when moving between icon and tooltip
  const hoverStates = useRef<{ [key: number]: { icon: boolean; tooltip: boolean } }>({});

  const ensureHoverState = (idx: number) => {
    if (!hoverStates.current[idx]) {
      hoverStates.current[idx] = { icon: false, tooltip: false };
    }
  };

  const handleIconEnter = (idx: number) => {
    ensureHoverState(idx);
    hoverStates.current[idx].icon = true;
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpenTooltip(idx);
  };

  const handleIconLeave = (idx: number) => {
    ensureHoverState(idx);
    hoverStates.current[idx].icon = false;
    // Only close if neither icon nor tooltip is hovered
    closeTimeout.current = setTimeout(() => {
      if (!hoverStates.current[idx].icon && !hoverStates.current[idx].tooltip) {
        setOpenTooltip(current => (current === idx ? null : current));
      }
    }, 120);
  };

  const handleTooltipEnter = (idx: number) => {
    ensureHoverState(idx);
    hoverStates.current[idx].tooltip = true;
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpenTooltip(idx);
  };

  const handleTooltipLeave = (idx: number) => {
    ensureHoverState(idx);
    hoverStates.current[idx].tooltip = false;
    closeTimeout.current = setTimeout(() => {
      if (!hoverStates.current[idx].icon && !hoverStates.current[idx].tooltip) {
        setOpenTooltip(current => (current === idx ? null : current));
      }
    }, 120);
  };

  // For tooltips, use the same enter/leave handlers as the icon-content
  const getTooltipHandlers = (idx: number) => ({
    onTooltipMouseEnter: () => handleTooltipEnter(idx),
    onTooltipMouseLeave: () => handleTooltipLeave(idx),
  });

  // Helper to add hovered class if tooltip is open for that icon
  const getIconContentClass = (idx: number) =>
    `icon-content${openTooltip === idx ? " hovered" : ""}`;

  return (
    <StyledWrapper>
      <ul className="example-2">
        <li
          className={getIconContentClass(3)}
          onMouseEnter={() => handleIconEnter(3)}
          onMouseLeave={() => handleIconLeave(3)}
        >
          <a href="mailto:your.email@gmail.com" aria-label="Gmail" data-social="gmail">
            <div className="filled" />
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 24 24" className="bi bi-gmail" xmlSpace="preserve">
              <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 5.333-8-5.333V6h16zm0 12H4V8.489l7.445 4.963a1 1 0 0 0 1.11 0L20 8.489V18z" fill="currentColor"/>
            </svg>
          </a>
          {(openTooltip === 3) && (
            <TooltipWithCopy
              value="ignaciosadurni@gmail.com"
              color="rgb(225, 19, 0)"
              {...getTooltipHandlers(3)}
            >
              ignaciosadurni@gmail.com
            </TooltipWithCopy>
          )}
        </li>
        <li
          className={getIconContentClass(0)}
          onMouseEnter={() => handleIconEnter(0)}
          onMouseLeave={() => handleIconLeave(0)}
        >
          <a href="https://linkedin.com/in/isadurni" aria-label="LinkedIn" data-social="linkedin">
            <div className="filled" />
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16" xmlSpace="preserve">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" fill="currentColor" />
            </svg>
          </a>
        </li>
        <li
          className={getIconContentClass(1)}
          onMouseEnter={() => handleIconEnter(1)}
          onMouseLeave={() => handleIconLeave(1)}
        >
          <a href="https://github.com/isadurni" aria-label="GitHub" data-social="github">
            <div className="filled" />
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-github" viewBox="0 0 16 16" xmlSpace="preserve">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" fill="currentColor" />
            </svg>
          </a>
        </li>
        <li
          className={getIconContentClass(2)}
          onMouseEnter={() => handleIconEnter(2)}
          onMouseLeave={() => handleIconLeave(2)}
        >
          <a href="tel:+1234567890" aria-label="Call" data-social="call">
            <div className="filled" />
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-phone" viewBox="0 0 24 24" xmlSpace="preserve">
              <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C10.07 22 2 13.93 2 4.5A1 1 0 0 1 3 3.5h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z" fill="currentColor"/>
            </svg>
          </a>
          {(openTooltip === 2) && (
            <TooltipWithCopy
              value="+1 (787) 243-4859"
              color="#25d366"
              {...getTooltipHandlers(2)}
            >
              +1 (787) 243-4859
            </TooltipWithCopy>
          )}
        </li>
      </ul>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  ul {
    list-style: none;
  }

  .example-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  .example-2 .icon-content {
    margin: 0 10px;
    position: relative;
    padding: 0.5rem;
  }
  .example-2 .icon-content .tooltip {
    position: absolute;
    top: 100%;
    right: 110%;
    color: #fff;
    padding: 6px 10px;
    border-radius: 5px;
    opacity: 1;
    visibility: visible;
    font-size: 14px;
    transition: opacity 0.3s, visibility 0.3s, top 0.3s, transform 0.3s;
    pointer-events: auto;
    left: 50%;
    right: auto;
    transform: translate(-50%, 20%);
    white-space: nowrap;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 0.1rem;
    min-width: 0;
  }
  .example-2 .icon-content .tooltip {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
  .example-2 .icon-content:hover .tooltip,
  .example-2 .icon-content:focus-within .tooltip,
  .example-2 .icon-content .tooltip:hover,
  .example-2 .icon-content .tooltip:focus-within,
  .example-2 .icon-content.hovered .tooltip {
    opacity: 1;
    visibility: visible;
    top: -10px;
    transform: translate(-50%, -100%);
    pointer-events: auto;
  }
  /* Make the tooltip's hover area larger to the top and right for forgiving mouse movement */
  .example-2 .icon-content .tooltip {
    /* Add a larger invisible area for hover forgiveness */
  }
  .example-2 .icon-content .tooltip::before {
    content: '';
    position: absolute;
    top: -16px;
    right: -24px;
    left: -8px;
    bottom: -8px;
    /* This invisible area will help keep the tooltip open when moving mouse up/right */
    z-index: 1;
    pointer-events: auto;
  }
  .example-2 .icon-content .tooltip:hover,
  .example-2 .icon-content .tooltip:focus-within {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
  .example-2 .icon-content a {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #4d4d4d;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }
  .example-2 .icon-content a:hover,
  .example-2 .icon-content.hovered a {
    box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
    color: white;
  }
  .example-2 .icon-content a svg {
    position: relative;
    z-index: 1;
    width: 30px;
    height: 30px;
  }
  .example-2 .icon-content a:hover,
  .example-2 .icon-content.hovered a {
    color: white;
  }
  .example-2 .icon-content a .filled {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #000;
    transition: all 0.3s ease-in-out;
  }
  .example-2 .icon-content a:hover .filled,
  .example-2 .icon-content.hovered a .filled {
    height: 100%;
  }

  .example-2 .icon-content a[data-social="linkedin"] .filled,
  .example-2 .icon-content a[data-social="linkedin"] ~ .tooltip {
    background-color: #0274b3;
  }

  .example-2 .icon-content a[data-social="github"] .filled,
  .example-2 .icon-content a[data-social="github"] ~ .tooltip {
    background-color: #24262a;
  }
  .example-2 .icon-content a[data-social="call"] .filled,
  .example-2 .icon-content a[data-social="call"] ~ .tooltip {
    background-color: #25d366;
  }
  .example-2 .icon-content a[data-social="gmail"] .filled,
  .example-2 .icon-content a[data-social="gmail"] ~ .tooltip {
    background-color: rgb(225, 19, 0);
  }

  .example-2 .icon-content .tooltip .copy-btn {
    margin-left: 4px;
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    padding: 0;
    outline: none;
    transition: color 0.2s;
    z-index: 2;
  }
  .example-2 .icon-content .tooltip .copy-btn:active {
    color: #4ade80;
  }
`;

export default Tooltip;
