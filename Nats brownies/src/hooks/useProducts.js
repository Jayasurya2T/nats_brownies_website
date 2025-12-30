import { useState, useEffect } from 'react';

const PRODUCTS_STORAGE_KEY = 'nats-brownies-products';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load products from JSON file or localStorage
  useEffect(() => {
    const loadProducts = async () => {
      try {
        // First try to load from localStorage (for admin updates)
        const savedProducts = localStorage.getItem(PRODUCTS_STORAGE_KEY);
        if (savedProducts) {
          const parsed = JSON.parse(savedProducts);
          setProducts(parsed.products || parsed);
          setLoading(false);
          return;
        }

        // Otherwise load from JSON file
        const response = await fetch('/data/products.json');
        if (!response.ok) {
          throw new Error('Failed to load products');
        }
        const data = await response.json();
        setProducts(data.products || data);
        setLoading(false);
      } catch (err) {
        console.error('Error loading products:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const saveProducts = (newProducts) => {
    const productsArray = Array.isArray(newProducts) ? newProducts : newProducts.products || [];
    setProducts(productsArray);
    localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify({ products: productsArray }));
  };

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now(), // Simple ID generation
    };
    const updatedProducts = [...products, newProduct];
    saveProducts(updatedProducts);
  };

  const updateProduct = (productId, updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, ...updatedProduct } : product
    );
    saveProducts(updatedProducts);
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    saveProducts(updatedProducts);
  };

  const filterProducts = (productsList, category) => {
    if (category === 'All') return productsList;
    return productsList.filter((product) => product.category === category);
  };

  const sortProducts = (productsList, sortBy) => {
    const sorted = [...productsList];
    if (sortBy === 'price-low') {
      return sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      return sorted.sort((a, b) => b.price - a.price);
    }
    return sorted;
  };

  return {
    products,
    loading,
    error,
    addProduct,
    updateProduct,
    deleteProduct,
    filterProducts,
    sortProducts,
    saveProducts,
  };
}

