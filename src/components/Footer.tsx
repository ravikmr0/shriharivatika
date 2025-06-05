
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-2 rounded-lg font-bold text-lg mb-4 inline-block">
              Harishyam Infra
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Building dreams and creating futures with premium real estate developments. 
              Your trusted partner for smart property investments.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Noida, UP</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@harishyaminfra.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('project')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Project
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Our Project */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shri Hari Vatika</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Premium Plots</li>
              <li>Near Jewar Airport</li>
              <li>RERA Approved</li>
              <li>Easy EMI Options</li>
              <li>Gated Community</li>
            </ul>
          </div>

          {/* Investment Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Investment Info</h3>
            <div className="space-y-3">
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-yellow-400 font-semibold">Starting Price</div>
                <div className="text-lg font-bold">₹15 Lakhs+</div>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-green-400 font-semibold">Expected ROI</div>
                <div className="text-lg font-bold">300-500%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Harishyam Infra. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-white transition-colors">RERA Details</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
