"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Projects from "@/components/projects";
import TechStack from "@/components/techStack";
import ContactForm from "@/components/contact";
import Head from "next/head";

export default function Home() {
  const techStackRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const techStackInView = useInView(techStackRef, { once: true });
  const projectsInView = useInView(projectsRef, { once: true });
  const contactInView = useInView(contactRef, { once: true });

  return (
    <>
      <Head>
        <title>Kyle McLeod | Software Developer</title>
        <meta
          name="description"
          content="I'm Kyle McLeod, a software developer. Explore my work in web development, AI, and more." />
        <meta name="keywords" content="Kyle McLeod, Computer Science, Software Developer, UBCO, Tech Stack, Projects" />
        <meta name="author" content="Kyle McLeod" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://kylekmcleod.github.io/" />
      </Head>

      <main>
        <section className="relative flex flex-col md:flex-row items-center justify-center gap-4 ">
          <div className="w-full px-4 relative z-10">
          {/* Introduction */}
          <div className="relative min-h-[calc(100vh-150px)] bg-base-200 text-center flex items-center justify-center mb-32">
            <div className="relative z-10 inline-block">
              <h1 className={title()}>Hey, I&apos;m&nbsp;</h1>
              <h1 className={title({ color: "blue" })}>Kyle McLeod.&nbsp;</h1>
              <br />
              <h2 className={subtitle({ class: "mt-4" })}>
                Software developer, video editor, and music producer.
              </h2>
              <div className="flex gap-3 mt-4 justify-center">
                <Link
                  isExternal
                  className={buttonStyles({ variant: "bordered", radius: "full" })}
                  href={siteConfig.links.github}
                >
                  <GithubIcon size={20} />
                  GitHub
                </Link>

                <Link
                  isExternal
                  className={buttonStyles({ variant: "bordered", radius: "full" })}
                  href={siteConfig.links.linkedin}
                >
                  <LinkedinIcon size={20} />
                  LinkedIn
                </Link>
              </div>
            </div>

            {/* Scroll Reminder */}
            <div className="absolute bottom-4 w-full text-center">
              <div className="animate-bounce text-gray-500">
                <p className="text-sm">Scroll down</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mx-auto mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4 4m0 0l4-4m-4 4V5" />
                </svg>
              </div>
            </div>
          </div>


            {/* Video Text and Video */}
            <div className="w-full text-center mb-32 relative">
            <motion.p
              className="text-3xl sm:text-5xl md:text-6xl font-light mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              I make <span className="font-bold text-blue-400">aesthetically</span>
              <br />
              <span className="font-bold text-blue-400">pleasing</span> software.
            </motion.p>

            <motion.h2
              className={subtitle({ class: "text-md sm:mt-4 sm:mb-12 font-light" })}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Take a look at my project demo below for my app called{' '}
              <span className="font-bold">Song Separator</span>.
            </motion.h2>

            


              <video
                className="w-full mx-auto"
                controls
                autoPlay
                loop
                muted
              >
                <source src="/video/SongSeparatorDemo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            

            {/* Tech Stack */}
            <div className="text-left mb-24" id="tech-stack" ref={techStackRef}>
              <div className="inline-block pt-12">
                <h2 className={title()}>Tech Stack</h2>
                <motion.div
                  className="w-24 h-1 bg-blue-500 mt-4"
                  initial={{ width: 0 }}
                  animate={{ width: techStackInView ? "100px" : 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <div className="mt-8">
                <TechStack />
              </div>
            </div>

            {/* Projects */}
            <div className="text-left mb-24" id="projects" ref={projectsRef}>
              <div className="inline-block pt-24">
                <h2 className={title()}>Projects</h2>
                <motion.div
                  className="w-24 h-1 bg-blue-500 mt-4"
                  initial={{ width: 0 }}
                  animate={{ width: projectsInView ? "100px" : 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <div className="mt-8">
                <Projects />
              </div>
            </div>

            {/* Contact */}
            <div className="text-left mb-24" id="contact" ref={contactRef}>
              <div className="inline-block pt-12">
                <h2 className={title()}>Contact Me</h2>
                <motion.div
                  className="w-24 h-1 bg-blue-500 mt-4"
                  initial={{ width: 0 }}
                  animate={{ width: contactInView ? "100px" : 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
