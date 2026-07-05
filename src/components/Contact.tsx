/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Share2, Compass } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
  onOpenEnquiry: () => void;
}

export default function Contact({ darkMode, onOpenEnquiry }: ContactProps) {
  const contactInfo = [
    {
      id: 'contact-address',
      icon: MapPin,
      title: 'Our Academy Location',
      details: 'M-72, 2nd Floor, Greater Kailash II, Main Market Road, New Delhi, India 110048',
    },
    {
      id: 'contact-phone',
      icon: Phone,
      title: 'Academy Hotlines',
      details: '+91 98765 43210 / +91 011 2623 8899',
    },
    {
      id: 'contact-email',
      icon: Mail,
      title: 'Electronic Correspondence',
      details: 'admissions@ssbeautyschool.com / info@ssbeautyschool.com',
    },
    {
      id: 'contact-hours',
      icon: Clock,
      title: 'Operational Business Hours',
      details: 'Monday - Saturday: 10:00 AM - 07:00 PM (Sunday Private Appointments Only)',
    }
  ];

  return (
    <section
      id="contact"
      className={`py-20 border-t transition-colors duration-300 ${
        darkMode ? 'bg-transparent border-neutral-900 text-white' : 'bg-transparent border-[#D4AF37]/15 text-[#1A1A1A]'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-[0.25em] text-rosegold-500 uppercase block">
            Connect With Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-tight">
            Schedule a Personal <span className="italic font-normal text-gradient bg-gradient-to-r from-rosegold-500 to-gold-500">Campus Walkthrough</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-rosegold-500 to-gold-400 mx-auto" />
          <p className={`text-sm font-light max-w-2xl mx-auto ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
            Drop by our headquarters in Greater Kailash, New Delhi for face-to-face scalp mapping consultations or live training classroom auditing.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Details list (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item) => {
                const ContactIcon = item.icon;
                return (
                  <div key={item.id} className="flex gap-4">
                    <div className={`p-3.5 rounded-2xl shrink-0 h-fit ${
                      darkMode ? 'bg-neutral-900 text-rosegold-400' : 'bg-rosegold-50 text-rosegold-600'
                    }`}>
                      <ContactIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-bold text-neutral-400 mb-1 leading-none">
                        {item.title}
                      </h4>
                      <p className={`text-xs sm:text-sm font-light leading-relaxed ${
                        darkMode ? 'text-neutral-200' : 'text-neutral-800'
                      }`}>
                        {item.details}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Media Channels */}
            <div className="pt-6 border-t border-neutral-200/10 space-y-3">
              <h4 className="text-xs uppercase tracking-widest font-bold text-neutral-400">
                Official Digital Channels
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-xl border transition-colors ${
                    darkMode ? 'border-neutral-800 hover:bg-neutral-900 hover:text-rosegold-400' : 'border-neutral-200 hover:bg-neutral-50 hover:text-rosegold-600'
                  }`}
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-xl border transition-colors ${
                    darkMode ? 'border-neutral-800 hover:bg-neutral-900 hover:text-rosegold-400' : 'border-neutral-200 hover:bg-neutral-50 hover:text-rosegold-600'
                  }`}
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-xl border transition-colors ${
                    darkMode ? 'border-neutral-800 hover:bg-neutral-900 hover:text-rosegold-400' : 'border-neutral-200 hover:bg-neutral-50 hover:text-rosegold-600'
                  }`}
                  aria-label="Youtube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Premium Google Maps Mockup Embed (Right 7 cols) */}
          <div className="lg:col-span-7">
            <div className={`relative rounded-[2.5rem] overflow-hidden aspect-[16/10] border ${
              darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-50 border-neutral-200/85'
            } shadow-2xl`}>
              
              {/* Abstract luxury styled background mapping representation */}
              <div className="absolute inset-0 bg-neutral-900/10" />
              
              {/* Premium abstract styled vector "Map lines" background mock */}
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, #b76e79 1px, transparent 1px), radial-gradient(circle, #d4af37 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                backgroundPosition: '0 0, 20px 20px'
              }} />

              {/* Centered gold compass pin representing Google Maps location */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-4">
                {/* Floating gold pin animation */}
                <div className="relative inline-block animate-bounce">
                  <div className="absolute -inset-1 rounded-full bg-rosegold-500/30 blur-sm animate-ping" />
                  <div className="relative h-12 w-12 rounded-full bg-gradient-to-tr from-rosegold-500 to-gold-500 border border-white/20 flex items-center justify-center shadow-lg">
                    <Compass className="h-6 w-6 text-white animate-spin-slow" />
                  </div>
                </div>

                <div className={`p-4 rounded-2xl glass-dark border border-white/10 bg-black/80 max-w-xs shadow-xl`}>
                  <p className="text-[10px] text-gold-400 font-bold uppercase tracking-wider">
                    SS HEADQUARTERS
                  </p>
                  <p className="text-xs text-white font-medium mt-1">
                    M-72, Greater Kailash II, Delhi
                  </p>
                  <p className="text-[10px] text-neutral-400 font-light mt-0.5 leading-tight">
                    Adjacent to Greater Kailash Metro Station Gate No. 2
                  </p>
                  
                  {/* Directions link helper */}
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-[10px] uppercase font-bold text-rosegold-400 tracking-widest hover:text-rosegold-300"
                  >
                    <span>Get Live Directions</span>
                    <Share2 className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Maps indicator tabs */}
              <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-xl text-[9px] uppercase font-bold tracking-widest bg-neutral-950/80 text-white backdrop-blur-md border border-white/5">
                🌐 GOOGLE MAPS INTERACTION SIMULATION
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
