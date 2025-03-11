import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "../../context/AppContext";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useAppContext();
  const isDark = theme === "dark";

  return (
    <motion.button
      className="theme-toggle-button relative w-20 h-10 rounded-full p-1 flex items-center justify-between overflow-hidden"
      onClick={toggleTheme}
      style={{
        background: isDark
          ? "linear-gradient(to right, #0f172a, #1e293b)"
          : "linear-gradient(to right, #7dd3fc, #38bdf8)",
        boxShadow: isDark
          ? "0 0 10px rgba(0, 0, 0, 0.5) inset"
          : "0 0 10px rgba(125, 211, 252, 0.5) inset",
      }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Light mode icons */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {!isDark && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute"
          >
            {/* Clouds */}
            <motion.div
              className="absolute w-4 h-3 bg-white rounded-full blur-[1px]"
              initial={{ x: 2, y: 2 }}
              animate={{ x: 3, y: 2 }}
              transition={{ yoyo: Infinity, duration: 3, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-5 h-3 bg-white rounded-full blur-[1px]"
              initial={{ x: 9, y: 1 }}
              animate={{ x: 8, y: 1 }}
              transition={{ yoyo: Infinity, duration: 4, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-4 h-2 bg-white/80 rounded-full blur-[1px]"
              initial={{ x: 14, y: 5 }}
              animate={{ x: 13, y: 5 }}
              transition={{ yoyo: Infinity, duration: 2.5, ease: "easeInOut" }}
            />
          </motion.div>
        )}

        {/* Dark mode icons */}
        {isDark && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Stars */}
            <motion.div
              className="absolute w-1.5 h-1.5 bg-white rounded-full"
              style={{ left: "30%", top: "20%" }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{ left: "45%", top: "50%" }}
              animate={{ opacity: [0.7, 0.3, 0.7] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{ left: "60%", top: "25%" }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute w-1.5 h-1.5 bg-white rounded-full"
              style={{ left: "75%", top: "40%" }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{
                repeat: Infinity,
                duration: 2.2,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        )}
      </div>

      {/* Sun Icon */}
      <motion.div
        className="absolute left-2 z-30 text-yellow-300"
        animate={{ opacity: isDark ? 0.3 : 1 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          <path d="M12 1a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1zm0 18a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zM23 11a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2h2zM4 12a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1zm17.7-6.3a1 1 0 0 1 0 1.4l-1.4 1.4a1 1 0 1 1-1.4-1.4l1.4-1.4a1 1 0 0 1 1.4 0zM7 16.7a1 1 0 0 1-1.4 1.4l-1.4-1.4a1 1 0 0 1 1.4-1.4l1.4 1.4zm12.7 1.4a1 1 0 0 1-1.4-1.4l1.4-1.4a1 1 0 0 1 1.4 1.4l-1.4 1.4zM7 7.3A1 1 0 0 1 5.6 5.9l1.4-1.4a1 1 0 0 1 1.4 1.4L7 7.3z" />
        </svg>
      </motion.div>

      {/* Moon Icon */}
      <motion.div
        className="absolute right-4 z-30 text-blue-200"
        animate={{ opacity: isDark ? 1 : 0.3 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12.3 22h-.1a10.31 10.31 0 0 1-7.34-3.15 10.46 10.46 0 0 1-.26-14 10.13 10.13 0 0 1 4-2.74 1 1 0 0 1 1.06.22 1 1 0 0 1 .24 1 8.4 8.4 0 0 0 1.94 8.81 8.47 8.47 0 0 0 8.83 1.94 1 1 0 0 1 1.27 1.29A10.16 10.16 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3z" />
        </svg>
      </motion.div>

      {/* Animated Slider */}
      <motion.div
        className="z-20 absolute w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
        initial={false}
        animate={{
          x: isDark ? "calc(100% + 11px)" : "1px",
          backgroundColor: isDark ? "#334155" : "#fef9c3",
          boxShadow: isDark
            ? "0 0 5px rgba(255, 255, 255, 0.2), 0 0 10px rgba(255, 255, 255, 0.1)"
            : "0 0 5px rgba(250, 204, 21, 0.7), 0 0 10px rgba(250, 204, 21, 0.5)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
          duration: 0.2,
        }}
      >
        {/* Sun rays or Moon craters */}
        <AnimatePresence mode="wait">
          {!isDark ? (
            <motion.div
              key="sun"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 180 }}
              exit={{ scale: 0 }}
              className="w-full h-full relative"
              transition={{
                duration: 0.5,
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
              }}
            >
              <motion.div className="sun-rays absolute inset-0" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="w-full h-full relative"
            >
              <motion.div
                className="absolute rounded-full bg-gray-400/20"
                style={{ width: "3px", height: "3px", top: "25%", left: "45%" }}
              />
              <motion.div
                className="absolute rounded-full bg-gray-400/30"
                style={{ width: "4px", height: "4px", top: "35%", left: "65%" }}
              />
              <motion.div
                className="absolute rounded-full bg-gray-400/20"
                style={{ width: "3px", height: "3px", top: "55%", left: "35%" }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Focus ring for accessibility */}
      <span className="sr-only">
        {isDark ? "Switch to light mode" : "Switch to dark mode"}
      </span>
    </motion.button>
  );
};

export default ThemeToggle;
