/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Phone, MessageCircle, Sparkles } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  onOpenEnquiry: (courseName?: string) => void;
}

export default function Navbar({ darkMode, setDarkMode, onOpenEnquiry }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Wig Services', href: '#wig-services' },
    { name: 'Salon Services', href: '#salon-services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Success Stories', href: '#testimonials' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'glass-dark bg-[#1A1A1A]/95 border-b border-[#D4AF37]/20 shadow-lg py-3'
            : 'glass-light bg-[#FAF9F6]/95 border-b border-[#D4AF37]/20 shadow-sm py-3'
          : 'bg-transparent border-b border-[#D4AF37]/10 py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand in Artistic Flair Serif style */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-baseline gap-2 group cursor-pointer"
          >
            <span className={`text-3xl font-serif tracking-tighter ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
              SS
            </span>
            <span className="text-xs uppercase tracking-[0.25em] font-light text-[#C5A059] sm:inline hidden">
              Beauty School
            </span>
          </a>

          {/* Desktop Navigation Link items in Artistic Flair spec */}
          <nav className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-[11px] uppercase tracking-widest font-medium transition-all relative py-1 hover:text-[#C5A059] group-hover:after:scale-x-100 ${
                  darkMode ? 'text-neutral-300' : 'text-[#1A1A1A]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Utility buttons with Artistic Flair design outline style */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full border transition-colors ${
                darkMode
                  ? 'border-[#D4AF37]/30 hover:bg-neutral-900 text-gold-300'
                  : 'border-[#D4AF37]/20 hover:bg-neutral-100 text-neutral-600'
              }`}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Quick contact trigger */}
            <a
              href="tel:+919876543210"
              className={`flex items-center gap-2 text-[10px] uppercase tracking-wider px-3.5 py-2 rounded-full border ${
                darkMode
                  ? 'border-[#D4AF37]/30 text-[#C5A059] hover:bg-[#D4AF37]/10'
                  : 'border-[#D4AF37]/30 text-[#C5A059] hover:bg-[#D4AF37]/5'
              }`}
            >
              <Phone className="h-3 w-3" />
              <span>+91 98765 43210</span>
            </a>

            {/* Premium Outline Button - matching design HTML */}
            <button
              onClick={() => onOpenEnquiry()}
              className="px-6 py-2.5 border border-[#D4AF37] text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-white transition-all bg-transparent font-medium"
            >
              Enquiry Now
            </button>
          </div>

          {/* Mobile Right Menu Action (Hamburger, theme, contact) */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full border transition-colors md:hidden ${
                darkMode
                  ? 'border-neutral-800 hover:bg-neutral-900 text-gold-300'
                  : 'border-neutral-200 hover:bg-neutral-100 text-neutral-600'
              }`}
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full ${
                darkMode ? 'text-white hover:bg-neutral-900' : 'text-neutral-900 hover:bg-neutral-100'
              }`}
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`xl:hidden border-b ${
              darkMode ? 'bg-neutral-950 border-neutral-900' : 'bg-white border-neutral-100'
            }`}
          >
            <div className="px-4 py-6 space-y-4 max-w-7xl mx-auto">
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-sm uppercase tracking-widest font-medium py-2 px-1 transition-colors hover:text-rosegold-500 border-b ${
                      darkMode
                        ? 'text-neutral-300 border-neutral-900'
                        : 'text-neutral-700 border-neutral-100'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="flex flex-col gap-3 pt-4">
                <a
                  href="tel:+919876543210"
                  className={`flex items-center justify-center gap-2 text-sm font-semibold py-3 rounded-full border ${
                    darkMode
                      ? 'border-neutral-800 text-rosegold-400 hover:bg-neutral-900'
                      : 'border-neutral-200 text-rosegold-600 hover:bg-neutral-50'
                  }`}
                >
                  <Phone className="h-4 w-4" />
                  <span>Call: +91 98765 43210</span>
                </a>
                
                <a
                  href="https://wa.me/919876543210?text=Hi%20SS%20Beauty%20School,%20I'm%20interested%20in%20enquiring%20about%20your%20services/courses."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-semibold py-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp Enquiry</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry();
                  }}
                  className="w-full rounded-full bg-gradient-to-r from-rosegold-500 to-gold-500 py-3 text-sm font-medium text-white shadow-md shadow-rosegold-500/15"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
