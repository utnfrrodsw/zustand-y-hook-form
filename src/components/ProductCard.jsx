import { Link } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'

export function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart)

  return (
    <article className="card">
      <Link to={`/product/${product.id}`} className="card-image-link">
        <img src={product.image} alt={product.name} className="card-image" />
      </Link>
      <div className="card-body">
        <h3>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="card-price">${product.price}</p>
        <div className="card-actions">
          <Link to={`/product/${product.id}`} className="btn btn-secondary">
            Ver detalle
          </Link>
          <button
            type="button"
            className="btn"
            onClick={() => addToCart(product)}
          >
            Agregar
          </button>
        </div>
      </div>
    </article>
  )
}
