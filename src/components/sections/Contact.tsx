import React from 'react';
import { Mail, Phone, Clock, MapPin, Send, User } from 'lucide-react';
import { contactInfo } from '../../data';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Send className="text-blue-600 mr-3" size={24} />
              Send us a message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 font-medium"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors duration-200">
                  <User className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{contactInfo.name}</h4>
                  <p className="text-blue-600 mt-1">{contactInfo.title}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors duration-200">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-600 mt-1">{contactInfo.address}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors duration-200">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:text-blue-700 mt-1 block">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors duration-200">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="text-blue-600 hover:text-blue-700 mt-1 block">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors duration-200">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Working Hours</h4>
                  <p className="text-gray-600 mt-1">{contactInfo.workingHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;