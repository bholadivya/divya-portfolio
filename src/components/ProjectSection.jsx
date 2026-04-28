import { ExternalLink, ArrowRight } from "lucide-react";

const Projects = [
  {
    id: 1,
    title: "ERP Portal for ECE Department",
    description:
      "A full-stack web application designed to manage the Bachelor Thesis Project (BTP) workflow for students, professors, and administrators.",
    image: "/Projects/ERP.png",
    tags: ["React", "Tailwind", "Node.js", "MongoDB", "JWT"],
    demoUrl: "https://btp-project-kohl.vercel.app/login",
    githubUrl: "https://github.com/btpmanagement123-hash/btp-project.git",
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description:
      "This is my personal portfolio website built to showcase my projects, technical skills, and development experience as a frontend-focused full stack developer. The portfolio is designed with a focus on clean UI, responsiveness, and user experience, providing an interactive way to explore my work.",
    image: "/Projects/portfolio2.png",
    tags: ["React.js", "JavaScript", "Tailwind"],
    demoUrl: "https://divya-portfolio-steel.vercel.app/",
    githubUrl: "https://github.com/bholadivya/divya-portfolio.git",
  },
  {
    id: 3,
    title: "AI-Powered Support Ticket Triage System",
    description:
      "A full-stack web application that intelligently classifies and prioritizes customer support tickets using rule-based NLP logic.",
    image: "/Projects/ai-ticket-triage.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    demoUrl: "https://ai-ticket-triage-eight.vercel.app/",
    githubUrl: "https://github.com/bholadivya/AI-Ticket-Triage.git",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-foreground/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-foreground/80 text-sm md:text-base leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 ">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.332-1.753-1.332-1.753-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.124-.304-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013.003-.403c1.02.005 2.045.138 3.003.403 2.29-1.552 3.296-1.23 3.296-1.23.653 1.649.242 2.872.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.624-5.475 5.921.43.372.814 1.102.814 2.222 0 1.606-.015 2.902-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/bholadivya"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
