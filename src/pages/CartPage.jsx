import { Cart } from '../components/Cart'
import { CartTotal } from '../components/CartTotal'

export function CartPage() {
  return (
    <section className="cart-page">
      <h1>Carrito</h1>
      <Cart />
      <CartTotal />
    </section>
  )
}
