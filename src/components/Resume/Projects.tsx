import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getKeyProjects } from "../../data/projects";

const Projects: React.FC = () => {
  // Use the key projects from the central data source
  const keyProjects = getKeyProjects();

  // Responsive states
  const [isMobile, setIsMobile] = useState(false);
  const [projectsPerSlide, setProjectsPerSlide] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Update projectsPerSlide based on screen width
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setProjectsPerSlide(mobile ? 1 : 3);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset current slide when projects per slide changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [projectsPerSlide]);

  const totalSlides = Math.ceil(keyProjects.length / projectsPerSlide);

  // Navigation functions
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Get current projects to display
  const currentProjects = keyProjects.slice(
    currentSlide * projectsPerSlide,
    (currentSlide + 1) * projectsPerSlide
  );

  return (
    <section className="mb-16" id="projects">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
        <i className="fas fa-project-diagram mr-4 text-prometheus-accent"></i>
        Key Projects
      </h2>

      <div className="relative">
        {/* Slider navigation buttons */}
        {keyProjects.length > projectsPerSlide && (
          <>
            <button
              onClick={goToPrevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-prometheus-bg/60 hover:bg-prometheus-bg/80 text-white rounded-full w-9 h-9 md:w-10 md:h-10 flex items-center justify-center shadow-lg transition-all duration-300"
              aria-label="Previous projects"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              onClick={goToNextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-prometheus-bg/60 hover:bg-prometheus-bg/80 text-white rounded-full w-9 h-9 md:w-10 md:h-10 flex items-center justify-center shadow-lg transition-all duration-300"
              aria-label="Next projects"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </>
        )}

        {/* Projects grid with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`slide-${currentSlide}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-prometheus-bg/30 rounded-xl overflow-hidden border border-prometheus-light-blue/10 hover:border-prometheus-accent/30 transition-all duration-300 h-full flex flex-col project-card mx-auto md:mx-0 max-w-md md:max-w-full"
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
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2plY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";
                    }}
                  />
                </div>

                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
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

                    <a
                      href={project.liveUrl || project.githubUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-prometheus-accent inline-flex items-center hover:text-prometheus-accent-darker transition-colors"
                    >
                      View Project
                      <i className="fas fa-arrow-right ml-2 text-xs"></i>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination indicators */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentSlide === index
                    ? "bg-prometheus-accent w-6"
                    : "bg-gray-500 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
