import { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';

const MENU_ITEMS = [
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Pilares', href: '#pilares' },
  { label: 'Proceso', href: '#process' },
  { label: 'Ubicación', href: '#location' },
] as const;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-bg/90 backdrop-blur-md border-b border-dark-border/80 shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
      aria-label="Navegación principal"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group" aria-label="Edgar J. Moya Millán - Inicio">
          <div className="relative">
            <ShieldCheck className="w-8 h-8 text-gold group-hover:scale-105 transition-transform" aria-hidden="true" />
            <div className="absolute inset-0 bg-gold/10 blur-md rounded-full -z-10" aria-hidden="true"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-bold tracking-wider text-white group-hover:text-gold transition-colors duration-300">
              EDGAR J. MOYA MILLÁN
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-gold/80">
              Despacho Jurídico Premium
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {MENU_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-sans tracking-wide text-gray-300 hover:text-gold transition-colors duration-250 relative py-1 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary hover:bg-gold hover:text-white text-white border border-gold/30 hover:border-gold px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-gold/10"
          >
            Contactar Ahora
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-300 hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50 rounded p-1"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed top-[72px] left-0 w-full bg-dark-card border-b border-dark-border transition-all duration-300 ease-in-out z-40 ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
        role="menu"
        aria-hidden={!isOpen}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {MENU_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-sans tracking-wide text-gray-300 hover:text-gold transition-colors py-2 border-b border-gray-800/40"
              role="menuitem"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-gold hover:bg-gold-hover text-white text-center py-3 rounded text-sm font-bold uppercase tracking-wider transition-colors mt-2"
            role="menuitem"
          >
            Contactar Ahora
          </a>
        </div>
      </div>
    </nav>
  );
}
