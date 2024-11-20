import React from 'react'
import chineseGirl from '../assets/images/chinese-girl.gif'
import keneSipping from '../assets/images/kene-sipping.png'

const Intro = () => {
  return (
    <div className='flex justify-between items-center mt-40 h-screen '>
        <div>
            <img src={chineseGirl} alt="Chinese girl" className='w-2/3 h-[80vh]' />
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-yellowtail text-[38px] font-light'>Welcome, Friends</p>
            <h1 className='uppercase text-[150px] w-[600px] text-center font-light'>Hello, I'm Kene</h1>
            <p className='text-xl w-[560px] text-center leading-9 tracking-normal'>Founder. Creative. Designer. Artist. World traveler. I'm here to take you along with me as we explore sustainable fashion, business, creativity, and see the world... together.</p>
        </div>
        <div className='w-[24%] relative'>
            <img src={keneSipping} alt="Kene sipping" className='absolute right-0 top-0 bottom-0 h-[80vh] object-fit object-center' />
        </div>
    </div>
  )
}

export default Intro
