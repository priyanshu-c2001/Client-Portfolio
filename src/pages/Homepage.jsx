import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EventsCarousel from "../components/EventsCarousel";
import VideoTagline from "../components/VideoTagline";
import ResultsSection from "../components/ResultsSection";
import HeroBentoSection from "../components/HeroBentoSection";
import Reviews from "../components/Reviews";
import PillarsSection from "../components/pillars-section";
import EventSlider from "../components/EventSlider";
import Footer from "../components/Footer";
import FooterCTA from "../components/FooterCTA";

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
     <PillarsSection />
     <EventSlider />
     <FooterCTA />
     <Footer />
    </div>
  );
};

export default Homepage;
