import { useState } from 'react';
import { useCart, CartItem } from '../contexts/CartContext';
import { CreditCard, Truck, MapPin, User, Mail, Phone, Lock, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface PaymentInfo {
  method: 'card' | 'paypal' | 'bank';
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardName: string;
}

const Checkout = () => {
  const { state, dispatch } = useCart();
  const cartItems = state.items;
  const getTotalPrice = () => state.total;
  const clearCart = () => {
    cartItems.forEach(item => {
      dispatch({ type: 'REMOVE_ITEM', payload: `${item.id}-${item.selectedSize}-${item.selectedColor}` });
    });
  };
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'Perú'
  });

  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    method: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const shippingCost = 25.00;
  const tax = getTotalPrice() * 0.18; // 18% IGV
  const totalAmount = getTotalPrice() + shippingCost + tax;

  const handleShippingChange = (field: keyof ShippingInfo, value: string) => {
    setShippingInfo(prev => ({ ...prev, [field]: value }));
  };

  const handlePaymentChange = (field: keyof PaymentInfo, value: string) => {
    setPaymentInfo(prev => ({ ...prev, [field]: value }));
  };

  const validateStep = (step: number): boolean => {
    if (step === 1) {
      return Object.values(shippingInfo).every(value => value.trim() !== '');
    }
    if (step === 2) {
      if (paymentInfo.method === 'card') {
        return !!(paymentInfo.cardNumber && paymentInfo.expiryDate && paymentInfo.cvv && paymentInfo.cardName);
      }
      return true;
    }
    return true;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setOrderComplete(true);
    clearCart();
  };

  if (cartItems.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen bg-[#F5F1E7] pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-[#3D2156] mb-8">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Add some products before proceeding to checkout.</p>
          <Link 
            to="/products" 
            className="inline-flex items-center px-6 py-3 bg-[#3D2156] text-white rounded-lg hover:bg-[#2A1A3E] transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-[#F5F1E7] pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-[#3D2156] mb-4">Order Confirmed!</h1>
          <p className="text-gray-600 mb-8">Thank you for your purchase. You will receive a confirmation email soon.</p>
          <div className="bg-white rounded-lg p-6 mb-8 text-left max-w-md mx-auto">
            <h3 className="font-semibold text-[#3D2156] mb-2">Order Number</h3>
            <p className="text-gray-600 mb-4">#KLP-{Date.now().toString().slice(-6)}</p>
            <h3 className="font-semibold text-[#3D2156] mb-2">Total Paid</h3>
            <p className="text-2xl font-bold text-[#3D2156]">S/ {totalAmount.toFixed(2)}</p>
          </div>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-[#3D2156] text-white rounded-lg hover:bg-[#2A1A3E] transition-colors"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F1E7] pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-[#3D2156] hover:text-[#2A1A3E] mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver
          </Link>
          <h1 className="text-3xl font-bold text-[#3D2156]">Checkout</h1>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                currentStep >= step ? 'bg-[#3D2156]' : 'bg-gray-300'
              }`}>
                {step}
              </div>
              {step < 3 && (
                <div className={`w-16 h-1 mx-2 ${
                  currentStep > step ? 'bg-[#3D2156]' : 'bg-gray-300'
                }`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step 1: Shipping Information */}
            {currentStep === 1 && (
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-6">
                  <Truck className="w-6 h-6 text-[#3D2156] mr-3" />
                  <h2 className="text-xl font-semibold text-[#3D2156]">Shipping Information</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={shippingInfo.firstName}
                      onChange={(e) => handleShippingChange('firstName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3D2156] focus:border-transparent"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={shippingInfo.lastName}
                      onChange={(e) => handleShippingChange('lastName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3D2156] focus:border-transparent"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={shippingInfo.email}
                      onChange={(e) => handleShippingChange('email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3D2156] focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      value={shippingInfo.phone}
                      onChange={(e) => handleShippingChange('phone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3D2156] focus:border-transparent"
                      placeholder="+51 999 999 999"
                      required
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      value={shippingInfo.address}
                      onChange={(e) => handleShippingChange('address', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3D2156] focus:border-transparent"
                      placeholder="123 Main Street, District"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      value={shippingInfo.city}
                      onChange={(e) => handleShippingChange('city', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3D2156] focus:border-transparent"
                      placeholder="Lima"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State/Region *
                    </label>
                    <select
                      value={shippingInfo.state}
                      onChange={(e) => handleShippingChange('state', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3D2156] focus:border-transparent"
                      title="Select state/region"
                      required
                    >
                      <option value="">Select state/region</option>
                      <option value="Lima">Lima</option>
                      <option value="Cusco">Cusco</option>
                      <option value="Arequipa">Arequipa</option>
                      <option value="Huancayo">Huancayo</option>
                      <option value="Trujillo">Trujillo</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      value={shippingInfo.zipCode}
                      onChange={(e) => handleShippingChange('zipCode', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3D2156] focus:border-transparent"
                      placeholder="15001"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <select
                      value={shippingInfo.country}
                      onChange={(e) => handleShippingChange('country', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3D2156] focus:border-transparent"
                      title="Select country"
                      required
                    >
                      <option value="Perú">Perú</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Bolivia">Bolivia</option>
                    </select>
                  </div>
                </div>
                
                <button
                  onClick={handleNextStep}
                  disabled={!validateStep(1)}
                  className="mt-6 w-full bg-[#3D2156] text-white py-3 rounded-lg hover:bg-[#2A1A3E] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Continue to Payment
                </button>
              </div>
            )}

            {/* Step 2: Payment Information */}
            {currentStep === 2 && (
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-6">
                  <CreditCard className="w-6 h-6 text-[#3D2156] mr-3" />
                  <h2 className="text-xl font-semibold text-[#3D2156]">Payment Method</h2>
                </div>
                
                {/* Payment Method Selection */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {[
                    { id: 'card', label: 'Credit Card', icon: CreditCard },
                    { id: 'paypal', label: 'PayPal', icon: Mail },
                    { id: 'bank', label: 'Bank Transfer', icon: Lock }
                  ].map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => handlePaymentChange('method', id as 'card' | 'paypal' | 'bank')}
                      className={`p-4 border-2 rounded-lg flex flex-col items-center transition-colors ${
                        paymentInfo.method === id 
                          ? 'border-[#3D2156] bg-[#3D2156]/5' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Icon className="w-8 h-8 mb-2 text-[#3D2156]" />
                      <span className="text-sm font-medium">{label}</span>
                    </button>
                  ))}
                </div>
                
                {/* Card Details */}
                {paymentInfo.method === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre en la Tarjeta *
                      </label>
                      <input
                        type="text"
                        value={paymentInfo.cardName}
                        onChange={(e) => handlePaymentChange('cardName', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3D2156] focus:border-transparent"
                        placeholder="Juan Pérez"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Número de Tarjeta *
                      </label>
                      <input
                        type="text"
                        value={paymentInfo.cardNumber}
                        onChange={(e) => handlePaymentChange('cardNumber', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3D2156] focus:border-transparent"
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Fecha de Vencimiento *
                        </label>
                        <input
                          type="text"
                          value={paymentInfo.expiryDate}
                          onChange={(e) => handlePaymentChange('expiryDate', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3D2156] focus:border-transparent"
                          placeholder="MM/YY"
                          maxLength={5}
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV *
                        </label>
                        <input
                          type="text"
                          value={paymentInfo.cvv}
                          onChange={(e) => handlePaymentChange('cvv', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3D2156] focus:border-transparent"
                          placeholder="123"
                          maxLength={4}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {paymentInfo.method === 'paypal' && (
                  <div className="text-center py-8">
                    <p className="text-gray-600 mb-4">Serás redirigido a PayPal para completar el pago.</p>
                  </div>
                )}
                
                {paymentInfo.method === 'bank' && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#3D2156] mb-2">Datos para Transferencia</h4>
                    <p className="text-sm text-gray-600 mb-1"><strong>Banco:</strong> BCP</p>
                    <p className="text-sm text-gray-600 mb-1"><strong>Cuenta:</strong> 123-456789-0-12</p>
                    <p className="text-sm text-gray-600 mb-1"><strong>CCI:</strong> 00212312345678901234</p>
                    <p className="text-sm text-gray-600"><strong>Titular:</strong> KALLPA TREKKING SAC</p>
                  </div>
                )}
                
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="flex-1 border border-[#3D2156] text-[#3D2156] py-3 rounded-lg hover:bg-[#3D2156]/5 transition-colors"
                  >
                    Volver
                  </button>
                  <button
                    onClick={handleNextStep}
                    disabled={!validateStep(2)}
                    className="flex-1 bg-[#3D2156] text-white py-3 rounded-lg hover:bg-[#2A1A3E] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Revisar Pedido
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Order Review */}
            {currentStep === 3 && (
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-6">
                  <CheckCircle className="w-6 h-6 text-[#3D2156] mr-3" />
                  <h2 className="text-xl font-semibold text-[#3D2156]">Revisar Pedido</h2>
                </div>
                
                {/* Shipping Summary */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-[#3D2156] mb-2">Información de Envío</h3>
                  <p className="text-sm text-gray-600">
                    {shippingInfo.firstName} {shippingInfo.lastName}<br />
                    {shippingInfo.address}<br />
                    {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}<br />
                    {shippingInfo.country}<br />
                    {shippingInfo.email} | {shippingInfo.phone}
                  </p>
                </div>
                
                {/* Payment Summary */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-[#3D2156] mb-2">Método de Pago</h3>
                  <p className="text-sm text-gray-600">
                    {paymentInfo.method === 'card' && `Tarjeta terminada en ${paymentInfo.cardNumber.slice(-4)}`}
                    {paymentInfo.method === 'paypal' && 'PayPal'}
                    {paymentInfo.method === 'bank' && 'Transferencia Bancaria'}
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="flex-1 border border-[#3D2156] text-[#3D2156] py-3 rounded-lg hover:bg-[#3D2156]/5 transition-colors"
                  >
                    Volver
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    disabled={isProcessing}
                    className="flex-1 bg-[#3D2156] text-white py-3 rounded-lg hover:bg-[#2A1A3E] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? 'Procesando...' : 'Confirmar Pedido'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-24">
              <h3 className="text-lg font-semibold text-[#3D2156] mb-4">Resumen del Pedido</h3>
              
              {/* Cart Items */}
              <div className="space-y-3 mb-4">
                {cartItems.map((item: CartItem) => (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex items-center space-x-3">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{item.name}</p>
                      <p className="text-xs text-gray-500">Talla: {item.selectedSize} | Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-semibold text-[#3D2156]">
                      S/ {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
              
              <hr className="my-4" />
              
              {/* Price Breakdown */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">S/ {getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Envío</span>
                  <span className="font-medium">S/ {shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">IGV (18%)</span>
                  <span className="font-medium">S/ {tax.toFixed(2)}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between text-lg font-bold text-[#3D2156]">
                  <span>Total</span>
                  <span>S/ {totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;