import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export default function Container({ children, className }: Props) {
  return (
    <section className={clsx(
      "mx-auto max-w-[800px] px-6 md:px-6", className
    )}>
      {children}
    </section>
  )
}