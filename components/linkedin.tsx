import React from 'react';

// Use inline styles and CSS variables to avoid FOUC and layout shift
const LinkedInButton: React.FC = () => {
  return (
    <div style={{
      display: 'inline-flex',
      // Prevent layout shift by setting explicit size and alignment
      width: 45,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      background: 'transparent',
      boxShadow: 'none',
      padding: 0,
      position: 'relative',
    }}>
      <button
        aria-label="LinkedIn"
        type="button"
        onClick={() => window.open('https://www.linkedin.com/in/isadurni', '_blank')}
        style={{
          border: 'none',
          borderRadius: 8,
          width: 45,
          height: 45,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
          boxShadow: 'none',
          padding: 0,
          outline: 'none',
          cursor: 'pointer',
          transition: 'background 0.3s, box-shadow 0.3s',
        }}
        // Use a class for hover/focus color only
        className="linkedin-btn"
      >
        <svg
          viewBox="0 0 16 16"
          width="1.8em"
          height="1.8em"
          style={{
            display: 'block',
            transition: 'fill 0.3s',
          }}
          className="linkedin-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
            // Set default fill to #888 to avoid black flash
            fill="#888"
            style={{
              transition: 'fill 0.3s',
            }}
          />
        </svg>
      </button>
      <style>{`
        .linkedin-btn:hover,
        .linkedin-btn:focus-visible {
          background: rgba(0,0,0,0.06);
        }
        .linkedin-btn:hover .linkedin-svg path,
        .linkedin-btn:focus-visible .linkedin-svg path {
          fill: #0a66c2 !important;
        }
      `}</style>
    </div>
  );
};

export default LinkedInButton;
