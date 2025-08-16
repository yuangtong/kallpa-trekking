import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, Mountain, Star, ChevronDown } from 'lucide-react';
import { featuredProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import heroImage from '../assets/images/ChatGPT Image Aug 16, 2025, 01_52_04 AM.png';

function Homepage() {
  const testimonials = [
    {
      name: "Sarah Chen",
      location: "Vancouver, Canada",
      text: "The Andean Storm Shell kept me dry during a week in Patagonia. The alpaca blend is incredibly soft yet technical.",
      rating: 5
    },
    {
      name: "Marcus Torres",
      location: "Lima, Peru",
      text: "Finally, gear that honors our heritage while pushing boundaries. KALLPA represents Peru beautifully.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      location: "Madrid, Spain",
      text: "Best investment I've made for outdoor gear. The sustainability story makes it even better.",
      rating: 5
    }
  ];

  return (
    <div>
      {/* Full-Screen Hero Section */}
      <section className="h-screen relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              KALLPA
            </h1>
            <p className="text-2xl lg:text-3xl text-[#F5F1E7] mb-4 font-light">
              Power in Motion
            </p>
            <p className="text-lg lg:text-xl text-[#F5F1E7]/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Where ancient Andean wisdom meets cutting-edge innovation. 
              Experience the strength of the mountains in every fiber.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center gap-3 bg-[#F5F1E7] text-[#3D2156] px-10 py-4 rounded-lg font-semibold hover:bg-white transition-all duration-300 hover:scale-105 group text-lg"
              >
                Explore Collection
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 border-2 border-[#F5F1E7] text-[#F5F1E7] px-10 py-4 rounded-lg font-semibold hover:bg-[#F5F1E7] hover:text-[#3D2156] transition-all duration-300 text-lg"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#F5F1E7] animate-bounce">
          <ChevronDown size={32} className="opacity-80" />
        </div>
      </section>

      {/* Hero Section - Bento Grid */}
      <section className="min-h-screen bg-gradient-to-br from-[#F5F1E7] via-[#F5F1E7] to-[#6B7C6E]/10 relative overflow-hidden py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#3D2156]"></div>
          <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-[#6B7C6E]"></div>
          <div className="absolute bottom-40 left-1/4 w-16 h-16 rounded-full bg-[#3D2156]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#3D2156] mb-6">
              Discover KALLPA
            </h2>
            <p className="text-xl text-[#6B7C6E] max-w-3xl mx-auto">
              Premium outdoor gear that honors Andean heritage while pushing the boundaries of performance technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[60vh]">
            {/* Main Hero Content */}
            <div className="lg:col-span-2 bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/20 flex flex-col justify-center relative overflow-hidden min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3D2156]/5 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-4xl lg:text-5xl font-bold text-[#3D2156] mb-6 leading-tight">
                  Heritage meets
                  <br />
                  <span className="text-[#6B7C6E]">Innovation</span>
                </h3>
                <p className="text-xl text-[#1E2421] mb-8 leading-relaxed">
                  Every piece tells the story of Peru's majestic mountains, combining traditional alpaca fiber mastery with modern performance technology.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 bg-[#3D2156] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#3D2156]/90 transition-all duration-300 hover:scale-105 group"
                >
                  Learn Our Story
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Featured Product */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 group hover:scale-105 transition-all duration-500 min-h-[400px]">
              <div className="h-full flex flex-col">
                <div className="flex-1 bg-gradient-to-br from-[#6B7C6E]/20 to-[#3D2156]/20 p-6 flex items-center justify-center">
                  <img
                    src={featuredProducts[0]?.image}
                    alt="Featured Product"
                    className="w-full h-56 object-cover rounded-lg group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#3D2156] mb-2">New Arrivals</h3>
                  <p className="text-[#6B7C6E] text-sm">Latest innovations in outdoor performance</p>
                </div>
              </div>
            </div>

            {/* Sustainability Badge */}
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20 flex flex-col justify-center items-center text-center hover:scale-105 transition-all duration-300 min-h-[200px]">
              <Leaf size={48} className="text-[#6B7C6E] mb-4" />
              <h3 className="font-bold text-[#3D2156] mb-2">95% Sustainable</h3>
              <p className="text-[#1E2421] text-sm">Committed to preserving our planet</p>
            </div>

            {/* Heritage Story */}
            <div className="lg:col-span-2 bg-gradient-to-r from-[#3D2156]/10 to-[#6B7C6E]/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 flex items-center gap-8 min-h-[200px]">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#3D2156] mb-4">Rooted in the Andes</h3>
                <p className="text-[#1E2421] leading-relaxed">
                  KALLPA honors the ancient wisdom of Quechua culture, combining traditional alpaca fiber mastery 
                  with modern performance technology. Each piece tells the story of Peru's majestic mountains.
                </p>
              </div>
              <div className="hidden md:block">
                <Mountain size={80} className="text-[#6B7C6E]/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#3D2156] mb-4">Featured Collection</h2>
            <p className="text-[#6B7C6E] text-lg max-w-2xl mx-auto">
              Discover our flagship pieces that embody the perfect fusion of heritage and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-[#3D2156] font-semibold hover:text-[#3D2156]/80 transition-colors group"
            >
              View All Products
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 bg-gradient-to-br from-[#F5F1E7] to-[#6B7C6E]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:scale-105 transition-all duration-300">
              <Shield size={48} className="text-[#3D2156] mx-auto mb-6" />
              <h3 className="text-xl font-bold text-[#3D2156] mb-4">Technical Excellence</h3>
              <p className="text-[#1E2421] leading-relaxed">
                Every piece undergoes rigorous testing in the harshest conditions to ensure peak performance.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:scale-105 transition-all duration-300">
              <Leaf size={48} className="text-[#6B7C6E] mx-auto mb-6" />
              <h3 className="text-xl font-bold text-[#3D2156] mb-4">Sustainable Future</h3>
              <p className="text-[#1E2421] leading-relaxed">
                We're committed to circular design and responsible sourcing for the next generation.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:scale-105 transition-all duration-300">
              <Mountain size={48} className="text-[#6B7C6E] mx-auto mb-6" />
              <h3 className="text-xl font-bold text-[#3D2156] mb-4">Cultural Heritage</h3>
              <p className="text-[#1E2421] leading-relaxed">
                Honoring traditional Andean craftsmanship while pushing the boundaries of innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Bento Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#3D2156] mb-4">Voices from the Trail</h2>
            <p className="text-[#6B7C6E] text-lg">What adventurers say about KALLPA</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 ${
                  index === 1 ? 'md:mt-8' : index === 2 ? 'md:mt-4' : ''
                }`}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-[#1E2421] mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-[#3D2156]">{testimonial.name}</p>
                  <p className="text-[#6B7C6E] text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-[#3D2156] to-[#6B7C6E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Join the KALLPA Journey</h2>
          <p className="text-[#F5F1E7] text-lg mb-8">
            Be the first to discover new collections and exclusive stories from the Andes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#F5F1E7]"
            />
            <button className="bg-[#F5F1E7] text-[#3D2156] px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;