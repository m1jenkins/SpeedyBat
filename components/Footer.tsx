import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900">
      <div className="container mx-auto px-4 text-center">
        <div className="text-2xl font-black text-white uppercase tracking-tight mb-4">Speedy Bat Couriers</div>
        <p className="text-slate-500 text-sm mb-4">Serving Central Texas & Beyond. 24/7/365.</p>
        <div className="mb-8">
          <a
            href="tel:5129104938"
            className="inline-flex items-center space-x-2 text-red-500 hover:text-red-400 font-bold text-xl transition-colors"
          >
            <span>(512) 910-4938</span>
          </a>
        </div>
        <div className="text-slate-700 text-xs font-mono">
          &copy; {new Date().getFullYear()} SPEEDY BAT COURIERS. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};