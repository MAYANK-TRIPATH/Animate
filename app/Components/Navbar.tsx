'use client';

import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
      if (companyRef.current && !companyRef.current.contains(event.target as Node)) {
        setCompanyOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Background blur overlay */}
      {(resourcesOpen || companyOpen || mobileMenuOpen) && (
        <div className="fixed inset-0 backdrop-blur-sm z-30" />
      )}
      
      <nav className="w-full bg-[rgb(246,246,244)] border-b border-gray-100 px-4 sm:px-6 py-3 top-0 z-40 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center ml-4 sm:ml-8 lg:ml-[120px] lg:mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 148 46" className="h-8 w-auto lg:h-10">
              <path fill="#1B1F1C" d="M24.245 31.65h-3.17V8.05h3.17v9.676c.303-.81 1.753-3.27 5.563-3.27 3.81 0 5.596 2.528 5.596 6.237v10.956h-3.17V21.434c0-3-1.381-4.214-3.54-4.214-4.382 0-4.45 4.855-4.45 7.215v7.215Zm66.39 0h-3.169V8.05h3.17v9.676c.303-.81 1.752-3.27 5.562-3.27 3.81 0 5.596 2.528 5.596 6.237v10.956h-3.169V21.434c0-3-1.382-4.214-3.54-4.214-4.382 0-4.45 4.855-4.45 7.215v7.215Zm23.702 0h-4.113c-2.765 0-4.214-1.349-4.214-4.113v-9.98h-3.81v-2.63h3.81V9.703h3.169v5.226h4.517v2.63h-4.517v9.709c0 1.146.505 1.652 1.652 1.652h3.506v2.73Z"></path>
              <path fill="#1B1F1C" fillRule="evenodd" d="M73.044 38.224h7.788c2.899 0 5.326-1.55 5.326-4.686 0-2.798-2.124-4.686-5.394-4.686h-7.248c-1.146 0-1.484-.54-1.484-1.079 0-.607.574-1.214 1.484-1.585.944.506 2.023.641 3.169.641 3.742 0 6.338-2.427 6.641-6.203l.068-.81c.135-1.921.674-2.258 2.09-2.258h1.382v-2.63h-1.719c-1.72 0-2.461 1.045-2.765 2.495-.775-1.315-2.63-2.967-5.73-2.967-3.912 0-6.743 2.697-6.743 6.237 0 1.99.876 3.506 1.854 4.383-1.147.742-2.495 1.888-2.495 3.54 0 1.348.54 2.157 1.483 2.73-.977.607-2.157 1.821-2.157 3.507 0 1.955 1.18 3.371 4.45 3.371Zm7.369-17.565c0 2.081-1.537 3.675-3.728 3.675-2.192 0-3.675-1.628-3.675-3.675 0-2.046 1.483-3.708 3.675-3.708 2.191 0 3.728 1.628 3.728 3.708Zm.014 14.868H73.92c-1.618 0-2.528-.404-2.528-1.753 0-1.045.674-1.787 1.214-2.124h7.821c1.349 0 2.529.337 2.529 1.922 0 1.584-1.18 1.955-2.529 1.955Z" clipRule="evenodd"></path>
              <path fill="#1B1F1C" d="M59.33 32.122c-3.81 0-5.496-2.528-5.496-6.237V14.928h3.17v10.215c0 3 1.348 4.215 3.438 4.215 4.18 0 4.383-4.552 4.383-7.148v-7.282h3.169V31.65h-3.102v-2.865c-.54.977-2.124 3.337-5.562 3.337Z"></path>
              <path fill="#1B1F1C" fillRule="evenodd" d="M36.686 23.323c0 5.023 3.439 8.799 7.956 8.799 4.484 0 7.923-3.709 7.923-8.8 0-5.09-3.304-8.866-7.923-8.866-4.618 0-7.956 3.776-7.956 8.867Zm12.575.034c0 4.079-1.888 6.034-4.619 6.034-2.764 0-4.652-1.955-4.652-6.034 0-4.113 1.888-6.17 4.652-6.17 2.731 0 4.62 2.056 4.62 6.17Z" clipRule="evenodd"></path>
              <path fill="#1B1F1C" d="M16.074 31.65h4.113v-2.731H16.68c-1.147 0-1.652-.506-1.652-1.652v-9.71h4.517v-2.63H15.03V9.703h-3.17v5.226H8.05v2.63h3.81v9.979c0 2.764 1.45 4.113 4.214 4.113Zm122.354-.533c-.484 0-.771-.323-.771-.859 0-.48.334-.803.787-.803.343 0 .583.181.673.473l-.267.066c-.071-.197-.205-.307-.422-.307-.279 0-.476.233-.476.599 0 .362.185.579.472.579.217 0 .39-.146.445-.367l.272.083c-.083.327-.354.536-.713.536Z"></path>
              <path fill="#1B1F1C" fillRule="evenodd" d="M138.42 31.806a1.516 1.516 0 0 1-1.535-1.516c0-.839.673-1.524 1.535-1.524a1.519 1.519 0 1 1 0 3.04Zm0-.272c.709 0 1.241-.563 1.241-1.244 0-.685-.532-1.248-1.241-1.248-.708 0-1.244.563-1.244 1.248 0 .681.536 1.244 1.244 1.244Z" clipRule="evenodd"></path>
              <path fill="#1B1F1C" d="M115.377 27.544c0 2.78 1.813 4.428 3.995 4.428 1.845 0 3.39-1.668 3.746-3.76l2.057-10.544c.061-.359.38-.625.714-.625.44 0 .653.351.728.575l4.545 13.51-.959 2.727c-.472 1.281-1.147 1.55-2.293 1.55h-3.371v2.833h3.472c2.933 0 4.181-1.045 5.26-4.214l6.602-19.121h-3.419l-2.812 8.703a230.54 230.54 0 0 0-1.009 3.009l-3.247-9.672c-.629-2.076-2.104-2.837-3.588-2.837s-2.887 1.092-3.245 2.937c0 0-1.907 10.146-2.034 10.743-.126.597-.308 1.27-.954 1.27-.603 0-1.019-.334-1.019-1.065V8.051h-3.169v19.493Z"></path>
            </svg>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8 lg:pt-6 mr-8 lg:mr-24">
            <a href="#" className="text-gray-900 font-semibold text-[10px] transition-colors duration-200">
              Platform
            </a>
            <a href="#" className="text-gray-900 font-semibold text-[10px] transition-colors duration-200">
              Agent Accelerator
            </a>
            
            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesRef}>
              <button
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
                className="flex items-center text-gray-900 font-semibold text-[10px] transition-colors duration-200"
              >
                Resources
                <svg 
                  className={`ml-1 w-3 h-3 transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {resourcesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                  onMouseEnter={() => setResourcesOpen(true)}
                  onMouseLeave={() => setResourcesOpen(false)}
                  style={{
                    animation: 'slideDown 0.2s ease-out'
                  }}
                >
                  <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                    <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Documentation
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                    <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Tutorials
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                    <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    API Reference
                  </a>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative" ref={companyRef}>
              <button
                onMouseEnter={() => setCompanyOpen(true)}
                onMouseLeave={() => setCompanyOpen(false)}
                className="flex items-center text-gray-900 font-semibold text-[10px] transition-colors duration-200"
              >
                Company
                <svg 
                  className={`ml-1 w-3 h-3 transition-transform duration-200 ${companyOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {companyOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-32 h-24 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                  onMouseEnter={() => setCompanyOpen(true)}
                  onMouseLeave={() => setCompanyOpen(false)}
                  style={{
                    animation: 'slideDown 0.2s ease-out'
                  }}
                >
              
                  <a href="#" className="flex items-center px-4 py-2 text-gray-700 text-xs font-semibold hover:bg-gray-100 hover:w-24 rounded-lg transition-colors">
                    <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                    Careers
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-gray-700 text-xs font-semibold hover:bg-gray-100 hover:w-24 rounded-lg transition-colors">
                    <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Contact
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-900 font-semibold text-[10px] transition-colors duration-200">
              Docs
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Call to Action Buttons */}
          <div className="hidden sm:flex items-center space-x-2 lg:space-x-4 lg:mr-28 lg:pt-6">
            <button className="px-3 py-2 lg:px-4 lg:py-3 text-gray-900 font-semibold text-xs lg:text-sm rounded-lg transition-all duration-200 bg-white">
              Sign In
            </button>
            <button className="px-3 py-2 lg:px-4 lg:py-3 bg-gradient-to-r from-lime-400 to-lime-300 text-gray-900 font-semibold text-xs lg:text-sm rounded-lg flex items-center shadow-sm">
              <span className="hidden sm:inline">Book a Demo</span>
              <span className="sm:hidden">Demo</span>
              <svg className="ml-1 lg:ml-2 w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
            <div className="px-4 py-6 space-y-4">
              <a href="#" className="block text-gray-700 hover:text-gray-900 font-semibold text-sm py-2">Platform</a>
              <a href="#" className="block text-gray-700 hover:text-gray-900 font-semibold text-sm py-2">Agent Accelerator</a>
              <a href="#" className="block text-gray-700 hover:text-gray-900 font-semibold text-sm py-2">Resources</a>
              <a href="#" className="block text-gray-700 hover:text-gray-900 font-semibold text-sm py-2">Company</a>
              <a href="#" className="block text-gray-700 hover:text-gray-900 font-semibold text-sm py-2">Docs</a>
              
              <div className="pt-4 border-t border-gray-200 space-y-3 ">
                <button className="w-full px-4 py-2 text-gray-900 font-semibold text-sm rounded-lg bg-gray-100">
                  Sign In
                </button>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-lime-400 to-lime-300 text-gray-900 font-semibold text-sm rounded-lg flex items-center justify-center">
                  Book a Demo
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}