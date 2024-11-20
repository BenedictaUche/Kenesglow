import React from 'react'
import Marquee from "react-fast-marquee";

const MarqueOne = () => {
  return (
    <div className='border-b-gray-400 border-b-[1px]'>
        <Marquee loop={0} direction='right'>
            <h1 className='text-[110px]'>TRAVEL / LIFESTYLE / FASHION / TRAVEL / WOMEN EMPOWERMENT /  </h1>
</Marquee>
    </div>
  )
}

export default MarqueOne
