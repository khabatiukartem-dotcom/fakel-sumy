import React from 'react';
import { Flame } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--accent-fire)] pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12 border-b border-[var(--border-subtle)] pb-12 mb-8">
          
          {/* Col 1 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Flame className="w-8 h-8 text-[var(--accent-fire)]" />
              <div className="flex flex-col">
                <span className="font-bebas text-3xl leading-none text-white tracking-widest">
                  ФАКЕЛ
                </span>
                <span className="font-montserrat text-[0.6rem] font-bold tracking-[0.15em] text-[var(--accent-gold)] uppercase">
                  СК Суми
                </span>
              </div>
            </div>
            <p className="font-montserrat text-sm text-[var(--text-muted)] max-w-xs mt-2 leading-relaxed">
              Дзюдо та Самбо. Суми. <br/>
              Традиції поколінь. Виховуємо чемпіонів з характером.
            </p>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-4 md:items-center">
            <h4 className="font-bebas text-xl text-[var(--text-primary)] tracking-widest">Навігація</h4>
            <nav className="flex flex-col gap-2">
              <a href="#about" className="text-[var(--text-muted)] hover:text-[var(--accent-fire)] font-montserrat text-sm uppercase transition-colors">Про нас</a>
              <a href="#programs" className="text-[var(--text-muted)] hover:text-[var(--accent-fire)] font-montserrat text-sm uppercase transition-colors">Секції</a>
              <a href="#coaches" className="text-[var(--text-muted)] hover:text-[var(--accent-fire)] font-montserrat text-sm uppercase transition-colors">Тренери</a>
              <a href="#contact" className="text-[var(--text-muted)] hover:text-[var(--accent-fire)] font-montserrat text-sm uppercase transition-colors">Контакти</a>
            </nav>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-4 md:items-end md:text-right">
            <h4 className="font-bebas text-xl text-[var(--text-primary)] tracking-widest">Зв'язок</h4>
            
            <a 
              href="https://www.instagram.com/sc_fakelsumy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--accent-fire)] hover:text-white font-montserrat text-sm uppercase transition-colors font-bold flex items-center gap-2 md:justify-end"
            >
              @sc_fakelsumy 📸
            </a>

            <div className="text-[var(--text-muted)] font-montserrat text-sm space-y-2 mt-2">
              <p>📍 вул. Люблінська, 10</p>
              <p>📍 вул. Петропавлівська, 59</p>
            </div>
            
            <a href="tel:+380000000000" className="text-[var(--text-primary)] hover:text-[var(--accent-fire)] font-bebas text-2xl tracking-wider mt-2 transition-colors">
              +38 (000) 000-00-00
            </a>
          </div>
        </div>

        <div className="text-center">
          <p className="font-montserrat text-xs tracking-wider text-[var(--text-muted)]">
            © {new Date().getFullYear()} СК «Факел» Суми. Всі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
