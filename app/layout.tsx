import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/context/cart-context"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Akira Sushi TDK - Доставка суши и пиццы в Талдыкоргане 24/7",
  description:
    "Лучшие суши, роллы и пицца в Талдыкоргане с доставкой 24/7. Бесплатная доставка по городу. Заказать еду в Талдыкоргане, Талдыке, Талдықорғане.",
  keywords: [
    "суши Талдыкорган",
    "пицца Талдыкорган",
    "доставка еды Талдыкорган",
    "ночная доставка Талдыкорган",
    "круглосуточная доставка",
    "Акира Суши",
    "роллы Талдыкорган",
    "японская кухня",
    "доставка суши Талдықорған",
    "еда с доставкой",
    "Талдык",
    "Талдыкорган",
    "Талдықорған",
    "Akira Sushi TDK",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://akirasushi.kz",
    title: "Akira Sushi TDK - Доставка суши и пиццы в Талдыкоргане",
    description: "Лучшие суши, роллы и пицца в Талдыкоргане с доставкой 24/7. Бесплатная доставка по городу.",
    siteName: "Akira Sushi TDK",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Akira Sushi TDK Logo",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="geo.region" content="KZ-TAL" />
        <meta name="geo.placename" content="Талдыкорган" />
        <link rel="canonical" href="https://akirasushi.kz" />
      </head>
      <body className={inter.className}>
        <CartProvider>{children}</CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
