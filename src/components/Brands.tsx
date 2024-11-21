import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <div className=" flex flex-col lg:flex-row w-full items-center py-6 space-y-4 lg:space-y-0">
      {/* Brands Title */}
      <p className="text-lg md:text-xl lg:text-2xl w-full lg:w-1/4 pl-4 text-center lg:text-left">
        AS SEEN IN:
      </p>

      {/* Marquee Section */}
      <Marquee className="w-full lg:w-3/4" loop={0}>
        <h1 className="text-[50px] md:text-[70px] lg:text-[80px] text-center whitespace-nowrap">
          Beauty Hut · BRIT + CO · Topicals · CUBE 65 · HUB BEAUTY ·
        </h1>
      </Marquee>
    </div>
  );
};

export default Brands;
