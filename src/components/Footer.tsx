import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { EMAIL, PHONE, PHONE_TEL, ADDRESS } from '../data';

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border/60 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 w-full max-w-7xl h-96 bg-primary/5 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-12 gap-12 border-b border-dark-border/40 pb-12">
        <div className="md:col-span-5 space-y-4 text-left">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-gold" aria-hidden="true" />
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
            Asesoría integral y representación legal con los más altos estándares de ética y profesionalismo.
          </p>
        </div>

        <div className="md:col-span-4 space-y-4 text-left">
          <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Despacho Caracas</h4>
          <div className="space-y-3 font-sans text-xs md:text-sm text-gray-400">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" aria-hidden="true" />
              <p>{ADDRESS}</p>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
              <a href={`mailto:${EMAIL}`} className="hover:text-gold transition-colors">
                {EMAIL}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
              <a href={PHONE_TEL} className="hover:text-gold transition-colors">
                {PHONE}
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 space-y-4 text-left md:text-right">
          <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Enlaces Rápidos</h4>
          <nav className="flex flex-col gap-2.5 font-sans text-xs md:text-sm text-gray-400 md:items-end" aria-label="Enlaces de navegación">
            <a href="#about" className="hover:text-gold transition-colors">Sobre Mí</a>
            <a href="#services" className="hover:text-gold transition-colors">Servicios</a>
            <a href="#pilares" className="hover:text-gold transition-colors">Pilares</a>
            <a href="#process" className="hover:text-gold transition-colors">Proceso</a>
            <a href="#location" className="hover:text-gold transition-colors">Ubicación</a>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 relative z-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-sans">
        <div>
          © 2026 Abogado Edgar J. Moya Millán. Todos los derechos reservados.
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gold transition-colors">Aviso Legal</a>
          <span aria-hidden="true">|</span>
          <a href="#" className="hover:text-gold transition-colors">Política de Privacidad</a>
        </div>
      </div>
    </footer>
  );
}
