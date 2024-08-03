import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Projects from "@/components/projects";
import TechStack from "@/components/techStack";
import ContactForm from "@/components/contact";

export default function Home() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="w-full px-4">
          {/* Introduction */}
          <div className="relative min-h-[calc(100vh-150px)] bg-base-200 text-center flex items-center justify-center mb-32">
            <div className="relative z-10 inline-block"> 
              <h1 className={title()}>Hey, I&apos;m&nbsp;</h1>
              <h1 className={title({ color: "blue" })}>Kyle McLeod.&nbsp;</h1>
              <br />
              <h2 className={subtitle({ class: "mt-4" })}>
                I am a computer science student at UBCO and am striving to become a software developer.
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
          </div>

          {/* Tech Stack */}
          <div className="text-left mb-24" id="tech-stack">
            <div className="inline-block pt-12">
              <h2 className={title()}>Tech Stack</h2>
            </div>
            <div className="mt-8">
              <TechStack />
            </div>
          </div>

          {/* Projects */}
          <div className="text-left mb-24" id="projects">
            <div className="inline-block pt-24">
              <h2 className={title()}>Projects</h2>
            </div>
            <div className="mt-8">
              <Projects />
            </div>
          </div>

          {/* Contact */}
          <div className="text-left mb-24" id="contact">
            <div className="inline-block pt-12">
              <h2 className={title()}>Contact Me</h2>
            </div>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
