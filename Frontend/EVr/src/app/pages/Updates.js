"use client";
import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const updates = [
  {
    id: 1,
    title: "New Feature Release",
    description: "Introducing our latest platform features designed to enhance your productivity and workflow.",
    date: "March 15, 2025",
    readTime: "5 min read",
    category: "Product",
    gradient: "from-violet-500 to-purple-500"
  },
  {
    id: 2,
    title: "Platform Performance Update",
    description: "We've optimized our infrastructure to deliver even faster response times and better reliability.",
    date: "March 12, 2025",
    readTime: "3 min read",
    category: "Technical",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "Community Milestone",
    description: "Celebrating our growing community and the amazing projects being built on our platform.",
    date: "March 10, 2025",
    readTime: "4 min read",
    category: "Community",
    gradient: "from-emerald-500 to-teal-500"
  }
];

const LatestUpdates = () => (
  <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Latest Updates
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Stay informed with our latest news, feature releases, and community highlights
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {updates.map((update) => (
          <div key={update.id} className="group cursor-pointer">
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
              <div className={`w-full h-48 bg-gradient-to-br ${update.gradient} relative`}>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-medium">
                  {update.category}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {update.date}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    {update.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                  {update.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {update.description}
                </p>
                
                <div className="flex items-center text-purple-600 font-medium group-hover:text-blue-600 transition-colors">
                  Read More
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default LatestUpdates;