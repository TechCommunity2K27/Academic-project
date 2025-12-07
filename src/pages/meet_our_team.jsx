// import { motion, AnimatePresence } from 'framer-motion';
// import { useState } from 'react';
// import { Linkedin, Github, Twitter, ChevronLeft, ChevronRight } from 'lucide-react';
// import img5 from '../assets/meet_our_team/tanuja.jpg';
// import img1 from '../assets/meet_our_team/neeraj.png';

// // --- Team Data (from your original code) ---
// const teamMembers = [
//   {
//     name: 'Neeraj Verma',
//     role: 'Web & AI Developer',
//     description: 'Passionate about building beautiful and responsive web interfaces using React and Tailwind.',
//     image: img1,
//   },
//   {
//     name: 'Nitesh Kumar',
//     role: 'Web Developer',
//     description: 'Designs intuitive user experiences with attention to detail and modern design principles.',
//     // image: img2,
//   },
//   {
//     name: 'Shubham Gupta',
//     role: 'Web Developer',
//     description: 'Enjoys working across the stack and integrating frontend with backend seamlessly.',
//     // image: img3,
//   },
//    {
//     name: 'Sanvi Kamboj',
//     role: 'Web Developer',
//     description: 'Focuses on user experience and visual design coherence.',
//     // image: img4,
//   },
//    {
//     name: 'Tanuja Ranjan',
//     role: 'Web Developer',
//     description: 'Building high-performance APIs and maintaining scalable server infrastructure.',
//     image: img5,
//   },
//    {
//     name: 'Milit Arya',
//     role: 'Web Developer',
//     description: 'Ensures timely delivery and smooth coordination across all development phases.',
//     // image: img6,
//   },
//    {
//     name: 'Nikhil Mathuriya',
//     role: 'Web Developer',
//     description: 'Ensures timely delivery and smooth coordination across all development phases.',
//     // image: img6,
//   },
// ];

// // --- Carousel Configuration ---
// const CARDS_PER_SLIDE = 3;
// const totalSlides = Math.ceil(teamMembers.length / CARDS_PER_SLIDE);

// // Animation variants for horizontal sliding
// const carouselVariants = {
//   enter: (direction) => ({
//     x: direction > 0 ? 1000 : -1000,
//     opacity: 0,
//   }),
//   center: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1,
//     transition: { duration: 0.6 },
//   },
//   exit: (direction) => ({
//     zIndex: 0,
//     x: direction < 0 ? 1000 : -1000,
//     opacity: 0,
//     transition: { duration: 0.6 },
//   }),
// };

// // --- FlipCard Component (kept largely intact) ---
// function FlipCard({ member }) {
//   // Retained the hover flip logic
//   const [flipped, setFlipped] = useState(false);

//   return (
//     <motion.div
//       className="relative w-full h-full cursor-pointer [transform-style:preserve-3d]"
//       animate={{ rotateY: flipped ? 180 : 0 }}
//       transition={{ duration: 0.8, ease: 'easeInOut' }}
//       onHoverStart={() => setFlipped(true)}
//       onHoverEnd={() => setFlipped(false)}
//     >
//       {/* Front Side */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 backface-hidden border border-gray-700 transition-transform duration-500 hover:border-[#3B82F6]/60">
//         <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-[#3B82F6]/50 shadow-md">
//           <img
//             src={member.image || 'https://via.placeholder.com/128/3B82F6/FFFFFF?text=TM'}
//             alt={member.name}
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
//         <p className="text-[#3B82F6] text-sm mb-3">{member.role}</p>
//         <div className="w-16 h-[2px] bg-[#3B82F6] mb-3"></div>
//         <p className="text-gray-300 text-center text-sm px-2">Hover for details!</p>
//       </div>

//       {/* Back Side */}
//       <div className="absolute inset-0 bg-black border border-[#3B82F6] text-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center [transform:rotateY(180deg)] backface-hidden">
//         <p className="text-center text-sm mb-6 text-white">{member.description}</p>
//         <div className="flex space-x-6">
//           <motion.a
//             href="#"
//             className="text-[#0077B5]"
//             whileHover={{ scale: 1.3 }}
//             transition={{ type: 'spring', stiffness: 300 }}
//           >
//             <Linkedin />
//           </motion.a>
//           <motion.a
//             href="#"
//             className="text-[#171515] bg-white p-1 rounded-full"
//             whileHover={{ scale: 1.3 }}
//             transition={{ type: 'spring', stiffness: 300 }}
//           >
//             <Github />
//           </motion.a>
//           <motion.a
//             href="#"
//             className="text-[#1DA1F2]"
//             whileHover={{ scale: 1.3 }}
//             transition={{ type: 'spring', stiffness: 300 }}
//           >
//             <Twitter />
//           </motion.a>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// // --- Main Component: MeetOurTeam Carousel ---
// export default function MeetOurTeam() {
//   const [page, setPage] = useState(0); // Current slide index
//   const [direction, setDirection] = useState(0); // Direction of swipe (1 or -1)

//   // Calculate the members for the current slide
//   const startIndex = page * CARDS_PER_SLIDE;
//   const endIndex = Math.min(startIndex + CARDS_PER_SLIDE, teamMembers.length);
//   const currentMembers = teamMembers.slice(startIndex, endIndex);

//   const paginate = (newDirection) => {
//     setDirection(newDirection);
//     setPage((prevPage) => {
//       let newPage = prevPage + newDirection;
//       // Wrap around logic
//       if (newPage < 0) {
//         newPage = totalSlides - 1;
//       } else if (newPage >= totalSlides) {
//         newPage = 0;
//       }
//       return newPage;
//     });
//   };

//   const goToPage = (newPage) => {
//     if (newPage === page) return;
//     setDirection(newPage > page ? 1 : -1);
//     setPage(newPage);
//   };

//   return (
//     <section className="py-16 bg-black">
//       {/* Header Section */}
//       <div className="text-center mb-12">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl md:text-5xl lg:text-5xl text-center font-bold  bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight"
//         >
//           Meet Our Team
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//           className="text-[#3B82F6] font-medium"
//         >
//           The creative minds behind our success
//         </motion.p>
//       </div>

//       {/* Carousel Implementation */}
//       <div className="relative max-w-6xl mx-auto px-6 overflow-hidden">
//         {/* AnimatePresence handles the exit and entry animations of the content */}
//         <AnimatePresence initial={false} custom={direction}>
//           <motion.div
//             key={page} // Key change triggers the slide animation
//             custom={direction}
//             variants={carouselVariants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full"
//             // Positioning to allow arrows to be placed correctly
//             style={{ position: 'absolute', width: '95%', left: '2.5%', top: 0 }}
//           >
//             {currentMembers.map((member, i) => (
//               <motion.div
//                 key={i}
//                 className="relative w-full h-96 perspective"
//               >
//                 <FlipCard member={member} />
//               </motion.div>
//             ))}
//             {/* Optional: Add filler cards for alignment on the last slide if needed */}
//             {currentMembers.length < CARDS_PER_SLIDE &&
//               Array.from({ length: CARDS_PER_SLIDE - currentMembers.length }).map((_, i) => (
//                 <div key={`filler-${i}`} className="w-full h-96 hidden lg:block"></div>
//               ))
//             }
//           </motion.div>
//         </AnimatePresence>

//         {/* Placeholder to set the height of the relative container */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full invisible">
//           <div className="h-96"></div>
//           <div className="h-96"></div>
//           <div className="h-96"></div>
//         </div>

//         {/* Navigation Arrows */}
//         <button
//           onClick={() => paginate(-1)}
//           className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full shadow-lg z-20 transition duration-300 hover:bg-[#3B82F6] opacity-80 hover:opacity-100"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft size={24} />
//         </button>
//         <button
//           onClick={() => paginate(1)}
//           className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full shadow-lg z-20 transition duration-300 hover:bg-[#3B82F6] opacity-80 hover:opacity-100"
//           aria-label="Next slide"
//         >
//           <ChevronRight size={24} />
//         </button>
//       </div>

//       {/* Dot Indicators */}
//       <div className="flex justify-center mt-12 space-x-2">
//         {Array.from({ length: totalSlides }).map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToPage(index)}
//             className={`w-3 h-3 rounded-full transition-colors duration-300 ${
//               index === page ? 'bg-[#3B82F6] scale-125' : 'bg-gray-600 hover:bg-gray-400'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

import React from "react";
import Section from "./Section";
import { BackgroundCircles } from "./design/Hero";
import { Users, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

const Makers = () => {
  const teamMembers = [
    {
      name: "Priyanshu Anand",
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
      name: "Neeraj Kumar Verma",
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
      name: "Anuj Kumar",
      role: "Web Developer",
      description:
        "Creating responsive and interactive web experiences with modern technologies and best practices.",
      avatar: "/Anuj.jpeg",
      github: "https://github.com/anujarya1435",
      linkedin: "https://www.linkedin.com/in/nitesh-kumar-1b9b0a362",
      email: "nraj21284@gmail.com",
      gradient: "from-cyan-500 to-green-500",
    },
    {
      name: "Prashant Kumar Singh",
      role: "Cybersecurity Expert",
      description:
        "Ensuring platform security and data protection through advanced cybersecurity practices and protocols.",
      avatar: "/Prashant.jpeg",
      github: "https://github.com/lifeaboutsily",
      linkedin: "https://www.linkedin.com/in/prashant-kumar-singh-b612442b5",
      email: "curiousprashantks@gmail.com",
      gradient: "from-green-500 to-purple-500",
    },
    {
      name: "Priyanshu Anand",
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
      name: "Neeraj Kumar Verma",
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
      name: "Anuj Kumar",
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
  
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

const startAutoScroll = () => {
  intervalRef.current = setInterval(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 1;

      if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
        scrollRef.current.scrollLeft = 0;
      }
    }
  }, 15);
};

  const stopAutoScroll = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoScroll();
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

      <div className="container relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-n-7/30 border border-n-1/10 rounded-full mb-6 backdrop-blur-sm">
            <Users className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-semibold text-n-1 uppercase tracking-wider">
              Our Team
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
              Meet the
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Makers
            </span>
          </h1>

          <p className="text-lg md:text-xl text-n-3 max-w-3xl mx-auto leading-relaxed text-white">
            Get to know the talented individuals behind EduSphere. Our diverse
            team of developers, designers, and innovators work together to
            create exceptional educational experiences.
          </p>
        </div>

        {/* Infinite Horizontal Scrolling Cards */}
        <div className="relative w-full overflow-hidden mb-16 ">
          <div 
          ref={scrollRef}
          className="slider-track flex gap-6 cursor-pointer">
            {[...teamMembers, ...teamMembers].map((member, index) => (
              <div
                key={index}
                className="team-card group min-w-[300px] max-w-[300px] bg-n-7/20 backdrop-blur-xl border border-white border-n-1/10 rounded-2xl p-6 hover:scale-[1.04] transition-all duration-300 cursor-pointer pointer-events-auto"
                onMouseEnter={stopAutoScroll} 
                onMouseLeave={startAutoScroll} 
              >
                <div>
                {/* Avatar */}
                <div className="relative mb-6">
                  <div
                    className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${member.gradient} p-1 shadow-lg group-hover:scale-105 transition-transform duration-300`}
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
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-400 font-medium text-sm mb-3 uppercase tracking-wide">
                    {member.role}
                  </p>
                  <p className="text-sm leading-relaxed mb-6 text-n-3 text-white">
                    {member.description}
                  </p>
                  </div>
                  </div>

                  {/* Social icons */}
                  <div className="flex justify-center gap-3 text-white">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${member.email}`}>
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-white">
          {[
            { number: "4", label: "Team Members" },
            { number: "50+", label: "Projects Delivered" },
            { number: "2+", label: "Years Experience" },
            { number: "100%", label: "Dedication" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-n-7/20 border border-n-1/10 rounded-xl backdrop-blur-sm hover:bg-n-7/30 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-n-3 text-sm font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 border border-n-1/10 rounded-2xl p-8 backdrop-blur-sm text-white">
            <h3 className="text-2xl md:text-3xl font-bold text-n-1 mb-4 text-white">
              Want to Join Our Team?
            </h3>
            <p className="text-lg text-n-3 leading-relaxed mb-6 text-white">
              We're always looking for passionate individuals who share our
              vision of transforming education through technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://chat.whatsapp.com/GjMlu4QI4d83P4Tc9dwNMA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
                </svg>
                Join Us
              </a>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-n-7/50 border border-n-1/20 text-n-1 font-semibold rounded-lg hover:bg-n-7/70 hover:border-n-1/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                <svg
                  className="w-4 h-4"
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
              </button>
            </div>
          </div>
        </div>

        <BackgroundCircles />
      </div>
    </Section>
  );
};




export default Makers;
