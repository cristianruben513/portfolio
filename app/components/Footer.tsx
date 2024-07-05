import Container from "./Container";

export default function Footer() {
  return (
    <Container className="py-10 rounded-t-3xl md:rounded-none bg-transparent border-t border-zinc-800/20 dark:border-neutral-300/60">
      <footer className="flex flex-col md:flex-row items-center justify-between gap-y-3">
        <p className="font-bold font-mono text-sm">
          Cristian Ruben Figueroa Espinoza
        </p>
      </footer>
    </Container>
  )
}