import Hero from "../components/Hero";
import EventsCarousel from "../components/EventsCarousel";
import VideoTagline from "../components/VideoTagline";
import ResultsSection from "../components/ResultsSection";
import HeroBentoSection from "../components/HeroBentoSection";
import Reviews from "../components/Reviews";
import PillarsSection from "../components/Pillars-Section";
import EventSlider from "../components/EventSlider";
import ScrollTopArrow from "../components/ScrollTopArrow";

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
     <ScrollTopArrow />
    </div>
  );
};

export default Homepage;
