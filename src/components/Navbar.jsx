import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Box, ShieldCheck, Zap } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <header className="navbar">
      <Link to="/" className="nav-brand">
        <Zap size={24} color="#6366f1" />
        <span>Lumina Gear</span>
      </Link>
      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          <Box size={18} />
          <span>Catalog</span>
        </NavLink>
        <Link to="/cart" className="nav-cart-btn">
          <ShoppingBag size={18} />
          <span>Bag</span>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
      </nav>
    </header>
  );
};
