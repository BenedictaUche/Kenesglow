import keneBed from '../assets/images/Kene-bed.png'
import keneWhite from '../assets/images/Kene-white.png'
import keneSipping from '../assets/images/Kene-sipping.png'
import girlGreen from '../assets/images/girl-green.png'
import keneYellow from '../assets/images/Kene-yellow.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <footer className=" bg-black text-white h-screen w-full px-20 flex justify-center items-center">
        <div>
          <h1 className='text-[90px] uppercase'>Kene's Glow</h1>
          <p className='text-clip w-2/3 text-center'>Intentional content creation, social media coaching, and photography for brands who want authentic, vibrant lifestyle content. Based in the South of France but always on a plane somewhere, anyway.</p>
        </div>
        <div className='w-full text-center'>
          <h2 className=' text-[100px]'>Get in touch</h2>
          <p className='text-5xl'>hello@kene.com</p>
          <ul className='flex gap-6 justify-center items-center mt-3'>
            <li><a href="https://www.instagram.com/kenesglow/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="https://www.tiktok.com/kenesgloww/" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faTiktok} /></a></li>
            <li><a href="https://www.youtube.com/kenesgloww/" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a></li>
          </ul>
        </div>

      {/* <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2024 Kene Aesthetic. All rights reserved.</p>
      </div> */}
    </footer>
  );
};

export default Footer;
