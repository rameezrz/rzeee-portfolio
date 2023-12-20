import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdOutlineDesignServices } from "react-icons/md";
import trendity from "@/public/trendity.png";
import portfolio from "@/public/portfolio.png";
import hirezy from "@/public/hirezy.png";

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
    title: "Junior Graphic Designer",
    location: "Srishti Media",
    description:
      "As a Junior Graphic Designer at Srishti Media, I contributed three years of dedicated service, honing my skills and making significant strides in producing industry-standard designs. Over this period, I acquired valuable practical knowledge in both digital and print media, further enhancing my proficiency in the dynamic field of graphic design.",
    icon: React.createElement(MdOutlineDesignServices),
    date: "2019",
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    location: "Bangalore University",
    dates: "2019 - 2022",
    description:
      "Commenced my exploration into the foundations of programming during the final year of my BCA studies. This period marked the early stages of my journey, where I laid the groundwork for my understanding of coding basics.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2022"
  },
  {
    title: "Full Stack Development Intern",
    location: "Brocamp @ Brototype",
    description:
    "Embarked on a transformative journey at Brototype Coding Bootcamp, specializing in the MERN stack. Throughout my internship, I've completed a significant project, Trendity—an e-commerce platform, showcasing my proficiency in MongoDB, Express, React, and Node. Additionally, I've undertaken various mini-projects, contributing to a diverse skill set. Currently engaged in the development of Hirezy, a dynamic freelance marketplace, where I continue to apply and expand my expertise in Full Stack Development.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  }
] as const;

export const projectsData = [
  {
    title: "Trendity",
    description:
      "Developed a comprehensive e-commerce platform, encompassing user authentication, cart functionality, and streamlined shopping experiences.",
    tags: ["HTML", "CSS", "JavaScript", "Node", "Express", "MongoDB"],
    imageUrl: trendity,
  },
  {
    title: "Personal Portfolio",
    description:
      "Designed and developed a personal portfolio showcasing frontend skills for diverse developer opportunities. Implemented an intuitive user interface with seamless navigation.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Framer"],
    imageUrl: portfolio,
  }
  ,
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
