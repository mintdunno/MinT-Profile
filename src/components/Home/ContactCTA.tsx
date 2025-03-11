import React from "react";
import { Link } from "react-router-dom";
import { useLocalization } from "../../context/LocalizationContext";

const ContactCTA: React.FC = () => {
  const { t } = useLocalization();

  return (
    <section id="contact-cta" className="py-20 px-4">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-prometheus-accent/20 to-prometheus-light-blue/20 rounded-3xl p-12 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-prometheus-accent/20 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-prometheus-light-blue/20 translate-x-1/3 translate-y-1/3 blur-3xl"></div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
          Interested in working{" "}
          <span className="text-prometheus-accent">together?</span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
          Let's discuss how I can contribute to your next project or join your
          team.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
          <Link
            to="/contact"
            className="bg-prometheus-accent hover:bg-prometheus-accent-darker text-prometheus-bg px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-prometheus-accent/30 hover:-translate-y-1"
          >
            Get In Touch
          </Link>

          <a
            href="https://www.linkedin.com/in/minh-tran-1a959a350/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-prometheus-accent hover:bg-prometheus-accent/10 text-prometheus-accent px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg"
          >
            {t("hire.me")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
