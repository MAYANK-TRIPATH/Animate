'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Frame() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const componentHeight = rect.height;
        
        // Start animation when component is 20% from top of viewport
        const triggerPoint = windowHeight * 0.2;
        const animationStart = rect.top <= triggerPoint;
        
        if (animationStart) {
          // Calculate progress based on how much component has moved past trigger point
          const distanceFromTrigger = triggerPoint - rect.top;
          const maxDistance = componentHeight + triggerPoint;
          const progress = Math.min(distanceFromTrigger / maxDistance, 1);
          setScrollProgress(progress);
        } else {
          setScrollProgress(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate scale and border radius based on scroll progress
  const scale = 1 - (scrollProgress * 0.12); // Reduced scale effect for subtlety
  const borderRadius = scrollProgress * 24; // Reduced border radius for smoother effect

  return (
    <div 
      ref={componentRef}
      className="bg-[rgb(246,246,244)] transition-all duration-300 ease-out overflow-hidden rounded-2xl"
      style={{
        transform: `scale(${scale})`,
        borderRadius: `${borderRadius}px`,
        transformOrigin: 'center center',
        boxShadow: scrollProgress > 0 ? `0 ${8 + scrollProgress * 12}px ${20 + scrollProgress * 20}px rgba(0,0,0,0.08)` : 'none',
        opacity: 1 - (scrollProgress * 0.1) // Slight fade effect
      }}
    >
      <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          
          {/* Image Section - Left Side */}
          <div className="relative flex flex-col items-start lg:ml-24 order-2 lg:order-1">
            {/* Main container with proper sizing and styling */}
            <div className="bg-white rounded-2xl shadow-xl p-3 sm:p-4 lg:p-5 border-gray-300 border-1 w-full sm:w-80 lg:w-90 h-80 sm:h-100 lg:h-120 z-10">
              <div className="bg-gray-50 rounded-xl h-full w-full">
                <Image 
                  src="/CallImage.webp" 
                  alt="Frame Agent"
                  width={400}
                  height={300}
                  className="object-cover rounded-lg w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Sanjay - Top left */}
            <div className="z-10">
            <div className="absolute -top-4 sm:-top-5 lg:-top-6 -left-4 sm:-left-5 lg:-left-6 bg-white rounded-2xl shadow-md p-3 sm:p-4 lg:p-5 px-4 sm:px-6 lg:px-8 flex items-center space-x-2 border-gray-300 border-1">
              <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-pink-200 rounded-full flex items-center justify-center">
                <span className="text-xs sm:text-sm font-semibold text-pink-600">L</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs sm:text-sm">🇦🇺</span>
                <span className="text-sm sm:text-md text-black font-medium">Sanjay</span>
              </div>
            </div>
            </div>


            <div className="z-10">
            <div className="absolute -top-4 sm:-top-5 lg:top-[350px] -left-4 sm:-left-5 lg:left-72 ">
              <Image src="/Interface.webp" alt="Sanjay" width={200} height={200} />
            </div>
            </div>

          </div>

          

          {/* Text Section - Right Side */}
          <div className="lg:mr-28 lg:w-[620px] z-10 order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white px-3 sm:px-4 py-2 rounded-xl">
              <span className="text-gray-400 font-medium text-xs">Focus on what Matters</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[72px] font-semibold text-gray-900 leading-tight mt-4 sm:mt-6 lg:mt-0">
            Ready to Accelerate Your AI Agent?
            </h1>

            <p className="text-gray-500 text-sm sm:text-md w-full sm:w-80 lg:w-96 mt-4 sm:mt-6">Join the many businesses already benefiting from our Agent Accelerator Program</p>

            <div className="relative max-w-sm mt-4 sm:mt-6 mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="What is your work email?"
                className="w-full px-4 py-3 pr-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent text-sm"
              />
              <button className="absolute right-1 top-1 px-4 py-2 bg-gradient-to-r from-lime-400 to-lime-500 text-white font-semibold rounded-md hover:from-lime-500 hover:to-lime-600 transition-all duration-200 flex items-center justify-center whitespace-nowrap text-sm">
                Get Started ▸
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <button className="w-8 h-8 sm:w-10 sm:h-10 bg-lime-400 rounded-full shadow-lg hover:bg-lime-500 transition-colors duration-200 flex items-center justify-center">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}
