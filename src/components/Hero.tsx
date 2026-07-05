/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Award, Users, Calendar } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
  onOpenEnquiry: () => void;
}

export default function Hero({ darkMode, onOpenEnquiry }: HeroProps) {
  const stats = [
    {
      id: 'stat-students',
      value: '5000+',
      label: 'Students Trained',
      icon: Users,
      description: 'Building global careers'
    },
    {
      id: 'stat-years',
      value: '10+',
      label: 'Years Experience',
      icon: Calendar,
      description: 'Award-winning coaching'
    },
    {
      id: 'stat-certified',
      value: '1000+',
      label: 'Certified Students',
      icon: Award,
      description: 'Accredited internationally'
    }
  ];

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

  return (
    <section
      id="home"
      className={`relative min-h-screen flex flex-col justify-center pt-24 overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-luxury-gradient-dark text-white' : 'bg-luxury-gradient-light text-neutral-900'
      }`}
    >
      {/* Decorative luxury abstract circles */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-rosegold-300/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text section (Left side) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-8">
            
            {/* Tagline style from Design HTML */}
            <div className="flex items-center space-x-4 mb-2 justify-center lg:justify-start">
              <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
              <span className="text-xs uppercase tracking-[0.4em] text-[#C5A059] font-medium">Premier Academy of Hair & Artistry</span>
            </div>

            {/* Luxury Title Heading in Artistic style */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-5xl sm:text-7xl lg:text-[84px] leading-[0.95] font-serif text-[#1A1A1A] dark:text-white"
            >
              Sculpting <br/> <span className="italic font-light text-[#D4AF37]">Flawless Artistry.</span>
            </motion.h1>

            {/* Introductory copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className={`text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed font-light ${
                darkMode ? 'text-neutral-300' : 'text-gray-600'
              }`}
            >
              Master the craft of high-end beauty and professional hair restoration. A ₹3,00,000 learning experience tailored for the visionaries of tomorrow.
            </motion.p>

            {/* Call To Actions in Artistic Flair style */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-2"
            >
              <button
                onClick={() => onOpenEnquiry()}
                className="bg-[#1A1A1A] dark:bg-white dark:text-[#1A1A1A] text-white px-10 py-5 text-sm uppercase tracking-widest font-medium shadow-2xl hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] dark:hover:text-white transition-all duration-300 w-full sm:w-auto cursor-pointer"
              >
                Enroll Now
              </button>

              <button
                onClick={() => handleScrollTo('#about')}
                className="flex items-center justify-center space-x-3 text-sm uppercase tracking-widest font-medium group transition-all w-full sm:w-auto"
              >
                <span className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#D4AF37] transition-all dark:border-neutral-700">
                  ▶
                </span>
                <span className={darkMode ? 'text-white' : 'text-[#1A1A1A]'}>Our Story</span>
              </button>
            </motion.div>

            {/* Premium Client Endorsement */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="pt-6 flex items-center justify-center lg:justify-start gap-3 text-xs tracking-wider uppercase font-light font-mono"
            >
              <span className="h-[1px] w-8 bg-neutral-400/50" />
              <span>ISO 9001:2015 ACCREDITED ACADEMY</span>
              <span className="h-[1px] w-8 bg-neutral-400/50" />
            </motion.div>
          </div>

          {/* Model portrait image block (Right side) in Artistic Tilted frame design */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[520px] w-full">
            {/* Background dark stats card tilted */}
            <div className="absolute top-12 right-2 sm:right-6 w-60 h-80 bg-[#1A1A1A] z-10 transform rotate-6 flex flex-col items-center justify-center p-8 text-center shadow-2xl border border-[#D4AF37]/10">
               <span className="text-[#D4AF37] text-5xl font-serif mb-2">10+</span>
               <p className="text-white/60 text-[10px] uppercase tracking-widest mb-1 font-semibold">Years of Excellence</p>
               <p className="text-neutral-500 text-[9px] uppercase tracking-tighter leading-tight">Accredited Pedagogy in GK-II Delhi</p>
            </div>

            {/* Main image in tilted high-end white border frame */}
            <div className="w-72 h-[450px] bg-white shadow-[0_40px_80px_rgba(0,0,0,0.15)] border-[12px] border-white z-20 relative transform -rotate-3 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800"
                alt="Elite Beauty Model"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest">Bridal Masterclass</p>
                <p className="text-white text-xs font-serif italic mt-0.5">SS Graduate Portfolio</p>
              </div>
            </div>

            {/* Wig Service Teaser Card */}
            <div className="absolute bottom-12 left-0 sm:left-2 w-56 h-48 bg-white/95 dark:bg-neutral-900/95 border border-[#D4AF37]/20 z-30 p-6 shadow-xl text-left hidden sm:block">
              <div className="w-8 h-[1px] bg-[#D4AF37] mb-4"></div>
              <h4 className="font-serif italic text-xl mb-2 text-[#1A1A1A] dark:text-white">Wig Restoration</h4>
              <p className="text-[10px] text-gray-500 dark:text-neutral-400 uppercase tracking-tighter leading-tight">
                Professional Medical Grade <br/>Hair Replacement Solutions.
              </p>
              <button
                onClick={() => handleScrollTo('#wig-services')}
                className="mt-4 text-[#D4AF37] text-xs font-bold hover:translate-x-1 transition-transform inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Explore</span>
                <span>→</span>
              </button>
            </div>
          </div>

        </div>

        {/* Counter Stats Container */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-neutral-200/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className={`p-6 rounded-3xl transition-all duration-300 border ${
                    darkMode
                      ? 'bg-neutral-900/45 border-neutral-800/40 hover:bg-neutral-900/80 hover:border-rosegold-500/20'
                      : 'bg-white/45 border-neutral-100 hover:bg-white/80 hover:border-rosegold-500/20'
                  } group hover:shadow-xl hover:shadow-rosegold-500/5`}
                >
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-2xl transition-colors duration-300 ${
                      darkMode ? 'bg-neutral-950 text-rosegold-400' : 'bg-rosegold-50 text-rosegold-600'
                    } group-hover:bg-rosegold-500 group-hover:text-white`}>
                      <StatIcon className="h-6 w-6" />
                    </div>
                  </div>
                  
                  {/* Dynamic Value */}
                  <h2 className="text-4xl font-serif font-semibold tracking-tight text-gradient bg-gradient-to-r from-rosegold-500 to-gold-500">
                    {stat.value}
                  </h2>
                  <p className={`text-sm font-semibold tracking-wider uppercase mt-1 ${darkMode ? 'text-white' : 'text-neutral-800'}`}>
                    {stat.label}
                  </p>
                  <p className={`text-xs mt-1 font-light ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
