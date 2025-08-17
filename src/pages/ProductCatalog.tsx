import React, { useState, useMemo, useEffect } from 'react';
import { Filter, Grid, List, Search, X, SlidersHorizontal, Heart, ShoppingBag, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Product } from '../contexts/CartContext';

// Compact List Item Component for List View
function ProductListItem({ product }: { product: Product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="group bg-white/90 rounded-2xl overflow-hidden border border-white/20 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row">
      {/* Image Container */}
      <div className="relative w-full sm:w-48 h-48 sm:h-auto overflow-hidden bg-gradient-to-br from-[#F5F1E7] to-[#6B7C6E]/10 flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Sustainability Badge */}
        <div className="absolute top-3 left-3 bg-[#6B7C6E] text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
          <Leaf size={10} />
          {product.sustainability}% Sustainable
        </div>
      </div>

      {/* Content Container */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="flex-1">
          {/* Category and Title */}
          <div className="mb-3">
            <span className="text-[#6B7C6E] text-sm font-medium">{product.category}</span>
            <h3 className="font-bold text-[#3D2156] text-xl mb-2 group-hover:text-[#3D2156]/80 transition-colors">
              {product.name}
            </h3>
          </div>
          
          {/* Description */}
          <p className="text-[#1E2421] text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap gap-1 mb-4">
            {product.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="bg-[#3D2156]/10 text-[#3D2156] text-xs px-2 py-1 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Mobile: Price and Colors, then Action Buttons; Desktop: Price, Colors and Actions */}
        <div className="space-y-3 sm:space-y-0">
          {/* Mobile: Price and Colors Row */}
          <div className="flex items-center justify-between gap-4 sm:hidden">
            <span className="text-2xl font-bold text-[#3D2156]">${product.price}</span>
            <div className="flex gap-1">
              {product.colors.slice(0, 3).map((color, index) => (
                <div
                  key={index}
                  className={`w-5 h-5 rounded-full border-2 border-white shadow-sm ${
                    color === 'Deep Purple' ? 'bg-[#3D2156]' :
                    color === 'Cream' ? 'bg-[#F5F1E7]' :
                    color === 'Charcoal' ? 'bg-[#1E2421]' :
                    color === 'Olive' ? 'bg-[#6B7C6E]' :
                    'bg-gray-300'
                  }`}
                  title={color}
                />
              ))}
            </div>
          </div>
          
          {/* Mobile Action Buttons Row */}
          <div className="flex gap-2 sm:hidden">
            <Link
              to={`/product/${product.id}`}
              className="flex-1 bg-[#3D2156] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#3D2156]/90 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag size={16} />
              View More
            </Link>
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`p-3 rounded-lg transition-colors ${
                isWishlisted 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white border border-[#3D2156]/20 text-[#3D2156] hover:bg-[#3D2156]/10'
              }`}
              aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <Heart size={16} className={isWishlisted ? 'fill-current' : ''} />
            </button>
          </div>

          {/* Desktop: Single Row Layout */}
          <div className="hidden sm:flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-[#3D2156]">${product.price}</span>
              <div className="flex gap-1">
                {product.colors.slice(0, 3).map((color, index) => (
                  <div
                    key={index}
                    className={`w-5 h-5 rounded-full border-2 border-white shadow-sm ${
                      color === 'Deep Purple' ? 'bg-[#3D2156]' :
                      color === 'Cream' ? 'bg-[#F5F1E7]' :
                      color === 'Charcoal' ? 'bg-[#1E2421]' :
                      color === 'Olive' ? 'bg-[#6B7C6E]' :
                      'bg-gray-300'
                    }`}
                    title={color}
                  />
                ))}
              </div>
            </div>
            
            <div className="flex gap-2">
              <Link
                to={`/product/${product.id}`}
                className="bg-[#3D2156] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#3D2156]/90 transition-colors flex items-center gap-2"
              >
                <ShoppingBag size={16} />
                View More
              </Link>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-2 rounded-lg transition-colors ${
                  isWishlisted 
                    ? 'bg-red-500 text-white' 
                    : 'bg-white border border-[#3D2156]/20 text-[#3D2156] hover:bg-[#3D2156]/10'
                }`}
                aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart size={16} className={isWishlisted ? 'fill-current' : ''} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('name');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const materials = ['Alpaca fiber', 'Recycled polyester', 'Merino wool', 'Organic cotton'];

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Category filter
      if (selectedCategory !== 'all' && product.category.toLowerCase() !== selectedCategory) {
        return false;
      }

      // Price filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

      // Material filter
      if (selectedMaterials.length > 0) {
        const hasSelectedMaterial = selectedMaterials.some(material =>
          product.materials.some(productMaterial =>
            productMaterial.toLowerCase().indexOf(material.toLowerCase()) !== -1
          )
        );
        if (!hasSelectedMaterial) return false;
      }

      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        return (
          product.name.toLowerCase().indexOf(searchLower) !== -1 ||
          product.description.toLowerCase().indexOf(searchLower) !== -1 ||
          product.features.some(feature => feature.toLowerCase().indexOf(searchLower) !== -1)
        );
      }

      return true;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'sustainability':
          return b.sustainability - a.sustainability;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [selectedCategory, priceRange, selectedMaterials, sortBy, searchTerm]);

  const toggleMaterial = (material: string) => {
    setSelectedMaterials(prev =>
      prev.includes(material)
        ? prev.filter(m => m !== material)
        : [...prev, material]
    );
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (selectedCategory !== 'all') count++;
    if (priceRange[0] !== 0 || priceRange[1] !== 500) count++;
    if (selectedMaterials.length > 0) count++;
    if (searchTerm) count++;
    return count;
  };

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 500]);
    setSelectedMaterials([]);
    setSearchTerm('');
  };

  // Close drawer on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFilterDrawerOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isFilterDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFilterDrawerOpen]);

  return (
    <div className="pt-16 min-h-screen bg-[#F5F1E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#3D2156] mb-4">Product Collection</h1>
          <p className="text-[#6B7C6E] text-lg">
            Discover the complete range of KALLPA outdoor performance gear
          </p>
        </div>

        {/* Active Filters Summary - Mobile */}
        {getActiveFiltersCount() > 0 && (
          <div className="lg:hidden mb-6">
            <div className="flex flex-wrap gap-2">
              {selectedCategory !== 'all' && (
                <div className="flex items-center gap-1 bg-[#3D2156]/10 text-[#3D2156] px-3 py-1 rounded-full text-sm">
                  <span>{categories.find(c => c.slug === selectedCategory)?.name}</span>
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="ml-1 hover:bg-[#3D2156]/20 rounded-full p-0.5"
                    aria-label={`Remove ${categories.find(c => c.slug === selectedCategory)?.name} filter`}
                  >
                    <X size={12} />
                  </button>
                </div>
              )}
              {(priceRange[0] > 0 || priceRange[1] < 500) && (
                <div className="flex items-center gap-1 bg-[#3D2156]/10 text-[#3D2156] px-3 py-1 rounded-full text-sm">
                  <span>${priceRange[0]} - ${priceRange[1]}</span>
                  <button
                    onClick={() => setPriceRange([0, 500])}
                    className="ml-1 hover:bg-[#3D2156]/20 rounded-full p-0.5"
                    aria-label="Remove price range filter"
                  >
                    <X size={12} />
                  </button>
                </div>
              )}
              {selectedMaterials.map((material) => (
                <div key={material} className="flex items-center gap-1 bg-[#3D2156]/10 text-[#3D2156] px-3 py-1 rounded-full text-sm">
                  <span>{material}</span>
                  <button
                    onClick={() => toggleMaterial(material)}
                    className="ml-1 hover:bg-[#3D2156]/20 rounded-full p-0.5"
                    aria-label={`Remove ${material} filter`}
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
              {searchTerm && (
                <div className="flex items-center gap-1 bg-[#3D2156]/10 text-[#3D2156] px-3 py-1 rounded-full text-sm">
                  <span>Search: "{searchTerm}"</span>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="ml-1 hover:bg-[#3D2156]/20 rounded-full p-0.5"
                    aria-label="Clear search"
                  >
                    <X size={12} />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters Sidebar - Hidden on mobile */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="bg-white/90 rounded-2xl p-6 border border-white/20 sticky top-24">
              <h3 className="font-bold text-[#3D2156] mb-6 flex items-center gap-2">
                <Filter size={20} />
                Filters
              </h3>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#1E2421] mb-2">Search</label>
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-3 text-[#6B7C6E]" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#3D2156]/20 focus:outline-none focus:ring-2 focus:ring-[#3D2156]/20 bg-white/80"
                    aria-label="Search products"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#1E2421] mb-3">Category</label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.slug}
                      onClick={() => setSelectedCategory(category.slug)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.slug
                          ? 'bg-[#3D2156] text-white'
                          : 'text-[#1E2421] hover:bg-[#3D2156]/10'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#1E2421] mb-3">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <div className="flex gap-4">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-full px-3 py-2 rounded-lg border border-[#3D2156]/20 focus:outline-none focus:ring-2 focus:ring-[#3D2156]/20 bg-white/80"
                    min="0"
                    aria-label="Minimum price"
                  />
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full px-3 py-2 rounded-lg border border-[#3D2156]/20 focus:outline-none focus:ring-2 focus:ring-[#3D2156]/20 bg-white/80"
                    min="0"
                    aria-label="Maximum price"
                  />
                </div>
              </div>

              {/* Materials */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#1E2421] mb-3">Materials</label>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <label key={material} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(material)}
                        onChange={() => toggleMaterial(material)}
                        className="rounded border-[#3D2156]/20 text-[#3D2156] focus:ring-[#3D2156]/20"
                        aria-label={`Filter by ${material}`}
                      />
                      <span className="text-[#1E2421] text-sm">{material}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="lg:w-3/4">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setIsFilterDrawerOpen(true)}
                className="w-full bg-white/90 rounded-2xl p-4 border border-white/20 flex items-center justify-between hover:bg-white transition-colors"
              >
                <div className="flex items-center gap-3">
                  <SlidersHorizontal size={20} className="text-[#3D2156]" />
                  <span className="font-medium text-[#3D2156]">Filters</span>
                  {getActiveFiltersCount() > 0 && (
                    <span className="bg-[#3D2156] text-white text-xs px-2 py-1 rounded-full">
                      {getActiveFiltersCount()}
                    </span>
                  )}
                </div>
                <Filter size={16} className="text-[#6B7C6E]" />
              </button>
              
              {/* Active Filters Summary */}
              {getActiveFiltersCount() > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedCategory !== 'all' && (
                    <span className="bg-[#3D2156] text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      {categories.find(c => c.slug === selectedCategory)?.name}
                      <button onClick={() => setSelectedCategory('all')} className="hover:bg-white/20 rounded-full p-0.5" title="Remove category filter">
                        <X size={12} />
                      </button>
                    </span>
                  )}
                  {(priceRange[0] !== 0 || priceRange[1] !== 500) && (
                    <span className="bg-[#3D2156] text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      ${priceRange[0]} - ${priceRange[1]}
                      <button onClick={() => setPriceRange([0, 500])} className="hover:bg-white/20 rounded-full p-0.5" title="Remove price filter">
                        <X size={12} />
                      </button>
                    </span>
                  )}
                  {selectedMaterials.map(material => (
                    <span key={material} className="bg-[#3D2156] text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      {material}
                      <button onClick={() => toggleMaterial(material)} className="hover:bg-white/20 rounded-full p-0.5" title={`Remove ${material} filter`}>
                        <X size={12} />
                      </button>
                    </span>
                  ))}
                  {searchTerm && (
                    <span className="bg-[#3D2156] text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      "{searchTerm}"
                      <button onClick={() => setSearchTerm('')} className="hover:bg-white/20 rounded-full p-0.5" title="Clear search">
                        <X size={12} />
                      </button>
                    </span>
                  )}
                  <button
                    onClick={clearAllFilters}
                    className="text-[#6B7C6E] text-xs underline hover:text-[#3D2156]"
                  >
                    Clear all
                  </button>
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <p className="text-[#6B7C6E]">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-[#3D2156]/20 focus:outline-none focus:ring-2 focus:ring-[#3D2156]/20 bg-white/80"
                  aria-label="Sort products by"
                  title="Sort products by"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="sustainability">Sustainability</option>
                </select>

                <div className="flex gap-1 border border-[#3D2156]/20 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 transition-colors ${
                      viewMode === 'grid' ? 'bg-[#3D2156] text-white' : 'bg-white/80 text-[#3D2156]'
                    }`}
                    aria-label="Grid view"
                    title="Grid view"
                  >
                    <Grid size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 transition-colors ${
                      viewMode === 'list' ? 'bg-[#3D2156] text-white' : 'bg-white/80 text-[#3D2156]'
                    }`}
                    aria-label="List view"
                    title="List view"
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Grid/List */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-[#6B7C6E] text-lg">No products found matching your filters.</p>
              </div>
            ) : (
              <div className={`grid gap-6 items-stretch ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="opacity-0 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'forwards' }}
                  >
                    {viewMode === 'grid' ? (
                      <ProductCard product={product} />
                    ) : (
                      <ProductListItem product={product} />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Filter Drawer */}
        {isFilterDrawerOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsFilterDrawerOpen(false)}
            />
            
            {/* Drawer */}
            <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
              <div 
                className="bg-white rounded-t-3xl max-h-[85vh] overflow-hidden animate-slide-up"
                style={{
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)'
                }}
              >
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <Filter size={20} className="text-[#3D2156]" />
                    <h3 className="font-bold text-[#3D2156] text-lg">Filters</h3>
                    {getActiveFiltersCount() > 0 && (
                      <span className="bg-[#3D2156] text-white text-xs px-2 py-1 rounded-full">
                        {getActiveFiltersCount()}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {getActiveFiltersCount() > 0 && (
                      <button
                        onClick={clearAllFilters}
                        className="text-[#6B7C6E] text-sm hover:text-[#3D2156]"
                        aria-label="Clear all filters"
                      >
                        Clear all
                      </button>
                    )}
                    <button
                      onClick={() => setIsFilterDrawerOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-full"
                      aria-label="Close filters"
                    >
                      <X size={20} className="text-[#6B7C6E]" />
                    </button>
                  </div>
                </div>

                {/* Drawer Content */}
                <div className="overflow-y-auto max-h-[calc(85vh-80px)] p-6">
                  {/* Search */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-[#1E2421] mb-2">Search</label>
                    <div className="relative">
                      <Search size={18} className="absolute left-3 top-3 text-[#6B7C6E]" />
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search products..."
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#3D2156]/20 focus:outline-none focus:ring-2 focus:ring-[#3D2156]/20 bg-white/80"
                        aria-label="Search products"
                      />
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-[#1E2421] mb-3">Category</label>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.slug}
                          onClick={() => setSelectedCategory(category.slug)}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                            selectedCategory === category.slug
                              ? 'bg-[#3D2156] text-white'
                              : 'text-[#1E2421] hover:bg-[#3D2156]/10'
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-[#1E2421] mb-3">
                      Price Range: ${priceRange[0]} - ${priceRange[1]}
                    </label>
                    <div className="flex gap-4">
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                        className="w-full px-3 py-2 rounded-lg border border-[#3D2156]/20 focus:outline-none focus:ring-2 focus:ring-[#3D2156]/20 bg-white/80"
                        min="0"
                        aria-label="Minimum price"
                      />
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="w-full px-3 py-2 rounded-lg border border-[#3D2156]/20 focus:outline-none focus:ring-2 focus:ring-[#3D2156]/20 bg-white/80"
                        min="0"
                        aria-label="Maximum price"
                      />
                    </div>
                  </div>

                  {/* Materials */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-[#1E2421] mb-3">Materials</label>
                    <div className="space-y-2">
                      {materials.map((material) => (
                        <label key={material} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedMaterials.includes(material)}
                            onChange={() => toggleMaterial(material)}
                            className="rounded border-[#3D2156]/20 text-[#3D2156] focus:ring-[#3D2156]/20"
                            aria-label={`Filter by ${material}`}
                          />
                          <span className="text-[#1E2421] text-sm">{material}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Drawer Footer */}
                <div className="p-6 border-t border-gray-200 bg-white">
                  <button
                    onClick={() => setIsFilterDrawerOpen(false)}
                    className="w-full bg-[#3D2156] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#3D2156]/90 transition-colors"
                  >
                    Show {filteredProducts.length} Products
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductCatalog;