import { Button } from './ui/button';
import keneStanding from '../assets/images/kene-standing.png';

const Consultation = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto md:h-screen bg-black text-white">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
        <h3 className="uppercase text-sm tracking-wide text-gray-400 mb-2">Work With Me</h3>
        <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-4">
          Brand Partnerships <br /> & Collaborations
        </h1>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
          Sartorial flexitarian drinking vinegar chicharrones, live-edge irony cliche
          normcore gentrify pitchfork put a bird on it scenester. Tbh coloring book.
        </p>
        <Button className="bg-transparent border w-[12rem] h-[3.5rem] rounded-none border-gray-400 text-white py-3 px-6 hover:bg-gray-700">
          Get More Info →
        </Button>
        <div className="mt-8 text-sm text-gray-500">
          <p className="uppercase tracking-wide mb-2">Recently:</p>
          <ul className="list-none space-y-1">
            <li>Reformation</li>
            <li>Wildling</li>
            <li>Serena & Lily</li>
            <li>Few Moda</li>
            <li>Balenciaga</li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-end">
        <img
          src={keneStanding}
          alt="Person lying down"
          className="w-full h-auto object-cover md:h-screen md:w-auto"
        />
      </div>
    </div>
  );
};

export default Consultation;
