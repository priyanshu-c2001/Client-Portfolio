'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

const ScrollTopArrow = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isClicking, setIsClicking] = useState(false)

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        setIsClicking(true)
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        setTimeout(() => setIsClicking(false), 600)
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    // --- FIX APPLIED ---
                    // Changed z-50 to z-[999] to ensure it's on top of all
                    // other content, like your fixed header.
                    // -------------------
                    className={`fixed bottom-6 right-6 w-12 h-12 bg-white text-black rounded-full shadow-lg transition-all duration-300 flex items-center justify-center hover:bg-primary hover:scale-110 active:scale-95 z-[999] ${isClicking ? 'animate-pulse' : ''
                        }`}
                    aria-label="Scroll to top"
                    title="Scroll to top"
                >
                    <div
                        className={`transition-transform duration-300 ${isClicking ? 'scale-150' : 'scale-100'
                            }`}
                    >
                        <ChevronUp size={24} strokeWidth={2.5} />
                    </div>
                </button>
            )}
        </>
    )
}

export default ScrollTopArrow;