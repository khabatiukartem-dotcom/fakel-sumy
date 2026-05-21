import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';

const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.6, ease: "easeOut" }
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[var(--bg-primary)]">
      {/* Abstract Tatami / Judo Silhouette background effect on the right */}
      <div className="absolute top-0 right-0 w-full md:w-2/3 h-full z-0 opacity-20 pointer-events-none">
        <svg viewBox="0 0 800 1000" className="w-full h-full object-cover text-white translate-x-[20%] md:translate-x-[30%]">
          {/* A minimal geometric representation of two fighters in a throw */}
          <path d="M400,200 L600,600 L200,800 Z" fill="none" stroke="currentColor" strokeWidth="4" />
          <circle cx="500" cy="300" r="40" fill="currentColor" />
          <path d="M500,340 L450,500 L300,550" fill="none" stroke="var(--accent-fire)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M420,400 L600,450 L750,300" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="100" y="700" width="800" height="20" fill="var(--accent-gold)" opacity="0.5" transform="rotate(-15 100 700)" />
        </svg>
      </div>

      {/* Soft radial glow behind the title */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[var(--accent-fire)] rounded-full blur-[120px] opacity-5 z-0"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 border border-[var(--border-subtle)] rounded-sm mb-6"
          >
            <span className="text-[var(--accent-fire)] font-bebas tracking-widest text-sm uppercase">
              Суми · З 1990-х · Гордість України
            </span>
          </motion.div>

          {/* H1 Titles Staggered */}
          <h1 className="flex flex-col mb-8">
            <motion.span 
              custom={1} initial="hidden" animate="visible" variants={titleVariants}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] font-bebas leading-[0.85] text-[var(--text-primary)]"
            >
              ВИХОВУЄМО
            </motion.span>
            <motion.span 
              custom={2} initial="hidden" animate="visible" variants={titleVariants}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] font-bebas leading-[0.85] text-[var(--accent-fire)] text-glow"
            >
              ЧЕМПІОНІВ
            </motion.span>
            <motion.span 
              custom={3} initial="hidden" animate="visible" variants={titleVariants}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] font-bebas leading-[0.85] text-[var(--text-primary)]"
            >
              З ХАРАКТЕРОМ
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-[var(--text-muted)] text-lg md:text-xl font-montserrat max-w-xl mb-10 leading-relaxed"
          >
            Дзюдо та Самбо для дітей і дорослих. Два зали у Сумах. Тренери — майстри спорту з досвідом поколінь.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth'})}>
              Записатись на пробне заняття
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth'})}>
              Дізнатись більше
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-10 h-10 text-[var(--accent-fire)] opacity-80" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
