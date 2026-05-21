import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    role: "мама вихованця",
    name: "Олена М.",
    text: "Привели сина у 6 років зовсім розгубленим. Зараз дитину не впізнати: дисципліна, стержень, характер. Тренери ставляться як до рідних. Він просто біжить на тренування."
  },
  {
    role: "мама вихованця",
    name: "Тетяна К.",
    text: "Перший «Різдвяний турнір» — море емоцій і перша медаль. Для дитини це неймовірний поштовх. У залі на Люблінській завжди дружня атмосфера. Рекомендую всім у Сумах."
  },
  {
    role: "спортсмен клубу",
    name: "Дмитро Л.",
    text: "«Факел» — велика борцівська родина з величезною історією. Тут виховали не одне покоління майстрів спорту. Якщо хочете реальних результатів — вам сюди. Пишаюся цим клубом."
  }
];

const Stars = () => (
  <div className="flex gap-1 text-[var(--accent-fire)]">
    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
  </div>
);

const Testimonials = () => {
  const [featured, ...rest] = testimonials;

  return (
    <Section id="testimonials" title="ЩО КАЖУТЬ БАТЬКИ ТА СПОРТСМЕНИ" darker withDiagonalCut>
      <div className="grid md:grid-cols-5 gap-6 px-4 md:px-0 pt-8 pb-12">

        {/* Featured — 3/5 width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="md:col-span-3 bg-[var(--bg-primary)] p-8 md:p-10 rounded-lg border border-[var(--border-subtle)] hover:border-[rgba(245,130,13,0.3)] transition-colors duration-300 flex flex-col justify-between"
        >
          <div>
            <Stars />
            <p className="font-montserrat text-[var(--text-primary)] italic text-xl md:text-2xl leading-relaxed mt-6 mb-8">
              "{featured.text}"
            </p>
          </div>
          <div className="border-t border-[var(--bg-secondary)] pt-6">
            <p className="font-bebas text-2xl tracking-widest text-[var(--accent-gold)]">{featured.name}</p>
            <p className="font-montserrat text-xs text-[var(--text-muted)] mt-1 uppercase tracking-widest">— {featured.role}</p>
          </div>
        </motion.div>

        {/* Stacked — 2/5 width */}
        <div className="md:col-span-2 flex flex-col gap-6">
          {rest.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx + 1) * 0.15 }}
              className="bg-[var(--bg-primary)] p-6 rounded-lg border border-[var(--border-subtle)] hover:border-[rgba(245,130,13,0.3)] transition-colors duration-300 flex flex-col justify-between flex-1"
            >
              <div>
                <Stars />
                <p className="font-montserrat text-[var(--text-primary)] italic text-sm md:text-base leading-relaxed mt-4 mb-6">
                  "{item.text}"
                </p>
              </div>
              <div className="border-t border-[var(--bg-secondary)] pt-4">
                <p className="font-bebas text-xl tracking-widest text-[var(--accent-gold)]">{item.name}</p>
                <p className="font-montserrat text-xs text-[var(--text-muted)] mt-1 uppercase tracking-widest">— {item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </Section>
  );
};

export default Testimonials;
