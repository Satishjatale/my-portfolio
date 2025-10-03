import { Code, Heart, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-surface">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-6xl md:text-8xl font-bold text-muted-foreground/10 absolute inset-0 flex items-center justify-center -z-10">
            About
          </h2>
          <h2 className="section-title relative z-10">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am <span className="text-primary font-semibold">Satish Jatale</span>, a passionate and dedicated{' '}
              <span className="text-primary font-semibold">Senior React Native Developer</span> with 4+ years of professional 
              experience in building cross-platform mobile applications for both iOS and Android.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise lies in <span className="text-primary font-semibold">React Native</span>,{' '}
              <span className="text-primary font-semibold">JavaScript</span>, and{' '}
              <span className="text-primary font-semibold">TypeScript</span>, with strong hands-on skills in developing 
              fintech applications, cryptocurrency platforms, Web3 decentralized apps, and social networking apps. Currently working as a Senior React Native Developer at T72 Endeavours Pvt. Ltd.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in crafting pixel-perfect UI/UX designs, implementing API integrations (REST & WebSocket), 
              managing state efficiently using Redux & Redux Toolkit, and building secure blockchain integrations 
              like MetaMask wallet connection.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I thrive on solving challenges, learning new technologies, and delivering high-quality mobile applications 
              that combine performance, security, and exceptional user experience.
            </p>
          </div>

          {/* Features Grid */}
          <div className="space-y-6 fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                <Code className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Fintech & Blockchain Expert</h3>
                <p className="text-muted-foreground">
                  Specialized in developing fintech applications, Web3 decentralized apps, and cryptocurrency platforms with MetaMask integration.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                <Zap className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Cross-Platform Development</h3>
                <p className="text-muted-foreground">
                  Expert in React Native for both iOS and Android with live apps deployed on Play Store and App Store.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                <Heart className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Real-Time Integration</h3>
                <p className="text-muted-foreground">
                  Proficient in REST APIs, WebSocket connections, Firebase services, and Redux state management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;