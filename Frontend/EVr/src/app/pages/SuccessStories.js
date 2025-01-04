"use client";
import React, { useState } from 'react';


const SuccessStories = () => (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Success Stories</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">Real results from real clients</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group cursor-pointer">
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-full h-56 bg-gradient-to-br from-blue-500 to-purple-500" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Success Story {item}</h3>
                  <p className="text-gray-600 mb-4">Brief description of the success story and results achieved.</p>
                  <a href="#" className="text-blue-600 font-medium group-hover:text-purple-600 transition-colors">
                    Read full story →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
export default SuccessStories;  