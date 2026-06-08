import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/95 text-white shadow backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a
          href="#home"
          className="text-xl font-bold text-purple-400"
          onClick={() => setIsOpen(false)}
        >
          Sanjana
        </a>

        <ul className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-pink-400">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white transition hover:bg-white/10 md:hidden"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <ul className="border-t border-white/10 px-5 pb-4 text-sm font-medium md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-md px-2 py-3 transition hover:bg-white/10 hover:text-pink-400"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
