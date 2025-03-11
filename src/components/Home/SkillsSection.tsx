import React from "react";
import { skills } from "../../data/skills";

const SkillsSection: React.FC = () => {
  // Take the top skills from each category for the home page display
  const topSkills = skills.slice(0, 12);

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Technical <span className="text-prometheus-accent">Skills</span>
        </h2>
        <p className="text-gray-300 text-center mb-16 text-lg max-w-2xl mx-auto">
          Technologies and tools I've mastered over the years
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {topSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-prometheus-bg/50 p-6 rounded-xl shadow-lg border border-prometheus-light-blue/10 hover:border-prometheus-accent/30 transition-all duration-300 group"
            >
              <div className="text-4xl text-prometheus-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className={skill.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-prometheus-accent"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-1 text-sm text-gray-400">
                <span>Proficiency</span>
                <span>{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
