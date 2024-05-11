import Navigation from "@/app/components/Navigation";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

//export const runtime = "edge"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className=" bg-white text-primary antialiased md:dark:bg-black dark:bg-zinc-900">

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-5xl lg:px-8">
              <div className="w-full bg-neutral-200 ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
            </div>
          </div>

          <main className="relative">
            <Navigation />
            <div className="pb-24 pt-16 md:pb-44 md:pt-20">
              {children}
            </div>
          </main>

        </ThemeProvider>
      </body>
    </html>
  );
}
