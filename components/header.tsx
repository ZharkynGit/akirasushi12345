"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/logo.png" alt="Akira Sushi TDK" width={40} height={40} className="mr-2" />
            <span className="font-japanese text-lg font-bold text-gray-900">Akira Sushi</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-1 md:flex">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("home")}
              className="text-gray-900 hover:bg-red-50 hover:text-red-600"
            >
              Главная
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("menu")}
              className="text-gray-900 hover:bg-red-50 hover:text-red-600"
            >
              Меню
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-900 hover:bg-red-50 hover:text-red-600"
            >
              Отзывы
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="text-gray-900 hover:bg-red-50 hover:text-red-600"
            >
              Контакты
            </Button>
            <Button
              onClick={() => window.open("https://wa.me/77083978591", "_blank")}
              className="bg-red-600 text-white hover:bg-red-700"
            >
              Заказать
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button variant="outline" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 right-0 top-16 z-50 border-t border-gray-200 bg-white shadow-lg md:hidden">
            <nav className="flex flex-col p-4">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("home")}
                className="mb-2 justify-start text-gray-900 hover:bg-red-50 hover:text-red-600"
              >
                Главная
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("menu")}
                className="mb-2 justify-start text-gray-900 hover:bg-red-50 hover:text-red-600"
              >
                Меню
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("testimonials")}
                className="mb-2 justify-start text-gray-900 hover:bg-red-50 hover:text-red-600"
              >
                Отзывы
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("contact")}
                className="mb-2 justify-start text-gray-900 hover:bg-red-50 hover:text-red-600"
              >
                Контакты
              </Button>
              <Button
                onClick={() => window.open("https://wa.me/77083978591", "_blank")}
                className="bg-red-600 text-white hover:bg-red-700"
              >
                Заказать
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
