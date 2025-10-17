"use client";
import React from 'react';


export function NavButton({ id, children }: { id: string; children: React.ReactNode }) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={() => scrollToSection(id)}
      className="px-4 py-2 text-sm tracking-wide text-white bg-black border border-black hover:bg-white hover:text-black transition-colors duration-200"
    >
      {children}
    </button>
  );
}