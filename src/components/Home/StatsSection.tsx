import React, { useEffect } from "react";
import { initCounterAnimations } from "../../utils/animations";

const StatsSection: React.FC = () => {
  useEffect(() => {
    // Initialize the counter animations when component mounts
    initCounterAnimations();
  }, []);

  return (
    <section id="stats" className="py-16 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatCard number={4} text="Years of experience" />
          <StatCard number={30} text="Projects completed" />
          <StatCard number={8} text="Happy Customers" />
          <StatCard number={1100} text="Code Commits" />
        </div>
      </div>
    </section>
  );
};

const StatCard: React.FC<{ number: number; text: string }> = ({
  number,
  text,
}) => {
  return (
    <div className="bg-prometheus-bg/30 p-6 md:p-8 rounded-2xl backdrop-blur-sm border border-prometheus-light-blue/20 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-prometheus-accent/10">
      <h3
        className="text-4xl md:text-5xl font-bold mb-2 text-prometheus-accent animate-count"
        data-target={number}
      >
        0
      </h3>
      <p className="text-gray-300 text-lg md:text-xl">{text}</p>
    </div>
  );
};

export default StatsSection;
