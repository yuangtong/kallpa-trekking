import React, { useState, useMemo } from 'react';
import { Filter, Grid, List, Search } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('name');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

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
            productMaterial.toLowerCase().includes(material.toLowerCase())
          )
        );
        if (!hasSelectedMaterial) return false;
      }

      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        return (
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower) ||
          product.features.some(feature => feature.toLowerCase().includes(searchLower))
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

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 sticky top-24">
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
                  />
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full px-3 py-2 rounded-lg border border-[#3D2156]/20 focus:outline-none focus:ring-2 focus:ring-[#3D2156]/20 bg-white/80"
                    min="0"
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
                  >
                    <Grid size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 transition-colors ${
                      viewMode === 'list' ? 'bg-[#3D2156] text-white' : 'bg-white/80 text-[#3D2156]'
                    }`}
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-[#6B7C6E] text-lg">No products found matching your filters.</p>
              </div>
            ) : (
              <div className={`grid gap-6 ${
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
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCatalog;