import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { useCurrentUserStore } from '../store/currentUser';

export function Header() {
  const items = useCartStore((state) => state.items);
  const getTotalQuantity = useCartStore((state) => state.getTotalQuantity);
  const getTotal = useCartStore((state) => state.getTotal);

  const user = useCurrentUserStore((state) => state.user);

  const quantity = getTotalQuantity();
  const total = getTotal();

  // items se usa solo para re-renderizar cuando cambia el carrito
  void items;

  return (
    <header className="header">
      <Link to="/" className="brand">
        Tienda Zustand
      </Link>

      <nav className="nav">
        <Link to="/">Productos</Link>
        <Link to="/registro">Registro</Link>
        <Link to="/cart" className="cart-link" aria-label="Ir al carrito">
          <span className="cart-icon" aria-hidden="true">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="9" cy="20" r="1.5" />
              <circle cx="18" cy="20" r="1.5" />
              <path d="M3 3h2l2.4 12.3a2 2 0 0 0 2 1.7h7.4a2 2 0 0 0 2-1.6L21 8H7" />
            </svg>
            {quantity > 0 && <span className="cart-badge">{quantity}</span>}
          </span>
          <span className="cart-amount">${total.toFixed(2)}</span>
        </Link>
        <div>
          {user ? (
            <div>
              <span>{user.name}</span>
              <button
                onClick={() => useCurrentUserStore.getState().clearUser()}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() =>
                useCurrentUserStore
                  .getState()
                  .setUser({
                    id: 1,
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                  })
              }
            >
              Iniciar sesión
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
