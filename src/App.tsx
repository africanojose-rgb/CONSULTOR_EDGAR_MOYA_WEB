import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pilares from './components/Pilares';
import Process from './components/Process';
import ContactForm from './components/ContactForm';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-gray-100 flex flex-col justify-between selection:bg-gold/30 selection:text-white">
      <Header />

      <main id="main-content" className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Pilares />
        <Process />
        <ContactForm />
        <MapSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
