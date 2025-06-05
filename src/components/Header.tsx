
import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-2 rounded-lg font-bold text-lg">
              Harishyam Infra
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About Us
            </Link>
            <Link 
              to="/project"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Our Project
            </Link>
            <Link 
              to="/premium-plots"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Premium Plots
            </Link>
            <Link 
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                <Phone className="w-4 h-4 mr-2" />
                Enquire Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-white">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 text-left font-medium"
              >
                Home
              </Link>
              <Link 
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 text-left font-medium"
              >
                About Us
              </Link>
              <Link 
                to="/project"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 text-left font-medium"
              >
                Our Project
              </Link>
              <Link 
                to="/premium-plots"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 text-left font-medium"
              >
                Premium Plots
              </Link>
              <Link 
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 text-left font-medium"
              >
                Contact Us
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white w-full mt-4">
                  <Phone className="w-4 h-4 mr-2" />
                  Enquire Now
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
