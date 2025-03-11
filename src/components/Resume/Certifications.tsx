import React from "react";
import { motion } from "framer-motion";

type Certification = {
  id: number;
  name: string;
  organization: string;
  date: string;
  icon: string;
};

const certifications: Certification[] = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    date: "2023",
    icon: "fab fa-aws",
  },
  {
    id: 2,
    name: "Google Cloud Professional Developer",
    organization: "Google",
    date: "2022",
    icon: "fab fa-google",
  },
  {
    id: 3,
    name: "React Developer Certification",
    organization: "Meta",
    date: "2021",
    icon: "fab fa-react",
  },
  {
    id: 4,
    name: "TypeScript Advanced Certification",
    organization: "Microsoft",
    date: "2022",
    icon: "fab fa-microsoft",
  },
];

const Certifications: React.FC = () => {
  return (
    <section className="mb-16 md:mb-0" id="certifications">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
        <i className="fas fa-certificate mr-4 text-prometheus-accent"></i>
        Certifications
      </h2>

      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            className="bg-prometheus-bg/30 p-4 rounded-xl border border-prometheus-light-blue/10 hover:border-prometheus-accent/30 transition-all duration-300 flex items-center gap-4 card-shadow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-2xl text-prometheus-accent bg-prometheus-accent/10 w-12 h-12 rounded-full flex items-center justify-center">
              <i className={cert.icon}></i>
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold">{cert.name}</h3>
              <div className="flex justify-between text-sm text-gray-400">
                <span>{cert.organization}</span>
                <span>{cert.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
