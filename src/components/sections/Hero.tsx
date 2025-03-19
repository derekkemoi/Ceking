import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[100svh] flex items-center">
      {/* Background with adjusted overlay opacity */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://raw.githubusercontent.com/derekkemoi/Ngetich-Files/refs/heads/main/hero_image.jpeg"
          alt="Nairobi Skyline with Urban Park"
          className="w-full h-full object-cover"
        />
        {/* Reduced opacity layers for better image visibility */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-28 sm:pt-0">
        <div className="max-w-3xl mx-auto text-center sm:text-left">
          {/* Main heading with improved mobile visibility */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in-up leading-tight tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            {/* Your Gateway to<br className="sm:hidden" /> Opportunities<br className="sm:hidden" /> in Kenya */}
            Your Gateway to Kenya: Seamless Immigration & Investment Solutions
          </h1>

          {/* Description with improved visibility */}
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto sm:mx-0 animate-fade-in-up delay-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
          Expert support for expatriates, investors, and businesses navigating Kenya’s immigration and business setup processes
          </p>

          {/* CTA buttons with modern design */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12 animate-fade-in-up delay-300 justify-center sm:justify-start">
            <button 
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full flex items-center justify-center space-x-2 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-600/25"
            >
              <span className="font-semibold">Get Started</span>
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button 
              onClick={scrollToServices}
              className="w-full sm:w-auto bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white border border-white/25 px-8 py-4 rounded-full flex items-center justify-center space-x-2 transform transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span className="font-semibold">Our Services</span>
            </button>
          </div>

          {/* Stats with improved visibility and smaller size on mobile */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 animate-fade-in-up delay-400">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/20 shadow-lg">
              <div className="text-xl sm:text-3xl font-bold text-white mb-0 sm:mb-1 drop-shadow-lg">10+ Years</div>
              <div className="text-xs sm:text-base text-white/90">of Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/20 shadow-lg">
              <div className="text-xl sm:text-3xl font-bold text-white mb-0 sm:mb-1 drop-shadow-lg">1000+</div>
              <div className="text-xs sm:text-base text-white/90">Satisfied Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/20 shadow-lg">
              <div className="text-xl sm:text-3xl font-bold text-white mb-0 sm:mb-1 drop-shadow-lg">98%</div>
              <div className="text-xs sm:text-base text-white/90">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with improved visibility */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={28} className="text-white/80" />
      </div>
    </div>
  );
};

export default Hero;