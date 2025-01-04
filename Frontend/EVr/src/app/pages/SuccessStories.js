"use client";

import React, { useState } from 'react';
import { ArrowRight, Star, TrendingUp, Target, Award, BarChart } from 'lucide-react';

const SuccessStories = () => {
  const [activeIndustry, setActiveIndustry] = useState('all');

  const successStories = [
    {
      industry: 'technology',
      companyName: "TechCorp Global",
      logo: "/api/placeholder/100/100",
      title: "Digital Transformation Success",
      description: "How TechCorp achieved 300% ROI with our cloud solutions",
      metrics: [
        { icon: <TrendingUp className="w-5 h-5" />, value: "300%", label: "ROI Increase" },
        { icon: <Target className="w-5 h-5" />, value: "50%", label: "Cost Reduction" },
        { icon: <BarChart className="w-5 h-5" />, value: "2x", label: "Productivity" }
      ],
      testimonial: {
        quote: "The implementation was seamless, and the results exceeded our expectations.",
        author: "John Smith",
        role: "CTO, TechCorp Global"
      },
      image: "/api/placeholder/600/400"
    },
    {
      industry: 'healthcare',
      companyName: "HealthFirst",
      logo: "/api/placeholder/100/100",
      title: "Healthcare Innovation",
      description: "Revolutionizing patient care with AI-powered solutions",
      metrics: [
        { icon: <TrendingUp className="w-5 h-5" />, value: "45%", label: "Efficiency Gain" },
        { icon: <Target className="w-5 h-5" />, value: "90%", label: "Accuracy" },
        { icon: <BarChart className="w-5 h-5" />, value: "60min", label: "Time Saved" }
      ],
      testimonial: {
        quote: "This solution transformed how we deliver patient care.",
        author: "Dr. Sarah Johnson",
        role: "Medical Director, HealthFirst"
      },
      image: "/api/placeholder/600/400"
    },
    {
      industry: 'finance',
      companyName: "FinanceHub",
      logo: "/api/placeholder/100/100",
      title: "Banking Transformation",
      description: "Modernizing financial services with blockchain technology",
      metrics: [
        { icon: <TrendingUp className="w-5 h-5" />, value: "500K", label: "Daily Transactions" },
        { icon: <Target className="w-5 h-5" />, value: "99.9%", label: "Uptime" },
        { icon: <BarChart className="w-5 h-5" />, value: "80%", label: "Cost Savings" }
      ],
      testimonial: {
        quote: "A game-changing solution for our digital banking initiatives.",
        author: "Michael Chang",
        role: "CEO, FinanceHub"
      },
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-['Inter',sans-serif]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-20 bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Customer Success Stories
            </h1>
            <p className="text-lg leading-8 text-gray-300 mb-8">
              Discover how leading organizations are transforming their businesses with our solutions.
              Real results, real impact.
            </p>
          </div>
          {/* Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: <Star className="w-6 h-6" />, value: "500+", label: "Happy Clients" },
              { icon: <Award className="w-6 h-6" />, value: "98%", label: "Success Rate" },
              { icon: <Target className="w-6 h-6" />, value: "$2B+", label: "Client ROI" }
            ].map((metric, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-blue-400 mb-4">{metric.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Filter */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {['all', 'technology', 'healthcare', 'finance'].map((industry) => (
            <button
              key={industry}
              onClick={() => setActiveIndustry(industry)}
              className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                activeIndustry === industry
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {industry.charAt(0).toUpperCase() + industry.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="space-y-24">
          {successStories
            .filter(story => activeIndustry === 'all' || story.industry === activeIndustry)
            .map((story, index) => (
              <div key={index} className="group">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                      <img
                        src={story.image}
                        alt={story.title}
                        className="rounded-2xl shadow-xl w-full relative z-10"
                      />
                    </div>
                  </div>
                  <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={story.logo}
                        alt={story.companyName}
                        className="w-12 h-12 rounded-lg"
                      />
                      <h3 className="text-xl font-semibold text-gray-900">{story.companyName}</h3>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                      {story.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">{story.description}</p>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {story.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-xl shadow-sm">
                          <div className="text-blue-600 mb-2">{metric.icon}</div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                          <div className="text-sm text-gray-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <blockquote className="border-l-4 border-blue-600 pl-4 mb-8">
                      <p className="text-lg text-gray-600 italic mb-2">"{story.testimonial.quote}"</p>
                      <footer className="text-sm">
                        <strong className="text-gray-900">{story.testimonial.author}</strong>
                        <span className="text-gray-600"> — {story.testimonial.role}</span>
                      </footer>
                    </blockquote>

                    <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all group">
                      Read Full Story
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations that have transformed their businesses with our solutions.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:from-blue-500 hover:to-purple-500 transition-all">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;