import React from "react";
import { SiWeb3Dotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdOutlineDesignServices } from "react-icons/md";
import trendity from "@/public/trendity.png";
import portfolio from "@/public/portfolio.png";
import hirezy from "@/public/hirezy.png";
import arc from "@/public/arc.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer",
    location: "Adesso India Pvt Ltd, Kochi",
    description: [
      "• Spearheaded development for Matrimore, a bus and tour package booking platform, managing frontend. Increased system efficiency by using React, and Global State Mangement.",
      "• Contributed to Job portal project for managing job applications, handling frontend with React, TypeScript, Redux and TailwindCSS, improving user interface responsiveness by 50%. Provided backend support in Spring Boot (Java).",
      "• Enhanced Learning Management System by optimizing frontend components, reducing load time by 15%, and improving code maintainability for the team.",
    ],
    icon: React.createElement(FaReact),
    date: "Jun 2024 – Present",
  },
  {
    title: "Full Stack Developer Intern",
    location: "Aloha Labs Pvt Ltd (Remote)",
    description: [
      "• Contributed to the development of a web3 dApp (Dzap) for token swapping, DCA creation, and token bridging across different networks.",
      "• Worked primarily on the front-end using React with TypeScript, Redux, and TailwindCSS.",
      "• Developed and optimized APIs using Node.js and Express.js.",
      "• Collaborated with the team to enhance UI/UX designs using Figma.",
    ],
    icon: React.createElement(SiWeb3Dotjs),
    date: "Jan 2024 – Mar 2024",
  },
  {
    title: "Full Stack Development Intern",
    location: "Brocamp @ Brototype",
    description: [
      "Embarked on a transformative journey at Brototype Coding Bootcamp, specializing in the MERN stack. Throughout my internship, I've completed a significant project, Trendity—an e-commerce platform, showcasing my proficiency in MongoDB, Express, React, and Node. Additionally, I've undertaken various mini-projects, contributing to a diverse skill set. Currently engaged in the development of Hirezy, a dynamic freelance marketplace, where I continue to apply and expand my expertise in Full Stack Development.",
    ],
    icon: React.createElement(FaReact),
    date: "Jan 2023 - Dec 2023",
  },

  {
    title: "Bachelor of Computer Applications (BCA)",
    location: "Bangalore University",
    dates: "2019 - 2022",
    description: [
      "Commenced my exploration into the foundations of programming during the final year of my BCA studies. This period marked the early stages of my journey, where I laid the groundwork for my understanding of coding basics.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2019 - Sep 2022",
  },
  {
    title: "Junior Graphic Designer",
    location: "Srishti Media",
    description: [
      "As a Junior Graphic Designer at Srishti Media, I contributed three years of dedicated service, honing my skills and making significant strides in producing industry-standard designs. Over this period, I acquired valuable practical knowledge in both digital and print media, further enhancing my proficiency in the dynamic field of graphic design.",
    ],
    icon: React.createElement(MdOutlineDesignServices),
    date: "2019",
  },
] as const;

export const projectsData = [
  {
    title: "Trendity",
    description:
      "Developed a comprehensive e-commerce platform, encompassing user authentication, cart functionality, and streamlined shopping experiences.",
    tags: ["HTML", "CSS", "JavaScript", "Node", "Express", "MongoDB"],
    imageUrl: trendity,
    link: "https://github.com/rameezrz/Trendity",
  },
  {
    title: "Personal Portfolio",
    description:
      "Designed and developed a personal portfolio showcasing frontend skills for diverse developer opportunities. Implemented an intuitive user interface with seamless navigation.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Framer"],
    imageUrl: portfolio,
    link: "#",
  },
  {
    title: "Hirezy (Upcoming)",
    description:
      "A Freelance Marketplace - Leading the development, implementing real-time chat and video call features, integrating payment processing.",
    tags: [
      "React",
      "Redux",
      "TypeScript",
      "PSQL",
      "Node",
      "Micro-service",
      "Kafka",
      "DevOps",
      "WebRTC",
    ],
    imageUrl: hirezy,
    link: "https://github.com/rameezrz/Hirezy",
  },
  {
    title: "ARC - Ecommerce",
    description:
      "Built a robust e-commerce application with features like user authentication, cart management, and optimized checkout processes.",
    tags: [
      "React.js",
      "TailwindCSS",
      "Typescript",
      "Node",
      "Express",
      "MongoDB",
    ],
    imageUrl: arc,
    link: "https://arc-nine-gamma.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "Redux",
  "Express",
  "WebRTC",
  "Socket.IO",
  "Kafka",
  "AWS",
  "Nginx",
  "Docker",
  "Kubernetes",
  "Microservices",
  "Clean Architecture",
  "Figma",
  "Photoshop",
  "Illustrator",
] as const;
