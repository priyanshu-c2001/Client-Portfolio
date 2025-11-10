"use client"
import { Link } from "react-router-dom"
const ResultsSection = ({
    heading = "Empowering Futures Through Education Excellence",
    description = "Ritesh Bammi, an award-winning consultant, brings over 21 years of diverse experience in training and development across India, Africa, and the UAE, transforming lives through skill enhancement and professional growth.",
    stat1Value = "700+",
    stat1Label = "Institutions",
    stat2Value = "1100+",
    stat2Label = "Workshops Conducted",
    stat3Value = "300000+",
    stat3Label = "Individuals Trained",
    ctaText = "Learn more",
}) => {
    return (
        <section className="flex flex-col md:flex-row items-stretch px-4 md:px-8 py-16 md:py-24 max-w-7xl mx-auto gap-8 md:gap-16">

            {/* Right Side - Content (Appears first on mobile) */}
            <div className="flex-1 flex flex-col justify-center order-2 md:order-none">
                {/* HEADING */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 md:mb-12 leading-tight tracking-tight text-black">
                    {heading}
                </h1>

                <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-8 max-w-full">{description}</p>

                {/* Statistics section - FORCED HORIZONTAL LAYOUT ON ALL SCREENS */}
                {/* Changes: Reduced font size for mobile (text-3xl) and used 'justify-between' for even spacing */}
                <div className="flex flex-row gap-2 sm:gap-8 md:gap-20 items-start justify-between mb-8 md:mb-12">

                    <div className="flex flex-col gap-1 w-1/3 sm:w-auto">
                        {/* STAT VALUE 1: Reduced size for mobile (text-3xl) */}
                        <div className="text-3xl sm:text-5xl font-semibold leading-tight text-black">{stat1Value}</div>
                        {/* STAT LABEL 1: Reduced size for mobile (text-xs) */}
                        <p className="text-xs sm:text-base font-medium text-gray-700">{stat1Label}</p>
                    </div>

                    <div className="flex flex-col gap-1 w-1/3 sm:w-auto">
                        {/* STAT VALUE 2: Reduced size for mobile (text-3xl) */}
                        <div className="text-3xl sm:text-5xl font-semibold leading-tight text-black">{stat2Value}</div>
                        {/* STAT LABEL 2: Reduced size for mobile (text-xs) */}
                        <p className="text-xs sm:text-base font-medium text-gray-700">{stat2Label}</p>
                    </div>

                    <div className="flex flex-col gap-1 w-1/3 sm:w-auto">
                        {/* STAT VALUE 3: Reduced size for mobile (text-3xl) */}
                        <div className="text-3xl sm:text-5xl font-semibold leading-tight text-black">{stat3Value}</div>
                        {/* STAT LABEL 3: Reduced size for mobile (text-xs) */}
                        <p className="text-xs sm:text-base font-medium text-gray-700">{stat3Label}</p>
                    </div>
                </div>

                {/* CTA Button */}
                <Link to="/about" className="px-8 py-3 bg-white text-black rounded-full font-medium shadow-lg hover:bg-gray-100 transition-colors w-fit text-sm">
                    {ctaText}
                </Link>
            </div>

            {/* Left Side - Image Area (Appears second on mobile) */}
            <div className="flex-1 relative overflow-hidden rounded-xl order-1 md:order-none" style={{ aspectRatio: "16/9" }}>
                <img
                    src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=1159,fit=crop/mnlJ8BlwqNFWage7/commerece-dept~-4146-A3Q7j8JOejsjwDW9.jpg"
                    alt="Results showcase"
                    className="w-full h-full object-cover rounded-xl"
                />
            </div>
        </section>
    )
}

export default ResultsSection;