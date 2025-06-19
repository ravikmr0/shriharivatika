import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1587745890135-20db8c79b027?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1590169834934-297bdaa63590?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      image: "/images/plots/vatika_phase.jpg",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1559585888-6b01c8ea796b?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

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
    }, 4000); // Faster auto-play
    return () => clearInterval(interval);
  }, []);

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
                  alt={`Jewar Plot ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Overlay Text */}
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4">
                  <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
                    Jewar International Airport
                  </h1>
                  <p className="text-white text-lg md:text-2xl mt-2 drop-shadow-md">
                    Plots Investment Opportunity
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125 shadow'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
