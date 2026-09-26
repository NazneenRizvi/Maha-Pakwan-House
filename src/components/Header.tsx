import React, { useState } from 'react';
import { ASSETS, CONTACT_INFO } from '../data/deals';
import { Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#3E0A13]/95 backdrop-blur-md border-b border-[#D4AF37]/25 text-[#FAF6EF] shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Zone */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            aria-label="Maha Pakwan House Home"
          >
            <div className="relative h-14 sm:h-16 flex items-center py-1">
              <img
                src={ASSETS.logo}
                alt="Maha Pakwan House official logo with golden chef hat and cursive branding"
                className="h-full w-auto max-w-[190px] sm:max-w-[230px] object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium tracking-wide text-[#FAF6EF]/90 hover:text-[#E5C465] transition-colors relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Zone: Call Quick Link */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${CONTACT_INFO.primaryPhoneTel}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#3E0A13] bg-gradient-to-r from-[#F3D98A] via-[#D4AF37] to-[#B88E1F] rounded-md shadow hover:brightness-105 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF6EF]"
              title="Click to call Maha Pakwan House"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="font-sans font-bold tracking-normal">{CONTACT_INFO.primaryPhone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-md text-[#FAF6EF] hover:text-[#E5C465] hover:bg-[#56111C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#30080E] border-b border-[#D4AF37]/30 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-base font-medium text-[#FAF6EF] rounded-md hover:bg-[#56111C] hover:text-[#E5C465] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#D4AF37]/20 flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wider text-[#E5C465]">Call Directly:</span>
            <a
              href={`tel:${CONTACT_INFO.primaryPhoneTel}`}
              className="inline-flex items-center gap-2 text-sm text-[#FAF6EF] hover:text-[#F3D98A]"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span className="font-sans font-bold tracking-normal">{CONTACT_INFO.primaryPhone}</span>
            </a>
            <a
              href={`tel:${CONTACT_INFO.secondaryPhoneTel}`}
              className="inline-flex items-center gap-2 text-sm text-[#FAF6EF] hover:text-[#F3D98A]"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span className="font-sans font-bold tracking-normal">{CONTACT_INFO.secondaryPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
