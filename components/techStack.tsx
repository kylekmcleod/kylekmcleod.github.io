import React from "react";
import { Card } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Snippet } from "@nextui-org/snippet";

import { FaWindows, FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaDocker, FaGitAlt, FaGoogle } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiMysql, SiVisualstudiocode, SiEclipseide, SiFigma, SiPostman, SiNextdotjs, SiExpress } from "react-icons/si";

export default function TechStack() {
  return (
    <div>
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
    <span style={{ display: 'flex', alignItems: 'center' }}>
      {icons[label]} <span style={{ marginLeft: '8px' }}>{label}</span>
    </span>
  </Snippet>
);

const icons: { [key: string]: JSX.Element } = {
  Windows: <FaWindows />,
  Java: <FaJava />,
  Python: <FaPython />,
  JavaScript: <FaJs />,
  TypeScript: <SiTypescript />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  'Node.js': <FaNodeJs />,
  React: <FaReact />,
  'Next.js': <SiNextdotjs />,
  MongoDB: <SiMongodb />,
  MySQL: <SiMysql />,
  'VS Code': <SiVisualstudiocode />,
  Eclipse: <SiEclipseide />,
  Git: <FaGitAlt />,
  Docker: <FaDocker />,
  'Google Cloud': <FaGoogle />,
  Figma: <SiFigma />,
  Postman: <SiPostman />,
  'Express.js': <SiExpress />
};



