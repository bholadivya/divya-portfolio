/*
  SkillsSection Component

  Features:
  - category filter
  - progress bars
  - dynamic rendering
*/  

import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "React.js", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Responsive Design", level: 85, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 80, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "REST APIs", level: 85, category: "backend" },
  { name: "Authentication (JWT)", level: 85, category: "backend" },

  // Tools & Platforms
  { name: "Git/GitHub", level: 85, category: "tools" },
  { name: "Vercel", level: 80, category: "tools" },
  { name: "Postman", level: 80, category: "tools" },
  { name: "Cloudinary", level: 75, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },

  // CS Fundamentals
  { name: "Data Structures & Algorithms", level: 75, category: "core" },
  { name: "OOP", level: 80, category: "core" },
  { name: "Operating Systems", level: 70, category: "core" },
  { name: "Computer Networks", level: 70, category: "core" },
];

const categories = ["all", "frontend", "backend", "tools", "core"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary",
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skills, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg md:text-xl font-medium">{skills.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skills.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm md:text-base text-foreground/80">
                  {skills.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
