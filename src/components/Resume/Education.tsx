import React from "react";
import TimelineItem from "./TimelineItem";

type EducationItem = {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description: string;
  logo: string;
};

const educationData: EducationItem[] = [
  {
    id: 1,
    degree: "Bachelor of Engineering (Software Engineering) (Honours)",
    institution: "RMIT University, Vietnam",
    location: "Ho Chi Minh City, Vietnam",
    duration: "2022 - Present",
    description:
      "Software engineers apply engineering principles and systematic methods to develop programs and operate data for computers and electronic equipment. Unite the theories and methods of computer science, engineering, and mathematics to create software applications, systems, hardware devices and telecommunication networks.",
    logo: "https://jobs.diglib.org/wp-content/uploads/wpjobboard/company/821/company-logo/Dai_hoc_RMIT.jpg",
  },
  {
    id: 2,
    degree: "High School Diploma",
    institution: "Nguyen Khuyen High School",
    location: "Ho Chi Minh City, Vietnam",
    duration: "2017 - 2021",
    description: "Advanced Placement in Mathematics, Physics",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReZilPm-gHt-fiVDfALHF5d8WSqOD84d4c5w&s",
  },
];

const Education: React.FC = () => {
  return (
    <section className="mb-16 resume-section" id="education">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
        <i className="fas fa-graduation-cap mr-4 text-prometheus-accent"></i>
        Education
      </h2>

      <div className="space-y-8">
        {educationData.map((item, index) => (
          <TimelineItem
            key={item.id}
            title={item.degree}
            subtitle={item.institution}
            date={item.duration}
            location={item.location}
            logo={item.logo}
            logoAlt={item.institution}
            index={index}
          >
            <p className="text-gray-300">{item.description}</p>
          </TimelineItem>
        ))}
      </div>
    </section>
  );
};

export default Education;
