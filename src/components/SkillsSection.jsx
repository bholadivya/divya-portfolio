/*
  SkillsSection Component

  Features:
  - category filter
  - icon-based skill grid
  - clean & stable rendering
*/

import { useState } from "react";
import { cn } from "@/lib/utils";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiCloudinary,
} from "react-icons/si";

const skills = [
  // Frontend
  { name: "HTML", category: "frontend", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", category: "frontend", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", category: "frontend", icon: FaJs, color: "#F7DF1E" },
  { name: "React", category: "frontend", icon: FaReact, color: "#61DAFB" },
  {
    name: "Tailwind",
    category: "frontend",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },

  // Backend
  { name: "Node.js", category: "backend", icon: FaNodeJs, color: "#339933" },
  { name: "Express", category: "backend", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", category: "backend", icon: SiMongodb, color: "#47A248" },

  // Tools
  { name: "Git", category: "tools", icon: SiGit, color: "#F05032" },
  { name: "GitHub", category: "tools", icon: SiGithub, color: "#ffffff" },
  { name: "Postman", category: "tools", icon: SiPostman, color: "#FF6C37" },
  { name: "Vercel", category: "tools", icon: SiVercel, color: "#ffffff" },
  {
    name: "Cloudinary",
    category: "tools",
    icon: SiCloudinary,
    color: "#3448C5",
  },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize text-sm",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "border border-primary/20 text-foreground/70 hover:border-primary/40 hover:text-primary",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill, key) => {
            const Icon = skill.icon;

            return (
              <div
                key={key}
                className="group flex flex-col items-center justify-center gap-3 p-6 h-32 rounded-xl bg-card/50 backdrop-blur-md border border-primary/10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-card/60 border border-primary/10 transition-all duration-300 group-hover:scale-110 hover:shadow-[0_0_25px_rgba(120,140,255,0.15)]">
                  <Icon
                    size={28}
                    color={skill.color === "#ffffff" ? "#e5e7eb" : skill.color}
                  />
                </div>

                {/* Name */}
                <h3 className="text-xs sm:text-sm text-foreground/80 text-center">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
      {/* Core Fundamentals */}
      <div className="mt-16 text-center">
        <h3 className="text-lg md:text-xl font-semibold mb-6 text-foreground/80">
          Core Fundamentals
        </h3>

        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Data Structures & Algorithms",
            "Operating Systems",
            "Computer Networks",
            "OOP",
          ].map((item, i) => (
            <span
              key={i}
              className="px-4 py-1.5 rounded-full border border-primary/20 text-sm md:text-sm text-foreground/70 transition-all duration-300 hover:border-primary/40 hover:text-primary hover:-translate-y-0.5"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
