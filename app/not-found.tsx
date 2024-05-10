import Link from "@/app/components/ui/Link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | Cristian Ruben",
  description: "Uh oh! This page does not exist",
};

const Custom404 = (): JSX.Element => (
  <div className="flex flex-col gap-4">
    <h1 className="text-4xl font-bold tracking-tight text-primary">
      404
    </h1>

    <p className="text-secondary">
      Parece que esta página no existe. Por favor, verifica la URL e intenta de nuevo.
    </p>
    <div className="h-2" />

    <Link href="/" underline>
      Regresar al inicio
    </Link>
  </div>
);

export default Custom404;
