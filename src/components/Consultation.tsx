import React from 'react'
import { Button } from './ui/button'
import keneStanding from '../assets/images/kene-standing.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

const Consultation = () => {
  return (
    <div className='flex w-full h-screen mt-64'>
        <div className='w-1/2 bg-black text-white flex flex-col justify-center items-center space-y-8'>
            <h2 className='text-lg font-medium'>KENE</h2>
            <h1 className='text-[100px] text-center capitalize w-[500px] leading-[5.5rem] '>Your <span className='text-yellowtail'>brilliant </span>brand story</h1>
            <p className='text-xl w-[660px] tracking-normal leading-9'>I'm baby farm-to-table sartorial helvetica, migas marfa paleo chambray normcore 8-bit bushwick roof party truffaut banjo actually. Chillwave gluten-free master cleanse tumblr meh kinfolk distillery tacos cloud.</p>
            <Button className='uppercase bg-[#F6D7BD] hover:bg-[#F6D7BD]/50 text-black rounded-none py-8 px-6 text-xl'>Schedule a consult <FontAwesomeIcon icon={faCaretUp} className='transform rotate-90' /></Button>
        </div>
        <div className='w-1/2'>
            <img src={keneStanding} alt="Lady in yellow dress standing holding a bag" className='w-full h-full object-cover object-center' />
        </div>
    </div>
  )
}

export default Consultation
