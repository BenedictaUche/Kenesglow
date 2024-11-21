
import HeroSection from "@/components/HeroSection";
import Intro from "@/components/Intro";
import Brands from "@/components/Brands";
import Consultation from "@/components/Consultation";
import Footer from "@/components/Footer";
import Subfooter from "@/components/Subfooter";
import Testimonials from "@/components/Testimonials";
import Mantra from "@/components/Mantra";
import MarqueOne from "@/components/MarqueOne";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";
import QuickLinks from "@/components/QuickLinks";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Intro />
      <Brands />
      <Mantra />
      <MarqueOne />
      <QuickLinks />
      <Gallery />
      <Stats />
      <Consultation />
      <Testimonials />
      <Footer />
      <Subfooter />
    </>
  );
};

export default Home;
