import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const getInitialChecked = () => {
  if (typeof window === "undefined") return false;
  // Check localStorage first
  const theme = localStorage.getItem("theme");
  if (theme === "dark") return true;
  if (theme === "light") return false;
  // Fallback to system preference
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const setTheme = (theme: string) => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  localStorage.setItem("theme", theme);
};

const Checkbox = () => {
  const [checked, setChecked] = useState<boolean | null>(null);

  useEffect(() => {
    // Only run on client
    setChecked(getInitialChecked());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);

    if (isChecked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // Don't render until we know the theme (avoids glitch)
  if (checked === null) {
    return null;
  }

  return (
    <StyledWrapper>
      <div className="tooltip-container">
        <label className="theme">
        <input
          className="input"
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          aria-label="Toggle dark mode"
        />
        {/* Make the sun icon a bit smaller (16x16 instead of 20x20) */}
        <svg width={16} height={16} viewBox="0 0 24 24" strokeWidth={1.5} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" className="icon icon-sun"><circle r={5} cy={12} cx={12} /><line y2={3} y1={1} x2={12} x1={12} /><line y2={23} y1={21} x2={12} x1={12} /><line y2="5.64" y1="4.22" x2="5.64" x1="4.22" /><line y2="19.78" y1="18.36" x2="19.78" x1="18.36" /><line y2={12} y1={12} x2={3} x1={1} /><line y2={12} y1={12} x2={23} x1={21} /><line y2="18.36" y1="19.78" x2="5.64" x1="4.22" /><line y2="4.22" y1="5.64" x2="19.78" x1="18.36" /></svg>
                  <svg viewBox="0 0 24 24" className="icon icon-moon" width={20} height={20}><path d="m12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8c-4.9.1-8.7 4.1-8.7 9 0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2s-.9-.2-1.2.1c-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z" /></svg>
        </label>
        <div className="tooltip">Toggle Theme</div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .tooltip-container {
    position: relative;
    display: inline-block;
  }

  .tooltip {
    visibility: hidden;
    width: 100px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 8px;
    position: absolute;
    z-index: 1;
    top: 125%;
    left: 50%;
    margin-left: -50px;
    font-size: 12px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .tooltip::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #333 transparent;
  }

  .tooltip-container:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }

  .theme {
    --bg-color: #fff;
    --main-color: #323232;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    background-color: var(--bg-color);
    border-radius: 100%;
    border: 1.5px solid var(--main-color);
    transition: background-color 0.2s, border-color 0.2s;
  }

  /* Invert the button color in dark mode */
  .dark & .theme {
    --bg-color: #323232;
    --main-color: #fff;
    background-color: var(--bg-color);
    border-color: var(--main-color);
  }

  .input {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
    opacity: 0;
  }

  .icon {
    position: absolute;
    top: calc(50% -10px);
    left: calc(50% -10px);
    width: 20px;
    height: 20px;
  }

  /* Make the sun icon smaller */
  .icon.icon-sun {
    stroke: var(--main-color);
    display: none;
    width: 16px;
    height: 16px;
    top: calc(50% - 8px);
    left: calc(50% - 8px);
  }

  .icon.icon-moon {
    fill: var(--main-color);
  }

  .input:checked ~ .icon.icon-sun {
    display: block;
  }

  .input:checked ~ .icon.icon-moon {
    display: none;
  }

  .theme:active {
    box-shadow: 0px 0px var(--main-color);
    /* Removed transform: translate(3px, 3px); to prevent button movement on active */
  }
`;

export default Checkbox;
