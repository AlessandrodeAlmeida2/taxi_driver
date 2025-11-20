import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GeminiPlanner } from './components/GeminiPlanner';
import { ContactFooter } from './components/ContactFooter';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Force scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      <main className="flex-grow pt-16">
        <section id="home">
          <Hero />
        </section>

        <section id="services" className="py-16 md:py-24">
          <ServicesSection />
        </section>

        <section id="about" className="bg-slate-100 py-16 md:py-24">
          <AboutSection />
        </section>

        {/* Testimonials */}
        <section id="reviews" className="py-16 md:py-24 bg-slate-50">
          <TestimonialsSection />
        </section>

        {/* AI Feature */}
        <section id="planner" className="py-16 md:py-24 bg-white">
          <GeminiPlanner />
        </section>

        <section id="contact">
          <ContactFooter />
        </section>
      </main>
    </div>
  );
};

export default App;