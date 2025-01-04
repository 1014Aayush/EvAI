"use client";
import React, { useState } from 'react';

const SolutionsGrid = () => (
  <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-4">Our Solutions</h2>
      <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">Tailored solutions to meet your specific business needs</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="group">
            <div className="p-8 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 mb-6 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500" />
              <h3 className="text-xl font-semibold mb-3">Solution {item}</h3>
              <p className="text-gray-600 mb-6">Description of solution and its benefits goes here.</p>
              <a href="#" className="text-purple-600 font-medium group-hover:text-blue-600 transition-colors">
                Learn more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SolutionsGrid;