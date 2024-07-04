interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string
}

export default function PageHeader({ title, children }: Props) {
  return (
    <header className="flex flex-col gap-3">
      <h1 className="animate-in text-3xl font-bold tracking-wide">
        {title}
      </h1>

      <h2
        className="animate-in text-secondary"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        {children}
      </h2>
    </header>
  )
}