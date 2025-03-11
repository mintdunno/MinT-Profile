import React from "react";
import { Link } from "react-router-dom";
import { useLocalization } from "../../context/LocalizationContext";

const ProfileSection: React.FC = () => {
  const { t } = useLocalization();

  return (
    <section
      id="home"
      className="py-20 md:py-32 px-4 flex flex-col md:flex-row items-center max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Animated background with shifting colors - VERY OBVIOUS NOW */}
      <div className="absolute inset-0 animated-bg-gradient"></div>
      
      {/* Very obvious animated light beam */}
      <div className="profile-highlight-beam"></div>
      
      {/* Additional animated color orb specific to profile */}
      <div className="profile-color-orb"></div>
      
      {/* Enhanced light mode professional gradient background elements */}
      <div className="absolute inset-0 opacity-0 light:opacity-100 bg-gradient-to-br from-white via-[#f8fafc] to-[#f0f7fa] z-[-2]"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-0 light:opacity-10 bg-pattern z-[-1]"></div>
      
      {/* Accent gradient elements */}
      <div className="absolute top-0 -right-16 h-96 w-96 opacity-0 light:opacity-25 bg-gradient-to-bl from-prometheus-accent/20 via-rose-100/20 to-transparent rounded-full blur-2xl z-[-1]"></div>
      <div className="absolute bottom-0 left-0 w-full h-48 opacity-0 light:opacity-30 bg-gradient-to-t from-blue-50 to-transparent z-[-1]"></div>
      <div className="absolute top-1/3 left-0 h-32 w-32 opacity-0 light:opacity-20 bg-gradient-to-r from-prometheus-accent/20 to-transparent rounded-full blur-xl z-[-1]"></div>
      
      {/* Animated color orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/20 dark:bg-blue-400/10 rounded-full animate-float-slow blur-2xl z-[-1]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-400/20 dark:bg-purple-400/10 rounded-full animate-float-slow-reverse blur-2xl z-[-1]"></div>
      <div className="absolute top-3/4 right-1/3 w-24 h-24 bg-amber-400/20 dark:bg-amber-400/10 rounded-full animate-float-slow2 blur-2xl z-[-1]"></div>
      
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
          <Link
            to="/resume"
            className="resume-button-premium px-8 py-4 rounded-full text-lg font-semibold transition-all duration-500 inline-flex items-center shadow-lg relative overflow-hidden group"
            aria-label="View Resume"
          >
            {/* Animated background for button */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#ff7e5f] via-[#feb47b] to-[#ff7e5f] bg-size-200 animate-gradient-x z-0"></span>
            
            {/* Button text */}
            <span className="relative z-10 flex items-center text-white">
              <span className="mr-2">View Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
            
            {/* Animated shine effect */}
            <span className="absolute inset-0 w-full h-full shine-effect"></span>
            
            {/* Hover glow effect */}
            <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/10 via-white/5 to-transparent"></span>
          </Link>
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
          <div className="absolute -z-10 w-full h-full rounded-full bg-prometheus-accent/20 blur-3xl light:bg-prometheus-accent/10 light:blur-2xl"></div>
          <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full border-2 border-prometheus-accent/30 animate-spin-slow"></div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full border-4 border-prometheus-light-blue/20 animate-spin-slow-reverse"></div>

          {/* Enhanced profile image with interactive effects */}
          <div className="relative w-full h-full profile-image-container group cursor-pointer">
            {/* Animated background glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-prometheus-accent/30 to-prometheus-light-blue/30 blur-xl transform scale-105 group-hover:scale-125 transition-all duration-700 opacity-60 group-hover:opacity-80 group-hover:animate-pulse-slow"></div>
            
            {/* Outer ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-prometheus-accent via-prometheus-light-blue to-prometheus-accent opacity-0 group-hover:opacity-100 blur-md transition-all duration-700 animate-spin-very-slow"></div>
            
            {/* Multiple particle effects */}
            <div className="particles-container">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`particle particle-${i+1} opacity-0 group-hover:opacity-100`}></span>
              ))}
            </div>
            
            {/* Main profile image */}
            <img
              src="/profile.jpg"
              alt="Minh Tran - Profile"
              className="rounded-full w-full h-full object-cover border-[5px] border-prometheus-bg shadow-2xl shadow-prometheus-accent/30 avatar-border group-hover:avatar-hover light:border-white light:shadow-gray-200/30 relative z-10 transition-all duration-500"
            />

            {/* Code icon with enhanced animation */}
            <div className="absolute -bottom-5 -right-5 bg-prometheus-accent text-white text-xl p-4 rounded-full shadow-lg light:shadow-md transform group-hover:rotate-[360deg] group-hover:scale-110 transition-all duration-700">
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
