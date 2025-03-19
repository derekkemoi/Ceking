import React from 'react';
import { whyChooseUs } from '../../data';
import { Users, Timer, Headphones } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return Users;
      case 'Timer':
        return Timer;
      case 'HeadSet':
        return Headphones;
      default:
        return Users;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Why Choose Us
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseUs.map((item) => {
            const IconComponent = getIcon(item.icon);
            
            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-6 rounded-full mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent 
                      size={32} 
                      className="text-blue-600 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;