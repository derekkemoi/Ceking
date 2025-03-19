import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ceking East Africa</h3>
            <p className="text-gray-400">Your trusted partner for all services in Kenya.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#why-kenya" className="text-gray-400 hover:text-white">Why Kenya</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/services/visa" className="text-gray-400 hover:text-white">Visa Services</a></li>
              <li><a href="/services/work-permits" className="text-gray-400 hover:text-white">Work Permits</a></li>
              <li><a href="/services/business-setup" className="text-gray-400 hover:text-white">Business Setup</a></li>
              <li><a href="/services/travel" className="text-gray-400 hover:text-white">Travel Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook size={20} /></a>
              <a href="#" className="hover:text-blue-400"><Twitter size={20} /></a>
              <a href="#" className="hover:text-blue-400"><Instagram size={20} /></a>
              <a href="#" className="hover:text-blue-400"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Ceking East Africa Company Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;