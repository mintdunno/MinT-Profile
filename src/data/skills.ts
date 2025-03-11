export type Skill = {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "design";
  icon: string;
};

export type SkillCategory = {
  name: string;
  icon: string;
};

export const skillCategories: Record<string, SkillCategory> = {
  frontend: { name: "Frontend", icon: "fas fa-desktop" },
  backend: { name: "Backend", icon: "fas fa-server" },
  tools: { name: "Tools & Technologies", icon: "fas fa-tools" },
  design: { name: "Design & UX", icon: "fas fa-paint-brush" },
};

export const skills: Skill[] = [
  // Frontend
  { name: "HTML & CSS", level: 95, category: "frontend", icon: "fab fa-html5" },
  { name: "JavaScript", level: 92, category: "frontend", icon: "fab fa-js" },
  { name: "TypeScript", level: 90, category: "frontend", icon: "fab fa-js" },
  { name: "React", level: 90, category: "frontend", icon: "fab fa-react" },
  { name: "Vite", level: 85, category: "frontend", icon: "fas fa-bolt" },
  { name: "SwiftUI", level: 82, category: "frontend", icon: "fab fa-swift" },
  {
    name: "React Native",
    level: 80,
    category: "frontend",
    icon: "fab fa-react",
  },

  // Backend
  { name: "Node.js", level: 90, category: "backend", icon: "fab fa-node-js" },
  { name: "Python", level: 70, category: "backend", icon: "fab fa-python" },
  { name: "C/C++", level: 75, category: "backend", icon: "fas fa-file-code" },
  { name: "Java", level: 70, category: "backend", icon: "fab fa-java" },
  { name: "MongoDB", level: 85, category: "backend", icon: "fas fa-database" },
  { name: "SQL", level: 80, category: "backend", icon: "fas fa-database" },

  // Tools
  { name: "Git", level: 90, category: "tools", icon: "fab fa-git-alt" },
  { name: "Docker", level: 75, category: "tools", icon: "fab fa-docker" },
  { name: "n8n", level: 80, category: "tools", icon: "fas fa-code" },
  { name: "cloudflare", level: 70, category: "tools", icon: "fas fa-cloud" },
  { name: "Supabase", level: 80, category: "tools", icon: "fas fa-database" },
  { name: "Firebase", level: 80, category: "tools", icon: "fas fa-fire" },
  { name: "CI/CD", level: 60, category: "tools", icon: "fas fa-sync-alt" },

  // Design
  {
    name: "UI/UX Design",
    level: 85,
    category: "design",
    icon: "fas fa-pencil-ruler",
  },
  { name: "Figma", level: 80, category: "design", icon: "fab fa-figma" },
];

// Helper function to get skills sorted by level
export const getSortedSkills = () => {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Sort each category's skills by level in descending order
  Object.keys(skillsByCategory).forEach((category) => {
    skillsByCategory[category].sort((a, b) => b.level - a.level);
  });

  return skillsByCategory;
};
