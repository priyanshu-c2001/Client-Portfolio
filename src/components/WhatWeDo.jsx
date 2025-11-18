"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

// Convert description text into HTML with bullet formatting
const formatDescription = (text) => {
    let html = text
        // Add <br/> for line breaks
        .replace(/\n/g, "<br/>")

        // Convert bullet points into UL > LI (indented)
        .replace(
            /(• .*?(<br\/>|$))/g,
            "<ul class='pl-5 space-y-1 '><li>$1</li></ul>"
        )

        // Convert headings into bold text
        .replace(
            /(What This Training Covers:|Key Takeaways:|Future Benefits:|Who Benefits:|Age Group:)/g,
            "<h4 class='font-semibold mt-6 mb-2'>$1</h4>"
        );

    return html;
};

const services = [
    {
        id: "01",
        title: "Corporate Training Workshops",
        description: `Corporate Training Workshops were designed with one simple truth in mind: organisations grow only when their people evolve. Every company today battles with the same challenges — communication gaps, role confusion, lack of ownership, behavioural inconsistencies and low emotional maturity. This programme was developed to address these realities from the root. It transforms employees into professionals who think clearly, communicate confidently, and execute responsibly.

Age Group: 22–55 years
Who Benefits: Corporate employees, team leaders, new managers, operational staff, HR & L&D teams

What This Training Covers:
• Workplace professionalism & behavioural refinement
• Leadership habits and team alignment
• Communication that is clear, respectful and structured
• Conflict resolution & emotional maturity
• Productivity, prioritisation & task ownership
• Presentation & executive presence

Key Takeaways:
• A more disciplined, responsible and dependable workforce
• Improved collaboration and reduced conflicts
• Higher productivity and better team morale
• Stronger alignment with organisational goals

Future Benefits:
• Strong leadership pipeline
• Higher customer satisfaction
• Better organisational culture
• Long-term performance stability`
    },

    {
        id: "02",
        title: "Student Skill Enhancement Sessions",
        description: `Students today are academically intelligent but emotionally unprepared. They carry dreams but lack direction, confidence, and real-world skills. Student Skill Enhancement Sessions were created to bridge this gap — helping students transition from passive learners to independent, confident young adults. This training strengthens the abilities that truly shape their future: discipline, communication, focus, decision-making and emotional balance.

Age Group: 12–25 years
Who Benefits: School students, college students, graduates, placement aspirants

What This Training Covers:
• Confidence building & public speaking
• Time management and study discipline
• Decision-making & problem-solving
• Social behaviour and communication
• Emotional understanding & self-awareness
• Career clarity and long-term goal setting

Key Takeaways:
• More confident, expressive and responsible behaviour
• Better academic focus and performance
• Clarity about career direction
• Stronger emotional control

Future Benefits:
• Smoother transition into college and jobs
• Strengthened personality and self-belief
• Reduced peer pressure and stress`
    },

    {
        id: "03",
        title: "Scientific Parenting",
        description: `Scientific Parenting was created because parenting today is far more complex than it was in previous generations. Children are emotionally sensitive, technologically exposed and socially influenced. Parents, despite the best intentions, often struggle to understand what their child is actually going through. This training helps parents decode the psychology behind modern behavior, so they raise children who feel understood, supported and emotionally secure.

Age Group: Parents of children aged 5–18 years
Who Benefits: Parents, guardians, caregivers, teachers

What This Training Covers:
• Child psychology and emotional development
• Handling anger, anxiety, mood swings & behavioural issues
• Building discipline without punishment
• Parent-child bonding and communication
• Study habits, motivation & performance guidance
• Technology and screen-time boundaries

Key Takeaways:
• Healthier communication between parent and child
• Better behaviour management at home
• Stronger trust, bonding and emotional safety
• More cooperative and confident children

Future Benefits:
• Emotionally stable teenagers
• Responsible decision-making in adulthood
• Stronger family relationships`
    },

    {
        id: "04",
        title: "Life Skills Training",
        description: `Life Skills Training exists because real life tests us in ways that academic subjects never can. Confidence, emotional awareness, resilience, decision-making and social behaviour determine long-term success far more than grades or degrees. This programme shapes individuals who can think clearly, respond maturely and handle life situations without panic or confusion.

Age Group: 10–50 years
Who Benefits: Students, educators, professionals, homemakers

What This Training Covers:
• Self-awareness & emotional intelligence
• Handling stress, change & uncertainty
• Communication & interpersonal understanding
• Problem solving & decision-making
• Adaptability & confidence building
• Goal setting & self-management

Key Takeaways:
• Greater emotional balance
• Higher confidence and clarity
• Better relationships at home and work
• Ability to face challenges calmly

Future Benefits:
• Sustainable mental wellness
• Better academic, professional & personal outcomes
• Long-term behavioural maturity`
    },

    {
        id: "05",
        title: "Soft Skills Training",
        description: `Soft Skills Training was created after observing a consistent pattern in the professional world: technical knowledge gets you hired, but soft skills determine how far you grow. Communication, tone, listening, body language and attitude shape every interaction — interviews, meetings, teamwork, sales, leadership and customer service.

Age Group: 15–55 years
Who Benefits: Students, job seekers, professionals, corporate teams

What This Training Covers:
• Communication clarity & articulation
• Body language & professional presentation
• Teamwork & collaboration
• Listening skills & empathy
• Workplace etiquette & behaviour
• Confidence & assertiveness building

Key Takeaways:
• Improved confidence in communication
• Professional behaviour and polished presence
• Better teamwork and smoother relationships

Future Benefits:
• Higher chances of promotions
• Stronger personal brand at workplace
• Better interview and career opportunities`
    },

    {
        id: "06",
        title: "Customer Service Training",
        description: `Customer Service Training was introduced because today’s customers don’t just expect solutions — they expect respect, patience and a pleasant experience. The success of a business depends on how the front-line team behaves under pressure. This training helps professionals create interactions that leave customers feeling valued and understood.

Age Group: 18–50 years
Who Benefits: Retail staff, hospitality teams, receptionists, call-centre executives, service professionals

What This Training Covers:
• Service etiquette & professional communication
• Handling difficult customers with calmness
• Positive language & tone control
• Managing complaints & service recovery
• Relationship building & trust creation

Key Takeaways:
• Better customer interactions
• Reduced escalations
• Higher customer satisfaction

Future Benefits:
• Improved company reputation
• Greater customer loyalty
• Long-term business growth`
    },

    {
        id: "07",
        title: "Logistics Behavioural Training",
        description: `The logistics and supply chain environment is demanding, time-sensitive and operationally intense. Behavioural discipline, clear communication and consistency are essential. This training helps ground-level and mid-level logistics teams develop the behavioural foundation required to maintain accuracy and pace.

Age Group: 20–55 years
Who Benefits: Warehouse staff, delivery teams, supply chain personnel, supervisors

What This Training Covers:
• Time discipline & punctuality
• Safety behaviour & compliance
• Coordination between teams
• Professional communication on ground
• Handling workload & pressure

Key Takeaways:
• Increased operational discipline
• Reduced errors and miscommunication
• Safer and smoother workflow

Future Benefits:
• Higher operational efficiency
• Better team coordination
• Stronger reliability across processes`
    },

    {
        id: "08",
        title: "Sales Growth Training",
        description: `Sales Growth Training was created because sales is not merely a process — it is psychology. People buy trust before they buy products. This programme helps sales professionals understand their customers deeply, present value confidently and close deals without pressure or hesitation.

Age Group: 20–55 years
Who Benefits: Sales teams, retail professionals, business development executives, consultants

What This Training Covers:
• Customer psychology & need analysis
• Confident pitching & storytelling
• Objection handling & negotiation
• Follow-up discipline & relationship building
• Closing techniques that feel natural, not forced

Key Takeaways:
• Greater confidence in sales conversations
• Stronger relationship-building skills
• Improved conversion rates

Future Benefits:
• Sustainable revenue growth
• More consistent sales performance
• A mature, customer-centric sales culture`
    },

    {
        id: "09",
        title: "International Readiness & Global Career Development",
        description: `The world today offers endless possibilities, yet very few individuals know how to prepare themselves for truly global opportunities. This programme was created for students and professionals who dream of studying, working or settling abroad — but need clarity, confidence and direction to take the first meaningful step. Unlike traditional “visa guidance”, this training focuses on the person first: their mindset, their skills, their strengths, their communication, and their overall readiness to blend into an international environment.

Age Group: 16–45 years
Who Benefits: Students exploring study abroad options, young professionals preparing for global roles, PR/work visa aspirants, families planning international transitions

What This Training Covers:
• Developing the international mindset: adaptability, cultural intelligence, global communication
• Understanding global opportunities: study, work, immigration, skill-based pathways
• Matching personal strengths with the right country, course or career
• International CV & SOP guidance
• Visa interview readiness: clarity, structured answers, confidence
• First-year realities abroad: finances, behaviour, accommodation, integration
• Managing expectations & building independence
• Step-by-step overseas transition planning

Key Takeaways:
• Clear direction on international paths
• Visa assistance for study abroad, PR or work
• Practical cultural understanding
• Stronger communication & adaptability
• Realistic planning for life abroad

Future Benefits:
• Higher chances of international admission or job selection
• Smoother transition abroad
• Strong global career growth
• Ability to thrive confidently in a foreign environment`
    }
];


const WhatWeDo = () => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section className="w-full px-4 pt-12 sm:px-6 sm:py-16 lg:px-16 lg:py-20">
            {/* Header */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
                <p className="text-xs sm:text-sm font-medium tracking-wider text-gray-600 mb-3 sm:mb-6">WHAT WE DO</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight">
                    Comprehensive
                    <br />
                    services
                </h2>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200 mb-8 sm:mb-12 lg:mb-12"></div>

            {/* Services */}
            <div className="space-y-px">
                {services.map((service) => (
                    <div
                        key={service.id}
                        onMouseEnter={() => setHoveredId(service.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className="group py-6 sm:py-8 lg:py-12 border-b border-gray-200 last:border-b-0 cursor-pointer transition-all duration-300"
                    >
                        <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8 xl:gap-12">

                            {/* ID */}
                            <div className="flex-shrink-0 min-w-fit">
                                <span
                                    className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold transition-colors duration-300 ${hoveredId === service.id ? "text-black" : "text-gray-300"
                                        }`}
                                >
                                    {service.id}
                                </span>
                            </div>

                            {/* Title */}
                            <div className="flex-shrink-0 min-w-fit">
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-black">
                                    {service.title}
                                </h3>
                            </div>

                            {/* Description (formatted) */}
                            <div className="flex-1 min-w-0">
                                <div
                                    className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed whitespace-pre-wrap"
                                    dangerouslySetInnerHTML={{ __html: formatDescription(service.description) }}
                                />
                            </div>

                            {/* Arrow */}
                            <div className="flex-shrink-0 mt-4 sm:mt-0">
                                <div
                                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${hoveredId === service.id ? "border-black" : "border-gray-400"
                                        }`}
                                    style={{
                                        transform: hoveredId === service.id ? "rotate(45deg)" : "rotate(0deg)",
                                    }}
                                >
                                    <ArrowUpRight
                                        size={18}
                                        className={`sm:w-5 sm:h-5 transition-colors duration-300 ${hoveredId === service.id ? "text-black" : "text-gray-600"
                                            }`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhatWeDo;
