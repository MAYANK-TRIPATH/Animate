"use client";
import { useEffect, useState } from "react";

export default function Carosel() {
    const [position, setPosition] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition((prev) => {
                if (prev <= -500) {
                    return 0;
                }
                return prev - 0.1;
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="overflow-hidden relative h-48 w-full">
            <div 
                className="flex items-center justify-center space-x-16 absolute top-0"
                style={{ 
                    transform: `translateX(${position}%)`,
                    transition: 'transform 0.1s ease-out'
                }}
            >
                {/* First set */}
                <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 7l5 5 5-5z"/>
                </svg>
                <h1 className="text-[160px] font-medium text-gray-600 opacity-10 whitespace-nowrap">How it Works</h1>
                <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 7l5 5 5-5z"/>
                </svg>
                
                {/* Second set */}
                <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 7l5 5 5-5z"/>
                </svg>
                <h1 className="text-[160px] font-medium text-gray-600 opacity-10 whitespace-nowrap">How it Works</h1>
                <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 7l5 5 5-5z"/>
                </svg>
                
                {/* Third set */}
                <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 7l5 5 5-5z"/>
                </svg>
                <h1 className="text-[160px] font-medium text-gray-600 opacity-10 whitespace-nowrap">How it Works</h1>
                <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 7l5 5 5-5z"/>
                </svg>
                
                {/* Fourth set */}
                <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 7l5 5 5-5z"/>
                </svg>
                <h1 className="text-[160px] font-medium text-gray-600 opacity-10 whitespace-nowrap">How it Works</h1>
                <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 7l5 5 5-5z"/>
                </svg>
            </div>
        </div>
    )
}