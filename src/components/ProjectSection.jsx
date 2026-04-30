import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

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
    image: "/Projects/final.png",
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
    <section id="projects" className="py-24 px-4 relative ">
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
              className="group relative bg-card rounded-lg overflow-hidden shadow-xs card-hover"
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
                    {/* GitHub */}
                    <a
                      href="https://github.com/bholadivya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <FaGithub size={20} />
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
