import { FileText, Zap } from "lucide-react";

const achievements = [
  {
    icon: <FileText className="w-6 h-6 text-primary" />,
    title: "IEEE Published Author",
    description:
      "Co-authored “Implementation of PQC-Based CRYSTALS-Kyber Algorithm for Data Encryption in Web-Based ERP Systems” at IEMECON 2025, Jaipur, India.",
    extra: "DOI: 10.1109/IEMECON69302.2025.11365871",
    link: "https://ieeexplore.ieee.org/document/11365871", 
    linkText: "View Paper →",
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "250+ LeetCode Problems",
    description:
      "Solved 250+ DSA problems through structured practice across fundamental to advanced topics including arrays, strings, binary search, trees, graphs, recursion, dynamic programming, greedy algorithms, and Trie.",
    extra: "LeetCode • DSA",
    link: "https://leetcode.com/u/F8aGFV8Ip1/", 
    linkText: "View Profile →",
  },
];

export const AchievementSection = () => {
  return (
    <div className="space-y-10">

      {/* Heading */}
      <div>
        <p className="text-sm tracking-widest text-primary/70 mb-2">
          03 — ACHIEVEMENTS
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="relative p-6 rounded-xl bg-card/50 backdrop-blur-md border border-primary/10 overflow-hidden hover:border-primary/30 transition-all duration-300"
          >

            {/* glow */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 opacity-70" />
            <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-cyan-500/20 blur-xl opacity-60" />

            {/* Icon */}
            <div className="mb-4">{item.icon}</div>

            {/* Title */}
            <h4 className="text-lg font-semibold mb-2">
              {item.title}
            </h4>

            {/* Description */}
            <p className="text-foreground/80 text-sm leading-relaxed mb-4">
              {item.description}
            </p>

            {/* Extra Info */}
            <p className="text-xs text-primary mb-4">
              {item.extra}
            </p>

            {/* Link */}
            <a
              href={item.link}
              target="_blank"
              className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              {item.linkText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};