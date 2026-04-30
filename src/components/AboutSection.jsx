/*
  AboutSection Component

  Displays:
  - Introduction about you
  - Skills summary
  - CTA buttons
  - Feature cards (experience highlights)
*/

import { Zap, Layout, Shield } from "lucide-react";

export const AboutSection = () => {
  return (
    // Section spacing and positioning
    <section id="about" className="py-24 px-4 relative">
      {/* Container for centered content */}
      <div className="container mx-auto max-w-5xl">
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Text content */}
          <div className="space-y-6 max-w-xl">
            {/* 🔹 PROFILE CARD */}
            <div className="flex justify-center">
              <div className="rounded-xl border border-primary/20 px-4 py-3 bg-primary/5 backdrop-blur-sm w-fit text-center">
                <p className="font-semibold text-primary">Divya Bhola</p>
                <p className="text-sm text-foreground/70">
                  B.Tech ECE • NSUT Delhi • Batch 2026
                </p>
              </div>
            </div>
            {/* SHORT INTRO HOOK */}
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              I build fast, intuitive, and secure web applications. From clean
              frontend interfaces to scalable backend systems, I focus on
              creating products that feel as good as they perform.
            </p>
            {/* 🔹 SKILL PILLS */}
            <div className="flex flex-wrap gap-2">
              {[
                "MERN Stack",
                "Web Development",
                "User-Centric Design",
                "DSA",
                "CyberSecurity",
                "IEEE Author",
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full border border-primary/20 text-sm text-foreground/80 bg-primary/5"
                >
                  {item}
                </span>
              ))}
            </div>
            {/* 🔹 CONTINUATION */}
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              I’ve worked on full-stack applications involving authentication,
              dashboards, and API integrations, with a focus on performance and
              clean architecture.
            </p>

            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              I’m constantly exploring new technologies and improving
              problem-solving skills to build impactful and efficient digital
              products.
            </p>
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              {/* Resume CTA */}
              <a
                href="/Resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT: Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Card 1 */}
            <div className="gradient-border p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Zap className="h-5 w-5" />
                </div>

                {/* Content */}
                <div className="text-left space-y-2">
                  <h4 className="font-semibold text-lg text-foreground">
                    Performance-first mindset.
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Every decision — from component structure to API calls — is
                    made with speed, efficiency, and scalability in mind.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="gradient-border p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Layout className="h-5 w-5" />
                </div>

                <div className="text-left space-y-2">
                  <h4 className="font-semibold text-lg text-foreground">
                    Clarity over complexity.
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    I focus on clean, readable systems and interfaces that are
                    easy to use, maintain, and extend.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="gradient-border p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Shield className="h-5 w-5" />
                </div>

                <div className="text-left space-y-2">
                  <h4 className="font-semibold text-lg text-foreground">
                    Secure by design.
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    I build systems with authentication, data flow, and
                    reliability in mind — not as an afterthought.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
