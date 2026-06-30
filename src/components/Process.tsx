import { PROCESS_DATA } from '../data';
import { ArrowRight } from 'lucide-react';

export default function Process() {
  return (
    <section id="process" className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold">METODOLOGÍA JURÍDICA</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white tracking-tight">
            Nuestro Proceso de Trabajo
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-4"></div>
          <p className="text-gray-400 text-sm md:text-base font-sans pt-2">
            Un recorrido transparente y riguroso desde el primer contacto hasta el cierre de su caso.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="relative">
          {/* Horizontal Line connecting steps on desktop */}
          <div className="absolute top-10 left-[10%] right-[10%] h-[1.5px] bg-gradient-to-r from-primary/10 via-gold/40 to-primary/10 hidden lg:block -z-10"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_DATA.map((step) => {
              return (
                <div
                  key={step.number}
                  className="text-center group flex flex-col items-center space-y-4"
                >
                  {/* Step Number Circle */}
                  <div className="w-20 h-20 rounded-full bg-dark-card border-2 border-gold/40 text-gold font-serif text-2xl font-bold flex items-center justify-center transition-all duration-300 group-hover:bg-gold group-hover:text-white group-hover:border-gold group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-gold/10 relative">
                    {step.number}
                    {/* Glowing active outline */}
                    <span className="absolute -inset-1 bg-gold/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </div>

                  {/* Step Title & Text */}
                  <div className="space-y-2 max-w-xs">
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-sans">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Small pointer for mobile/tablet flow */}
                  {step.number < 4 && (
                    <div className="lg:hidden text-gold/60 py-2">
                      <ArrowRight className="w-5 h-5 rotate-90 sm:rotate-0" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
