"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { Card } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
  <div className="w-full mx-auto gap-10 grid grid-cols-1 md:grid-cols-2">
    {projects.map((project, index) => (
      <div key={project.link} className={index === projects.length - 1 ? 'mb-0' : ''}>
        <AnimatedProjectCard project={project} index={index} />
      </div>
    ))}
  </div>
  );
}

const AnimatedProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="relative group"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="relative group"
      >
        <div className="flex flex-col justify-center h-full">
          <h4 className="font-medium text-lg">{project.title}</h4>
          <p className="text-sm uppercase font-bold mb-2 text-gray-500">
            {project.subtitle}
          </p>
          <Card className="w-full">
            <div className="relative w-full h-full">
              <Image
                removeWrapper
                alt={project.altText}
                className="z-0 w-full h-full object-cover"
                src={project.imageSrc}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Card>
          <p className="mt-3 text-sm font-bold">{project.technologies}</p>
          <p className="mt-1 font-light text-default-700 text-md">{project.description}</p>
        </div>
      </a>
    </motion.div>
  );
};

const projects = [
  {
    title: "Producer Loop Sharing App",
    subtitle: "Upload, download, collaborate, profit.",
    link: "https://github.com/kylekmcleod/",
    imageSrc: "/images/loopSharing.png",
    altText: "Kyle McLeod's screenshot of the loop sharing app landing page.",
    technologies: "RELEASING SOON",
    description:
      "An all in one platform for music producers to share loops and collaborate.",
  },
  {
    title: "Java AI Agent",
    subtitle: "The Game of Amazons Player",
    link: "https://github.com/kylekmcleod/Game-of-Amazons-AI-Agent",
    imageSrc: "/images/amazons.png",
    altText: "Kyle McLeod's Screenshot of the Java AI Agent interface",
    technologies: "Java • Maven",
    description:
      "A Monte Carlo Tree Search (MCTS) Java AI agent that plays the Game of the Amazons.",
  },
  {
    title: "Song Separator",
    subtitle: "AI Music Splitter",
    link: "https://github.com/kylekmcleod/Song-Seperator",
    imageSrc: "/images/songSeperator.png",
    altText: "Kyle McLeod's Interface of the Song Separator application",
    technologies: "Node.js • Express.js • React • Machine Learning • Python",
    description:
      "An AI-powered web app that uses machine learning to split songs into vocal, drum, bass, and instrumental layers.",
  },
  {
    title: "Paper Trading App",
    subtitle: "Invest with zero risk",
    link: "https://github.com/kylekmcleod",
    imageSrc: "/images/paperTrader.png",
    altText: "Kyle McLeod's Screenshot of the Paper Trading App interface",
    technologies: "Node.js • Next.js • React • MongoDB • Tailwind CSS",
    description:
      "Practice stock trading risk-free. This web app simulates real market conditions using virtual assets, powered by Node.js, Next.js, and MongoDB.",
  },
  {
    title: "Algorithmic Stock Trading",
    subtitle: "Machine Learning Practice",
    link: "https://github.com/kylekmcleod/Algorithmic-Trading-Learning",
    imageSrc: "/images/algTrading.png",
    altText: "Kyle McLeod's Visualization of algorithmic trading process",
    technologies: "Python • Pandas • scikit-learn • yfinance",
    description:
      "Machine learning project that predicts profitable stocks using historic S&P 500 data. Documented in Jupyter Notebook.",
  },
  {
    title: "Ticket Apprentice",
    subtitle: "Event ticketing software",
    link: "https://github.com/kylekmcleod/Ticket-Apprentice",
    imageSrc: "/images/ticketApprentice.png",
    altText: "Kyle McLeod's Dashboard of Ticket Apprentice ticketing software",
    technologies: "Node.js • Express.js • MySQL • EJS • Bootstrap",
    description:
      "Event ticketing software that allows users to buy and sell tickets for events. Developed using Node.js, Express.js, and MySQL.",
  },
  {
    title: "Time Piece Vault",
    subtitle: "E-commerce watch store",
    link: "https://github.com/kylekmcleod/E-Commerce-Watch-Store",
    imageSrc: "/images/timePieceVault.png",
    altText: "Kyle McLeod's E-commerce website for luxury watches",
    technologies: "Java • MySQL • HTML/CSS",
    description:
      "An e-commerce platform for buying and selling luxury watches.",
  },
];

type Project = {
  title: string;
  subtitle: string;
  link: string;
  imageSrc: string;
  altText: string;
  technologies: string;
  description: string;
};
