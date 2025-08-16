import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { state, dispatch } = useCart();

  if (!state.isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
        onClick={() => dispatch({ type: 'CLOSE_CART' })}
      />
      
      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white/95 backdrop-blur-md shadow-2xl z-50 transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#3D2156]/10">
            <h2 className="text-xl font-bold text-[#3D2156] flex items-center gap-2">
              <ShoppingBag size={24} />
              Shopping Cart
            </h2>
            <button
              onClick={() => dispatch({ type: 'CLOSE_CART' })}
              className="text-[#1E2421] hover:text-[#3D2156] transition-colors"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {state.items.length === 0 ? (
              <div className="text-center text-[#6B7C6E] py-12">
                <ShoppingBag size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-lg">Your cart is empty</p>
                <p className="text-sm mt-2">Add some KALLPA gear to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => {
                  const itemKey = `${item.id}-${item.selectedSize}-${item.selectedColor}`;
                  return (
                    <div key={itemKey} className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-[#1E2421] truncate">{item.name}</h3>
                          <p className="text-sm text-[#6B7C6E]">
                            {item.selectedSize} • {item.selectedColor}
                          </p>
                          <p className="font-bold text-[#3D2156]">${item.price}</p>
                        </div>
                      </div>
                      
                      {/* Quantity controls */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => dispatch({
                              type: 'UPDATE_QUANTITY',
                              payload: { id: itemKey, quantity: item.quantity - 1 }
                            })}
                            className="w-8 h-8 rounded-full bg-[#3D2156]/10 hover:bg-[#3D2156]/20 flex items-center justify-center transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => dispatch({
                              type: 'UPDATE_QUANTITY',
                              payload: { id: itemKey, quantity: item.quantity + 1 }
                            })}
                            className="w-8 h-8 rounded-full bg-[#3D2156]/10 hover:bg-[#3D2156]/20 flex items-center justify-center transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: itemKey })}
                          className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t border-[#3D2156]/10 p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-[#1E2421]">Total:</span>
                <span className="text-2xl font-bold text-[#3D2156]">${state.total.toFixed(2)}</span>
              </div>
              <Link 
                to="/checkout"
                onClick={() => dispatch({ type: 'CLOSE_CART' })}
                className="block w-full bg-[#3D2156] text-white py-3 rounded-lg font-semibold hover:bg-[#3D2156]/90 transition-colors text-center"
              >
                Proceed to Checkout
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;