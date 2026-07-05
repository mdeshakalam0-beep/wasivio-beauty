/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FAQS_DATA } from '../data';

interface FAQProps {
  darkMode: boolean;
}

export default function FAQ({ darkMode }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className={`py-20 border-t transition-colors duration-300 ${
        darkMode ? 'bg-transparent border-neutral-900 text-white' : 'bg-transparent border-[#D4AF37]/15 text-[#1A1A1A]'
      }`}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-[0.25em] text-rosegold-500 uppercase block">
            Got Questions? We Have Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-tight">
            Frequently Asked <span className="italic font-normal text-gradient bg-gradient-to-r from-rosegold-500 to-gold-500">Curriculum Queries</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-rosegold-500 to-gold-400 mx-auto" />
          <p className={`text-sm font-light max-w-2xl mx-auto ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
            Browse our curated guide on course enrollments, system lifespans, bonding safeties, and accreditation values.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? darkMode
                      ? 'bg-neutral-900 border-rosegold-500/25 shadow-lg shadow-rosegold-500/5'
                      : 'bg-white border-rosegold-400/25 shadow-lg shadow-rosegold-500/5'
                    : darkMode
                      ? 'bg-neutral-950/60 border-neutral-800/80 hover:border-neutral-700'
                      : 'bg-white border-neutral-200 hover:border-neutral-300'
                }`}
              >
                {/* Trigger Row Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors cursor-pointer outline-none"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className={`h-5 w-5 shrink-0 mt-0.5 transition-colors ${
                      isOpen ? 'text-rosegold-500' : 'text-neutral-400'
                    }`} />
                    <span className={`text-sm font-semibold leading-tight ${
                      isOpen
                        ? darkMode ? 'text-white' : 'text-neutral-900'
                        : darkMode ? 'text-neutral-300' : 'text-neutral-700'
                    }`}>
                      {faq.question}
                    </span>
                  </div>

                  <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-rosegold-500' : 'text-neutral-400'
                  }`} />
                </button>

                {/* Animated Answer panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className={`px-5 pb-5 pt-1 border-t text-xs sm:text-sm font-light leading-relaxed ${
                        darkMode ? 'border-neutral-800/50 text-neutral-400' : 'border-neutral-100 text-neutral-600'
                      }`}>
                        <div className="pl-8">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
