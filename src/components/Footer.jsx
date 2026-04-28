/*
  Footer Component

  Features:
  - Copyright text
  - Back to top button
  - Proper spacing & alignment
  - Responsive layout
*/

import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-8 px-4 bg-card border-t border-border mt-16">
      {/* Centered text */}
      <p className="text-sm md:text-base text-foreground/80 text-center hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
        © {new Date().getFullYear()} Divya Bhola. All rights reserved.
      </p>

      {/* Arrow button (right aligned) */}
      <a
        href="#hero"
        className="
          absolute right-6 top-1/2 -translate-y-1/2
          p-3 rounded-full 
          bg-primary/10 text-primary 
          hover:bg-primary/20 hover:-translate-y-1
          transition-all duration-300
        "
      >
        <ArrowUp size={18} />
      </a>
    </footer>
  );
};
