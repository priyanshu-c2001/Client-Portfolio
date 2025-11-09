"use client"

import { useState } from 'react';

const AboutSection = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Top Section - Image Left, Content Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24">
                    {/* Left Image */}
                    <div className="flex justify-center md:justify-start">
                        <div className="w-full max-w-md">
                            <img
                                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=941,fit=crop/mnlJ8BlwqNFWage7/bw-ritesh-YX4xERE6k9S0K1y0.jpg"
                                alt="Professional man with phone"
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex flex-col justify-center space-y-6">
                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black leading-tight">
                            Empowering Through Education and Training
                        </h2>

                        {/* Description */}
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                            Ritesh is the founder of “Ritesh Bammi Training Systems” and “Skill Orchid Education Professionals” training firms with only one focus: Crafting personality of Individuals, so that they can become more productive, perform better and be truly successful. For over 15 years UP! Ritesh Bammi has helped companies and individuals build a culture of uplifting service that delivers real business results year after year nationally and internationally. For Training and Consulting interactions, he is a visiting faculty to various Institutes and corporate globally.
                        </p>
                    </div>
                </div>

                {/* Bottom Section - Content Left, Image Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center space-y-6 order-2 md:order-1">
                        {/* Description */}
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                            As one of the India’s emerging motivational speakers, Ritesh Bammi is a dynamic personality and highly-sought-after resource in business and professional circles for corporate, institutions and schools looking to expand opportunity in all dimensions. For more than a decade he has not only experienced the science of human behavior, he’s mastered it by interacting hundreds of successful business leaders and collaborating with them in the boardroom translating theory into bottom-line results for his clients.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center md:justify-end order-1 md:order-2">
                        <div className="w-full max-w-md">
                            <img
                                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=750,fit=crop/mnlJ8BlwqNFWage7/img20250213111626_01-dJob2Rny8xIJ9VPe.jpg"
                                alt="Professional woman with laptop"
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* --- MODIFIED TEXT SECTION --- */}
            {/* This container ensures the text content below matches the max-width of the sections above */}
            <div className="max-w-7xl mx-auto mt-14">

                {/* 1. Always Visible Content */}
                <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                    As a premier Keynote Speaker and leading authority on achievement for audiences— Ritesh Bammi energizes people to meet the challenges of the world around them. He skillfully weaves his compelling life story into the fabric of our daily lives. The thread is forever strengthened, touting why you can’t afford to be complacent and to aim high, achieve and actively make an impact on the world. Ritesh Bammi is invited back again and again for his powerful message and the ability to connect deeply with people from all spheres of life. It isn’t just his great smile and his way with words that motivates people to take action like never before; when people face roadblocks or adversity it is the depth of his knowledge on achievement that creates lasting results.
                </p>

                {/* 2. Collapsible Content */}
                <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[3000px]' : 'max-h-0'
                        }`}
                >
                    {/* The rest of the content, now in proper <p> tags */}
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light mt-6">
                        Ritesh straight-from-the-heart, passion and high-energy, motivates audiences to step beyond their limitations and into their greatness in many ways. Over the past decade, Ritesh has expanded his role from keynote speaker to Master Trainer, creating the kind of workshop learning experience that got him committed to personal-and-professional development many years earlier. His charisma, warmth and humor have transformed ordinary people into extraordinary achievers by using his own life, and his in-depth study of others’ challenges, to build an understanding of what works, what doesn’t work, and why.
                    </p>

                    <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light mt-6">
                        He has to his credit, interactions with, and changing the lives of thousands of graduates from B schools and HR Professionals of Developing Nations who went through his interactive sessions on Management, Personality Assessment/Development, skills for Group Discussions, Personal Interviews, Group Tasking, Case Studies, Presentations and Public Dynamic Speaking.
                    </p>

                    <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light mt-6">
                        MCM DAV-Chandigarh, Amity University-Mohali, Chandigarh University, Chandigarh Polytechnic College, IET Bhaddal, Govt. Girls Polytechnic College 11- Chandigarh, Murari Lal College of Nursing, Maharaja Agrasen College, A Pee Jay College- Jalandhar, CGC- Jhanjeri, SUS Group of Institutions Tangori, SASIIT, Mohali, Baba Farid Group Of Institutions- Bathinda, Bhai Gurdas Group OF Institutes- Sangrur, CT College-Jalandhar, SVIET- Banur, SWIFT College- Rajpura, SGRR Group of Institutions- Dehradun, Indus University- (H.P.), GCET- Khanpur-Punjab, Umalok College of Nursing, VIT- Meerut, Venketeshwara University-Meerut, Dr. IT College-Banur, Shri Sukhmani Group of Institutions, GNFPS, ITI-Kharar, Henderson School, Oakridge International-Mohali are few amongst the list of institutes who have been benefitted by his seminars. He has conducted training programs for the corporate sector and student community all over India & abroad in like Kenya, Tanzania, Uganda, Ghana and Nigeria to name a few. Few more places where this training has fetched its importance are Bahrain, Bali, Cairo, Dubai, Kuala Lumpur and Seattle. List of few client’s benefited from his program are TATA Docomo(India), Su-Kam(India), Coke- Kandhari Breweries (INDIA), Airtel (Kenya, Uganda, Tanzania, Nigeria), Warid (Uganda), Fast Jet Airways (Tanzania), D.H. Impex (Tema, Ghana), IPMC (Accra, Ghana), Ashraf Group(UAE), Mastersupporttech and Chaitanya Hospital to name a few.
                    </p>

                    <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light mt-6">
                        Ritesh has been a Country Head Training in an ERP Solutions Company earlier. He was responsible for Training and Business Development, Pan-India. The Company had its clients in Pharmaceutical FMCG, F&B, Retail, Electronics & Communication etc. and is proud to be associated with names like Reebok, Disnip, Red Tape, Ranbaxy, Videocon, Haldiram’s, Crocs, Killer, Carlton, Tommy Hilfiger, TAGHeuer to name a few. A Science graduate, Ritesh participated in the ‘Train the Trainer program’ and earned the title of a Level Four Directive Communication (DC) Psychology International Certified Human Capital Trainer, Accredited Facilitator By American Institute of Business Psychology, USA, Beaverton and is involved dedicatedly in international training ever since.
                    </p>

                    <div className="text-base md:text-lg text-gray-600 leading-relaxed font-light mt-6">
                        The certificates contributing to his success include
                        <ul className="list-disc list-inside space-y-1 mt-2 font-medium">
                            <li>DYNAMIC SPEAKING Certification, AIOBP, Beaverton, USA.</li>
                            <li>HUMAN DRIVE and MOTIVATION Certification, AIOBP, Beaverton, USA.</li>
                            <li>CURRICULUM DEVELOPMENT Certification, AIOBP, Beaverton, USA. &</li>
                            <li>COLORED BRAIN COMMUNICATION Certification, AIOBP, Beaverton, USA.</li>
                        </ul>
                    </div>

                    <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light mt-6">
                        Ritesh‘s methodology includes a set of proven service principles, leadership rules, culture-building blocks and implementation roadmaps that apply effectively across all industries and cultures. This methodology is easily customized to suit the unique needs of each organization, including all departments and team members from leadership to front-line.
                    </p>

                    <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light mt-6">
                        He is a friend, coach, mentor, counsellor to many who have reposed faith in his abilities to transform many lives that have come in contact with him. Ritesh belongs to Dehradun currently resides in Mohali and has seen the Country in part and parcel and part of the Globe.
                    </p>

                    <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light mt-6">
                        When not travelling, Ritesh can’t be found at his residence with his mother and pets or at the gym. He is an adventure freak and loves driving. He always looks forward to indulging himself in a Sport/adventure that teaches Focus, Determination, Analytical skills, Concentration, Grace of both mind and body, and the ability to come out the best against all odds.
                    </p>
                </div>

                {/* 3. The "Learn More" Button */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-6 text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                    {isExpanded ? 'Show Less' : 'Learn More'}
                </button>
            </div>
        </section>
    )
}

export default AboutSection;