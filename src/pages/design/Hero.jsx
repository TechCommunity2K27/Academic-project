import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

export const BackgroundCircles = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const balls = [
    { size: 14, rotate: 70, offset: 180, from: "#B9AEDF" },
    { size: 8, rotate: 120, offset: 260, from: "#88E5BE" },
    { size: 18, rotate: 190, offset: 120, from: "#F472B6" },
    { size: 12, rotate: 260, offset: 220, from: "#60A5FA" },
    { size: 9, rotate: 315, offset: 160, from: "#34D399" },
    { size: 15, rotate: 40, offset: 140, from: "#FACC15" },
    { size: 11, rotate: 150, offset: 200, from: "#FB7185" },
    { size: 13, rotate: 280, offset: 240, from: "#A78BFA" },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
      <MouseParallax strength={0.05} parallaxContainerRef={parallaxRef}>
        <div className="relative w-[70rem] h-[70rem] max-w-[120vw] max-h-[120vw]">
          {balls.map((ball, i) => (
            <div
              key={i}
              className="absolute bottom-1/2 left-1/2 w-[2px] h-1/2 origin-bottom"
              style={{ transform: `rotate(${ball.rotate}deg)` }}
            >
              <div
                style={{
                  width: `${ball.size}px`,
                  height: `${ball.size}px`,
                  marginTop: `${ball.offset}px`,
                  background: `radial-gradient(circle, ${ball.from}, #0f0f1a)`,
                }}
                className={`rounded-full transition-all duration-700 ease-out ${
                  mounted
                    ? "opacity-70 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              />
            </div>
          ))}
        </div>
      </MouseParallax>
    </div>
  );
};
