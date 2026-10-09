import React from 'react';

interface GimbellLogoProps {
  className?: string;
  size?: number;
}

export default function GimbellLogo({ className = '', size = 32 }: GimbellLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Gimbells logo"
    >
      {/* Bell Top Finial */}
      <circle cx="50" cy="18" r="4.5" />

      {/* Bell Body */}
      <path
        d="M 50 22 
           C 41 22 36 29 36 39 
           C 36 43 32 46 31 48 
           L 30 50 
           C 29.5 51 30.5 52 32 52 
           L 68 52 
           C 69.5 52 70.5 51 70 50 
           L 69 48 
           C 68 46 64 43 64 39 
           C 64 29 59 22 50 22 Z"
      />

      {/* Bell Clapper Ball */}
      <circle cx="50" cy="56.5" r="3.5" />

      {/* Left Mount Lug */}
      <rect x="25.5" y="36.5" width="6.5" height="7.5" rx="2.5" />

      {/* Right Roll Motor Mount */}
      <rect x="68" y="32" width="12" height="15" rx="3.5" />

      {/* Gimbal Arm (from right motor curving down-left to handle top) */}
      <path
        d="M 74 46 
           L 74 58 
           C 74 61 72 63.5 69 64 
           L 47 73 
           C 44.5 74 43 76.5 43 79 
           L 43 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Handheld Gimbal Handle */}
      <rect x="41.5" y="72" width="17" height="26" rx="8" />

      {/* Circular Button on Handle */}
      <circle cx="50" cy="80.5" r="3.2" fill="#FDFCF8" />
    </svg>
  );
}
