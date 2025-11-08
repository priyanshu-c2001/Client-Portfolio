const FooterCTA = () => {
    return (
        <section
            className="relative w-full bg-cover bg-center bg-no-repeat py-20 md:py-32 px-4"
            style={{
                backgroundImage: "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=750,fit=crop/mnlJ8BlwqNFWage7/img20250213111626_01-dJob2Rny8xIJ9VPe.jpg')", // 👈 Replace with your actual image path
            }}
        >
            {/* Optional dark overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
                <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 md:mb-8 leading-tight">
                    Ready to live an extraordinary life?
                </h2>

                <p className="text-lg md:text-xl text-gray-200 mb-8 md:mb-12 max-w-2xl">
                    Now is your time. Connect with us to learn more.
                </p>

                <button className="px-8 md:px-10 py-3 md:py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300">
                    Enroll Now
                </button>
            </div>
        </section>
    );
};

export default FooterCTA;
