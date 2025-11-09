"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// The 'Testimonial' interface has been removed as it's a TypeScript feature.
// JavaScript will infer the types from the object array.

const testimonials = [
    {
        id: 1,
        quote: "Career Launch Program",
        description:
            "Focused on enhancing employability through practical skills, workplace readiness, and attitude development.",
        name: "",
        title: "",
        image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=562,fit=crop/mnlJ8BlwqNFWage7/clp-YZ9jB1BwzoIP3RPl.jpg",
    },
    {
        id: 2,
        quote: "Professional Coaching",
        description:
            "Customized coaching sessions for individual and organizational growth.",
        name: "",
        title: "",
        image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=562,fit=crop/mnlJ8BlwqNFWage7/pci-YbNJ7E7pW0cnb0op.jpg",
    },
    {
        id: 3,
        quote: "Language training- Inhouse/client site",
        description:
            "Workplace-focused language development offered at inhouse or client locations for maximum flexibility and impact.",
        name: "",
        title: "",
        image: "https://images.unsplash.com/photo-1507131679781-70be42a343e7?auto=format&fit=crop&w=656&h=480",
    },
    {
        id: 4,
        quote: "Grooming Workshops",
        description:
            "Personal development workshops aimed at refining soft skills, image, and interpersonal effectiveness.",
        name: "",
        title: "",
        image: "https://images.unsplash.com/photo-1689206110575-d222e62512b8?auto=format&fit=crop&w=656&h=480",
    },
]

const ClientsTestimonials = () => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length)
        }, 3000)
        return () => clearInterval(interval)
    }, []) // Empty dependency array means this runs once on mount

    const next = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length)
    }

    const prev = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const testimonial = testimonials[current]

    return (
        <section className="w-full bg-background py-8 md:py-24 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-12">WHAT ELSE?</h2>

                {/* Testimonial Content */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                    {/* Left side - Quote and description */}
                    <div className="flex-1">

                        {/* Quote text with smooth transition */}
                        <div className="min-h-[80px] md:min-h-[100px]">
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-snug">{testimonial.quote}</h3>
                        </div>

                        {/* Description text */}
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 md:mb-12">
                            {testimonial.description}
                        </p>

                        {/* Navigation arrows (DESKTOP) - Hidden on mobile */}
                        <div className="hidden md:flex gap-4">
                            <button
                                onClick={prev}
                                className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-2 border-gray-300 rounded-full hover:border-foreground transition-colors"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
                            </button>
                            <button
                                onClick={next}
                                className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-2 border-gray-300 rounded-full hover:border-foreground transition-colors"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
                            </button>
                            </div>
                    </div>

                    {/* Right side - Client info with smooth slide transition */}
                    <div className="flex items-center justify-center md:justify-start">
                        <div className="relative w-full md:w-auto min-h-[180px] md:min-h-[240px] flex items-center justify-center">
                            <div className="transition-all duration-700 ease-in-out transform" key={testimonial.id}>
                                <div className="space-y-6">
                                    {/* Square rounded image */}
                                    <div className="relative inline-block">
                                        <img
                                            src={testimonial.image || "/placeholder.svg"}
                                            alt={testimonial.name}
                                            className="w-64 h-64 md:w-40 md:h-40 rounded-2xl object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- ADDED BLOCK --- */}
                    {/* Navigation arrows (MOBILE) - Shown only on mobile and centered */}
                    <div className="flex md:hidden gap-4 justify-center">
                        <button
                            onClick={prev}
                            className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-2 border-gray-300 rounded-full hover:border-foreground transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
                            </button>
                        <button
                            onClick={next}
                            className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-2 border-gray-300 rounded-full hover:border-foreground transition-colors"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
                        </button>
                    </div>
                    {/* --- END OF ADDED BLOCK --- */}

                </div>
            </div>
        </section>
    )
}

export default ClientsTestimonials;