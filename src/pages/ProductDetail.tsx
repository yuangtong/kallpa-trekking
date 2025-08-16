import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingBag, Leaf, Shield, Truck, RotateCcw, Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { dispatch } = useCart();

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="pt-16 min-h-screen bg-[#F5F1E7] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#3D2156] mb-4">Product not found</h2>
          <Link to="/products" className="text-[#6B7C6E] hover:text-[#3D2156]">
            Return to products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }

    dispatch({
      type: 'ADD_ITEM',
      payload: {
        product,
        size: selectedSize,
        color: selectedColor
      }
    });

    // Optional: Show success message
    alert('Added to cart!');
  };

  const images = [product.image, product.image, product.image]; // In real app, would have multiple images

  return (
    <div className="pt-16 min-h-screen bg-[#F5F1E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-[#6B7C6E] hover:text-[#3D2156] transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            {/* Main Image */}
            <div className="aspect-square bg-white/90 rounded-2xl overflow-hidden border border-white/20 mb-4">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image Thumbnails */}
            <div className="flex gap-3">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index 
                      ? 'border-[#3D2156] scale-105' 
                      : 'border-white/20 hover:border-[#3D2156]/50'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-white/90 rounded-2xl p-8 border border-white/20">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#6B7C6E] font-medium">{product.category}</span>
                  <div className="flex items-center gap-1 bg-[#6B7C6E] text-white px-2 py-1 rounded-full text-xs">
                    <Leaf size={12} />
                    {product.sustainability}% Sustainable
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-[#3D2156] mb-4">{product.name}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-bold text-[#3D2156]">${product.price}</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500 fill-current" />
                    ))}
                    <span className="text-[#6B7C6E] text-sm ml-2">(4.9)</span>
                  </div>
                </div>
                <p className="text-[#1E2421] leading-relaxed">{product.description}</p>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="font-semibold text-[#3D2156] mb-3">Color</h3>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-full border-4 transition-all hover:scale-110 ${
                        selectedColor === color 
                          ? 'border-[#3D2156] scale-110' 
                          : 'border-white/50'
                      } ${
                        color === 'Deep Purple' ? 'bg-[#3D2156]' :
                        color === 'Cream' ? 'bg-[#F5F1E7]' :
                        color === 'Charcoal' ? 'bg-[#1E2421]' :
                        color === 'Olive' ? 'bg-[#6B7C6E]' :
                        color === 'Silver' ? 'bg-gray-400' :
                        color === 'Orange' ? 'bg-orange-500' :
                        'bg-gray-300'
                      }`}
                      title={color}
                    />
                  ))}
                </div>
                {selectedColor && (
                  <p className="text-[#6B7C6E] text-sm mt-2">Selected: {selectedColor}</p>
                )}
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <h3 className="font-semibold text-[#3D2156] mb-3">Size</h3>
                <div className="grid grid-cols-3 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                        selectedSize === size
                          ? 'border-[#3D2156] bg-[#3D2156] text-white'
                          : 'border-[#3D2156]/20 text-[#3D2156] hover:border-[#3D2156]/50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#3D2156] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#3D2156]/90 transition-colors flex items-center justify-center gap-2 hover:scale-105 transform duration-200"
                >
                  <ShoppingBag size={20} />
                  Add to Cart
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    isWishlisted 
                      ? 'border-red-500 bg-red-500 text-white' 
                      : 'border-[#3D2156]/20 text-[#3D2156] hover:border-[#3D2156]/50'
                  }`}
                >
                  <Heart size={20} className={isWishlisted ? 'fill-current' : ''} />
                </button>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-semibold text-[#3D2156] mb-3">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Shield size={16} className="text-[#6B7C6E]" />
                      <span className="text-[#1E2421] text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials */}
              <div className="mb-8">
                <h3 className="font-semibold text-[#3D2156] mb-3">Materials</h3>
                <div className="space-y-2">
                  {product.materials.map((material, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Leaf size={16} className="text-[#6B7C6E]" />
                      <span className="text-[#1E2421] text-sm">{material}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping & Returns */}
              <div className="border-t border-[#3D2156]/10 pt-6 space-y-3">
                <div className="flex items-center gap-3 text-[#6B7C6E]">
                  <Truck size={20} />
                  <span className="text-sm">Free shipping on orders over $200</span>
                </div>
                <div className="flex items-center gap-3 text-[#6B7C6E]">
                  <RotateCcw size={20} />
                  <span className="text-sm">30-day return guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;