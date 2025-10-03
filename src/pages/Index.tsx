import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Resume from '../components/Resume';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Freelancing from '../components/Freelancing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();
  

  useEffect(() => {
    // Trigger initial animation for hero section
    const heroElements = document.querySelectorAll('#home .fade-in');
    heroElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate');
      }, index * 200);
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Resume />
      <Services />
      <Skills />
      <Projects />
      <Freelancing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
