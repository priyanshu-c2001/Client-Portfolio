import Hero from "../components/Hero";
import EventsCarousel from "../components/EventsCarousel";
import VideoTagline from "../components/VideoTagline";
import ResultsSection from "../components/ResultsSection";
import HeroBentoSection from "../components/HeroBentoSection";
import Reviews from "../components/Reviews";
import PillarsSection from "../components/Pillars-Section";
import EventSlider from "../components/EventSlider";

const Homepage = () => {
  return (
    <div>
     <Hero />
     <EventsCarousel />
     <VideoTagline />
     <ResultsSection />
     <HeroBentoSection />
     <Reviews />
     <PillarsSection />
     <EventSlider />
    </div>
  );
};

export default Homepage;
