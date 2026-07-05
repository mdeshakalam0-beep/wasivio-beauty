/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Sparkles, Sliders, CheckSquare, HelpCircle } from 'lucide-react';
import { WIG_SERVICES } from '../data';

interface WigServicesProps {
  darkMode: boolean;
  onOpenEnquiry: (serviceName: string) => void;
}

export default function WigServices({ darkMode, onOpenEnquiry }: WigServicesProps) {
  // Before & after image slider state (0 to 100)
  const [sliderPos, setSliderPos] = useState<number>(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <section
      id="wig-services"
      className={`py-20 border-t transition-colors duration-300 ${
        darkMode ? 'bg-transparent border-neutral-900 text-white' : 'bg-transparent border-[#D4AF37]/15 text-[#1A1A1A]'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-[0.25em] text-rosegold-500 uppercase block">
            Non-Surgical Hair Restoration
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-tight">
            Premium <span className="italic font-normal text-gradient bg-gradient-to-r from-rosegold-500 to-gold-500">Hair Wig & Patch Services</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-rosegold-500 to-gold-400 mx-auto" />
          <p className={`text-sm font-light max-w-2xl mx-auto ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
            Experience absolute natural flow, lightweight comfort, and full confidence restoration with our custom-measured European hair systems and bio-bonding fixes.
          </p>
        </div>

        {/* Interactive Before & After Visual Slider Component */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Interactive Slider box (Left 5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <h3 className="font-serif text-xl font-medium tracking-tight mb-4 text-center lg:text-left w-full">
              Interactive Transformation
            </h3>
            <p className={`text-xs font-light mb-6 text-center lg:text-left ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Drag the premium gold slider below to witness the incredible coverage achieved with our custom German Monofilament Hair System.
            </p>

            {/* Slider Container */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden select-none border border-neutral-200/10 shadow-2xl">
              
              {/* After image (Always underneath, full width) */}
              <img
                src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600"
                alt="After hair restoration"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-full text-[9px] uppercase font-bold tracking-widest bg-emerald-600/90 text-white shadow-md border border-emerald-500/15">
                AFTER: Custom Hair Unit
              </div>

              {/* Before image (Cropped dynamically by clipPath based on state) */}
              <div
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=600"
                  alt="Before hair loss"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute top-4 z-20 px-3.5 py-1.5 rounded-full text-[9px] uppercase font-bold tracking-widest bg-neutral-800/95 text-white shadow-md border border-neutral-700/15"
                style={{ left: `calc(${sliderPos}% - 140px < 16px ? 16px : ${sliderPos}% - 140px)` }}
              >
                BEFORE: Thinning / Baldness
              </div>

              {/* Slider Line Divider */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-rosegold-400 to-gold-400 z-30 pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                {/* Dragging Handle circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-tr from-rosegold-500 to-gold-500 flex items-center justify-center shadow-lg border border-white/20">
                  <Sliders className="h-3 w-3 text-white rotate-90" />
                </div>
              </div>

              {/* Native Invisible Range Input Overlaid */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
                aria-label="Before and after hair slider"
              />
            </div>
            
            <span className="text-[10px] text-neutral-400 font-mono tracking-widest uppercase mt-4 block">
              ← DRAG THE SLIDER TO VERIFY →
            </span>
          </div>

          {/* Core Hair Systems (Right 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl font-medium tracking-tight">
              Why Choose Non-Surgical Solutions?
            </h3>
            
            <p className={`text-sm font-light leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Surgical hair transplants can be costly, painful, and often yield uncertain density. Our medical-grade non-surgical hair systems are crafted with highly breathable lace/silicone bases, delivering perfect, customizable volume instantly with zero side effects.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className={`p-5 rounded-2xl border ${
                darkMode ? 'bg-neutral-900/30 border-neutral-800' : 'bg-neutral-50/50 border-neutral-200/50'
              } flex items-start gap-3`}>
                <CheckSquare className="h-5 w-5 text-rosegold-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider mb-1">Instant 100% Volume</h4>
                  <p className="text-xs font-light text-neutral-400">Get dense, flowing locks instantly in just a single 90-minute bonding session.</p>
                </div>
              </div>

              <div className={`p-5 rounded-2xl border ${
                darkMode ? 'bg-neutral-900/30 border-neutral-800' : 'bg-neutral-50/50 border-neutral-200/50'
              } flex items-start gap-3`}>
                <CheckSquare className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider mb-1">Dermal-Safe Adhesives</h4>
                  <p className="text-xs font-light text-neutral-400">We use only certified US FDA-approved anti-fungal silicon tapes and skin bonds.</p>
                </div>
              </div>

              <div className={`p-5 rounded-2xl border ${
                darkMode ? 'bg-neutral-900/30 border-neutral-800' : 'bg-neutral-50/50 border-neutral-200/50'
              } flex items-start gap-3`}>
                <CheckSquare className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider mb-1">Activity Proof</h4>
                  <p className="text-xs font-light text-neutral-400">Easily head to the swimming pool, gym, or ride bikes. Your patch is 100% secure.</p>
                </div>
              </div>

              <div className={`p-5 rounded-2xl border ${
                darkMode ? 'bg-neutral-900/30 border-neutral-800' : 'bg-neutral-50/50 border-neutral-200/50'
              } flex items-start gap-3`}>
                <CheckSquare className="h-5 w-5 text-rosegold-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider mb-1">Ethical Human Hair</h4>
                  <p className="text-xs font-light text-neutral-400">Hand-selected raw Remy virgin hair containing healthy cuticles in natural direction.</p>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 flex items-start gap-3 text-xs`}>
              <ShieldAlert className="h-5 w-5 text-rosegold-400 shrink-0" />
              <p className={darkMode ? 'text-neutral-300' : 'text-neutral-700'}>
                <strong>Confidential Service:</strong> We operate completely private, isolated VIP styling cubicles for our hair wig, patch, and consultation clients to ensure absolute privacy and peace of mind.
              </p>
            </div>
          </div>

        </div>

        {/* Wig Services Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WIG_SERVICES.map((serv) => (
            <div
              key={serv.id}
              className={`group flex flex-col justify-between p-6 sm:p-8 rounded-[2rem] border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                darkMode
                  ? 'bg-neutral-900/25 border-neutral-800/60 hover:bg-neutral-900/40 hover:border-rosegold-500/30'
                  : 'bg-neutral-50/20 border-neutral-200/50 hover:bg-white hover:border-rosegold-400/30'
              }`}
            >
              <div className="space-y-4">
                {/* Service image */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4">
                  <img
                    src={serv.image}
                    alt={serv.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <h4 className="font-serif text-lg font-bold tracking-tight">
                  {serv.name}
                </h4>

                <p className={`text-xs font-light leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  {serv.description}
                </p>

                {/* Features */}
                <div className="space-y-1.5 pt-2">
                  {serv.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Sparkles className="h-3.5 w-3.5 text-rosegold-400 shrink-0" />
                      <span className={`text-[11px] font-light ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Tag & CTA Button */}
              <div className="pt-6 mt-6 border-t border-neutral-200/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest block leading-none">Starting from</span>
                  <span className="text-xs font-semibold text-gradient bg-gradient-to-r from-rosegold-500 to-gold-500">{serv.price}</span>
                </div>

                <button
                  onClick={() => onOpenEnquiry(serv.name)}
                  className="rounded-xl text-[10px] uppercase tracking-wider font-semibold px-4 py-2 bg-gradient-to-r from-rosegold-500 to-gold-500 text-white transition-transform duration-300 hover:scale-105 active:scale-95"
                >
                  Enquire Service
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
