import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import ProductCatalog from './pages/ProductCatalog';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-[#F5F1E7] relative overflow-x-hidden">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<ProductCatalog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Cart />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;