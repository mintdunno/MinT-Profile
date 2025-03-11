export interface Project {
  id: number;
  title: string;
  description: string;
  goals?: string[];
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean; // Flag for homepage featured projects
  keyProject?: boolean; // Flag for resume key projects
}

// Make sure these placeholder images are accessible or replace with actual images
export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for managing online stores with real-time analytics, inventory management, and customer insights. The application provides store owners with tools to monitor sales, track inventory levels, and analyze customer behavior.",
    goals: [
      "Create an intuitive interface for store management",
      "Implement real-time data visualization with Charts.js",
      "Develop efficient inventory tracking system",
      "Build responsive design for all device types",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "MongoDB",
      "Chart.js",
      "Tailwind CSS",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRhc2hib2FyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    githubUrl: "https://github.com/username/ecommerce-dashboard",
    liveUrl: "https://ecommerce-dashboard-demo.netlify.app",
    featured: true,
    keyProject: true,
  },
  {
    id: 2,
    title: "AI Content Generator",
    description:
      "An AI-powered platform that leverages machine learning to create various types of content for marketing and social media campaigns. Users can generate blog posts, social media captions, and advertising copy with customizable parameters.",
    goals: [
      "Integrate OpenAI API for content generation",
      "Create user-friendly interface for customizing AI parameters",
      "Implement content history and favorites system",
      "Build export functionality for multiple formats",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "React",
      "C++",
      "OpenAI API",
      "Redux",
      "Express",
    ],
    image:
      "https://images.unsplash.com/photo-1677329661610-5d4dfa5c74e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWklMjBnZW5lcmF0aXZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    githubUrl: "https://github.com/username/ai-content-generator",
    liveUrl: "https://ai-content-generator.herokuapp.com",
    featured: true,
    keyProject: true,
  },
  {
    id: 3,
    title: "Fitness Tracking App",
    description:
      "A mobile application for tracking workouts, nutrition, and personal fitness goals with social features. The app allows users to create custom workout plans, track daily calorie intake, and connect with friends for accountability.",
    goals: [
      "Design intuitive workout and nutrition tracking interface",
      "Implement social networking features for user engagement",
      "Create progress visualization tools",
      "Ensure cross-platform compatibility",
    ],
    technologies: [
      "React Native",
      "SwiftUI",
      "Firebase",
      "Redux",
      "Express",
      "Chart.js",
    ],
    image:
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zml0bmVzcyUyMGFwcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    githubUrl: "https://github.com/username/fitness-tracker",
    liveUrl: "https://fitnesstrack.demo.app",
    featured: true,
    keyProject: false,
  },
  {
    id: 4,
    title: "Smart Home Control System",
    description:
      "An IoT-based smart home control system that allows users to monitor and control various devices in their home from a single interface. The system integrates with popular smart home devices and provides automation capabilities.",
    goals: [
      "Create a unified interface for multiple device types",
      "Implement secure authentication and device management",
      "Design automation rules engine",
      "Optimize performance for real-time updates",
    ],
    technologies: [
      "React",
      "Node.js",
      "MQTT",
      "C/C++",
      "WebSockets",
      "MongoDB",
      "Docker",
    ],
    image:
      "https://images.unsplash.com/photo-1558227756-8d319692b94e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    githubUrl: "https://github.com/username/smart-home-control",
    featured: true,
    keyProject: true,
  },
  {
    id: 5,
    title: "Virtual Reality Educational Platform",
    description:
      "An educational platform that utilizes virtual reality to create immersive learning experiences. The platform covers subjects from science to history with interactive 3D models and environments that students can explore.",
    goals: [
      "Develop immersive educational environments",
      "Create intuitive VR navigation controls",
      "Implement collaborative learning features",
      "Design adaptive learning paths based on user progress",
    ],
    technologies: [
      "Unity",
      "C#",
      "WebXR",
      "React",
      "Node.js",
      "Three.js",
      "Firebase",
    ],
    image:
      "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmlydHVhbCUyMHJlYWxpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    githubUrl: "https://github.com/username/vr-education",
    liveUrl: "https://vr-education-demo.io",
    featured: true,
    keyProject: true,
  },
  {
    id: 6,
    title: "Blockchain-Based Voting System",
    description:
      "A secure voting system built on blockchain technology that ensures transparency and prevents tampering. The system provides a verifiable record of votes while maintaining voter privacy through advanced cryptographic techniques.",
    goals: [
      "Implement secure blockchain voting protocol",
      "Create user-friendly voting interface",
      "Ensure vote verification without compromising privacy",
      "Build robust auditing tools for election officials",
    ],
    technologies: [
      "Solidity",
      "Ethereum",
      "React",
      "TypeScript",
      "Web3.js",
      "Node.js",
      "Express",
    ],
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2NrY2hhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    githubUrl: "https://github.com/username/blockchain-voting",
    featured: false,
    keyProject: true,
  },
];

// Utility functions to get filtered projects
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

export const getKeyProjects = (): Project[] => {
  return projects.filter((project) => project.keyProject);
};
