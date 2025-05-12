"use client"
import Cart from "@/components/cart"

export default function FloatingCartButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Cart />
    </div>
  )
}
