import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import AlpacaLogo from './AlpacaLogo';

function Footer() {
  return (
    <footer className="bg-[#F5F1E7] border-t border-[#E8E2D5] mt-20">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-[#3D2156] to-[#5A3A7A] py-8 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto mb-6 opacity-20">
              <AlpacaLogo />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your bed will love following us
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Be the first to discover new collections and exclusive stories from the Andes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-full bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
            />
            <button className="px-8 py-4 bg-white text-[#3D2156] rounded-full font-semibold hover:bg-white/90 transition-colors flex items-center justify-center">
              <Mail size={20} className="mr-2" />
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* About Section - Hidden on mobile/tablet */}
            <div className="hidden lg:block lg:col-span-1">
              <h3 className="text-lg font-semibold text-[#3D2156] mb-6">About KALLPA</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-[#3D2156] transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-[#3D2156] transition-colors">
                    Mission & Values
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-[#3D2156] transition-colors">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-[#3D2156] transition-colors">
                    Certifications
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products Section - Hidden on mobile/tablet */}
            <div className="hidden lg:block lg:col-span-1">
              <h3 className="text-lg font-semibold text-[#3D2156] mb-6">Products</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/products" className="text-gray-600 hover:text-[#3D2156] transition-colors">
                    Full Collection
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-[#3D2156] transition-colors">
                    Mountain Clothing
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-[#3D2156] transition-colors">
                    Trekking Gear
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-[#3D2156] transition-colors">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Section - Hidden on mobile/tablet */}
            <div className="hidden lg:block lg:col-span-1">
              <h3 className="text-lg font-semibold text-[#3D2156] mb-6">Support</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="#" className="text-gray-600 hover:text-[#3D2156] transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-[#3D2156] transition-colors">
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-[#3D2156] transition-colors">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-[#3D2156] transition-colors">
                    Warranty
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section - Always visible but responsive layout */}
            <div className="col-span-1 lg:col-span-1 text-center lg:text-left">
              <h3 className="text-lg font-semibold text-[#3D2156] mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <MapPin size={18} className="text-[#3D2156] flex-shrink-0" />
                  <span className="text-gray-600 text-sm">
                    Av. El Sol 123, Cusco<br />
                    Peru
                  </span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <Phone size={18} className="text-[#3D2156] flex-shrink-0" />
                  <span className="text-gray-600 text-sm">+51 984 123 456</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <Mail size={18} className="text-[#3D2156] flex-shrink-0" />
                  <span className="text-gray-600 text-sm">hello@kallpa.pe</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-[#3D2156] mb-4">Follow Us</h4>
                <div className="flex justify-center lg:justify-start space-x-4">
                  <a href="#" title="Follow us on Facebook" className="w-12 h-12 lg:w-10 lg:h-10 bg-[#3D2156] text-white rounded-full flex items-center justify-center hover:bg-[#2A1A3E] transition-colors">
                    <Facebook size={20} className="lg:w-[18px] lg:h-[18px]" />
                  </a>
                  <a href="#" title="Follow us on Instagram" className="w-12 h-12 lg:w-10 lg:h-10 bg-[#3D2156] text-white rounded-full flex items-center justify-center hover:bg-[#2A1A3E] transition-colors">
                    <Instagram size={20} className="lg:w-[18px] lg:h-[18px]" />
                  </a>
                  <a href="#" title="Follow us on Twitter" className="w-12 h-12 lg:w-10 lg:h-10 bg-[#3D2156] text-white rounded-full flex items-center justify-center hover:bg-[#2A1A3E] transition-colors">
                    <Twitter size={20} className="lg:w-[18px] lg:h-[18px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Large Logo Section - Hidden on mobile/tablet */}
      <div className="hidden lg:block bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 mr-6">
              <AlpacaLogo />
            </div>
            <div className="text-left">
              <h2 className="text-6xl md:text-8xl font-bold text-[#3D2156] leading-none">
                KALLPA
              </h2>
              <p className="text-xl text-[#3D2156]/70 mt-2">Power in Motion</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#3D2156] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-white/80 text-sm">
                © 2024 KALLPA. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link to="#" className="text-white/60 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link to="#" className="text-white/60 hover:text-white text-sm transition-colors">
                  Terms & Conditions
                </Link>
                <Link to="#" className="text-white/60 hover:text-white text-sm transition-colors">
                  Legal Notice
                </Link>
              </div>
            </div>
            <div className="text-white/60 text-sm">
              Made with ❤️ in the Andes
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;