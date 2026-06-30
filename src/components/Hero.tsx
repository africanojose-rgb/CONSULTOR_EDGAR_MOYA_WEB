import { Phone, MessageCircle, ArrowRight, Shield } from 'lucide-react';

export default function Hero() {
  const portraitUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAk9kSef9seQV3OZqPnbwHknynvxRfGgpLlek228ItVgu3_nGcsV2XhhisWXnHlpBZOtQFrwH49br2PdT7woR7UogKyh9weNw5XK_pcuyJ8SygZ26DXAapf0fp9ebkr5ph3dRyZWrpNxGUeVY5G6fWoJm1vd1yyX6iwaYPSLY-xAYsdIbukkA25izF8h40vQ69qJtcGPdLFIy_qEFyIW7V4meKOc5kL2bMe3QZC7hygL_VH2yv8V2JLfpPjYOYpMwgFSqWwKspCKC8';
  const backgroundUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqbH1Rt2Nmwmk8YgoB8a_ox2PlXFPy93wsD3SsT2NIWgX8eMk5qiIS32UeMibscTNeWrdRurj1M5wu0jf7UfKpuCrh_5Oc47pdeH3_wmcoB_tiyblObJQoeZR2T8MpHX8CvhL2gLxo8v-4Jtv_weOymi1ddeE7xL_vyyV2RjjTC3D-tnCoiVOtDqT0yqmzJ0gp936dgzHO8nr7OG2qxfKQtvbXcLHG3tM-0oceA6udnRaGte3SiPD47yrf8_HesCIrZg8rXOpx1To';

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-dark-bg">
      {/* Background Image with Deep Midnight Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${backgroundUrl})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/95 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-16 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-7 space-y-6 animate-fade-in text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5" />
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

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a
              href="#contact"
              className="bg-gold hover:bg-gold-hover text-white text-center px-8 py-4 rounded font-sans text-sm font-bold uppercase tracking-wider shadow-lg shadow-gold/20 hover:shadow-gold/30 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Solicitar Asesoría
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex items-center justify-center gap-3">
              <a
                href="mailto:jamadus@gmail.com"
                className="w-12 h-12 rounded-full border border-gray-700 hover:border-gold text-gray-300 hover:text-gold flex items-center justify-center transition-all duration-300 bg-dark-card/50"
                title="Llamar o enviar correo"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/584120000000" // Interactive placeholder link
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full border border-gray-700 hover:border-green-500 text-gray-300 hover:text-green-400 flex items-center justify-center transition-all duration-300 bg-dark-card/50"
                title="Enviar WhatsApp directo"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Credentials highlights in Hero */}
          <div className="grid grid-cols-3 gap-4 border-t border-gray-800/80 pt-8 mt-4">
            <div>
              <p className="font-serif text-2xl font-bold text-gold">25+</p>
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

        {/* Right Column: High Impact Portrait Frame */}
        <div className="lg:col-span-5 relative flex justify-center animate-fade-in">
          {/* Decorative glowing backdrops */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-gold to-primary rounded-2xl blur-2xl opacity-15"></div>
          
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border border-gold/30 shadow-2xl group transition-all duration-500 hover:border-gold">
            {/* Gradient overlays to darken & polish */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent z-10 opacity-60"></div>
            
            <img
              src={portraitUrl}
              referrerPolicy="no-referrer"
              alt="Edgar J. Moya Millán - Abogado Principal"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 scale-100 group-hover:scale-105"
            />

            {/* Subtle name badge inside image */}
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
