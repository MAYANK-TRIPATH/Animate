'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ProcessFlow() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  const section1InView = useInView(section1Ref, { once: false, margin: "-100px" });
  const section2InView = useInView(section2Ref, { once: false, margin: "-100px" });
  const section3InView = useInView(section3Ref, { once: false, margin: "-100px" });
  const section4InView = useInView(section4Ref, { once: false, margin: "-100px" });
  const section5InView = useInView(section5Ref, { once: false, margin: "-100px" });

  return (
    <div className="relative p-4 sm:p-6 2xl:p-8 3xl:p-12 bg-gray-50">
      {/* Connection Lines - Hidden on mobile */}
      <svg className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none hidden lg:block">
        {/* Line 1: Consultation → Analysis */}
        <path d="M 505 200 C 800 200, 500 250, 660 300" stroke="#D1D5DB" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
        {/* Line 2: Analysis → Development */}
        <path d="M 960 500 C 500 590, 500 340, 240 520" stroke="#D1D5DB" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
        {/* Line 3: Development → Testing */}
        <path d="M 500 750 C 300 660, 500 900, 735 850" stroke="#D1D5DB" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
        {/* Line 4: Testing → Launch */}
        <path d="M 1100 1000 C 900 1320, 900 970, 570 1290" stroke="#D1D5DB" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="5" refY="2.5" orient="auto" markerUnits="strokeWidth">
            <polygon points="0 0, 5 2.5, 0 5" fill="#9CA3AF" />
          </marker>
        </defs>
      </svg>

      {/* Actual Process Steps (your existing content) */}
      <div className="relative z-10">

        {/* Section 1: Consultation - Left on desktop, centered on mobile */}
        <motion.div 
          ref={section1Ref}
          initial={{ opacity: 0, y: 150, scale: 0.8, rotateX: -15 }}
          animate={section1InView ? { 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            rotateX: 0 
          } : { 
            opacity: 0, 
            y: 150, 
            scale: 0.8, 
            rotateX: -15 
          }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          whileHover={{ 
            scale: 1.02, 
            transition: { duration: 0.3 } 
          }}
          className="w-full max-w-sm mx-auto lg:mx-0 lg:ml-28 2xl:ml-40 3xl:ml-52 lg:w-72 2xl:w-80 3xl:w-96 mb-8 lg:mb-12 2xl:mb-16 3xl:mb-20"
        >
          <motion.div 
            whileHover={{ 
              scale: 1.05, 
              y: -5, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={section1InView ? {
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            } : {
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
            }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 mb-4 p-3 bg-white rounded-lg border border-gray-200 shadow-sm w-fit cursor-pointer"
          >
            <motion.div 
              initial={{ rotate: -20, scale: 0.8 }}
              animate={section1InView ? { 
                rotate: 0, 
                scale: 1,
                backgroundColor: "#dbeafe"
              } : { 
                rotate: -20, 
                scale: 0.8,
                backgroundColor: "#bfdbfe"
              }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                rotate: 5, 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center"
            >
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <svg className="w-2 h-2 text-green-500 -ml-1 -mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </motion.div>
            <span className="text-gray-900 font-medium text-sm">Your Call is Booked</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={section1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-start gap-3 mb-3"
          >
            <motion.h1 
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              animate={section1InView ? { 
                opacity: 1, 
                x: 0, 
                scale: 1 
              } : { 
                opacity: 0, 
                x: -50, 
                scale: 0.9 
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl font-semibold text-gray-900 cursor-pointer"
            >
              Consultation
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={section1InView ? { 
                opacity: 1, 
                scale: 1, 
                rotate: 0 
              } : { 
                opacity: 0, 
                scale: 0, 
                rotate: -180 
              }}
              transition={{ 
                duration: 0.6, 
                delay: 0.5, 
                type: "spring", 
                stiffness: 300,
                damping: 10
              }}
              whileHover={{ 
                scale: 1.2, 
                rotate: 10,
                transition: { duration: 0.2 }
              }}
              className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded-full cursor-pointer"
            >
              01
            </motion.div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={section1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-600 mb-4 lg:-mb-10 lg:w-60 2xl:w-72 3xl:w-80 text-sm lg:ml-2 2xl:text-base 3xl:text-lg"
          >
            Discuss your business needs with our experts.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.6, y: 50, rotateY: -15 }}
            animate={section1InView ? { 
              opacity: 1, 
              scale: 1, 
              y: 0, 
              rotateY: 0 
            } : { 
              opacity: 0, 
              scale: 0.6, 
              y: 50, 
              rotateY: -15 
            }}
            transition={{ 
              duration: 1, 
              delay: 0.6, 
              type: "spring",
              stiffness: 80,
              damping: 12
            }}
            whileHover={{ 
              scale: 1.08, 
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            className="relative cursor-pointer"
          >
            <div className="flex justify-center lg:justify-start">
              <Image src="/Consult.webp" alt="Consultation" width={100} height={50} className="w-48 2xl:w-56 3xl:w-64 lg:ml-60 2xl:ml-72 3xl:ml-80 rounded-lg shadow-sm" />
            </div>
          </motion.div>
        </motion.div>

        {/* Section 2: Analysis - Right on desktop, centered on mobile */}
        <motion.div 
          ref={section2Ref}
          initial={{ opacity: 0, y: 150, scale: 0.8, rotateX: -15 }}
          animate={section2InView ? { 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            rotateX: 0 
          } : { 
            opacity: 0, 
            y: 150, 
            scale: 0.8, 
            rotateX: -15 
          }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          whileHover={{ 
            scale: 1.02, 
            transition: { duration: 0.3 } 
          }}
          className="w-full max-w-sm mx-auto lg:mx-0 lg:mr-72 2xl:mr-80 3xl:mr-96 lg:ml-auto lg:w-72 2xl:w-80 3xl:w-96 mb-8 lg:mb-12 2xl:mb-16 3xl:mb-20"
        >
          <div className="flex items-center gap-3 mb-4 p-3 bg-white rounded-lg border border-gray-200 shadow-sm w-fit">
            <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <svg className="w-2 h-2 text-green-500 -ml-1 -mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-900 font-medium text-sm">Analysis Complete</span>
          </div>

          <div className="flex items-start gap-3 mb-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl font-semibold text-gray-900">Analysis</h1>
            <div className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded-full">02</div>
          </div>

          <p className="text-gray-600 mb-4 lg:-mb-10 lg:w-60 2xl:w-72 3xl:w-80 text-sm lg:ml-2 2xl:text-base 3xl:text-lg">
            We analyze your requirements and create a detailed plan.
          </p>

          <div className="relative">
            <div className="flex justify-center lg:justify-start">
              <Image src="/Custom.webp" alt="Analysis" width={100} height={50} className="w-48 2xl:w-56 3xl:w-64 lg:ml-60 2xl:ml-72 3xl:ml-80 rounded-lg shadow-sm" />
            </div>
          </div>
        </motion.div>

        {/* Section 3: Development - Left on desktop, centered on mobile */}
        <motion.div 
          ref={section3Ref}
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={section3InView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.95 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full max-w-sm mx-auto lg:mx-0 lg:ml-28 2xl:ml-40 3xl:ml-52 lg:w-72 2xl:w-80 3xl:w-96 mb-8 lg:mb-12 2xl:mb-16 3xl:mb-20"
        >
          <div className="flex items-center gap-3 mb-4 p-3 bg-white rounded-lg border border-gray-200 shadow-sm w-fit">
            <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <svg className="w-2 h-2 text-green-500 -ml-1 -mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-900 font-medium text-sm">Development Started</span>
          </div>

          <div className="flex items-start gap-3 mb-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl font-semibold text-gray-900">Development</h1>
            <div className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded-full">03</div>
          </div>

          <p className="text-gray-600 mb-4 lg:-mb-10 lg:w-60 2xl:w-72 3xl:w-80 text-sm lg:ml-2 2xl:text-base 3xl:text-lg">
            Our team builds your solution with cutting-edge technology.
          </p>

          <div className="relative">
            <div className="flex justify-center lg:justify-start">
              <Image src="/Interface.webp" alt="Development" width={100} height={50} className="w-48 2xl:w-56 3xl:w-64 lg:ml-60 2xl:ml-72 3xl:ml-80 rounded-lg shadow-sm" />
            </div>
          </div>
        </motion.div>

        {/* Section 4: Testing - Right on desktop, centered on mobile */}
        <motion.div 
          ref={section4Ref}
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={section4InView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.95 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full max-w-sm mx-auto lg:mx-0 lg:mr-54 2xl:mr-64 3xl:mr-72 lg:ml-auto lg:w-72 2xl:w-80 3xl:w-96 mb-8 lg:mb-12 2xl:mb-16 3xl:mb-20"
        >
          <div className="flex items-center gap-3 mb-4 p-3 bg-white rounded-lg border border-gray-200 shadow-sm w-fit">
            <div className="w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <svg className="w-2 h-2 text-green-500 -ml-1 -mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-900 font-medium text-sm">Testing Complete</span>
          </div>

          <div className="flex items-start gap-3 mb-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl font-semibold text-gray-900">Testing</h1>
            <div className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded-full">04</div>
          </div>

          <p className="text-gray-600 mb-4 lg:-mb-10 lg:w-60 2xl:w-72 3xl:w-80 text-sm lg:ml-2 2xl:text-base 3xl:text-lg">
            Thorough testing ensures quality and performance.
          </p>

          <div className="relative">
            <div className="flex justify-center lg:justify-start">
              <Image src="/Integration.webp" alt="Testing" width={100} height={50} className="w-48 2xl:w-56 3xl:w-64 lg:ml-60 2xl:ml-72 3xl:ml-80 rounded-lg shadow-sm" />
            </div>
          </div>
        </motion.div>

        {/* Section 5: Launch - Left on desktop, centered on mobile */}
        <motion.div 
          ref={section5Ref}
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={section5InView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.95 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full max-w-sm mx-auto lg:mx-0 lg:ml-28 2xl:ml-40 3xl:ml-52 lg:w-72 2xl:w-80 3xl:w-96"
        >
          <div className="flex items-center gap-3 mb-4 p-3 bg-white rounded-lg border border-gray-200 shadow-sm w-fit">
            <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <svg className="w-2 h-2 text-green-500 -ml-1 -mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-900 font-medium text-sm">Ready to Launch</span>
          </div>

          <div className="flex items-start gap-3 mb-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl font-semibold text-gray-900">Launch</h1>
            <div className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded-full">05</div>
          </div>

          <p className="text-gray-600 mb-4 lg:-mb-10 lg:w-60 2xl:w-72 3xl:w-80 text-sm lg:ml-2 2xl:text-base 3xl:text-lg">
            Your solution goes live with full support and maintenance.
          </p>

          <div className="relative">
            <div className="flex justify-center lg:justify-start">
              <Image src="/Empowerment.webp" alt="Launch" width={100} height={50} className="w-48 2xl:w-56 3xl:w-64 lg:ml-60 2xl:ml-72 3xl:ml-80 rounded-lg shadow-sm" />
            </div>
          </div>
        </motion.div>

        </div>
      </div>
    );
  }
