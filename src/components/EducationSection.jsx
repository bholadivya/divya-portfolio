import { GraduationCap } from "lucide-react";

const education = [
  {
    id: "01",
    year: "2022 — 2026",
    title: "B.Tech — Electronics & Communication Engineering",
    place: "Netaji Subhas University of Technology (NSUT), Delhi",
    score: "CGPA: 6.92",
    logo: "/NSUT.png", // change path
  },
  {
    id: "02",
    year: "2021",
    title: "CBSE Class XII",
    place: "Govt Co-ed Sarvodaya Vidhyalaya, RK puram",
    score: "84%",
    logo: "/CBSE.png",
  },
  {
    id: "03",
    year: "2019",
    title: "CBSE Class X",
    place: "The Cambridge International School",
    score: "93%",
    logo: "/CBSE.png",
  },
];

export const EducationSection = () => {
  return (
    <div className="space-y-10">
      {/* Heading */}
      <div>
        <p className="text-sm tracking-widest text-primary/70 mb-2">
          01 — ACADEMIC FOUNDATION
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {education.map((item, index) => (
          <div
            key={index}
            className="relative p-6 rounded-xl bg-card/50 backdrop-blur-md border border-primary/10 overflow-hidden group hover:border-primary/30 transition-all duration-300"
          >
            {/* 🔥 LEFT GLOW LINE */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500 via-indigo-500 to-cyan-500 opacity-80" />

            {/* 🔥 SOFT LEFT GLOW */}
            <div className="absolute left-0 top-0 h-full w-6 bg-gradient-to-b from-purple-500/20 via-indigo-500/20 to-cyan-500/20 blur-xl opacity-60" />
            <span className="absolute right-4 top-4 text-6xl font-bold text-white/5 pointer-events-none">
              {item.id}
            </span>

            {/* Logo */}
            <div className="mb-4">
              <img
                src={item.logo}
                alt="logo"
                className="w-12 h-12 rounded-md object-contain"
              />
            </div>

            {/* Year */}
            <p className="text-sm text-primary mb-2">{item.year}</p>

            {/* Title */}
            <h4 className="text-lg font-semibold mb-1 leading-snug">
              {item.title}
            </h4>

            {/* Place */}
            <p className="text-sm text-foreground/70 mb-4">{item.place}</p>

            {/* Score badge */}
            <span className="inline-block px-3 py-1 text-xs rounded-full border border-primary/30 text-primary">
              {item.score}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
