import { AdminPanel } from '../components/AdminPanel';
import { useProducts } from '../hooks/useProducts';

export function Admin() {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();

  return (
    <AdminPanel
      products={products}
      onAddProduct={addProduct}
      onUpdateProduct={updateProduct}
      onDeleteProduct={deleteProduct}
    />
  );
}

