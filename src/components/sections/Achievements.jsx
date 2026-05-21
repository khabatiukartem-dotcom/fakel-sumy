import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';

const achievements = [
  {
    num: '01',
    title: 'Чемпіони всеукраїнських змагань',
    desc: 'з дзюдо та самбо різних вікових категорій',
  },
  {
    num: '02',
    title: 'Десятки майстрів спорту',
    desc: 'виховані за всі роки існування клубу',
  },
  {
    num: '03',
    title: 'Турнір «Осінній чемпіон»',
    desc: 'Щорічний турнір клубу — понад 100 учасників',
  },
  {
    num: '04',
    title: 'Різдвяний турнір',
    desc: 'Для малечі — перші медалі та змагальний досвід від 5 років',
  },
  {
    num: '05',
    title: 'Міжнародні старти',
    desc: 'Вихованці клубу захищають честь країни за кордоном',
  },
];

const Achievements = () => (
  <Section id="achievements" title="НАША ГОРДІСТЬ">
    <div className="flex flex-col max-w-3xl mx-auto pb-8">
      {achievements.map((item, idx) => (
        <motion.div
          key={item.num}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="group flex items-start gap-6 py-7 border-b border-[var(--border-subtle)] last:border-0"
        >
          <span className="font-bebas text-3xl text-[var(--accent-fire)] opacity-40 group-hover:opacity-80 transition-opacity duration-200 w-10 shrink-0 leading-none pt-1.5 tabular-nums">
            {item.num}
          </span>
          <div className="flex-1">
            <h4 className="font-bebas text-2xl md:text-3xl tracking-wide text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-gold)] transition-colors duration-200">
              {item.title}
            </h4>
            <p className="font-montserrat text-[var(--text-muted)] text-base leading-relaxed">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default Achievements;
