"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Instagram } from "lucide-react"

export default function MenuSection() {
  return (
    <section className="bg-gray-50 py-16" id="menu">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Наше Меню</h2>
          <p className="mt-4 text-gray-600">Насладитесь нашими свежими и вкусными блюдами</p>
        </div>

        <Tabs defaultValue="rolls" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-2 gap-2 md:grid-cols-4">
            <TabsTrigger value="rolls">Роллы</TabsTrigger>
            <TabsTrigger value="wings">Крылышки</TabsTrigger>
            <TabsTrigger value="snacks">Закуски</TabsTrigger>
            <TabsTrigger value="sauces">Соусы</TabsTrigger>
          </TabsList>

          <TabsContent value="rolls" className="mt-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="p-4">
                  <div className="aspect-auto overflow-hidden rounded-lg">
                    <Image
                      src="/menu/salmon-kimbap.jpeg"
                      alt="Кимпаб с лососем и сыром"
                      width={400}
                      height={300}
                      className="w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Кимпаб с лососем и сыром</h3>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-red-600">1860 ₸</span>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77079317132", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="p-4">
                  <div className="aspect-auto overflow-hidden rounded-lg">
                    <Image
                      src="/menu/teriyaki-chicken.jpeg"
                      alt="Терияки Чикен"
                      width={400}
                      height={300}
                      className="w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Терияки Чикен</h3>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-red-600">1798 ₸</span>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77079317132", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="p-4">
                  <div className="aspect-auto overflow-hidden rounded-lg">
                    <Image
                      src="/menu/chicken-teriyaki-kimbap.jpeg"
                      alt="Кимпаб с курицей терияки"
                      width={400}
                      height={300}
                      className="w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Кимпаб с курицей терияки</h3>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-red-600">1798 ₸</span>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77079317132", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="p-4">
                  <div className="aspect-auto overflow-hidden rounded-lg">
                    <Image
                      src="/menu/classic-kimbap.jpeg"
                      alt="Кимпаб классический"
                      width={400}
                      height={300}
                      className="w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Кимпаб классический</h3>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-red-600">1550 ₸</span>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77079317132", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="p-4">
                  <div className="aspect-auto overflow-hidden rounded-lg">
                    <Image
                      src="/menu/vegetable-kimbap.jpeg"
                      alt="Овощной Кимпаб"
                      width={400}
                      height={300}
                      className="w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Овощной Кимпаб</h3>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-red-600">1488 ₸</span>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77079317132", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="wings" className="mt-6">
            <Card className="overflow-hidden">
              <div className="p-4">
                <div className="aspect-auto overflow-hidden rounded-lg">
                  <Image
                    src="/menu/chicken-wings.jpeg"
                    alt="Крылышки"
                    width={400}
                    height={300}
                    className="w-full object-contain"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold">Крылышки</h3>
                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <div className="flex items-center justify-between space-x-4">
                    <span className="text-lg font-bold text-red-600">8 шт - 2000 ₸</span>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77079317132?text=Заказ: Крылышки 8 шт", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                  <div className="flex items-center justify-between space-x-4">
                    <span className="text-lg font-bold text-red-600">16 шт - 4500 ₸</span>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77079317132?text=Заказ: Крылышки 16 шт", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                  <div className="flex items-center justify-between space-x-4">
                    <span className="text-lg font-bold text-red-600">24 шт - 5600 ₸</span>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77079317132?text=Заказ: Крылышки 24 шт", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="snacks" className="mt-6">
            <Card className="overflow-hidden">
              <div className="p-4">
                <div className="aspect-auto overflow-hidden rounded-lg">
                  <Image
                    src="/menu/corn-dog.jpeg"
                    alt="Корн-Дог 5 шт"
                    width={400}
                    height={300}
                    className="w-full object-contain"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold">Корн-Дог 5 шт</h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-red-600">900 ₸</span>
                  <Button
                    size="sm"
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() => window.open("https://wa.me/77079317132", "_blank")}
                  >
                    Заказать
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="sauces" className="mt-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="p-4">
                  <div className="aspect-auto overflow-hidden rounded-lg">
                    <Image
                      src="/menu/cheese-sauce.jpeg"
                      alt="Сырный соус"
                      width={400}
                      height={300}
                      className="w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Сырный соус</h3>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-red-600">200 ₸</span>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/77079317132", "_blank")}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="p-4">
                  <div className="aspect-auto overflow-hidden rounded-lg">
                    <Image
                      src="/menu/unagi-sauce.jpeg"
                      alt="Соусы"
                      width={400}
                      height={300}
                      className="w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Соус Унаги / Фирменный / Шрирача</h3>
                  <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                    <div className="flex items-center justify-between space-x-4">
                      <span className="text-lg font-bold text-red-600">Унаги - 300 ₸</span>
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700"
                        onClick={() => window.open("https://wa.me/77079317132?text=Заказ: Соус Унаги", "_blank")}
                      >
                        Заказать
                      </Button>
                    </div>
                    <div className="flex items-center justify-between space-x-4">
                      <span className="text-lg font-bold text-red-600">Фирменный - 200 ₸</span>
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700"
                        onClick={() => window.open("https://wa.me/77079317132?text=Заказ: Фирменный соус", "_blank")}
                      >
                        Заказать
                      </Button>
                    </div>
                    <div className="flex items-center justify-between space-x-4">
                      <span className="text-lg font-bold text-red-600">Шрирача - 200 ₸</span>
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700"
                        onClick={() => window.open("https://wa.me/77079317132?text=Заказ: Соус шрирача", "_blank")}
                      >
                        Заказать
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="p-4">
                  <div className="aspect-auto overflow-hidden rounded-lg">
                    <Image
                      src="/menu/wasabi.jpeg"
                      alt="Васаби/Имбирь/Соевый соус"
                      width={400}
                      height={300}
                      className="w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Васаби / Имбирь / Соевый соус</h3>
                  <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                    <div className="flex items-center justify-between space-x-4">
                      <span className="text-lg font-bold text-red-600">Васаби - 200 ₸</span>
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700"
                        onClick={() => window.open("https://wa.me/77079317132?text=Заказ: Васаби", "_blank")}
                      >
                        Заказать
                      </Button>
                    </div>
                    <div className="flex items-center justify-between space-x-4">
                      <span className="text-lg font-bold text-red-600">Имбирь - 200 ₸</span>
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700"
                        onClick={() => window.open("https://wa.me/77079317132?text=Заказ: Имбирь", "_blank")}
                      >
                        Заказать
                      </Button>
                    </div>
                    <div className="flex items-center justify-between space-x-4">
                      <span className="text-lg font-bold text-red-600">Соевый соус - 200 ₸</span>
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700"
                        onClick={() => window.open("https://wa.me/77079317132?text=Заказ: Соевый соус", "_blank")}
                      >
                        Заказать
                      </Button>
                    </div>
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
