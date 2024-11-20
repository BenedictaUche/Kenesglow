import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <div className="border-b-gray-400 border-b-[1px] flex flex-col lg:flex-row w-full items-center mt-4 space-y-4 lg:space-y-0">
      {/* Brands Title */}
      <p className="text-2xl md:text-3xl lg:text-4xl w-full lg:w-1/4 text-yellowtail pl-4 text-center lg:text-left">
        Brands Engaged
      </p>

      {/* Marquee Section */}
      <Marquee className="w-full lg:w-3/4" loop={0}>
        <h1 className="text-2xl md:text-5xl lg:text-[110px] text-center whitespace-nowrap">
          Beauty Hut · BRIT + CO · Topicals · CUBE 65 · HUB BEAUTY ·
        </h1>
      </Marquee>
    </div>
  );
};

export default Brands;
