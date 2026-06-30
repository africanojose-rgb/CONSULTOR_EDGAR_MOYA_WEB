import { Award, Briefcase, TrendingUp, Compass } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark-card border-y border-dark-border/60 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-gold/5 blur-3xl rounded-full -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 blur-3xl rounded-full translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission, Vision, and Premium Bio */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold">PERFIL PROFESIONAL</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Legado de Compromiso, Ética e Integridad Jurídica
              </h2>
              <div className="w-16 h-1 bg-gold rounded mt-3"></div>
            </div>

            <div className="space-y-4 text-gray-300 font-sans text-base leading-relaxed">
              <p>
                Con una sólida e ininterrumpida trayectoria profesional, el despacho del 
                <strong> Abogado Edgar J. Moya Millán</strong> se consolida como una firma de 
                referencia y consultoría estratégica de primer orden. Nuestra labor está cimentada 
                en la lealtad procesal y la precisión jurídica rigurosa para cada uno de nuestros representados.
              </p>
              <p>
                La firma asiste a consorcios corporativos, empresas del sector energético internacional 
                y clientes individuales frente a retos jurídicos de extrema complejidad. Nuestra filosofía 
                combina la tradición académica y formal de la ciencia del Derecho con la agilidad e 
                innovación que demandan los negocios globales modernos.
              </p>
            </div>

            {/* Timeless Legal Quote block */}
            <div className="border-l-4 border-gold bg-primary/10 p-6 rounded-r-xl mt-6 relative">
              <span className="font-serif text-5xl text-gold/15 absolute top-2 right-4 pointer-events-none font-bold">“</span>
              <p className="font-serif text-lg text-gold-light italic font-medium leading-relaxed">
                "La justicia es la constante y perpetua voluntad de dar a cada uno lo suyo."
              </p>
              <p className="text-xs text-gray-400 mt-2 uppercase tracking-wider font-sans">— Ulpiano, Digesto</p>
            </div>
          </div>

          {/* Right Column: Stat Cards Grid */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-6">
            {/* Stat Card 1 */}
            <div className="bg-dark-bg border border-dark-border p-8 rounded-xl flex flex-col justify-between hover:border-gold/40 transition-colors duration-300 shadow-xl relative group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gold/5 rounded-bl-full -z-10"></div>
              <Award className="w-8 h-8 text-gold mb-6" />
              <div>
                <p className="font-serif text-4xl font-bold text-white mb-2">25+</p>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                  Años de Trayectoria
                </p>
                <p className="text-xs text-gray-500 mt-1">Práctica ininterrumpida y sólida reputación.</p>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-primary border border-primary/40 p-8 rounded-xl flex flex-col justify-between hover:border-gold/40 transition-all duration-300 shadow-xl relative group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-full -z-10"></div>
              <Briefcase className="w-8 h-8 text-gold-light mb-6" />
              <div>
                <p className="font-serif text-4xl font-bold text-white mb-2">500+</p>
                <p className="text-xs uppercase tracking-wider text-gold-light/95 font-semibold">
                  Casos Exitosos
                </p>
                <p className="text-xs text-blue-200 mt-1">Resoluciones favorables de alta complejidad.</p>
              </div>
            </div>

            {/* Large Full-Width Highlight Card */}
            <div className="sm:col-span-2 bg-gradient-to-r from-primary/15 to-gold/5 border border-gold/25 p-8 rounded-xl flex items-start gap-4 shadow-xl">
              <Compass className="w-8 h-8 text-gold shrink-0 mt-1" />
              <div className="space-y-1">
                <h4 className="font-serif text-lg font-bold text-white">Consultoría Global Especializada</h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Experiencia y solvencia técnica en sectores estratégicos con impacto regulatorio y económico nacional, 
                  incluyendo proyectos de Hidrocarburos, Energía convencional, Gas Natural Licuado (GNL) y Comercio Marítimo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
