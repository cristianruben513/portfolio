import { Link as NextLink } from "@/navigation";
import clsx from "clsx";
import { ReactNode } from "react";

type LinkProps = {
  children: ReactNode;
  className?: string;
  underline?: boolean;
  href: any
}

export default function Link(props: LinkProps) {
  const isExternal = !props.href.toString().startsWith("/");
  const { underline, ...rest } = props;
  return (
    <NextLink
      {...rest}
      href={rest.href as any}
      className={clsx(
        "underline-offset-4",
        (isExternal || underline) && "underline",
        props.className
      )}
      target={isExternal ? "_blank" : undefined}
    >
      {props.children}
    </NextLink>
  );
}
