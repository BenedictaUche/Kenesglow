
import keneBack from "@/assets/images/kene-back.png";
import keneSipping from "@/assets/images/kene-sipping.png";
import keneStanding from "@/assets/images/kene-standing.png";
import keneWhite from "@/assets/images/kene-white.png";
import keneYellow from "@/assets/images/kene-yellow.png";
import cubeClinics from "@/assets/images/brands/cube-clinics.gif";
import imata from "@/assets/images/brands/imata.jpg";
import beautyHut from "@/assets/images/brands/beautyHut.jpg";
import naturalHair from "@/assets/images/brands/natural-hair.jpg";

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-auto w-full py-10">
      {/* Top Row */}
      <img
        src={imata}
        alt="Selfie of a girl on bed"
        className="w-full h-full object-cover"
      />
      <img
        src={keneWhite}
        alt="A lady reading newspaper"
        className="w-full h-full object-cover"
      />
      <img
        src={keneSipping}
        alt="A lady sipping a drink"
        className="w-full h-full object-cover"
      />

      {/* Middle Row */}
      <img
        src={keneYellow}
        alt="A lady in yellow"
        className="w-full h-full object-cover"
      />
      <img
        src={cubeClinics}
        alt="Main centerpiece"
        className="w-full h-full object-cover sm:col-span-2 lg:col-span-1 row-span-1"
      />
      <img
        src={keneStanding}
        alt="A lady standing"
        className="w-full h-full object-cover"
      />

      {/* Bottom Row */}
      <img
        src={beautyHut}
        alt="A lady in the back"
        className="w-full h-full object-cover"
      />
      <img
        src={keneBack}
        alt="Beauty Hut brand"
        className="w-full h-full object-cover"
      />
      <img
        src={naturalHair}
        alt="A lady standing"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Gallery;
