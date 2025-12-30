import '../styles/CartItem.css';

export function CartItem({ item, onUpdateQuantity, onRemove }) {
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity <= 0) {
      onRemove(item.id);
    } else {
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h4 className="cart-item-name">{item.name}</h4>
        <p className="cart-item-category">{item.category}</p>
        <p className="cart-item-price">₹{item.price} per piece</p>
      </div>
      
      <div className="cart-item-controls">
        <div className="cart-quantity-selector">
          <button
            className="cart-quantity-btn"
            onClick={() => handleQuantityChange(item.quantity - 1)}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="cart-quantity-value">{item.quantity}</span>
          <button
            className="cart-quantity-btn"
            onClick={() => handleQuantityChange(item.quantity + 1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        
        <p className="cart-item-total">₹{item.price * item.quantity}</p>
        
        <button
          className="cart-remove-btn"
          onClick={() => onRemove(item.id)}
          aria-label="Remove item"
        >
          ×
        </button>
      </div>
    </div>
  );
}

