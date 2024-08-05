import { Link } from "@nextui-org/link";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export const Footer = () => {
  return (
    <footer className="px-6 gap-4 w-full flex-row relative flex-nowrap justify-between h-[var(--navbar-height)] max-w-[1280px] mx-auto bg-base-200 py-6">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="flex flex-col items-left md:items-start">
          <p className="font-bold text-lg mb-2">KYLE MCLEOD</p>
          <p className="text-sm max-w-xs text-gray-500">kylekmcleod1@gmail.com</p>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="LinkedIn" href={siteConfig.links.linkedin}>
            <LinkedinIcon className="text-default-500" />
          </Link>
        </div>
      </div>
      <div className="mt-4 w-full">
        <ul className="flex justify-left gap-4">
          {siteConfig.navItems.map((item) => (
            <li key={item.href}>
              <Link
                className="text-sm text-gray-600 hover:text-gray-800"
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    <div className="mt-4 text-gray-500 text-center text-xs xs:text-xs sm:text-xs md:text-sm lg:text-md">
        <p>&copy; {new Date().getFullYear()} Kyle McLeod. All rights reserved.</p>
    </div>

    </footer>
  );
};
