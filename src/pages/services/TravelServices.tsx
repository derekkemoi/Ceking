import React from 'react';
import { Plane, Car, Hotel, Map } from 'lucide-react';

const TravelServices: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Travel Services in Kenya</h1>
          <p className="text-xl text-orange-100 max-w-2xl">
            Comprehensive travel solutions for business and leisure visitors to Kenya. From transportation to accommodation, we've got you covered.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Airport Transfers',
              description: 'Reliable airport pickup and drop-off services.',
              icon: Plane,
            },
            {
              title: 'Car Hire',
              description: 'Wide range of vehicles for your transportation needs.',
              icon: Car,
            },
            {
              title: 'Accommodation',
              description: 'Hotel bookings and accommodation arrangements.',
              icon: Hotel,
            },
            {
              title: 'Tour Services',
              description: 'Guided tours and safari arrangements.',
              icon: Map,
            },
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Destinations Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Masai Mara National Reserve',
              'Nairobi National Park',
              'Diani Beach',
              'Mount Kenya',
              'Lake Nakuru',
              'Amboseli National Park',
              'Lamu Old Town',
              'Tsavo National Park',
            ].map((destination, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <p className="text-gray-700">{destination}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelServices;