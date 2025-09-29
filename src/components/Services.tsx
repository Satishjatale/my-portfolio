import { Smartphone, Globe, Code, Zap, Users, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Smartphone size={24} />,
      title: "Mobile App Development",
      description: "Custom React Native applications for iOS and Android with native performance and cross-platform compatibility.",
      features: ["iOS & Android Apps", "Cross-platform Development", "Native Performance", "App Store Deployment"]
    },
    {
      icon: <Globe size={24} />,
      title: "Web Development",
      description: "Modern, responsive web applications built with React.js, featuring dynamic user interfaces and optimal performance.",
      features: ["React.js Applications", "Responsive Design", "Performance Optimization", "SEO Friendly"]
    },
    {
      icon: <Code size={24} />,
      title: "API Development",
      description: "Robust backend APIs and server-side solutions to power your applications with scalable architecture.",
      features: ["RESTful APIs", "Database Design", "Authentication", "Third-party Integration"]
    },
    {
      icon: <Zap size={24} />,
      title: "Performance Optimization",
      description: "Enhance your application's speed and efficiency with advanced optimization techniques and best practices.",
      features: ["Code Optimization", "Bundle Size Reduction", "Loading Speed", "Memory Management"]
    },
    {
      icon: <Shield size={24} />,
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance services to keep your applications running smoothly and securely.",
      features: ["Bug Fixes", "Security Updates", "Feature Enhancements", "24/7 Support"]
    }
  ];

  return (
    <section id="services" className="section bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-6xl md:text-8xl font-bold text-muted-foreground/10 absolute inset-0 flex items-center justify-center -z-10">
            Services
          </h2>
          <h2 className="section-title relative z-10">Services</h2>
          <p className="text-center text-muted-foreground text-lg mt-8 max-w-2xl mx-auto relative z-10">
            Comprehensive development services to bring your ideas to life with cutting-edge technology and best practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-background border border-border rounded-xl p-6 fade-in hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Icon */}
              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 mb-6 w-fit group-hover:bg-primary/20 transition-colors">
                <div className="text-primary">
                  {service.icon}
                </div>
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20 fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">My Development Process</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured approach to ensure your project's success from concept to deployment
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery & Planning", description: "Understanding your requirements and creating a detailed project roadmap" },
              { step: "02", title: "Design & Prototyping", description: "Creating wireframes and prototypes to visualize the final product" },
              { step: "03", title: "Development & Testing", description: "Building your application with clean code and comprehensive testing" },
              { step: "04", title: "Deployment & Support", description: "Launching your project and providing ongoing maintenance and support" }
            ].map((process, index) => (
              <div key={process.step} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20">
                  <span className="text-primary font-bold text-lg">{process.step}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">{process.title}</h4>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center fade-in" style={{ animationDelay: '1s' }}>
          <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing together. 
              I'm committed to delivering high-quality solutions that exceed your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </a>
              <a 
                href="#projects"
                className="btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
