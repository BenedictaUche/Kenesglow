
import keneMirror from "../assets/images/brands/kene-mirror.mp4";

const Mantra = () => {
  return (
    <div className="opacity-90 relative h-screen w-full">
      {/* Video Background */}
      <video
        src={keneMirror}
        loop
        autoPlay
        playsInline
        muted
        className="absolute h-full w-full object-cover"
      />

      {/* Mantra Text */}
      <div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[75%] lg:w-[50%] xl:w-[40%]"
      >
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-[50px] text-white text-yellowtail text-center bg-transparent">
          I believe that style can't be possessed, only discovered.
          <br />
          I love the process of helping women see the beauty they already
          possess.
        </p>
      </div>
    </div>
  );
};

export default Mantra;
