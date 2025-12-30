import { useState } from 'react';
import { CartItem } from './CartItem';
import { getWhatsAppLink, getEmailLink, getInstagramMessage, copyToClipboard } from '../utils/orderFormatter';
import '../styles/Cart.css';

export function Cart({ cart, onUpdateQuantity, onRemove, onClose, isOpen }) {
  const [showOrderOptions, setShowOrderOptions] = useState(false);
  const [copied, setCopied] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    setShowOrderOptions(true);
  };

  const handleWhatsApp = () => {
    const link = getWhatsAppLink(cart, total);
    window.open(link, '_blank');
  };

  const handleEmail = () => {
    const link = getEmailLink(cart, total);
    window.location.href = link;
  };

  const handleInstagram = async () => {
    const message = getInstagramMessage(cart, total);
    try {
      await copyToClipboard(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      alert('Order message copied! Open Instagram and paste it in a DM to @nats_vlog29');
    } catch (error) {
      alert('Failed to copy. Please manually copy the order details.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
            ×
          </button>
        </div>

        <div className="cart-content">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is empty</p>
              <p className="cart-empty-subtitle">Add some delicious brownies!</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={onUpdateQuantity}
                    onRemove={onRemove}
                  />
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <span className="cart-total-label">Total:</span>
                  <span className="cart-total-amount">₹{total}</span>
                </div>

                {!showOrderOptions ? (
                  <button className="btn btn-primary place-order-btn" onClick={handlePlaceOrder}>
                    Place Order
                  </button>
                ) : (
                  <div className="order-options">
                    <p className="order-options-title">Choose how to place your order:</p>
                    <div className="order-buttons">
                      <button className="btn btn-primary order-btn" onClick={handleWhatsApp}>
                        📱 WhatsApp
                      </button>
                      <button className="btn btn-primary order-btn" onClick={handleInstagram}>
                        {copied ? '✓ Copied!' : '📷 Instagram'}
                      </button>
                      <button className="btn btn-secondary order-btn" onClick={handleEmail}>
                        ✉️ Email
                      </button>
                    </div>
                    <button
                      className="btn btn-outline back-btn"
                      onClick={() => setShowOrderOptions(false)}
                    >
                      Back
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

