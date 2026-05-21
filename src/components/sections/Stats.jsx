import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '30+', label: 'Років традицій' },
  { value: '500+', label: 'Вихованців' },
  { value: '2', label: 'Зали у Сумах' },
  { value: '🥇 Десятки', label: 'Майстрів спорту' },
];

const Stats = () => {
  return (
    <section className="bg-[var(--bg-secondary)] border-y border-[var(--border-subtle)] relative z-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--border-subtle)] divide-y md:divide-y-0">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="py-10 md:py-16 text-center flex flex-col items-center justify-center bg-gradient-to-b from-transparent hover:to-[rgba(245,130,13,0.03)] transition-colors"
            >
              <div className="text-4xl sm:text-5xl lg:text-7xl font-bebas text-[var(--accent-fire)] mb-2 drop-shadow-[0_0_10px_rgba(245,130,13,0.3)]">
                {stat.value}
              </div>
              <div className="text-[var(--text-muted)] font-montserrat text-sm md:text-base uppercase tracking-widest font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
