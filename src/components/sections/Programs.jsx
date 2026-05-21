import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const programs = [
  {
    title: 'Дзюдо',
    icon: '🥋',
    age: 'від 5 років',
    desc: 'Класична японська боротьба. Розвиває гнучкість, реакцію, дисципліну та впевненість у собі. Ідеально для початківців та тих, хто прагне змагань.',
    features: [
      'Групи за віком і рівнем',
      'Внутрішні та міські турніри',
      'Кімоно видається клубом на перше заняття'
    ]
  },
  {
    title: 'Самбо',
    icon: '🏆',
    age: 'від 8 років',
    desc: 'Бойове самбо — суто українська дисципліна з елементами боротьби і самозахисту. Для тих, хто хоче реальних результатів і готовий до серйозних тренувань.',
    features: [
      'Всеукраїнські змагання',
      'Стипендії для спортсменів-розрядників',
      'Тренування від майстрів спорту'
    ]
  }
];

const Programs = () => {
  return (
    <Section id="programs" title="НАШІ СЕКЦІЇ">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 pb-10 max-w-5xl mx-auto">
        {programs.map((prog, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="group relative bg-[var(--bg-card)] rounded-xl border-t-2 border-[var(--accent-fire)] p-8 lg:p-12 hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_15px_30px_rgba(245,130,13,0.1)]"
          >
            {/* Background tatami subtle effect on hover */}
            <div className="absolute inset-0 tatami-pattern opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl pointer-events-none"></div>

            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bebas text-4xl lg:text-5xl tracking-wide m-0">{prog.title}</h3>
              <span className="text-5xl">{prog.icon}</span>
            </div>

            <div className="inline-block bg-[var(--bg-secondary)] px-3 py-1 rounded-sm text-[var(--accent-fire)] font-bold uppercase text-xs tracking-widest mb-6">
              Вік: {prog.age}
            </div>

            <p className="text-[var(--text-muted)] font-montserrat text-lg mb-8 leading-relaxed">
              {prog.desc}
            </p>

            <ul className="space-y-4">
              {prog.features.map((feat, fidx) => (
                <li key={fidx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--accent-fire)] shrink-0 mt-0.5" />
                  <span className="font-montserrat text-sm md:text-base text-[var(--text-primary)]">{feat}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Programs;
