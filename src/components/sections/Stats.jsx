import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '30+', label: 'Років традицій' },
  { value: '500+', label: 'Вихованців' },
  { value: '2', label: 'Зали у Сумах' },
  { value: '20+', label: 'Майстрів спорту' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const Stats = () => (
  <section className="bg-[var(--bg-secondary)] border-y border-[var(--border-subtle)] relative z-20">
    <motion.div
      className="container mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--border-subtle)] divide-y md:divide-y-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={itemVariants}
          className="py-10 md:py-16 text-center flex flex-col items-center justify-center"
        >
          <div className="text-4xl sm:text-5xl lg:text-7xl font-bebas text-[var(--accent-fire)] mb-2 drop-shadow-[0_0_12px_rgba(245,130,13,0.25)]">
            {stat.value}
          </div>
          <div className="text-[var(--text-muted)] font-montserrat text-xs md:text-sm uppercase tracking-[0.15em] font-semibold">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Stats;
