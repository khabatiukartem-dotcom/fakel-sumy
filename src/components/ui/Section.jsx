import React from 'react';
import { motion } from 'framer-motion';

export const Section = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  containerClassName = '',
  withDiagonalCut = false,
  darker = false,
}) => {
  return (
    <section 
      id={id} 
      className={`relative py-20 lg:py-28 ${darker ? 'bg-[var(--bg-secondary)]' : 'bg-[var(--bg-primary)]'} ${withDiagonalCut ? 'clip-diagonal' : ''} ${className}`}
    >
      <div className={`container mx-auto px-4 md:px-8 max-w-7xl ${containerClassName}`}>
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 md:mb-20 text-center"
          >
            {title && (
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bebas text-[var(--text-primary)] tracking-wide mb-4 relative inline-block">
                {title}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-[var(--accent-fire)]"></div>
              </h2>
            )}
            {subtitle && <p className="text-[var(--text-muted)] text-lg md:text-xl font-montserrat mt-6 max-w-2xl mx-auto">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};
