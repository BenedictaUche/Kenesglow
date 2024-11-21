// import React from 'react'
// import street from '../assets/street.mp4'
import keneMirror from '../assets/images/brands/kene-mirror.mp4'

const Mantra = () => {
  return (
    <div className="opacity-90 relative">
      {/* Background Video */}
      <video
        src={keneMirror}
        loop
        autoPlay
        playsInline
        muted
        className="h-screen w-full object-cover"
        style={{ inset: '-488.75px auto auto' }}
      ></video>

      {/* Text Overlay */}
      <div
        className="absolute"
        style={{
          left: '50%',
          top: '20%',
          width: '70%',
          transform: 'translate(-50%, 0) rotate(355deg)',
        }}
      >
        <p className="text-[6vw] md:text-[5vw] lg:text-[6vw] text-white text-yellowtail bg-transparent text-center leading-relaxed">
          I believe that style can't be possessed, only discovered.

          &nbsp;I love the process of helping women see the beauty they already
          possess.
          <br />
        </p>
      </div>
    </div>
  );
};

export default Mantra
