"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Instagram } from "lucide-react"

export default function MenuSection() {
  return (
    <section className="bg-white py-16 shadow-sm" id="menu">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Наше Меню</h2>
          <p className="mt-4 text-gray-600">Насладитесь нашими свежими и вкусными блюдами</p>
        </div>

        <Tabs defaultValue="rolls" className="w-full">
          <TabsList className="mb-16 grid w-full grid-cols-2 gap-2 md:grid-cols-5">
            <TabsTrigger value="rolls">Роллы</TabsTrigger>
            <TabsTrigger value="pizza">Пицца</TabsTrigger>
            <TabsTrigger value="wings">Крылышки</TabsTrigger>
            <TabsTrigger value="snacks">Закуски</TabsTrigger>
            <TabsTrigger value="sauces">Соусы</TabsTrigger>
          </TabsList>

          <TabsContent value="rolls" className="mt-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/philadelphia.jpeg"
                      alt="Филадельфия"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Филадельфия</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">2200 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Филадельфия", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/philadelphia-light.jpeg"
                      alt="Филадельфия Лайт"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Филадельфия Лайт</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">2300 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Филадельфия Лайт", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/philadelphia-baked.jpeg"
                      alt="Филадельфия Запеченный"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Филадельфия Запеченный</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">2500 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() =>
                        window.open("https://wa.me/77083978591?text=Заказ: Филадельфия Запеченный", "_blank")
                      }
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/california.jpeg"
                      alt="Калифорния"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Калифорния</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">1800 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Калифорния", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/california-baked.jpeg"
                      alt="Калифорния Запеченный"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Калифорния Запеченный</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">1900 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() =>
                        window.open("https://wa.me/77083978591?text=Заказ: Калифорния Запеченный", "_blank")
                      }
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/caesar-baked.jpeg"
                      alt="Цезарь Запеченный"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Цезарь Запеченный</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">1800 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Цезарь Запеченный", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/caesar-tempura.jpeg"
                      alt="Цезарь Темпура"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Цезарь Темпура</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">1600 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Цезарь Темпура", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/cheese-roll.jpeg"
                      alt="Чиз Ролл"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Чиз Ролл</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">1800 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Чиз Ролл", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/parmesan-roll.jpeg"
                      alt="Ролл Пармезан"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Ролл Пармезан</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">1800 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Ролл Пармезан", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/bonito-maki.jpeg"
                      alt="Бонито Маки"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Бонито Маки</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">1900 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Бонито Маки", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/salmon-kimbap.jpeg"
                      alt="Кимпаб с лососем и сыром"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Кимпаб с лососем и сыром</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">1860 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() =>
                        window.open("https://wa.me/77083978591?text=Заказ: Кимпаб с лососем и сыром", "_blank")
                      }
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/teriyaki-chicken.jpeg"
                      alt="Терияки Чикен"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Терияки Чикен</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">1798 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Терияки Чикен", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/chicken-teriyaki-kimbap.jpeg"
                      alt="Кимпаб с курицей терияки"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Кимпаб с курицей терияки</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">1798 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() =>
                        window.open("https://wa.me/77083978591?text=Заказ: Кимпаб с курицей терияки", "_blank")
                      }
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/classic-kimbap.jpeg"
                      alt="Кимпаб классический"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Кимпаб классический</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">1550 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Кимпаб классический", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/vegetable-kimbap.jpeg"
                      alt="Овощной Кимпаб"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Овощной Кимпаб</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">1488 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Овощной Кимпаб", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/philadelphia-grill.jpeg"
                      alt="Филадельфия Гриль"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Филадельфия Гриль</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">2300 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Филадельфия Гриль", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/alaska-maki.jpeg"
                      alt="Аляска Маки"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Аляска Маки</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">2000 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Аляска Маки", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/dragon-maki.jpeg"
                      alt="Дракон Маки"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Дракон Маки</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">2200 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Дракон Маки", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/alaska-maki-baked.jpeg"
                      alt="Аляска Маки Запеченный"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Аляска Маки Запеченный</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">2300 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() =>
                        window.open("https://wa.me/77083978591?text=Заказ: Аляска Маки Запеченный", "_blank")
                      }
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/cheese-roll-2.jpeg"
                      alt="Чиз Ролл"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Чиз Ролл</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">1700 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Чиз Ролл", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/crab-tempura.jpeg"
                      alt="Краб Темпура"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Краб Темпура</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">1500 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Краб Темпура", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/fresh-roll.jpeg"
                      alt="Фреш Ролл"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Фреш Ролл</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">1900 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Фреш Ролл", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/california-shrimp.jpeg"
                      alt="Калифорния с креветкой"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Калифорния с креветкой</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">2000 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() =>
                        window.open("https://wa.me/77083978591?text=Заказ: Калифорния с креветкой", "_blank")
                      }
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/phila-green.jpeg"
                      alt="Фила Гринн"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Фила Гринн</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">1900 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Фила Гринн", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/eel-tempura.jpeg"
                      alt="Угорь Темпура"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Угорь Темпура</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">1900 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Угорь Темпура", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/cake-baked.jpeg"
                      alt="Cake Запеченный"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Cake Запеченный</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">2000 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Cake Запеченный", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/kappa-maki.jpeg"
                      alt="Каппа Маки"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Каппа Маки</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">1000 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Каппа Маки", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/sake-maki.jpeg"
                      alt="Сяке Маки"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Сяке Маки</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">1200 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Сяке Маки", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/cake-tempura.jpeg"
                      alt="Cake Темпура"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Cake Темпура</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">1800 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Cake Темпура", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/crab-baked.jpeg"
                      alt="Краб Запеченный"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Краб Запеченный</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">1600 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Краб Запеченный", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/kappa-maki-baked.jpeg"
                      alt="Каппа Маки Запеченный"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Каппа Маки Запеченный</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">1300 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() =>
                        window.open("https://wa.me/77083978591?text=Заказ: Каппа Маки Запеченный", "_blank")
                      }
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* New Pizza Tab */}
          <TabsContent value="pizza" className="mt-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/pizza-chicken-mushroom.jpeg"
                      alt="Курица с грибами"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Курица с грибами</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">2100 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() =>
                        window.open("https://wa.me/77083978591?text=Заказ: Пицца Курица с грибами", "_blank")
                      }
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/pizza-four-seasons.jpeg"
                      alt="4 Сезона"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">4 Сезона</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">2300 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Пицца 4 Сезона", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/pizza-mushroom.jpeg"
                      alt="Грибной"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Грибной</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">1600 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Пицца Грибной", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/pizza-bolognese.jpeg"
                      alt="Болоньез"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Болоньез</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">2300 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Пицца Болоньез", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/pizza-margherita.jpeg"
                      alt="Маргарита"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Маргарита</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">1600 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Пицца Маргарита", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/pizza-ham-mushroom.jpeg"
                      alt="Ветчина с грибами"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Ветчина с грибами</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">2500 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() =>
                        window.open("https://wa.me/77083978591?text=Заказ: Пицца Ветчина с грибами", "_blank")
                      }
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/pizza-pepperoni.jpeg"
                      alt="Пепперони"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Пепперони</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">2000 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Пицца Пепперони", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/pizza-hunters.jpeg"
                      alt="Охотничья колбаски"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Охотничья колбаски</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">2300 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() =>
                        window.open("https://wa.me/77083978591?text=Заказ: Пицца Охотничья колбаски", "_blank")
                      }
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/pizza-chicken.jpeg"
                      alt="Куриный"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Куриный</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">2000 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Пицца Куриный", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="wings" className="mt-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/chicken-wings.jpeg"
                      alt="Крылышки"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Крылышки</h3>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-red-600">8 шт - 2000 ₸</span>
                      <Button
                        size="sm"
                        className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                        onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Крылышки 8 шт", "_blank")}
                      >
                        Заказать
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-red-600">16 шт - 4500 ₸</span>
                      <Button
                        size="sm"
                        className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                        onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Крылышки 16 шт", "_blank")}
                      >
                        Заказать
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-red-600">24 шт - 5600 ₸</span>
                      <Button
                        size="sm"
                        className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                        onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Крылышки 24 шт", "_blank")}
                      >
                        Заказать
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="snacks" className="mt-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/corn-dog.jpeg"
                      alt="Корн-Дог 5 шт"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Корн-Дог 5 шт</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">900 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Корн-Дог 5 шт", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sauces" className="mt-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/wasabi-portion.jpeg"
                      alt="Васаби"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Васаби</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">200 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Васаби", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/ginger-portion.jpeg"
                      alt="Имбирь"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Имбирь</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">200 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Имбирь", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/soy-sauce-portion.jpeg"
                      alt="Соя соус"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Соя соус</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">200 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Соя соус", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/garlic-sauce-portion.jpeg"
                      alt="Чесночный соус"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Чесночный соус</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">200 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Чесночный соус", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/cheese-sauce.jpeg"
                      alt="Сырный соус"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Сырный соус</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">200 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Сырный соус", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/unagi-sauce.jpeg"
                      alt="Соус Унаги"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Соус Унаги</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">300 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Соус Унаги", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/signature-sauce.jpeg"
                      alt="Фирменный соус"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Фирменный соус</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">200 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Фирменный соус", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-gray-200 bg-white shadow-md">
                <div className="p-3">
                  <div className="overflow-hidden rounded-lg bg-gray-100 shadow-inner" style={{ height: "240px" }}>
                    <Image
                      src="/menu/sriracha-sauce.jpeg"
                      alt="Соус шрирача"
                      width={300}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold line-clamp-2">Соус шрирача</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">200 ₸</span>
                    <Button
                      size="sm"
                      className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77083978591?text=Заказ: Соус шрирача", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-600">Полное меню доступно в нашем Instagram</p>
          <Button
            variant="outline"
            size="lg"
            className="inline-flex items-center"
            onClick={() => window.open("https://instagram.com/Akira_sushi_tdk", "_blank")}
          >
            <Instagram className="mr-2 h-5 w-5" />
            Посмотреть полное меню
          </Button>
        </div>
      </div>
    </section>
  )
}
