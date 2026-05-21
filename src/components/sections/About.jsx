import React from 'react';
import { motion } from 'framer-motion';
import aboutBg from '../../assets/generated/about-bg.png';

const EASE_OUT = [0.22, 1, 0.36, 1];

const About = () => {
  return (
    <section id="about" className="relative py-24 lg:py-36 overflow-hidden bg-[var(--bg-primary)]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: real photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm aspect-[4/3]">
              <img
                src={aboutBg}
                alt="Зал «Факел» Суми — татамі та спортивне обладнання"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(245,130,13,0.06)] to-transparent mix-blend-color-dodge" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[var(--accent-fire)] opacity-25 rounded-sm pointer-events-none" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-[var(--accent-gold)] opacity-15 rounded-sm pointer-events-none" />
          </motion.div>

          {/* Right: text */}
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="border-l-4 border-[var(--accent-fire)] pl-8 py-2"
            >
              <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] italic leading-[1.05] tracking-wide">
                «Факел» — це не просто клуб.{" "}
                <span className="text-[var(--accent-fire)]">Це борцівська родина з душею.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.12, ease: EASE_OUT }}
              className="text-[var(--text-muted)] font-montserrat text-lg space-y-5 leading-relaxed"
            >
              <p>
                Наш клуб заснований на глибоких традиціях українських борцівських видів спорту. Від першого залу до великої родини, ми пройшли шлях довжиною у десятиліття, виховавши не одне покоління гідних людей.
              </p>
              <p>
                Маючи <strong className="text-[var(--text-primary)] font-semibold">два сучасні зали у Сумах</strong>, ми раді вітати всіх: від 5-річних малюків до дорослих спортсменів, що прагнуть змагань елітного рівня.
              </p>
              <p>
                Усі тренери — майстри спорту, чемпіони та сертифіковані фахівці.{" "}
                <strong className="text-[var(--accent-gold)] font-semibold">Строга дисципліна + батьківська турбота = характер на все життя.</strong>
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
