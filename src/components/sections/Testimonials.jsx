import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    role: "мама вихованця",
    name: "Олена М.",
    text: "Привели сина у 6 років зовсім розгубленим. Зараз дитину не впізнати: дисципліна, стержень, характер. Тренери ставляться як до рідних. Він просто біжить на тренування!"
  },
  {
    role: "мама вихованця",
    name: "Тетяна К.",
    text: "Перший «Різдвяний турнір» — море емоцій і перша медаль. Для дитини це неймовірний поштовх! У залі на Люблінській завжди дружня атмосфера. Рекомендую всім у Сумах!"
  },
  {
    role: "спортсмен клубу",
    name: "Дмитро Л.",
    text: "«Факел» — велика борцівська родина з величезною історією. Тут виховали не одне покоління майстрів спорту. Якщо хочете реальних результатів — вам сюди. Пишаюся цим клубом!"
  }
];

const Testimonials = () => {
  return (
    <Section id="testimonials" title="ЩО КАЖУТЬ БАТЬКИ ТА СПОРТСМЕНИ" darker withDiagonalCut>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0 pt-8 pb-12">
        {testimonials.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-[var(--bg-primary)] p-8 rounded-lg relative hover:-translate-y-2 transition-transform duration-300 border border-[var(--border-subtle)] hover:border-[rgba(245,130,13,0.3)] shadow-lg"
          >
            {/* Top right decorative rating */}
            <div className="flex gap-1 mb-6 text-[var(--accent-fire)]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            {/* Huge decorative Quote icon */}
            <Quote className="absolute top-6 right-6 w-16 h-16 text-[var(--bg-secondary)] opacity-50 -z-0" />
            
            <p className="font-montserrat text-[var(--text-primary)] italic relative z-10 leading-relaxed min-h-[140px]">
              "{item.text}"
            </p>

            <div className="mt-8 pt-6 border-t border-[var(--bg-secondary)] relative z-10">
              <h5 className="font-bebas text-xl md:text-2xl tracking-widest text-[var(--accent-gold)]">
                {item.name}
              </h5>
              <p className="font-montserrat text-sm text-[var(--text-muted)] mt-1 font-bold uppercase tracking-widest">
                — {item.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
