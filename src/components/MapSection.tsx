import { MapPin, ExternalLink } from 'lucide-react';

export default function MapSection() {
  const mapImgUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_VkZx7-5j9gdXz5igh0p9eg0i3lBXPSmSRxLkSpTSvIJtO9q_KxQGNemth55bS2lEu9zejEwxyQoQbihAHGSyYBnUl4HqB3phgkeacW2iV29DJevkPVgb2klkvreO1hdyFEntW6_PqRQHM6a292e_3J57tWD6QCiAbj65UCaNod3jqGKlYxCuFOWwwW5mvRgCq058N7Db3mKnK3QxnPbRcj3FlAl-UnRRPOjBEoZMH9qqUGocugp5-ijAsmN8CvEzbwyrtYeu130';
  const googleMapsUrl = 'https://maps.google.com/?q=Caracas,Venezuela';

  return (
    <section id="location" className="h-[450px] w-full relative overflow-hidden group border-t border-dark-border/40">
      {/* Background Stylized Map Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center grayscale opacity-80 group-hover:scale-105 transition-transform duration-700"
          style={{ backgroundImage: `url(${mapImgUrl})` }}
        ></div>
        {/* Dark elegant mask overlay */}
        <div className="absolute inset-0 bg-dark-bg/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/10 via-transparent to-dark-bg"></div>
      </div>

      {/* Center Overlaid Location Card */}
      <div className="absolute inset-0 flex items-center justify-center p-6 z-10 pointer-events-none">
        <div className="bg-dark-card/95 backdrop-blur border-2 border-gold/40 p-6 md:p-8 rounded-2xl shadow-2xl text-center max-w-sm w-full pointer-events-auto transform transition-all duration-300 hover:border-gold hover:shadow-gold/10">
          <div className="w-12 h-12 bg-gold/10 border border-gold/30 text-gold rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-6 h-6 animate-bounce" />
          </div>
          
          <h3 className="font-serif text-xl font-bold text-white mb-1">Nuestra Ubicación</h3>
          <p className="text-sm text-gray-300 font-sans mb-4">Caracas, Venezuela</p>
          <p className="text-xs text-gray-500 leading-relaxed mb-6 font-sans">
            Despacho corporativo principal para consultoría nacional y transacciones del sector de Hidrocarburos y Derecho Marítimo.
          </p>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-gold hover:text-white text-white border border-gold/30 px-6 py-3 rounded-lg font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300"
          >
            Ver en Google Maps
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
