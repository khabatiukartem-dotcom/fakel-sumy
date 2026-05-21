import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const locations = [
  {
    name: 'Зал 1',
    address: 'вул. Люблінська, 10',
    link: 'https://maps.app.goo.gl/bExDiRv2mKRY7ExK9',
    tags: ['Дзюдо', 'Самбо', 'Дитячі групи'],
  },
  {
    name: 'Зал 2',
    address: 'вул. Петропавлівська, 59',
    link: 'https://maps.app.goo.gl/W5v4PTxLD3zdGFjFA',
    tags: ['Дзюдо', 'Юніори', 'Дорослі групи'],
  },
];

const Locations = () => (
  <Section id="locations" title="НАШІ ЗАЛИ">
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
      {locations.map((loc, idx) => (
        <motion.div
          key={loc.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="group bg-[var(--bg-secondary)] border border-[var(--bg-secondary)] hover:border-[var(--accent-fire)] transition-all duration-300 p-8 pt-10 rounded-sm shadow-xl relative"
        >
          {/* Numbered accent */}
          <span className="absolute top-6 right-6 font-bebas text-6xl text-[var(--accent-fire)] opacity-10 leading-none select-none">
            0{idx + 1}
          </span>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[rgba(245,130,13,0.1)] border border-[var(--border-subtle)] rounded-sm flex items-center justify-center group-hover:bg-[rgba(245,130,13,0.18)] transition-colors duration-300">
              <MapPin className="w-5 h-5 text-[var(--accent-fire)]" />
            </div>
            <h3 className="font-bebas text-2xl text-[var(--text-primary)] uppercase tracking-wide">{loc.name}</h3>
          </div>
          <p className="font-montserrat text-2xl font-bold text-[var(--accent-gold)] mb-6">{loc.address}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {loc.tags.map((tag) => (
              <span key={tag} className="bg-[var(--bg-card)] border border-[var(--border-subtle)] px-3 py-1 text-xs font-montserrat text-[var(--text-muted)] rounded-sm">
                {tag}
              </span>
            ))}
          </div>

          <Button
            variant="outline"
            className="w-full text-sm border-[rgba(255,255,255,0.1)] hover:border-[var(--accent-fire)]"
            onClick={() => window.open(loc.link, '_blank')}
          >
            Відкрити на Google Maps
          </Button>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default Locations;
