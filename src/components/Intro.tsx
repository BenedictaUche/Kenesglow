import chineseGirl from "../assets/images/chinese-girl.gif";
import keneSipping from "../assets/images/kene-sipping.png";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

const Intro = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mt-16 lg:mt-40 h-auto lg:h-screen px-6 lg:px-12">
      {/* Left Image */}
      <div className="w-full lg:w-1/4 flex justify-center mb-8 lg:mb-0">
        <img
          src={chineseGirl}
          alt="Chinese girl"
          className="w-3/4 lg:w-full h-auto max-h-[60vh] lg:max-h-[80vh] object-cover"
        />
      </div>

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center space-y-6 w-full lg:w-3/5 text-center">
        <p className="text-yellowtail text-2xl md:text-3xl lg:text-[38px] font-light">
          Welcome, Friends
        </p>
        <h1 className="uppercase text-4xl md:text-6xl lg:text-[140px] font-light leading-tight lg:leading-[8rem]">
          Hello, I'm Kene
        </h1>
        <p className="text-base md:text-lg lg:text-xl leading-7 md:leading-8 lg:leading-9 tracking-normal max-w-md md:max-w-lg lg:max-w-[560px]">
          Founder. Content Creator. Host. Model. Youtuber. Coach. Based in Lagos, Nigeria, I'm passionate about guiding others to attract and embrace the best in life. Through my content, I share insights on premium living, fashion, relationships, and personal growth.
        </p>
        <Button className="bg-transparent border-2 border-black text-black rounded-none py-4 px-6 md:py-6 md:px-8 lg:py-8 lg:px-10 uppercase text-sm md:text-lg lg:text-2xl tracking-wider flex items-center hover:bg-black hover:text-white">
          My Story <ChevronRight className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
        </Button>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/4 flex justify-center mt-8 lg:mt-0">
        <img
          src={keneSipping}
          alt="Kene sipping"
          className="w-3/4 lg:w-full h-auto max-h-[60vh] lg:max-h-[80vh] object-cover"
        />
      </div>
    </div>
  );
};

export default Intro;
