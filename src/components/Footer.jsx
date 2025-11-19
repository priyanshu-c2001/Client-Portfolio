import { Linkedin, Youtube, Instagram } from "lucide-react" // Changed Whatsapp to MessageSquare
import { Link, useLocation } from "react-router-dom"

const Footer = () => {
    const location = useLocation();
    const socialLinks = [
        { icon: Linkedin, href: "https://www.linkedin.com/in/ritesh-bammi-23351356?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
        { icon: Youtube, href: "https://youtube.com/@riteshbammi?si=FXZzFyw-9onYH5oW", label: "YouTube" }, // Use MessageSquare here
        { icon: Instagram, href: "https://www.instagram.com/ritesh_bammi?igsh=MXNwenF3MXQ0Ymtibg==", label: "Instagram" },
    ]

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact Us", href: "/contact" },
    ]

    return (
        <footer className="bg-black text-white">
            {/* Main footer content */}
            <div className="max-w-7xl mx-auto px-4 py-4 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Brand section */}
                    <div className="flex flex-col justify-start">
                        <h3 className="text-3xl md:text-4xl font-semibold text-white leading-tight text-balance">
                            Expertise Growth Vision &<br /> Transforming lives through training and development.
                        </h3>
                    </div>

                    {/* Address section */}
                    <div className="flex flex-col">
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Address</h4>
                        <div className="space-y-2 text-gray-300">
                            <p className="text-sm md:text-base">Skill Orchid Education —</p>
                            <p className="text-sm md:text-base">SCF-61, 2nd floor, phase 3b2</p>
                            <p className="text-sm md:text-base">Mohali- 160059 (Pb) INDIA</p>
                        </div>
                    </div>

                    {/* Contact section */}
                    <div className="flex flex-col">
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Say Hello</h4>
                        <div className="space-y-3">
                            <a
                                href="mailto:info@example.com"
                                className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                            >
                                riteshbammi@gmail.com
                            </a>
                            <p className="text-gray-300 text-sm md:text-base">+91-8872696969</p>
                        </div>
                    </div>
                </div>

                {/* Social icons */}
                <div className="flex gap-4 mb-12 md:mb-16">
                    {socialLinks.map((social, index) => {
                        const Icon = social.icon
                        return (
                            <a
                                key={index}
                                href={social.href}
                                aria-label={social.label}
                                className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-all duration-300 hover:opacity-60"
                            >
                                <Icon size={20} />
                            </a>
                        )
                    })}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8 md:pt-12">
                    {/* Navigation links */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
                        <nav className="flex flex-wrap gap-6 md:gap-8">
                            {navLinks.map((link, index) => {
                                const isActive = location.pathname === link.href;

                                return (
                                    <Link
                                        key={index}
                                        to={link.href}
                                        className={`text-gray-300 hover:text-white transition-colors text-sm md:text-base 
                            ${isActive ? "border-b-2 border-white" : "border-b-2 border-transparent"}`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Copyright */}
                        <p className="text-gray-500 text-sm md:text-base">
                            © 2025. All Rights Reserved
                            <a href="https://www.linkedin.com/in/priyanshu-chaurasia-22b1a3256/">.</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;