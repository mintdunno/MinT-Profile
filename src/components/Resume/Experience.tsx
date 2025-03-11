import React from "react";
import TimelineItem from "./TimelineItem";

type ExperienceItem = {
  id: number;
  position: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
  logo: string;
};

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    position: "Webapp Developer (Full Stack)",
    company: "Freelancer",
    location: "Remote",
    duration: "2024 - Present",
    responsibilities: [
      "Had 8 customers, and all of them are satisfied with my work",
      "Design and develop responsive user interfaces using HTML, CSS, and JavaScript frameworks",
      "Create and maintain server-side applications and RESTful APIs",
      "Integrate front-end components with back-end services and databases",
      "Ensure cross-platform optimization and mobile responsiveness",
      "Implement security best practices and authentication flows",
      "Perform testing and debugging across various browsers and devices",
      "Collaborate with clients to gather requirements and refine specifications",
      "Develop and maintain software documentation",
      "Stay updated with emerging web technologies and industry trends",
      "Optimize applications for maximum speed and scalability",
    ],
    technologies: [
      "React (TypeScript)",
      "Node.js",
      "Express",
      "MongoDB",
      "Supabase",
      "Firebase",
      "REST APIs",
      "Git",
      "Netlify",
      "Cloudflare",
      "Docker",
    ],
    logo: "https://btech.id/media/images/Page/2022/07/04/Full_Stack_Engineer",
  },
  {
    id: 2,
    position: "Embedded Developer (Software Engineer)",
    company: "RMIT University",
    location: "RMIT University, Vietnam",
    duration: "2022 - Present",
    responsibilities: [
      "Developed firmware and software for embedded systems and microcontrollers",
      "Designed and implemented control algorithms for mecanum wheel robots",
      "Created communication protocols between embedded systems and host computers",
      "Optimized code for resource-constrained environments",
      "Performed hardware-software integration and testing",
      "Debugged embedded systems using oscilloscopes, logic analyzer",
      "Implemented sensor fusion algorithms for robot navigation",
      "Created driver software for various sensors and actuators",
      "Developed software and games for Raspberry Pi and Arduino platforms",
      "Participated in robot design reviews and technical documentation",
    ],
    technologies: [
      "C/C++",
      "ARM Cortex-M",
      "STM32",
      "Arduino",
      "I2C/SPI/UART",
      "PWM Motor Control",
      "PID Controllers",
      "MATLAB/Simulink",
      "Python",
      "Git",
      "IMU Sensors",
    ],
    logo: "https://cdn.mos.cms.futurecdn.net/bubDzAfgoZGmZydnZFpxKK.jpg",
  },
  {
    id: 3,
    position: "Full Stack Developer",
    company: "RMIT University",
    location: "RMIT University, Vietnam",
    duration: "2022 - Present",
    responsibilities: [
      "Developed and maintained RESTful APIs using Node.js and Express",
      "Created responsive web applications using React",
      "Implemented authentication and authorization using JWT and OAuth",
      "Worked with MongoDB and PostgreSQL databases",
      "Participated in Agile development processes including daily stand-ups and sprint planning",
      "Designed and implemented microservices architecture using Docker",
      "Built and optimized database queries for both SQL and NoSQL databases",
      "Integrated third-party services including Firebase and Supabase",
      "Developed backend services with Spring Boot",
      "Implemented secure authentication flows with JWT and JWS",
    ],
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "Spring Boot",
      "MongoDB",
      "Supabase",
      "Firebase",
      "PostgreSQL",
      "SQL",
      "JWT",
      "JWS",
      "OAuth",
      "Docker",
      "Micro Services",
    ],
    logo: "https://icall.asia/wp-content/uploads/2024/03/web-app-la-gi-1.jpg",
  },
  {
    id: 4,
    position: "Full Stack Mobile App Development",
    company: "RMIT University",
    location: "RMIT University, Vietnam",
    duration: "2023 - 2023",
    responsibilities: [
      "Developed and maintained full-stack mobile applications for both Android and iOS platforms",
      "Built robust Android applications using pure Java, focusing on performance optimization and clean architecture",
      "Created native iOS applications using Swift, implementing responsive user interfaces and core functionality",
      "Developed iOS user interfaces using SwiftUI, creating modern and intuitive experiences",
      "Identified and resolved bugs in existing codebases, improving application stability and user experience",
    ],
    technologies: [
      "Java",
      "Kotlin",
      "SwiftUI",
      "Swift",
      "Supabase",
      "Firebase",
    ],
    logo: "https://miro.medium.com/v2/resize:fit:1400/1*fu3I075PGtnVEABJNRbUnw.png",
  },
];

const Experience: React.FC = () => {
  return (
    <section className="mb-16 resume-section" id="experience">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
        <i className="fas fa-briefcase mr-4 text-prometheus-accent"></i>
        Professional Experience
      </h2>

      <div className="space-y-8">
        {experienceData.map((item, index) => (
          <TimelineItem
            key={item.id}
            title={item.position}
            subtitle={item.company}
            date={item.duration}
            location={item.location}
            logo={item.logo}
            logoAlt={item.company}
            index={index}
          >
            <ul className="list-disc list-inside space-y-1 mb-4 text-gray-300">
              {item.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-prometheus-accent/10 text-prometheus-accent text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </TimelineItem>
        ))}
      </div>
    </section>
  );
};

export default Experience;
