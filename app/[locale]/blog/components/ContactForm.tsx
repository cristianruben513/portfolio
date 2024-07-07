import Link from "@/app/components/ui/Link"

export default function ContactForm() {
  return (
    <div className="flex flex-col gap-6">
      <h2>Contacto</h2>
      <p className="max-w-2xl text-secondary">
        Necesitas ayuda con un proyecto?{" "}
        <Link href="/links" underline>
          CONTACTAME
        </Link>
        . Estare encantado de ayudarte!{" "}
      </p>
    </div>
  )
}
