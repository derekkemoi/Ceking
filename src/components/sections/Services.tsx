import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../data';
import { Import as Passport, Building2, Briefcase, Car, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Passport':
        return Passport;
      case 'Building':
        return Building2;
      case 'Briefcase':
        return Briefcase;
      case 'Car':
        return Car;
      default:
        return Briefcase;
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = getIcon(service.icon);
            
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
              >
                <div className="relative flex flex-col h-full">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300 group-hover:scale-110 transform">
                    <IconComponent 
                      size={32} 
                      className="text-blue-600 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mb-6">
                    {service.description}
                  </p>

                  <Link
                    to={service.link}
                    className="mt-auto inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-all duration-300 group/link"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;