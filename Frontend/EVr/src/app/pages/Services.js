"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const ServicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      title: "Cloud Solutions",
      desc: "Enterprise-grade cloud infrastructure designed for scalability and performance",
    },
    {
      title: "AI Integration",
      desc: "Smart automation solutions that streamline your business operations",
    },
    {
      title: "Digital Transformation",
      desc: "Strategic business modernization for the digital age",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        handleSlideChange('next');
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [isAnimating]);

  const handleSlideChange = (direction) => {
    setIsAnimating(true);
    if (direction === 'next') {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="relative h-[600px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10 bg-cover bg-center" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-8 max-w-4xl">
          {/* Slide indicators */}
          <div className="mb-12 flex justify-center space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 ease-in-out ${
                  index === currentSlide
                    ? 'w-8 h-2 bg-white'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                } rounded-full`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide content */}
          <div className="transform transition-all duration-500 ease-out">
            <h2 
              className="text-5xl font-bold mb-6 text-white"
            >
              {slides[currentSlide].title}
            </h2>
            
            <p className="text-2xl text-white/90 mb-10">
              {slides[currentSlide].desc}
            </p>

            <button className="group px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition-all duration-300">
              Learn More
              <ArrowRight 
                className="inline ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                size={20}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
        <button 
          onClick={() => handleSlideChange('prev')}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={() => handleSlideChange('next')}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ServicesCarousel;