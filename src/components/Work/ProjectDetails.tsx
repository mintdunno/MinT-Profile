import React from "react";
import { motion } from "framer-motion";
import { Project } from "../../data/projects";

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: { duration: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      key={project.id}
      className="bg-prometheus-bg/30 rounded-xl p-6 backdrop-blur-sm border border-prometheus-light-blue/10 overflow-hidden card-shadow"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h2
        className="text-2xl md:text-3xl font-bold mb-4 inline-block"
        variants={itemVariants}
      >
        {project.title}
        <span className="block h-1 mt-2 bg-gradient-to-r from-prometheus-accent to-prometheus-light-blue transform scale-x-0 animate-scale-x-100"></span>
      </motion.h2>

      <div className="space-y-6">
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <i className="fas fa-info-circle text-prometheus-accent mr-2"></i>
            Project Overview
          </h3>
          <p className="text-gray-300 leading-relaxed">{project.description}</p>
        </motion.div>

        {project.goals && (
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-prometheus-accent/20"></div>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <i className="fas fa-bullseye text-prometheus-accent mr-2"></i>
              Project Goals
            </h3>
            <ul className="ml-6 space-y-2">
              {project.goals.map((goal, index) => (
                <motion.li
                  key={index}
                  className="pl-4 relative text-gray-300"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.5 + index * 0.1 },
                  }}
                >
                  <span className="absolute left-0 top-2.5 w-2 h-2 bg-prometheus-accent rounded-full"></span>
                  {goal}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <i className="fas fa-code text-prometheus-accent mr-2"></i>
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={index}
                className="bg-prometheus-accent/10 text-prometheus-accent px-3 py-1 rounded-full text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { delay: 0.7 + index * 0.05 },
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(230, 72, 51, 0.2)",
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 pt-2"
          variants={itemVariants}
        >
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center github-button-gradient text-white dark:text-white px-6 py-3 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-prometheus-accent/20"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <i className="fab fa-github mr-2"></i>
              View Source Code
            </motion.a>
          )}

          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-prometheus-accent hover:bg-prometheus-accent-darker text-white px-6 py-3 rounded-md transition-colors hover:shadow-lg hover:shadow-prometheus-accent/30"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <i className="fas fa-external-link-alt mr-2"></i>
              View Live Demo
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
