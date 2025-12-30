import { useState, useMemo } from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { FilterBar } from '../components/FilterBar';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../hooks/useCart';
import '../styles/Home.css';

export function Home() {
  const { products, filterProducts, sortProducts } = useProducts();
  const { addToCart } = useCart();
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  const filteredAndSortedProducts = useMemo(() => {
    let result = filterProducts(products, activeFilter);
    if (sortBy !== 'default') {
      result = sortProducts(result, sortBy);
    }
    return result;
  }, [products, activeFilter, sortBy, filterProducts, sortProducts]);

  return (
    <div className="home-page">
      <div className="container">
        <div className="page-header">
          <h1>Our Brownie Collection</h1>
          <p className="page-subtitle">
            Handcrafted with love, available in both egg and eggless varieties
          </p>
        </div>

        <FilterBar
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <ProductGrid products={filteredAndSortedProducts} onAddToCart={addToCart} />
      </div>
    </div>
  );
}

