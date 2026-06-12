import { Code, Database, Globe, Layers, Layout, Server, Settings, Terminal } from "lucide-react";

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  icon: string; // Used to match custom icons
}

export interface Stat {
  value: string;
  label: string;
}

export interface Skill {
  name: string;
  level: number; // Percentage 0-100
  category: "backend" | "frontend" | "tools";
}

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  category: "backend" | "frontend" | "embedded";
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface ExperienceTimeline {
  role: string;
  company: string;
  duration: string;
  description: string[];
  isCurrent?: boolean;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    subTitle: string;
    aboutBio: string;
    resumeUrl: string;
    email: string;
    location: string;
    phone: string;
  };
  socialLinks: SocialLink[];
  stats: Stat[];
  skills: Skill[];
  projects: Project[];
  experiences: ExperienceTimeline[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Alaa Samir",
    title: "BackEnd Developer (.NET)",
    subTitle: "Building robust, scalable backend architectures with ASP.NET Core, C#, Clean Architecture, and SQL Server.",
    aboutBio: "I am Alaa Samir, a passionate .NET BackEnd Developer with a strong background in problem-solving (ICPC participant), Object-Oriented Programming (OOP), algorithms, and data structures. I specialize in designing databases and building RESTful APIs using ASP.NET Core, C#, LINQ, and Entity Framework Core. I enjoy writing clean, maintainable code and optimizing system performance.",
    resumeUrl: "https://drive.google.com/file/d/1dk1qBxsT6SswJq0yWydPOhnPUPjDd0LY/view?usp=sharing", 
    email: "alaasamer222004@gmail.com",
    location: "Cairo, Egypt",
    phone: "01033264791",
  },
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/alaa-samir-6b48aa364/",
      username: "alaa-samir-6b48aa364",
      icon: "linkedin",
    },
    {
      platform: "GitHub",
      url: "https://github.com/alaa222004",
      username: "alaa222004",
      icon: "github",
    },
    {
      platform: "WhatsApp",
      url: "https://wa.me/201033264791",
      username: "+20 1033264791",
      icon: "whatsapp",
    },
    {
      platform: "Email",
      url: "mailto:alaasamer222004@gmail.com",
      username: "alaasamer222004@gmail.com",
      icon: "email",
    },
  ],
  stats: [
    { value: "C#", label: "Backend Core" },
    { value: "100%", label: "Clean Code Focus" },
    { value: "ICPC", label: "Contest Participant" },
    { value: "Route", label: ".NET Certified" },
  ],
  skills: [
    // Backend Skills
    { name: "C# / .NET Core", level: 95, category: "backend" },
    { name: "ASP.NET Core Web API", level: 92, category: "backend" },
    { name: "Entity Framework Core", level: 90, category: "backend" },
    { name: "SQL Server & Database Design", level: 90, category: "backend" },
    { name: "LINQ", level: 92, category: "backend" },
    { name: "SignalR", level: 85, category: "backend" },
    { name: "MVC Architecture", level: 88, category: "backend" },
    
    // FrontEnd / Mobile
    { name: "HTML & CSS", level: 85, category: "frontend" },
    { name: "Flutter & Dart", level: 80, category: "frontend" },

    // Problem Solving / Tools
    { name: "Problem Solving & OOP", level: 95, category: "tools" },
    { name: "C++ Language", level: 92, category: "tools" },
    { name: "Data Structures & Algorithms", level: 90, category: "tools" },
    { name: "Git & GitHub", level: 88, category: "tools" },
  ],
  projects: [
    {
      title: "Echoes Of History",
      description: "Backend for a digital museum platform built with ASP.NET Core Web API, Entity Framework Core, and SQL Server, providing RESTful services for museums, statues, search, favorites, and user history.",
      techStack: ["ASP.NET Core Web API", "EF Core", "SQL Server", "RESTful Services"],
      category: "backend",
      githubUrl: "https://github.com/alaa222004",
    },
    {
      title: "E-commerce System",
      description: "Backend for an online shopping platform built with ASP.NET Core Web API, handling products, orders, users, and secure transactions.",
      techStack: ["ASP.NET Core Web API", "EF Core", "SQL Server", "Transactions"],
      category: "backend",
      githubUrl: "https://github.com/alaa222004",
    },
    {
      title: "Smart Blind Stick",
      description: "Designed and developed a smart cane equipped with Arduino to assist visually using C language.",
      techStack: ["Arduino", "C Language", "Sensors"],
      category: "embedded",
    },
    {
      title: "Obstacle Avoidance Mobile Robot",
      description: "Designed and developed a mobile robot with advanced obstacle avoidance, utilizing sensor technologies and control algorithms autonomously in environments.",
      techStack: ["Arduino / C++", "Sensors", "Algorithms"],
      category: "embedded",
    },
    {
      title: "Smart Garage",
      description: "Developed an automated smart garage system using Arduino, enhancing convenience and security through remote control and status monitoring.",
      techStack: ["Arduino / C++", "Sensors", "Remote Control"],
      category: "embedded",
    }
  ],
  experiences: [
    {
      role: "C++ Course Instructor",
      company: "Pioneers",
      duration: "2024",
      description: [
        "Delivered lectures and hands-on tutorials covering both fundamental and advanced C++ concepts.",
        "Guided students in understanding Object-Oriented Programming (OOP) and code optimization."
      ],
      isCurrent: false,
    },
    {
      role: "Robotics Instructor for Kids",
      company: "InCode Academy",
      duration: "2024",
      description: [
        "Developed and taught an engaging robotics course for children, focusing on fundamental concepts of robotics and programming.",
        "Completed an introductory robotics program covering basic electronics and programming.",
        "Learned and taught how to build and program simple robots using sensors and actuators."
      ],
      isCurrent: false,
    },
    {
      role: "BackEnd ASP.NET Trainee",
      company: "Route Academy",
      duration: "07/2023 – 10/2023",
      description: [
        "Completed a back-end development program focusing on ASP.NET Core, C#, and SQL Server.",
        "Gained hands-on experience in building RESTful APIs, managing databases, and implementing authentication."
      ],
      isCurrent: false,
    },
    {
      role: "Dart & Flutter Programming Trainee",
      company: "TAS Academy",
      duration: "2023",
      description: [
        "Hands-on experience in mobile app architecture.",
        "Successfully completed practical projects, showcasing skills in real-world applications."
      ],
      isCurrent: false,
    },
    {
      role: "Competitive Programmer",
      company: "ICPC Alex Egypt",
      duration: "2024",
      description: [
        "Actively participated in the ICPC (International Collegiate Programming Contest).",
        "Tackled complex algorithmic challenges and optimized runtime execution."
      ],
      isCurrent: false,
    }
  ]
};
