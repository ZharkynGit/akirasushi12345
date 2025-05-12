"use client"

import { Card, CardContent } from "@/components/ui/card"
import { StarIcon } from "lucide-react"

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Раха 1 kz",
      title: "Level 3 Local Expert",
      date: "December 5, 2024",
      rating: 5,
      text: "Все вкусно профессиональный вкус",
    },
    {
      id: 2,
      name: "Alesh Karshuga",
      title: "Level 2 Local Expert",
      date: "November 18, 2024",
      rating: 5,
      text: "Всё на высшем уровне",
    },
    {
      id: 3,
      name: "Руслан керемкулов",
      title: "Level 3 Local Expert",
      date: "January 29",
      rating: 5,
      text: "Очень вкусно готовить",
    },
  ]

  return (
    <section className="bg-white py-16 shadow-sm" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Отзывы наших клиентов</h2>
          <p className="mt-4 text-gray-600">Что говорят о нас наши гости</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full border border-gray-200 bg-white shadow-md">
              <CardContent className="flex h-full flex-col p-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="mb-4 flex-grow text-gray-600">{testimonial.text}</p>
                <div>
                  <div className="font-japanese font-semibold">{testimonial.name}</div>
                  <div className="mt-1 flex items-center justify-between text-sm text-gray-500">
                    <span>{testimonial.title}</span>
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
