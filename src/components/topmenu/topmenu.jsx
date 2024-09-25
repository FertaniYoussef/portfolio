import React, { useState } from 'react';
import { Hexagon } from "lucide-react";
import logo from "../../images/logo.png";

const TopMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-[#0a192f] text-white font-semibold sticky top-0 z-50">
            <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center">
                    <img src={logo} alt="logo" className="w-1/6" />
                </div>

                {/* Burger menu for small screens */}
                <div className="md:hidden">
                    <button 
                        onClick={toggleMenu} 
                        aria-label="Toggle menu" 
                        className="text-white focus:outline-none w-8 h-8 relative"
                    >
                        <span className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
                        <span className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-1.5' : 'translate-y-1'}`}></span>
                    </button>
                </div>

                {/* Menu items for larger screens */}
                <div className="hidden md:flex items-center space-x-6">
                    <a href="#about" className="text-lg hover:text-[#64ffda] transition-colors">About</a>
                    <a href="#experience" className="text-lg hover:text-[#64ffda] transition-colors">Experience</a>
                    <a href="#work" className="text-lg hover:text-[#64ffda] transition-colors">Work</a>
                    <a href="#contact" className="text-lg hover:text-[#64ffda] transition-colors">Contact</a>
                </div>
            </div>

            {/* Menu items for small screens */}
            {isMenuOpen && (
                <div className="md:hidden ">
                    <div className="flex flex-col items-center space-y-4 py-4">
                        <a href="#about" className="text-lg hover:text-[#64ffda] transition-colors">About</a>
                        <a href="#experience" className="text-lg hover:text-[#64ffda] transition-colors">Experience</a>
                        <a href="#work" className="text-lg hover:text-[#64ffda] transition-colors">Work</a>
                        <a href="#contact" className="text-lg hover:text-[#64ffda] transition-colors">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default TopMenu;