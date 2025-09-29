import { ArrowDown, Download, Eye } from 'lucide-react';
import developerIllustration from '../assets/developer-illustration.png';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Greeting */}
            <div className="fade-in animate">
              <p className="hero-greeting mb-4">
                HELLO!
              </p>
            </div>

            {/* Main Title */}
            <div className="fade-in animate" style={{ animationDelay: '0.2s' }}>
              <h1 className="hero-title mb-6">
                I'm <span className="accent">Satish Jatale</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="fade-in animate" style={{ animationDelay: '0.4s' }}>
              <p className="hero-subtitle mb-8">
                Full stack app developer, React Native Developer.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="fade-in animate flex flex-col sm:flex-row gap-6" style={{ animationDelay: '0.6s' }}>
              <button
                onClick={scrollToContact}
                className="relative group px-10 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>HIRE ME</span>
                  <ArrowDown className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
                </span>
              </button>
              
              <button
                onClick={scrollToProjects}
                className="relative group px-10 py-4 rounded-full font-bold text-lg border-2 border-primary text-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Eye className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>MY WORKS</span>
                </span>
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="fade-in animate lg:flex justify-center hidden" style={{ animationDelay: '0.8s' }}>
            <div className="relative">
              <div className="w-96 h-96 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-blue-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500">
                  <img 
                    src={developerIllustration} 
                    alt="Developer working on code" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;