import React from 'react';
import { Building2, Globe2, LineChart, Briefcase, Mountain, Home } from 'lucide-react';

const WhyKenya: React.FC = () => {
  return (
    <section id="why-kenya" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Why Kenya?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="group">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                Benefits of Relocating, Working, or Investing in Kenya
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Kenya is a top destination for expatriates, businesses, and investors due to its vibrant economy, 
                strategic location, and rich cultural heritage.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Building2,
                  title: "Economic Hub",
                  description: "East Africa's largest economy and key business gateway."
                },
                {
                  icon: Globe2,
                  title: "Strategic Location",
                  description: "Major regional hub with international connectivity."
                },
                {
                  icon: LineChart,
                  title: "Investment Growth",
                  description: "Growing industries in technology and agriculture."
                },
                {
                  icon: Briefcase,
                  title: "Business-Friendly",
                  description: "Government incentives for foreign investors."
                },
                {
                  icon: Mountain,
                  title: "Quality of Life",
                  description: "Stunning landscapes and welcoming culture."
                },
                {
                  icon: Home,
                  title: "Real Estate Market",
                  description: "Ideal for residential or commercial properties."
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:bg-gradient-to-br from-white to-blue-50"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-xl p-3 group-hover:bg-blue-600 group-hover:rotate-6 transition-all duration-500">
                      <item.icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1 group-hover:text-gray-700 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl transform group-hover:scale-[1.02] transition-transform duration-500">
              <img
                src="https://raw.githubusercontent.com/derekkemoi/Ngetich-Files/refs/heads/main/kenya.jpeg"
                alt="Kenya Business District"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="absolute -bottom-8 right-8 bg-white p-8 rounded-2xl shadow-xl max-w-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:shadow-2xl">
              <p className="text-gray-900 font-medium leading-relaxed">
                Kenya offers a dynamic, business-friendly atmosphere with opportunities for both professional and personal growth.
              </p>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mt-4 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKenya;