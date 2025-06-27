import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Star, TrendingUp, Phone, Calendar, ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      image: "/images/plots/vatika_hero.png",
      title: "Shri Hari Vatika",
      subtitle: "Premium Plots Near Jewar Airport",
      description: "Secure your future with strategic investment in government-approved plots"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Shri Hari Vatika",
      subtitle: "Investment Opportunity of a Lifetime",
      description: "300-500% expected ROI with India's largest airport project"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1705954797147-652784bc2484?q=80&w=1268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Shri Hari Vatika",
      subtitle: "Modern Gated Community",
      description: "24/7 security, wide roads, and premium amenities"
    }
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlideData = slides[currentSlide];

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCall = () => {
    window.open('tel:+917678538328', '_self');
  };

  const handleWhatsApp = () => {
    const message = "Hi! I'm interested in Shri Hari Vatika plots near Jewar Airport. Please share more details.";
    const whatsappUrl = `https://wa.me/917678538328?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={currentSlideData.image}
          alt={currentSlideData.title}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center bg-emerald-600/20 border border-emerald-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-emerald-300 font-medium text-sm">Government Approved Project</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                    Shri Hari
                  </span>
                  <br />
                  <span className="text-white">Vatika</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-emerald-300">
                  {currentSlideData.subtitle}
                </h2>
                <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                  {currentSlideData.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <MapPin className="w-6 h-6 text-emerald-400 mb-2" />
                  <div className="text-sm font-semibold">5 KM from</div>
                  <div className="text-xs text-gray-300">Jewar Airport</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <TrendingUp className="w-6 h-6 text-yellow-400 mb-2" />
                  <div className="text-sm font-semibold">300-500%</div>
                  <div className="text-xs text-gray-300">Expected ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <Star className="w-6 h-6 text-emerald-400 mb-2" />
                  <div className="text-sm font-semibold">₹15 Lac+</div>
                  <div className="text-xs text-gray-300">Starting Price</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={handleCall}
                  className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
                <Button 
                  onClick={scrollToProjects}
                  variant="outline" 
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"
                >
                  View Projects
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Quick Contact */}
              <div className="flex items-center space-x-6 pt-4">
                <button 
                  onClick={handleWhatsApp}
                  className="flex items-center text-green-400 hover:text-green-300 transition-colors"
                >
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">WhatsApp</span>
                </button>
                <div className="text-gray-400 text-sm">
                  <div className="font-medium">+91 7678538328</div>
                  <div className="text-xs">Available 24/7</div>
                </div>
              </div>
            </div>

            {/* Right Content - Video/Image Showcase */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Main Showcase Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl">
                  <div className="aspect-video rounded-xl overflow-hidden mb-4 relative group cursor-pointer">
                    <img 
                      src="/images/plots/vatika.jpg"
                      alt="Shri Hari Vatika Project"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">Project Highlights</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                        <span>Government Approved Project</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                        <span>Gated Community with 24/7 Security</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                        <span>Easy EMI Options Available</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-xs">Happy Families</div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-xs">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-emerald-500 scale-125 shadow-lg shadow-emerald-500/50'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            disabled={isAnimating}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;