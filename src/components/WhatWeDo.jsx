"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

// The 'Service' interface has been removed as it's a TypeScript feature.
// JavaScript will infer the types from the object array.

const services = [
    {
        id: "01",
        title: "Corporate Training Workshops",
        description:
            "Enhancing skills through engaging workshops tailored for corporate and institutional needs.",
    },
    {
        id: "02",
        title: "Student Skill Enhancement session",
        description:
            "Comprehensive  training programs designed to improve skills for career, confidence, and communication",
    },
    {
        id: "03",
        title: "Scientific Parenting",
        description:
            "Empowering parents with evidence-based strategies to nurture resilient, emotionally intelligent children..",
    },
]

const WhatWeDo=()=>{
    // Removed the <string | null> type annotation from useState
    const [hoveredId, setHoveredId] = useState(null)

    return (
        <section className="w-full px-4 pt-12 sm:px-6 sm:py-16 lg:px-16 lg:py-20">
            {/* Header */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
                <p className="text-xs sm:text-sm font-medium tracking-wider text-gray-600 mb-3 sm:mb-6">WHAT WE DO</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight">
                    Comprehensive
                    <br />
                    services
                </h2>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200 mb-8 sm:mb-12 lg:mb-12"></div>

            {/* Services List */}
            <div className="space-y-px">
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        onMouseEnter={() => setHoveredId(service.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className="group py-6 sm:py-8 lg:py-12 border-b border-gray-200 last:border-b-0 cursor-pointer transition-all duration-300"
                    >
                        <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8 xl:gap-12">
                            {/* Service ID */}
                            <div className="flex-shrink-0 min-w-fit">
                                <span
                                    className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold transition-colors duration-300 ${hoveredId === service.id ? "text-black" : "text-gray-300"
                                        }`}
                                >
                                    {service.id}
                                </span>
                            </div>

                            {/* Service Title */}
                            <div className="flex-shrink-0 min-w-fit">
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-black">{service.title}</h3>
                            </div>

                            {/* Service Description */}
                            <div className="flex-1 min-w-0">
                                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">{service.description}</p>
                            </div>

                            {/* Arrow Icon */}
                            <div className="flex-shrink-0 mt-4 sm:mt-0">
                                <div
                                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${hoveredId === service.id ? "border-black" : "border-gray-400"
                                        }`}
                                    style={{
                                        transform: hoveredId === service.id ? "rotate(45deg)" : "rotate(0deg)",
                                    }}
                                >
                                    <ArrowUpRight
                                        size={18}
                                        className={`sm:w-5 sm:h-5 transition-colors duration-300 ${hoveredId === service.id ? "text-black" : "text-gray-600"
                                            }`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WhatWeDo;