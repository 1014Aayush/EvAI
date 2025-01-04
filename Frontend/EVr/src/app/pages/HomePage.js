"use client";
import React from 'react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TopOffers = () => (
  <div className="bg-blue-600 text-white text-center py-2">
    <p className="text-sm">Special Offer: Get 20% off on all enterprise solutions</p>
  </div>
);

const Navbar = () => (
  <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
    <div className="text-2xl font-bold">YourBrand</div>
    <div className="flex gap-6">
      <a href="#" className="hover:text-blue-600">Products</a>
      <a href="#" className="hover:text-blue-600">Solutions</a>
      <a href="#" className="hover:text-blue-600">About</a>
      <a href="#" className="hover:text-blue-600">Contact</a>
    </div>
  </nav>
);

const ServicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { title: "Cloud Solutions", desc: "Enterprise-grade cloud infrastructure" },
    { title: "AI Integration", desc: "Smart automation for your business" },
    { title: "Digital Transformation", desc: "Complete business modernization" }
  ];

  return (
    <div className="relative h-96 bg-gray-100">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-8">
          <h2 className="text-4xl font-bold mb-4">{slides[currentSlide].title}</h2>
          <p className="text-xl">{slides[currentSlide].desc}</p>
        </div>
      </div>
      <button 
        className="absolute left-4 top-1/2 transform -translate-y-1/2"
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
      >
        <ChevronLeft size={40} />
      </button>
      <button 
        className="absolute right-4 top-1/2 transform -translate-y-1/2"
        onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
      >
        <ChevronRight size={40} />
      </button>
    </div>
  );
};

const SupportedCompanies = () => (
  <div className="py-12 bg-gray-50">
    <div className="container mx-auto text-center">
      <h3 className="text-xl mb-8">Trusted by Industry Leaders</h3>
      <div className="flex justify-center gap-12">
        <div className="w-24 h-12 bg-gray-200" />
        <div className="w-24 h-12 bg-gray-200" />
        <div className="w-24 h-12 bg-gray-200" />
        <div className="w-24 h-12 bg-gray-200" />
      </div>
    </div>
  </div>
);

const ProductGrid = () => (
  <div className="py-16 bg-white">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Our Products & Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Product {item}</h3>
            <p className="text-gray-600">Description of product or service offering goes here.</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SolutionsGrid = () => (
  <div className="py-16 bg-gray-50">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Solution {item}</h3>
            <p className="text-gray-600">Description of solution and its benefits goes here.</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ReviewCarousel = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const reviews = [
    { name: "John Doe", role: "CEO", company: "Tech Corp", text: "Amazing service and support!" },
    { name: "Jane Smith", role: "CTO", company: "Innovation Inc", text: "Transformed our business completely." },
    { name: "Mike Johnson", role: "Director", company: "Future Labs", text: "Best decision we ever made." }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl mb-6">"{reviews[currentReview].text}"</p>
          <p className="font-semibold">{reviews[currentReview].name}</p>
          <p className="text-gray-600">{reviews[currentReview].role}, {reviews[currentReview].company}</p>
        </div>
      </div>
    </div>
  );
};

const SuccessStories = () => (
  <div className="py-16 bg-gray-50">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white p-6 rounded-lg shadow">
            <div className="w-full h-48 bg-gray-200 mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">Success Story {item}</h3>
            <p className="text-gray-600">Brief description of the success story and results achieved.</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const LatestUpdates = () => (
  <div className="py-16 bg-white">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Latest Updates</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="border rounded-lg overflow-hidden">
            <div className="w-full h-48 bg-gray-200" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Update Title {item}</h3>
              <p className="text-gray-600 mb-4">Brief description of the update or news item.</p>
              <a href="#" className="text-blue-600 hover:underline">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
      <div>
        <h4 className="text-xl font-bold mb-4">About Us</h4>
        <p className="text-gray-400">Brief company description and mission statement.</p>
      </div>
      <div>
        <h4 className="text-xl font-bold mb-4">Products</h4>
        <ul className="space-y-2 text-gray-400">
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-bold mb-4">Solutions</h4>
        <ul className="space-y-2 text-gray-400">
          <li>Solution 1</li>
          <li>Solution 2</li>
          <li>Solution 3</li>
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-bold mb-4">Contact</h4>
        <ul className="space-y-2 text-gray-400">
          <li>Email: contact@company.com</li>
          <li>Phone: (555) 123-4567</li>
          <li>Address: 123 Business St</li>
        </ul>
      </div>
    </div>
  </footer>
);

const HomePage = () => {
  return (
    <div>
      <TopOffers />
      <Navbar />
      <ServicesCarousel />
      <SupportedCompanies />
      <ProductGrid />
      <SolutionsGrid />
      <ReviewCarousel />
      <SuccessStories />
      <LatestUpdates />
      <Footer />
    </div>
  );
};

export default HomePage;