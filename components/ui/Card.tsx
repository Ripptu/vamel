import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  onClick?: () => void;
  noGlass?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = "", delay = 0, onClick, noGlass = false }) => {
  // Dark Glass styles
  const glassStyles = noGlass 
    ? "" 
    : "bg-[#0F0F0F] border border-[#222] shadow-sm";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100, damping: 20 }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`rounded-[24px] overflow-hidden ${glassStyles} ${className}`}
    >
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
};