import React from 'react';
import { motion } from 'framer-motion';
import coach1 from '../../assets/generated/coach-1.png';
import coach2 from '../../assets/generated/coach-2.png';
import coach3 from '../../assets/generated/coach-3.png';

const EASE_OUT = [0.22, 1, 0.36, 1];

const coaches = [
  {
    name: "Богдан Мальонкін",
    title: "Майстер спорту України з дзюдо",
    bio: "Вихованець «Факелу». Тренує дітей та юніорів 12 років. Підготував понад 10 чемпіонів області.",
    tag: "Дзюдо",
    img: coach1,
  },
  {
    name: "Арсеній Карпенко",
    title: "Майстер спорту міжнародного класу",
    bio: "Багаторазова призерка Кубку Європи. Унікальні методики роботи з наймолодшими спортсменами.",
    tag: "Дзюдо",
    img: coach2,
  },
  {
    name: "Андрюха",
    title: "Майстер спорту з бойового самбо",
    bio: "Головний тренер дорослої збірної. Виховує характер, дисципліну та справжній бійцівський дух.",
    tag: "Самбо",
    img: coach3,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const Coaches = () => (
  <section id="coaches" className="relative py-24 lg:py-32 bg-[var(--bg-secondary)] overflow-hidden">

    <div className="container mx-auto px-4 md:px-8 max-w-7xl mb-16 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
      >
        <p className="text-[var(--accent-fire)] font-montserrat font-bold text-xs uppercase tracking-[0.2em] mb-3">— Команда</p>
        <h2 className="font-bebas text-4xl md:text-5xl lg:text-7xl text-[var(--text-primary)] tracking-wide">Наші тренери</h2>
        <p className="text-[var(--text-muted)] text-lg font-montserrat mt-4 max-w-xl leading-relaxed">
          Майстри спорту. Виховані клубом. Передають традиції далі.
        </p>
      </motion.div>
    </div>

    <motion.div
      className="container mx-auto px-4 md:px-8 max-w-7xl grid md:grid-cols-3 gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={containerVariants}
    >
      {coaches.map((coach) => (
        <motion.article key={coach.name} variants={cardVariants} className="group">
          <div className="relative overflow-hidden rounded-sm mb-6" style={{ aspectRatio: "3/4" }}>
            <img
              src={coach.img}
              alt={`${coach.name} — ${coach.title}`}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,13,13,0.65)] via-transparent to-transparent" />
            <span className="absolute top-3 right-3 bg-[var(--accent-fire)] text-white text-[10px] font-montserrat font-bold px-2.5 py-1 uppercase tracking-wider rounded-sm">
              {coach.tag}
            </span>
          </div>
          <h3 className="font-bebas text-2xl lg:text-3xl tracking-widest text-[var(--accent-gold)] mb-1">{coach.name}</h3>
          <p className="font-montserrat font-semibold text-sm text-[var(--text-primary)] mb-3 tracking-wide">{coach.title}</p>
          <p className="font-montserrat text-sm text-[var(--text-muted)] leading-relaxed">{coach.bio}</p>
        </motion.article>
      ))}
    </motion.div>

  </section>
);

export default Coaches;
