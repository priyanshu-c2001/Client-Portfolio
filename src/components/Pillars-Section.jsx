import { useState } from "react";
import { ChevronRight } from "lucide-react";

// Pillars data (unchanged)
const pillars = [
    {
        id: "mindset",
        title: "Grooming and Development",
        image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=737,fit=crop/mnlJ8BlwqNFWage7/commerece-dept~-4153-A85VzlE3E8UL4Ovp.jpg",
        description: "Fostering confidence and professionalism through comprehensive grooming and personal development workshops.",
    },
    {
        id: "wealth",
        title: "Corporate Training Programs",
        image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=392,fit=crop/mnlJ8BlwqNFWage7/20130513_140406-AzGNL03RGZU0yLbD.jpg",
        description: "Enhancing skills for corporate success through customized workshops and coaching sessions.",
    },
    {
        id: "health",
        title: "Language Training Services",
        image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=392,fit=crop/mnlJ8BlwqNFWage7/whatsapp-image-2025-07-21-at-00.54.09_55c1848e-m6LbGpRRz3hBOQE9.jpg",
        description: "Empowering individuals with essential language skills for personal and professional growth.",
    },
];

export default function PillarsSection() {
    const [hoveredPillar, setHoveredPillar] = useState(null);

    // This logic was already correct! It uses the state to find the
    // right pillar, or defaults to the first one.
    const currentPillar = hoveredPillar
        ? pillars.find((p) => p.id === hoveredPillar) || pillars[0]
        : pillars[0];

    return (
        <section className="bg-white py-16 md:py-24 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">

                    {/* Left side - Pillars list */}
                    <div className="flex-1 w-full lg:w-auto">
                        <p className="text-xs font-medium tracking-widest text-gray-600 mb-8">
                            • PILLARS FOR AN EXTRAORDINARY LIFE
                        </p>

                        <div className="space-y-4">
                            {pillars.map((pillar) => {
                                const active = hoveredPillar === pillar.id;
                                return (
                                    <div
                                        key={pillar.id}
                                        className="cursor-pointer group p-4 -m-4 rounded-lg transition-all duration-300 "
                                        onMouseEnter={() => setHoveredPillar(pillar.id)} // <-- ADD THIS
                                        onMouseLeave={() => setHoveredPillar(null)}
                                        _                          >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3
                                                    className={`text-2xl md:text-5xl lg:text-6xl font-semibold transition-all duration-300 ${
                                                        // v-- UPDATED CLASS
                                                        active ? "text-gray-500" : "text-black"
                                                        }`}
                                                    _                 >
                                                    {pillar.title}
                                                </h3>

                                                <p
                                                    className={`text-1xl mt-1 transition-all duration-300 ${
                                                        // v-- UPDATED CLASS
                                                        active ? "text-gray-400" : "text-black/70"
                                                        }`}
                                                >
                                                    {pillar.description}
                                                </p>
                                            </div>
                                            {active && (
                                                <div className="hidden lg:flex items-center gap-2 text-gray-500 text-sm font-medium ml-4 transition-opacity duration-300">
                                                    <span>Explore</span>
                                                    <ChevronRight size={16} />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="flex-1 w-full lg:w-auto">
                        <div className="relative w-full aspect-[3/4] bg-gray-200 rounded-2xl overflow-hidden">

                            {/* Map over ALL pillars to render every image */}
                            {pillars.map((pillar) => (
                                <img
                                    key={pillar.id} // Key is now stable
                                    src={pillar.image || "/placeholder.svg"}
                                    alt={pillar.title}
                                    className={`
                    object-cover w-full h-full
                    absolute top-0 left-0
                    transition-opacity duration-500 ease-in-out
                    ${pillar.id === currentPillar.id ? 'opacity-100' : 'opacity-0'}
                `}
                                />
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}