import { Facebook, Twitter, Dribbble, Instagram } from "lucide-react"

const Footer = () => {
    const socialLinks = [
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Dribbble, href: "#", label: "Dribbble" },
        { icon: Instagram, href: "#", label: "Instagram" },
    ]

    const navLinks = ["Home", "About Us", "Services", "Contacts"]

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
                            <p className="text-sm md:text-base">Germany —</p>
                            <p className="text-sm md:text-base">785 15h Street, Office 478</p>
                            <p className="text-sm md:text-base">Berlin, De 81566</p>
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
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className={`text-gray-300 hover:text-white transition-colors text-sm md:text-base ${link === "Home" ? "border-b-2 border-white" : ""
                                        }`}
                                >
                                    {link}
                                </a>
                            ))}
                        </nav>

                        {/* Copyright */}
                        <p className="text-gray-500 text-sm md:text-base">© 2025. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;