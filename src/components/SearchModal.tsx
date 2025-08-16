import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuredProducts } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Páginas disponibles para búsqueda
  const pages = [
    { name: 'Inicio', path: '/', description: 'Página principal' },
    { name: 'Productos', path: '/products', description: 'Catálogo de productos' },
    { name: 'Acerca de', path: '/about', description: 'Conoce más sobre KALLPA' },
  ];

  // Buscar en productos y páginas
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSelectedIndex(0);
      return;
    }

    const searchQuery = query.toLowerCase();
    const productResults = featuredProducts
      .filter(product => 
        product.name.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery)
      )
      .map(product => ({ ...product, type: 'product' }));

    const pageResults = pages
      .filter(page => 
        page.name.toLowerCase().includes(searchQuery) ||
        page.description.toLowerCase().includes(searchQuery)
      )
      .map(page => ({ ...page, type: 'page' }));

    setResults([...pageResults, ...productResults]);
    setSelectedIndex(0);
  }, [query]);

  // Manejar teclas
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => Math.max(prev - 1, 0));
          break;
        case 'Enter':
          e.preventDefault();
          if (results[selectedIndex]) {
            const result = results[selectedIndex];
            const path = result.type === 'product' ? `/products/${result.id}` : result.path;
            window.location.href = path;
            onClose();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  // Focus en el input cuando se abre
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Reset cuando se cierra
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl mx-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200"
           style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
        
        {/* Search Input */}
        <div className="flex items-center px-6 py-4 border-b border-gray-200/50">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Buscar productos, páginas..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder-gray-500 text-lg"
          />
          <button
            onClick={onClose}
            aria-label="Cerrar búsqueda"
            className="p-1 hover:bg-gray-100/50 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto">
          {query && results.length === 0 && (
            <div className="px-6 py-8 text-center text-gray-500">
              No se encontraron resultados para "{query}"
            </div>
          )}
          
          {results.map((result, index) => {
            const isSelected = index === selectedIndex;
            const path = result.type === 'product' ? `/products/${result.id}` : result.path;
            
            return (
              <Link
                key={`${result.type}-${result.id || result.path}`}
                to={path}
                onClick={onClose}
                className={`block px-6 py-3 hover:bg-gray-50/50 transition-colors ${
                  isSelected ? 'bg-blue-50/50' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  {result.type === 'product' && result.image && (
                    <img 
                      src={result.image} 
                      alt={result.name}
                      className="w-10 h-10 object-cover rounded-lg"
                    />
                  )}
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">
                      {result.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {result.type === 'product' ? result.description : result.description}
                    </div>
                    {result.type === 'product' && (
                      <div className="text-sm font-medium text-green-600">
                        ${result.price}
                      </div>
                    )}
                  </div>
                  <div className="text-xs text-gray-400 capitalize">
                    {result.type === 'product' ? 'Producto' : 'Página'}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer */}
        {results.length > 0 && (
          <div className="px-6 py-3 border-t border-gray-200/50 bg-gray-50/30">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <kbd className="px-2 py-1 bg-white/50 rounded border text-xs">↑↓</kbd>
                  <span>navegar</span>
                </span>
                <span className="flex items-center space-x-1">
                  <kbd className="px-2 py-1 bg-white/50 rounded border text-xs">↵</kbd>
                  <span>seleccionar</span>
                </span>
                <span className="flex items-center space-x-1">
                  <kbd className="px-2 py-1 bg-white/50 rounded border text-xs">esc</kbd>
                  <span>cerrar</span>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchModal;