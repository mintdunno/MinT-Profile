import React from "react";
import { motion } from "framer-motion";
import { skillCategories, getSortedSkills } from "../../data/skills";

const Skills: React.FC = () => {
  const skillsByCategory = getSortedSkills();

  return (
    <section className="mb-16 resume-section" id="skills">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
        <i className="fas fa-code mr-4 text-prometheus-accent"></i>
        Technical Skills
      </h2>

      <div className="space-y-8">
        {Object.entries(skillsByCategory).map(
          ([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              className="bg-prometheus-bg/30 p-6 rounded-xl backdrop-blur-sm border border-prometheus-light-blue/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <i
                  className={`${skillCategories[category].icon} text-prometheus-accent mr-3`}
                ></i>
                {skillCategories[category].name}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categorySkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <i
                          className={`${skill.icon} text-prometheus-accent mr-2`}
                        ></i>
                        <span>{skill.name}</span>
                      </div>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden skill-progress-bar">
                      <motion.div
                        className="h-full bg-prometheus-accent"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + index * 0.1,
                        }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};

export default Skills;
