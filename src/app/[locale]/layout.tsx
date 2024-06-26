import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/src/assets/css/globals.css";
import { getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import NavBar from "@/src/components/navbar";

const inter = Inter({ subsets: ["latin"] });
export async function generateMetadata({params: {locale}}:{params: {locale:string}}) {
  const t = await getTranslations({locale, namespace: 'metadata'});
  return{
  title: {
    template:`${t("title")} | %s`,
    default: t("title"),
  },
  description: t("description"),
  category: t("category"),
  authors: [{name:t("author")}],
  creator: t("author"),
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/logo/logo-text-black.png',
        href: '/images/logo/logo-text-black.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/logo/logo-text-white.png',
        href: '/images/logo/logo-text-white.png',
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
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <body className={inter.className}>
          <NavBar />
          <main className="mt-16">
            {children}
          </main>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
