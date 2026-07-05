/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          id="luxury-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
        >
          <div className="relative flex flex-col items-center">
            {/* Elegant Outer Ring */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              className="absolute h-24 w-24 rounded-full border border-t-rosegold-500 border-r-transparent border-b-gold-500 border-l-transparent"
            />
            
            {/* Center Logo Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-neutral-900 border border-neutral-800 shadow-xl"
            >
              <Sparkles className="h-8 w-8 text-rosegold-400" />
            </motion.div>

            {/* Premium Typography Brand Text */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 font-serif text-xl tracking-[0.25em] text-gold-300 uppercase"
            >
              SS BEAUTY
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-2 text-xs tracking-wider uppercase text-rosegold-100 font-light"
            >
              Academy & Hair Wig Services
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ delay: 0.5, duration: 1.2, ease: 'easeInOut' }}
              className="mt-4 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-6 text-[10px] tracking-widest text-neutral-400 uppercase font-mono"
            >
              DEMO BY WASIVIO
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
