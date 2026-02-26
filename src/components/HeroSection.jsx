import React, { useState, useEffect, useRef } from "react";
import { BackgroundCircles } from "../pages/design/Hero";

// ── Words to type/delete ──────────────────────────────────────────────────────
const ROTATING_WORDS = [
  "Network",
  "Community",
  "Future",
  "Skills",
  "Ecosystem",
];

// ── Terminal lines that type then delete in loop ──────────────────────────────
const TERMINAL_LINES = [
  { text: "#include <DevCluster.h>", color: "#6366f1" },
  { text: "", color: "" },
  { text: "void joinCommunity() {", color: "#e2e8f0" },
  { text: '  cout << "[INFO] Booting up...";', color: "#94a3b8" },
  { text: '  cout << "[WEB]  React loaded ✓";', color: "#06B6D4" },
  { text: '  cout << "[AI]   ML ready ✓";', color: "#06B6D4" },
  { text: '  cout << "[DSA]  Tree DP solved ✓";', color: "#06B6D4" },
  { text: '  cout << "[CHAIN] Web3 synced ✓";', color: "#06B6D4" },
  { text: "  deployProject();", color: "#e2e8f0" },
  { text: "}", color: "#e2e8f0" },
  { text: "", color: "" },
  { text: "void deployProject() {", color: "#e2e8f0" },
  { text: '  cout << "[DEPLOY] Running tests...";', color: "#facc15" },
  { text: '  cout << "[DEPLOY] Tests passed ✓";', color: "#4ade80" },
  { text: '  cout << "[DEPLOY] Building... ✓";', color: "#facc15" },
  { text: '  cout << "[DEPLOY] Live! 🚀";', color: "#4ade80" },
  { text: "}", color: "#e2e8f0" },
  { text: "", color: "" },
  { text: "// Members : 1243", color: "#475569" },
  { text: "// Projects: 389", color: "#475569" },
  { text: '// motto   : "Learn.Build.Grow";', color: "#a78bfa" },
];

// ── Custom styles ─────────────────────────────────────────────────────────────
const customStyles = `
  @keyframes rotate {
    100% { transform: rotate(1turn); }
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
    background-image: linear-gradient(currentColor, currentColor);
    animation: rotate 4s linear infinite;
  }
  @keyframes shine1 {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .button-bg1 {
    background: conic-gradient(from 0deg, #00F5FF, #FF00C7, #FFD700, #00FF85, #8A2BE2, #00F5FF);
    background-size: 300% 300%;
    animation: shine1 4s ease-out infinite;
  }
  @keyframes glowPulse {
    0%, 100% { box-shadow: 0 0 18px 2px #7c3aed55, 0 0 48px 6px #06B6D420; }
    50%       { box-shadow: 0 0 32px 6px #7c3aed88, 0 0 72px 12px #06B6D440; }
  }
  .panel-glow { animation: glowPulse 3s ease-in-out infinite; }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }
  .cursor-blink { animation: blink 1s step-end infinite; }
  body { font-family: 'Inter', sans-serif; background-color: #000; }
`;

// ── Typewriter Hook (type → pause → delete → next word) ──────────────────────
function useTypewriter(words) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];

    let delay;
    if (!isDeleting && displayed === current) {
      // Fully typed → pause then start deleting
      delay = 1400;
      const t = setTimeout(() => setIsDeleting(true), delay);
      return () => clearTimeout(t);
    }
    if (isDeleting && displayed === "") {
      // Fully deleted → move to next word
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    delay = isDeleting ? 55 : 90;
    const t = setTimeout(() => {
      setDisplayed(
        isDeleting
          ? current.slice(0, displayed.length - 1)
          : current.slice(0, displayed.length + 1),
      );
    }, delay);
    return () => clearTimeout(t);
  }, [displayed, isDeleting, wordIndex, words]);

  return displayed;
}

// ── Terminal Type-Delete Loop ─────────────────────────────────────────────────
function useTerminalLoop(lines) {
  // completedLines = array of {text, color} already fully typed
  const [completedLines, setCompletedLines] = useState([]);
  // currentText = the line currently being typed character by character
  const [currentText, setCurrentText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [phase, setPhase] = useState("typing"); // "typing" | "deleting"
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const line = lines[lineIndex];

    if (phase === "typing") {
      if (charIndex < line.text.length) {
        const t = setTimeout(
          () => {
            setCurrentText(line.text.slice(0, charIndex + 1));
            setCharIndex((c) => c + 1);
          },
          line.text[charIndex] === " " ? 30 : 55,
        );
        return () => clearTimeout(t);
      } else {
        // Line fully typed → push to completed, move to next line
        const t = setTimeout(() => {
          setCompletedLines((prev) => [
            ...prev,
            { text: line.text, color: line.color },
          ]);
          setCurrentText("");
          setCharIndex(0);
          const next = lineIndex + 1;
          if (next < lines.length) {
            setLineIndex(next);
          } else {
            // All lines typed → pause then start deleting phase
            setTimeout(() => setPhase("deleting"), 1200);
          }
        }, 120);
        return () => clearTimeout(t);
      }
    }

    if (phase === "deleting") {
      if (completedLines.length > 0) {
        const t = setTimeout(() => {
          setCompletedLines((prev) => prev.slice(0, -1));
        }, 40);
        return () => clearTimeout(t);
      } else {
        // All deleted → restart
        setPhase("typing");
        setLineIndex(0);
        setCharIndex(0);
        setCurrentText("");
      }
    }
  }, [phase, lineIndex, charIndex, completedLines, lines]);

  return { completedLines, currentText, currentColor: lines[lineIndex]?.color };
}

// ── Terminal Panel ────────────────────────────────────────────────────────────
function TerminalPanel({ tilt }) {
  const { completedLines, currentText, currentColor } =
    useTerminalLoop(TERMINAL_LINES);
  const bodyRef = useRef(null);

  // Auto scroll to bottom as lines appear
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [completedLines, currentText]);

  return (
    <div
      className="relative w-full max-w-[500px]"
      style={{
        transform: `perspective(1000px) rotateY(${tilt}deg) rotateX(2deg)`,
        transition: "transform 0.6s ease",
      }}
    >
      <div
        className="panel-glow rounded-[22px] p-[2px]"
        style={{
          background: "linear-gradient(135deg, #7c3aed, #06B6D4, #7c3aed)",
        }}
      >
        <div
          className="rounded-[20px] overflow-hidden"
          style={{ background: "#080810" }}
        >
          {/* Top bar */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{
              background: "#0d0d1a",
              borderBottom: "1px solid #ffffff0d",
            }}
          >
            <div className="flex items-center gap-1.5">
              <span
                className="w-3 h-3 rounded-full"
                style={{ background: "#ff5f57" }}
              />
              <span
                className="w-3 h-3 rounded-full"
                style={{ background: "#ffbd2e" }}
              />
              <span
                className="w-3 h-3 rounded-full"
                style={{ background: "#28c840" }}
              />
            </div>
            <span
              className="text-[11px] font-mono"
              style={{ color: "#64748b" }}
            >
              DevCluster.cpp
            </span>
            <div className="flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "#22c55e", boxShadow: "0 0 6px #22c55e" }}
              />
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
                Live Coding
              </span>
            </div>
          </div>

          {/* Code body */}
          <div
            ref={bodyRef}
            className="overflow-hidden relative"
            style={{ height: "330px", overflowY: "hidden" }}
          >
            {/* Scanlines */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.07) 2px, rgba(0,0,0,0.07) 4px)",
              }}
            />
            {/* Glass reflection */}
            <div
              className="absolute top-0 left-0 right-0 h-10 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.03), transparent)",
              }}
            />
            {/* Bottom fade */}
            <div
              className="absolute bottom-0 left-0 right-0 h-8 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to top, #080810, transparent)",
              }}
            />

            <div className="px-5 pt-4 pb-4 flex flex-col gap-0">
              {/* Completed lines */}
              {completedLines.map((line, i) => (
                <div key={i} className="flex items-start gap-4 py-[3px]">
                  <span
                    className="text-[12px] font-mono select-none shrink-0 w-6 text-right"
                    style={{ color: "#3d4f63" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-[13.5px] font-mono leading-6 tracking-wide"
                    style={{ color: line.color || "#64748b" }}
                  >
                    {line.text || "\u00A0"}
                  </span>
                </div>
              ))}

              {/* Currently typing line */}
              <div className="flex items-start gap-4 py-[3px]">
                <span
                  className="text-[12px] font-mono select-none shrink-0 w-6 text-right"
                  style={{ color: "#3d4f63" }}
                >
                  {String(completedLines.length + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-[13.5px] font-mono leading-6 tracking-wide"
                  style={{ color: currentColor || "#e2e8f0" }}
                >
                  {currentText}
                  <span
                    className="cursor-blink inline-block w-[7px] h-[14px] ml-[1px] align-middle rounded-sm"
                    style={{ background: "#06B6D4" }}
                  />
                </span>
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div
            className="flex items-center justify-between px-4 py-1.5"
            style={{
              background: "linear-gradient(90deg, #1e0a3c, #0a1a2e)",
              borderTop: "1px solid #ffffff06",
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="text-[9px] font-mono"
                style={{ color: "#475569" }}
              >
                ⎇ main
              </span>
              <span className="text-[9px] font-mono text-emerald-600">
                ✓ 0 errors
              </span>
            </div>
            <span className="text-[9px] font-mono" style={{ color: "#475569" }}>
              C++ · UTF-8
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Hero ─────────────────────────────────────────────────────────────────
export default function Hero() {
  const typedWord = useTypewriter(ROTATING_WORDS);
  const [tilt, setTilt] = useState(-6);

  // Inject styles
  useEffect(() => {
    const el = document.createElement("style");
    el.textContent = customStyles;
    document.head.appendChild(el);
    return () => document.head.removeChild(el);
  }, []);

  // Scroll-linked tilt: -6deg → 0deg
  useEffect(() => {
    const onScroll = () => {
      const progress = Math.min(window.scrollY / 400, 1);
      setTilt(-6 + progress * 6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center">
      <section className="relative w-full flex flex-col items-center text-white text-sm pb-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
        {/* Background glows */}
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-pink-300 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, #7c3aed, transparent)",
          }}
        />

        {/* SVG background */}
        <svg
          className="absolute inset-x-0 -z-10 -mt-20 md:-mt-40 w-full max-w-[1600px] h-auto"
          viewBox="0 0 1440 676"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
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

        <BackgroundCircles />

        {/* ── Main content ── */}
        <div className="pt-8 sm:pt-24 w-full max-w-7xl relative z-10">
          {/* Two-column grid — badge + content left, panel right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* ── LEFT ── */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              {/* Badge */}
              <div className="flex items-center gap-2 border border-slate-600 text-gray-50 rounded-full px-4 py-1.5 hover:border-[#06B6D4] transition duration-300 cursor-pointer">
                <div className="size-2.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm">Join Us Today!</span>
              </div>

              {/* Heading with typewriter */}
              <h1 className="text-[2.8rem] md:text-5xl lg:text-[4rem] font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Build Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {typedWord}
                </span>
                {/* Blinking cursor after typed word */}
                <span
                  className="cursor-blink inline-block w-[3px] h-[0.85em] ml-1 align-middle rounded-sm"
                  style={{ background: "#a855f7", verticalAlign: "middle" }}
                />
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-xl text-gray-300 max-w-md">
                DevCluster is a domain-focused student community built around{" "}
                <span style={{ color: "#06B6D4" }} className="font-semibold">
                  Web Dev
                </span>
                , <span className="text-purple-400 font-semibold">AI/ML</span>,{" "}
                <span className="text-amber-400 font-semibold">Blockchain</span>{" "}
                & <span className="text-green-400 font-semibold">DSA</span>.
                Learn together. Ship together.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <div className="rainbow relative z-0 bg-white/15 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-[1.03] transition duration-300 active:scale-95 shadow-lg shadow-[#06B6D4]/30">
                  <button className="px-8 text-sm py-3 text-white rounded-full font-medium bg-gray-900/80 backdrop-blur-sm tracking-wide cursor-pointer">
                    Explore Communities
                  </button>
                </div>
                <div className="button-bg1 rounded-full p-0.5 hover:scale-[1.03] transition duration-300 active:scale-95 shadow-lg shadow-pink-500/30">
                  <button className="px-8 text-sm py-2.5 text-white rounded-full font-medium bg-gray-800 tracking-wide cursor-pointer">
                    Join Now
                  </button>
                </div>
              </div>

              {/* Stat pills */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-1">
                {[
                  { label: "1,243 Members", color: "#a855f7" },
                  { label: "4 Communities", color: "#06B6D4" },
                  { label: "389 Projects", color: "#22c55e" },
                ].map((p) => (
                  <span
                    key={p.label}
                    className="text-[11px] font-semibold px-3 py-1 rounded-full border"
                    style={{
                      color: p.color,
                      borderColor: `${p.color}35`,
                      background: `${p.color}12`,
                    }}
                  >
                    {p.label}
                  </span>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Terminal — top-aligned with badge ── */}
            <div className="flex items-start justify-center lg:justify-end">
              <TerminalPanel tilt={tilt} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
