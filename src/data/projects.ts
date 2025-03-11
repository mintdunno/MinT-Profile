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
    title: "Mecanum wheel AGV",
    description:
      "Mecanum wheel AGVs are omnidirectional robots that use specially designed wheels with angled rollers to move in any direction without changing orientation, making them ideal for precise navigation in tight industrial spaces.",
    goals: [
      "Develop omnidirectional movement control algorithms",
      "Implement path planning for efficient navigation in confined spaces",
      "Create obstacle detection and avoidance system",
      "Design high-payload capacity for industrial applications",
      "Build real-time motion control with precise directional changes",
    ],
    technologies: [
      "React",
      "Node.js",
      "C++",
      "MATLAB",
      "Vite",
      "Supabase",
      "Python",
    ],
    image: "https://i.ibb.co/q3gwWH7N/mecanum-robot.jpg",
    githubUrl: "https://github.com/mintdunno/Mecanum-Trajectories",
    liveUrl: "https://github.com/mintdunno/Mecanum-Trajectories",
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
      "https://i.ibb.co/93sLbnKR/477222665-3896728863881935-8280609018506937864-n.jpg",
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
      "https://shop-cdn.aidot.com/media/wysiwyg/E_smart_home_app_7849x4181.jpeg",
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
