import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Star, ShoppingBag, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '5rem 1rem' }}>
        <h2>Product not found</h2>
        <p style={{ color: 'var(--text-muted)', margin: '1rem 0 2rem' }}>
          The item you are searching for does not exist or has been retired.
        </p>
        <button
          onClick={() => navigate('/')}
          className="add-btn"
          style={{ margin: '0 auto' }}
        >
          Return to Catalog
        </button>
      </div>
    );
  }

  return (
    <div>
      <Link to="/" className="back-link">
        <ArrowLeft size={16} />
        <span>Back to all products</span>
      </Link>

      <div className="detail-layout">
        <div className="detail-gallery">
          <img
            src={product.image}
            alt={product.name}
            className="detail-img"
          />
        </div>

        <div className="detail-info">
          <span className="card-category">{product.category}</span>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, margin: '0.5rem 0 1rem', lineHeight: 1.2 }}>
            {product.name}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', color: '#f59e0b', gap: '0.25rem' }}>
              <Star size={16} fill="#f59e0b" />
              <span style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>{product.rating}</span>
            </div>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              ({product.reviewsCount} customer reviews)
            </span>
          </div>

          <div className="price-box" style={{ marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="old-price" style={{ fontSize: '1.1rem' }}>
                ${product.originalPrice}
              </span>
            )}
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            {product.description}
          </p>

          <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#fff', marginTop: '1rem' }}>
            Key Specifications & Features
          </h3>
          <ul className="features-list">
            {product.features.map((feature, idx) => (
              <li key={idx} className="feature-item">
                <Check size={18} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => addToCart(product)}
            className="add-btn"
            style={{ padding: '0.9rem 2rem', fontSize: '1.05rem', justifyContent: 'center' }}
          >
            <ShoppingBag size={20} />
            <span>Add to Cart - ${product.price}</span>
          </button>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              <Truck size={18} color="var(--accent)" />
              <span>Complimentary Express Shipping</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              <ShieldCheck size={18} color="var(--accent)" />
              <span>2-Year International Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
