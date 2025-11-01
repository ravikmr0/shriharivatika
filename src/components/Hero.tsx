import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowRight, MapPin, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Premium Plots Near Jewar Airport",
      subtitle: "Invest in Your Future Today"
    },
    {
      id: 2,
      image: "/images/plots/vatika_hero.png",
      title: "Shri Hari Vatika",
      subtitle: "Gated Community Living"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1705954797147-652784bc2484?q=80&w=1268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Government Approved Properties",
      subtitle: "100% Legal & Secure Investment"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1559585888-6b01c8ea796b?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Strategic Location",
      subtitle: "High ROI Potential"
    },
  ];

  const nextSlide = React.useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  }, [isAnimating, slides.length]);

  const goToSlide = (index) => {
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
  }, [nextSlide]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div className="relative w-full h-full perspective-[1500px]">
        <div
          className="absolute inset-0 transition-transform duration-800 ease-in-out"
          style={{
            transform: `translateZ(-1200px) rotateY(-${currentSlide * (360 / slides.length)}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {slides.map((slide, index) => {
            const angle = (360 / slides.length) * index;
            return (
              <div
                key={slide.id}
                className="absolute w-full h-full"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(1200px)`,
                  backfaceVisibility: 'hidden',
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {/* Professional Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent">
                  <div className="container mx-auto px-6 sm:px-8 lg:px-16 h-full flex items-center">
                    <div className="max-w-3xl space-y-6 animate-fade-in-up">
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full px-4 py-2">
                        <MapPin className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-300 text-sm font-medium">
                          Near Jewar International Airport
                        </span>
                      </div>

                      {/* Main Heading */}
                      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                        {slide.title}
                      </h1>

                      {/* Subtitle */}
                      <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-light">
                        {slide.subtitle}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-6 text-white/90">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-emerald-400" />
                          <span className="text-sm sm:text-base">High ROI</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm sm:text-base">Government Approved</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          <span className="text-sm sm:text-base">100% Secure</span>
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-wrap gap-4 pt-4">
                        <Link to="/projects">
                          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 group">
                            Explore Projects
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                        <Link to="/contact">
                          <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300">
                            Contact Us
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-emerald-500 shadow-lg shadow-emerald-500/50'
                : 'w-3 h-3 bg-white/40 hover:bg-white/60'
            }`}
            disabled={isAnimating}
            aria-label={`Go to slide ${index + 1}`}
            title={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs font-medium">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;