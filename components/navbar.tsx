"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  GithubIcon,
  LinkedinIcon,
} from "@/components/icons";

export const Navbar = () => {
  const handleLinkClick = (href: string) => {
    if (typeof window !== "undefined") {
      window.location.href = href; // Forces a page reload
    }
  };

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">KYLE MCLEOD</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden sm:flex lg:flex gap-4 justify-start ml-2">
          <NavbarItem>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium",
              )}
              color="foreground"
              href="/"
            >
              Home
            </NextLink>
          </NavbarItem>
          <NavbarItem>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium",
              )}
              color="foreground"
              href="/media"
            >
              Media Portfolio
            </NextLink>
          </NavbarItem>
          {siteConfig.navItems.map((item: { href: string; label: string }) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium ",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="flex gap-2 items-center">
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500 text-sm" />
          </Link>
          <Link isExternal aria-label="LinkedIn" href={siteConfig.links.linkedin}>
            <LinkedinIcon className="text-default-500 text-sm" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <div className="flex items-center justify-start">
          <ThemeSwitch />
        </div>
        <NavbarMenuToggle aria-label="toggle menu" />
        <NavbarMenu>
          <NavbarMenuItem>
            <button
              className="font-bold text-default-800 hover:text-blue-400 text-lg pt-4 w-full text-left"
              onClick={() => handleLinkClick("/")}
            >
              Home
            </button>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <button
              className="font-bold mb-4 text-default-800 hover:text-blue-400 text-lg w-full text-left"
              onClick={() => handleLinkClick("/media")}
            >
              Media Portfolio
            </button>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link isExternal aria-label="Github" href={siteConfig.links.github}>
              <div className="flex items-center gap-2">
                <GithubIcon className="text-default-500 text-sm" />
                <span className="text-default-500 text-sm">GitHub</span>
              </div>
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link isExternal aria-label="LinkedIn" href={siteConfig.links.linkedin}>
              <div className="flex items-center gap-2">
                <LinkedinIcon className="text-default-500 text-sm" />
                <span className="text-default-500 text-sm">LinkedIn</span>
              </div>
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </NavbarContent>
    </NextUINavbar>
  );
};
