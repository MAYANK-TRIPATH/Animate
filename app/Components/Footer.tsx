export default function Footer() {
    return (
        <footer className="bg-gray-50 py-12 px-8">
            {/* Main footer content */}
            <div className="max-w-7xl mx-auto">
                {/* Top section with company info and navigation */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Company Information */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-900">thoughtly</h3>
                        <div className="text-sm text-gray-600 space-y-1">
                            <p>228 Park Ave S PMB</p>
                            <p>32943, New York, NY</p>
                            <p>10003-1502</p>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-gray-900">Product</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Platform</a></li>
                            <li><a href="#" className="hover:text-gray-900">Agent Accelerator</a></li>
                            <li><a href="#" className="hover:text-gray-900">Industries</a></li>
                            <li><a href="#" className="hover:text-gray-900">Platform Status</a></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-gray-900">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Community</a></li>
                            <li><a href="#" className="hover:text-gray-900">Media Inquiries</a></li>
                            <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                            <li><a href="#" className="hover:text-gray-900">Resources</a></li>
                            <li><a href="#" className="hover:text-gray-900">Refer a Friend</a></li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-gray-900">Support</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
                            <li><a href="#" className="hover:text-gray-900">API Docs</a></li>
                            <li><a href="#" className="hover:text-gray-900">Partners</a></li>
                            <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
                            <li><a href="#" className="hover:text-gray-900">Refund Policy</a></li>
                            <li><a href="#" className="hover:text-gray-900">Cancellation Policy</a></li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-200 mb-8" />

                {/* Bottom section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
                    {/* Left side - Social media and certifications */}
                    <div className="flex flex-col space-y-6">
                        {/* Social media links */}
                        <div className="flex space-x-6">
                            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Instagram</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">LinkedIn</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">X</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Join the Community</a>
                        </div>

                        {/* Certifications and copyright */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                            {/* Certification badges */}
                            <div className="flex space-x-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 bg-black border-2 border-yellow-400 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs font-bold">HIPAA</span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">Secured by Delve</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 bg-black border-2 border-yellow-400 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs font-bold">SOC 2</span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">Secured by Delve</p>
                                </div>
                            </div>
                            
                            {/* Copyright */}
                            <p className="text-sm text-gray-600">Copyright © 2025 Thoughtly, Inc. All rights reserved.</p>
                        </div>
                    </div>

                    {/* Right side - Email signup and legal links */}
                    <div className="flex flex-col items-end space-y-6">
                        {/* Email signup */}
                        <div className="flex items-center space-x-2">
                            <input 
                                type="email" 
                                placeholder="What is your work email?" 
                                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors flex items-center space-x-1">
                                <span>Get Started</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Legal links and logo */}
                        <div className="flex items-center space-x-6">
                            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a>
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">M</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}