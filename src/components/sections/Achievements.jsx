import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';

const achievements = [
  {
    icon: '🥇',
    title: 'Чемпіони всеукраїнських змагань',
    desc: 'з дзюдо та самбо різних вікових категорій'
  },
  {
    icon: '🏅',
    title: 'Десятки майстрів спорту',
    desc: 'виховані за всі роки існування клубу'
  },
  {
    icon: '🎖️',
    title: 'Турнір «Осінній чемпіон»',
    desc: 'Щорічний турнір клубу — понад 100 учасників'
  },
  {
    icon: '⭐',
    title: 'Різдвяний турнір',
    desc: 'Для малечі — перші медалі та змагальний досвід від 5 років'
  },
  {
    icon: '🤼',
    title: 'Міжнародні старти',
    desc: 'Вихованці клубу захищають честь країни за кордоном'
  }
];

const Achievements = () => {
  return (
    <Section id="achievements" title="НАША ГОРДІСТЬ">
      <div className="relative overflow-x-hidden py-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col gap-6 md:gap-8">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row items-start md:items-center p-6 md:p-8 bg-[var(--bg-secondary)] border-l-4 border-[var(--accent-fire)] rounded-r-lg max-w-4xl relative group ${
                  idx % 2 !== 0 ? 'md:ml-auto md:flex-row-reverse md:border-l-0 md:border-r-4 md:rounded-l-lg md:rounded-r-none md:text-right' : ''
                }`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(245,130,13,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-r-lg pointer-events-none"></div>

                <div className={`text-5xl md:text-6xl mb-4 md:mb-0 text-glow ${idx % 2 !== 0 ? 'md:ml-6' : 'md:mr-6'}`}>
                  {item.icon}
                </div>
                
                <div className="flex-1">
                  <h4 className="font-bebas text-2xl md:text-3xl tracking-wide text-[var(--accent-gold)] mb-2 inline-block">
                    {item.title}
                  </h4>
                  <p className="font-montserrat text-[var(--text-primary)] md:text-lg">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Achievements;
