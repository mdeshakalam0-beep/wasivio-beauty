/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Check, Send, AlertTriangle } from 'lucide-react';
import { COURSES_DATA, WIG_SERVICES, SALON_SERVICES } from '../data';

interface EnquiryFormProps {
  darkMode: boolean;
  preselectedCourse?: string;
  onClose?: () => void;
  isModal?: boolean;
}

export default function EnquiryForm({ darkMode, preselectedCourse, onClose, isModal = false }: EnquiryFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Collect all course and service titles for dropdown mapping
  const allTopics = [
    ...COURSES_DATA.map(c => ({ id: c.id, name: c.name, type: 'Course' })),
    ...WIG_SERVICES.map(w => ({ id: w.id, name: w.name, type: 'Wig Service' })),
    ...SALON_SERVICES.map(s => ({ id: s.id, name: s.name, type: 'Salon Service' })),
  ];

  useEffect(() => {
    if (preselectedCourse) {
      setSelectedTopic(preselectedCourse);
    }
  }, [preselectedCourse]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Quick validations
    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (phone.trim().length < 10) {
      setError('Please provide a valid 10-digit mobile number.');
      return;
    }
    if (!selectedTopic) {
      setError('Please select a course or service interest.');
      return;
    }

    // Success transition
    setSubmitted(true);
    setTimeout(() => {
      // Clear values
      setName('');
      setPhone('');
      setMessage('');
      if (!preselectedCourse) setSelectedTopic('');
    }, 1000);
  };

  return (
    <div className={`p-6 sm:p-8 rounded-[2rem] border relative ${
      isModal
        ? darkMode ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-white border-neutral-100 text-neutral-900'
        : darkMode ? 'bg-neutral-900/25 border-neutral-800' : 'bg-neutral-50/50 border-neutral-200/50 shadow-lg shadow-rosegold-500/5'
    }`}>
      
      {/* Modal Close Button */}
      {isModal && onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900/20 hover:bg-neutral-900/50 transition-colors"
        >
          ✕
        </button>
      )}

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="enquiry-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-rosegold-500/30 bg-rosegold-500/5 text-rosegold-500 text-[10px] uppercase font-bold tracking-wider mb-2">
                <Sparkles className="h-3 w-3" />
                <span>Admission & Appointments</span>
              </div>
              
              <h3 className="font-serif text-2xl font-semibold tracking-tight">
                Online Enquiry Form
              </h3>
              
              <p className={`text-xs font-light mt-1 ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                Fill out this custom form to secure a trial seat or book a hair replacement consulting. Our executive will reach out to you within 30 minutes.
              </p>
            </div>

            {/* Error banner */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3.5 rounded-xl border border-red-500/20 bg-red-500/5 flex items-center gap-2 text-xs text-red-500"
              >
                <AlertTriangle className="h-4 w-4 shrink-0" />
                <span>{error}</span>
              </motion.div>
            )}

            {/* Inputs */}
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl text-xs border transition-colors outline-none ${
                    darkMode
                      ? 'bg-neutral-950 border-neutral-800 text-white focus:border-rosegold-500'
                      : 'bg-white border-neutral-300 text-neutral-900 focus:border-rosegold-500'
                  }`}
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-1.5">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Enter 10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl text-xs border transition-colors outline-none ${
                    darkMode
                      ? 'bg-neutral-950 border-neutral-800 text-white focus:border-rosegold-500'
                      : 'bg-white border-neutral-300 text-neutral-900 focus:border-rosegold-500'
                  }`}
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-1.5">
                  Select Course or Service Interest
                </label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  required
                  className={`w-full px-4 py-3 rounded-xl text-xs border transition-colors outline-none cursor-pointer ${
                    darkMode
                      ? 'bg-neutral-950 border-neutral-800 text-white focus:border-rosegold-500'
                      : 'bg-white border-neutral-300 text-neutral-900 focus:border-rosegold-500'
                  }`}
                >
                  <option value="" disabled>-- Choose Option --</option>
                  {allTopics.map((topic, i) => (
                    <option key={i} value={topic.name}>
                      [{topic.type}] {topic.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-1.5">
                  Custom Message (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your requirements or preferred trial date..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl text-xs border transition-colors outline-none resize-none ${
                    darkMode
                      ? 'bg-neutral-950 border-neutral-800 text-white focus:border-rosegold-500'
                      : 'bg-white border-neutral-300 text-neutral-900 focus:border-rosegold-500'
                  }`}
                />
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full rounded-xl py-3.5 bg-gradient-to-r from-rosegold-500 via-rosegold-600 to-gold-500 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-rosegold-500/15 transition-transform hover:scale-[1.02] active:scale-95"
            >
              <Send className="h-4 w-4" />
              <span>Submit Enquiry</span>
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success-form"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-10 space-y-6"
          >
            {/* Animated gold ring success icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 mx-auto border-2 border-emerald-500/40 animate-pulse">
              <Check className="h-8 w-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold text-gradient bg-gradient-to-r from-rosegold-500 to-gold-500 uppercase tracking-wide">
                Enquiry Submitted!
              </h3>
              <p className={`text-xs font-semibold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                Thank you, our senior coordinator will connect with you on WhatsApp/Phone shortly.
              </p>
              <p className="text-[11px] text-neutral-400 font-light max-w-sm mx-auto leading-relaxed">
                A copy of your registration for <strong>"{selectedTopic}"</strong> has been simulated to WASIVIO Digital Agency logs.
              </p>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                if (onClose) onClose();
              }}
              className="rounded-full bg-gradient-to-r from-rosegold-500 to-gold-500 text-white font-bold text-xs uppercase px-6 py-3 tracking-widest hover:opacity-90 transition-transform"
            >
              Submit Another
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
