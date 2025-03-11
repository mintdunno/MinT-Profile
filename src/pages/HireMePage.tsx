import React from "react";
import Layout from "../components/Layout/Layout";

const HireMePage: React.FC = () => {
  const linkedInUrl = "https://www.linkedin.com/in/minh-tran-1a959a350/";

  return (
    <Layout>
      <section id="hire-me" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Hire Me</h2>
          <p className="text-gray-400 mb-4">Connect with me on LinkedIn!</p>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-prometheus-accent text-prometheus-bg px-6 py-3 rounded-full hover:bg-prometheus-accent-darker transition inline-flex items-center"
          >
            Visit LinkedIn Profile
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default HireMePage;
