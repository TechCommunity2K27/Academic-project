import React from "react";
import Section from "./Section";
import { BackgroundCircles } from "./design/Hero";
import { Users, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef ,useState} from "react";
import neeraj from "../assets/meet_our_team/neeraj.png";
import tanuja from "../assets/meet_our_team/tanuja.jpg";
import nitesh from "../assets/meet_our_team/nitesh.jpg";
import nikhil from "../assets/meet_our_team/nikhil.png";
import sanvi from "../assets/meet_our_team/sanvi.png";
import shubham from "../assets/meet_our_team/shubham.png";
import milit from "../assets/meet_our_team/milit.png";

// --- Team Data (from your original code) ---
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
  },
  {
    name: "Nikhil",
    role: "Web Developer",
    description:
      "Creating responsive and interactive web experiences with modern technologies and best practices.",
    avatar: nikhil,
    github: "https://github.com/Nikhil1m4",
    linkedin: "",
    email: "mathuriyanikhil@786@gmail.com",
    gradient: "from-cyan-500 to-green-500",
  },
];


/* --- Animated Counter Component --- */
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
      { threshold: 0.4 }
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


const Makers = () => {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  // Use the duplicated array for infinite scroll
  const membersForScroll = [...teamMembers, ...teamMembers];

  // Logic for the infinite auto-scroll
  const startAutoScroll = () => {
    // Clear any existing interval
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        // Move 1 pixel right
        scrollRef.current.scrollLeft += 1;

        // If the scroll has reached the end of the first set of members (half of the total scroll width)
        // instantly jump back to the start (scrollLeft = 0) to create a seamless loop.
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 25); // Slower speed (25ms instead of 15ms for smoother view)
  };

  const stopAutoScroll = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    // Start the scroll when the component mounts
    startAutoScroll();
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <Section
      id="makers"
      className="pt-[8rem] -mt-[5.25rem] relative overflow-hidden"
      crosses
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-n-8 via-n-7/50 to-n-8"></div>

      <div className="container relative z-10 mx-auto px-5 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-n-7/30 border border-n-1/10 rounded-full mb-6 backdrop-blur-sm">
            <Users className="ml-25 w-6 h-6 text-purple-400" />
            <span className="text-sm font-semibold text-n-1 uppercase tracking-wider">
              Our Team
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-4xl md:text-5xl lg:text-5xl text-center font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Meet the Makers
            </span>
          </h1>

          <p className="text-base md:text-xl text-n-3 max-w-3xl mx-auto leading-relaxed text-white">
            Meet the talented minds behind Dev Cluster — a team of developers,
            designers, and innovators working together to empower students
            through technology.
          </p>
        </div>
        {/* Horizontal Scrolling Cards Container */}
        <div className="relative w-full overflow-hidden mb-16">
          <div
            ref={scrollRef}
            // Use flex-nowrap to keep all cards on one line.
            // overflow-x-auto is key for initial manual scrolling but we hide the scrollbar.
            className="flex flex-nowrap gap-6 cursor-pointer overflow-x-scroll scrollbar-hide"
            style={{
              // Hide scrollbar for different browsers
              msOverflowStyle: "none", // IE and Edge
              scrollbarWidth: "none", // Firefox
              // Custom CSS to hide the Webkit scrollbar (Chrome, Safari, Opera)
              "::-webkit-scrollbar": { display: "none" },
            }}
            onMouseEnter={stopAutoScroll}
            onMouseLeave={startAutoScroll}
          >
            {membersForScroll.map((member, index) => (
              <div
                key={index}
                // min-w and max-w ensure the card is always 300px wide, regardless of content
                className="team-card min-w-[300px] max-w-[300px] bg-n-7/20 backdrop-blur-xl border border-n-1/10 rounded-2xl p-6 hover:scale-[1.03] transition-all duration-300 pointer-events-auto shadow-xl"
              >
                <div>
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <div
                      className={`w-28 h-28 mx-auto rounded-full bg-gradient-to-br ${member.gradient} p-1 shadow-lg transition-transform duration-300 hover:rotate-6`}
                    >
                      <div className="w-full h-full rounded-full overflow-hidden bg-n-8">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-1 text-n-1">
                      {member.name.replace(" (Clone)", "")}
                    </h3>
                    <p className="text-purple-400 font-medium text-sm mb-4 uppercase tracking-wider">
                      {member.role}
                    </p>
                    {/* Ensure description is properly aligned and styled */}
                    <p className="text-sm leading-relaxed mb-6 text-n-3 text-white min-h-[4rem]">
                      {member.description}
                    </p>
                  </div>
                </div>

                {/* Social icons */}
                <div className="flex justify-center gap-6 text-white pt-4 border-t border-n-1/10">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="hover:text-cyan-400 transition-colors duration-200"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className="border-n-1/10 my-1" />
        /* --- Team Stats Section --- */
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
              {/* Glow Background */}
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
      
        {/* Call to Action */}
        <div className="text-center flex justify-center">
          <div className="relative max-w-4xl w-full rounded-2xl p-[2px] border border-white">
            {/* Glow Border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 blur-md opacity-60"></div>

            {/* Main Card */}
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
                  className="inline-flex items-center gap-3 px-8 py-3 
                     bg-gradient-to-r from-purple-500 to-blue-500 
                     text-white font-semibold rounded-full 
                     uppercase tracking-wider text-sm 
                     shadow-lg hover:from-purple-600 hover:to-blue-600 
                     transition-all duration-200 
                     active:scale-95 active:shadow-md"
                >
                  {/* WhatsApp Icon with To & Fro Motion */}
                  <svg
                    className="w-5 h-5 animate-iconMove"
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
        {/* <BackgroundCircles /> */}
      </div>
    </Section>
  );
};

export default Makers;
