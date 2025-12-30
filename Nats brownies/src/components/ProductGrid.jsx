import { ProductCard } from './ProductCard';
import '../styles/ProductGrid.css';

export function ProductGrid({ products, onAddToCart }) {
  if (products.length === 0) {
    return (
      <div className="empty-state">
        <p>No products found. Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

