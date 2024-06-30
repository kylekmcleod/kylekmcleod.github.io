import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Projects from "@/components/projects";
import TechStack from "@/components/techStack";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-4 py-8 md:py-10">
      <div className="w-full px-4">

        {/* Introduction */}
        <div className="text-center">
          <div className="inline-block">
            <h1 className={title()}>Hey, I&apos;m&nbsp;</h1>
            <h1 className={title({ color: "blue" })}>Kyle McLeod.&nbsp;</h1>
            <br />
            <h2 className={subtitle({ class: "mt-4" })}>
              Computer science student at UBCO and striving to become a software developer.
            </h2>
          </div>

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
              href={siteConfig.links.github}
            >
              <LinkedinIcon size={20} />
              LinkedIn
            </Link>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="text-left">
          <div className="inline-block pt-12">
            <h2 className={title()}>Tech Stack</h2>
          </div>
        </div>

        <div className="mt-3 mb-8">
          <TechStack />
        </div>
        {/* Projects */}
        <div className="text-left">
          <div className="inline-block pt-12">
            <h2 className={title()}>Projects</h2>
          </div>
        </div>

        <div className="mt-3 mb-8">
          <Projects />
        </div>

      </div>
    </section>
  );
}
