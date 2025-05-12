import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/context/cart-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Akira Sushi TDK",
  description: "Лучшие суши и роллы в Талдыкоргане",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
