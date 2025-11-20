import React from 'react';
import { Menu, X, CarTaxiFront, Phone } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Planeje seu Roteiro', href: '#planner' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-primary-500 p-2 rounded-lg text-white">
              <CarTaxiFront size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800 leading-none">Família Silva</h1>
              <p className="text-xs text-primary-600 font-semibold tracking-wider">TÁXI & TURISMO</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-primary-600 font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center">
            <a 
              href="#contact" 
              className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-primary-500/30 transform hover:scale-105"
            >
              <Phone size={18} />
              <span>Chamar Táxi</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-slate-600 hover:text-primary-600 p-2 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className="block px-3 py-4 text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50 rounded-md border-l-4 border-transparent hover:border-primary-500"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};