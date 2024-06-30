import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/src/assets/css/globals.css";
import { getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import NavBar from "@/src/components/Navbar";
import ThemeProvider from "@/src/context/ThemeContext";
import Footer from "@/src/components/Footer";
import icon from "@/public/images/logo/logo.png"
const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: {
      template: `${t("title")} | %s`,
      default: t("title"),
    },
    description: t("description"),
    category: t("category"),
    authors: [{ name: t("author") }],
    creator: t("author"),
    icons: {
      icon: [
        {
          media: '(prefers-color-scheme: light)',
          url: "/images/logo/siteTitle.png",
          href: "/images/logo/siteTitle.png",
        },
        {
          media: '(prefers-color-scheme: dark)',
          url: "/images/logo/siteTitle.png",
          href: "/images/logo/siteTitle.png",
        },
      ]
    },
    keywords: [
      t("keywords"),
      t("keywords1"),
      t("keywords2"),
      t("keywords3"),
      t("keywords4"),
      t("keywords5"),
      t("keywords6"),
      t("keywords7"),
    ],
  }
};
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,

}

export default async function RootLayout({
  children,
  params: { locale }

}: {
  params: { locale: string },
  children: React.ReactNode
}) {

  const messages = await getMessages();


  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"} className="scroll-smooth">
      <NextIntlClientProvider messages={messages} locale={locale}>
        <body className={`${inter.className} dark:text-white text-black`}>
          <ThemeProvider>
            <NavBar />
            <main className="xl:container min-h-screen mx-auto overflow-y-scroll snap-y snap-mandatory scroll-smooth
            flex flex-col justify-center items-center hideScrollbar">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
