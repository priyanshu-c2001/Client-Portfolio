"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

const AboutServices = () => {
    // Removed the <number | null> type annotation for JS
    const [hoveredIndex, setHoveredIndex] = useState(null)

    const services = [
        {
            title: "Corporate Training",
            description:
                "Thriving in the workplace isn’t just about having the right skills—it’s about knowing how to adapt, grow, and lead with confidence. In today’s fast-paced world, professionals face constant change, increasing expectations, and the challenge of balancing performance with personal well-being. It’s easy to wonder —Am I truly reaching my full potential? Am I growing in the right direction? This program isn’t about rigid corporate strategies or generic leadership advice. Instead, it’s about helping you develop the mindset, communication skills, and emotional intelligence to excel in any professional environment. Because success isn’t just about climbing the corporate ladder—it’s about building meaningful relationships, making informed decisions, and handling challenges with clarity and resilience. Through this program, you’ll gain practical strategies to communicate effectively, manage workplace dynamics, enhance leadership presence, and maintain work-life balance without burnout.",
            image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=608,fit=crop/mnlJ8BlwqNFWage7/picture14-mk3J6xza62Cv1Lnr.jpg",
        },
        {
            title: "Scientific parenting",
            description:
                "Scientific parenting training is designed to equip caregivers with research-backed strategies rooted in developmental psychology, neuroscience, and behavioral science. This approach emphasizes understanding how a child’s brain develops, how emotions are formed and regulated, and how everyday interactions shape long-term behavior and mental well-being. Rather than relying on traditional or anecdotal methods, the training focuses on fostering secure attachments, setting healthy boundaries, and promoting emotional intelligence in children. Participants gain practical tools to handle common parenting challenges while building a nurturing and responsive environment that supports a child’s overall growth-intellectually, emotionally, and socially.",
            image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=608,fit=crop/mnlJ8BlwqNFWage7/img-20250721-wa0100-dWxO5Z44e2S4LVeO.jpg",
        },
        {
            title: "Student Workshops",
            description:
                "Growing up is challenging, and stepping into adulthood can feel overwhelming. With so many choices, pressures, and expectations, it’s easy to wonder—Am I making the right decisions? Am I truly ready for what comes next? This program isn’t about giving you a one-size-fits-all formula for success. Instead, it’s about helping you build the skills, mindset, and confidence to navigate life on your terms. Because success isn’t just about getting a degree or landing a job—it’s about understanding yourself, making smart decisions, and handling real-world challenges with clarity and resilience. Through this program, you’ll learn how to communicate effectively, manage stress, adapt to workplace dynamics, and make choices that align with your goals. It’s about becoming independent, confident, and ready to take on life— whether that means excelling in your career, handling setbacks, or simply figuring out what truly makes you happy.",
            image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=608,fit=crop/mnlJ8BlwqNFWage7/img20250218120010-dWxO5Z44W5hxBqz3.jpg",
        },
    ]

    return (
        <section className="py-16 px-4 md:px-8 lg:px-12 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="flex flex-col"
                        >
                            {/* Title with Icon and Underline */}
                            <div className="mb-6">
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <h3 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">{service.title}</h3>
                                    <ArrowUpRight className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                                </div>

                                {/* Underline with hover effect */}
                                <div
                                    className={`h-1 transition-colors duration-300 ${hoveredIndex === index ? "bg-red-500" : "bg-black"
                                        }`}
                                    style={{ width: "100%" }}
                                />
                            </div>

                            {/* Description */}
                            <p className="text-gray-500 text-base leading-relaxed mb-8">{service.description}</p>

                            <div className="w-full rounded-lg overflow-hidden bg-muted aspect-video">
                                <img
                                    src={service.image || "/placeholder.svg"}
                                    alt={service.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutServices;