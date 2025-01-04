"use client";

import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();

  const navItems = [
    {
      title: 'Products',
      dropdown: [
        { name: 'Cloud Solutions', description: 'Enterprise-grade cloud infrastructure' },
        { name: 'AI Platform', description: 'Intelligent automation tools' },
        { name: 'Security Suite', description: 'Advanced security measures' }
      ]
    },
    {
      title: 'Solutions',
      dropdown: [
        { name: 'Enterprise', description: 'For large organizations' },
        { name: 'Startups', description: 'For growing companies' },
        { name: 'Industries', description: 'Sector-specific solutions' }
      ]
    },
    {
      title: 'Company',
      dropdown: [
        { name: 'About Us', description: 'Our story and values' },
        { name: 'Careers', description: 'Join our team' },
        { name: 'Contact', description: 'Get in touch' }
      ]
    }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text hover:opacity-90 transition-opacity">
              EverestAI
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  <span>{item.title}</span>
                  <ChevronDown size={16} className={`transform transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === item.title && (
                  <div className="absolute left-0 w-64 mt-2 bg-white border border-gray-100 rounded-lg shadow-lg py-2">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href="#"
                        className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="font-medium text-gray-800">{dropdownItem.name}</div>
                        <div className="text-sm text-gray-500">{dropdownItem.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button 
              onClick={() => router.push('/login')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:opacity-90 transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          {navItems.map((item) => (
            <div key={item.title}>
              <button
                onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                className="flex items-center justify-between w-full px-4 py-4 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium">{item.title}</span>
                <ChevronDown 
                  size={16} 
                  className={`transform transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`} 
                />
              </button>

              {activeDropdown === item.title && (
                <div className="bg-gray-50 px-4 py-2">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.name}
                      href="#"
                      className="block py-3"
                    >
                      <div className="font-medium text-gray-800">{dropdownItem.name}</div>
                      <div className="text-sm text-gray-500">{dropdownItem.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="p-4">
            <button 
              onClick={() => router.push('/login')}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:opacity-90 transition-all"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;