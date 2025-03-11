import React from "react";

const ResumeHeader: React.FC = () => {
  return (
    <section className="mb-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        My <span className="text-prometheus-accent">Resume</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
        A comprehensive overview of my professional background, education, and
        skills. With over 4 years of experience in software development, I
        specialize in building modern web applications with React, TypeScript,
        and other cutting-edge technologies.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="/cv.pdf"
          className="inline-flex items-center bg-prometheus-accent hover:bg-prometheus-accent-darker text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-prometheus-accent/30"
          download
        >
          Download CV
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
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

        <a
          href="mailto:your.email@example.com"
          className="inline-flex items-center bg-transparent border-2 border-prometheus-accent text-prometheus-accent hover:bg-prometheus-accent/10 px-6 py-3 rounded-full font-medium transition-all duration-300"
        >
          Contact Me
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default ResumeHeader;
