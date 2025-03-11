import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project, projects } from "../../data/projects";

interface ProjectNavigationProps {
  project: Project;
  totalProjects: number;
  currentIndex: number;
  onNextClick: () => void;
  onPrevClick: () => void;
}

const ProjectNavigation: React.FC<ProjectNavigationProps> = ({
  project,
  totalProjects,
  currentIndex,
  onNextClick,
  onPrevClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative h-full">
      <motion.div
        className="bg-prometheus-bg/30 rounded-xl overflow-hidden border border-prometheus-light-blue/10 h-[400px] md:h-[500px] relative project-nav-container"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 12,
          duration: 0.8,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.7 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="absolute inset-0 bg-black/30 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 0.2 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.05, transition: { duration: 5 } }}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://placehold.co/800x600/244855/FBE9D0?text=Project+Image";
              }}
            />

            <motion.div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 z-20">
              <motion.div
                className="text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <motion.p
                  className="font-semibold text-lg flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Project {currentIndex + 1} of {totalProjects}
                  <motion.span
                    className="ml-2 text-prometheus-accent"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <i className="fas fa-circle text-xs"></i>
                  </motion.span>
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation controls */}
        <motion.div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <ProjectNavButton onClick={onPrevClick} direction="prev" />
          <ProjectNavButton onClick={onNextClick} direction="next" />
        </motion.div>
      </motion.div>

      {/* Project thumbnails */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[0, 1, 2].map((offset) => {
          const index = (currentIndex + offset) % totalProjects;
          return (
            <motion.div
              key={index}
              className={`h-20 rounded-md overflow-hidden cursor-pointer transition-all card-shadow ${
                offset === 0
                  ? "ring-2 ring-prometheus-accent"
                  : "opacity-60 hover:opacity-100"
              }`}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                offset !== 0 && (offset === 1 ? onNextClick() : onPrevClick())
              }
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.8 + offset * 0.1 },
              }}
            >
              <img
                src={projects[index].image}
                alt={`Project thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

interface ProjectNavButtonProps {
  onClick: () => void;
  direction: "prev" | "next";
}

const ProjectNavButton: React.FC<ProjectNavButtonProps> = ({
  onClick,
  direction,
}) => {
  return (
    <motion.button
      onClick={onClick}
      className="nav-button bg-gray-800/80 hover:bg-prometheus-accent text-white w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors border border-white/20 shadow-lg"
      whileHover={{
        scale: 1.1,
        backgroundColor: "rgba(230, 72, 51, 0.8)",
      }}
      whileTap={{ scale: 0.95 }}
      aria-label={direction === "prev" ? "Previous project" : "Next project"}
    >
      <motion.i
        className={`fas fa-chevron-${
          direction === "prev" ? "left" : "right"
        } text-lg`}
        animate={{ x: direction === "prev" ? [-3, 0, -3] : [3, 0, 3] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      />
    </motion.button>
  );
};

export default ProjectNavigation;
