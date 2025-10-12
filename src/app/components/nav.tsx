'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const leftLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Service', href: '/service' },
  ];

  const rightLinks = [
    { name: 'Resume', href: '/resume' },
    { name: 'Project', href: '/project' },
    { name: 'Contact', href: '/contact' },
  ];

  // === Hide navbar on scroll down, show on scroll up ===
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setVisible(false);
      } else {
        // scrolling up
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[1298px] max-w-[95%] bg-[#1A004A] h-[86px] rounded-[50px] border border-white/20 shadow-lg px-8 md:px-12 flex items-center justify-between transition-transform duration-500 ${
        visible ? 'translate-y-0' : '-translate-y-[120%]'
      }`}
    >
      {/* === LEFT LINKS === */}
      <div className="hidden md:flex items-center space-x-8">
        {leftLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`text-base font-medium px-5 py-2 rounded-full transition-all duration-300 ${
              pathname === link.href
                ? 'bg-white text-[#1A004A] font-semibold'
                : 'text-white hover:bg-white/20'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* === CENTER LOGO === */}
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1A004A] font-bold text-sm">
          BM
        </div>
        <span className="text-white font-extrabold text-lg leading-tight text-center">
          <Image
            src="/portfoliologo.png"
            alt="Logo"
            width={100}
            height={100}
            className="object-contain brightness-10 invert"
          />
        </span>
      </div>

      {/* === RIGHT LINKS === */}
      <div className="hidden md:flex items-center space-x-8">
        {rightLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`text-base font-medium px-5 py-2 rounded-full transition-all duration-300 ${
              pathname === link.href
                ? 'underline underline-offset-4 text-white'
                : 'text-white hover:opacity-80'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* === MOBILE MENU TOGGLE === */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/20 transition-all"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* === MOBILE MENU === */}
      {open && (
        <div className="absolute top-[86px] left-0 w-full bg-[#1A004A] border-t border-white/10 flex flex-col items-center py-5 space-y-4 rounded-b-[40px] md:hidden">
          {[...leftLinks, ...rightLinks].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-5 py-2 text-lg rounded-full font-medium transition-all duration-300 ${
                pathname === link.href
                  ? 'bg-white text-[#1A004A]'
                  : 'text-white hover:bg-white/20'
              }`}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}