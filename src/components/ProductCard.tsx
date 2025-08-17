import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Leaf } from 'lucide-react';
import { Product } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  
  const currentImage = product.images && product.images[selectedColor] 
    ? product.images[selectedColor] 
    : product.image;

  return (
    <div className="group bg-white/90 rounded-2xl overflow-hidden border border-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#F5F1E7] to-[#6B7C6E]/10">
        <img
          src={currentImage}
          alt={`${product.name} - ${selectedColor}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-4">
          <div className="w-full flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
            <Link
              to={`/product/${product.id}`}
              className="flex-1 bg-[#3D2156] text-white py-2 px-4 rounded-lg font-medium text-center hover:bg-[#3D2156]/90 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag size={16} />
              Quick View
            </Link>
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`p-2 rounded-lg transition-colors ${
                isWishlisted 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white/80 text-[#3D2156] hover:bg-white'
              }`}
              aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <Heart size={16} className={isWishlisted ? 'fill-current' : ''} />
            </button>
          </div>
        </div>

        {/* Sustainability Badge */}
        <div className="absolute top-4 left-4 bg-[#6B7C6E] text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
          <Leaf size={12} />
          {product.sustainability}% Sustainable
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-2">
          <span className="text-[#6B7C6E] text-sm font-medium">{product.category}</span>
        </div>
        <h3 className="font-bold text-[#3D2156] text-lg mb-2 group-hover:text-[#3D2156]/80 transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="text-[#1E2421] text-sm mb-4 line-clamp-3 flex-1">
          {product.description}
        </p>
        
        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.features.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="bg-[#3D2156]/10 text-[#3D2156] text-xs px-2 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Price and Colors */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-bold text-[#3D2156]">${product.price}</span>
          <div className="flex items-center gap-1">
            <div className="flex gap-1">
              {product.colors.slice(0, 3).map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`w-6 h-6 rounded-full border-2 shadow-sm transition-all hover:scale-110 ${
                    selectedColor === color 
                      ? 'border-[#3D2156] ring-2 ring-[#3D2156]/30' 
                      : 'border-white'
                  } ${
                    color === 'Deep Purple' ? 'bg-[#3D2156]' :
                    color === 'Cream' ? 'bg-[#F5F1E7]' :
                    color === 'Charcoal' ? 'bg-[#1E2421]' :
                    color === 'Olive' ? 'bg-[#6B7C6E]' :
                    color === 'Orange' ? 'bg-orange-500' :
                    color === 'Silver' ? 'bg-gray-300' :
                    'bg-gray-300'
                  }`}
                  title={color}
                />
              ))}
            </div>
            {product.colors.length > 3 && (
              <span className="text-xs text-[#6B7C6E] ml-1">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;