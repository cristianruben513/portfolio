import Navigation from "@/app/components/Navigation";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Cristian Ruben - Ingeniero en Software",
  description:
    "Ingeniero en Software y Programador Fullstack con +3 años de experiencia en el desarrollo de aplicaciones web y servicios de backend.",
  keywords: [
    "Cristian Ruben",
    "Desarrollador de Software",
    "Programador Fullstack",
    "Ingeniero en Software",
    "Desarrollo de Aplicaciones Web",
    "Backend",
    "Frontend",
    "Javascript",
    "Typescript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "Mas de 3 años de experiencia",
    "Cristian Ruben Figueroa Espinoza",
    "Servicios de desarrollo de software",
    "Desarrollo de servicios de backend",
  ]
};

export const runtime = "edge"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className=" bg-white text-primary antialiased dark:bg-black">

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-5xl lg:px-8">
              <div className="w-full bg-neutral-200 ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
            </div>
          </div>

          <div className="relative">
            <Navigation />
            <div className="pb-24 pt-16 md:pb-44 md:pt-20">
              {children}
            </div>
          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}
