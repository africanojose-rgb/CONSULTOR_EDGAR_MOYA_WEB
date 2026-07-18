import type { ComponentType } from 'react';
import { Lock, Shield, Zap, User, Globe } from 'lucide-react';
import { PILARES_DATA } from '../data';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  lock: Lock,
  shield: Shield,
  zap: Zap,
  user: User,
  globe: Globe
};

export default function Pilares() {
  return (
    <section id="pilares" className="py-24 bg-dark-card border-y border-dark-border/40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold">NUESTROS VALORES</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white tracking-tight">
            Pilares de Excelencia Profesional
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-4"></div>
          <p className="text-gray-400 text-sm md:text-base font-sans pt-2">
            La alta confianza y el éxito procesal se sostienen sobre bases inquebrantables.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {PILARES_DATA.map((pilar) => {
            const IconComponent = iconMap[pilar.iconName] || Shield;

            // Bento Grid Span definitions
            let spanClass = 'md:col-span-1';
            if (pilar.id === 'confidencialidad') {
              spanClass = 'md:col-span-2';
            }

            // Theme visual variants based on brand specs
            let cardStyle = '';
            let iconStyle = '';
            let textTitleStyle = 'text-white';
            let textDescStyle = 'text-gray-300';

            if (pilar.variant === 'primary') {
              // Deep Midnight Blue card
              cardStyle = 'bg-primary border border-primary/30 text-white';
              iconStyle = 'bg-white/10 text-gold-light';
              textDescStyle = 'text-blue-100';
            } else if (pilar.variant === 'secondary') {
              // Solid Gold card with dark text
              cardStyle = 'bg-gold text-dark-bg border border-gold shadow-lg shadow-gold/10';
              iconStyle = 'bg-dark-bg/10 text-dark-bg';
              textTitleStyle = 'text-dark-bg font-bold';
              textDescStyle = 'text-dark-bg/90';
            } else {
              // Classic premium dark card
              cardStyle = 'bg-dark-bg border border-dark-border hover:border-gold/40';
              iconStyle = 'bg-primary/20 text-gold';
            }

            return (
              <div
                key={pilar.id}
                className={`${spanClass} ${cardStyle} p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl relative overflow-hidden group`}
              >
                {/* Decorative glow for non-solid cards */}
                {pilar.variant === 'light' && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full group-hover:bg-gold/5 transition-colors"></div>
                )}

                <div className="flex flex-col md:flex-row items-start gap-5">
                  <div className={`${iconStyle} p-3.5 rounded-xl shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className={`font-serif text-xl ${textTitleStyle}`}>
                      {pilar.title}
                    </h3>
                    <p className={`text-sm leading-relaxed font-sans ${textDescStyle}`}>
                      {pilar.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
