"use client"

import { useState, useRef } from "react"
import { Play } from "lucide-react"

// Removed interface VideoSectionProps

const HeroBentoSection=({
  imageUrl = "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=941,fit=crop/mnlJ8BlwqNFWage7/bw-ritesh-YX4xERE6k9S0K1y0.jpg",
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ",
  heading = "Empowering Through Education and Training?",
  description = "For over 15 years UP! Ritesh Bammi has helped companies and individuals build a culture of uplifting service that delivers real business results year after year nationally and internationally. For Training and Consulting interactions, he is a visiting faculty to various Institutes and corporate globally.",
  buttonText = "Meet Ritesh Bammi",
  featuredLogos = ["Corporate", "Workshops", "Inc.", "Success"],
})=> {
  const [isPlaying, setIsPlaying] = useState(false)
  const iframeRef = useRef(null) // Removed type annotation <HTMLIFrameElement>

  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  const handleFullscreen = () => {
    if (iframeRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        // Since iframeRef.current is the iframe element itself, request fullscreen on it.
        iframeRef.current.requestFullscreen()
      }
    }
  }

  return (
    <section className="px-4 md:px-8 py-12 md:py-24 max-w-7xl mx-auto">
      <div className="relative">
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">
            {/* Left Column - Image and Featured Logos */}
            <div className="flex flex-col gap-0">
              {/* Top: Image with Blue Gradient Background and Right-Bottom Expansion */}
              <div className="relative overflow-visible">
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 aspect-square rounded-2xl md:rounded-3xl">
                  <img
                    src={imageUrl || "/placeholder.svg"}
                    alt="Featured content"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute -bottom-16 -right-16 md:-bottom-32 md:-right-32 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-tl from-blue-600 via-blue-600 to-transparent rounded-full blur-3xl opacity-60" />
                </div>
              </div>

              {/* Bottom: Featured In Section */}
              <div className="flex flex-col gap-4 md:gap-6 p-4 md:p-8 bg-white rounded-2xl md:rounded-3xl mt-4 md:mt-8">
                <p className="text-gray-600 text-xs md:text-sm font-medium">Featured in:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-center">
                  {featuredLogos.map((logo, index) => (
                    <div key={index} className="text-gray-400 text-sm md:text-lg font-bold">
                      {logo}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Content and Video with Overlapping Connection */}
            <div className="flex flex-col gap-12 md:pl-8 relative z-10">
              {/* Top: Text Content */}
              <div className="flex flex-col gap-4 md:gap-8 p-4 md:p-12 bg-white rounded-2xl md:rounded-3xl relative z-20">
                <h2 className="text-2xl md:text-5xl font-bold leading-tight">{heading}</h2>
                <p className="text-sm md:text-lg leading-relaxed text-gray-700">{description}</p>
                <button className="px-6 md:px-8 py-2 md:py-3 bg-gray-100 text-black rounded-full font-medium hover:bg-gray-200 transition-colors w-fit text-sm md:text-base">
                  {buttonText}
                </button>
              </div>

              {/* Video Section */}
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-black aspect-video group cursor-pointer flex items-center justify-center mt-0 md:-mt-12 md:pt-12 pt-4 bg-gradient-to-br from-blue-900/20 to-black">
                {!isPlaying ? (
                  <>
                    {/* Video Background (Preloaded/Static Image) */}
                    <div className="absolute inset-0">
                      <iframe
                        ref={iframeRef}
                        src={`${videoUrl}?autoplay=0`}
                        title="Featured video"
                        className="w-full h-full"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        // Removed 'autoplay' from allow list here as the video is paused/static initially
                        allowFullScreen
                        style={{ pointerEvents: "none" }}
                      />
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors z-10">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handlePlayClick()
                          // handleFullscreen() logic remains, though requires secure context
                          setTimeout(() => handleFullscreen(), 100) 
                        }}
                        className="flex items-center gap-2 md:gap-3 px-4 md:px-8 py-2 md:py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
                        aria-label="Play video"
                      >
                        <Play size={16} fill="currentColor" className="md:w-5 md:h-5" />
                        Watch video
                      </button>
                    </div>
                  </>
                ) : (
                  <iframe
                    ref={iframeRef}
                    src={`${videoUrl}?autoplay=1`}
                    title="Featured video"
                    className="w-full h-full absolute inset-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBentoSection;