import React from 'react'
import Navbar from './Navbar'
import imageKene from '../assets/images/gif-cut.gif'
import keneSitting from '@/assets/images/kene-white.png'
import { Button } from './ui/button'


const HeroSection = () => {
    return (
        <div className="bg-black h-[150vh] w-full bg-gradient-to-r from-slate-800 to-slate-900 bg-cover bg-center relative">
            <img src={imageKene} alt="kene" className='h-full w-full object-cover absolute mix-blend-overlay' />
            <div className="px-24 py-36 flex flex-col items-center align-middle justify-center text-center">
                <h1 className='text-9xl text-white uppercase'>Kene's Glow</h1>
                {/* <p className='text-3xl text-white font-light mt-5'>Explore my journey in fashion, travel, and women empowerment while discovering my business ventures and coaching services.</p> */}
                <p className='text-[21px] text-white font-medium mt-5 w-[60%]'>Intentional content creation, social media coaching, and photography for brands who want captivating, story-driven content. </p>
                {/* <Button className='bg-white py-4 px-10 text-lg text-black mt-6'>See More</Button> */}
                <div className=''>
                    <div className="flex justify-center z-50 w-full h-64 absolute bottom-[25rem] left-0  bg-[url('/assets/images/girl-green.png')] bg-no-repeat bg-cover  ">
                        <img src={keneSitting} alt="Kene sitting" className='w-[700px] h-[800px]' />
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default HeroSection
