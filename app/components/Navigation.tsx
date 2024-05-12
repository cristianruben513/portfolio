"use client";

import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import NavLink from "@/app/components/ui/NavLink";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import Image from "next/image";

import icon from "@/app/icon.webp"

const links = [
  { label: "Inicio", href: "/" },
  { label: "Proyectos", href: "/projects" },
  { label: "Sobre Mi", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Recomendaciones", href: "/recommendations" },
];

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`; // active paths on dynamic sub-pages

  return (
    <header className="md:mt-6">
      <nav className="mx-auto flex max-w-[800px] items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link href="/" className="shrink-0 text-primary">
          <Image
            src={icon}
            alt="Avatar de Cristian Ruben"
            className="size-9"
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
          <ThemeSwitcher />
        </div>

        <Popover className="relative md:hidden">
          <Popover.Button className="flex size-8 items-center justify-center rounded-lg text-secondary">
            <Menu className="size-5 cursor-pointer text-secondary transition-colors hover:text-primary" />
            <span className="sr-only">Menu</span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 z-10 mt-2 w-48 origin-top-right overflow-auto rounded-xl p-2 text-base sm:text-sm">
              <div className="grid">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "rounded-md px-4 py-2 transition-colors hover:text-primary",
                      pathname === link.href
                        ? "bg-secondary font-medium"
                        : "font-normal",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </nav>
    </header>
  );
}
