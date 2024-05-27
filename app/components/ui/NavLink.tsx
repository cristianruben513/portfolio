
import { ReactNode } from "react";
import clsx from "clsx";
import { Link, usePathname } from "@/navigation";

type NavLinkProps = {
  href: any
  children: ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = `/${usePathname().split("/")[1]}`;
  const active = pathname === href;

  return (
    <Link
      className={clsx(
        "px-4 py-2 rounded-lg text-sm hover:text-primary transition-colors",
        active ? "bg-secondary dark:bg-gray-800 text-primary" : "text-secondary"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
