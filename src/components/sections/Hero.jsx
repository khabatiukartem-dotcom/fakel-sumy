import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import heroPoster from '../../assets/generated/hero-poster.png';
import heroVideo from '../../assets/generated/hero-video.mp4';

const EASE_OUT = [0.22, 1, 0.36, 1];

const Hero = () => (
  <section className="relative min-h-[100dvh] flex items-center pt-24 overflow-hidden">

    {/* Video background — loops silently, falls back to poster */}
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={heroPoster}
        className="w-full h-full object-cover object-center"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(13,13,13,0.78)] via-[rgba(13,13,13,0.5)] to-[rgba(13,13,13,0.88)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(13,13,13,0.5)_100%)]" />
    </div>

    {/* Fire glow */}
    <motion.div
      className="absolute bottom-0 left-0 w-[700px] h-[450px] z-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 2.5 }}
      style={{ background: "radial-gradient(ellipse at bottom left, rgba(245,130,13,0.14) 0%, transparent 70%)" }}
    />

    <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
      <div className="max-w-4xl">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-[var(--accent-fire)]" />
          <span className="text-[var(--accent-fire)] font-montserrat font-bold tracking-[0.2em] text-xs uppercase">
            Суми · З 1990-х · Гордість України
          </span>
        </motion.div>

        {/* H1 — lines slide up from clip */}
        <h1 className="flex flex-col mb-10 gap-1">
          {[
            { text: "ВИХОВУЄМО", fire: false },
            { text: "ЧЕМПІОНІВ", fire: true },
            { text: "З ХАРАКТЕРОМ", fire: false },
          ].map(({ text, fire }, i) => (
            <div key={text} className="overflow-hidden">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.13, duration: 0.65, ease: EASE_OUT }}
                className={`block font-bebas leading-[0.88] tracking-tight text-[clamp(3.5rem,10vw,8.5rem)] ${
                  fire ? "text-[var(--accent-fire)]" : "text-[var(--text-primary)]"
                }`}
                style={fire ? { textShadow: "0 0 50px rgba(245,130,13,0.3)" } : {}}
              >
                {text}
              </motion.span>
            </div>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.56, duration: 0.5, ease: EASE_OUT }}
          className="text-[var(--text-muted)] text-lg md:text-xl font-montserrat max-w-xl mb-12 leading-relaxed"
        >
          Дзюдо та Самбо для дітей і дорослих. Два зали у Сумах. Тренери — майстри спорту з досвідом поколінь.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.45, ease: EASE_OUT }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Записатись на пробне заняття
          </Button>
          <Button variant="outline" size="lg" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
            Дізнатись більше
          </Button>
        </motion.div>
      </div>
    </div>

    {/* Scroll cue */}
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}>
        <ChevronDown className="w-8 h-8 text-[var(--accent-fire)] opacity-70" />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
