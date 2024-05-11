import Container from "./Container";

export default function Footer() {
  return (
    <Container className="py-10 rounded-t-3xl md:rounded-none relative bg-neutral-200 md:dark:bg-zinc-900 dark:bg-black md:border-t md:border-zinc-300/20">
      <footer className="flex flex-col md:flex-row items-center justify-between gap-y-3">
        <p className="font-bold font-mono text-sm">
          Cristian Ruben Figueroa Espinoza
        </p>
      </footer>
    </Container>
  )
}