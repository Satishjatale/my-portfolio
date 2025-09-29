import { Calendar, CheckCircle, Star } from 'lucide-react';

const Freelancing = () => {
  return (
    <section id="freelancing" className="section bg-gradient-to-br from-primary/5 via-background to-primary/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(172,108,245,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(172,108,245,0.08),transparent_50%)]"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-6xl md:text-8xl font-bold text-muted-foreground/10 absolute inset-0 flex items-center justify-center -z-10">
            Available
          </h2>
            <h2 className="section-title relative z-10">I'm <span className="text-primary font-bold">Available</span> for <span className="text-primary font-bold">freelancing</span></h2>
          <p className="text-center text-muted-foreground text-lg mt-8 max-w-3xl mx-auto relative z-10 leading-relaxed">
            A passionate React Native developer ready to bring your mobile app ideas to life. 
            With expertise in cross-platform development, Web3 integration, and modern UI/UX design, 
            I'm here to help you build exceptional mobile experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-primary/20">
              <Calendar className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Flexible Schedule</h3>
            <p className="text-muted-foreground">
              Available for both short-term projects and long-term collaborations. 
              I adapt to your timeline and project requirements.
            </p>
          </div>

          <div className="text-center fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-primary/20">
              <CheckCircle className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Proven Track Record</h3>
            <p className="text-muted-foreground">
              5+ live apps on Play Store, successful fintech projects, and 
              comprehensive Web3 application development experience.
            </p>
          </div>

          <div className="text-center fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-primary/20">
              <Star className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
            <p className="text-muted-foreground">
              Delivering pixel-perfect UI/UX, optimized performance, and 
              robust security implementations for every project.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-surface border border-border rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your mobile app requirements and bring your vision to life with 
              cutting-edge React Native development.
            </p>
            <a 
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Freelancing;
