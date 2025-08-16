import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import AlpacaLogo from './AlpacaLogo';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { state, dispatch } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/20 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 flex items-center justify-center">
                <AlpacaLogo />
              </div>
              <div className="flex flex-col">
                <span className="text-[#3D2156] font-bold text-xl tracking-wide">KALLPA</span>
                <span className="text-[#6B7C6E] text-xs font-medium -mt-1">Power in Motion</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-[#3D2156] ${
                    location.pathname === link.path 
                      ? 'text-[#3D2156] border-b-2 border-[#3D2156]' 
                      : 'text-[#1E2421]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              <button className="text-[#1E2421] hover:text-[#3D2156] transition-colors">
                <Search size={20} />
              </button>
              <button className="text-[#1E2421] hover:text-[#3D2156] transition-colors">
                <User size={20} />
              </button>
              <button
                onClick={() => dispatch({ type: 'TOGGLE_CART' })}
                className="relative text-[#1E2421] hover:text-[#3D2156] transition-colors"
              >
                <ShoppingBag size={20} />
                {state.items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#3D2156] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-[#1E2421] hover:text-[#3D2156] transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#3D2156] bg-[#3D2156]/10'
                      : 'text-[#1E2421] hover:text-[#3D2156] hover:bg-[#3D2156]/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;