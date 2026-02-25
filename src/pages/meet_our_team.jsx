import React, { useEffect, useRef, useState } from "react";
import Section from "./Section";
import { Users, Github, Linkedin, Mail } from "lucide-react";
import neeraj from "../assets/meet_our_team/neeraj.png";
import tanuja from "../assets/meet_our_team/tanuja.jpg";
import nitesh from "../assets/meet_our_team/nitesh.jpg";
import nikhil from "../assets/meet_our_team/nikhil.png";
import sanvi from "../assets/meet_our_team/sanvi.png";
import shubham from "../assets/meet_our_team/shubham.png";
import milit from "../assets/meet_our_team/milit.png";

// ─── Team Data ────────────────────────────────────────────────────────────────
const teamMembers = [
  {
    name: "Neeraj",
    role: "Lead Full Stack Developer",
    description:
      "Leading the technical vision and architecting scalable full-stack solutions with expertise in modern frameworks.",
    avatar: neeraj,
    github: "https://github.com/coder174-ops",
    linkedin: "https://www.linkedin.com/in/neeraj-kumar-verma-9813b6261",
    email: "neerajjnv2015@gmail.com",
    gradient: "from-blue-500 to-cyan-500",
    accentFrom: "#3b82f6",
    accentTo: "#06b6d4",
    skills: ["React", "Node.js", "MongoDB", "System Design","DSA"],
  },
  {
    name: "Nitesh",
    role: "MERN Stack Developer",
    description:
      "Specialized in MongoDB, Express.js, React, and Node.js for building dynamic web applications.",
    avatar: nitesh,
    github: "https://github.com/anujarya1435",
    linkedin: "https://www.linkedin.com/in/nitesh-kumar-1b9b0a362",
    email: "nraj21284@gmail.com",
    gradient: "from-purple-500 to-blue-500",
    accentFrom: "#a855f7",
    accentTo: "#3b82f6",
    skills: ["MongoDB", "Express", "React", "Node.js","Firewall"],
  },
  {
    name: "Tanuja",
    role: "Web Developer",
    description:
      "Creating responsive and interactive web experiences with modern technologies and best practices.",
    avatar: tanuja,
    github: "https://github.com/anujarya1435",
    linkedin: "https://www.linkedin.com/in/nitesh-kumar-1b9b0a362",
    email: "nraj21284@gmail.com",
    gradient: "from-cyan-500 to-green-500",
    accentFrom: "#06b6d4",
    accentTo: "#22c55e",
    skills: ["HTML", "CSS", "JavaScript","React", "UI/UX"],
  },
  {
    name: "Sanvi",
    role: "Web Developer",
    description:
      "Specialized in MongoDB, Express.js, React, and Node.js for building dynamic web applications.",
    avatar: sanvi,
    github: "",
    linkedin: "",
    email: "",
    gradient: "from-green-500 to-purple-500",
    accentFrom: "#22c55e",
    accentTo: "#a855f7",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    name: "Milit",
    role: "Web Developer",
    description:
      "Creating responsive and interactive web experiences with modern technologies and best practices.",
    avatar: milit,
    github: "",
    linkedin: "",
    email: "",
    gradient: "from-purple-500 to-blue-500",
    accentFrom: "#a855f7",
    accentTo: "#3b82f6",
    skills: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    name: "Shubham",
    role: "Web & AI Developer",
    description:
      "Leading the technical vision and architecting scalable full-stack solutions with expertise in modern frameworks.",
    avatar: shubham,
    github: "",
    linkedin: "",
    email: "",
    gradient: "from-blue-500 to-cyan-500",
    accentFrom: "#3b82f6",
    accentTo: "#06b6d4",
    skills: ["Python", "ML", "APIs", "Automation"],
  },
  {
    name: "Nikhil",
    role: "Web Developer",
    description:
      "Creating responsive and interactive web experiences with modern technologies and best practices.",
    avatar: nikhil,
    github: "https://github.com/Nikhil1m4",
    linkedin: "",
    email: "mathuriyanikhil786@gmail.com",
    gradient: "from-cyan-500 to-green-500",
    accentFrom: "#06b6d4",
    accentTo: "#22c55e",
    skills: ["HTML", "CSS", "JavaScript", "UI/UX"],
  },
];

// ─── Animated Counter ─────────────────────────────────────────────────────────
const Counter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);
    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(counter);
  }, [visible, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

// ─── 3D Flip Card ─────────────────────────────────────────────────────────────
const TeamCard = ({
  member,
  isHovered,
  isAnyHovered,
  isGlowing,
  onHoverEnter,
  onHoverLeave,
  onClick,
}) => {
  const cardStyle = {
    perspective: "1000px",
    width: "300px",
    minWidth: "300px",
    height: "400px",
    cursor: "pointer",
    flexShrink: 0,
  };

  const innerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    transition: "transform 0.65s cubic-bezier(0.23, 1, 0.32, 1)",
    transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)",
    borderRadius: "16px",
  };

  const faceBase = {
    position: "absolute",
    inset: 0,
    borderRadius: "16px",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    overflow: "hidden",
  };

  const dimStyle = {
    opacity: isAnyHovered && !isHovered ? 0.4 : 1,
    transform: isAnyHovered && !isHovered ? "scale(0.96)" : "scale(1)",
    transition: "opacity 0.4s ease, transform 0.4s ease",
  };

  const glowStyle = isGlowing
    ? {
        boxShadow: `0 0 0 2px ${member.accentFrom}70, 0 0 28px ${member.accentFrom}50, 0 0 56px ${member.accentTo}25`,
      }
    : {};

  return (
    <div
      style={{ ...cardStyle, ...dimStyle }}
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
      onClick={onClick}
    >
      <div style={{ ...innerStyle, ...glowStyle }}>
        {/* ── FRONT FACE ── */}
        <div
          style={{
            ...faceBase,
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Top accent bar */}
          <div
            style={{
              height: "3px",
              background: `linear-gradient(90deg, ${member.accentFrom}, ${member.accentTo})`,
            }}
          />

          <div className="flex flex-col items-center justify-center h-full gap-5 px-6">
            {/* Avatar */}
            <div
              style={{
                padding: "3px",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${member.accentFrom}, ${member.accentTo})`,
                boxShadow: `0 0 32px ${member.accentFrom}45`,
              }}
            >
              <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-900">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name + Role only */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-1.5 tracking-tight">
                {member.name}
              </h3>
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: member.accentFrom }}
              >
                {member.role}
              </p>
            </div>
          </div>
        </div>

        {/* ── BACK FACE ── */}
        <div
          style={{
            ...faceBase,
            transform: "rotateY(180deg)",
            background:
              "linear-gradient(160deg, rgba(12,12,22,0.98) 0%, rgba(18,18,32,0.98) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Top accent bar */}
          <div
            style={{
              height: "3px",
              background: `linear-gradient(90deg, ${member.accentFrom}, ${member.accentTo})`,
            }}
          />

          {/* Ambient glow blob */}
          <div
            style={{
              position: "absolute",
              top: "-50px",
              right: "-50px",
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${member.accentFrom}15, transparent 70%)`,
              pointerEvents: "none",
            }}
          />

          <div className="flex flex-col h-full px-5 py-5">
            {/* Name + Role */}
            <div className="mb-3">
              <h3 className="text-base font-bold text-white tracking-tight leading-tight">
                {member.name}
              </h3>
              <p
                className="text-[10px] font-semibold uppercase tracking-widest mt-0.5"
                style={{ color: member.accentFrom }}
              >
                {member.role}
              </p>
            </div>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background: `linear-gradient(90deg, ${member.accentFrom}50, transparent)`,
                marginBottom: "12px",
              }}
            />

            {/* Description */}
            <p className="text-xs text-white/65 leading-relaxed mb-4">
              {member.description}
            </p>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2 mb-auto">
              {member.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border"
                  style={{
                    background: `${member.accentFrom}15`,
                    borderColor: `${member.accentFrom}35`,
                    color: member.accentFrom,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Divider above icons */}
            <div
              style={{
                height: "1px",
                background: "rgba(255,255,255,0.07)",
                margin: "14px 0",
              }}
            />

            {/* Social Icons — always shown, fallback href="#" */}
            <div className="flex items-center justify-center gap-4">
              <a
                href={member.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-all duration-200 group/ic"
              >
                <Github className="w-4 h-4 text-white/45 group-hover/ic:text-white transition-colors duration-200" />
              </a>
              <a
                href={member.linkedin || "#"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-all duration-200 group/ic"
              >
                <Linkedin className="w-4 h-4 text-white/45 group-hover/ic:text-blue-400 transition-colors duration-200" />
              </a>
              <a
                href={member.email ? `mailto:${member.email}` : "#"}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-all duration-200 group/ic"
              >
                <Mail className="w-4 h-4 text-white/45 group-hover/ic:text-cyan-400 transition-colors duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────────
const Makers = () => {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [glowIndex, setGlowIndex] = useState(null);

  const membersForScroll = [...teamMembers, ...teamMembers];

  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 25);
  };

  const stopAutoScroll = () => clearInterval(intervalRef.current);

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleCardClick = (index) => {
    setGlowIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Section
      id="makers"
      className="pt-[8rem] -mt-[5.25rem] relative overflow-hidden"
      crosses
    >
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-n-8 via-n-7/50 to-n-8 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-5 lg:px-8">
        {/* ── Header ── */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-n-7/30 border border-n-1/10 rounded-full mb-6 backdrop-blur-sm">
            <Users className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-semibold text-n-1 uppercase tracking-wider">
              Our Team
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Meet the Makers
          </h1>

          <p className="text-base md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Meet the talented minds behind Dev Cluster — a team of developers,
            designers, and innovators working together to empower students
            through technology.
          </p>
        </div>

        {/* ── Infinite Scrolling Cards ── */}
        <div className="relative w-full overflow-hidden mb-16">
          <div
            ref={scrollRef}
            className="flex flex-nowrap gap-10 overflow-x-scroll scrollbar-hide px-2"
            onMouseEnter={stopAutoScroll}
            onMouseLeave={() => {
              setHoveredIndex(null);
              startAutoScroll();
            }}
          >
            {membersForScroll.map((member, index) => {
              const originalIndex = index % teamMembers.length;
              return (
                <TeamCard
                  key={index}
                  member={member}
                  isHovered={hoveredIndex === index}
                  // isAnyHovered={hoveredIndex !== null
                  isGlowing={glowIndex === originalIndex}
                  onHoverEnter={() => setHoveredIndex(index)}
                  onHoverLeave={() => setHoveredIndex(null)}
                  onClick={() => handleCardClick(originalIndex)}
                />
              );
            })}
          </div>
        </div>

        <hr className="border-n-1/10 my-16" />

        {/* ── Team Stats ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-white">
          {[
            { number: 7, label: "Team Members" },
            { number: 50, label: "Projects Delivered", suffix: "+" },
            { number: 2, label: "Years Experience", suffix: "+" },
            { number: 100, label: "Dedication", suffix: "%" },
          ].map((stat, index) => (
            <div
              key={index}
              className="relative group text-center p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl blur-xl" />
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4 tracking-tight">
                  <Counter target={stat.number} suffix={stat.suffix || ""} />
                </div>
                <div className="text-gray-400 text-xs md:text-sm font-semibold uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-n-1/10 my-16" />

        {/* ── Call To Action ── */}
        <div className="text-center flex justify-center">
          <div className="relative max-w-4xl w-full rounded-2xl p-[2px] border border-white">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 blur-md opacity-60" />
            <div className="relative rounded-2xl bg-black/70 backdrop-blur-xl p-8 md:p-12 text-white border border-white/10">
              <h3 className="text-2xl md:text-4xl font-bold mb-4">
                Want to Join Our Team? 🚀
              </h3>
              <p className="text-base md:text-lg text-white/80 mb-8">
                We're always looking for passionate individuals who share our
                vision of transforming education through technology.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://chat.whatsapp.com/F5bTMKq9g007eBwbqGPvUL?mode=hqrt2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full uppercase tracking-wider text-sm shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 active:scale-95 active:shadow-md"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.4 0 .02 5.38 0 12.02c0 2.12.55 4.2 1.6 6.04L0 24l6.12-1.6a11.94 11.94 0 005.92 1.52h.01c6.63 0 12.01-5.38 12.02-12.02a11.92 11.92 0 00-3.55-8.42zm-8.48 18.3h-.01a9.96 9.96 0 01-5.08-1.4l-.36-.21-3.63.95.97-3.54-.23-.36a9.96 9.96 0 1117.34-5.33c0 5.5-4.47 9.97-9.97 9.97z" />
                  </svg>
                  Join Us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Makers;
