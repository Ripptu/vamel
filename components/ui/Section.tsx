import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, className = "", children }) => {
  return (
    <section id={id} className={`px-5 py-4 max-w-2xl mx-auto ${className}`}>
      {children}
    </section>
  );
};