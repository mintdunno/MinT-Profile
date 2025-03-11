import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { initCounterAnimations } from "../../utils/animations";

type StatType = {
  id: number;
  value: number;
  label: string;
  icon: string;
};

const stats: StatType[] = [
  {
    id: 1,
    value: 4,
    label: "Years Experience",
    icon: "fas fa-history",
  },
  {
    id: 2,
    value: 26,
    label: "Projects",
    icon: "fas fa-project-diagram",
  },
  {
    id: 3,
    value: 8,
    label: "Happy Clients",
    icon: "fas fa-smile",
  },
  {
    id: 4,
    value: 0,
    label: "Awards",
    icon: "fas fa-award",
  },
];

const ResumeStats: React.FC = () => {
  useEffect(() => {
    // Initialize counter animations
    initCounterAnimations();
  }, []);

  return (
    <section className="mb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            className="bg-prometheus-accent/10 rounded-xl p-6 text-center resume-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex justify-center mb-3">
              <span className="text-2xl bg-prometheus-accent w-12 h-12 rounded-full flex items-center justify-center text-white">
                <i className={stat.icon}></i>
              </span>
            </div>
            <h3
              className="text-3xl font-bold text-prometheus-accent mb-1 animate-count"
              data-target={stat.value}
            >
              0
            </h3>
            <p className="text-gray-300 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ResumeStats;
