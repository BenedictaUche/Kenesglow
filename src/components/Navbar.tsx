import { Menu, Instagram, X } from "lucide-react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Large Screen Navbar */}
      <div className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="flex items-center justify-between px-4 md:px-16 lg:px-24">
          {/* Hamburger Icon - Mobile only */}
          <div className="md:hidden">
            <button
              className="p-2 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-8 h-8 text-white" strokeWidth={1.5} />
              ) : (
                <Menu className="w-8 h-8 text-white" strokeWidth={1.5} />
              )}
            </button>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex space-x-10 lg:space-x-16 items-center">
            <a href="#intro" className="text-white hover:text-gray-300 text-sm lg:text-base uppercase tracking-wider font-light transition-colors duration-300">About</a>
            <a href="#about" className="text-white hover:text-gray-300 text-sm lg:text-base uppercase tracking-wider font-light transition-colors duration-300">Media Kit</a>
            <div className="h-6 w-px bg-white/30 mx-2"></div>
            <a href="#contact" className="text-white hover:text-gray-300 text-sm lg:text-base uppercase tracking-wider font-light transition-colors duration-300">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 items-center">
            <a href="https://www.instagram.com/kenesgloww?igsh=MWV4NGRqbGxpb3BhdQ==" target="_blank" rel="noopener noreferrer" className="group">
              <Instagram className="w-4 h-4 text-white group-hover:text-gray-300 transition-colors duration-300"/>
            </a>
            <a href="https://www.tiktok.com/@kenesgloww?_t=ZM-8vprneCCQUv&_r=1" target="_blank" rel="noopener noreferrer" className="group">
              <FontAwesomeIcon icon={faTiktok} className="w-4 h-4 text-white group-hover:text-gray-300 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md pt-24 px-8 flex flex-col items-center space-y-12">
          <a
            href="#intro"
            className="text-white text-2xl uppercase tracking-widest font-light w-full text-center border-b border-white/10 pb-4"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#about"
            className="text-white text-2xl uppercase tracking-widest font-light w-full text-center border-b border-white/10 pb-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Media Kit
          </a>
          <a
            href="#contact"
            className="text-white text-2xl uppercase tracking-widest font-light w-full text-center border-b border-white/10 pb-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>

          <div className="flex space-x-8 pt-8">
            <a href="https://www.instagram.com/kenesgloww" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a href="https://www.tiktok.com/@kenesgloww" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
