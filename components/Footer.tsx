import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-black text-white py-8 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-primary text-sm font-light">
          &copy; {year} El Aesthetics Bremen. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}