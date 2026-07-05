/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquare, Play, Sparkles, CheckCircle, Shield, X, Volume2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

interface TestimonialsProps {
  darkMode: boolean;
}

export default function Testimonials({ darkMode }: TestimonialsProps) {
  const [playVideoId, setPlayVideoId] = useState<string | null>(null);

  const videoReviews = [
    {
      id: 'vid-1',
      studentName: 'Priya Verma',
      courseName: 'Professional Wig Customization Course',
      thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
      duration: '1:45',
      placement: 'Placed at Lakmé Studio, Delhi'
    },
    {
      id: 'vid-2',
      studentName: 'Deepak Thapa',
      courseName: 'Advanced Hair Replacement Masterclass',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
      duration: '2:12',
      placement: 'Launched "Elite Toupee Fix" Clinic'
    }
  ];

  return (
    <section
      id="testimonials"
      className={`py-20 border-t transition-colors duration-300 ${
        darkMode ? 'bg-transparent border-neutral-900 text-white' : 'bg-transparent border-[#D4AF37]/15 text-[#1A1A1A]'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-[0.25em] text-rosegold-500 uppercase block">
            Student Success & Client Love
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-tight">
            Loved By <span className="italic font-normal text-gradient bg-gradient-to-r from-rosegold-500 to-gold-500">Students & Clients Alike</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-rosegold-500 to-gold-400 mx-auto" />
          <p className={`text-sm font-light max-w-2xl mx-auto ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
            Explore actual reviews from our certified cosmetologists and clients who received life-changing non-surgical hair fixing treatments.
          </p>
        </div>

        {/* Video Testimonials Showcase Mockup block */}
        <div className="mb-20">
          <h3 className="font-serif text-xl font-medium tracking-tight mb-8 text-center sm:text-left flex items-center justify-center sm:justify-start gap-2">
            <Play className="h-5 w-5 text-rosegold-500 fill-rosegold-500" />
            <span>Success Video Testimonials</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoReviews.map((vid) => (
              <div
                key={vid.id}
                onClick={() => setPlayVideoId(vid.studentName)}
                className={`group relative flex flex-col sm:flex-row items-center gap-6 p-6 rounded-[2.2rem] border transition-all duration-300 hover:shadow-2xl cursor-pointer ${
                  darkMode
                    ? 'bg-neutral-950 border-neutral-800 hover:border-rosegold-500/20'
                    : 'bg-white border-neutral-200/60 hover:border-rosegold-400/20'
                }`}
              >
                {/* Video Image Container */}
                <div className="relative w-full sm:w-44 aspect-[4/3] rounded-2xl overflow-hidden shrink-0">
                  <img
                    src={vid.thumbnail}
                    alt={vid.studentName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Absolute play button icon */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-rosegold-500 to-gold-500 flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                      <Play className="h-5 w-5 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                  {/* duration */}
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 text-[9px] bg-black/60 text-white font-semibold rounded">
                    {vid.duration}
                  </span>
                </div>

                {/* Video text content */}
                <div className="space-y-2 text-center sm:text-left w-full">
                  <span className="text-[10px] text-gold-500 font-bold tracking-widest uppercase">
                    Success Interview
                  </span>
                  <h4 className="font-serif text-base font-semibold leading-tight text-gradient bg-gradient-to-r from-rosegold-500 to-gold-500">
                    {vid.studentName}
                  </h4>
                  <p className={`text-xs font-semibold ${darkMode ? 'text-neutral-300' : 'text-neutral-800'}`}>
                    {vid.courseName}
                  </p>
                  <p className={`text-[11px] font-light italic ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    "{vid.placement}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Reviews Style Cards */}
        <div>
          <h3 className="font-serif text-xl font-medium tracking-tight mb-8 text-center sm:text-left flex items-center justify-center sm:justify-start gap-2">
            <Star className="h-5 w-5 text-gold-500 fill-gold-500" />
            <span>Google Reviews & Direct Feedbacks</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className={`p-6 sm:p-8 rounded-[2.5rem] border flex flex-col justify-between space-y-6 ${
                  darkMode
                    ? 'bg-neutral-950 border-neutral-800/60'
                    : 'bg-white border-neutral-200/50 shadow-md shadow-rosegold-500/5'
                }`}
              >
                <div className="space-y-4">
                  {/* Google review star rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-gold-400 fill-gold-400" />
                      ))}
                    </div>
                    {/* Google reviewer style verified badge */}
                    <div className="flex items-center gap-1 text-[10px] text-emerald-500 font-semibold tracking-wider uppercase">
                      <CheckCircle className="h-3.5 w-3.5" />
                      <span>Verified {t.role}</span>
                    </div>
                  </div>

                  <p className={`text-xs sm:text-sm font-light italic leading-relaxed ${
                    darkMode ? 'text-neutral-300' : 'text-neutral-700'
                  }`}>
                    "{t.review}"
                  </p>
                </div>

                {/* Profile info block */}
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-200/10">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-rosegold-300"
                  />
                  <div>
                    <h4 className={`text-xs font-bold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                      {t.name}
                    </h4>
                    <p className="text-[10px] text-neutral-400 leading-none mt-1">
                      Verified for: <span className="text-rosegold-400 font-medium">{t.courseOrService}</span>
                    </p>
                    <span className="text-[9px] text-neutral-500 block mt-0.5">
                      {t.date} via Google Maps Reviews
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Player Modal overlay */}
        <AnimatePresence>
          {playVideoId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setPlayVideoId(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative max-w-lg w-full rounded-3xl overflow-hidden bg-black border border-neutral-800 shadow-2xl p-6 text-center space-y-6"
              >
                <button
                  onClick={() => setPlayVideoId(null)}
                  className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rosegold-500/10 text-rosegold-400 mx-auto border border-rosegold-500/20">
                  <Volume2 className="h-8 w-8 animate-bounce" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-white uppercase tracking-wider">
                    Playing Interview
                  </h3>
                  <p className="text-xs text-gold-400 font-semibold tracking-widest font-mono">
                    STUDENT: {playVideoId}
                  </p>
                  <p className="text-xs text-neutral-400 font-light px-4 leading-relaxed">
                    This simulates an audio-visual interview showcasing student portfolios, before-after results, and employment placements designed by WASIVIO Digital Agency.
                  </p>
                </div>

                <div className="pt-4 flex justify-center">
                  <button
                    onClick={() => setPlayVideoId(null)}
                    className="rounded-full bg-gradient-to-r from-rosegold-500 to-gold-500 text-white font-bold text-xs uppercase px-6 py-3 tracking-widest hover:opacity-90"
                  >
                    Done Watching
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
