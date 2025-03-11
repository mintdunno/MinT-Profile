import React from "react";
import { motion } from "framer-motion";

type Language = {
  id: number;
  name: string;
  proficiency: number;
  level: string;
  flag: string;
};

const languages: Language[] = [
  {
    id: 1,
    name: "English",
    proficiency: 65,
    level: "Native/Fluent",
    flag: "🇺🇸",
  },
  {
    id: 2,
    name: "Vietnamese",
    proficiency: 100,
    level: "Native",
    flag: "🇻🇳",
  },
];

const Languages: React.FC = () => {
  return (
    <section className="mb-16 md:mb-0" id="languages">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
        <i className="fas fa-language mr-4 text-prometheus-accent"></i>
        Languages
      </h2>

      <div className="space-y-4">
        {languages.map((language, index) => (
          <motion.div
            key={language.id}
            className="bg-prometheus-bg/30 p-4 rounded-xl border border-prometheus-light-blue/10 hover:border-prometheus-accent/30 transition-all duration-300 card-shadow"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-3">{language.flag}</span>
              <h3 className="font-semibold">{language.name}</h3>
              <span className="ml-auto text-sm bg-prometheus-accent/10 text-prometheus-accent px-2 py-0.5 rounded-full">
                {language.level}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-prometheus-accent"
                initial={{ width: 0 }}
                animate={{ width: `${language.proficiency}%` }}
                transition={{ duration: 1, delay: index * 0.2 }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
