import Head from "next/head";
import { Metadata } from "next";
import { metaText } from "@/config";
import Header from "@/components/ui/Header/Header";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  ...metaText,
  icons: ["/next.svg"],
  keywords: [
    "квартиры",
    "квартира",
    "квартиры по низким ценам",
    "квартира по низкой цене",
    "квартира в ипотеку",
    "квартира в хорошем районе",
  ],
  openGraph: {
    ...metaText,
    type: "website",
    locale: "ru_RU",

    // Предположим, что vercel.svg - это превью
    images: ["/public/vercel.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
