import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import ProjectDetails from "../components/Work/ProjectDetails";
import ProjectNavigation from "../components/Work/ProjectNavigation";
import { projects } from "../data/projects";

const WorkPage: React.FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  useEffect(() => {
    // Debug logging to help identify issues
    console.log("Projects loaded:", projects);
    console.log("Current project:", projects[currentProjectIndex]);
  }, [currentProjectIndex]);

  // Make sure we have projects before rendering
  if (!projects || projects.length === 0) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Projects Coming Soon</h2>
          <p className="text-gray-400">
            We're currently working on adding projects to this page.
          </p>
        </div>
      </Layout>
    );
  }

  const currentProject = projects[currentProjectIndex];

  const goToNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            My <span className="text-prometheus-accent">Projects</span>
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-prometheus-accent"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            ></motion.div>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl">
            Explore my portfolio of projects, showcasing my skills and
            experience in software development. Each project represents a unique
            challenge and solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <AnimatePresence mode="wait">
            <ProjectDetails
              key={`detail-${currentProject.id}`}
              project={currentProject}
            />
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <ProjectNavigation
              key={`nav-${currentProject.id}`}
              project={currentProject}
              totalProjects={projects.length}
              currentIndex={currentProjectIndex}
              onNextClick={goToNextProject}
              onPrevClick={goToPrevProject}
            />
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <i className="fas fa-folder mr-3 text-prometheus-accent"></i>
            All Projects ({projects.length})
            <motion.span
              className="ml-3 h-px bg-prometheus-accent"
              initial={{ width: 0 }}
              animate={{ width: "30%" }}
              transition={{ delay: 0.8, duration: 0.8 }}
            ></motion.span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`bg-prometheus-bg/30 rounded-xl overflow-hidden border border-prometheus-light-blue/10 transition-all duration-300 cursor-pointer relative project-card ${
                  currentProjectIndex === index
                    ? "border-prometheus-accent"
                    : "hover:border-prometheus-accent/30"
                }`}
                whileHover={{
                  y: -10,
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                onClick={() => setCurrentProjectIndex(index)}
              >
                <div className="h-40 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    onError={(e) => {
                      // Fallback for image loading errors
                      (e.target as HTMLImageElement).src =
                        "https://placehold.co/400x300/244855/FBE9D0?text=Project+Image";
                    }}
                  />
                  {currentProjectIndex === index && (
                    <motion.div
                      className="absolute top-3 right-3 bg-prometheus-accent text-white p-2 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      }}
                    >
                      <i className="fas fa-eye"></i>
                    </motion.div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 flex items-center">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-prometheus-accent/10 text-prometheus-accent text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-gray-400">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default WorkPage;
