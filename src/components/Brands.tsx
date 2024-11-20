import React from "react";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <div className="border-b-gray-400 border-b-[1px] flex w-full items-center">
      <p>Brands Engaged: </p>
      <Marquee loop={0}>
        <h1 className="text-[110px]">
          People . BRIT + CO . HUFFPOST . HEINEKEN . HUB BEAUTY . {" "}
        </h1>
      </Marquee>
    </div>
  );
};

export default Brands;
