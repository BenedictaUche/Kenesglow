
import { Button } from './ui/button';
import keneStanding from '../assets/images/kene-standing.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

const Consultation = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-black text-white flex flex-col justify-center items-center space-y-6 p-6 md:p-12">
        <h2 className="text-base md:text-lg font-medium">KENE</h2>
        <h1 className="text-4xl md:text-6xl lg:text-[100px] text-center capitalize leading-snug md:leading-[5.5rem]">
          Your <span className="text-yellowtail"> {" "}brilliant </span> brand story
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-center md:text-left max-w-prose tracking-normal leading-7 md:leading-9">
          I'm baby farm-to-table sartorial helvetica, migas marfa paleo chambray
          normcore 8-bit bushwick roof party truffaut banjo actually. Chillwave
          gluten-free master cleanse tumblr meh kinfolk distillery tacos cloud.
        </p>
        <Button className="uppercase bg-[#F6D7BD] hover:bg-[#F6D7BD]/50 text-black rounded-none py-4 px-6 md:py-6 md:px-8 text-sm md:text-xl">
          Schedule a consult{' '}
          <FontAwesomeIcon
            icon={faCaretUp}
            className="transform rotate-90 ml-2"
          />
        </Button>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <img
          src={keneStanding}
          alt="Lady in yellow dress standing holding a bag"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Consultation;
