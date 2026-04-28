/*
  AboutSection Component

  Displays:
  - Introduction about you
  - Skills summary
  - CTA buttons
  - Feature cards (experience highlights)
*/

import { Code, User, Briefcase } from "lucide-react";

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
          <div className="space-y-6">
            {/* Title */}
            <h3 className="text-2xl font-semibold">
              Frontend-Focused Full Stack Developer (SDE)
            </h3>
            {/* Description */}
            <p className="text-foreground/80">
              I’m a frontend-focused full stack developer passionate about
              building clean, responsive, and user-centric web applications. I
              enjoy turning ideas into seamless digital experiences using modern
              technologies like React, JavaScript, Node.js, and MongoDB.
            </p>
            <p className="text-foreground/80">
              With hands-on experience in building end-to-end web applications,
              I’ve worked on projects involving role-based dashboards, API
              integration, authentication systems, and responsive UI design. I
              focus on writing scalable code, optimizing performance, and
              delivering intuitive user experiences.
            </p>
            <p className="text-foreground/80">
              I’m constantly learning, exploring new technologies, and improving
              my problem-solving skills through DSA and real-world projects. My
              goal is to grow as a software developer while building impactful
              and efficient digital products.
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
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                {/* Content */}
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-foreground/80">
                    I build responsive and scalable web applications using
                    modern technologies like React, JavaScript, and Node.js. I
                    focus on clean architecture, reusable components, and
                    performance optimization to deliver efficient and
                    maintainable solutions.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">User-Centric Design</h4>
                  <p className="text-foreground/80">
                    I prioritize intuitive UI/UX by designing interfaces that
                    are simple, accessible, and engaging. My goal is to create
                    seamless user experiences that balance functionality with
                    visual appeal.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full Stack Development</h4>
                  <p className="text-foreground/80">
                    I have experience building end-to-end applications,
                    including backend APIs, authentication systems, and database
                    integration using Node.js and MongoDB. I enjoy working
                    across the stack to deliver complete solutions.
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
