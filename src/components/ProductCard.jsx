import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card glass">
      <Link to={`/product/${product.id}`} className="card-img-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="card-img"
          loading="lazy"
        />
        {product.badge && <span className="badge-tag">{product.badge}</span>}
      </Link>
      <div className="card-body">
        <span className="card-category">{product.category}</span>
        <Link to={`/product/${product.id}`}>
          <h3 className="card-title">{product.name}</h3>
        </Link>
        <p className="card-desc">{product.tagline}</p>
        <div className="card-footer">
          <div className="price-box">
            <span className="current-price">${product.price}</span>
            {product.originalPrice && (
              <span className="old-price">${product.originalPrice}</span>
            )}
          </div>
          <button
            onClick={() => addToCart(product)}
            className="add-btn"
            aria-label={`Add ${product.name} to cart`}
          >
            <Plus size={16} />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
