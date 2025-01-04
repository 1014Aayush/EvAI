"use client";

import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left Section - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 py-10">
        <div className="max-w-md w-full mx-auto">
          {/* Back Button */}
          <a
            href="/"
            className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-6 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </a>

          {/* Logo */}
          <a
            href="/"
            className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-4"
          >
            EverestAI
          </a>

          <h1 className="text-3xl font-semibold text-gray-800 mb-3">
            Welcome back
          </h1>
          <p className="text-gray-600 mb-6">Please enter your details to sign in</p>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="email"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Forgot password?
              </a>
            </div>

            {/* Sign-In Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium text-sm hover:shadow-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm bg-white px-4">
                <span className="text-gray-500">Or continue with</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-3 gap-4">
              {["Google", "GitHub", "Twitter"].map((provider) => (
                <button
                  key={provider}
                  type="button"
                  className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                >
                  {provider}
                </button>
              ))}
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Sign up for free
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Right Section - Image/Gradient */}
      <div className="hidden lg:block lg:w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] mix-blend-overlay opacity-10"></div>
        <div className="absolute inset-0 flex items-center justify-center px-12">
          <div className="text-white max-w-lg">
            <h2 className="text-4xl font-bold mb-4">
              Transform Your Business with AI
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Join thousands of companies using EverestAI to automate workflows, 
              enhance productivity, and drive innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
