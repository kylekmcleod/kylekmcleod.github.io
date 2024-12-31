"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { Card } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="w-full mx-auto gap-10 grid grid-cols-1 md:grid-cols-2">
      {projects.map((project, index) => (
        <AnimatedProjectCard
          key={project.link}
          project={project}
          index={index}
        />
      ))}
    </div>
  );
}

const AnimatedProjectCard = ({ project, index }: { project: Project, index: number }) => {
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
      <a href={project.link} target="_blank" rel="noreferrer" className="relative group">
        <div className="flex flex-col justify-center h-full">
          <h4 className="font-medium text-lg">{project.title}</h4>
          <p className="text-sm uppercase font-bold mb-2 text-gray-500">{project.subtitle}</p>
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
        </div>
      </a>
    </motion.div>
  );
};

const projects = [
  {
    title: "Paper Trading App",
    subtitle: "Invest with zero risk",
    link: "https://github.com/kylekmcleod",
    imageSrc: "/images/paperTrader.png",
    altText: "Screenshot of the Paper Trading App interface"
  },
  {
    title: "Algorithmic Stock Trading",
    subtitle: "Machine Learning Practice",
    link: "https://github.com/kylekmcleod/Algorithmic-Trading-Learning",
    imageSrc: "/images/algTrading.png",
    altText: "Visualization of algorithmic trading process"
  },
  {
    title: "Song Separator",
    subtitle: "AI Music Splitter",
    link: "https://github.com/kylekmcleod/Song-Seperator",
    imageSrc: "/images/songSeperator.png",
    altText: "Interface of the Song Separator application"
  },
  {
    title: "Ticket Apprentice",
    subtitle: "Event ticketing software",
    link: "https://github.com/kylekmcleod/Ticket-Apprentice",
    imageSrc: "/images/ticketApprentice.png",
    altText: "Dashboard of Ticket Apprentice ticketing software"
  },
  {
    title: "Time Piece Vault",
    subtitle: "E-commerce watch store",
    link: "https://github.com/kylekmcleod/E-Commerce-Watch-Store",
    imageSrc: "/images/timePieceVault.png",
    altText: "E-commerce website for luxury watches"
  }
];

type Project = {
  title: string;
  subtitle: string;
  link: string;
  imageSrc: string;
  altText: string;
};
