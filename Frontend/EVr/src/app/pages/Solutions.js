"use client";

import React, { useState } from 'react';
import { ChevronRight, ArrowRight, CheckCircle, Globe, Shield, Cpu, Cloud, Zap, Users } from 'lucide-react';

const Solutions = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const solutions = [
    {
      icon: <Cloud className="w-8 h-8" />,
      category: 'cloud',
      title: "Cloud Infrastructure",
      description: "Enterprise-grade cloud solutions built for scale and security",
      features: ["Auto-scaling", "Load balancing", "24/7 monitoring"],
      gradient: "from-sky-400 to-blue-600"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      category: 'ai',
      title: "AI & Machine Learning",
      description: "Intelligent automation powered by cutting-edge AI",
      features: ["Predictive analytics", "Natural language processing", "Computer vision"],
      gradient: "from-purple-400 to-indigo-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      category: 'security',
      title: "Cybersecurity",
      description: "Advanced security solutions for modern threats",
      features: ["Threat detection", "Zero-trust architecture", "Compliance management"],
      gradient: "from-emerald-400 to-teal-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      category: 'digital',
      title: "Digital Transformation",
      description: "Complete digital modernization services",
      features: ["Process automation", "Legacy modernization", "Digital strategy"],
      gradient: "from-orange-400 to-red-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      category: 'consulting',
      title: "IT Consulting",
      description: "Expert guidance for your technology initiatives",
      features: ["Strategy development", "Technical architecture", "Implementation support"],
      gradient: "from-pink-400 to-rose-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      category: 'automation',
      title: "Process Automation",
      description: "Streamline operations with intelligent automation",
      features: ["Workflow automation", "RPA integration", "Business process optimization"],
      gradient: "from-amber-400 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-['Inter',sans-serif]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black py-24 sm:py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-20 bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Enterprise Solutions
            </h1>
            <p className="text-lg leading-8 text-gray-300 mb-8">
              Transform your business with our comprehensive suite of enterprise solutions. 
              Built for performance, scalability, and success.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:from-blue-500 hover:to-purple-500 transition-all">
                Get Started
              </button>
              <button className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {['all', 'cloud', 'ai', 'security', 'digital', 'consulting', 'automation'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions
            .filter(solution => activeCategory === 'all' || solution.category === activeCategory)
            .map((solution, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className={`p-8 bg-gradient-to-br ${solution.gradient}`}>
                  <div className="text-white mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                  <p className="text-white/80">{solution.description}</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 w-full py-3 px-4 bg-gray-50 rounded-xl font-medium text-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all group-hover:shadow-md flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Solutions;