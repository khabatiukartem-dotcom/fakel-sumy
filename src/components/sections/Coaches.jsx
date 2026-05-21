import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';

const coaches = [
  {
    name: "Олександр Коваленко",
    title: "Майстер спорту України з дзюдо",
    bio: "Вихованець «Факелу». Тренує дітей та юніорів вже 12 років. Підготував понад 10 чемпіонів області.",
    tag: "#Дзюдо"
  },
  {
    name: "Ірина Петренко",
    title: "Майстер спорту міжнародного класу",
    bio: "Багаторазова призерка Кубку Європи. Володіє унікальними методиками роботи з наймолодшими спортсменами.",
    tag: "#Дзюдо"
  },
  {
    name: "Микола Бондаренко",
    title: "Майстер спорту з бойового самбо",
    bio: "Головний тренер дорослої збірної. Виховує характер, дисципліну та справжній бійцівський дух.",
    tag: "#Самбо"
  }
];

const Coaches = () => {
  return (
    <Section 
      id="coaches" 
      title="НАШІ ТРЕНЕРИ" 
      subtitle="Майстри спорту. Виховані клубом. Передають традиції далі."
      darker 
      withDiagonalCut
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10 px-4 md:px-0">
        {coaches.map((coach, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="group"
          >
            {/* Avatar placeholder with amber vibes */}
            <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-sm bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-end justify-center">
              {/* Abstract silhouette geometric shapes */}
              <svg viewBox="0 0 100 100" className="w-full h-full text-[var(--bg-secondary)] absolute inset-0 opacity-50 group-hover:scale-105 group-hover:text-[rgba(245,130,13,0.1)] transition-all duration-500">
                 <path d="M50 10 C35 10 25 20 25 35 C25 50 35 60 50 60 C65 60 75 50 75 35 C75 20 65 10 50 10 Z M10 100 C10 80 25 65 50 65 C75 65 90 80 90 100" fill="currentColor" stroke="var(--accent-fire)" strokeWidth="0.5"/>
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] to-transparent z-10 w-full h-full opacity-60"></div>
              
              <div className="absolute top-4 right-4 z-20">
                <span className="bg-[var(--accent-fire)] text-white text-[10px] sm:text-xs font-bold px-2 py-1 uppercase rounded-sm tracking-wider">
                  {coach.tag}
                </span>
              </div>
            </div>

            {/* Content */}
            <h4 className="font-bebas text-2xl lg:text-3xl tracking-widest text-[var(--accent-gold)] mb-1">
              {coach.name}
            </h4>
            <p className="font-montserrat font-bold text-sm tracking-wide text-[var(--text-primary)] mb-3">
              {coach.title}
            </p>
            <p className="font-montserrat text-sm text-[var(--text-muted)] leading-relaxed">
              {coach.bio}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Coaches;
