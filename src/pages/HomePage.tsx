import React, { useEffect } from "react";
import ProfileSection from "../components/Home/ProfileSection";
import StatsSection from "../components/Home/StatsSection";
import SkillsSection from "../components/Home/SkillsSection";
import ProjectsPreview from "../components/Home/ProjectsPreview";
import ContactCTA from "../components/Home/ContactCTA";
import Layout from "../components/Layout/Layout";
import { enhanceTransitionEffects } from "../utils/animations";

const HomePage: React.FC = () => {
  // const { t } = useLocalization();

  useEffect(() => {
    document.title = "MinT Portfolio - Software Engineer";

    // Apply enhanced transition effects
    enhanceTransitionEffects();
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-prometheus-bg to-gray-900">
        <ProfileSection />
        <StatsSection />
        <SkillsSection />
        <ProjectsPreview />
        <ContactCTA />
      </div>
    </Layout>
  );
};

export default HomePage;
