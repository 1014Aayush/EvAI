"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const ServicesCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
      { title: "Cloud Solutions", desc: "Enterprise-grade cloud infrastructure" },
      { title: "AI Integration", desc: "Smart automation for your business" },
      { title: "Digital Transformation", desc: "Complete business modernization" }
    ];
  
    return (
      <div className="relative h-[600px] bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-20 bg-cover bg-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-8 max-w-4xl">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              {slides[currentSlide].title}
            </h2>
            <p className="text-2xl text-gray-300">{slides[currentSlide].desc}</p>
            <button className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium hover:shadow-lg hover:from-blue-500 hover:to-purple-500 transition-all">
              Learn More
            </button>
          </div>
        </div>
        <button 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all"
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
        >
          <ChevronLeft size={40} />
        </button>
        <button 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all"
          onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
        >
          <ChevronRight size={40} />
        </button>
      </div>
    );
  };
  
  export default ServicesCarousel;