import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Section id="about" darker withDiagonalCut>
      <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center pl-4 pr-4 md:px-0">
        
        {/* Left Side: Pull Quote */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="border-l-4 border-[var(--accent-fire)] pl-8 lg:pl-12 py-4 relative"
        >
          <div className="absolute top-0 left-0 w-24 h-24 bg-[var(--accent-fire)] opacity-5 rounded-full blur-2xl -translate-x-12 -translate-y-4 pointer-events-none"></div>
          <h3 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] italic leading-[1.1] tracking-wide relative z-10">
            «Факел» — це не просто клуб. <br/>
            <span className="text-[var(--accent-fire)]">Це борцівська родина з душею.</span>
          </h3>
        </motion.div>

        {/* Right Side: Text Body */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[var(--text-muted)] font-montserrat text-lg space-y-6"
        >
          <p>
            Наш клуб заснований на глибоких традиціях українських борцівських видів спорту. Від першого залу до великої родини, ми пройшли шлях довжиною у десятиліття, виховавши не одне покоління гідних людей.
          </p>
          <p>
            Маючи <strong className="text-[var(--text-primary)]">два сучасні зали у Сумах</strong>, ми раді вітати всіх: від 5-річних малюків, які роблять свої перші кроки на татамі, до дорослих спортсменів, що прагнуть змагань елітного рівня.
          </p>
          <p>
            Усі наші тренери — діючі майстри спорту, чемпіони та сертифіковані фахівці, чия філософія проста, але дієва: <strong className="text-[var(--accent-gold)]">строга дисципліна + батьківська турбота = характер на все життя.</strong>
          </p>
        </motion.div>

      </div>
    </Section>
  );
};

export default About;
