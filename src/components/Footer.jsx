import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#77a50c] text-white py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Description */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold">Multimedia Agency</h2>
          <p className="text-sm mt-2">
            Delivering innovative multimedia solutions for all your creative needs.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="mb-4 md:mb-0">
          <ul className="flex flex-wrap space-x-4 text-sm justify-center">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/portfolio" className="hover:underline">Portfolio</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 text-xl">
          <a href="https://facebook.com" target="_blank" >
            <FaFacebook className="hover:text-[#4267B2]" />
          </a>
          <a href="https://twitter.com" target="_blank" >
            <FaTwitter className="hover:text-[#1DA1F2]" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-[#C13584]" />
          </a>
          <a href="https://linkedin.com" target="_blank" >
            <FaLinkedin className="hover:text-[#0077B5]" />
          </a>
        </div>
      </div>

      {/* Copyright Information */}
      <div className="mt-8 text-center text-sm border-t border-white pt-4">
        <p>&copy; {new Date().getFullYear()} Multimedia Agency. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
