import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import CoupleSection from "@/components/CoupleSection";
import EventDetails from "@/components/EventDetails";
import MuhurthamSection from "@/components/MuhurthamSection";
import StorySection from "@/components/StorySection";
import GallerySection from "@/components/GallerySection";
import VenueSection from "@/components/VenueSection";
import BlessingsSection from "@/components/BlessingsSection";
import RSVPSection from "@/components/RSVPSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Countdown from "@/components/Countdown";
import FlowerPetals from "@/components/FlowerPetals";
import ScrollToTop from "@/components/ScrollToTop";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      {/* Floating petals — renders nothing on SSR, activates on client */}
      <FlowerPetals />

      {/* Navigation */}
      <Navbar />

      <main id="main-content">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Traditional Welcome */}
        <WelcomeSection />

        <SectionDivider variant="simple" className="max-w-md mx-auto px-6" />

        {/* 3. Couple Section */}
        <CoupleSection />

        {/* 4. Countdown */}
        <div
          style={{
            borderTop: "1px solid rgba(198,154,59,0.15)",
            borderBottom: "1px solid rgba(198,154,59,0.15)",
          }}
        >
          <Countdown />
        </div>

        {/* 5. Events */}
        <EventDetails />

        {/* 6. Muhurtham Highlight */}
        <MuhurthamSection />

        {/* 7. Our Story */}
        <StorySection />

        {/* 8. Gallery */}
        <GallerySection />

        {/* 9. Venue */}
        <VenueSection />

        {/* 10. Blessings Quote */}
        <BlessingsSection />

        {/* 11. RSVP */}
        <RSVPSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to top button */}
      <ScrollToTop />
    </>
  );
}
