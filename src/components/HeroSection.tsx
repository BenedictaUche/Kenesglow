
import Navbar from './Navbar';
import keneRestaurant from '../assets/images/brands/kene-restaurant.mp4';

const HeroSection = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="relative bg-[#1a1a1a] h-screen w-full flex flex-col items-center justify-center text-center">
                {/* Background Video */}
                <video
                    src={keneRestaurant}
                    loop
                    autoPlay
                    playsInline
                    muted
                    className="absolute inset-0 h-full w-full object-cover mix-blend-overlay"
                ></video>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                    {/* Name */}
                    <h1 className="text-white text-5xl md:text-[120px] font-serif mb-4">
                        Kene's Glow
                    </h1>

                    {/* Subtext */}
                    <p className="text-gray-300 text-lg md:text-xl font-light uppercase tracking-wide mb-8">
                        Attracting The Best
                    </p>
                </div>

                {/* Centered Image */}
                {/* <img
                    src={keneSitting}
                    alt="Kene sitting"
                    className="absolute bottom-[-10%] w-[500px] h-[600px] object-cover rounded-md shadow-lg"
                    style={{ transform: 'translateX(-50%)', left: '50%' }}
                /> */}

                {/* Spacing to Prevent Overlap */}
                {/* <div className="relative z-10 h-[300px]"></div> */}
            </div>

            {/* Navbar */}
            <Navbar />
        </>
    );
};

export default HeroSection;
