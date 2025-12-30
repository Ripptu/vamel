import React from 'react';

export interface Project {
  title: string;
  url: string;
  category: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string; // Emoji or simple icon identifier
  color: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}