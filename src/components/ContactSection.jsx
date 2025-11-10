"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, User, MessageSquare, Send } from "lucide-react"

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        formData.append("access_key", "e00437fa-5ed5-4a27-9c27-c99dae9024db");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        alert(data.message);
    }

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Side - Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">CONTACT US</p>
                            <h2 className="font-sans text-4xl md:text-5xl font-semibold text-foreground mb-6">
                                Have questions?
                                <br />
                                Get in touch!
                            </h2>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                Get in touch with Ritesh Bammi for expert training and development solutions tailored to your needs. We look forward to connecting with you!
                            </p>
                        </div>

                        {/* Contact Info Items */}
                        <div className="space-y-6">
                            {/* Location */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-red-500 flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-red-500" />
                                </div>
                                <div>
                                    <p className="text-foreground font-semibold">Skill Orchid Education, SCF-61, 2nd floor, phase 3b2, Mohali- 160059 (Pb) INDIA</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-red-500 flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-red-500" />
                                </div>
                                <div>
                                    <p className="text-foreground font-semibold">+91-8872696969, +91-9888881179</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-red-500 flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-red-500" />
                                </div>
                                <div>
                                    <p className="text-foreground font-semibold">riteshbammi@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name Field */}
                                <div className="relative">
                                    <div className="absolute left-0 top-0 w-10 h-10 flex items-center justify-center text-muted-foreground">
                                        <User className="w-5 h-5 mb-4" />
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="pl-12 border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-b-2 focus:border-foreground focus:outline-none focus:ring-0 placeholder:text-muted-foreground w-full"
                                    />
                                </div>

                                {/* Email Field */}
                                <div className="relative">
                                    <div className="absolute left-0 top-0 w-10 h-10 flex items-center justify-center text-muted-foreground">
                                        <Mail className="w-5 h-5 mb-4" />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="pl-12 border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-b-2 focus:border-foreground focus:outline-none focus:ring-0 placeholder:text-muted-foreground w-full"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Phone Field */}
                                <div className="relative">
                                    <div className="absolute left-0 top-0 w-10 h-10 flex items-center justify-center text-muted-foreground">
                                        <Phone className="w-5 h-5 mb-4" />
                                    </div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="pl-12 border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-b-2 focus:border-foreground focus:outline-none focus:ring-0 placeholder:text-muted-foreground w-full"
                                    />
                                </div>

                                {/* Subject Field */}
                                <div className="relative">
                                    <div className="absolute left-0 top-0 w-10 h-10 flex items-center justify-center text-muted-foreground">
                                        <MessageSquare className="w-5 h-5 mb-4" />
                                    </div>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="pl-12 border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-b-2 focus:border-foreground focus:outline-none focus:ring-0 placeholder:text-muted-foreground w-full"
                                    />
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className="relative pt-4">
                                <div className="absolute left-0 top-4 w-10 h-10 flex items-center justify-center text-muted-foreground">
                                    <MessageSquare className="w-5 h-5" />
                                </div>
                                <textarea
                                    name="message"
                                    placeholder="How can we help you? Feel free to get in touch!"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="pl-12 border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-b-2 focus:border-foreground focus:outline-none focus:ring-0 placeholder:text-muted-foreground min-h-32 resize-none w-full"
                                />
                            </div>

                            {/* Checkbox */}
                            <div className="flex items-start gap-3 pt-6">
                                <input
                                    type="checkbox"
                                    id="agree"
                                    className="mt-1"
                                />
                                <label htmlFor="agree" className="text-sm text-muted-foreground cursor-pointer">
                                    I agree that my data is{" "}
                                    <a href="#" className="underline text-foreground hover:text-muted-foreground transition-colors">
                                        collected and stored
                                    </a>
                                    .
                                </label>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-6">
                                <button
                                    type="submit"
                                    className="w-full md:w-auto bg-black hover:bg-foreground/90 text-white font-semibold rounded-full px-6 py-4 h-auto gap-2 flex items-center justify-center"
                                >
                                    <Send className="w-4 h-4" />
                                    Get in Touch
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Responsive Google Map */}
            <div className="mt-24 w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.271826273758!2d76.71786287562044!3d30.71075777459492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee885f6e536b%3A0xa7a34b1ef5a9b726!2sSkill%20Orchid%20EDUCATION%20PROFESSIONALS!5e0!3m2!1sen!2sin!4v1762669764666!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

        </section>
    )
}

export default ContactSection;