import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import { Shield, Users, Award, TrendingUp, Building, Target, Heart, Handshake } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-900 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
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
            <div className="relative">
              <img 
                src="/images/about_img/layout.jpg"
                alt="Modern Real Estate Development"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-emerald-600">₹500Cr+</div>
                <div className="text-gray-600 text-sm">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-lg text-gray-600">Meet the visionaries behind Harishyam Infra</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="/images/about_img/ceo1.jpg"
                alt="CEO"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dheeraj Sharma</h3>
                <p className="text-emerald-600 font-medium mb-3">Chief Executive Officer</p>
                <p className="text-gray-600 text-sm">
                  With over 15 years in real estate, Dheeraj leads our vision of creating sustainable communities.
                </p>
              </div>
            </div>

            {/* <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="/images/about_img/sudheer.jpg"
                alt="CO-Founder"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sudheer Kumar</h3>
                <p className="text-emerald-600 font-medium mb-3">Chief Operating Officer</p>
                <p className="text-gray-600 text-sm">
                  Shudheer ensures operational excellence and customer satisfaction across all projects.
                </p>
              </div>
            </div> */}

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="/images/about_img/abhishek.jpg"
                alt="CTO"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Abhishek Rajput</h3>
                <p className="text-emerald-600 font-medium mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  Abhishek oversees Managing Director and ensures quality construction standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Images Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey in Pictures</h2>
            <p className="text-lg text-gray-600">A glimpse into our professional excellence and project milestones</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-6">
              <img 
                src="images/about_img/front.jpg"
                alt="Office Building"
                className="w-full h-48 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img 
                src="images/about_img/shv4.jpg"
                alt="Office Building"
                className="w-full h-48 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            
            <div className="space-y-6">
              <img 
                src="images/about_img/plot-rod.jpg"
                alt="Business Meeting"
                className="w-full h-32 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img 
                src="images/about_img/shop.jpg"
                alt="Modern Architecture"
                className="w-full h-48 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            
            <div className="space-y-6">
              <img 
                src="images/about_img/temple.jpg"
                alt="Team Collaboration"
                className="w-full h-48 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img 
                src="images/about_img/shv1.jpg"
                alt="Construction Site"
                className="w-full h-32 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            
            <div className="space-y-6">
              <img 
                src="images/about_img/shv2.jpg"
                alt="Office Environment"
                className="w-full h-32 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img 
                src="images/about_img/shv3.jpg"
                alt="Project Planning"
                className="w-full h-48 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Shield className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trust</h3>
              <p className="text-gray-600">Building relationships based on transparency and integrity</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Creating spaces that bring people together</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Award className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">Delivering quality that exceeds expectations</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <TrendingUp className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Growth</h3>
              <p className="text-gray-600">Ensuring profitable investments for our clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white p-8 rounded-2xl">
              <Target className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-emerald-100 leading-relaxed">
                To create exceptional real estate opportunities that provide sustainable value to our investors 
                while contributing to the development of modern, livable communities. We strive to make property 
                investment accessible and profitable for families across India.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-8 rounded-2xl">
              <Heart className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-yellow-100 leading-relaxed">
                To be India's most trusted real estate developer, known for creating premium properties 
                in strategic locations that transform communities and deliver exceptional returns to our 
                investors while maintaining the highest standards of quality and transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-emerald-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-xl text-emerald-100">Milestones that define our success</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">10+</div>
              <div className="text-emerald-100">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-emerald-100">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">₹50Cr+</div>
              <div className="text-emerald-100">Projects Value</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-emerald-100">Customer Satisfaction</div>
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