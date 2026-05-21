import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'default', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bebas tracking-widest uppercase transition-all duration-300";
  
  const variants = {
    primary: "bg-[var(--accent-fire)] text-white hover:bg-[#d15600] rounded-full hover:shadow-[0_0_15px_rgba(245,130,13,0.5)]",
    outline: "border-2 border-[var(--accent-fire)] text-[var(--accent-fire)] bg-transparent hover:bg-[var(--accent-fire)] hover:text-white rounded-full",
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
