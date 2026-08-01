import { useState } from 'react';
import { Mail, MessageCircle, Copy, Check, Clock, Calendar } from 'lucide-react';
import { EMAIL, WHATSAPP_URL } from '../data';

export default function ContactForm() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full">
      {/* Hours Banner */}
      <section className="bg-primary/95 border-y border-gold/30 py-12 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold/10 blur-3xl rounded-full -translate-y-1/2" aria-hidden="true"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="space-y-3">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">Horarios de Atención</h3>
            <div className="flex items-center gap-3 justify-center md:justify-start text-gold-light">
              <Clock className="w-5 h-5 text-gold shrink-0" aria-hidden="true" />
              <p className="font-sans text-base font-semibold">Lunes a Viernes: 09:00 - 18:00</p>
            </div>
            <p className="text-xs md:text-sm text-gray-300 max-w-xl leading-relaxed">
              Disponibilidad para consultas especializadas, visitas presenciales o conferencias digitales bajo previa coordinación.
            </p>
          </div>
          <div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-white px-8 py-4 rounded font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 transform active:scale-95 shadow-lg shadow-gold/20"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              Agendar una Cita
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-dark-card text-gray-100 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-stretch">

            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-12 text-left">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold">CONTACTO DIRECTO</span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  Inicie su Consulta
                </h2>
                <div className="w-16 h-1 bg-gold rounded mt-3" aria-hidden="true"></div>
                <p className="text-gray-300 font-sans text-sm md:text-base leading-relaxed pt-2">
                  Comuníquese directamente con nosotros por WhatsApp o correo electrónico. Un asesor senior o el Abogado Edgar J. Moya Millán se pondrá en contacto con usted bajo la más estricta reserva.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-dark-bg border border-dark-border rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-gold shrink-0" aria-hidden="true">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 w-full overflow-hidden">
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Correo Electrónico</p>
                    <div className="flex items-center justify-between gap-2">
                      <a href={`mailto:${EMAIL}`} className="font-sans text-base md:text-lg font-bold text-gold truncate hover:text-gold-hover transition-colors">
                        {EMAIL}
                      </a>
                      <button
                        onClick={handleCopy}
                        className="text-gray-400 hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50 shrink-0"
                        title="Copiar email"
                        aria-label="Copiar dirección de correo electrónico"
                      >
                        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-dark-bg border border-dark-border rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-green-900/30 rounded-full flex items-center justify-center text-green-400 shrink-0" aria-hidden="true">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Consultas Rápidas</p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-sans text-base md:text-lg font-bold text-green-400 hover:text-green-300 transition-colors"
                    >
                      Consultar por WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Contact */}
            <div id="contact" className="lg:col-span-7">
              <div className="bg-dark-bg p-8 md:p-10 rounded-2xl shadow-xl border border-dark-border text-left h-full flex flex-col justify-center">
                <div className="space-y-8 text-center">
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">
                      ¿Tiene alguna consulta o desea agendar una reunión?
                    </h3>
                    <p className="text-gray-300 font-sans text-sm md:text-base leading-relaxed max-w-lg mx-auto">
                      Comuníquese directamente con nosotros por WhatsApp o correo electrónico. Estaremos atentos a su solicitud.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-4 rounded-xl font-sans text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] transform active:scale-95 w-full sm:w-auto justify-center"
                    >
                      <MessageCircle className="w-5 h-5" aria-hidden="true" />
                      WhatsApp
                    </a>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="inline-flex items-center gap-3 bg-gold hover:bg-gold-hover text-white px-8 py-4 rounded-xl font-sans text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/30 transform active:scale-95 w-full sm:w-auto justify-center"
                    >
                      <Mail className="w-5 h-5" aria-hidden="true" />
                      Correo Electrónico
                    </a>
                  </div>

                  <div className="pt-4 border-t border-dark-border">
                    <p className="text-xs text-gray-400 font-sans">
                      Respuesta garantizada en un plazo no mayor a 24 horas hábiles.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
