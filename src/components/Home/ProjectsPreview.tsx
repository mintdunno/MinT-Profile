import React from "react";
import { Link } from "react-router-dom";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
};

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Mecanum wheel AGV",
    description:
      "Mecanum wheel AGVs are omnidirectional robots that use specially designed wheels with angled rollers to move in any direction without changing orientation, making them ideal for precise navigation in tight industrial spaces.",
    image: "https://i.ibb.co/q3gwWH7N/mecanum-robot.jpg",
    technologies: ["React", "Node.js", "C++", "MATLAB"],
  },
  {
    id: 2,
    title: "AI Content Generator",
    description:
      "Platform that leverages AI to create various types of content for Youtube shorts and social media",
    image:
      "https://i.ibb.co/93sLbnKR/477222665-3896728863881935-8280609018506937864-n.jpg",
    technologies: ["Python", "TensorFlow", "Next.js", "OpenAI API"],
  },
  {
    id: 3,
    title: "Roblox Scripts Web App",
    description:
      "Web application for roblox scripters to track their progress and share their scripts with others",
    image: "https://i.ibb.co/mCYX6WCx/Thi-t-k-ch-a-c-t-n.png",
    technologies: ["React Native", "Firebase", "Redux", "Express"],
  },
];

const ProjectsPreview: React.FC = () => {
  return (
    <section id="projects-preview" className="py-20 px-4 bg-prometheus-bg/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Featured <span className="text-prometheus-accent">Projects</span>
            </h2>
            <p className="text-gray-300 text-lg">Some of my recent work</p>
          </div>
          <Link
            to="/work"
            className="hidden md:flex items-center text-prometheus-accent hover:text-prometheus-light-blue transition-colors"
          >
            View All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-prometheus-bg rounded-xl overflow-hidden shadow-xl hover:shadow-prometheus-accent/20 transform transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-prometheus-accent/10 text-prometheus-accent text-sm rounded-full px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/work`}
                  className="inline-flex items-center text-prometheus-accent hover:text-prometheus-light-blue transition-colors"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-4 h-4 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            to="/work"
            className="bg-prometheus-accent/20 hover:bg-prometheus-accent/30 text-prometheus-accent px-8 py-3 rounded-full inline-flex items-center transition-colors duration-300"
          >
            View All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
