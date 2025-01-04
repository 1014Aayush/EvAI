"use client";
import React, { useState } from 'react';


const LatestUpdates = () => (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Latest Updates</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">Stay informed with our latest news and updates</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group cursor-pointer">
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-full h-48 bg-gradient-to-br from-purple-500 to-blue-500" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Update Title {item}</h3>
                  <p className="text-gray-600 mb-4">Brief description of the update or news item.</p>
                  <a href="#" className="text-purple-600 font-medium group-hover:text-blue-600 transition-colors">
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  export default LatestUpdates;