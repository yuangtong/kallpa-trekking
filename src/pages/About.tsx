import React from 'react';
import { Mountain, Users, Leaf, Award } from 'lucide-react';

function About() {
  const stats = [
    { label: 'Years of Heritage', value: '500+', icon: Mountain },
    { label: 'Artisan Partners', value: '50+', icon: Users },
    { label: 'Sustainable Materials', value: '95%', icon: Leaf },
    { label: 'Quality Awards', value: '12', icon: Award },
  ];

  return (
    <div className="pt-16 min-h-screen bg-[#F5F1E7]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#3D2156] to-[#6B7C6E] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-white"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-white"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Born in the <span className="text-[#F5F1E7]">Andes</span>
          </h1>
          <p className="text-xl lg:text-2xl text-[#F5F1E7]/90 leading-relaxed">
            KALLPA embodies the ancient strength and wisdom of the Andean mountains, 
            weaving traditional Quechua heritage with cutting-edge performance technology.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/90 rounded-2xl p-6 text-center border border-white/20 hover:scale-105 transition-all duration-300"
              >
                <stat.icon size={32} className="text-[#3D2156] mx-auto mb-3" />
                <div className="text-3xl font-bold text-[#3D2156] mb-2">{stat.value}</div>
                <div className="text-[#6B7C6E] text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#3D2156] mb-6">
                The Meaning of <span className="text-[#6B7C6E]">KALLPA</span>
              </h2>
              <div className="space-y-6 text-[#1E2421] leading-relaxed">
                <p>
                  In the ancient Quechua language, "Kallpa" means strength, energy, and life force. 
                  It represents the power that flows through all living things, connecting us to the 
                  earth and mountains that have shaped Andean culture for millennia.
                </p>
                <p>
                  Our founders discovered this profound concept while trekking through the Sacred Valley, 
                  witnessing how local communities have thrived in harmony with one of the world's most 
                  challenging environments. They realized that true outdoor performance comes not just 
                  from technology, but from understanding and respecting the natural world.
                </p>
                <p>
                  Today, KALLPA honors this wisdom by creating gear that embodies both ancient knowledge 
                  and modern innovation. Every piece tells the story of the Andes—its resilience, its 
                  beauty, and its enduring strength.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/80 rounded-2xl overflow-hidden border border-white/20">
                <img
                  src="https://images.pexels.com/photos/1374295/pexels-photo-1374295.jpeg"
                  alt="Andean Mountains"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D2156]/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#3D2156]/5 to-[#6B7C6E]/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#3D2156] mb-6">Our Mission</h3>
              <p className="text-[#1E2421] leading-relaxed">
                To create the world's most sustainable and performance-driven outdoor gear by 
                honoring traditional Andean craftsmanship and integrating breakthrough 
                technologies that respect both people and planet.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#6B7C6E]/5 to-[#3D2156]/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#3D2156] mb-6">Our Vision</h3>
              <p className="text-[#1E2421] leading-relaxed">
                To inspire a global community of conscious adventurers who see outdoor exploration 
                as a way to connect with nature, honor cultural heritage, and create positive 
                impact for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-gradient-to-br from-[#F5F1E7] to-[#6B7C6E]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#3D2156] mb-6">Sustainable by Design</h2>
            <p className="text-[#6B7C6E] text-lg max-w-3xl mx-auto">
              Our commitment to sustainability isn't just about materials—it's about creating 
              a circular economy that benefits local communities and preserves the environments we love to explore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/90 rounded-2xl p-6 border border-white/20 text-center">
              <div className="w-16 h-16 bg-[#6B7C6E]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf size={32} className="text-[#6B7C6E]" />
              </div>
              <h3 className="text-xl font-bold text-[#3D2156] mb-3">Responsible Materials</h3>
              <p className="text-[#1E2421] text-sm leading-relaxed">
                95% of our materials are sustainably sourced, including responsibly harvested alpaca fiber 
                and recycled performance synthetics.
              </p>
            </div>

            <div className="bg-white/90 rounded-2xl p-6 border border-white/20 text-center">
              <div className="w-16 h-16 bg-[#3D2156]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-[#3D2156]" />
              </div>
              <h3 className="text-xl font-bold text-[#3D2156] mb-3">Community Partnership</h3>
              <p className="text-[#1E2421] text-sm leading-relaxed">
                We work directly with 50+ Andean artisan families, ensuring fair wages and 
                preserving traditional craftsmanship techniques.
              </p>
            </div>

            <div className="bg-white/90 rounded-2xl p-6 border border-white/20 text-center">
              <div className="w-16 h-16 bg-[#6B7C6E]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain size={32} className="text-[#6B7C6E]" />
              </div>
              <h3 className="text-xl font-bold text-[#3D2156] mb-3">Conservation Impact</h3>
              <p className="text-[#1E2421] text-sm leading-relaxed">
                5% of profits support Andean conservation projects and indigenous land rights initiatives 
                throughout South America.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#3D2156] to-[#6B7C6E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join the KALLPA Community</h2>
          <p className="text-[#F5F1E7] text-lg mb-8 leading-relaxed">
            Be part of a movement that celebrates heritage, pushes boundaries, and creates positive impact 
            with every adventure. Experience the power of KALLPA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#F5F1E7] text-[#3D2156] px-8 py-4 rounded-lg font-semibold hover:bg-white transition-colors">
              Explore Products
            </button>
            <button className="border-2 border-[#F5F1E7] text-[#F5F1E7] px-8 py-4 rounded-lg font-semibold hover:bg-[#F5F1E7] hover:text-[#3D2156] transition-colors">
              Our Story
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;