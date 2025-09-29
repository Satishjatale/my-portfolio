import { ArrowUp, Heart, Code, Palette, Zap } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-surface to-surface-elevated border-t border-border relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(172,108,245,0.05),transparent_50%)]"></div>
      
      <div className="max-w-2xl mx-auto px-2 py-8 relative">
        {/* Scroll to Top Button */}
        <div className="text-center mb-8">
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-primary/20 to-primary/10 hover:from-primary/30 hover:to-primary/20 p-4 rounded-full border border-primary/20 transition-all duration-300 group shadow-lg hover:shadow-primary/20"
          >
            <ArrowUp className="text-primary group-hover:-translate-y-1 transition-transform" size={24} />
          </button>
        </div>

        {/* Main Footer Content */}
        <div className="text-center space-y-6">
          {/* Made with Love - Enhanced */}
          <div className="flex items-center justify-center gap-4">
            <span className="text-xl font-medium text-foreground">Made with</span>
            <Heart className="text-primary animate-pulse drop-shadow-lg" size={24} fill="currentColor" />
            <span className="text-xl font-medium text-foreground">by</span>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Satish Jatale
            </span>
          </div>
          
          {/* Copyright - Enhanced */}
          <div className="text-lg text-muted-foreground">
            © {new Date().getFullYear()} 
            <span className="mx-2 text-primary font-semibold">Satish Jatale</span>
            All rights reserved.
          </div>
          
          {/* Tech Stack - Enhanced */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-3 bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-3 rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <Code className="text-primary" size={18} />
              <span className="font-semibold text-foreground">React.js</span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-3 rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <Zap className="text-primary" size={18} />
              <span className="font-semibold text-foreground">TypeScript</span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-3 rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <Palette className="text-primary" size={18} />
              <span className="font-semibold text-foreground">Tailwind CSS</span>
            </div>
          </div>

          {/* Professional Tagline - Enhanced */}
          <div className="pt-6 border-t border-border/30">
            <p className="text-base text-muted-foreground italic font-medium max-w-2xl mx-auto leading-relaxed">
              "Crafting exceptional mobile experiences with passion and precision"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;