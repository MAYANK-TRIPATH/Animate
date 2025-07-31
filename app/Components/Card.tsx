interface CardProps {
    icon: React.ReactNode;
    heading: string;
    description: string;
    iconBgColor?: string;
    iconColor?: string;
}

export default function Card({ icon, heading, description, iconBgColor = "bg-green-100", iconColor = "text-green-600" }: CardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border border-gray-200 w-full sm:w-72 lg:w-80 lg:h-80">
            
            <div className="flex justify-center mb-4 sm:mb-5 lg:mb-6">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${iconBgColor} rounded-full flex items-center justify-center`}>
                    <div className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${iconColor}`}>
                        {icon}
                    </div>
                </div>
            </div>
            
            
            <h3 className="text-base sm:text-lg lg:text-lg font-semibold text-black mb-3 sm:mb-4 lg:mb-4 lg:w-72 text-center">
                {heading}
            </h3>
            
            
            <p className="text-gray-500 text-center text-xs leading-relaxed">
                {description}
            </p>
        </div>
    )
}