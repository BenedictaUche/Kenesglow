import Navbar from "./Navbar";
import keneRestaurant from "../assets/images/brands/kene-restaurant.mp4";
import keneYellow from "@/assets/images/kene-yellow.png";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-black min-h-screen w-full bg-gradient-to-r from-slate-800 to-slate-900 bg-cover bg-center relative">
        {/* Background Video */}
        <video
          src={keneRestaurant}
          loop
          autoPlay
          playsInline
          muted
          className="absolute inset-0 w-full h-full object-cover z-10"
        />

        {/* Light gray overlay */}
        <div className="absolute inset-0 bg-gray-300 opacity-30 z-20"></div>

        {/* Content */}
        <div className="relative z-30 px-6 md:px-12 lg:px-24 py-24 flex flex-col items-center text-center space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-9xl text-white uppercase font-bold">
            Kene's Glow
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-white font-medium max-w-2xl">
            Intentional content creation, social media coaching, and photography
            for brands who want captivating, story-driven content.
          </p>

          {/* Floating Image */}
          <div className="relative w-full flex justify-center mt-10">
            <div className="bg-white p-4 md:p-6 lg:p-8 shadow-lg">
              <img
                src={keneYellow}
                alt="Kene sitting"
                className="w-64 h-auto md:w-96 lg:w-[600px] lg:h-[800px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />
    </>
  );
};

export default HeroSection;
