"use client"
import { Phone, Clock, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import MenuSection from "@/components/menu-section"
import TestimonialSection from "@/components/testimonial-section"
import ContactSection from "@/components/contact-section"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Japanese Background Pattern */}
        <div className="pointer-events-none fixed inset-0 z-0 opacity-5">
          <div className="h-full w-full bg-[url('/patterns/sushi-pattern.png')] bg-repeat"></div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-red-50 to-white pt-20 md:pt-28" id="home">
          <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-red-100 opacity-40"></div>
            <div className="absolute left-1/3 top-1/4 h-32 w-32 rounded-full bg-red-100 opacity-30"></div>
          </div>

          <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="flex flex-col items-center md:flex-row md:justify-between">
              <div className="mb-8 md:mb-0 md:w-1/2">
                <h1 className="mb-3 text-center text-3xl font-bold text-gray-900 md:text-left md:text-5xl">
                  Akira Sushi <span className="text-red-600">TDK</span>
                </h1>
                <div className="mx-auto mb-6 h-1 w-24 bg-red-600 md:mx-0"></div>
                <p className="mt-4 text-center text-base text-gray-700 md:text-left md:text-lg">
                  Место, где японские традиции встречаются с современным вкусом. Мы готовим свежие суши и роллы с душой,
                  используя только качественные ингредиенты. Быстрая доставка и забота о каждом госте — наш приоритет.
                </p>
                <div className="relative mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() => window.open("https://wa.me/77083978591", "_blank")}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Заказать через WhatsApp
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => window.open("tel:+77083978591", "_blank")}>
                    Позвонить
                  </Button>
                </div>
              </div>
              <div className="relative w-full max-w-md md:w-1/2">
                <div className="absolute -right-2 -top-2 h-full w-full rounded-lg border-2 border-red-600 bg-transparent sm:-right-4 sm:-top-4"></div>
                <div className="relative z-10 overflow-hidden rounded-lg shadow-lg">
                  <video autoPlay loop muted playsInline className="h-auto w-full" poster="/hero-sushi.jpg">
                    <source src="/hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Red circle decoration */}
          <div className="absolute bottom-0 right-10 h-32 w-32 rounded-full bg-red-600 opacity-10"></div>
        </section>

        {/* Info Cards */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="border border-gray-100 bg-white p-0 transition-transform hover:scale-105 hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 sm:flex-row">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 sm:mb-0">
                    <Clock className="h-8 w-8 text-red-600" />
                  </div>
                  <div className="ml-0 text-center sm:ml-6 sm:text-left">
                    <h3 className="text-lg font-semibold">Время работы</h3>
                    <p className="text-gray-600">Работаем 24/7</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border border-gray-100 bg-white p-0 transition-transform hover:scale-105 hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 sm:flex-row">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 sm:mb-0">
                    <MapPin className="h-8 w-8 text-red-600" />
                  </div>
                  <div className="ml-0 text-center sm:ml-6 sm:text-left">
                    <h3 className="text-lg font-semibold">Адрес</h3>
                    <p className="text-gray-600">улица Юрия Гагарина, 126, Талдыкорган</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border border-gray-100 bg-white p-0 transition-transform hover:scale-105 hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 sm:flex-row">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 sm:mb-0">
                    <Phone className="h-8 w-8 text-red-600" />
                  </div>
                  <div className="ml-0 text-center sm:ml-6 sm:text-left">
                    <h3 className="text-lg font-semibold">Телефоны</h3>
                    <p className="text-gray-600">+7 705 124 2484</p>
                    <p className="text-gray-600">+7 708 397 8591</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <MenuSection />

        {/* Divider with Japanese pattern */}
        <div className="relative py-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white">
              <span className="font-japanese text-xl text-red-600">寿司</span>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <TestimonialSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </main>
    </>
  )
}
