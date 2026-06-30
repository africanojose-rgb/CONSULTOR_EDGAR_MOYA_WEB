/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pilares from './components/Pilares';
import Process from './components/Process';
import ContactForm from './components/ContactForm';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-gray-100 flex flex-col justify-between selection:bg-gold/30 selection:text-white">
      {/* Top sticky navigation */}
      <Header />

      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* Hero Banner / Portrait showcase */}
        <Hero />

        {/* Professional Profile / Bio & Stats */}
        <About />

        {/* Practice Areas / 14 core legal grids */}
        <Services />

        {/* Core Values bento cards */}
        <Pilares />

        {/* Visual 4-step workflow timeline */}
        <Process />

        {/* Contact form & Availability hours banner */}
        <ContactForm />

        {/* Custom stylized map wrapper */}
        <MapSection />
      </main>

      {/* Global Brand Footer & floating actions */}
      <Footer />
    </div>
  );
}

