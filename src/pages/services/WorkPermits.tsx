import React from 'react';
import { Briefcase, FileCheck, Users, Clock } from 'lucide-react';

const WorkPermits: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Work Permits in Kenya</h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Comprehensive work permit solutions for professionals and businesses looking to establish themselves in Kenya.
          </p>
        </div>
      </div>

      {/* Permit Types */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Class D Permit',
              description: 'For specific employment positions in Kenya.',
              icon: Briefcase,
            },
            {
              title: 'Class G Permit',
              description: 'For specific trade, business, or profession.',
              icon: FileCheck,
            },
            {
              title: 'Special Pass',
              description: 'Short-term work authorization.',
              icon: Clock,
            },
          ].map((permit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <permit.icon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{permit.title}</h3>
              <p className="text-gray-600">{permit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Requirements Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Requirements</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Valid passport with at least 6 months validity',
              'Detailed CV/Resume',
              'Academic and professional certificates',
              'Police clearance certificate',
              'Employment contract',
              'Company registration documents',
              'Tax compliance certificate',
              'Application forms and fees',
            ].map((requirement, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <p className="text-gray-700">{requirement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPermits;