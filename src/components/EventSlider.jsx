"use client"

import { useState, useEffect } from "react" // <-- 1. Import useEffect
import { ChevronLeft, ChevronRight } from "lucide-react"
import EventCard from "./EventCard" // Assuming EventCard.js is in the same folder
import { Link } from "react-router-dom"

const events = [
    {
        id: 1,
        title: "",
        description: "",
        label: "",
        date: "",
        place: "",
        timezone: "",
        brandBox: {
            instructor: "RITESH BAMMI",
            eventName: "",
        },
        image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=750,fit=crop/mnlJ8BlwqNFWage7/img20250218131212-A1a5pRGZDjflwyGz.jpg",
    },
    {
        id: 2,
        title: "",
        description: "",
        label: "",
        date: "",
        place: "",
        timezone: "",
        brandBox: {
            instructor: "RITESH BAMMI",
            eventName: "",
        },
        image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=750,fit=crop/mnlJ8BlwqNFWage7/commerece-dept~-4157-YZ9jZNx4nPhpEy10.jpg",
    },
    {
        id: 3,
        title: "",
        description: "",
        label: "",
        date: "",
        place: "",
        timezone: "",
        brandBox: {
            instructor: "RITESH BAMMI",
            eventName: "",
        },
        image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=750,fit=crop/mnlJ8BlwqNFWage7/whatsapp-image-2025-07-21-at-00.54.08_cfbc618b-dJob2RnnoXunEBv3.jpg",
    },
]

export default function EventSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % events.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + events.length) % events.length)
    }

    // --- FIX_IS_HERE ---
    // 2. Add useEffect to handle the automatic sliding
    useEffect(() => {
        // Set up an interval to call nextSlide every 3 seconds (3000 ms)
        const timer = setInterval(() => {
            nextSlide()
        }, 3000)

        // Clear the interval when the component unmounts
        // This prevents memory leaks
        return () => {
            clearInterval(timer)
        }
    }, []) // The empty dependency array [] means this effect runs only once when the component mounts

    return (
        <div className="w-full">
            {/* Header Section */}
            <div className="bg-white px-4 text-center md:px-8 md:py-8">
                <h1 className="mb-4 text-balance text-3xl font-semibold text-foreground md:mb-6 md:text-5xl">Gallery</h1>
                <p className="text-balance text-sm text-foreground/80 md:text-lg">
                    Explore our workshops, training sessions, and professional development events.
                </p>
            </div>

            {/* Upcoming Events Section */}
            <div className="bg-white px-2 py-8 md:px-8 md:py-8">
                {/* Header and Navigation */}
                <div className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-2">
                        <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Events</h2>
                        <Link
                            to="/services"
                            className="text-xs text-foreground/60 hover:text-foreground transition-colors md:ml-4 md:text-sm"
                        >
                            Explore all events <span className="ml-1">›</span>
                        </Link>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-2 justify-center md:justify-end">
                        <button
                            onClick={prevSlide}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
                        </button>
                    </div>
                </div>

                {/* Event Cards Slider */}
                <div className="relative overflow-hidden rounded-lg md:rounded-2xl">
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {events.map((event) => (
                            <div key={event.id} className="w-full flex-shrink-0">
                                <EventCard event={event} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Slider Dots */}
                <div className="mt-6 flex justify-center gap-2 md:mt-8">
                    {events.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            // Changed `bg-foreground` to `bg-black` for visibility on white
                            className={`h-2 rounded-full transition-all ${index === currentSlide ? "bg-black w-8" : "bg-black/30 w-2"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}