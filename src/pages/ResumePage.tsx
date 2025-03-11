import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import ResumeHeader from "../components/Resume/ResumeHeader";
import ResumeStats from "../components/Resume/ResumeStats";
import Education from "../components/Resume/Education";
import Experience from "../components/Resume/Experience";
import Certifications from "../components/Resume/Certifications";
import Projects from "../components/Resume/Projects";
import Languages from "../components/Resume/Languages";
import Skills from "../components/Resume/Skills";
import { motion } from "framer-motion";

type TabType =
  | "all"
  | "education"
  | "experience"
  | "certifications"
  | "projects"
  | "languages"
  | "skills";

const ResumePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted state to true after component mounts
    // This helps with animations
    setMounted(true);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "education":
        return <Education />;
      case "experience":
        return <Experience />;
      case "certifications":
        return <Certifications />;
      case "projects":
        return <Projects />;
      case "languages":
        return <Languages />;
      case "skills":
        return <Skills />;
      default:
        return (
          <>
            <ResumeStats />
            <Education />
            <Experience />
            <Skills />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Certifications />
              <Languages />
            </div>
            <Projects />
          </>
        );
    }
  };

  return (
    <Layout>
      <motion.div className="max-w-5xl mx-auto resume-page">
        <ResumeHeader />

        {/* Tab navigation */}
        <div className="mb-12 overflow-x-auto pb-2">
          <div className="flex space-x-2 md:space-x-4 min-w-max">
            <TabButton
              active={activeTab === "all"}
              onClick={() => setActiveTab("all")}
            >
              All Sections
            </TabButton>
            <TabButton
              active={activeTab === "education"}
              onClick={() => setActiveTab("education")}
            >
              Education
            </TabButton>
            <TabButton
              active={activeTab === "experience"}
              onClick={() => setActiveTab("experience")}
            >
              Experience
            </TabButton>
            <TabButton
              active={activeTab === "skills"}
              onClick={() => setActiveTab("skills")}
            >
              Skills
            </TabButton>
            <TabButton
              active={activeTab === "certifications"}
              onClick={() => setActiveTab("certifications")}
            >
              Certifications
            </TabButton>
            <TabButton
              active={activeTab === "projects"}
              onClick={() => setActiveTab("projects")}
            >
              Projects
            </TabButton>
            <TabButton
              active={activeTab === "languages"}
              onClick={() => setActiveTab("languages")}
            >
              Languages
            </TabButton>
          </div>
        </div>

        {/* Resume content */}
        <motion.div
          className="animate-fade-in resume-content"
          key={activeTab} // This will cause re-render animation when tab changes
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderContent()}
        </motion.div>

        {/* Print resume button - fixed position */}
        {mounted && (
          <motion.div
            className="fixed bottom-6 right-6 hide-print"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
          >
            <button
              onClick={() => window.print()}
              className="bg-prometheus-accent hover:bg-prometheus-accent-darker text-white p-3 rounded-full shadow-lg hover:shadow-prometheus-accent/30 transition-all duration-300"
              aria-label="Print Resume"
              title="Print Resume"
            >
              <i className="fas fa-print text-xl"></i>
            </button>
          </motion.div>
        )}
      </motion.div>
    </Layout>
  );
};

type TabButtonProps = {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const TabButton: React.FC<TabButtonProps> = ({ active, onClick, children }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 tab-button ${
        active
          ? "bg-prometheus-accent text-white shadow-lg shadow-prometheus-accent/20"
          : "bg-prometheus-bg/30 hover:bg-prometheus-accent/10 text-prometheus-text"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ResumePage;
