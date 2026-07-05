/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, PhoneCall, Sparkles, X, ChevronUp } from 'lucide-react';

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import WigServices from './components/WigServices';
import SalonServices from './components/SalonServices';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Certificates from './components/Certificates';
import EnquiryForm from './components/EnquiryForm';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalTopic, setModalTopic] = useState<string>('');
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  useEffect(() => {
    // Synchronize scroll-to-top display trigger
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenModal = (topicName?: string) => {
    setModalTopic(topicName || '');
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalTopic('');
  };

  return (
    <div className={darkMode ? 'dark text-white' : 'text-neutral-900'}>
      {/* Luxury Loader Pre-animation */}
      <Loader />

      {/* Main Page Container with Artistic Flair decorative blobs */}
      <div className={`min-h-screen transition-colors duration-300 font-sans relative overflow-x-hidden ${
        darkMode ? 'bg-neutral-950 text-white' : 'bg-[#FAF9F6] text-[#1A1A1A]'
      }`}>
        {/* Background Decorative Elements */}
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#FADADD] rounded-full blur-[120px] opacity-40 pointer-events-none z-0"></div>
        <div className="absolute top-[800px] left-[-100px] w-[350px] h-[350px] bg-[#E5B299] rounded-full blur-[100px] opacity-30 pointer-events-none z-0"></div>
        <div className="absolute bottom-[400px] right-[-100px] w-[450px] h-[450px] bg-[#FADADD] rounded-full blur-[140px] opacity-25 pointer-events-none z-0"></div>
        <div className="absolute bottom-[-50px] left-[-50px] w-[300px] h-[300px] bg-[#E5B299] rounded-full blur-[100px] opacity-30 pointer-events-none z-0"></div>
        
        {/* Sticky Navbar */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onOpenEnquiry={handleOpenModal}
        />

        {/* Hero Banner Section */}
        <Hero
          darkMode={darkMode}
          onOpenEnquiry={() => handleOpenModal('SS Cosmetology Admission')}
        />

        {/* About Story & Founder Message */}
        <About darkMode={darkMode} />

        {/* Courses Catalog Section */}
        <Courses
          darkMode={darkMode}
          onOpenEnquiry={handleOpenModal}
        />

        {/* Hair Wig & Restorations Section */}
        <WigServices
          darkMode={darkMode}
          onOpenEnquiry={handleOpenModal}
        />

        {/* Salon Services & Packages Menu */}
        <SalonServices
          darkMode={darkMode}
          onOpenEnquiry={handleOpenModal}
        />

        {/* Premium Media Gallery Section */}
        <Gallery darkMode={darkMode} />

        {/* Success Stories & Reviews Section */}
        <Testimonials darkMode={darkMode} />

        {/* Accreditations & Placements Section */}
        <Certificates darkMode={darkMode} />

        {/* Static Inline Enquiry Form block before Contact */}
        <section
          id="enquiry-section"
          className={`py-16 border-t transition-colors duration-300 ${
            darkMode ? 'bg-neutral-900/10 border-neutral-800' : 'bg-gold-50/10 border-neutral-100'
          }`}
        >
          <div className="mx-auto max-w-xl px-4 sm:px-6">
            <EnquiryForm
              darkMode={darkMode}
              preselectedCourse="SS Cosmetology Admission"
            />
          </div>
        </section>

        {/* FAQs Accordion */}
        <FAQ darkMode={darkMode} />

        {/* Location & Contact Details */}
        <Contact
          darkMode={darkMode}
          onOpenEnquiry={() => handleOpenModal('Custom Scalp Consulting')}
        />

        {/* Footer info & Credits */}
        <Footer darkMode={darkMode} />

        {/* Floating Conversion Widgets (WhatsApp, Direct Call, Scroll Up) */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
          
          {/* Back to top scroll circle */}
          <AnimatePresence>
            {showBackToTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`p-3 rounded-full border transition-all shadow-lg ${
                  darkMode
                    ? 'bg-neutral-900 border-neutral-800 text-gold-400 hover:text-white'
                    : 'bg-white border-neutral-200 text-rosegold-500 hover:text-rosegold-700'
                }`}
                aria-label="Back to Top"
              >
                <ChevronUp className="h-5 w-5" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Quick Call conversion anchor */}
          <a
            href="tel:+919876543210"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-gold-500 to-gold-600 text-white shadow-xl hover:scale-105 active:scale-95 transition-transform"
            aria-label="Call SS Beauty School"
          >
            <PhoneCall className="h-5 w-5 animate-pulse" />
          </a>

          {/* Floating WhatsApp trigger */}
          <a
            href="https://wa.me/919876543210?text=Hi%20SS%20Beauty%20School,%20I'm%20interested%20in%20enquiring%20about%20your%20services/courses."
            target="_blank"
            rel="noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:scale-105 active:scale-95 transition-transform relative group"
            aria-label="Chat on WhatsApp"
          >
            {/* Soft pulsing green ring */}
            <span className="absolute -inset-1 rounded-full bg-green-500/30 blur-sm animate-ping pointer-events-none" />
            <MessageCircle className="h-6 w-6 relative z-10" />
            
            {/* Hover help tooltip */}
            <span className="absolute right-16 scale-0 group-hover:scale-100 transition-transform origin-right duration-200 whitespace-nowrap bg-neutral-950 text-white text-[10px] px-3 py-1.5 rounded-lg border border-white/10 shadow-lg font-mono">
              CHAT WITH ADMISSIONS
            </span>
          </a>

        </div>

        {/* Global Enquiry Form Dialog Modal */}
        <AnimatePresence>
          {modalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Blur Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseModal}
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="relative w-full max-w-lg z-10"
              >
                <EnquiryForm
                  darkMode={darkMode}
                  preselectedCourse={modalTopic}
                  onClose={handleCloseModal}
                  isModal={true}
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
