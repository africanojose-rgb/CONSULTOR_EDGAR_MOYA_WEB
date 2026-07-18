import { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, MessageCircle, Copy, Check, Send, Clock, Calendar, AlertCircle } from 'lucide-react';
import { EMAIL, WHATSAPP_URL, FORM_ENDPOINT } from '../data';

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

function validate(formState: { fullName: string; email: string; message: string }): FormErrors {
  const errors: FormErrors = {};
  if (!formState.fullName.trim()) {
    errors.fullName = 'El nombre es obligatorio.';
  }
  if (!formState.email.trim()) {
    errors.email = 'El correo es obligatorio.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
    errors.email = 'Ingrese un correo electrónico válido.';
  }
  if (!formState.message.trim()) {
    errors.message = 'La descripción es obligatoria.';
  } else if (formState.message.trim().length < 10) {
    errors.message = 'La descripción debe tener al menos 10 caracteres.';
  }
  return errors;
}

export default function ContactForm() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const newErrors = validate({ ...formState, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }));
    }
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(formState);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const validationErrors = validate(formState);
    setErrors(validationErrors);
    setTouched({ fullName: true, email: true, message: true });

    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formState.fullName,
          email: formState.email,
          phone: formState.phone,
          message: formState.message,
          _subject: `Consulta jurídica de ${formState.fullName}`,
        }),
      });

      if (!response.ok) throw new Error('Error al enviar el formulario.');

      setSubmitted(true);
      setFormState({ fullName: '', email: '', phone: '', message: '' });
      setTouched({});
      setErrors({});
      setTimeout(() => setSubmitted(false), 6000);
    } catch {
      setSubmitError('No se pudo enviar el formulario. Intente novamente o contáctenos directamente por correo o WhatsApp.');
    } finally {
      setSubmitting(false);
    }
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
              href="#contact-form-section"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-white px-8 py-4 rounded font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 transform active:scale-95 shadow-lg shadow-gold/20"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              Agendar una Cita
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form-section" className="py-24 bg-dark-card text-gray-100 relative">
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
                  Complete el formulario y un asesor senior o el Abogado Edgar J. Moya Millán se pondrá en contacto con usted bajo la más estricta reserva.
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

            {/* Right Column: Form */}
            <div id="contact" className="lg:col-span-7">
              <div className="bg-dark-bg p-8 md:p-10 rounded-2xl shadow-xl border border-dark-border text-left">

                {submitted ? (
                  <div className="py-12 text-center space-y-4 animate-fade-in">
                    <div className="w-16 h-16 bg-green-900/30 border border-green-700 text-green-400 rounded-full flex items-center justify-center mx-auto shadow-md" aria-hidden="true">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white">¡Solicitud Enviada!</h3>
                    <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
                      Su mensaje ha sido registrado. Nos pondremos en contacto en un lapso no mayor a 24 horas hábiles.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <h3 className="font-serif text-lg font-bold text-white border-b border-dark-border pb-3 uppercase tracking-wider">
                      Formulario de Consulta Confidencial
                    </h3>

                    {submitError && (
                      <div className="flex items-start gap-3 p-4 bg-red-900/20 border border-red-700/50 rounded-lg text-sm text-red-300" role="alert">
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <p>{submitError}</p>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="fullName" className="text-[10px] uppercase tracking-wider font-bold text-gray-400 block">
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          aria-required="true"
                          aria-invalid={!!errors.fullName}
                          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                          value={formState.fullName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Ej: Juan Pérez"
                          className="w-full border-b border-dark-border focus:border-gold focus:ring-0 focus:outline-none py-2.5 text-sm text-white bg-transparent transition-colors"
                        />
                        {errors.fullName && (
                          <p id="fullName-error" className="text-xs text-red-400 mt-1" role="alert">{errors.fullName}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-[10px] uppercase tracking-wider font-bold text-gray-400 block">
                          Correo Electrónico *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          aria-required="true"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          value={formState.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="ejemplo@email.com"
                          className="w-full border-b border-dark-border focus:border-gold focus:ring-0 focus:outline-none py-2.5 text-sm text-white bg-transparent transition-colors"
                        />
                        {errors.email && (
                          <p id="email-error" className="text-xs text-red-400 mt-1" role="alert">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-[10px] uppercase tracking-wider font-bold text-gray-400 block">
                        Número de Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+58 412 1234567"
                        className="w-full border-b border-dark-border focus:border-gold focus:ring-0 focus:outline-none py-2.5 text-sm text-white bg-transparent transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-[10px] uppercase tracking-wider font-bold text-gray-400 block">
                        Breve descripción de su consulta *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        value={formState.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows={4}
                        placeholder="Escriba aquí los detalles relevantes de su caso..."
                        className="w-full border border-dark-border rounded-lg focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none p-3 text-sm text-white bg-transparent transition-all"
                      ></textarea>
                      {errors.message && (
                        <p id="message-error" className="text-xs text-red-400 mt-1" role="alert">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-gold hover:bg-gold-hover text-white font-sans text-xs font-bold uppercase tracking-widest py-4 rounded-xl shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {submitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar Solicitud
                          <Send className="w-4 h-4" aria-hidden="true" />
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
