"use client"

import Image from "next/image"
import { Instagram, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <Image src="/logo.png" alt="Akira Sushi TDK" width={70} height={70} />
          </div>
          <div className="mb-4 flex flex-col items-center text-center md:mb-0 md:text-left">
            <p>© 2025 Akira Sushi TDK. Все права защищены.</p>
            <p className="mt-1 text-sm text-gray-400">
              Дизайн и разработка:{" "}
              <a
                href="https://instagram.com/zharkyn.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300"
              >
                @zharkyn.pl
              </a>
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com/Akira_sushi_tdk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-400"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://wa.me/77083978591"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400"
            >
              <Send className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
