"use client"

import { useState, useEffect } from "react"

const testimonials = [
    {
        id: 1,
        name: "Jane Smith",
        title: "Mumbai",
        description: "⭐⭐⭐⭐⭐⭐",
        quote:
            "Ritesh Bammi's expertise in training is unparalleled. Our organization benefited immensely from his workshops and coaching sessions. Truly a game changer for our team!",
        image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?_gl=1*1munyrx*_ga*MTkwNzcxOTIwNS4xNzYyNTMyNzMw*_ga_8JE65Q40S6*czE3NjI1ODE3NDIkbzQkZzEkdDE3NjI1ODE3NzUkajI3JGwwJGgw",
    },
    {
        id: 2,
        name: "John",
        title: "New Delhi",
        description: "⭐⭐⭐⭐⭐⭐",
        quote:
            "Ritesh's workshops transformed our team's skills and confidence remarkably. Highly recommended!",
        image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?_gl=1*8zgrjs*_ga*MTkwNzcxOTIwNS4xNzYyNTMyNzMw*_ga_8JE65Q40S6*czE3NjI1ODE3NDIkbzQkZzEkdDE3NjI1ODE4NjMkajI5JGwwJGgw",
    },
    {
        id: 3,
        name: "Sneha Kapoor",
        title: "Bangalore",
        description: "⭐⭐⭐⭐⭐⭐",
        quote:
            "Ritesh’s mentorship completely changed how we approach problem-solving. His energy and clarity are unmatched!",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 4,
        name: "Aarav Mehta",
        title: "Mumbai",
        description: "⭐⭐⭐⭐⭐",
        quote:
            "Working with Ritesh was an incredible experience! His sessions boosted our productivity and creativity immensely.",
        image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
]

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [fade, setFade] = useState(false)
    const [profileSlide, setProfileSlide] = useState(false) // New state for profile slide

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true)
            setProfileSlide(true) // Start profile slide transition
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % testimonials.length)
                setFade(false)
                setProfileSlide(false) // Reset profile slide for next transition
            }, 500) // Match this with the duration of the fade/slide-out
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const current = testimonials[currentIndex]

    return (
        <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-end justify-center overflow-x-hidden pt-24 sm:pt-24">
            {/* Background Image with Fade */}
            <div className="absolute inset-0 transition-opacity duration-1000">
                <img
                    key={current.id}
                    src={current.image || "/placeholder.svg"}
                    alt={current.name}
                    className={`absolute inset-0 w-full h-full object-cover object-top md:object-center transition-opacity duration-1000 ${fade ? "opacity-0" : "opacity-100"
                        }`}
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

            {/* Content Container */}
            <div
                className={`
                    relative z-10 flex flex-col items-center justify-center text-center 
                    px-6 sm:px-10 md:px-20 py-10 md:py-16 
                    max-w-3xl text-white
                    transform transition-all duration-700 
                    ${fade ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"}
                `}
            >
                {/* Quote */}
                <p className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6 opacity-90">
                    {current.quote}
                </p>

                {/* Person Info */}
                <div className="mb-10">
                    <p className="text-sm sm:text-base font-semibold text-white/90">
                        {current.name} — {current.title}
                    </p>
                    <p className="text-xs sm:text-sm text-white/70">
                        {current.description}
                    </p>
                </div>

                {/* Profile Avatars - Horizontal scrolling */}
                <div className="w-full overflow-x-auto pb-2">
                    <div className="flex gap-3 sm:gap-4 md:gap-6 justify-start flex-nowrap min-w-max mt-6 ml-2">
                        {testimonials.map((testimonial, index) => (
                            <button
                                key={testimonial.id}
                                onClick={() => setCurrentIndex(index)}
                                // Added slide transition classes based on profileSlide state
                                className={`
                                    flex flex-col items-center cursor-pointer 
                                    transition-all duration-500 ease-in-out flex-shrink-0
                                    ${index === currentIndex
                                        ? "opacity-100"
                                        : "opacity-50 hover:opacity-80"
                                    }
                                    ${profileSlide && index === currentIndex ? "translate-x-10 opacity-0" : "translate-x-0 opacity-100"}
                                `}
                            >
                                <div
                                    className={`
                                        relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden
                                        transition-all duration-300
                                        ${index === currentIndex ? "ring-4 ring-white scale-110 shadow-lg" : "ring-2 ring-white/50"}
                                    `}
                                >
                                    <img
                                        src={testimonial.image || "/placeholder.svg"}
                                        alt={testimonial.name}
                                        className="object-cover w-full h-full" // Ensure image covers the div
                                    />
                                </div>

                                <p
                                    className={`
                                        text-[11px] sm:text-xs mt-2 font-semibold transition-colors duration-300
                                        ${index === currentIndex ? "text-white" : "text-white/70"}
                                    `}
                                >
                                    {testimonial.name}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews;