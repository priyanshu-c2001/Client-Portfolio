"use client"

const EventCard = ({ event }) => {
    return (
        <div className="relative h-80 overflow-hidden rounded-lg bg-gradient-to-br from-pink-400 via-purple-500 to-purple-700 md:h-96 md:rounded-2xl">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="h-full w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-purple-900/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-between p-4 md:p-8">
                {/* Left Column */}
                <div className="max-w-2xl">
                    {/* Label */}
                    <div className="mb-4 flex items-center gap-2 md:mb-6">
                        <div className="h-1.5 w-1.5 rounded-full bg-white md:h-2 md:w-2" />
                        <span className="font-mono text-xs font-bold text-white tracking-wider md:text-sm">{event.label}</span>
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 text-balance text-2xl font-bold text-white leading-tight md:mb-4 md:text-4xl">
                        {event.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-4 hidden max-w-xl text-sm text-white/90 leading-relaxed md:mb-8 md:block md:text-base">
                        {event.description}
                    </p>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    {/* Event Details */}
                    <div className="flex flex-wrap gap-4 md:gap-12">
                        <div>
                            <p className="mt-0.5 text-xs font-semibold text-white md:text-base">{event.date}</p>
                        </div>
                        <div>
                            <p className="mt-0.5 text-xs font-semibold text-white md:text-base">{event.place}</p>
                        </div>
                        <div>
                            <p className="mt-0.5 text-xs font-semibold text-white md:text-base">{event.timezone}</p>
                        </div>
                    </div>

                    {/* Brand Box */}
                    <div className="bg-black/80 px-4 py-4 rounded-lg text-right md:px-6 md:py-6">
                        <p className="text-xs text-white/70 uppercase tracking-wide font-mono">{event.brandBox.instructor}</p>
                        <h4 className="mt-1 text-sm font-bold text-white leading-tight md:mt-2 md:text-xl">
                            {event.brandBox.eventName.split(" ").map((word, idx) => (
                                <div key={idx}>{word}</div>
                            ))}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard;