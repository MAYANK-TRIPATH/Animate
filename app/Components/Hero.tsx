import Image from 'next/image';

export default function Hero() {
  return (
    <div className="bg-[rgb(246,246,244)]">
      <div className="max-w-12xl mx-auto px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center ">
          
          <div className="ml-28 lg:w-[620px] z-10">
            <div className="inline-flex items-center space-x-2 bg-white px-3 py-2 rounded-2xl">
              <svg className="w-3.5 h-3.5 text-lime-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-400 font-medium text-xs">Agent Accelerator</span>
            </div>

            <h1 className="text-4xl lg:text-[72px] font-semibold text-gray-900 leading-tight">
              From Setup to Success, without Lifting a Finger.
            </h1>

            <p className="text-gray-500 text-lg">Get expert, full-service setup and customization of <br></br> your AI agent, ensuring premium quality without the <br></br> premium price.</p>

            <div className="relative max-w-sm mt-4">
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

          <div className="relative flex flex-col items-end-safe mr-24">
            {/* Main container with proper sizing and styling */}
            <div className="bg-white rounded-2xl shadow-xl p-5 border-gray-300 border-1 w-90 h-120 z-10">
              <div className="bg-gray-50 rounded-xl h-full w-full">
                <Image 
                  src="/HeroAgent.webp" 
                  alt="Hero Agent"
                  width={400}
                  height={300}
                  className="object-cover rounded-lg w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Lisa - Top left */}
            <div className="z-10">
            <div className="absolute -top-6 left-14 bg-white rounded-2xl shadow-md p-5 px-6 flex items-center space-x-2 border-gray-300 border-1">
              <div className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-pink-600">L</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm">🇦🇺</span>
                <span className="text-md text-black font-medium">Lisa</span>
              </div>
            </div>

            {/* James - Top right */}
            <div className="absolute top-16 -right-6 bg-white rounded-2xl shadow-md p-5 px-6 flex items-center space-x-2 border-gray-300 border-1">
              <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-blue-600">J</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm">🇺🇸</span>
                <span className="text-md text-black font-medium">James</span>
              </div>
            </div>

            {/* Maya - Bottom left */}
            <div className="absolute bottom-18 left-12 bg-white rounded-2xl shadow-md p-5 px-6 flex items-center space-x-2 border-gray-300 border-1">
              <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-green-600">M</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm">🇩🇪</span>
                <span className="text-md text-black font-medium">Maya</span>
              </div>
            </div>

            {/* Stacey - Bottom right */}
            <div className="absolute -bottom-3 -right-3 bg-white rounded-2xl shadow-md p-5 px-6 flex items-center space-x-2 border-gray-300 border-1">
              <div className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-yellow-600">S</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm">🇸🇪</span>
                <span className="text-md text-black font-medium">Stacey</span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-10 h-10 bg-lime-400 rounded-full shadow-lg hover:bg-lime-500 transition-colors duration-200 flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}