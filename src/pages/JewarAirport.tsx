
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import { Plane, MapPin, TrendingUp, Building, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const JewarAirport = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Near Jewar Airport</h1>
            <p className="text-xl text-blue-100">Strategic Location with Unlimited Growth Potential</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Jewar Airport Location?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Jewar Airport is set to become India's largest international airport, creating unprecedented 
                opportunities for property appreciation in the surrounding areas.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Plane className="w-5 h-5 text-blue-600 mr-3" />
                  <span>India's largest airport project</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span>Just 5 KM from our project</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-blue-600 mr-3" />
                  <span>300-500% expected appreciation</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Jewar Airport"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default JewarAirport;
