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
    tags: ['Дзюдо', 'Самбо', 'Дитячі групи']
  },
  {
    name: 'Зал 2',
    address: 'вул. Петропавлівська, 59',
    link: 'https://maps.app.goo.gl/W5v4PTxLD3zdGFjFA',
    tags: ['Дзюдо', 'Юніори', 'Дорослі групи']
  }
];

const Locations = () => {
  return (
    <Section id="locations" title="НАШІ ЗАЛИ">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto px-4 md:px-0">
        {locations.map((loc, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="group relative bg-[var(--bg-secondary)] border border-[var(--bg-secondary)] hover:border-[var(--accent-fire)] transition-colors duration-300 p-8 pt-10 rounded-lg shadow-xl"
          >
            {/* Dark map-pin icon */}
            <div className="absolute top-0 right-8 -translate-y-1/2 w-16 h-16 bg-[var(--bg-primary)] border border-[rgba(245,130,13,0.3)] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-[var(--accent-fire)] transition-all">
              <MapPin className="w-8 h-8 text-[var(--accent-fire)]" />
            </div>

            <h3 className="font-bebas text-3xl text-[var(--text-primary)] mb-2 uppercase tracking-wide">
              {loc.name}
            </h3>
            <p className="font-montserrat text-xl lg:text-2xl font-bold text-[var(--accent-gold)] mb-6">
              {loc.address}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {loc.tags.map((tag, tIdx) => (
                <span key={tIdx} className="bg-[var(--bg-card)] border border-[var(--border-subtle)] px-3 py-1 text-xs text-[var(--text-muted)] rounded">
                  {tag}
                </span>
              ))}
            </div>

            <Button 
              variant="outline" 
              className="w-full text-sm md:text-base border-gray-700 hover:border-[var(--accent-fire)]"
              onClick={() => window.open(loc.link, '_blank')}
            >
              Відкрити на Google Maps
            </Button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Locations;
