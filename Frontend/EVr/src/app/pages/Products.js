
"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductGrid = () => (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Products & Services</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">Discover our comprehensive suite of solutions designed to transform your business</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="group">
              <div className="p-8 rounded-xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 mb-6 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500" />
                <h3 className="text-xl font-semibold mb-3">Product {item}</h3>
                <p className="text-gray-600 mb-6">Description of product or service offering goes here.</p>
                <a href="#" className="text-blue-600 font-medium group-hover:text-purple-600 transition-colors">
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
  
  export default ProductGrid;
  