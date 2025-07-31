import Image from "next/image";
import Card from "./Card";

export default function Agent() {
    return (
        <div className="relative px-4 sm:px-8 2xl:px-12 3xl:px-16">
            {/* Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 2xl:gap-12 3xl:gap-16 mt-24 sm:mt-32 2xl:mt-40 3xl:mt-48 mb-16 lg:mb-24 2xl:mb-32 3xl:mb-40">
                <div className="lg:ml-30 2xl:ml-40 3xl:ml-52">
                    <h1 className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[75px] 2xl:text-[88px] 3xl:text-[96px] text-black font-semibold leading-tight text-center lg:text-left">
                        Agent Accelerator Advantages
                    </h1>
                </div>
                <div className="flex justify-center lg:justify-end lg:mr-20 2xl:mr-32 3xl:mr-40 mt-5 2xl:mt-8 3xl:mt-10">
                    <div className="w-full max-w-md 2xl:max-w-lg 3xl:max-w-xl text-sm 2xl:text-base 3xl:text-lg text-gray-500 text-center lg:text-left">
                        <p>
                            Join the ranks of forward-thinking companies who are revolutionizing
                            their customer service with AI. Our Program is your ticket to a highly
                            effective customer support operation.
                        </p>
                        <div className="relative mt-4 2xl:mt-6 3xl:mt-8">
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
                </div>
            </div>

            {/* Image section (always rendered) */}
            <div className="flex justify-center">
                <Image
                    className="rounded-[45px] 2xl:rounded-[60px] 3xl:rounded-[75px]"
                    src="/AgentBackground.webp"
                    alt="agent"
                    width={1150}
                    height={1200}
                />
            </div>

            {/* Cards: Desktop (absolute on image) */}
            <div className="hidden lg:flex lg:absolute lg:inset-0 lg:mt-80 2xl:mt-96 3xl:mt-[400px] lg:z-10 flex-col items-center justify-center">
                <div className="flex gap-6 2xl:gap-8 3xl:gap-10 mb-8 2xl:mb-12 3xl:mb-16">
                    <Card
                        icon={<svg fill="currentColor" viewBox="0 0 24 24"><circle cx="8" cy="8" r="3" /><path d="M8 12c-2.5 0-4.5 2-4.5 4.5V18h9v-1.5C12.5 14 10.5 12 8 12z" /><circle cx="16" cy="8" r="3" /><path d="M16 12c-2.5 0-4.5 2-4.5 4.5V18h9v-1.5C20.5 14 18.5 12 16 12z" /></svg>}
                        heading="Expert Setup & Customization"
                        description="Our team handles the entire setup process for you..."
                    />
                    <Card
                        icon={<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>}
                        heading="Cost-Efficient"
                        description="Enjoy premium service without the premium price tag."
                        iconBgColor="bg-blue-100"
                        iconColor="text-blue-600"
                    />
                    <Card
                        icon={<svg fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                        heading="Ongoing Support"
                        description="Receive continued support from Thoughtly..."
                        iconBgColor="bg-purple-100"
                        iconColor="text-purple-600"
                    />
                </div>

                <div className="flex gap-6 2xl:gap-8 3xl:gap-10">
                    <Card
                        icon={<svg fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                        heading="Lightning Fast Response"
                        description="Stay in the driver seat by providing feedback..."
                        iconBgColor="bg-orange-100"
                        iconColor="text-orange-600"
                    />
                    <Card
                        icon={<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>}
                        heading="Self Sufficiency"
                        description="Empower your team with the tools and knowledge..."
                        iconBgColor="bg-pink-100"
                        iconColor="text-pink-600"
                    />
                </div>
            </div>

            {/* Cards: Mobile (below image) */}
            <div className="flex flex-col gap-6 2xl:gap-8 3xl:gap-10 mt-8 2xl:mt-12 3xl:mt-16 lg:hidden">
                <Card
                    icon={<svg fill="currentColor" viewBox="0 0 24 24"><circle cx="8" cy="8" r="3" /><path d="M8 12c-2.5 0-4.5 2-4.5 4.5V18h9v-1.5C12.5 14 10.5 12 8 12z" /><circle cx="16" cy="8" r="3" /><path d="M16 12c-2.5 0-4.5 2-4.5 4.5V18h9v-1.5C20.5 14 18.5 12 16 12z" /></svg>}
                    heading="Expert Setup & Customization"
                    description="Our team handles the entire setup process for you..."
                />
                <Card
                    icon={<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>}
                    heading="Cost-Efficient"
                    description="Enjoy premium service without the premium price tag."
                    iconBgColor="bg-blue-100"
                    iconColor="text-blue-600"
                />
                <Card
                    icon={<svg fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                    heading="Ongoing Support"
                    description="Receive continued support from Thoughtly..."
                    iconBgColor="bg-purple-100"
                    iconColor="text-purple-600"
                />
                <Card
                    icon={<svg fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                    heading="Lightning Fast Response"
                    description="Stay in the driver seat by providing feedback..."
                    iconBgColor="bg-orange-100"
                    iconColor="text-orange-600"
                />
                <Card
                    icon={<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>}
                    heading="Self Sufficiency"
                    description="Empower your team with the tools and knowledge..."
                    iconBgColor="bg-pink-100"
                    iconColor="text-pink-600"
                />
            </div>
        </div>
    );
}
