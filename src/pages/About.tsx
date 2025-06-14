
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import { Shield, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-900 to-emerald-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Harishyam Infra</h1>
            <p className="text-xl text-emerald-100">Building Dreams, Creating Legacies</p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Harishyam Infra has been a trusted name in real estate development for over a decade. 
                We specialize in creating premium residential and commercial properties that combine 
                modern amenities with strategic locations.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our flagship project, Shri Hari Vatika, represents our commitment to excellence 
                and our vision of providing affordable luxury near India's largest upcoming airport.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">500+</div>
                  <div className="text-gray-600">Happy Families</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern Real Estate Development"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">What drives us every day</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <Shield className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trust</h3>
              <p className="text-gray-600">Building relationships based on transparency and integrity</p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Creating spaces that bring people together</p>
            </div>
            <div className="text-center p-6">
              <Award className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">Delivering quality that exceeds expectations</p>
            </div>
            <div className="text-center p-6">
              <TrendingUp className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Growth</h3>
              <p className="text-gray-600">Ensuring profitable investments for our clients</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default About;
