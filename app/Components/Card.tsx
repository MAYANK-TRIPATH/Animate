interface CardProps {
    icon: React.ReactNode;
    heading: string;
    description: string;
    iconBgColor?: string;
    iconColor?: string;
}

export default function Card({ icon, heading, description, iconBgColor = "bg-green-100", iconColor = "text-green-600" }: CardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 lg:w-80 lg:h-80">
            
            <div className="flex justify-center mb-6">
                <div className={`w-16 h-16 ${iconBgColor} rounded-full flex items-center justify-center`}>
                    <div className={`w-8 h-8 ${iconColor}`}>
                        {icon}
                    </div>
                </div>
            </div>
            
            
            <h3 className="text-lg font-semibold text-black mb-4 lg:w-72 text-center">
                {heading}
            </h3>
            
            
            <p className="text-gray-500 text-center text-xs leading-relaxed">
                {description}
            </p>
        </div>
    )
}