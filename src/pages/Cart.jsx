import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, CheckCircle2, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart, cartTotal } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);

  const handleCheckout = () => {
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return (
      <div style={{ textAlign: 'center', padding: '5rem 1rem' }} className="glass">
        <CheckCircle2 size={56} color="#10b981" style={{ margin: '0 auto 1.5rem' }} />
        <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>Order Confirmed!</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto 2rem' }}>
          Thank you for choosing Lumina Gear. We've initiated fulfillment and your tracking number will arrive shortly.
        </p>
        <Link to="/" className="add-btn" style={{ display: 'inline-flex', margin: '0 auto' }}>
          Continue Exploring
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '5rem 1rem' }}>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Your shopping bag is empty</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Explore our latest collection of premium engineered products.
        </p>
        <Link to="/" className="add-btn" style={{ display: 'inline-flex', margin: '0 auto' }}>
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>
        Shopping Bag ({cart.length} {cart.length === 1 ? 'item' : 'items'})
      </h1>

      <div className="cart-container">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item glass">
              <img src={item.image} alt={item.name} className="cart-thumb" />
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 600 }}>{item.name}</h4>
                <p style={{ color: 'var(--accent-light)', fontSize: '0.85rem' }}>
                  {item.category}
                </p>
                <p style={{ fontWeight: 700, marginTop: '0.4rem' }}>
                  ${item.price} each
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: 'none',
                    color: '#fff',
                    padding: '0.4rem',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span style={{ fontWeight: 600, minWidth: '1.5rem', textAlign: 'center' }}>
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: 'none',
                    color: '#fff',
                    padding: '0.4rem',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>

              <div style={{ minWidth: '80px', textAlign: 'right', fontWeight: 700 }}>
                ${item.price * item.quantity}
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '0.5rem'
                }}
                aria-label="Remove item"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary glass">
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem' }}>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${cartTotal}</span>
          </div>
          <div className="summary-row">
            <span>Estimated Shipping</span>
            <span style={{ color: 'var(--success)' }}>Free</span>
          </div>
          <div className="summary-row">
            <span>Estimated Tax</span>
            <span>${Math.round(cartTotal * 0.05)}</span>
          </div>
          <div className="summary-row summary-total">
            <span>Total</span>
            <span>${cartTotal + Math.round(cartTotal * 0.05)}</span>
          </div>

          <button onClick={handleCheckout} className="checkout-btn">
            Proceed to Checkout
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.25rem', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            <Shield size={14} />
            <span>256-Bit SSL Encrypted Checkout</span>
          </div>
        </div>
      </div>
    </div>
  );
};
