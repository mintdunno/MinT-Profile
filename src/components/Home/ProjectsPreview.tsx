import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFeaturedProjects } from "../../data/projects";
import { motion, AnimatePresence } from "framer-motion";

const ProjectsPreview: React.FC = () => {
  // Use the featured projects from the central data source
  const featuredProjects = getFeaturedProjects();

  // Responsive states
  // Remove the unused isMobile state, since it's only set but never read
  const [projectsPerSlide, setProjectsPerSlide] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Update projectsPerSlide based on screen width
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      // We don't need to track isMobile separately since it's not used
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

  const totalSlides = Math.ceil(featuredProjects.length / projectsPerSlide);

  // Navigation functions
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Get current projects to display
  const currentProjects = featuredProjects.slice(
    currentSlide * projectsPerSlide,
    (currentSlide + 1) * projectsPerSlide
  );

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

        <div className="relative">
          {/* Slider navigation buttons */}
          {featuredProjects.length > projectsPerSlide && (
            <>
              <button
                onClick={goToPrevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 z-10 bg-prometheus-bg/60 hover:bg-prometheus-bg/80 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg transition-all duration-300"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                onClick={goToNextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 z-10 bg-prometheus-bg/60 hover:bg-prometheus-bg/80 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg transition-all duration-300"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </>
          )}

          {/* Projects grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`slide-${currentSlide}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            >
              {currentProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-prometheus-bg rounded-xl overflow-hidden shadow-xl hover:shadow-prometheus-accent/20 transform transition-all duration-300 hover:-translate-y-2 group mx-auto md:mx-0 max-w-md md:max-w-full"
                >
                  <div className="relative overflow-hidden h-52">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2plY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";
                      }}
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
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="bg-prometheus-accent/10 text-prometheus-accent text-sm rounded-full px-3 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-gray-400 flex items-center">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
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
            </motion.div>
          </AnimatePresence>

          {/* Pagination indicators */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentSlide === index
                      ? "bg-prometheus-accent w-8"
                      : "bg-gray-500 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
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
