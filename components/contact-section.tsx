"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Clock, MapPin, Send } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="bg-gray-50 py-16 shadow-sm" id="contact">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Контакты</h2>
          <p className="mt-4 text-gray-600">Свяжитесь с нами для заказа или с вопросами</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="border border-gray-200 bg-white shadow-md">
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-semibold">Информация</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 shrink-0 text-red-600" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-gray-600">улица Юрия Гагарина, 126, Талдыкорган</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="mr-3 h-5 w-5 shrink-0 text-red-600" />
                  <div>
                    <p className="font-medium">Время работы</p>
                    <p className="text-gray-600">Работаем 24/7</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="mr-3 h-5 w-5 shrink-0 text-red-600" />
                  <div>
                    <p className="font-medium">Телефоны</p>
                    <p className="text-gray-600">+7 705 124 2484</p>
                    <p className="text-gray-600">+7 708 397 8591</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Send className="mr-3 h-5 w-5 shrink-0 text-red-600" />
                  <div>
                    <p className="font-medium">Доставка</p>
                    <p className="text-gray-600">В течение 80 минут</p>
                    <p className="text-gray-600">Без минимальной суммы заказа</p>
                    <p className="mt-1 font-medium text-red-600">✅ Доставка по городу бесплатно</p>
                    <p className="text-red-600">🆘 После 22:00 до 10:00 доставка по городу 500 Тг</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col space-y-3">
                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => window.open("https://wa.me/7083978591", "_blank")}
                >
                  <Send className="mr-2 h-5 w-5" />
                  Заказать через WhatsApp
                </Button>
                <Button variant="outline" className="w-full" onClick={() => window.open("tel:+77083978591", "_blank")}>
                  <Phone className="mr-2 h-5 w-5" />
                  Позвонить
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="h-[300px] overflow-hidden rounded-lg shadow-lg md:h-[400px]">
            <iframe
              src="https://yandex.com/map-widget/v1/?um=constructor%3A4bbbcedd5418114b3e3a7323c15cc869efbf311fb76b92a5276307c972d5474e&amp;source=constructor"
              width="619"
              height="498"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
