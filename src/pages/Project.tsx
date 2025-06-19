
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import { MapPin, Car, Plane, Building, Trees, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Project = () => {
  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-900 to-emerald-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Shri Hari Vatika</h1>
            <p className="text-xl text-emerald-100">Premium Plots Near Jewar Airport</p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/plots/vatika.jpg"
                alt="Shri Hari Vatika Development"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <p className="text-lg text-gray-700 mb-6">
                Shri Hari Vatika is strategically located just 10 KM from the upcoming Jewar Airport, 
                offering premium residential plots with world-class amenities and infrastructure.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-emerald-600 mr-3" />
                  <span>Prime location near Jewar Airport</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-emerald-600 mr-3" />
                  <span>Approved Project</span>
                </div>
                <div className="flex items-center">
                  <Trees className="w-5 h-5 text-emerald-600 mr-3" />
                  <span>Green & Sustainable Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Features</h2>
            <p className="text-lg text-gray-600">Modern amenities for a comfortable lifestyle</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <Car className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wide Roads</h3>
              <p className="text-gray-600">30-40 feet wide roads for easy connectivity</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <Shield className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gated Community</h3>
              <p className="text-gray-600">Secure gated community with 24/7 security</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <Building className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Modern Infrastructure</h3>
              <p className="text-gray-600">Underground electricity and water supply</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
            <p className="text-lg text-gray-600">Affordable plots with flexible payment options</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Plot</h3>
              <div className="text-3xl font-bold text-emerald-600 mb-2">₹12-17 Lakhs</div>
              <div className="text-gray-600 mb-6">1000 sq ft</div>
              <Button onClick={scrollToContact} className="w-full">Book Now</Button>
            </div>
            <div className="bg-emerald-600 text-white p-8 rounded-2xl text-center transform scale-105">
              <h3 className="text-2xl font-bold mb-4">Premium Plot</h3>
              <div className="text-3xl font-bold mb-2">₹20-25 Lakhs</div>
              <div className="text-emerald-100 mb-6">1500 sq ft</div>
              <Button onClick={scrollToContact} variant="outline" className="w-full border-white text-emerald-600 bg-white hover:bg-gray-100">Book Now</Button>
            </div>
            <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Luxury Plot</h3>
              <div className="text-3xl font-bold text-emerald-600 mb-2">₹25-30 Lakhs</div>
              <div className="text-gray-600 mb-6">2000 sq ft</div>
              <Button onClick={scrollToContact} className="w-full">Book Now</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Project;
