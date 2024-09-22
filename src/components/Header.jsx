import { useState } from "react"

import { IoMdMenu } from "react-icons/io";
const Header = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className=" h-16 bg-[#77a50c] text-white">
      <div className="flex md:py-4 md:px-2 justify-between items-baseline" >
        {/* Logo */}
        <h1 className="text-xl font-semibold text-center uppercase"> Multimedia <span className="text-black"> Agency </span> Website </h1>

        <nav>
          {/* Navigation Links  */}
          <div className="md:block hidden mr-10">
            <ul className="flex space-x-4 font-semibold">
              <li className="hover:underline"><a href="/"  >Home</a></li>
              <li className="hover:underline"><a href="/about">About</a></li>
              <li className="hover:underline"><a href="/portfolio">Portfolio</a></li>
              <li className="hover:underline"><a href="/contact">Contact</a></li>
              <li className="hover:underline"><a href="#services">Services</a></li>
            </ul>
          </div>
          {/* Mobile Menu Button*/}
          <div className="md:hidden ">
            <button
              onClick={toggleMobileMenu}
            >
              <IoMdMenu className="text-4xl" />
            </button>
          </div>
        </nav>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className=" md:hidden p-7 text-md absolute top-10 right-2 bg-[#77a50c] shadow-lg z-50 rounded-lg">
          <ul className=" ">
            <li className="hover:underline"><a href="/">Home</a></li>
            <li className="hover:underline"><a href="/about">About</a></li>
            <li className="hover:underline"><a href="/portfolio">Portfolio</a></li>
            <li className="hover:underline"><a href="/contact">Contact</a></li>
            <li className="hover:underline"><a href="/services">Services</a></li>
          </ul>
        </div>
      )}


    </header>
  )
}

export default Header 
