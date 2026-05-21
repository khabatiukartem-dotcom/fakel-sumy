import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'default', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bebas tracking-widest uppercase transition-all duration-200 active:scale-[0.97] active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-fire)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]";

  const variants = {
    primary: "bg-[var(--accent-fire)] text-white hover:bg-[#d15600] rounded-sm hover:shadow-[0_0_15px_rgba(245,130,13,0.4)]",
    outline: "border-2 border-[var(--accent-fire)] text-[var(--accent-fire)] bg-transparent hover:bg-[var(--accent-fire)] hover:text-white rounded-sm",
    nav: "text-[var(--text-primary)] hover:text-[var(--accent-fire)] bg-transparent",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-lg",
    lg: "px-8 py-4 text-xl md:text-2xl",
    nav: "px-3 py-2 text-xl"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
