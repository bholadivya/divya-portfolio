import { Shield } from "lucide-react";

const experience = [
  {
    role: "Cybersecurity Intern",
    org: "C-DAC Noida (Remote)",
    duration: "July 2025 — August 2025",
    points: [
      "Worked on a secure e-commerce platform with focus on authentication and encrypted communication.",
      "Implemented and analyzed secure login flows, session handling, and HTTPS-based data protection.",
      "Gained hands-on exposure to network security concepts including TLS/SSL and secure request handling.",
      "Explored ethical hacking fundamentals and identified common vulnerabilities in web applications.",
    ],
    tech: [
      "HTTPS",
      "Authentication",
      "Session Management",
      "Network Security"
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <div className="space-y-10">
      {/* Heading */}
      <div>
        <p className="text-sm tracking-widest text-primary/70 mb-2">
         02 — EXPERIENCE
        </p>
      </div>

      {/* Experience Cards */}
      {experience.map((exp, index) => (
        <div
          key={index}
          className="relative p-8 rounded-xl bg-card/50 backdrop-blur-md border border-primary/10 overflow-hidden hover:border-primary/30 transition-all duration-300"
        >
          {/* 🔥 top glow (same as projects) */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 opacity-70" />
          <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-cyan-500/20 blur-xl opacity-60" />

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            {/* Left */}
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="p-3 rounded-lg bg-primary/10">
                <Shield className="w-6 h-6 text-primary" />
              </div>

              <div>
                <h4 className="text-lg md:text-xl font-semibold">{exp.role}</h4>
                <p className="text-primary text-sm">{exp.org}</p>
              </div>
            </div>

            {/* Duration */}
            <span className="self-start md:self-auto px-4 py-1 text-sm rounded-full border border-primary/20 text-foreground/70">
              {exp.duration}
            </span>
          </div>

          {/* Bullet Points */}
          <ul className="space-y-3 mb-6">
            {exp.points.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-foreground/80 text-sm leading-relaxed"
              >
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary"></span>
                {point}
              </li>
            ))}
          </ul>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-3">
            {exp.tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full border border-primary/20 text-foreground/70 hover:border-primary/40 hover:text-primary transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
