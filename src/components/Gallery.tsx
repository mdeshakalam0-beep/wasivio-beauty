/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Maximize2, X, SlidersHorizontal } from 'lucide-react';
import { GALLERY_DATA } from '../data';
import { GalleryItem } from '../types';

interface GalleryProps {
  darkMode: boolean;
}

export default function Gallery({ darkMode }: GalleryProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'before-after' | 'student-training' | 'salon' | 'certificate-ceremony'>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const tabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'before-after', label: 'Before & After' },
    { id: 'student-training', label: 'Student Training' },
    { id: 'salon', label: 'Salon & Studio' },
    { id: 'certificate-ceremony', label: 'Certificate Ceremony' },
  ] as const;

  const filteredItems = activeTab === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === activeTab);

  return (
    <section
      id="gallery"
      className={`py-20 border-t transition-colors duration-300 ${
        darkMode ? 'bg-transparent border-neutral-900 text-white' : 'bg-transparent border-[#D4AF37]/15 text-[#1A1A1A]'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-semibold tracking-[0.25em] text-rosegold-500 uppercase block">
            Visual Proof of Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-tight">
            Our Premium <span className="italic font-normal text-gradient bg-gradient-to-r from-rosegold-500 to-gold-500">Photo Gallery</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-rosegold-500 to-gold-400 mx-auto" />
          <p className={`text-sm font-light max-w-2xl mx-auto ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
            Explore our state-of-the-art facilities, real student classroom drills, official certification ceremonies, and incredible client restorations.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-xs uppercase tracking-wider px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-rosegold-500 to-gold-500 text-white shadow-md'
                  : darkMode
                    ? 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Gallery Grid with animations */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`group relative rounded-3xl overflow-hidden aspect-square border cursor-pointer ${
                  darkMode ? 'bg-neutral-900 border-neutral-800/60' : 'bg-neutral-50 border-neutral-200/50'
                }`}
                onClick={() => setLightboxItem(item)}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Gradient Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-6" />

                {/* Hover Content details */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[9px] text-gold-400 font-bold uppercase tracking-widest bg-black/40 px-2.5 py-1 rounded-md border border-white/10 w-fit mb-2">
                    {item.category.replace('-', ' ')}
                  </span>
                  
                  <h3 className="font-serif text-lg font-semibold text-white leading-tight flex items-center justify-between">
                    <span>{item.title}</span>
                    <Maximize2 className="h-4 w-4 text-rosegold-400 shrink-0" />
                  </h3>
                  
                  <p className="text-xs text-neutral-300 font-light mt-1">
                    {item.description}
                  </p>
                </div>

                {/* Category label visible always on mobile */}
                <div className="absolute bottom-4 left-4 z-10 block group-hover:hidden transition-opacity">
                  <span className="text-[9px] text-white font-bold uppercase tracking-widest bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                    {item.category.replace('-', ' ')}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal Overlay */}
        <AnimatePresence>
          {lightboxItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxItem(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-lg"
              />

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-900"
              >
                {/* Lightbox Close Button */}
                <button
                  onClick={() => setLightboxItem(null)}
                  className="absolute top-4 right-4 z-50 p-2 bg-black/50 text-white hover:bg-black/80 rounded-full border border-white/10 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Large image showcase */}
                <div className="relative aspect-[4/3] max-h-[70vh] w-full bg-neutral-950 flex items-center justify-center">
                  <img
                    src={lightboxItem.image}
                    alt={lightboxItem.title}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-full object-contain"
                  />
                  
                  {/* Before after twin display inside lightbox if applicable */}
                  {lightboxItem.beforeImage && lightboxItem.afterImage && (
                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                      <span className="text-[10px] bg-red-600 text-white font-bold uppercase px-2.5 py-1 rounded">Before</span>
                      <span className="text-[10px] bg-green-600 text-white font-bold uppercase px-2.5 py-1 rounded">After</span>
                    </div>
                  )}
                </div>

                {/* Title and metadata panel below image */}
                <div className="p-6 sm:p-8 bg-neutral-950 text-white space-y-2 border-t border-neutral-900">
                  <span className="text-[10px] text-gold-400 font-bold uppercase tracking-widest">
                    Category: {lightboxItem.category.replace('-', ' ')}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white leading-tight">
                    {lightboxItem.title}
                  </h3>
                  <p className="text-sm text-neutral-400 font-light">
                    {lightboxItem.description}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
