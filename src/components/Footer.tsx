import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full px-6 md:px-12 lg:px-20 py-12 flex flex-col h-screen lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Left Section */}
      <div className="text-center lg:text-left flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl lg:text-[90px] tracking-wider uppercase">Kene's Glow</h1>
        <p className="text-sm md:text-base lg:text-lg max-w-lg mt-4 leading-relaxed text-center">
          Intentional content creation, social media coaching, and photography for brands who want
          authentic, vibrant lifestyle content. Based in the South of France but always on a plane
          somewhere, anyway.
        </p>
      </div>

      {/* Right Section */}
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl lg:text-[70px] text-yellowtail">Let's Collaborate</h2>
        <p className="text-base md:text-2xl mt-4">hello@kene.com</p>
        <ul className="flex gap-6 justify-center items-center mt-6">
          <li>
            <a
              href="https://www.instagram.com/kenesglow/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/kenesgloww/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/kenesgloww/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
