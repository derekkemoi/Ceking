import React from 'react';
import { FileCheck, Globe, Clock, Users } from 'lucide-react';

const VisaServices: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Visa Services in Kenya</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Expert guidance through Kenya's visa application process. We ensure a smooth and efficient experience for all visa types.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Tourist Visa',
              description: 'Quick processing for short-term visits to Kenya.',
              icon: Globe,
            },
            {
              title: 'Business Visa',
              description: 'Specialized visas for business activities and meetings.',
              icon: FileCheck,
            },
            {
              title: 'Student Visa',
              description: 'Educational visas for international students.',
              icon: Users,
            },
            {
              title: 'Transit Visa',
              description: 'Short-term visas for travelers passing through Kenya.',
              icon: Clock,
            },
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Visa Process</h2>
          <div className="max-w-4xl mx-auto">
            {/* Add process steps here */}
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Initial Consultation',
                  description: 'We assess your needs and recommend the best visa option.',
                },
                {
                  step: '02',
                  title: 'Document Preparation',
                  description: 'We help you gather and prepare all required documentation.',
                },
                {
                  step: '03',
                  title: 'Application Submission',
                  description: 'We submit your application and track its progress.',
                },
                {
                  step: '04',
                  title: 'Visa Collection',
                  description: 'We assist with the final collection of your visa.',
                },
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaServices;