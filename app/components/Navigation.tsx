"use client";

import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import NavLink from "@/app/components/ui/NavLink";
import { Link, usePathname } from "@/navigation";
import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Fragment } from "react";

import icon from "@/app/icon.webp";
import { useTranslations } from "next-intl";
import LangSwitcher from "./LangSwitcher";

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`;
  const t = useTranslations("header")

  const links = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.projects"), href: "/projects" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.resume"), href: "https://cristian-cv.vercel.app/" },
    { label: t("nav.blog"), href: "/blog" },
    { label: t("nav.recommendations"), href: "/recommendations" },
  ];

  return (
    <header className="md:mt-6">
      <nav className="mx-auto flex max-w-[800px] items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link href="/" className="shrink-0 text-primary">
          <Image
            src={icon}
            alt="Avatar de Cristian Ruben"
            className="size-9"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex h-8 w-8 items-center justify-center md:ml-0">
          <LangSwitcher />
          <ThemeSwitcher />
        </div>

        <Popover className="relative md:hidden">
          <PopoverButton className="flex size-8 items-center justify-center rounded-lg text-secondary">
            <Menu className="size-5 cursor-pointer text-secondary transition-colors hover:text-primary" />
            <span className="sr-only">Menu</span>
          </PopoverButton>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel className="absolute right-0 z-10 mt-2 w-48 origin-top-right overflow-auto rounded-xl p-2 text-base sm:text-sm bg-neutral-200 dark:bg-black">
              <div className="grid">
                {links.map((link) => {
                  return (
                    <Link
                      key={link.href}
                      href={link.href as any}
                      className={clsx(
                        "rounded-md px-4 py-2 transition-colors hover:text-primary",
                        pathname === link.href
                          ? "bg-secondary font-medium"
                          : "font-normal",
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </div>
            </PopoverPanel>
          </Transition>
        </Popover>
      </nav>
    </header>
  );
}
