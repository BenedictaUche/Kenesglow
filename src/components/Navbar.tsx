import { motion } from "framer-motion";
import { Menu, Instagram } from "lucide-react";
import tiktok from '@/assets/images/tiktok-icon.svg'
import pinterest from '@/assets/images/pinterest-icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPinterestP, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-transparent z-50">
      <div className="flex items-center justify-between px-4 md:px-10 py-4">
        {/* Hamburger Icon */}
        <div className="">
          <button className="p-2">
            <Menu
              className="w-12 h-12 text-white font-thin"
            />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-12 text-white text-base uppercase">
          <a href="#home" className="hover:opacity-80">Home</a>
          <a href="#about" className="hover:opacity-80">About</a>
          <a href="#about" className="hover:opacity-80">Media Kit</a>
          <a href="#contact" className="hover:opacity-80">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 items-center text-white">
          <a href="#pinterest">
          <FontAwesomeIcon icon={faPinterestP} className="w-4 h-4" />
          </a>
          <a href="#instagram">
            <Instagram className="w-4 h-4"/>
          </a>
          <a href="#tiktok">
          <FontAwesomeIcon icon={faTiktok} className="w-4 h-4"  />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
