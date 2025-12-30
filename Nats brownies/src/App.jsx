import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Admin } from './pages/Admin';
import { About } from './components/About';
import { Cart } from './components/Cart';
import { useCart } from './hooks/useCart';
import './styles/App.css';

function AppContent() {
  const location = useLocation();
  const { cart, updateQuantity, removeFromCart, getCartItemCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">
            🍫 Nats Brownies
          </Link>
          <nav className="nav">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/admin" 
              className={`nav-link ${location.pathname === '/admin' ? 'active' : ''}`}
            >
              Admin
            </Link>
            <div className="cart-icon" onClick={() => setIsCartOpen(true)}>
              🛒
              {getCartItemCount() > 0 && (
                <span className="cart-badge">{getCartItemCount()}</span>
              )}
            </div>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Nats Brownies. All rights reserved.</p>
        <p>Made with ❤️ by Varshini Manikandan</p>
      </footer>

      <Cart
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onClose={() => setIsCartOpen(false)}
        isOpen={isCartOpen}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

