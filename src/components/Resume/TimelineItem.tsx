import React from "react";
import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  logo?: string;
  logoAlt?: string;
  index: number;
  children?: React.ReactNode;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  date,
  location,
  logo,
  logoAlt,
  index,
  children,
}) => {
  return (
    <motion.div
      className="bg-prometheus-bg/30 p-6 rounded-xl backdrop-blur-sm border border-prometheus-light-blue/10 hover:border-prometheus-accent/30 transition-all duration-300 resume-card resume-timeline-item timeline-item-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        {logo && (
          <div className="md:w-1/6 flex-shrink-0 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-white p-2 flex items-center justify-center shadow-lg">
              <img
                src={logo}
                alt={logoAlt || subtitle}
                className="w-16 h-16 object-contain rounded-full"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://via.placeholder.com/150?text=Logo";
                }}
              />
            </div>
          </div>
        )}

        <div className={logo ? "md:w-5/6" : "w-full"}>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <h3 className="text-xl font-bold text-prometheus-accent">
              {title}
            </h3>
            <span className="text-sm bg-prometheus-accent/20 text-prometheus-accent px-3 py-1 rounded-full font-medium inline-block mt-2 md:mt-0">
              {date}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <p className="font-semibold">{subtitle}</p>
            <span className="text-gray-400 text-sm">{location}</span>
          </div>

          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
