
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
import Trending from "@/components/Trending";
import { motion} from "framer-motion";
import { useInView } from "react-intersection-observer";


const componentVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 3,
    y: 0,
    transition: {
      duration: 1.5,
    },
  },
};



const Home = () => {
  return (
    <>
      <AnimatedComponent>
        <HeroSection />
      </AnimatedComponent>
      <AnimatedComponent>
        <Intro />
      </AnimatedComponent>
      <AnimatedComponent>
        <Brands />
      </AnimatedComponent>
      <AnimatedComponent>
        <Mantra />
      </AnimatedComponent>
      <AnimatedComponent>
        <MarqueOne />
      </AnimatedComponent>
      <AnimatedComponent>
        <QuickLinks />
      </AnimatedComponent>
      <AnimatedComponent>
        <Trending />
      </AnimatedComponent>
      <AnimatedComponent>
        <Gallery />
      </AnimatedComponent>
      <AnimatedComponent>
        <Stats />
      </AnimatedComponent>
      <AnimatedComponent>
        <Consultation />
      </AnimatedComponent>
      <AnimatedComponent>
        <Testimonials />
      </AnimatedComponent>
      <AnimatedComponent>
        <Footer />
      </AnimatedComponent>
      <AnimatedComponent>
        <Subfooter />
      </AnimatedComponent>
    </>
  );
};

export default Home;

function AnimatedComponent({ children }: any) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={componentVariants}
    >
      {children}
    </motion.div>
  );
}
