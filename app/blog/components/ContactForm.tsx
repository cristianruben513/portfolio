import Link from "@/app/components/ui/Link"

export default function ContactForm() {
  return (
    <div className="flex flex-col gap-6">
      <h2>Contacto</h2>
      <p className="max-w-lg text-secondary">
        Necesitas ayuda con un proyecto? Puedes contactarme a través de mis {""}
        <Link href="/links" underline>
          links
        </Link>
        . Estare encantado de ayudarte!{" "}
      </p>
    </div>
  )
}
