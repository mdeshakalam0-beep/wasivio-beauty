/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Clock, Tag, Sparkles, SlidersHorizontal, Eye } from 'lucide-react';
import { COURSES_DATA } from '../data';
import { Course } from '../types';

interface CoursesProps {
  darkMode: boolean;
  onOpenEnquiry: (courseName: string) => void;
}

export default function Courses({ darkMode, onOpenEnquiry }: CoursesProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'makeup' | 'hair' | 'wig' | 'beauty'>('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'makeup', label: 'Professional Makeup' },
    { id: 'hair', label: 'Hair Sculpting & Styling' },
    { id: 'wig', label: 'Wig & Toupee Training' },
    { id: 'beauty', label: 'Beautician & Skin Care' },
  ] as const;

  const filteredCourses = activeCategory === 'all'
    ? COURSES_DATA
    : COURSES_DATA.filter(course => course.category === activeCategory);

  return (
    <section
      id="courses"
      className={`py-20 border-t transition-colors duration-300 ${
        darkMode ? 'bg-transparent border-neutral-900 text-white' : 'bg-transparent border-[#D4AF37]/15 text-[#1A1A1A]'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-semibold tracking-[0.25em] text-rosegold-500 uppercase block">
            Elite Training Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-tight">
            Our Certified <span className="italic font-normal text-gradient bg-gradient-to-r from-rosegold-500 to-gold-500">Beauty & Wig Courses</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-rosegold-500 to-gold-400 mx-auto" />
          <p className={`text-sm font-light max-w-2xl mx-auto ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
            Select an industry-accredited specialization designed to build practical mastery, complete with premium master-kits and global certifications.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedCourse(null);
              }}
              className={`text-xs uppercase tracking-wider px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-rosegold-500 to-gold-500 text-white shadow-md shadow-rosegold-500/15'
                  : darkMode
                    ? 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white border border-neutral-800'
                    : 'bg-white text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 border border-neutral-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Courses Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                layout
                key={course.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`group relative rounded-[2rem] overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  darkMode
                    ? 'bg-neutral-950 border-neutral-800 hover:border-rosegold-500/30'
                    : 'bg-white border-neutral-200/60 hover:border-rosegold-400/30'
                }`}
              >
                {/* Course Image Wrapper */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Glass level badge over image */}
                  <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-wider glass-dark bg-black/50 text-gold-300 border border-white/10">
                    {course.level}
                  </div>
                </div>

                {/* Course Details */}
                <div className="p-6 space-y-4">
                  <h3 className={`font-serif text-lg font-semibold leading-snug transition-colors group-hover:text-rosegold-500 ${
                    darkMode ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {course.name}
                  </h3>
                  
                  <p className={`text-xs font-light line-clamp-2 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {course.description}
                  </p>

                  {/* Highlights Bullet pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {course.highlights.slice(0, 2).map((hl, i) => (
                      <span key={i} className={`text-[10px] px-2.5 py-1 rounded-md ${
                        darkMode ? 'bg-neutral-900 text-neutral-300' : 'bg-rosegold-50/60 text-rosegold-700'
                      }`}>
                        ✓ {hl}
                      </span>
                    ))}
                  </div>

                  <div className="h-[1px] bg-neutral-200/10 my-4" />

                  {/* Price & Duration */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-rosegold-400" />
                      <div>
                        <p className="text-[10px] text-neutral-400 uppercase tracking-widest block leading-none">Duration</p>
                        <span className="text-xs font-medium">{course.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Tag className="h-4 w-4 text-gold-400" />
                      <div className="text-right">
                        <p className="text-[10px] text-neutral-400 uppercase tracking-widest block leading-none">Fees</p>
                        <span className="text-xs font-semibold text-gradient bg-gradient-to-r from-rosegold-500 to-gold-500">{course.fees}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="grid grid-cols-2 gap-3 pt-3">
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className={`flex items-center justify-center gap-1.5 rounded-xl text-[11px] uppercase tracking-wider font-semibold py-2.5 border transition-all ${
                        darkMode
                          ? 'border-neutral-800 text-neutral-300 hover:bg-neutral-900 hover:text-white'
                          : 'border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                      }`}
                    >
                      <Eye className="h-3 w-3" />
                      <span>Details</span>
                    </button>
                    
                    <button
                      onClick={() => onOpenEnquiry(course.name)}
                      className="rounded-xl text-[11px] uppercase tracking-wider font-semibold py-2.5 text-center bg-gradient-to-r from-rosegold-500 to-gold-500 text-white shadow-md shadow-rosegold-500/10 transition-transform duration-300 hover:scale-105"
                    >
                      Enroll Now
                    </button>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Selected Course Details Modal Overlay */}
        <AnimatePresence>
          {selectedCourse && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Blur backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCourse(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className={`relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border ${
                  darkMode ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-white border-neutral-100 text-neutral-900'
                }`}
              >
                {/* Image panel */}
                <div className="relative h-56 sm:h-64">
                  <img
                    src={selectedCourse.image}
                    alt={selectedCourse.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  
                  {/* Modal Close Button */}
                  <button
                    onClick={() => setSelectedCourse(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 text-white hover:bg-black/80 rounded-full border border-white/10 transition-colors"
                  >
                    ✕
                  </button>

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-[10px] text-gold-400 font-bold tracking-widest uppercase bg-black/40 px-2.5 py-1 rounded-md border border-white/10">
                      {selectedCourse.level} Module
                    </span>
                    <h3 className="font-serif text-2xl font-semibold text-white mt-2 leading-tight">
                      {selectedCourse.name}
                    </h3>
                  </div>
                </div>

                {/* Content body panel */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-rosegold-500 font-bold mb-1.5">Description</h4>
                    <p className={`text-xs sm:text-sm font-light leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      {selectedCourse.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-gold-500 font-bold mb-3">Syllabus Highlights</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedCourse.highlights.map((hl, index) => (
                        <div key={index} className="flex items-start gap-2 text-xs">
                          <Sparkles className="h-4 w-4 text-rosegold-500 shrink-0 mt-0.5" />
                          <span className={darkMode ? 'text-neutral-300' : 'text-neutral-700'}>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-neutral-200/10 gap-4">
                    <div className="flex gap-6">
                      <div>
                        <p className="text-[10px] text-neutral-400 uppercase tracking-widest leading-none">Course Duration</p>
                        <span className="text-sm font-semibold">{selectedCourse.duration}</span>
                      </div>
                      <div>
                        <p className="text-[10px] text-neutral-400 uppercase tracking-widest leading-none">Total Investment</p>
                        <span className="text-sm font-semibold text-gradient bg-gradient-to-r from-rosegold-500 to-gold-500">{selectedCourse.fees}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        onOpenEnquiry(selectedCourse.name);
                        setSelectedCourse(null);
                      }}
                      className="w-full sm:w-auto rounded-full bg-gradient-to-r from-rosegold-500 to-gold-500 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-rosegold-500/15 transition-transform hover:scale-105 active:scale-95"
                    >
                      Book Course Seat
                    </button>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
