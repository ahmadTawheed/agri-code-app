"use client"; // ضروري لاستخدام useState في Next.js (App Router)
import { useState } from 'react';
import Link from 'next/link';
import { CgMenuLeft, CgClose } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "الأسعار", href: "/pages/price" },
    { name: "الخدمات", href: "/#services" },
    { name: "عنا", href: "/pages/about" },
    { name: "الدعم", href: "/pages/contact" },
  ];

  return (
    <nav dir='rtl' className='fixed top-0 w-full z-50 bg-green-900/95 backdrop-blur-md shadow-lg'>
      <div className='max-w-7xl mx-auto px-6 h-20 flex justify-between items-center'>
        
        {/* Logo */}
        <Link href="/" className='text-white font-black text-2xl tracking-tight'>
          Agri<span className='text-green-400'>Code</span>
        </Link>

        {/* Desktop Desktop Links */}
        <ul className='hidden lg:flex items-center gap-8 text-white/90 font-medium'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className='relative py-2 transition-all duration-300 hover:text-white group'>
                {link.name}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full'></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden lg:flex gap-4 items-center">
          <button className='text-white hover:text-green-200 transition font-bold px-4 py-2'>
            تسجيل الدخول
          </button>
          <button className='bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-2.5 rounded-full transition-all shadow-md active:scale-95'>
            إنشاء حساب
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className='lg:hidden text-white text-3xl cursor-pointer' onClick={toggleMenu}>
          {isOpen ? <CgClose /> : <CgMenuLeft />}
        </div>
      </div>

      {/* Mobile Sidebar (Logic & UI) */}
      <div className={`lg:hidden fixed inset-y-0 right-0 z-50 w-64 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out shadow-2xl`}>
        <div className="p-6 flex flex-col gap-8 mt-10 bg-green-900 rounded-xl">
          <ul className='flex flex-col gap-6 text-white font-bold text-xl'>
            {navLinks.map((link) => (
              <li key={link.name} onClick={() => setIsOpen(false)}>
                <Link href={link.href} className='hover:text-green-400 transition'>{link.name}</Link>
              </li>
            ))}
          </ul>
          <hr className='border-green-800' />
          <div className="flex flex-col gap-4">
            <button className='text-white border border-white rounded-xl py-3'>تسجيل الدخول</button>
            <button className='bg-green-500 text-white rounded-xl py-3'>إنشاء حساب</button>
          </div>
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 lg:hidden" onClick={toggleMenu}></div>
      )}
    </nav>
  );
}

export default Navbar;