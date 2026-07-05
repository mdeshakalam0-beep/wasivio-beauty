/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Scissors, Clock, ArrowRight } from 'lucide-react';
import { SALON_SERVICES } from '../data';

interface SalonServicesProps {
  darkMode: boolean;
  onOpenEnquiry: (serviceName: string) => void;
}

export default function SalonServices({ darkMode, onOpenEnquiry }: SalonServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'hair' | 'skin' | 'makeup' | 'packages'>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Hair Sculpting & Care' },
    { id: 'skin', label: 'Luxury Skin & Facials' },
    { id: 'makeup', label: 'Couture Makeup & Styles' },
    { id: 'packages', label: 'Bridal & Groom Packages' },
  ] as const;

  const filteredServices = selectedCategory === 'all'
    ? SALON_SERVICES
    : SALON_SERVICES.filter(srv => srv.category === selectedCategory);

  return (
    <section
      id="salon-services"
      className={`py-20 border-t transition-colors duration-300 ${
        darkMode ? 'bg-transparent border-neutral-900 text-white' : 'bg-transparent border-[#D4AF37]/15 text-[#1A1A1A]'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-semibold tracking-[0.25em] text-rosegold-500 uppercase block">
            Couture Grooming Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-tight">
            Our Elite <span className="italic font-normal text-gradient bg-gradient-to-r from-rosegold-500 to-gold-500">Salon Treatment Menu</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-rosegold-500 to-gold-400 mx-auto" />
          <p className={`text-sm font-light max-w-2xl mx-auto ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
            Indulge in high-end cosmetic styling and clinical therapy sessions using premium imported hair serums and dermal skin solutions.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`text-xs uppercase tracking-wider px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-rosegold-500 to-gold-500 text-white shadow-md shadow-rosegold-500/15'
                  : darkMode
                    ? 'bg-neutral-950 text-neutral-400 hover:bg-neutral-800 hover:text-white border border-neutral-800'
                    : 'bg-white text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 border border-neutral-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of salon services */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((srv) => (
              <motion.div
                layout
                key={srv.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`group relative flex flex-col justify-between rounded-[2rem] overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  darkMode
                    ? 'bg-neutral-950 border-neutral-800/80 hover:border-rosegold-500/20'
                    : 'bg-white border-neutral-200/60 hover:border-rosegold-400/20'
                }`}
              >
                {/* Image Wrap */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={srv.image}
                    alt={srv.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Category overlay */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[9px] uppercase font-bold tracking-widest glass-dark bg-black/50 text-gold-300 border border-white/10">
                    {srv.category}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className={`font-serif text-base font-bold leading-tight group-hover:text-rosegold-500 transition-colors ${
                        darkMode ? 'text-white' : 'text-neutral-900'
                      }`}>
                        {srv.name}
                      </h3>
                      
                      <span className="text-sm font-semibold text-gradient bg-gradient-to-r from-rosegold-500 to-gold-500 shrink-0">
                        {srv.price}
                      </span>
                    </div>

                    <p className={`text-xs font-light line-clamp-2 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      {srv.description}
                    </p>
                  </div>

                  <div className="h-[1px] bg-neutral-200/10" />

                  {/* Pricing/Duration detail & CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[10px] text-neutral-400 uppercase tracking-widest">
                      <Clock className="h-3.5 w-3.5 text-rosegold-400" />
                      <span>{srv.duration}</span>
                    </div>

                    <button
                      onClick={() => onOpenEnquiry(srv.name)}
                      className={`flex items-center gap-1.5 text-xs font-semibold py-2 px-3.5 rounded-xl border transition-all ${
                        darkMode
                          ? 'border-rosegold-500/20 text-rosegold-400 hover:bg-rosegold-950/20'
                          : 'border-rosegold-300 text-rosegold-600 hover:bg-rosegold-50'
                      }`}
                    >
                      <span>Book Slot</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Floating Custom VIP Suite Note */}
        <div className={`mt-16 p-8 rounded-3xl border text-center max-w-4xl mx-auto space-y-3 ${
          darkMode
            ? 'bg-neutral-900/40 border-neutral-800'
            : 'bg-white/40 border-neutral-100 shadow-md shadow-rosegold-500/5'
        }`}>
          <div className="flex justify-center mb-2">
            <div className="p-2.5 bg-gold-500 text-white rounded-full">
              <Scissors className="h-5 w-5" />
            </div>
          </div>
          <h4 className="font-serif text-lg font-medium">Looking for custom hair extensions or high-volume packages?</h4>
          <p className={`text-xs font-light max-w-2xl mx-auto ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
            We create customized holistic beauty profiles with trial makeovers. Discuss your wedding, photoshoot, or corporate makeover portfolio with our lead stylist today.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenEnquiry('Custom Salon Consultation')}
              className="rounded-full bg-gradient-to-r from-rosegold-500 to-gold-500 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 transition-transform hover:scale-105"
            >
              Get Custom Quote
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
