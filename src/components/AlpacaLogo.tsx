import React from 'react';

function AlpacaLogo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-300 group-hover:scale-110"
    >
      {/* Mountain backdrop */}
      <path
        d="M4 28L12 16L20 20L28 12L36 20V32H4V28Z"
        fill="#6B7C6E"
        opacity="0.3"
      />
      <path
        d="M8 30L16 18L24 22L32 14L38 22V34H8V30Z"
        fill="#3D2156"
        opacity="0.2"
      />
      
      {/* Alpaca silhouette */}
      <g fill="#F5F1E7">
        {/* Body */}
        <ellipse cx="20" cy="24" rx="8" ry="6"/>
        
        {/* Neck */}
        <ellipse cx="20" cy="16" rx="3" ry="6"/>
        
        {/* Head */}
        <ellipse cx="20" cy="10" rx="4" ry="4"/>
        
        {/* Ears */}
        <ellipse cx="18" cy="8" rx="1.5" ry="2"/>
        <ellipse cx="22" cy="8" rx="1.5" ry="2"/>
        
        {/* Legs */}
        <rect x="16" y="28" width="2" height="6" rx="1"/>
        <rect x="22" y="28" width="2" height="6" rx="1"/>
        <rect x="18" y="26" width="2" height="6" rx="1"/>
        <rect x="20" y="26" width="2" height="6" rx="1"/>
      </g>
      
      {/* Geometric accent */}
      <path
        d="M20 36L18 32H22L20 36Z"
        fill="#3D2156"
      />
    </svg>
  );
}

export default AlpacaLogo;