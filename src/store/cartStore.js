import { create } from 'zustand'

export const useCartStore = create((set, get) => ({
  items: [],

  addToCart: (product) => {
    const items = get().items
    const existing = items.find((item) => item.id === product.id)

    if (existing) {
      set({
        items: items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      })
    } else {
      set({
        items: [...items, { ...product, quantity: 1 }],
      })
    }
  },

  increment: (id) => {
    set({
      items: get().items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    })
  },

  decrement: (id) => {
    const items = get().items
    const target = items.find((item) => item.id === id)
    if (!target) return

    if (target.quantity <= 1) {
      set({ items: items.filter((item) => item.id !== id) })
    } else {
      set({
        items: items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        ),
      })
    }
  },

  getTotalQuantity: () => {
    return get().items.reduce((sum, item) => sum + item.quantity, 0)
  },

  getSubtotal: () => {
    return get().items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    )
  },

  getTotal: () => {
    const subtotal = get().getSubtotal()
    const quantity = get().getTotalQuantity()
    // 10 unidades o más → 20% de descuento
    return quantity >= 10 ? subtotal * 0.8 : subtotal
  },
}))
