/*
  HeroSection Component

  First section users see
  Includes:
  - intro text
  - animated heading
  - description
  - CTA button
  - scroll indicator
*/

import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Crafting interfaces that feel alive.",
  "Breaking systems. Building better ones.",
  "From concept to click — I build it all.",
  "Secure by design. Fast by default.",
];

export const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));

        if (text === current) {
          setIsDeleting(true);
          speed = 1200; // pause before deleting
        }
      } else {
        setText(current.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    /*
      Full screen hero section
      centered content
    */
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-start sm:justify-center pt-24 sm:pt-0"
    >
      {/* 🔥 ACTIVE STATUS */}
      <div className="mb-6">
        <div className="mb-6 flex items-center justify-center gap-3 neon-pill px-4 py-1.5 rounded-full">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>

          <span className="text-sm md:text-base font-medium tracking-wide">
            Open to Innovative Ideas
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center text-center z-10">
        <div className="space-y-0">
          {/* Heading */}

          {/* Line 1 */}
          <p className="text-lg md:text-4xl text-muted-foreground tracking-wide opacity-0 animate-fade-in">
            Hi, I’m
          </p>
          {/* Name highlighted */}
          <div className="space-y-3 leading-[0.85]">
            <h1
              className="
  text-[14vw] md:text-[10vw] font-black leading-[0.85] tracking-[-4px]
  text-foreground 
  dark:text-primary 
  -mb-6 md:-mb-10
  animate-fade-in-delay-1
"
            >
              DIVYA
            </h1>

            <h1
              className="
  text-[14vw] md:text-[10vw] font-black leading-[0.85] tracking-[-4px]
  bg-gradient-to-b 
  from-foreground 
  via-foreground/70 
  to-foreground/20
  dark:from-white 
  dark:via-white/80 
  dark:to-white/20
  bg-clip-text text-transparent
  animate-fade-in-delay-2
"
            >
              BHOLA
            </h1>
          </div>

          {/* TYPEWRITER */}
          <p
            className="mt-8 md:mt-12 h-12 flex items-center justify-center text-lg sm:text-xl md:text-2xl neon-glow font-medium italic tracking-wide"
            style={{ fontFamily: "Fira Code" }}
          >
            {text}
            <span className="ml-1 animate-pulse">|</span>
          </p>
          {/* CTA Button */}
          <div className="mt-10 md:mt-14 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="
    cosmic-button 
    text-base sm:text-lg md:text-xl 
    px-6 py-2 sm:px-8 sm:py-3
  "
            >
              View My Work →
            </a>
          </div>
        </div>
      </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-foreground/60 mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>
  );
};
