import React from "react";
import { useLocalization } from "../../context/LocalizationContext";

const ProfileSection: React.FC = () => {
  const { t } = useLocalization();

  return (
    <section
      id="home"
      className="py-20 md:py-32 px-4 flex flex-col md:flex-row items-center max-w-7xl mx-auto"
    >
      <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0 md:pr-12">
        <h2 className="text-xl md:text-2xl text-prometheus-light-blue font-medium mb-3">
          {t("job.title")}
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {t("greeting").split(" Minh Tran")[0]}{" "}
          <span className="text-prometheus-accent">Minh Tran</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl">
          Skilled Software Engineer who crafts smart, scalable solutions with
          clean code. I tackle challenges with enthusiasm, enhancing performance
          and user experience in every project.
        </p>
        <div className="flex flex-col sm:flex-row items-center md:items-start space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="/cv.pdf"
            className="bg-prometheus-accent hover:bg-prometheus-accent-darker text-prometheus-bg px-8 py-4 rounded-full text-lg font-medium transition duration-300 transform hover:scale-105 inline-flex items-center shadow-lg shadow-prometheus-accent/20"
            aria-label="Download CV"
          >
            {t("download.cv")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </a>
          <div className="flex space-x-5">
            <SocialLink
              href="https://github.com/mintdunno"
              icon="fa-github"
              label="GitHub Profile"
            />
            <SocialLink
              href="https://www.linkedin.com/in/minh-tran-1a959a350/"
              icon="fa-linkedin"
              label="LinkedIn Profile"
            />
            <SocialLink
              href="https://youtube.com/"
              icon="fa-youtube"
              label="YouTube Channel"
            />
            <SocialLink
              href="https://twitter.com/"
              icon="fa-twitter"
              label="Twitter Profile"
            />
          </div>
        </div>
      </div>
      <div className="md:w-1/2 relative">
        <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96">
          {/* Background decorative elements */}
          <div className="absolute -z-10 w-full h-full rounded-full bg-prometheus-accent/20 blur-3xl"></div>
          <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full border-2 border-prometheus-accent/30 animate-spin-slow"></div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full border-4 border-prometheus-light-blue/20 animate-spin-slow-reverse"></div>

          {/* Main profile image with effects */}
          <div className="relative w-full h-full">
            <img
              src="/profile.jpg"
              alt="Minh Tran - Profile"
              className="rounded-full w-full h-full object-cover border-[5px] border-prometheus-bg shadow-2xl shadow-prometheus-accent/30 avatar-border hover:avatar-hover"
            />

            {/* Accent elements */}
            <div className="absolute -bottom-5 -right-5 bg-prometheus-accent text-white text-xl p-4 rounded-full shadow-lg">
              <i className="fas fa-code"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component for social links with hover effects
const SocialLink: React.FC<{
  href: string;
  icon: string;
  label: string;
}> = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      className="text-prometheus-light-blue hover:text-prometheus-accent transition-colors duration-300 text-3xl transform hover:scale-110"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={`fab ${icon}`}></i>
    </a>
  );
};

export default ProfileSection;
