import { Mail, MessageCircle, ArrowRight, Shield, Phone } from 'lucide-react';
import { EMAIL, PHONE_TEL, WHATSAPP_URL } from '../data';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-dark-bg">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          loading="eager"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/95 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-16 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 animate-fade-in text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5" aria-hidden="true" />
            Excelencia Jurídica y Consultoría Estratégica
          </div>

          <div className="space-y-3">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none uppercase">
              EDGAR J. MOYA MILLÁN
            </h1>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-gold tracking-wide">
              Abogado
            </p>
            <p className="font-serif text-lg md:text-xl lg:text-2xl font-light text-gold-light/90 italic tracking-wide">
              Consultor Asesor
            </p>
          </div>

          <p className="text-gray-300 text-base md:text-lg max-w-2xl font-sans leading-relaxed">
            Asesoría jurídica corporativa e individual con los más altos estándares de excelencia,
            ética y profesionalismo. Especialista en Energía, Sector Marítimo y Litigio de Alta Jerarquía.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a
              href="#contact"
              className="bg-gold hover:bg-gold-hover text-white text-center px-8 py-4 rounded font-sans text-sm font-bold uppercase tracking-wider shadow-lg shadow-gold/20 hover:shadow-gold/30 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Solicitar Asesoría
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>

            <div className="flex items-center justify-center gap-3">
              <a
                href={PHONE_TEL}
                className="w-12 h-12 rounded-full border border-gray-700 hover:border-gold text-gray-300 hover:text-gold flex items-center justify-center transition-all duration-300 bg-dark-card/50"
                aria-label="Llamar por teléfono"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-gray-700 hover:border-green-500 text-gray-300 hover:text-green-400 flex items-center justify-center transition-all duration-300 bg-dark-card/50"
                aria-label="Enviar WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="w-12 h-12 rounded-full border border-gray-700 hover:border-gold text-gray-300 hover:text-gold flex items-center justify-center transition-all duration-300 bg-dark-card/50"
                aria-label="Enviar correo electrónico"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-gray-800/80 pt-8 mt-4">
            <div>
              <p className="font-serif text-2xl font-bold text-gold">39</p>
              <p className="text-[10px] uppercase tracking-wider text-gray-400">Años de Trayectoria</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-gold">500+</p>
              <p className="text-[10px] uppercase tracking-wider text-gray-400">Casos Exitosos</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-gold">Caracas</p>
              <p className="text-[10px] uppercase tracking-wider text-gray-400">Consultoría Global</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative flex justify-center animate-fade-in">
          <div className="absolute -inset-1 bg-gradient-to-tr from-gold to-primary rounded-2xl blur-2xl opacity-15" aria-hidden="true"></div>

          <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border border-gold/30 shadow-2xl group transition-all duration-500 hover:border-gold">
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent z-10 opacity-60" aria-hidden="true"></div>

            <img
              src="/portrait.jpg"
              alt="Edgar J. Moya Millán - Abogado Principal"
              loading="eager"
              width="512"
              height="512"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 scale-100 group-hover:scale-105"
            />

            <div className="absolute bottom-6 left-6 right-6 z-20 bg-dark-card/85 backdrop-blur border border-gold/20 p-4 rounded-xl">
              <p className="font-serif text-base font-bold text-white">Edgar J. Moya Millán</p>
              <p className="text-xs text-gold font-sans tracking-wide">Abogado Consultor Asesor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
