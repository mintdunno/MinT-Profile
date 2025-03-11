import React from "react";
import { motion } from "framer-motion";

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for managing online stores with real-time analytics, inventory management, and customer insights.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "MongoDB",
      "Chart.js",
    ],
    link: "#",
    image:
      "https://cobalt.net/wp-content/uploads/2023/08/eCommerceDashboard.png",
  },
  {
    id: 2,
    title: "AI Content Generator",
    description:
      "Platform that leverages AI to create various types of content for marketing and social media campaigns.",
    technologies: ["Python", "TensorFlow", "React", "C++", "OpenAI API"],
    link: "#",
    image:
      "https://via.placeholder.com/300x200/244855/FBE9D0?text=AI+Content+Generator",
  },
  {
    id: 3,
    title: "Fitness Tracking App",
    description:
      "Mobile application for tracking workouts, nutrition, and personal fitness goals with social features.",
    technologies: ["React Native", "SwiftUI", "Firebase", "Redux", "Express"],
    link: "#",
    image:
      "https://via.placeholder.com/300x200/244855/FBE9D0?text=Fitness+Tracker",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="mb-16" id="projects">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
        <i className="fas fa-project-diagram mr-4 text-prometheus-accent"></i>
        Key Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-prometheus-bg/30 rounded-xl overflow-hidden border border-prometheus-light-blue/10 hover:border-prometheus-accent/30 transition-all duration-300 h-full flex flex-col project-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="h-40 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>

            <div className="p-5 flex-grow flex flex-col">
              <h3 className="font-bold text-lg mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4 flex-grow">
                {project.description}
              </p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-prometheus-accent/10 text-prometheus-accent text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="text-prometheus-accent inline-flex items-center hover:text-prometheus-accent-darker transition-colors"
                >
                  View Project
                  <i className="fas fa-arrow-right ml-2 text-xs"></i>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
