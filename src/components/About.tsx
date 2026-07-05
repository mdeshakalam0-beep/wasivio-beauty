/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Target, Eye, Award, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const achievements = [
    'Approved by International Quality Accreditations (IAO & ISO 9001:2015)',
    '100% Practical curriculum trained on live professional models',
    'Dedicated placement assistance with international salon chains',
    'Specialized state-of-the-art Wig Ventilation lab set up',
    'Comprehensive premium master kits provided to all students',
  ];

  return (
    <section
      id="about"
      className={`py-20 border-t transition-colors duration-300 ${
        darkMode ? 'bg-transparent border-neutral-900 text-white' : 'bg-transparent border-[#D4AF37]/15 text-[#1A1A1A]'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-[0.25em] text-rosegold-500 uppercase block">
            Our Legacy
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-tight">
            Nurturing Elite Creators, <span className="italic font-normal text-gradient bg-gradient-to-r from-rosegold-500 to-gold-500">Transforming Lives</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-rosegold-500 to-gold-400 mx-auto" />
        </div>

        {/* Grid: Academy Story & Core Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          
          {/* Academy Story (Left) */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-medium tracking-tight">
              The SS Academy Story
            </h3>
            <p className={`text-sm font-light leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Founded in 2016, SS Beauty School arose from a singular vision: to narrow the gap between traditional beauty training and high-end international salon requirements. Over the last decade, we have transformed from a boutique styling studio into Northern India’s premier destination for custom hair wigs, non-surgical hair fixing, and clinical beauty education.
            </p>
            <p className={`text-sm font-light leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              We believe cosmetology is not just a service; it is a blend of precision science, client empathy, and creative visual expression. That is why our courses are designed by real industry veterans with an emphasis on practical live model experience, sterile hygienic practices, and essential client-management soft skills.
            </p>

            {/* Achievements List */}
            <div className="pt-4 space-y-3">
              <h4 className="font-sans text-xs font-bold tracking-wider uppercase text-gold-500">
                Key Accomplishments
              </h4>
              <div className="space-y-2">
                {achievements.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-rosegold-500 mt-0.5 shrink-0" />
                    <span className={`text-xs font-light ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission & Vision Cards (Right) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:pt-8">
            
            {/* Mission Card */}
            <div className={`p-8 rounded-3xl border transition-all duration-300 ${
              darkMode ? 'bg-neutral-900/40 border-neutral-800' : 'bg-rosegold-50/30 border-rosegold-100'
            } hover:shadow-xl hover:shadow-rosegold-500/5`}>
              <div className="p-3 bg-rosegold-500 text-white rounded-2xl w-fit mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h4 className="font-serif text-lg font-medium mb-3">Our Mission</h4>
              <p className={`text-xs font-light leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                To deliver world-class aesthetic and non-surgical hair restoration training, equipping our students with robust skills to achieve immediate high-income placements or successful self-employment.
              </p>
            </div>

            {/* Vision Card */}
            <div className={`p-8 rounded-3xl border transition-all duration-300 ${
              darkMode ? 'bg-neutral-900/40 border-neutral-800' : 'bg-gold-50/30 border-gold-100'
            } hover:shadow-xl hover:shadow-gold-500/5`}>
              <div className="p-3 bg-gold-500 text-white rounded-2xl w-fit mb-6">
                <Eye className="h-6 w-6" />
              </div>
              <h4 className="font-serif text-lg font-medium mb-3">Our Vision</h4>
              <p className={`text-xs font-light leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                To establish ourselves as the most trusted national authority on holistic beauty pedagogy, premium custom human-hair units, and clinical-grade non-surgical hair replacement care.
              </p>
            </div>

          </div>

        </div>

        {/* Founder's Message Layout */}
        <div className={`p-8 sm:p-12 rounded-[2.5rem] border ${
          darkMode ? 'bg-neutral-900/25 border-neutral-800' : 'bg-neutral-50/70 border-neutral-200/50'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Founder Image */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden border-2 border-rosegold-400/50 p-2">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
                  alt="Founder Mrs. Sunita Singh"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Message text */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/5 text-gold-600 text-[10px] uppercase font-bold tracking-wider">
                <Award className="h-3 w-3" />
                <span>Founder & Chief Instructor</span>
              </div>
              
              <h3 className="font-serif text-2xl font-semibold">
                Message from Mrs. Sunita Singh
              </h3>
              
              <p className={`text-sm italic font-light leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                "Beauty is the ultimate confidence booster. At SS Beauty School, our objective is to make you an expert who can curate confidence. Whether you are creating a custom hair patch for a client dealing with chemotherapy-related hair loss, or drafting a glamorous high-definition bridal model, your skills will command immense value. We invite you to learn with passion, practice with dedication, and launch your high-earning beauty career with us."
              </p>

              <div className="pt-2">
                <h4 className="font-serif text-base font-semibold text-gradient bg-gradient-to-r from-rosegold-500 to-gold-500">
                  Mrs. Sunita Singh
                </h4>
                <p className="text-xs text-neutral-400 uppercase tracking-widest font-mono">
                  Master Cosmetologist, CIDESCO Certified
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
