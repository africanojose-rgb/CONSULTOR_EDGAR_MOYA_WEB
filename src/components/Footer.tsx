import { ShieldCheck, MessageSquare, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = 'https://wa.me/584120000000?text=Hola%20Abogado%20Edgar%20Moya%2C%20quisiera%20agendar%20una%20consulta%20jur%C3%ADdica%20de%20negocios.';

  return (
    <footer className="bg-dark-card border-t border-dark-border/60 pt-16 pb-8 relative overflow-hidden">
      {/* Footer background glow */}
      <div className="absolute bottom-0 left-1/2 w-full max-w-7xl h-96 bg-primary/5 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-12 gap-12 border-b border-dark-border/40 pb-12">
        
        {/* Brand column */}
        <div className="md:col-span-5 space-y-4 text-left">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-gold" />
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-bold tracking-wider text-white">
                EDGAR J. MOYA MILLÁN
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-gold">
                Consultoría Estratégica Premium
              </span>
            </div>
          </div>
          <p className="text-gray-400 text-sm max-w-sm font-sans leading-relaxed">
            Asesoría integral y representación legal con los más altos estándares de ética y profesionalismo, compitiendo con los estándares visuales y de servicio de las mejores firmas globales.
          </p>
        </div>

        {/* Contact info column */}
        <div className="md:col-span-4 space-y-4 text-left">
          <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Despacho Caracas</h4>
          <div className="space-y-3 font-sans text-xs md:text-sm text-gray-400">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <p>Edificio Torre Premium, Piso 12, Las Mercedes. Caracas, Venezuela.</p>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <a href="mailto:jamadus@gmail.com" className="hover:text-gold transition-colors">
                jamadus@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <a href="tel:+582120000000" className="hover:text-gold transition-colors">
                +58 (212) 000-0000
              </a>
            </div>
          </div>
        </div>

        {/* Links column */}
        <div className="md:col-span-3 space-y-4 text-left md:text-right">
          <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Enlaces Rápidos</h4>
          <div className="flex flex-col gap-2.5 font-sans text-xs md:text-sm text-gray-400 md:items-end">
            <a href="#about" className="hover:text-gold transition-colors">Sobre Mí</a>
            <a href="#services" className="hover:text-gold transition-colors">Servicios</a>
            <a href="#pilares" className="hover:text-gold transition-colors">Pilares</a>
            <a href="#process" className="hover:text-gold transition-colors">Proceso</a>
            <a href="#location" className="hover:text-gold transition-colors">Ubicación</a>
          </div>
        </div>

      </div>

      {/* Sub-footer copyright & legal disclosures */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 relative z-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-sans">
        <div>
          © 2026 Abogado Edgar J. Moya Millán. Todos los derechos reservados. Excelencia Jurídica.
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gold transition-colors">Aviso Legal</a>
          <span>|</span>
          <a href="#" className="hover:text-gold transition-colors">Política de Privacidad</a>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Scroll Top Button */}
        <button
          onClick={scrollToTop}
          className={`w-12 h-12 rounded-full bg-dark-card border border-dark-border text-gold flex items-center justify-center shadow-2xl transition-all duration-300 hover:border-gold hover:text-white transform active:scale-95 cursor-pointer ${
            showScrollTop ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'
          }`}
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        {/* Pulsing Floating WhatsApp Bubble */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 transform active:scale-95 relative group cursor-pointer"
          aria-label="Contactar por WhatsApp"
        >
          {/* Pulsing green radar ring */}
          <span className="absolute inset-0 bg-[#25D366]/40 rounded-full animate-ping -z-10 scale-105"></span>
          
          <MessageSquare className="w-6 h-6 fill-white text-transparent group-hover:rotate-12 transition-transform duration-300" />
        </a>
      </div>
    </footer>
  );
}
