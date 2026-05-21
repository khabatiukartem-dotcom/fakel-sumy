import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const programs = [
  {
    title: 'Дзюдо',
    age: 'від 5 років',
    desc: 'Класична японська боротьба. Розвиває гнучкість, реакцію, дисципліну та впевненість у собі. Ідеально для початківців та тих, хто прагне змагань.',
    features: [
      'Групи за віком і рівнем',
      'Внутрішні та міські турніри',
      'Кімоно видається клубом на перше заняття',
    ],
    accent: '#F5820D',
    badgeBg: 'rgba(245,130,13,0.12)',
  },
  {
    title: 'Самбо',
    age: 'від 8 років',
    desc: 'Бойове самбо — дисципліна з елементами боротьби і самозахисту. Для тих, хто хоче реальних результатів і готовий до серйозних тренувань.',
    features: [
      'Всеукраїнські змагання',
      'Стипендії для спортсменів-розрядників',
      'Тренування від майстрів спорту',
    ],
    accent: '#C9A84C',
    badgeBg: 'rgba(201,168,76,0.12)',
  },
];

const Programs = () => (
  <Section id="programs" title="НАШІ СЕКЦІЇ">
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 pb-10 max-w-5xl mx-auto">
      {programs.map((prog, idx) => (
        <motion.div
          key={prog.title}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="group relative bg-[var(--bg-card)] rounded-sm p-8 lg:p-10 hover:-translate-y-1 transition-transform duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
          style={{ borderTop: `3px solid ${prog.accent}` }}
        >
          <div className="absolute inset-0 tatami-pattern opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-sm pointer-events-none" />

          <div className="flex items-start justify-between mb-5">
            <h3 className="font-bebas text-4xl lg:text-5xl tracking-wide" style={{ color: prog.accent }}>
              {prog.title}
            </h3>
            <span
              className="font-montserrat text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm"
              style={{ background: prog.badgeBg, color: prog.accent }}
            >
              {prog.age}
            </span>
          </div>

          <p className="text-[var(--text-muted)] font-montserrat text-base mb-8 leading-relaxed">
            {prog.desc}
          </p>

          <ul className="space-y-3">
            {prog.features.map((feat) => (
              <li key={feat} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: prog.accent }} />
                <span className="font-montserrat text-sm text-[var(--text-primary)]">{feat}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default Programs;
