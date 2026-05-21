import React from 'react';
import { motion } from 'framer-motion';

const EASE_OUT = [0.22, 1, 0.36, 1];

export const Section = ({
  id,
  title,
  subtitle,
  eyebrow,
  children,
  className = '',
  containerClassName = '',
  withDiagonalCut = false,
  darker = false,
  titleAlign = 'center',
}) => {
  const leftAligned = titleAlign === 'left';

  return (
    <section
      id={id}
      className={`relative py-20 lg:py-28 ${darker ? 'bg-[var(--bg-secondary)]' : 'bg-[var(--bg-primary)]'} ${withDiagonalCut ? 'clip-diagonal' : ''} ${className}`}
    >
      <div className={`container mx-auto px-4 md:px-8 max-w-7xl ${containerClassName}`}>
        {(title || subtitle || eyebrow) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className={`mb-16 md:mb-20 ${leftAligned ? '' : 'text-center'}`}
          >
            {eyebrow && (
              <p className="text-[var(--accent-fire)] font-montserrat font-bold text-xs uppercase tracking-[0.2em] mb-3">
                — {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bebas text-[var(--text-primary)] tracking-wide mb-4 relative inline-block">
                {title}
                <div className={`absolute -bottom-4 ${leftAligned ? 'left-0' : 'left-1/2 -translate-x-1/2'} w-16 h-[3px] bg-[var(--accent-fire)]`} />
              </h2>
            )}
            {subtitle && (
              <p className={`text-[var(--text-muted)] text-lg md:text-xl font-montserrat mt-6 leading-relaxed ${leftAligned ? 'max-w-xl' : 'max-w-2xl mx-auto'}`}>
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};
