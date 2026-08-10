import { Link, useParams } from 'react-router-dom'
import products from '../data/products.json'
import { useCartStore } from '../store/cartStore'

export function ProductPage() {
  const { id } = useParams()
  const addToCart = useCartStore((state) => state.addToCart)
  const product = products.find((item) => item.id === Number(id))

  if (!product) {
    return (
      <section>
        <h1>Producto no encontrado</h1>
        <Link to="/">Volver a productos</Link>
      </section>
    )
  }

  return (
    <section className="product-detail">
      <Link to="/" className="back-link">
        ← Volver
      </Link>
      <div className="product-detail-grid">
        <img
          src={product.image}
          alt={product.name}
          className="product-detail-image"
        />
        <div>
          <h1>{product.name}</h1>
          <p className="card-price">${product.price}</p>
          <p>{product.description}</p>
          <button
            type="button"
            className="btn"
            onClick={() => addToCart(product)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </section>
  )
}
