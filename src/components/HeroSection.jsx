import React, { useState, useEffect } from "react";
import { BackgroundCircles } from "../pages/design/Hero"; // Assuming this is the correct path

// The main component, which contains all the logic, styling, and JSX.
export default function App() {
  // Styles are injected here to ensure they are present in the document head.
  // This is necessary for custom @keyframes and non-Tailwind classes like .rainbow::before
  const customStyles = `
    /* Custom Keyframes */
    @keyframes rotate {
      100% {
        transform: rotate(1turn);
      }
    }

    .rainbow::before {
      content: '';
      position: absolute;
      z-index: -2;
      left: -50%;
      top: -50%;
      width: 200%;
      height: 200%;
      background-position: 100% 50%;
      background-repeat: no-repeat;
      background-size: 50% 30%;
      filter: blur(6px);
      background-image: linear-gradient(currentColor, currentColor); /* Use currentColor for dynamic effect */
      animation: rotate 4s linear infinite;
    }
    
    @keyframes shine1 {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .button-bg1 {
      background: conic-gradient(from 0deg, #00F5FF, #FF00C7, #FFD700, #00FF85, #8A2BE2, #00F5FF);
      background-size: 300% 300%;
      animation: shine1 4s ease-out infinite;
    }
    
    /* Ensure the body uses the Inter font and a dark background */
    body {
      font-family: 'Inter', sans-serif;
      background-color: #000;
    }
  `;

  // useEffect to inject styles into the document head
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = customStyles;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className="max-h-screen bg-black flex flex-col items-center">
      {/* Container for the Hero Section */}
      <section className="relative w-full flex flex-col items-center text-white text-sm pb-20 px-4 sm:px-6 lg:px-8">
        
        {/* 1. --- Background SVG and Glow Effects --- */}
        {/* Background glow effects */}
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-pink-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        
        {/* Main background block (SVG) */}
        <svg
          className="absolute inset-x-0 -z-10 -mt-20 md:-mt-40 w-full max-w-[1600px] h-auto"
          viewBox="0 0 1440 676"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG definitions/content here (retained from original) */}
          <rect
            width="1440"
            height="676"
            fill="#06B6D4"
            className="hidden lg:block"
          />
          <rect
            x="-92"
            y="-948"
            width="1624"
            height="1624"
            rx="812"
            fill="black"
          />
          <defs>
            <radialGradient
              id="a"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(90 428 292)scale(812)"
            >
              <stop offset=".63" stopColor="#372AAC" stopOpacity="0" />
              <stop offset="1" stopColor="#372AAC" />
            </radialGradient>
          </defs>
        </svg>

        {/* 2. --- BackgroundCircles Component (NEW POSITION) --- */}
        {/* Placed after other background elements and before content (z-index is implicitly handled if it uses absolute positioning) */}
        {/* <BackgroundCircles /> */}


        {/* 3. --- Content Area (z-index higher than backgrounds) --- */}
        <div className="pt-24 sm:pt-32 flex flex-col items-center max-w-7xl w-full relative z-10">
          
          {/* Join Us Badge */}
          <div className="flex items-center gap-2 border border-slate-600 text-gray-50 rounded-full px-4 py-1.5 transition duration-300 hover:border-[#06B6D4] cursor-pointer">
            <div className="size-2.5 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm">Join Us Today!</span>
          </div>

          {/* Title - Responsive Font Sizes */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl text-center font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Welcome to{" "}
            <span className="text-4xl md:text-5xl lg:text-7xl text-center font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">Student Skill Community!</span>
          </h1>

          {/* Subtext - Responsive Max Width */}
          <p className="text-center text-base sm:text-lg max-w-xl mt-4 text-gray-300 px-4">
            Our platform helps you build, test, and deliver faster — so you can
            focus on what matters.
          </p>

          {/* Buttons - Centered and Spaced */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
            {/* Primary Button with Rainbow Effect */}
            <div className="rainbow relative z-0 bg-white/15 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-[1.03] transition duration-300 active:scale-95 shadow-lg shadow-[#06B6D4]/30">
              <button className="px-8 text-sm py-3 text-white rounded-full font-medium bg-gray-900/80 backdrop-blur-sm tracking-wide cursor-pointer">
                Get started
              </button>
            </div>

            {/* Secondary Button with Gradient Border (BackgroundCircles removed from here) */}
            <div className="button-bg1 rounded-full p-0.5 hover:scale-[1.03] transition duration-300 active:scale-95 shadow-lg shadow-pink-500/30">
              <button className="px-8 text-sm py-2.5 text-white rounded-full font-medium bg-gray-800 tracking-wide cursor-pointer">
                Explore Community
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}