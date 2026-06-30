import { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, MessageCircle, Copy, Check, Send, Clock, Calendar } from 'lucide-react';

export default function ContactForm() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = 'jamadus@gmail.com';
  const whatsappUrl = 'https://wa.me/584120000000?text=Hola%20Abogado%20Edgar%20Moya%2C%20quisiera%20agendar%20una%20consulta%20jur%C3%ADdica%20de%20negocios.';

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API Submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormState({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="w-full">
      {/* 1. Hours and Availability full-width pre-contact banner */}
      <section className="bg-primary/95 border-y border-gold/30 py-12 relative overflow-hidden">
        {/* Glow behind the text */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold/10 blur-3xl rounded-full -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="space-y-3">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">Horarios de Atención</h3>
            <div className="flex items-center gap-3 justify-center md:justify-start text-gold-light">
              <Clock className="w-5 h-5 text-gold shrink-0" />
              <p className="font-sans text-base font-semibold">Lunes a Viernes: 09:00 - 18:00</p>
            </div>
            <p className="text-xs md:text-sm text-gray-300 max-w-xl leading-relaxed">
              Disponibilidad para consultas especializadas, visitas presenciales de negocios o conferencias digitales bajo previa coordinación de agenda.
            </p>
          </div>
          <div>
            <a
              href="#contact-form-section"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-white px-8 py-4 rounded font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 transform active:scale-95 shadow-lg shadow-gold/20"
            >
              <Calendar className="w-4 h-4" />
              Agendar una Cita
            </a>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Form Section */}
      <section id="contact-form-section" className="py-24 bg-surface text-on-surface relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column: Direct channels and descriptions */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-12 text-left">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.25em] text-secondary font-bold">CONTACTO DIRECTO</span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-tight">
                  Inicie su Consulta
                </h2>
                <div className="w-16 h-1 bg-secondary rounded mt-3"></div>
                <p className="text-on-surface-variant font-sans text-sm md:text-base leading-relaxed pt-2">
                  Estamos listos para defender sus intereses y asesorar sus proyectos de negocio. Complete el formulario y un asesor senior o el Abogado Edgar J. Moya Millán se pondrá en contacto con usted a la brevedad bajo la más estricta reserva.
                </p>
              </div>

              {/* Direct Communication Channels (Matching design spec) */}
              <div className="space-y-6">
                
                {/* Email Channel */}
                <div className="flex items-start gap-4 p-5 bg-white border border-outline-variant rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 w-full overflow-hidden">
                    <p className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">Enviar Correo Electrónico</p>
                    <div className="flex items-center justify-between gap-2">
                      <a href={`mailto:${emailAddress}`} className="font-sans text-base md:text-lg font-bold text-primary truncate hover:text-secondary transition-colors">
                        {emailAddress}
                      </a>
                      <button
                        onClick={handleCopy}
                        className="text-on-surface-variant hover:text-secondary transition-colors focus:outline-none shrink-0"
                        title="Copiar email al portapapeles"
                      >
                        {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Channel */}
                <div className="flex items-start gap-4 p-5 bg-white border border-outline-variant rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">Consultas Rápidas</p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="inline-flex items-center gap-1 font-sans text-base md:text-lg font-bold text-green-600 hover:text-green-700 transition-colors"
                    >
                      Consultar por WhatsApp
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Pristine validated white form (Matches layout) */}
            <div id="contact" className="lg:col-span-7">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-outline-variant/80 text-left">
                
                {submitted ? (
                  <div className="py-12 text-center space-y-4 animate-fade-in">
                    <div className="w-16 h-16 bg-green-50 border border-green-200 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary">¡Solicitud Enviada con Éxito!</h3>
                    <p className="text-on-surface-variant text-sm max-w-md mx-auto leading-relaxed">
                      Su mensaje ha sido registrado bajo estricta confidencialidad. Nos pondremos en contacto a través de los canales provistos en un lapso no mayor a 24 horas hábiles.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="font-serif text-lg font-bold text-primary border-b border-outline-variant pb-3 uppercase tracking-wider">
                      Formulario de Consulta Confidencial
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-wider font-bold text-on-surface-variant block">
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formState.fullName}
                          onChange={handleChange}
                          placeholder="Ej: Juan Pérez"
                          className="w-full border-b border-outline focus:border-primary focus:ring-0 focus:outline-none py-2.5 text-sm text-on-surface bg-transparent transition-colors"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-wider font-bold text-on-surface-variant block">
                          Correo Electrónico *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="ejemplo@email.com"
                          className="w-full border-b border-outline focus:border-primary focus:ring-0 focus:outline-none py-2.5 text-sm text-on-surface bg-transparent transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone input */}
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-on-surface-variant block">
                        Número de Teléfono
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+58 412 1234567"
                        className="w-full border-b border-outline focus:border-primary focus:ring-0 focus:outline-none py-2.5 text-sm text-on-surface bg-transparent transition-colors"
                      />
                    </div>

                    {/* Message input */}
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-on-surface-variant block">
                        Breve descripción de su consulta *
                      </label>
                      <textarea
                        name="message"
                        required
                        value={formState.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Escriba aquí los detalles relevantes de su caso..."
                        className="w-full border border-outline rounded-lg focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none p-3 text-sm text-on-surface bg-transparent transition-all"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-primary hover:bg-gold text-white font-sans text-xs font-bold uppercase tracking-widest py-4 rounded-xl shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {submitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Procesando...
                        </>
                      ) : (
                        <>
                          Enviar Solicitud
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
