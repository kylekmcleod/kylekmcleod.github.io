"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { Snippet } from "@nextui-org/snippet";
import { motion } from "framer-motion";
import {
  FaWindows,
  FaJava,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaGoogle,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiVisualstudiocode,
  SiEclipseide,
  SiFigma,
  SiPostman,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si";

export default function TechStack() {
  return (
    <div className="flex flex-wrap">
      {techStackItems.map((item, index) => (
        <AnimatedTechStackButton
          key={item.label}
          label={item.label}
          index={index}
        />
      ))}
    </div>
  );
}

const AnimatedTechStackButton = ({
  label,
  index,
}: {
  label: string;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <TechStackButton label={label} />
    </motion.div>
  );
};

const TechStackButton = ({ label }: { label: string }) => (
  <Snippet
    hideCopyButton
    symbol=""
    variant="bordered"
    className="py-2 px-3 mt-2 transition-transform duration-200 ease-in-out transform hover:scale-105 hover:text-blue-500 hover:border-blue-500 cursor-default"
    style={{ marginRight: "4px", marginLeft: "4px" }}
  >
    <span className="flex items-center text-xs sm:text-base">
      {icons[label]} <span className="ml-2">{label}</span>
    </span>
  </Snippet>
);

const techStackItems = [
  { label: "Windows" },
  { label: "Java" },
  { label: "Python" },
  { label: "JavaScript" },
  { label: "TypeScript" },
  { label: "HTML" },
  { label: "CSS" },
  { label: "Node.js" },
  { label: "Express.js" },
  { label: "React" },
  { label: "Next.js" },
  { label: "MongoDB" },
  { label: "MySQL" },
  { label: "VS Code" },
  { label: "Eclipse" },
  { label: "Git" },
  { label: "Docker" },
  { label: "Google Cloud" },
  { label: "Figma" },
  { label: "Postman" },
];

const icons: { [key: string]: JSX.Element } = {
  Windows: <FaWindows className="text-xs sm:text-lg" />,
  Java: <FaJava className="text-xs sm:text-lg" />,
  Python: <FaPython className="text-xs sm:text-lg" />,
  JavaScript: <FaJs className="text-xs sm:text-lg" />,
  TypeScript: <SiTypescript className="text-xs sm:text-lg" />,
  HTML: <FaHtml5 className="text-xs sm:text-lg" />,
  CSS: <FaCss3Alt className="text-xs sm:text-lg" />,
  "Node.js": <FaNodeJs className="text-xs sm:text-lg" />,
  React: <FaReact className="text-xs sm:text-lg" />,
  "Next.js": <SiNextdotjs className="text-xs sm:text-lg" />,
  MongoDB: <SiMongodb className="text-xs sm:text-lg" />,
  MySQL: <SiMysql className="text-xs sm:text-lg" />,
  "VS Code": <SiVisualstudiocode className="text-xs sm:text-lg" />,
  Eclipse: <SiEclipseide className="text-xs sm:text-lg" />,
  Git: <FaGitAlt className="text-xs sm:text-lg" />,
  Docker: <FaDocker className="text-xs sm:text-lg" />,
  "Google Cloud": <FaGoogle className="text-xs sm:text-lg" />,
  Figma: <SiFigma className="text-xs sm:text-lg" />,
  Postman: <SiPostman className="text-xs sm:text-lg" />,
  "Express.js": <SiExpress className="text-xs sm:text-lg" />,
};
