import React from "react";
import Section from "./Section";
import { BackgroundCircles } from "./design/Hero";
import { Users, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import neeraj from "../assets/meet_our_team/neeraj.png";
import tanuja from "../assets/meet_our_team/tanuja.jpg";
import nitesh from "../assets/meet_our_team/nitesh.jpg";

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
    role: "AI Developer",
    description:
      "Ensuring platform security and data protection through advanced cybersecurity practices and protocols.",
    avatar: "/Prashant.jpeg",
    github: "https://github.com/lifeaboutsily",
    linkedin: "https://www.linkedin.com/in/prashant-kumar-singh-b612442b5",
    email: "curiousprashantks@gmail.com",
    gradient: "from-green-500 to-purple-500",
  },
  {
    name: "Milit",
    role: "Lead Full Stack Developer",
    description:
      "Leading the technical vision and architecting scalable full-stack solutions with expertise in modern frameworks.",
    avatar: "/Priyanshu.jpeg",
    github: "https://github.com/priyans11",
    linkedin: "https://linkedin.com/in/priyans11",
    email: "priyanshu82711@gmail.com",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    name: "Shubham",
    role: "MERN Stack Developer",
    description:
      "Specialized in MongoDB, Express.js, React, and Node.js for building dynamic web applications.",
    avatar: "/Neeraj.jpeg",
    github: "https://github.com/coder174-ops",
    linkedin: "https://www.linkedin.com/in/neeraj-kumar-verma-9813b6261",
    email: "neerajjnv2015@gmail.com",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Nikhil",
    role: "Web Developer",
    description:
      "Creating responsive and interactive web experiences with modern technologies and best practices.",
    avatar: "/Anuj.jpeg",
    github: "https://github.com/anujarya1435",
    linkedin: "https://www.linkedin.com/in/nitesh-kumar-1b9b0a362",
    email: "nraj21284@gmail.com",
    gradient: "from-cyan-500 to-green-500",
  },
];

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
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth / 2
        ) {
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
              Meet the  Makers
            </span>
          </h1>

          <p className="text-base md:text-xl text-n-3 max-w-3xl mx-auto leading-relaxed text-white">
          Meet the talented minds behind Dev Cluster — a team of developers, designers, and innovators working together to empower students through technology.
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
              msOverflowStyle: 'none', // IE and Edge
              scrollbarWidth: 'none', // Firefox
              // Custom CSS to hide the Webkit scrollbar (Chrome, Safari, Opera)
              '::-webkit-scrollbar': { display: 'none' },
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
                      {member.name.replace(' (Clone)', '')}
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
        
        <hr className="border-n-1/10 my-16" />

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-white">
          {[
            { number: "7", label: "Team Members" },
            { number: "50+", label: "Projects Delivered" },
            { number: "2+", label: "Years Experience" },
            { number: "100%", label: "Dedication" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-n-7/20 border border-n-1/10 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-n-7/40 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3">
                {stat.number}
              </div>
              <div className="text-n-3 text-sm font-semibold uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <hr className="border-n-1/10 my-16" />

        {/* Call to Action */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 border border-n-1/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm text-white shadow-3xl">
            <h3 className="text-2xl md:text-4xl font-bold text-n-1 mb-4 text-white">
              Want to Join Our Team? 🚀
            </h3>
            <p className="text-base md:text-lg text-n-3 leading-relaxed mb-8 text-white">
              We're always looking for passionate individuals who share our
              vision of transforming education through technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://chat.whatsapp.com/F5bTMKq9g007eBwbqGPvUL?mode=hqrt2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/25 uppercase tracking-wider text-sm"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
                </svg>
                Join Us on WhatsApp
              </a>
              {/* <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-3 px-8 py-3 bg-n-7/50 border border-n-1/20 text-n-1 font-semibold rounded-full hover:bg-n-7/70 hover:border-n-1/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm uppercase tracking-wider text-sm"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Go Back
              </button> */}
            </div>
          </div>
        </div>

        {/* <BackgroundCircles /> */}
      </div>
    </Section>
  );
};

export default Makers;