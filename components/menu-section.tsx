"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Instagram, ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

export default function MenuSection() {
  const { addItem, setIsCartOpen } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (id: string, name: string, price: number, image: string) => {
    addItem({ id, name, price, image })
    toast({
      title: "Добавлено в корзину",
      description: name,
      action: (
        <ToastAction altText="Перейти в корзину" onClick={() => setIsCartOpen(true)}>
          Перейти в корзину
        </ToastAction>
      ),
    })
  }

  return (
    <section className="bg-white py-16 shadow-sm" id="menu">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Наше Меню</h2>
          <p className="mt-4 text-gray-600">Насладитесь нашими свежими и вкусными блюдами</p>
        </div>

        <Tabs defaultValue="rolls" className="w-full">
          <div className="tabs-container">
            <TabsList className="mb-16 grid w-full grid-cols-2 gap-2 rounded-lg border border-gray-200 bg-white p-1 shadow-md md:grid-cols-5">
              <TabsTrigger
                value="rolls"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:shadow-sm"
              >
                Роллы
              </TabsTrigger>
              <TabsTrigger
                value="pizza"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:shadow-sm"
              >
                Пицца
              </TabsTrigger>
              <TabsTrigger
                value="wings"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:shadow-sm"
              >
                Крылышки
              </TabsTrigger>
              <TabsTrigger
                value="snacks"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:shadow-sm"
              >
                Закуски
              </TabsTrigger>
              <TabsTrigger
                value="sauces"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:shadow-sm"
              >
                Соусы
              </TabsTrigger>
            </TabsList>
          </div>

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
                      onClick={() => handleAddToCart("philadelphia", "Филадельфия", 2200, "/menu/philadelphia.jpeg")}
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() =>
                        handleAddToCart("philadelphia-light", "Филадельфия Лайт", 2300, "/menu/philadelphia-light.jpeg")
                      }
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                        handleAddToCart(
                          "philadelphia-baked",
                          "Филадельфия Запеченный",
                          2500,
                          "/menu/philadelphia-baked.jpeg",
                        )
                      }
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() => handleAddToCart("california", "Калифорния", 1800, "/menu/california.jpeg")}
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                        handleAddToCart(
                          "california-baked",
                          "Калифорния Запеченный",
                          1900,
                          "/menu/california-baked.jpeg",
                        )
                      }
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() =>
                        handleAddToCart("caesar-baked", "Цезарь Запеченный", 1800, "/menu/caesar-baked.jpeg")
                      }
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() =>
                        handleAddToCart("caesar-tempura", "Цезарь Темпура", 1600, "/menu/caesar-tempura.jpeg")
                      }
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() => handleAddToCart("cheese-roll", "Чиз Ролл", 1800, "/menu/cheese-roll.jpeg")}
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() =>
                        handleAddToCart("parmesan-roll", "Ролл Пармезан", 1800, "/menu/parmesan-roll.jpeg")
                      }
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() => handleAddToCart("bonito-maki", "Бонито Маки", 1900, "/menu/bonito-maki.jpeg")}
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                        handleAddToCart("salmon-kimbap", "Кимпаб с лососем и сыром", 1860, "/menu/salmon-kimbap.jpeg")
                      }
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() =>
                        handleAddToCart("teriyaki-chicken", "Терияки Чикен", 1798, "/menu/teriyaki-chicken.jpeg")
                      }
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                        handleAddToCart(
                          "chicken-teriyaki-kimbap",
                          "Кимпаб с курицей терияки",
                          1798,
                          "/menu/chicken-teriyaki-kimbap.jpeg",
                        )
                      }
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() =>
                        handleAddToCart("classic-kimbap", "Кимпаб классический", 1550, "/menu/classic-kimbap.jpeg")
                      }
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() =>
                        handleAddToCart("vegetable-kimbap", "Овощной Кимпаб", 1488, "/menu/vegetable-kimbap.jpeg")
                      }
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() =>
                        handleAddToCart(
                          "philadelphia-grill",
                          "Филадельфия Гриль",
                          2300,
                          "/menu/philadelphia-grill.jpeg",
                        )
                      }
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() => handleAddToCart("alaska-maki", "Аляска Маки", 2000, "/menu/alaska-maki.jpeg")}
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() => handleAddToCart("dragon-maki", "Дракон Маки", 2200, "/menu/dragon-maki.jpeg")}
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                        handleAddToCart(
                          "alaska-maki-baked",
                          "Аляска Маки Запеченный",
                          2300,
                          "/menu/alaska-maki-baked.jpeg",
                        )
                      }
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() => handleAddToCart("cheese-roll-2", "Чиз Ролл", 1700, "/menu/cheese-roll-2.jpeg")}
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() => handleAddToCart("crab-tempura", "Краб Темпура", 1500, "/menu/crab-tempura.jpeg")}
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() => handleAddToCart("fresh-roll", "Фреш Ролл", 1900, "/menu/fresh-roll.jpeg")}
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                        handleAddToCart(
                          "california-shrimp",
                          "Калифорния с креветкой",
                          2000,
                          "/menu/california-shrimp.jpeg",
                        )
                      }
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() => handleAddToCart("phila-green", "Фила Гринн", 1900, "/menu/phila-green.jpeg")}
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() => handleAddToCart("eel-tempura", "Угорь Темпура", 1900, "/menu/eel-tempura.jpeg")}
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() => handleAddToCart("cake-baked", "Cake Запеченный", 2000, "/menu/cake-baked.jpeg")}
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() => handleAddToCart("kappa-maki", "Каппа Маки", 1000, "/menu/kappa-maki.jpeg")}
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() => handleAddToCart("sake-maki", "Сяке Маки", 1200, "/menu/sake-maki.jpeg")}
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() => handleAddToCart("cake-tempura", "Cake Темпура", 1800, "/menu/cake-tempura.jpeg")}
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() => handleAddToCart("crab-baked", "Краб Запеченный", 1600, "/menu/crab-baked.jpeg")}
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                        handleAddToCart(
                          "kappa-maki-baked",
                          "Каппа Маки Запеченный",
                          1300,
                          "/menu/kappa-maki-baked.jpeg",
                        )
                      }
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                        handleAddToCart(
                          "pizza-chicken-mushroom",
                          "Пицца Курица с грибами",
                          2100,
                          "/menu/pizza-chicken-mushroom.jpeg",
                        )
                      }
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() =>
                        handleAddToCart("pizza-four-seasons", "Пицца 4 Сезона", 2300, "/menu/pizza-four-seasons.jpeg")
                      }
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() =>
                        handleAddToCart("pizza-mushroom", "Пицца Грибной", 1600, "/menu/pizza-mushroom.jpeg")
                      }
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() =>
                        handleAddToCart("pizza-bolognese", "Пицца Болоньез", 2300, "/menu/pizza-bolognese.jpeg")
                      }
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() =>
                        handleAddToCart("pizza-margherita", "Пицца Маргарита", 1600, "/menu/pizza-margherita.jpeg")
                      }
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                        handleAddToCart(
                          "pizza-ham-mushroom",
                          "Пицца Ветчина с грибами",
                          2500,
                          "/menu/pizza-ham-mushroom.jpeg",
                        )
                      }
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() =>
                        handleAddToCart("pizza-pepperoni", "Пицца Пепперони", 2000, "/menu/pizza-pepperoni.jpeg")
                      }
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                        handleAddToCart("pizza-hunters", "Пицца Охотничья колбаски", 2300, "/menu/pizza-hunters.jpeg")
                      }
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() =>
                        handleAddToCart("pizza-chicken", "Пицца Куриный", 2000, "/menu/pizza-chicken.jpeg")
                      }
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                        onClick={() => handleAddToCart("wings-8", "Крылышки 8 шт", 2000, "/menu/chicken-wings.jpeg")}
                      >
                        <ShoppingCart className="mr-1 h-3 w-3" />В корзину
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-red-600">16 шт - 4500 ₸</span>
                      <Button
                        size="sm"
                        className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                        onClick={() => handleAddToCart("wings-16", "Крылышки 16 шт", 4500, "/menu/chicken-wings.jpeg")}
                      >
                        <ShoppingCart className="mr-1 h-3 w-3" />В корзину
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-red-600">24 шт - 5600 ₸</span>
                      <Button
                        size="sm"
                        className="h-8 bg-green-600 px-2 text-xs hover:bg-green-700"
                        onClick={() => handleAddToCart("wings-24", "Крылышки 24 шт", 5600, "/menu/chicken-wings.jpeg")}
                      >
                        <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() => handleAddToCart("corn-dog", "Корн-Дог 5 шт", 900, "/menu/corn-dog.jpeg")}
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() => handleAddToCart("wasabi", "Васаби", 200, "/menu/wasabi-portion.jpeg")}
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() => handleAddToCart("ginger", "Имбирь", 200, "/menu/ginger-portion.jpeg")}
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() => handleAddToCart("soy-sauce", "Соя соус", 200, "/menu/soy-sauce-portion.jpeg")}
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() =>
                        handleAddToCart("garlic-sauce", "Чесночный соус", 200, "/menu/garlic-sauce-portion.jpeg")
                      }
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() => handleAddToCart("cheese-sauce", "Сырный соус", 200, "/menu/cheese-sauce.jpeg")}
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() => handleAddToCart("unagi-sauce", "Соус Унаги", 300, "/menu/unagi-sauce.jpeg")}
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
                      onClick={() =>
                        handleAddToCart("signature-sauce", "Фирменный соус", 200, "/menu/signature-sauce.jpeg")
                      }
                    >
                      <ShoppingCart className="mr-1 h-3 w-3" />В корзину
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
