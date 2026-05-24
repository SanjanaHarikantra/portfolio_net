import React from 'react';
// src/components/Navbar.jsx
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-black text-white fixed w-full top-0 shadow z-50">
      <h1 className="text-xl  font-bold text-purple-500">  Sanjana</h1>
      <ul className="hidden md:flex gap-4 text-sm">
        <li><a href="#home" className="hover:text-pink-400">Home</a></li>
        <li><a href="#about" className="hover:text-pink-400">About</a></li>
        <li><a href="#skills" className="hover:text-pink-400">Skills</a></li>
        <li><a href="#projects" className="hover:text-pink-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-pink-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
