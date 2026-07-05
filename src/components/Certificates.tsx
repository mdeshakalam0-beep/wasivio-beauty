/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, Briefcase, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { CERTIFICATES_DATA } from '../data';

interface CertificatesProps {
  darkMode: boolean;
}

export default function Certificates({ darkMode }: CertificatesProps) {
  const placementMetrics = [
    {
      id: 'metric-1',
      percentage: '98.5%',
      label: 'Placement Ratio',
      icon: Briefcase,
      desc: 'Success in luxury beauty centers and international salons.'
    },
    {
      id: 'metric-2',
      percentage: '120+',
      label: 'Partner Salons',
      icon: MapPin,
      desc: 'Top recruiters including Lakmé, VLCC, and Naturals chains.'
    },
    {
      id: 'metric-3',
      percentage: '₹4.5L+',
      label: 'Average Annual Package',
      icon: GraduationCap,
      desc: 'Highest salary potentials for specialized human hair wig customizers.'
    }
  ];

  return (
    <section
      id="certificates"
      className={`py-20 border-t transition-colors duration-300 ${
        darkMode ? 'bg-transparent border-neutral-900 text-white' : 'bg-transparent border-[#D4AF37]/15 text-[#1A1A1A]'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-[0.25em] text-rosegold-500 uppercase block">
            Accreditations & Placements
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-tight">
            Accredited <span className="italic font-normal text-gradient bg-gradient-to-r from-rosegold-500 to-gold-500">Global Certifications</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-rosegold-500 to-gold-400 mx-auto" />
          <p className={`text-sm font-light max-w-2xl mx-auto ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
            Graduating with an SS Beauty School certification provides instant global employment authorization, validating your expertise in premium clinical aesthetics.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {CERTIFICATES_DATA.map((cert) => (
            <div
              key={cert.id}
              className={`p-8 rounded-[2.5rem] border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between ${
                darkMode
                  ? 'bg-neutral-900/25 border-neutral-800/80 hover:bg-neutral-900/40 hover:border-rosegold-500/20'
                  : 'bg-neutral-50/40 border-neutral-200/50 hover:bg-white hover:border-rosegold-400/20'
              }`}
            >
              <div className="space-y-6">
                {/* Visual diploma paper overlay style */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200/10 shadow-md">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                    <div className="text-center space-y-1.5">
                      <Award className="h-10 w-10 text-gold-400 mx-auto" />
                      <p className="font-serif text-sm font-bold text-white uppercase tracking-wider leading-none">DIPLOMA OF EXCELLENCE</p>
                      <p className="text-[9px] text-neutral-300 tracking-widest font-mono">SS BEAUTY SCHOOL &amp; WIGS</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-[10px] text-gold-500 font-bold uppercase tracking-widest leading-none">
                    Issued by: {cert.issuer}
                  </p>
                  <p className={`text-xs font-light leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {cert.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-200/10 mt-6 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-rosegold-400" />
                <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                  INTERNATIONAL COMPLIANT
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Placement Metrics (Bento-Grid style) */}
        <div className={`p-8 sm:p-12 rounded-[2.5rem] border ${
          darkMode
            ? 'bg-neutral-900/35 border-neutral-800'
            : 'bg-gold-50/20 border-gold-100 shadow-md shadow-gold-500/5'
        }`}>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-semibold tracking-widest text-rosegold-500 uppercase block mb-1">Career Placements</span>
            <h3 className="font-serif text-2xl font-semibold">Our Placement Success Metrics</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {placementMetrics.map((met) => {
              const MetricIcon = met.icon;
              return (
                <div key={met.id} className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 bg-gradient-to-tr from-rosegold-500 to-gold-500 text-white rounded-2xl">
                      <MetricIcon className="h-6 w-6" />
                    </div>
                  </div>
                  <h4 className="text-4xl font-serif font-bold text-gradient bg-gradient-to-r from-rosegold-500 to-gold-500">
                    {met.percentage}
                  </h4>
                  <p className={`text-sm font-semibold tracking-wider uppercase ${darkMode ? 'text-white' : 'text-neutral-800'}`}>
                    {met.label}
                  </p>
                  <p className={`text-xs font-light leading-relaxed max-w-xs mx-auto ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {met.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
