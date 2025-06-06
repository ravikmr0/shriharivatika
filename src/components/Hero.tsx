
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Star, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white pt-16">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-6 animate-pulse">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-yellow-300 font-medium">Premium Investment Opportunity</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Invest in Tomorrow,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Today
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl mb-8 text-blue-100 font-medium">
            Premium Jewar Airport Plots at Shri Hari Vatika
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Secure your future with strategically located plots near the upcoming Jewar Airport. 
            Experience exceptional growth potential in India's largest airport development.
          </p>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Shield className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-sm font-medium"> Approved</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <MapPin className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-sm font-medium">10 KM from Jewar Airport</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Star className="w-5 h-5 text-yellJow-400 mr-2" />
              <span className="text-sm font-medium">Government Approved</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-2xl transition-all duration-300 hover:shadow-yellow-500/25 hover:scale-105">
                Get Brochure
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 text-lg rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105">
                Book Site Visit
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">₹15L+</div>
              <div className="text-sm text-blue-200">Starting Price</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">5 KM</div>
              <div className="text-sm text-blue-200">From Airport</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">300%</div>
              <div className="text-sm text-blue-200">Expected ROI</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">500+</div>
              <div className="text-sm text-blue-200">Happy Families</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating shapes for visual appeal */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
    </section>
  );
};

export default Hero;
