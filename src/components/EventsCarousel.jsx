"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

const events = [
    {
        id: 1,
        subtitle: "Explore personal grooming for impactful professional presence.",
        image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=808,fit=crop/mnlJ8BlwqNFWage7/2-m5KnG1N10pFzP2lL.jpg",
    },
    {
        id: 2,
        subtitle: "Enhance communication skills for professional success now.",
        image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=808,fit=crop/mnlJ8BlwqNFWage7/3-mP4M1VjV8vfoBKML.jpg",
    },
    {
        id: 3,
        subtitle: "Transform your career with our workshops today.",
        image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=808,fit=crop/mnlJ8BlwqNFWage7/1-m7VbGa1lpNtkbg0P.jpg",
    },
]

const EventsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const scrollContainerRef = useRef(null) // Removed <HTMLDivElement>

    // Removed type annotation for index
    const scrollToIndex = (index) => {
        setIsTransitioning(true)
        setCurrentIndex(index)

        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current
            const cardWidth = 320 // w-80 = 20rem = 320px
            const gap = 16 // gap-4 = 1rem = 16px
            const totalWidth = cardWidth + gap
            const scrollAmount = index * totalWidth

            container.scrollTo({
                left: scrollAmount,
                behavior: "smooth",
            })
        }

        // Adjusted the timeout to slightly longer to handle transition completion
        // The scroll operation is asynchronous, but this helps prevent rapid clicking issues.
        setTimeout(() => setIsTransitioning(false), 500)
    }

    const handleNext = () => {
        if (isTransitioning) return; // Prevent multiple clicks during transition
        const nextIndex = (currentIndex + 1) % events.length
        scrollToIndex(nextIndex)
    }

    const handlePrev = () => {
        if (isTransitioning) return; // Prevent multiple clicks during transition
        const prevIndex = (currentIndex - 1 + events.length) % events.length
        scrollToIndex(prevIndex)
    }

    return (
        <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-3">
                        <h2 className="text-4xl font-bold text-white">Events that liberate</h2>
                        <Link to="/services" className="text-white/70 hover:text-white transition-colors flex items-center gap-1 text-lg">
                            Discover events <span>›</span>
                        </Link>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-3">
                        <button
                            onClick={handlePrev}
                            disabled={isTransitioning} // Disable during transition
                            className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors hidden sm:flex items-center justify-center disabled:opacity-50"
                            aria-label="Previous event"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={isTransitioning} // Disable during transition
                            className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors hidden sm:flex items-center justify-center disabled:opacity-50"
                            aria-label="Next event"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div className="relative">
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
                        style={{ scrollBehavior: "smooth" }}
                    >
                        {events.map((event) => (
                            <div
                                key={event.id}
                                className="flex-shrink-0 w-80 h-96 rounded-2xl overflow-hidden cursor-pointer group relative"
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${event.image})` }}
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6">
                                    <div className="text-white">
                                        <p className="text-sm font-semibold text-white/70 mb-2">RITESH BAMMI</p>
                                        <h3 className="text-3xl font-bold mb-2 text-balance">{event.title}</h3>
                                        <p className="text-white/80 text-sm">{event.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {events.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white w-8" : "bg-white/30 w-2"
                                }`}
                            aria-label={`Go to event ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Tailwind's approach to hiding scrollbars using inline style for Next.js */}
            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    )
}

export default EventsCarousel;