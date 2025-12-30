import { useState } from 'react';
import '../styles/AdminPanel.css';

export function AdminPanel({ products, onAddProduct, onUpdateProduct, onDeleteProduct }) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: 'Egg',
    image: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingProduct) {
      onUpdateProduct(editingProduct.id, {
        name: formData.name,
        price: parseInt(formData.price),
        category: formData.category,
        image: formData.image || `/images/products/${formData.name.toLowerCase().replace(/\s+/g, '-')}-${formData.category.toLowerCase()}.jpg`,
      });
      setEditingProduct(null);
    } else {
      onAddProduct({
        name: formData.name,
        price: parseInt(formData.price),
        category: formData.category,
        image: formData.image || `/images/products/${formData.name.toLowerCase().replace(/\s+/g, '-')}-${formData.category.toLowerCase()}.jpg`,
      });
      setShowAddForm(false);
    }
    
    setFormData({
      name: '',
      price: '',
      category: 'Egg',
      image: '',
    });
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price.toString(),
      category: product.category,
      image: product.image,
    });
    setShowAddForm(true);
  };

  const handleCancel = () => {
    setShowAddForm(false);
    setEditingProduct(null);
    setFormData({
      name: '',
      price: '',
      category: 'Egg',
      image: '',
    });
  };

  const handleDelete = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      onDeleteProduct(productId);
    }
  };

  return (
    <div className="admin-panel">
      <div className="container">
        <div className="admin-header">
          <h1>Admin Panel</h1>
          <button
            className="btn btn-primary"
            onClick={() => {
              setShowAddForm(!showAddForm);
              setEditingProduct(null);
              setFormData({
                name: '',
                price: '',
                category: 'Egg',
                image: '',
              });
            }}
          >
            {showAddForm ? 'Cancel' : '+ Add New Product'}
          </button>
        </div>

        {showAddForm && (
          <div className="admin-form-container">
            <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
            <form className="admin-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., Cashews Brownie"
                />
              </div>

              <div className="form-group">
                <label htmlFor="price">Price (₹)</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                  min="1"
                  placeholder="e.g., 80"
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Egg">Egg</option>
                  <option value="Eggless">Eggless</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="image">Image URL (optional)</label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="Leave empty for auto-generated path"
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  {editingProduct ? 'Update Product' : 'Add Product'}
                </button>
                <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="admin-products">
          <h2>All Products ({products.length})</h2>
          <div className="products-table">
            <div className="table-header">
              <div className="table-cell">Image</div>
              <div className="table-cell">Name</div>
              <div className="table-cell">Category</div>
              <div className="table-cell">Price</div>
              <div className="table-cell">Actions</div>
            </div>
            {products.map((product) => (
              <div key={product.id} className="table-row">
                <div className="table-cell">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-thumbnail"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/60x60/5D4037/FFF8E1?text=' + encodeURIComponent(product.name.charAt(0));
                    }}
                  />
                </div>
                <div className="table-cell">{product.name}</div>
                <div className="table-cell">
                  <span className={`category-badge ${product.category.toLowerCase()}`}>
                    {product.category}
                  </span>
                </div>
                <div className="table-cell">₹{product.price}</div>
                <div className="table-cell">
                  <div className="action-buttons">
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => handleEdit(product)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-outline btn-sm delete-btn"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

