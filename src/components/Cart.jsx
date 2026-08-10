import { Link } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'

export function Cart() {
  const items = useCartStore((state) => state.items)
  const increment = useCartStore((state) => state.increment)
  const decrement = useCartStore((state) => state.decrement)

  if (items.length === 0) {
    return <p>El carrito está vacío.</p>
  }

  return (
    <ul className="cart-list">
      {items.map((item) => (
        <li key={item.id} className="cart-item">
          {item.image && (
            <img src={item.image} alt={item.name} className="cart-thumb" />
          )}
          <div className="cart-item-info">
            <Link to={`/product/${item.id}`}>{item.name}</Link>
            <span>
              ${item.price} × {item.quantity}
            </span>
          </div>
          <div className="cart-item-actions">
            <button type="button" onClick={() => decrement(item.id)}>
              −
            </button>
            <button type="button" onClick={() => increment(item.id)}>
              +
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
