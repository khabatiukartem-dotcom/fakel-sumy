import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Programs from './components/sections/Programs';
import Coaches from './components/sections/Coaches';
import Achievements from './components/sections/Achievements';
import Testimonials from './components/sections/Testimonials';
import Locations from './components/sections/Locations';
import LeadForm from './components/sections/LeadForm';

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] font-montserrat relative text-[var(--text-primary)]">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Programs />
        <Coaches />
        <Achievements />
        <Testimonials />
        <Locations />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
