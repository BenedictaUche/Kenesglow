import chineseGirl from '../assets/images/chinese-girl.gif';
import keneSipping from '../assets/images/kene-sipping.png';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';
import keneBeach from '../assets/images/brands/kene-beach.mp4';

const Intro = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:mt-20 lg:h-screen space-y-8 lg:space-y-0">
      {/* Left Circles */}
      <div className="flex flex-col items-center space-y-4">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
          <video
            src={keneBeach}
            loop
            autoPlay
            playsInline
            muted
            className="h-full w-full object-cover"
          ></video>
        </div>
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
          <img
            src={chineseGirl}
            alt="Chinese girl"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Center Text */}
      <div className="flex flex-col items-center justify-center space-y-4 text-center lg:w-2/4">
        <p className="text-yellowtail text-[5vw] md:text-[3vw] font-light">
          Welcome, Friends
        </p>
        <h1 className="uppercase text-[12vw] md:text-[6vw] font-light leading-[1.1]">
          Hello, I'm Kene
        </h1>
        <p className="text-lg md:text-xl lg:w-3/4 leading-8 tracking-normal">
          Founder. Content Creator. Host. Model. YouTuber. Coach. Based in
          Lagos, Nigeria, I'm passionate about guiding others to attract and
          embrace the best in life. Through my content, I share insights on
          premium living, fashion, relationships, and personal growth.
        </p>
        <Button className="bg-transparent border-2 border-black text-black rounded-none py-4 px-6 uppercase text-lg md:text-2xl tracking-wide flex items-center hover:bg-black hover:text-white">
          My Story <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </Button>
      </div>

      {/* Right Circles */}
      <div className="flex flex-col items-center space-y-4">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
          <img
            src={keneSipping}
            alt="Kene sipping"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
          <video
            src={keneBeach}
            loop
            autoPlay
            playsInline
            muted
            className="h-full w-full object-cover"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Intro;
