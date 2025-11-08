"use client"

import { useState } from "react"

const Hero = () => {
    const [isVideoReady, setIsVideoReady] = useState(false)

    return (
        // Added font-sans as a common modern/bento font aesthetic.
        // If you have a custom font configured as 'font-bento', replace 'font-sans' with 'font-bento'.
        <section className="relative w-full min-h-screen bg-black overflow-hidden pt-16 md:pt-20 font-sans">
            {/* Hero Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url(https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mnlJ8BlwqNFWage7/whatsapp-image-2025-02-14-at-16.15.03_eb3c52c2-AVLa8XgQzlh4EoVq.jpg)",
                }}
            >
                {/* Bokeh Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 min-h-screen md:h-screen flex items-center">
                <div className="max-w-7xl mx-auto w-full px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
                    {/* Left Content */}
                    <div className="flex-1 max-w-2xl w-full">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-6 md:mb-8 text-balance text-center md:text-left">
                            "Unleashing the power of human intelligence in an AI-driven world"
                        </h1>
                        <div className="flex justify-center md:justify-start">
                            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold text-sm md:text-lg hover:bg-white/90 transition-colors">
                                Enroll now
                            </button>
                        </div>
                    </div>

                    {/* Right Video Block - Stacked on Mobile */}
                    <div className="flex-1 w-full flex justify-center md:justify-end items-center md:pr-8">
                        <div className="relative w-full md:w-96">
                            {/* Label */}
                            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                                <div className="w-3 h-3 bg-purple-500 rounded-full" />
                                <span className="text-white text-xs md:text-sm font-semibold tracking-wide">NEXT EVENT</span>
                            </div>

                            {/* Video Container */}
                            <div className="relative w-full aspect-video md:h-64 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                    onLoadedData={() => setIsVideoReady(true)}
                                >
                                    <source
                                        src="https://res.cloudinary.com/dof7yblai/video/upload/v1762532846/3121327-uhd_3840_2160_24fps_bzhjaz.mp4"
                                        type="video/mp4"
                                    />
                                </video>

                                {/* Gradient Overlay on Video */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                {/* Video Text */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:p-6">
                                    <div className="text-white text-sm">
                                        <p className="text-xs font-semibold tracking-widest mb-2 opacity-90">RITESH BAMMI</p>
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
                                            "Unleash Your Potential"
                                        </h2>
                                    </div>
                                </div>

                                {/* Play Icon Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;