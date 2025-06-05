
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import { Shield, Camera, Car, Trees, Users, Clock } from 'lucide-react';

const GatedCommunity = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-900 to-green-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Gated Community</h1>
            <p className="text-xl text-green-100">Secure & Premium Living Environment</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Community Features</h2>
            <p className="text-lg text-gray-600">Experience premium lifestyle with world-class amenities</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">24/7 Security</h3>
              <p className="text-gray-600">Round-the-clock security with trained guards</p>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <Camera className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">CCTV Surveillance</h3>
              <p className="text-gray-600">Complete CCTV coverage for enhanced security</p>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <Car className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Controlled Entry</h3>
              <p className="text-gray-600">Gated entry with visitor management system</p>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <Trees className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Green Spaces</h3>
              <p className="text-gray-600">Landscaped parks and green areas</p>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Community Center</h3>
              <p className="text-gray-600">Modern community hall for events</p>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Maintenance</h3>
              <p className="text-gray-600">Professional maintenance and upkeep</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default GatedCommunity;
