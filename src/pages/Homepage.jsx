import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EventsCarousel from "../components/EventsCarousel";
import VideoTagline from "../components/VideoTagline";
import ResultsSection from "../components/ResultsSection";
import HeroBentoSection from "../components/HeroBentoSection";
import Reviews from "../components/Reviews";

const Homepage = () => {
  return (
    <div>
     <Navbar />
     <Hero />
     <EventsCarousel />
     <VideoTagline />
     <ResultsSection />
     <HeroBentoSection />
     <Reviews />
    </div>
  );
};

export default Homepage;
