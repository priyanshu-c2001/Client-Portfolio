"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import transparent_logo from "../assets/transparent_logo.png"

const VideoTagline = () => {
    const [isHovering, setIsHovering] = useState(false)

    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                {/* NOTE: You are currently using a file path that ends in '.jpg' for the video source. 
           If this is a video component, ensure the file at this path is an actual video file (e.g., .mp4). 
           If it's an image, consider replacing the <video> tag with an <img> tag for best performance. */}
                <source src="https://res.cloudinary.com/dof7yblai/video/upload/v1762537080/2675511-hd_1920_1080_24fps_wetbgl.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute mb-96 left-auto z-20 flex items-center space-x-2">
                <img
                    src={transparent_logo}
                    alt="Logo"
                    className="max-h-72 md:max-h-72 object-contain drop-shadow-lg mb-48"
                />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-8 mt-80">

                {/* Headline */}
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-white mb-6 md:mb-8 max-w-4xl leading-tight">
                    Because no machine can think, feel or create like you!
                </h1>

                {/* Subtitle */}
                <p className="text-base md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
                    Bridge the distance between your reality and your dreams with Ritesh Bammi’ proven success strategies.
                </p>

                <button
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className={`px-6 md:px-10 py-2 md:py-4 rounded-full font-semibold text-lg transition-colors duration-300 ${isHovering ? "bg-gray-300 text-black" : "bg-white text-black hover:bg-gray-300"
                        }`}
                >
                    <Link to="/contact">Enroll now</Link>
                </button>
            </div>
        </section>
    )
}

export default VideoTagline;