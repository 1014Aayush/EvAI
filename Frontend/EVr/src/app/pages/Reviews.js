"use client";
import React, { useState } from 'react';



const ReviewCarousel = () => {
    const [currentReview, setCurrentReview] = useState(0);
    const reviews = [
      { name: "John Doe", role: "CEO", company: "Tech Corp", text: "Amazing service and support!" },
      { name: "Jane Smith", role: "CTO", company: "Innovation Inc", text: "Transformed our business completely." },
      { name: "Mike Johnson", role: "Director", company: "Future Labs", text: "Best decision we ever made." }
    ];
  
    return (
      <div className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            What Our Clients Say
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl mb-8 text-gray-300">"{reviews[currentReview].text}"</p>
            <p className="font-semibold text-xl">{reviews[currentReview].name}</p>
            <p className="text-gray-400">{reviews[currentReview].role}, {reviews[currentReview].company}</p>
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentReview(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentReview ? 'bg-blue-500 w-6' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ReviewCarousel;