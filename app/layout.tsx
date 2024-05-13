import Navigation from "@/app/components/Navigation";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Footer from "./components/Footer";
import Background from "./components/background";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-white text-primary antialiased md:dark:bg-black dark:bg-zinc-900">

        <ThemeProvider attribute="class" defaultTheme="dark">

          <Background />

          <div className="fixed inset-0 md:flex justify-center sm:px-8 hidden">
            <div className="flex w-full max-w-5xl lg:px-8">
              <div className="w-full bg-neutral-200 border-x border-zinc-300 dark:bg-zinc-900 dark:border-zinc-300/20" />
            </div>
          </div>

          <main className="relative">
            <Navigation />
            <div className="pb-16 pt-16 md:pb-36 md:pt-20">
              {children}
            </div>
            <Footer />
          </main>

        </ThemeProvider>
      </body>
    </html>
  );
}
