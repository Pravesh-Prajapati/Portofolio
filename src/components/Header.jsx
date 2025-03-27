import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const navItems = ['home','about', 'projects', 'contact'];

  return (
    <header className="bg-gradient-to-r from-gray-900 to-black font-bold text-white py-6 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side - Name and Title */}
        <div className="text-2xl md:text-3xl font-extrabold">
          Pravesh<span className="text-blue-500"> | MERN Stack Developer</span>
        </div>

        {/* Right Side - Navigation */}
        <nav>
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={600}
                  onClick={() => setActiveSection(item)}
                  className={`
                    capitalize 
                    hover:text-blue-400 
                    text-lg md:text-xl
                    cursor-pointer
                    transition-colors 
                    duration-300
                    ${activeSection === item 
                      ? 'text-blue-500 font-semibold' 
                      : 'text-gray-400'}
                  `}
                >
                  {item}
                </Link>
              </li>
            ))}
             <li>
              <a
                href="https://drive.google.com/file/d/196Hln8DlNfhcKFYTfky91xBHuos90MNX/view?usp=drive_link" // Replace with actual link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
              >
                View Certificate
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
