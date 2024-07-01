import React from "react";
import { Snippet } from "@nextui-org/snippet";
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
  FaGoogle
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
  SiExpress
} from "react-icons/si";

export default function TechStack() {
  return (
    <div className="flex flex-wrap">
      <TechStackButton label="Windows" />
      <TechStackButton label="Java" />
      <TechStackButton label="Python" />
      <TechStackButton label="JavaScript" />
      <TechStackButton label="TypeScript" />
      <TechStackButton label="HTML" />
      <TechStackButton label="CSS" />
      <TechStackButton label="Node.js" />
      <TechStackButton label="Express.js" />
      <TechStackButton label="React" />
      <TechStackButton label="Next.js" />
      <TechStackButton label="MongoDB" />
      <TechStackButton label="MySQL" />
      <TechStackButton label="VS Code" />
      <TechStackButton label="Eclipse" />
      <TechStackButton label="Git" />
      <TechStackButton label="Docker" />
      <TechStackButton label="Google Cloud" />
      <TechStackButton label="Figma" />
      <TechStackButton label="Postman" />
    </div>
  );
}

const TechStackButton = ({ label }: { label: string }) => (
  <Snippet
    hideCopyButton
    symbol=""
    variant="bordered"
    className="py-2 px-3 mt-2 transition-transform duration-200 ease-in-out transform hover:scale-105 hover:text-blue-500 hover:border-blue-500 cursor-default"
    style={{ marginRight: '4px', marginLeft: '4px' }}
  >
    <span className="flex items-center text-xs sm:text-base">
      {icons[label]} <span className="ml-2">{label}</span>
    </span>
  </Snippet>
);

const icons: { [key: string]: JSX.Element } = {
  Windows: <FaWindows className="text-xs sm:text-lg" />,
  Java: <FaJava className="text-xs sm:text-lg" />,
  Python: <FaPython className="text-xs sm:text-lg" />,
  JavaScript: <FaJs className="text-xs sm:text-lg" />,
  TypeScript: <SiTypescript className="text-xs sm:text-lg" />,
  HTML: <FaHtml5 className="text-xs sm:text-lg" />,
  CSS: <FaCss3Alt className="text-xs sm:text-lg" />,
  'Node.js': <FaNodeJs className="text-xs sm:text-lg" />,
  React: <FaReact className="text-xs sm:text-lg" />,
  'Next.js': <SiNextdotjs className="text-xs sm:text-lg" />,
  MongoDB: <SiMongodb className="text-xs sm:text-lg" />,
  MySQL: <SiMysql className="text-xs sm:text-lg" />,
  'VS Code': <SiVisualstudiocode className="text-xs sm:text-lg" />,
  Eclipse: <SiEclipseide className="text-xs sm:text-lg" />,
  Git: <FaGitAlt className="text-xs sm:text-lg" />,
  Docker: <FaDocker className="text-xs sm:text-lg" />,
  'Google Cloud': <FaGoogle className="text-xs sm:text-lg" />,
  Figma: <SiFigma className="text-xs sm:text-lg" />,
  Postman: <SiPostman className="text-xs sm:text-lg" />,
  'Express.js': <SiExpress className="text-xs sm:text-lg" />
};