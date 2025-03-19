import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-2">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 overflow-hidden rounded-lg transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md">
              <img
                src="https://raw.githubusercontent.com/derekkemoi/Ngetich-Files/refs/heads/main/logo.jpeg"
                alt="Ceking East Africa Logo"
                className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300"
              />
            </div>
            <div className="transform hover:translate-x-1 transition-transform duration-300">
              <div className="text-2xl font-bold text-blue-600">Ceking East Africa</div>
              <div className="text-sm text-gray-600">Company Ltd</div>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Home</Link>
            <a href="/#services" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Services</a>
            <a href="/#why-kenya" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Why Kenya</a>
            <a href="/#contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Home</Link>
              <a href="/#services" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Services</a>
              <a href="/#why-kenya" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Why Kenya</a>
              <a href="/#contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;