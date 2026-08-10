import products from '../data/products.json'
import { ProductCard } from './ProductCard'

export function ProductList() {
  return (
    <section>
      <h1>Productos</h1>
      <div className="cards">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
