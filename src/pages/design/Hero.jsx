// import { useEffect, useState } from "react";
// import { MouseParallax } from "react-just-parallax";

// import PlusSvg from "../../assets/svg/PlusSvg";

// export const Gradient = () => {
//   return (
//     <>
//       <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
//       <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
//     </>
//   );
// };

// export const BottomLine = () => {
//   return (
//     <>
//       <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />

//       <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />

//       <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
//     </>
//   );
// };

// const Rings = () => {
//   return (
//     <>
//       {/* <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2 text-white-200"  /> */}
//       {/* <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2 text-white" /> */}
//       {/* <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2 text-white" /> */}
//     </>
//   );
// };

// export const BackgroundCircles = ({ parallaxRef }) => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <div className="absolute -top-[42.375rem] left-1/2 w-[90rem] aspect-square  rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
//       <Rings />

//       {/* Moving background colored circle balls */}
//       <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
//         <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
//           <div
//             className={`w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
//               mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//             }`}
//           />
//         </div>

//         <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
//           <div
//             className={`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
//               mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//             }`}
//           />
//         </div>

//         <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
//           <div
//             className={`hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out ${
//               mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//             }`}
//           />
//         </div>

//         <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
//           <div
//             className={`w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
//               mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//             }`}
//           />
//         </div>

//         <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
//           <div
//             className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
//               mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//             }`}
//           />
//         </div>

//           <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
//           <div
//             className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
//               mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//             }`}
//           />
//         </div>

//         <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
//           <div
//             className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
//               mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//             }`}
//           />
//         </div>
//       </MouseParallax>
//     </div>
//   );
// };


import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";
import PlusSvg from "../../assets/svg/PlusSvg";

/* ------------------ Gradient Bar ------------------ */
export const Gradient = () => {
  return (
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
      <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
    </>
  );
};

/* ------------------ Bottom Line ------------------ */
export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />
      <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />
      <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
  );
};

/* ------------------ Rings (Optional) ------------------ */
const Rings = () => {
  return (
    <>
      {/* Enable if you want visible rings */}
      {/* <div className="absolute top-1/2 left-1/2 w-[65rem] aspect-square border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" /> */}
    </>
  );
};

/* ------------------ Background Circles ------------------ */
export const BackgroundCircles = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Ball Configuration (You can add unlimited balls here)
  const balls = [
    { size: 10, rotate: 25, offset: -120, from: "#DD734F" },
    { size: 14, rotate: 70, offset: 160, from: "#B9AEDF" },
    { size: 8, rotate: 120, offset: 260, from: "#88E5BE" },
    { size: 18, rotate: 190, offset: 90, from: "#F472B6" },
    { size: 12, rotate: 260, offset: 220, from: "#60A5FA" },
    { size: 9, rotate: 315, offset: 130, from: "#34D399" },

    // 🔥 Extra visible balls
    { size: 15, rotate: 40, offset: 90, from: "#FACC15" },
    { size: 11, rotate: 150, offset: 130, from: "#FB7185" },
    { size: 13, rotate: 280, offset: 170, from: "#A78BFA" },
  ];

    return (
    <div className="absolute -top-[20rem] md:-top-[28rem] left-1/2 w-[60rem] md:w-[80rem] aspect-square rounded-full -translate-x-1/2 overflow-visible">

      <MouseParallax strength={0.08} parallaxContainerRef={parallaxRef}>
        {balls.map((ball, i) => (
          <div
            key={i}
            className="absolute bottom-1/2 left-1/2 w-1 h-1/2 origin-bottom"
            style={{ transform: `rotate(${ball.rotate}deg)` }}
          >
            <div
              style={{
                width: `${ball.size}px`,
                height: `${ball.size}px`,
                marginTop: `${ball.offset}px`,
                background: `linear-gradient(to bottom, ${ball.from}, #1A1A32)`,
              }}
              className={`rounded-full transition-all duration-700 ease-out ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            />
          </div>
        ))}
      </MouseParallax>
    </div>
  );
};