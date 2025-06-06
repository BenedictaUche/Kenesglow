import { useState, useEffect } from "react";

import runway from "../assets/images/quickLinks/runway.mp4";
import girlBag from "../assets/images/quickLinks/girl-bag.jpg";
import asianGirl from "../assets/images/quickLinks/asian-girl.jpg";
import bag from "../assets/images/quickLinks/bag.jpg";
import blackDress from "../assets/images/quickLinks/black-dress.jpg";
import girlBrown from "../assets/images/quickLinks/girl-brown.jpg";
import girlWhite from "../assets/images/quickLinks/girl-white.jpg";
import redBag from "../assets/images/quickLinks/red-bag.jpg";
import seduceDress from "../assets/images/quickLinks/seduce-dress.jpg";
import tallGirl from "../assets/images/quickLinks/tall-girl.jpg";


const QuickLinks = () => {
  const images = [
    { id: 1, image: girlBag },
    { id: 2, image: asianGirl },
    { id: 3, image: bag },
    { id: 4, image: blackDress },
    { id: 5, image: girlBrown },
    { id: 6, image: girlWhite },
    { id: 7, image: redBag },
    { id: 8, image: seduceDress },
    { id: 9, image: tallGirl },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen">
      {/* Video Element */}
      <video
        src={runway}
        loop
        autoPlay
        playsInline
        muted
        className="h-screen w-full object-cover"
      ></video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-between px-8 lg:px-24 text-white">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="uppercase text-sm tracking-wide text-white font-medium">
            Quick Links
          </h2>
          <div className="space-y-12">
            {/* Section 1 */}
            <div>
              <a
                href="https://linktr.ee/anikelaofficial?fbclid=PAZXh0bgNhZW0CMTEAAabs5PPQG_UcfceAUpJyjwte9pvPjnfiXG__lqX4TWIsqa0Q5nxVifDZHVA_aem_YOxbiwlgyNN_i9LRNhQp7g"
                className="text-4xl font-bold"
              >
                Anikela
              </a>
              <p className="text-gray-300 mt-2">
                A platform that showcases a fashion and lifestyle brand focused
                on minimalist designs and luxury aesthetics.
              </p>
              <hr className="border-t border-gray-500 mt-4" />
            </div>
            {/* Section 2 */}
            <div>
              <a
                href="https://www.instagram.com/loveisagame_series/"
                className="text-4xl font-bold"
              >
                Love is a game series
              </a>
              <p className="text-gray-300 mt-2">
                All about love and relationships, exploring if they can handle
                the heat. It's real, relatable, and full of heart
              </p>
              <hr className="border-t border-gray-500 mt-4" />
            </div>
            {/* Section 3 */}
            <div>
              <a
                href="https://www.youtube.com/@kenesgloww"
                className="text-4xl font-bold"
              >
                On Youtube
              </a>
              <p className="text-gray-300 mt-2">
                A channel that focuses on inspiring premium living, personal
                growth, fashion, and lifestyle content. It provides tips and
                insights for enhancing everyday life and embracing elegance
              </p>
            </div>
          </div>
        </div>

        {/* Right Section slide*/}

        <div className="hidden lg:block lg:w-1/3">
          <div className="relative h-full">
            <img
              src={images[currentImage].image}
              alt="Slide"
              className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
