import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import AlpacaLogo from './AlpacaLogo';
import SearchModal from './SearchModal';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { state, dispatch } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manejar Cmd+K para abrir búsqueda
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'flex justify-center' 
          : 'bg-transparent'
      }`}>
        <div 
          className={`transition-all duration-500 ${
            isScrolled 
              ? 'bg-white/30 border border-white/50 rounded-full mt-4 shadow-2xl max-w-[98vw] min-w-fit mx-2' 
              : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'
          } ${isScrolled && 'lg:max-w-[min(98vw,1584px)]'}`}
          style={isScrolled ? { backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' } : {}}
        >
          <div className={`flex items-center transition-all duration-500 ${
            isScrolled ? 'h-12 px-12 justify-around' : 'h-16 px-4 justify-between'
          }`}>
            {/* Logo */}
            <Link to="/" className={`flex items-center group transition-all duration-500 ${
              isScrolled ? 'space-x-2' : 'space-x-3'
            }`}>
              <div className={`flex items-center justify-center transition-all duration-500 ${
                isScrolled ? 'w-7 h-7' : 'w-10 h-10'
              }`}>
                <AlpacaLogo />
              </div>
              <div className={`flex flex-col transition-all duration-500 ${
                isScrolled ? 'hidden sm:flex' : 'flex'
              }`}>
                <span className={`font-bold tracking-wide transition-all duration-500 ${
                  isScrolled 
                    ? 'text-white text-base' 
                    : 'text-white text-xl'
                }`}>KALLPA</span>
                <span className={`text-xs font-medium -mt-1 transition-all duration-500 ${
                  isScrolled 
                    ? 'text-white/70 hidden' 
                    : 'text-white/90'
                }`}>Power in Motion</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center flex-1 justify-center">
              <div className={`flex items-center transition-all duration-500 ${
                isScrolled ? 'space-x-6' : 'space-x-8'
              }`}>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`font-medium transition-all duration-200 ${
                      isScrolled ? 'text-sm px-3 py-1.5 rounded-full' : 'text-sm'
                    } ${
                      location.pathname === link.path 
                        ? isScrolled 
                          ? 'text-white bg-white/20' 
                          : 'text-white border-b-2 border-white'
                        : isScrolled 
                          ? 'text-white/90 hover:text-white hover:bg-white/10' 
                          : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Right side actions */}
            <div className={`flex items-center transition-all duration-500 ${
              isScrolled ? 'space-x-2' : 'space-x-4'
            }`}>
              <button 
                onClick={() => setIsSearchOpen(true)}
                className={`text-white/90 hover:text-white transition-all duration-200 ${
                  isScrolled ? 'p-2 rounded-full hover:bg-white/10' : ''
                }`}
                aria-label="Search"
              >
                <Search size={isScrolled ? 16 : 20} />
              </button>
              <button 
                className={`text-white/90 hover:text-white transition-all duration-200 ${
                  isScrolled ? 'p-2 rounded-full hover:bg-white/10' : ''
                }`}
                aria-label="User account"
              >
                <User size={isScrolled ? 16 : 20} />
              </button>
              <button
                onClick={() => dispatch({ type: 'TOGGLE_CART' })}
                className={`relative text-white/90 hover:text-white transition-all duration-200 ${
                  isScrolled ? 'p-2 rounded-full hover:bg-white/10' : ''
                }`}
                aria-label="Shopping cart"
              >
                <ShoppingBag size={isScrolled ? 16 : 20} />
                {state.items.length > 0 && (
                  <span className={`absolute bg-white text-[#3D2156] text-xs rounded-full flex items-center justify-center font-semibold transition-all duration-200 ${
                    isScrolled ? '-top-1 -right-1 h-4 w-4' : '-top-2 -right-2 h-5 w-5'
                  }`}>
                    {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden text-white/90 hover:text-white transition-all duration-200 ${
                  isScrolled ? 'p-2 rounded-full hover:bg-white/10' : ''
                }`}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={isScrolled ? 18 : 24} /> : <Menu size={isScrolled ? 18 : 24} />}
              </button>
            </div>
          </div>
        </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/30 transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Dropdown */}
          <div 
            className={`absolute left-1/2 transform -translate-x-1/2 w-80 max-w-[90vw] bg-white/30 border border-white/30 rounded-2xl shadow-2xl transition-all duration-300 ${
              isScrolled ? 'top-20' : 'top-24'
            }`}
            style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
          >
            <div className="p-4">
              {/* Navigation Links */}
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                      location.pathname === link.path
                        ? 'text-white bg-white/25'
                        : 'text-white/90 hover:text-white hover:bg-white/15'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              {/* Divider */}
              <div className="my-4 border-t border-white/20" />
              
              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => {
                    setIsSearchOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
                >
                  <Search size={18} />
                  <span className="text-white/90 text-sm">Buscar</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors">
                  <User size={18} />
                  <span className="text-white/90 text-sm">Cuenta</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      </nav>
      
      {/* Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
}

export default Navbar;