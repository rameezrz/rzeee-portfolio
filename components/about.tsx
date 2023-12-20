"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        A recent graduate with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to
        merge my passion for technology and problem-solving. I immersed myself
        in a rigorous coding bootcamp, mastering{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My thrill in programming</span> lies in
        unraveling complex problems and devising effective solutions. The
        technologies at the core of my stack include{" "}
        <span className="font-medium">
          React, Node.js, Express, and MongoDB
        </span>
        . Proficient in TypeScript and experienced in Microservices frameworks,
        I am actively seeking opportunities to apply my skills in a{" "}
        <span className="font-medium">full-time software developer role</span>.
      </p>

      <p>
        <span className="italic">Outside the coding realm</span>, I indulge in
        my passion for creativity and continuous learning. Whether it's coding
        or exploring new interests, I find joy in the process. I also have a
        deep fascination for{" "}
        <span className="font-medium">entrepreneurship</span>, specifically in
        applying technological solutions to business challenges. I am
        dedicatedly honing my design skills, with a focus on UI/UX. Beyond the
        screen, you'll find me hanging out with friends, enjoying movies, and
        cherishing moments with my furry companion.
      </p>
    </motion.section>
  );
};

export default About;
