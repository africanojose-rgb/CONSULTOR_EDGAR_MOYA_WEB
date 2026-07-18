import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { WHATSAPP_URL } from '../data';

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className="w-7 h-7"
      aria-hidden="true"
    >
      <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.058 9.374L1.054 31.25l6.118-1.97A15.907 15.907 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.302 22.602c-.39 1.1-1.932 2.014-3.168 2.28-.84.18-1.936.322-5.658-1.216-4.764-1.966-7.826-6.79-8.066-7.11-.23-.32-1.912-2.552-1.912-4.866s1.21-3.45 1.64-3.926c.39-.426.924-.56 1.23-.56.31 0 .618.004.886.016.284.012.664-.106.882.67.23.804.784 2.77.85 2.972.066.202.11.438.022.704-.088.274-.132.442-.262.68-.13.238-.274.53-.39.708-.13.198-.266.412-.114.804.152.39.676 1.67 1.45 2.704.996 1.33 1.836 1.742 2.096 1.94.26.198.414.166.566-.1.152-.262.65-1.02.824-1.374.172-.352.346-.294.584-.176.24.116 1.514.714 1.774.844.26.13.434.196.498.306.066.108.066.63-.324 1.128z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3" role="region" aria-label="Acciones flotantes">
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`w-12 h-12 rounded-full bg-dark-card border border-dark-border text-gold flex items-center justify-center shadow-2xl transition-all duration-300 hover:border-gold hover:text-white hover:scale-105 transform active:scale-95 cursor-pointer ${
          showScrollTop ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'
        }`}
        aria-label="Volver arriba"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* WhatsApp Floating Button */}
      <div className="relative">
        {/* Tooltip */}
        <div
          className={`absolute bottom-full right-0 mb-3 px-3 py-1.5 bg-dark-card border border-dark-border rounded-lg shadow-xl text-xs text-gray-300 whitespace-nowrap transition-all duration-200 pointer-events-none ${
            isTooltipVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
          }`}
          role="tooltip"
        >
          Escríbanos por WhatsApp
          <div className="absolute top-full right-4 w-2 h-2 bg-dark-card border-r border-b border-dark-border transform rotate-45 -translate-y-1"></div>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transform active:scale-95 group"
          aria-label="Contactar por WhatsApp al +58 424 905 0476"
          onMouseEnter={() => setIsTooltipVisible(true)}
          onMouseLeave={() => setIsTooltipVisible(false)}
          onFocus={() => setIsTooltipVisible(true)}
          onBlur={() => setIsTooltipVisible(false)}
        >
          {/* Pulse animation ring */}
          <span className="absolute inset-0 bg-[#25D366]/30 rounded-full animate-ping -z-10" aria-hidden="true"></span>

          <WhatsAppIcon />
        </a>
      </div>
    </div>
  );
}
