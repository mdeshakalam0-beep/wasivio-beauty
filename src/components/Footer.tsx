/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, MessageSquare, Phone, ArrowUp, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const coursesLinks = [
    { name: 'Professional Makeup Artistry', href: '#courses' },
    { name: 'Bridal HD Masterclass', href: '#courses' },
    { name: 'Hair Wig Making & Custom', href: '#courses' },
    { name: 'Beautician & Cosmetology', href: '#courses' },
  ];

  const servicesLinks = [
    { name: 'German Lace Hair Patches', href: '#wig-services' },
    { name: 'Bio-Silicon Bonding fixes', href: '#wig-services' },
    { name: 'Signature Haircuts & Styles', href: '#salon-services' },
    { name: 'Caviar Nourishing Hair Spa', href: '#salon-services' },
  ];

  return (
    <footer
      id="main-footer"
      className={`pt-16 pb-8 border-t transition-colors duration-300 ${
        darkMode ? 'bg-black border-neutral-900 text-white' : 'bg-neutral-900 border-neutral-850 text-neutral-300'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Upper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-neutral-800/80">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => handleScrollTo('#home')}>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-rosegold-500 to-gold-400 p-[1px]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                  <Sparkles className="h-5 w-5 text-rosegold-400" />
                </div>
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-widest uppercase block text-white">
                  SS <span className="text-rosegold-500">Beauty</span>
                </span>
                <span className="text-[9px] tracking-widest text-gold-500 uppercase block font-medium -mt-1">
                  School & Wig Service
                </span>
              </div>
            </div>

            <p className="text-xs font-light text-neutral-400 leading-relaxed max-w-sm">
              Northern India's premium destination for ISO accredited beauty cosmetology courses and non-surgical hair restoration systems. Empowring careers, curating confidence.
            </p>

            <div className="space-y-2 text-xs font-light text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-rosegold-500 shrink-0 mt-0.5" />
                <span>GK-II, Greater Kailash, New Delhi</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold-500 shrink-0" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>

          {/* Col 2: Courses links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white border-l-2 border-rosegold-500 pl-2.5">
              Academy Courses
            </h4>
            <div className="flex flex-col gap-2.5">
              {coursesLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo(link.href);
                  }}
                  className="text-xs font-light text-neutral-400 hover:text-rosegold-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Services links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white border-l-2 border-gold-500 pl-2.5">
              Wig & Salon Care
            </h4>
            <div className="flex flex-col gap-2.5">
              {servicesLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo(link.href);
                  }}
                  className="text-xs font-light text-neutral-400 hover:text-rosegold-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 4: Quick Scroll Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white border-l-2 border-rosegold-500 pl-2.5">
              Quick Menu
            </h4>
            <div className="flex flex-col gap-2.5">
              <a href="#about" onClick={(e) => { e.preventDefault(); handleScrollTo('#about'); }} className="text-xs font-light text-neutral-400 hover:text-white">Our Story</a>
              <a href="#gallery" onClick={(e) => { e.preventDefault(); handleScrollTo('#gallery'); }} className="text-xs font-light text-neutral-400 hover:text-white">Success Gallery</a>
              <a href="#faq" onClick={(e) => { e.preventDefault(); handleScrollTo('#faq'); }} className="text-xs font-light text-neutral-400 hover:text-white">Help & FAQs</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleScrollTo('#contact'); }} className="text-xs font-light text-neutral-400 hover:text-white">Get in Touch</a>
            </div>
          </div>

        </div>

        {/* Lower Grid: Copyright, design branding & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-neutral-500">
          <div>
            <p>© {currentYear} SS Beauty School &amp; Wig Service. All rights reserved.</p>
          </div>

          {/* Core designer credit */}
          <div className="flex items-center gap-1">
            <span>Client Demo Site designed by</span>
            <a
              href="https://wasivio.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-gradient bg-gradient-to-r from-rosegold-400 to-gold-400 hover:opacity-80"
            >
              WASIVIO
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-neutral-400 hover:text-white transition-colors"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3 w-3 animate-bounce" />
          </button>
        </div>

      </div>
    </footer>
  );
}
