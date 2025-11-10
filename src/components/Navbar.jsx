"use client"

import { useState } from "react"
import { Menu, X, Search } from "lucide-react" // Import Search icon
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"
// Note: Changed 'next/link' to a standard 'a' tag for a pure JS conversion,
// but in a Next.js project, you should use 'next/link'.
// import Link from "next/link" 

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [searchBarOpen, setSearchBarOpen] = useState(false) // New state for search bar

    const navItems = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact Us", href: "/contact" },
    ]

    // Function to toggle the search bar
    const toggleSearchBar = () => {
        setSearchBarOpen(!searchBarOpen)
    }

    // Function to close the mobile menu on link click
    const closeMobileMenu = () => {
        setMobileMenuOpen(false)
    }

    return (
        <>
            {/* Search Bar Overlay - Slides down from the top */}
            <div
                className={`fixed top-0 left-0 w-full bg-white text-black z-[100] transform transition-transform duration-500 ease-in-out shadow-2xl ${searchBarOpen ? "translate-y-0" : "-translate-y-full" // Slide-down transition
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 h-32 md:h-40 flex items-center justify-between">


                    {/* Search Input */}
                    <div className="flex-grow flex justify-center mx-4 md:mx-16">
                        <div className="w-full max-w-2xl border-b border-black/30 flex items-center">
                            <input
                                type="text"
                                placeholder="Type words and hit enter"
                                className="w-full text-xl md:text-2xl outline-none bg-transparent placeholder-black/50 py-2"
                            />
                            <Search size={24} className="text-black/50 cursor-pointer" />
                        </div>
                    </div>

                    {/* Close Icon */}
                    <button onClick={toggleSearchBar} className="text-black hover:text-black/70 transition-colors">
                        <X size={30} />
                    </button>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="fixed top-0 w-full bg-black text-white z-50 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-lg md:text-2xl pt-2 font-bold tracking-wide">
                        <Link to="/">
                            <img src={logo} alt="Logo" className="max-h-16 max-w-sm" />
                        </Link>
                    </div>

                    {/* Desktop Nav Items (Simplified with Hover Effect) */}
                    <div className="hidden md:flex items-center gap-16"> {/* Reduced gap for space */}
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                to={item.href}
                                className="relative text-sm font-medium hover:text-white/80 transition-colors py-2 group"
                            >
                                {item.label}
                                {/* White line with smooth increase effect */}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Right Side Actions - Desktop */}
                    <div className="hidden md:flex items-center gap-6">
                        <button onClick={toggleSearchBar} className="text-white hover:text-white/80 transition-colors">
                            <Search size={20} /> {/* Used Search icon from lucide-react */}
                        </button>
                        <button className="bg-white text-black px-6 py-2 rounded-full font-medium text-sm hover:bg-white/90 transition-colors">
                            <Link to="/contact">Enroll now</Link>
                        </button>
                    </div>

                    {/* Mobile Actions - Increased Icon and Button Sizes */}
                    <div className="flex md:hidden items-center gap-4">
                        <button onClick={toggleSearchBar} className="text-white hover:text-white/80 transition-colors">
                            <Search size={24} /> {/* Increased Search icon size */}
                        </button>
                        <button className="bg-white text-black px-5 py-2 rounded-full font-medium text-sm hover:bg-white/90 transition-colors">
                            <Link to="/contact">Enroll now</Link>
                            {/* Increased Start now button size (px-5 py-2, text-sm) */}
                        </button>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-white hover:text-white/80 transition-colors md:hidden"
                        >
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />} {/* Increased Menu/X icon size */}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu (Simplified) */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-black border-t border-white/10 py-4 px-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                to={item.href}
                                onClick={closeMobileMenu} // Close menu on click
                                className="block text-white text-base font-medium py-3 hover:text-white/80 transition-colors" // Increased text size and padding
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar;