import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Star, Shield, TrendingUp, Building2, Plane } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const backgroundImages = [
    {
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=2000&q=80",
      title: "Modern Township",
    },
    {
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=2000&q=80",
      title: "Premium Plots",
    },
    {
      url: "https://images.unsplash.com/photo-1587745890135-20db8c79b027?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Gated Community",
    },
    {
      url: "https://images.unsplash.com/photo-1705954797147-652784bc2484?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Future Development",
    },
  ];

  const floatingElements = [
    { icon: Building2, label: "Premium Plots", delay: "0s" },
    { icon: Plane, label: "Airport Proximity", delay: "0.5s" },
    { icon: TrendingUp, label: "High ROI", delay: "1s" },
    { icon: Shield, label: "Approved", delay: "1.5s" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-emerald-800/85 to-emerald-700/90">
        {/* Dynamic Background Images */}
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-2000 ease-in-out ${
                index === currentSlide
                  ? "opacity-30 scale-100"
                  : "opacity-0 scale-110"
              }`}
              style={{
                backgroundImage: `url(${image.url})`,
                filter: "brightness(0.6) contrast(1.2)",
              }}
            />
          ))}
        </div>

        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingElements.map((element, index) => (
            <div
              key={index}
              className={`absolute animate-bounce opacity-20 ${
                index === 0 ? "top-1/4 left-1/4" :
                index === 1 ? "top-1/3 right-1/4" :
                index === 2 ? "bottom-1/3 left-1/3" :
                "bottom-1/4 right-1/3"
              }`}
              style={{ 
                animationDelay: element.delay,
                animationDuration: "3s"
              }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
                <element.icon className="w-8 h-8 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Premium Badge */}
          <div 
            className={`inline-flex items-center bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Star className="w-5 h-5 text-yellow-400 mr-3 animate-spin" style={{ animationDuration: "3s" }} />
            <span className="text-yellow-300 font-semibold text-lg">Premium Investment Opportunity</span>
          </div>

          {/* Main Headlines */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Invest in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 animate-pulse">
                Tomorrow
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl mb-4 text-emerald-100 font-medium">
              Premium Jewar Airport Plots
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 text-emerald-200 max-w-3xl mx-auto leading-relaxed">
              Secure your future with India's largest airport development
            </p>
          </div>

          {/* Trust Signals */}
          <div 
            className={`flex flex-wrap justify-center items-center gap-8 mb-12 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 hover:bg-white/20 transition-all duration-300">
              <Shield className="w-6 h-6 text-green-400 mr-3" />
              <span className="font-semibold">Government Approved</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 hover:bg-white/20 transition-all duration-300">
              <MapPin className="w-6 h-6 text-emerald-400 mr-3" />
              <span className="font-semibold">10 KM from Airport</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 hover:bg-white/20 transition-all duration-300">
              <Star className="w-6 h-6 text-yellow-400 mr-3" />
              <span className="font-semibold">Gated Society</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold px-10 py-4 text-xl rounded-xl shadow-2xl transition-all duration-300 hover:shadow-yellow-500/25 hover:scale-105 transform">
                Get Brochure
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 font-bold px-10 py-4 text-xl rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 transform"
              >
                Book Site Visit
              </Button>
            </Link>
          </div>

          {/* Animated Stats */}
          <div 
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/20 transition-all duration-1000 delay-900 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 animate-pulse">
                ₹15L+
              </div>
              <div className="text-sm text-emerald-200">Starting Price</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 animate-pulse" style={{ animationDelay: "0.5s" }}>
                10 KM
              </div>
              <div className="text-sm text-emerald-200">From Airport</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 animate-pulse" style={{ animationDelay: "1s" }}>
                300%
              </div>
              <div className="text-sm text-emerald-200">Expected ROI</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 animate-pulse" style={{ animationDelay: "1.5s" }}>
                500+
              </div>
              <div className="text-sm text-emerald-200">Happy Families</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-yellow-400 scale-125 shadow-lg"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Current slide title */}
      <div className="absolute top-8 right-8 z-20">
        <div className="bg-black/30 backdrop-blur-sm rounded-xl px-6 py-3">
          <span className="text-white/90 font-medium">
            {backgroundImages[currentSlide].title}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;