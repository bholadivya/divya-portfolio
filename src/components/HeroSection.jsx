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

export const HeroSection = () => {
  return (
    /*
      Full screen hero section
      centered content
    */
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {/* Animated intro text */}
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            {/* Name (highlighted) */}
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Divya
            </span>
            {/* Last name with gradient */}
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Bhola
            </span>
          </h1>
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I’m a frontend-focused full stack developer (SDE) passionate about
            building clean, responsive, and user-centric web applications. I
            enjoy creating seamless digital experiences using React and modern
            web technologies.
          </p>
          {/* CTA Button */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#Projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-foreground/80 mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
