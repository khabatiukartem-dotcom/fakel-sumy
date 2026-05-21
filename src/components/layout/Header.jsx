import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { Flame, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Про нас', href: '#about' },
  { name: 'Секції', href: '#programs' },
  { name: 'Тренери', href: '#coaches' },
  { name: 'Досягнення', href: '#achievements' },
  { name: 'Відгуки', href: '#testimonials' },
  { name: 'Контакти', href: '#contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.slice(1));
    const observers = sectionIds.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(obs => obs?.disconnect());
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[rgba(13,13,13,0.95)] backdrop-blur-md shadow-lg py-3 border-b border-[var(--border-subtle)]' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-fire)] rounded-sm">
            <Flame className="w-8 h-8 md:w-10 md:h-10 text-[var(--accent-fire)]" />
            <div className="flex flex-col border-b border-[var(--accent-fire)] pb-0.5">
              <span className="font-bebas text-3xl md:text-4xl leading-none text-white tracking-widest">
                ФАКЕЛ
              </span>
              <span className="font-montserrat text-[0.6rem] md:text-xs font-bold tracking-[0.15em] text-[var(--text-muted)] uppercase">
                Суми · Дзюдо · Самбо
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-6" aria-label="Головна навігація">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative font-montserrat font-semibold text-sm uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-fire)] rounded-sm px-1 py-0.5 ${
                    isActive ? 'text-[var(--accent-fire)]' : 'text-[var(--text-primary)] hover:text-[var(--accent-fire)]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-[var(--accent-fire)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Button
              variant="primary"
              className="hidden lg:flex"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Записатись на пробне
            </Button>

            <button
              className="lg:hidden text-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-fire)] rounded-sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Відкрити меню"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 min-h-screen bg-[var(--bg-primary)] z-40 flex flex-col justify-center items-center gap-8 transition-transform duration-500 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="absolute inset-0 tatami-pattern opacity-10 pointer-events-none"></div>

        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-3xl font-bebas tracking-widest uppercase hover:text-[var(--accent-fire)] transition-colors relative z-10"
          >
            {link.name}
          </a>
        ))}
        <Button
          variant="primary"
          size="lg"
          className="mt-8 relative z-10"
          onClick={() => {
            setMobileMenuOpen(false);
            setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300);
          }}
        >
          Записатись на пробне
        </Button>
      </div>
    </>
  );
};

export default Header;
