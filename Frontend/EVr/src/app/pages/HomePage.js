"use client";

import React from 'react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from './Navbar';
import ServicesCarousel from './Services';
import Solutions from './Solutions';
import ReviewCarousel from './Reviews';
import SuccessStories from './SuccessStories';
import LatestUpdates from './Updates';
import Footer from './Footer';


// First, add this font link to your _document.js or layout.js
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

const TopOffers = () => (
  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2">
    <p className="text-sm font-medium">Special Offer: Get 20% off on all enterprise solutions</p>
  </div>
);

const SupportedCompanies = () => (
  <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
    <div className="container mx-auto text-center">
      <h3 className="text-2xl font-semibold mb-12 text-gray-800">Trusted by Industry Leaders</h3>
      <div className="flex justify-center gap-16 flex-wrap">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-32 h-16 bg-white shadow-md rounded-lg flex items-center justify-center hover:shadow-xl transition-shadow">
            <div className="w-24 h-12 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  </div>
);


const HomePage = () => {
  return (
    <div className="font-['Inter',sans-serif] antialiased">
      <TopOffers />
      <Navbar />
      <ServicesCarousel />
      <SupportedCompanies />
      <Solutions />
      <SuccessStories />
      <LatestUpdates />
      <ReviewCarousel />
      <Footer />
    </div>
  );
};

export default HomePage;