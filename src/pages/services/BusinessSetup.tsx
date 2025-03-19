import React from 'react';
import { Building2, FileCheck, Users, Briefcase } from 'lucide-react';

const BusinessSetup: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Setup in Kenya</h1>
          <p className="text-xl text-purple-100 max-w-2xl">
            Complete business registration and setup services to help you establish your presence in Kenya's growing market.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Company Registration',
              description: 'Quick and efficient company incorporation services.',
              icon: Building2,
            },
            {
              title: 'Business Licensing',
              description: 'Assistance with all necessary permits and licenses.',
              icon: FileCheck,
            },
            {
              title: 'Tax Registration',
              description: 'KRA registration and tax compliance services.',
              icon: Briefcase,
            },
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Kenya for Business?</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Strategic location in East Africa',
              'Growing economy and market',
              'Skilled workforce',
              'Modern infrastructure',
              'Technology hub',
              'Investment incentives',
              'Political stability',
              'Access to regional markets',
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSetup;