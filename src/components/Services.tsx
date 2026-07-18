import { useState, useEffect, useCallback } from 'react';
import type { ComponentType } from 'react';
import { SERVICES_DATA } from '../data';
import { LegalService } from '../types';
import {
  Gavel,
  Scale,
  FileText,
  Droplet,
  Building2,
  Ship,
  Landmark,
  Coins,
  Briefcase,
  Package,
  ShieldAlert,
  Users,
  Leaf,
  Globe,
  ChevronDown,
  ChevronUp,
  X,
  ArrowRight,
  BookmarkCheck
} from 'lucide-react';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  gavel: Gavel,
  balance: Scale,
  history_edu: FileText,
  oil_barrel: Droplet,
  apartment: Building2,
  directions_boat: Ship,
  account_balance: Landmark,
  payments: Coins,
  business_center: Briefcase,
  package: Package,
  policy: ShieldAlert,
  groups: Users,
  eco: Leaf,
  globe: Globe
};

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const [selectedService, setSelectedService] = useState<LegalService | null>(null);

  const displayedServices = showAll ? SERVICES_DATA : SERVICES_DATA.slice(0, 8);

  const closeModal = useCallback(() => {
    setSelectedService(null);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedService) {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedService, closeModal]);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedService]);

  return (
    <section id="services" className="py-24 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold">ÁREAS DE PRÁCTICA JURÍDICA</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white tracking-tight">
            Servicios de Consultoría Especializada
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-4" aria-hidden="true"></div>
          <p className="text-gray-400 text-sm md:text-base font-sans pt-2">
            Ofrecemos patrocinio, dictámenes técnicos y representación estratégica en diversos campos del Derecho Corporativo e Internacional, brindando seguridad y solidez a sus operaciones.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
          {displayedServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Gavel;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group bg-dark-card border border-dark-border hover:border-gold/60 p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between shadow-xl relative overflow-hidden text-left w-full"
                aria-label={`Ver detalles de ${service.title}`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full group-hover:bg-gold/5 transition-colors duration-300" aria-hidden="true"></div>

                <div>
                  <div className="w-12 h-12 rounded-lg bg-primary/20 group-hover:bg-gold/10 border border-gold/10 group-hover:border-gold/30 flex items-center justify-center text-gold transition-colors duration-300 mb-6" aria-hidden="true">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold transition-colors duration-300 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed font-sans mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-gold group-hover:text-gold-light mt-auto">
                  Saber Más
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Toggle */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 border border-gold/40 text-gold hover:border-gold hover:text-white hover:bg-gold/10 px-8 py-3.5 rounded font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer"
            aria-expanded={showAll}
          >
            {showAll ? (
              <>
                Ver Menos Áreas
                <ChevronUp className="w-4 h-4" aria-hidden="true" />
              </>
            ) : (
              <>
                Ver Todas las Áreas ({SERVICES_DATA.length})
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </>
            )}
          </button>
        </div>

        {/* Bottom banner */}
        <div className="mt-16 bg-primary/10 border border-gold/15 p-6 rounded-xl text-center max-w-4xl mx-auto">
          <p className="font-serif text-sm text-gold-light italic">
            El despacho cuenta además con especialización y consultoría específica en Mercadería de Comercio Exterior, proyectos técnicos de GNL, resolución de arrendamientos corporativos y Derecho Penal.
          </p>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="bg-dark-card border border-gold/30 rounded-2xl max-w-xl w-full p-8 relative shadow-2xl animate-fade-in text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gold transition-colors p-1 focus:outline-none focus:ring-2 focus:ring-gold/50 rounded"
              aria-label="Cerrar detalles del servicio"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 border-b border-dark-border pb-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold" aria-hidden="true">
                {(() => {
                  const IconComp = iconMap[selectedService.iconName] || Gavel;
                  return <IconComp className="w-6 h-6" />;
                })()}
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Consultoría Técnica</span>
                <h4 id="modal-title" className="font-serif text-xl font-bold text-white">{selectedService.title}</h4>
              </div>
            </div>

            {/* Modal Content */}
            <div className="space-y-4">
              <p className="text-gray-300 text-sm leading-relaxed font-sans">
                {selectedService.longDescription || selectedService.description}
              </p>

              <div className="bg-primary/25 border border-primary/40 rounded-xl p-4 flex items-start gap-3 mt-6">
                <BookmarkCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-xs text-gray-300">
                  <p className="font-semibold text-white mb-1">Garantía de Autoridad</p>
                  <p className="leading-normal">
                    Todos los dictámenes y defensas de este sector legal son supervisados o redactados de manera directa por el Abogado Edgar J. Moya Millán.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex justify-end gap-3 mt-8">
              <button
                onClick={closeModal}
                className="px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50"
              >
                Cerrar
              </button>
              <a
                href="#contact"
                onClick={closeModal}
                className="px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider bg-gold text-white hover:bg-gold-hover transition-colors inline-block"
              >
                Consultar Caso
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
