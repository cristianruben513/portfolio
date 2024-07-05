import Navigation from "@/app/components/Navigation";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Footer from "../components/Footer";
import Background from "../components/background";

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({ children, params: { locale } }: Props) {
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Background />
            <Analytics />

            <div className="fixed inset-0 flex justify-center sm:px-8 ">
              <div className="flex w-full max-w-6xl lg:px-8">
                <div className="w-full bg-zinc-200/50 dark:bg-zinc-900/60 backdrop-blur-sm" />
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
        </NextIntlClientProvider>

      </body>
    </html >
  );
}
