// import React from 'react'
// import street from '../assets/street.mp4'
import keneMirror from '../assets/images/brands/kene-mirror.mp4'

const Mantra = () => {
  return (
    <div className='opacity-90 relative'>
      <video src={keneMirror} loop  autoPlay playsInline muted className='h-screen w-full' style={{inset: '-488.75px auto auto', objectFit: 'cover'}}>

      </video>
      <div className='left-[548px] top-[125px]  w-[568px] h-[313px] absolute' style={{transform: 'scale(1, 1) translate(0px, 0px) rotate(355deg)'}}>
      <p className="text-[50px] text-white text-yellowtail bg-transparent h-full left-0 top-0 w-full">I believe that style can't be possessed, only discovered.<br />&nbsp;I love the process of helping women see the beauty they already possess.<br /></p>
      </div>

    </div>
  )
}

export default Mantra
