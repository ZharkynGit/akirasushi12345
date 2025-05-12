"use client"

import { useState } from "react"
import { X, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart, type CartItem } from "@/context/cart-context"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function Cart() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, clearCart, isCartOpen, setIsCartOpen } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const handleCheckout = () => {
    if (items.length === 0) return

    const orderText = items.map((item) => `${item.name} x${item.quantity} - ${item.price * item.quantity} ₸`).join("\n")

    const message = `Новый заказ:\n\n${orderText}\n\nИтого: ${totalPrice} ₸`

    window.open(`https://wa.me/77083978591?text=${encodeURIComponent(message)}`, "_blank")
    setIsCartOpen(false)
    clearCart()
  }

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative rounded-full bg-white shadow-md hover:bg-gray-100"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingCart className="h-5 w-5 text-red-600" />
          {totalItems > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full max-w-md sm:max-w-lg flex flex-col">
        <SheetHeader className="mb-4">
          <SheetTitle className="text-xl font-bold">Ваш заказ</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex h-[50vh] flex-col items-center justify-center">
            <ShoppingCart className="mb-4 h-16 w-16 text-gray-300" />
            <p className="text-lg font-medium text-gray-500">Ваша корзина пуста</p>
            <p className="mt-2 text-center text-gray-400">Добавьте что-нибудь из меню, чтобы сделать заказ</p>
            <Button className="mt-6" onClick={() => setIsCartOpen(false)}>
              Вернуться к меню
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-4 flex justify-end">
              <Button
                variant="ghost"
                size="sm"
                className="text-red-600 hover:bg-red-50 hover:text-red-700"
                onClick={clearCart}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Очистить корзину
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto pr-2">
              {items.map((item) => (
                <CartItemCard key={item.id} item={item} />
              ))}
            </div>

            <div className="mt-6 border-t border-gray-200 pt-4">
              <div className="mb-4 flex justify-between">
                <span className="text-lg font-medium">Итого:</span>
                <span className="text-lg font-bold">{totalPrice} ₸</span>
              </div>

              <Button
                className="w-full bg-green-600 hover:bg-green-700"
                size="lg"
                onClick={handleCheckout}
                disabled={items.length === 0}
              >
                Оформить заказ
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}

function CartItemCard({ item }: { item: CartItem }) {
  const { updateQuantity, removeItem } = useCart()

  return (
    <div className="mb-4 flex items-center rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
      <div className="mr-3 h-16 w-16 overflow-hidden rounded-md bg-gray-100">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          width={64}
          height={64}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex-1">
        <h4 className="font-medium">{item.name}</h4>
        <p className="text-sm font-bold text-red-600">{item.price} ₸</p>
      </div>

      <div className="flex items-center">
        <Button
          variant="outline"
          size="icon"
          className="h-7 w-7 rounded-full"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
        >
          <Minus className="h-3 w-3" />
        </Button>

        <span className="mx-2 w-6 text-center">{item.quantity}</span>

        <Button
          variant="outline"
          size="icon"
          className="h-7 w-7 rounded-full"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          <Plus className="h-3 w-3" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="ml-2 h-7 w-7 text-gray-400 hover:text-red-600"
          onClick={() => removeItem(item.id)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
