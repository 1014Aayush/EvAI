"use client";
import React, { useState } from 'react';

const Footer = () => (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-6">
        <div>
          <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">EverestAI</h4>
          <p className="text-gray-400">Brief company description and mission statement.</p>
        </div>
        {['Products', 'Solutions', 'Contact'].map((section) => (
          <div key={section}>
            <h4 className="text-lg font-semibold mb-6">{section}</h4>
            <ul className="space-y-4 text-gray-400">
              {[1, 2, 3].map((item) => (
                <li key={item} className="hover:text-white transition-colors">
                  <a href="#">{section} {item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container mx-auto mt-12 pt-8 border-t border-gray-800">
        <p className="text-center text-gray-500">© 2024 YourBrand. All rights reserved.</p>
      </div>
    </footer>
  );

export default Footer;