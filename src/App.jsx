import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Catalog } from './pages/Catalog';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { useCart } from './context/CartContext';

export function App() {
  const { notification } = useCart();

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

      {notification && (
        <div className="toast">
          {notification}
        </div>
      )}

      <footer className="footer">
        <p>© 2026 Lumina Gear Inc. All rights reserved. Capstone Project Architecture.</p>
      </footer>
    </div>
  );
}

export default App;
