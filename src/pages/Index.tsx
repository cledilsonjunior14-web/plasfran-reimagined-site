import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FuneralPlansSection from "@/components/FuneralPlansSection";
import PlansSection from "@/components/PlansSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import MissionSection from "@/components/MissionSection";
import FarewellsSection from "@/components/FarewellsSection";
import LocationsSection from "@/components/LocationsSection";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FuneralPlansSection />
        <PlansSection />
        <TestimonialsSection />
        <StatsSection />
        <MissionSection />
        <FarewellsSection />
        <LocationsSection />
        <BenefitsSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
