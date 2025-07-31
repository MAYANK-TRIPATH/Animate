import Image from 'next/image';

export default function Hero() {
  return (
    <div className="bg-[rgb(246,246,244)]">
      <div className="max-w-7xl 2xl:max-w-8xl 3xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 3xl:px-16 py-6 sm:py-8 lg:py-10 2xl:py-16 3xl:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 2xl:gap-32 3xl:gap-40 items-center">
          
          <div className="ml-4 sm:ml-8 lg:ml-28 2xl:ml-40 3xl:ml-52 lg:w-[620px] 2xl:w-[720px] 3xl:w-[820px] z-10 order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-white px-3 py-2 rounded-2xl">
              <svg className="w-3.5 h-3.5 text-lime-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-400 font-medium text-xs">Agent Accelerator</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[72px] 2xl:text-[88px] 3xl:text-[96px] font-semibold text-gray-900 leading-tight mt-4 sm:mt-6 2xl:mt-8 3xl:mt-10">
              From Setup to Success, without Lifting a Finger.
            </h1>

            <p className="text-gray-500 text-sm sm:text-base lg:text-lg 2xl:text-xl 3xl:text-2xl mt-4 sm:mt-6 2xl:mt-8 3xl:mt-10">
              Get expert, full-service setup and customization of your AI agent, ensuring premium quality without the premium price.
            </p>

            <div className="relative max-w-sm 2xl:max-w-md 3xl:max-w-lg mt-4 sm:mt-6 2xl:mt-8 3xl:mt-10">
              <input
                type="email"
                placeholder="What is your work email?"
                className="w-full px-4 py-3 2xl:py-4 3xl:py-5 pr-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent text-sm 2xl:text-base 3xl:text-lg"
              />
              <button className="absolute right-1 top-1 px-4 py-2 2xl:py-3 3xl:py-4 bg-gradient-to-r from-lime-400 to-lime-500 text-white font-semibold rounded-md hover:from-lime-500 hover:to-lime-600 transition-all duration-200 flex items-center justify-center whitespace-nowrap text-sm 2xl:text-base 3xl:text-lg">
                Get Started ▸
              </button>
            </div>
          </div>

          <div className="relative flex flex-col items-center lg:items-end-safe mr-4 sm:mr-8 lg:mr-24 2xl:mr-32 3xl:mr-40 order-1 lg:order-2">
            {/* Main container with proper sizing and styling */}
            <div className="bg-white rounded-2xl shadow-xl p-3 sm:p-4 lg:p-5 2xl:p-6 3xl:p-8 border-gray-300 border-1 w-full max-w-sm sm:max-w-md lg:w-90 2xl:w-96 3xl:w-[420px] lg:h-120 2xl:h-140 3xl:h-160 z-10">
              <div className="bg-gray-50 rounded-xl h-48 sm:h-64 lg:h-full w-full">
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
            <div className="absolute -top-3 sm:-top-4 lg:-top-6 2xl:-top-8 3xl:-top-10 left-8 sm:left-10 lg:left-14 2xl:left-16 3xl:left-20 bg-white rounded-2xl shadow-md p-3 sm:p-4 lg:p-5 2xl:p-6 3xl:p-7 px-4 sm:px-5 lg:px-6 2xl:px-7 3xl:px-8 flex items-center space-x-2 border-gray-300 border-1">
              <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 bg-pink-200 rounded-full flex items-center justify-center">
                <span className="text-xs sm:text-sm 2xl:text-base 3xl:text-lg font-semibold text-pink-600">L</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs sm:text-sm 2xl:text-base 3xl:text-lg">🇦🇺</span>
                <span className="text-sm sm:text-base lg:text-md 2xl:text-lg 3xl:text-xl text-black font-medium">Lisa</span>
              </div>
            </div>

            {/* James - Top right */}
            <div className="absolute top-8 sm:top-12 lg:top-16 2xl:top-20 3xl:top-24 -right-3 sm:-right-4 lg:-right-6 2xl:-right-8 3xl:-right-10 bg-white rounded-2xl shadow-md p-3 sm:p-4 lg:p-5 2xl:p-6 3xl:p-7 px-4 sm:px-5 lg:px-6 2xl:px-7 3xl:px-8 flex items-center space-x-2 border-gray-300 border-1">
              <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 bg-blue-200 rounded-full flex items-center justify-center">
                <span className="text-xs sm:text-sm 2xl:text-base 3xl:text-lg font-semibold text-blue-600">J</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs sm:text-sm 2xl:text-base 3xl:text-lg">🇺🇸</span>
                <span className="text-sm sm:text-base lg:text-md 2xl:text-lg 3xl:text-xl text-black font-medium">James</span>
              </div>
            </div>

            {/* Maya - Bottom left */}
            <div className="absolute bottom-12 sm:bottom-14 lg:bottom-18 2xl:bottom-24 3xl:bottom-28 left-6 sm:left-8 lg:left-12 2xl:left-16 3xl:left-20 bg-white rounded-2xl shadow-md p-3 sm:p-4 lg:p-5 2xl:p-6 3xl:p-7 px-4 sm:px-5 lg:px-6 2xl:px-7 3xl:px-8 flex items-center space-x-2 border-gray-300 border-1">
              <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 bg-green-200 rounded-full flex items-center justify-center">
                <span className="text-xs sm:text-sm 2xl:text-base 3xl:text-lg font-semibold text-green-600">M</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs sm:text-sm 2xl:text-base 3xl:text-lg">🇩🇪</span>
                <span className="text-sm sm:text-base lg:text-md 2xl:text-lg 3xl:text-xl text-black font-medium">Maya</span>
              </div>
            </div>

            {/* Stacey - Bottom right */}
            <div className="absolute -bottom-2 sm:-bottom-2 lg:-bottom-3 2xl:-bottom-4 3xl:-bottom-5 -right-2 sm:-right-2 lg:-right-3 2xl:-right-4 3xl:-right-5 bg-white rounded-2xl shadow-md p-3 sm:p-4 lg:p-5 2xl:p-6 3xl:p-7 px-4 sm:px-5 lg:px-6 2xl:px-7 3xl:px-8 flex items-center space-x-2 border-gray-300 border-1">
              <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 bg-yellow-200 rounded-full flex items-center justify-center">
                <span className="text-xs sm:text-sm 2xl:text-base 3xl:text-lg font-semibold text-yellow-600">S</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs sm:text-sm 2xl:text-base 3xl:text-lg">🇸🇪</span>
                <span className="text-sm sm:text-base lg:text-md 2xl:text-lg 3xl:text-xl text-black font-medium">Stacey</span>
              </div>
            </div>
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