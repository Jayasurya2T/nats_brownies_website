import { useState } from 'react';
import '../styles/ProductCard.css';

export function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setQuantity(1); // Reset quantity after adding
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            e.target.src = 'https://via.placeholder.com/300x300/5D4037/FFF8E1?text=' + encodeURIComponent(product.name);
          }}
        />
        <span className={`category-badge ${product.category.toLowerCase()}`}>
          {product.category}
        </span>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">₹{product.price} per piece</p>
        
        <div className="quantity-selector">
          <button
            className="quantity-btn"
            onClick={handleDecrease}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="quantity-value">{quantity}</span>
          <button
            className="quantity-btn"
            onClick={handleIncrease}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        
        <button
          className="btn btn-primary add-to-cart-btn"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

