interface CardProps {
    icon: React.ReactNode;
    heading: string;
    description: string;
    iconBgColor?: string;
    iconColor?: string;
}

export default function Card({ icon, heading, description, iconBgColor = "bg-green-100", iconColor = "text-green-600" }: CardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 2xl:p-10 3xl:p-12 border border-gray-200 w-full sm:w-72 lg:w-80 2xl:w-96 3xl:w-[420px] lg:h-80 2xl:h-96 3xl:h-[420px]">
            
            <div className="flex justify-center mb-4 sm:mb-5 lg:mb-6 2xl:mb-8 3xl:mb-10">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 3xl:w-24 3xl:h-24 ${iconBgColor} rounded-full flex items-center justify-center`}>
                    <div className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 ${iconColor}`}>
                        {icon}
                    </div>
                </div>
            </div>
            
            
            <h3 className="text-base sm:text-lg lg:text-lg 2xl:text-xl 3xl:text-2xl font-semibold text-black mb-3 sm:mb-4 lg:mb-4 2xl:mb-6 3xl:mb-8 lg:w-72 2xl:w-80 3xl:w-96 text-center">
                {heading}
            </h3>
            
            
            <p className="text-gray-500 text-center text-xs 2xl:text-sm 3xl:text-base leading-relaxed">
                {description}
            </p>
        </div>
    )
}