import { useCartStore } from '../store/cartStore'

export function CartTotal() {
  const items = useCartStore((state) => state.items)
  const getTotalQuantity = useCartStore((state) => state.getTotalQuantity)
  const getSubtotal = useCartStore((state) => state.getSubtotal)
  const getTotal = useCartStore((state) => state.getTotal)

  const quantity = getTotalQuantity()
  const subtotal = getSubtotal()
  const total = getTotal()
  const hasDiscount = quantity >= 10

  if (items.length === 0) {
    return null
  }

  return (
    <section className="cart-total">
      <h2>Resumen</h2>
      <p>Unidades: {quantity}</p>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      {hasDiscount && <p className="discount">Descuento 20% (10 unidades o más)</p>}
      <p className="total-line">
        <strong>Total: ${total.toFixed(2)}</strong>
      </p>
    </section>
  )
}
