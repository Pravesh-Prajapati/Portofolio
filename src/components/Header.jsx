import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['home', 'about', 'projects', 'contact'];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gradient-to-r from-gray-900 to-black font-bold text-white py-6 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <div className="text-xl md:text-2xl lg:text-2xl font-extrabold">
          Pravesh<span className="text-blue-500"> | MERN Stack Developer</span>
        </div>

        {/* Hamburger for lg screens and below */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className={`absolute lg:relative top-20 lg:top-0 right-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent lg:flex lg:space-x-8 items-center lg:py-0 py-6 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-8 items-center">
            {navItems.map((item) => (
              <li key={item} className="w-full lg:w-auto text-center lg:text-left">
                <Link
                  to={item}
                  smooth={true}
                  duration={600}
                  onClick={() => { setActiveSection(item); setIsMenuOpen(false); }}
                  className={`capitalize hover:text-blue-400 text-sm md:text-[20px] lg:text-[17px] cursor-pointer transition-colors duration-300 ${activeSection === item ? 'text-blue-500 font-semibold' : 'text-gray-400'}`}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li className="w-full lg:w-auto text-center lg:text-left mt-4 lg:mt-0">
              <a
                href="https://drive.google.com/file/d/196Hln8DlNfhcKFYTfky91xBHuos90MNX/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white py-2 px-3 md:px-3 md:py-2 rounded-lg hover:bg-blue-600 transition-all"
              >View Certificate </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
