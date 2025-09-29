import { ExternalLink, Github } from 'lucide-react';
import project1 from '../assets/project-1.jpg';
import project2 from '../assets/project-2.jpg';
import project3 from '../assets/project-3.jpg';
import project4 from '../assets/project-4.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Multi-Feature Fintech App",
      description: "Built and optimized a comprehensive fintech mobile application supporting multiple financial services. Integrated payment gateways, real-time APIs, and encryption protocols. Utilized Firebase for notifications, crash analytics, and app reliability. Delivered modern UI/UX with accessibility & responsiveness. Collaborated with cross-functional teams for smooth releases.",
      image: project1,
      technologies: ["React Native", "Firebase", "Payment Gateways", "Encryption"],
      liveDemo: "#",
      github: "#",
      modules: [
        "Send Money – secure peer-to-peer transfers",
        "Top-Up & Recharges – mobile/DTH/data packs",
        "Event Ticket Booking – seamless booking flow",
        "Gift Cards – purchase, share & redeem",
        "Check Cashing – check scan & digital deposit",
        "Pay by Barcode – QR/barcode-based payments",
        "Wire Transfers – domestic & international",
        "KYC Verification – secure document upload & verification",
        "Machine/ATM Locator – geolocation-based services"
      ]
    },
    {
      title: "Social Networking + Crypto Wallet App",
      description: "Combined social networking features with a digital crypto wallet. Revamped entire UI with modern design principles, implemented comprehensive form validations, and integrated robust backend API connections for seamless user experience.",
      image: project2,
      technologies: ["React Native", "Redux", "REST APIs", "Firebase"],
      liveDemo: "https://play.google.com/store/apps/details?id=com.taralwallet",
      github: "#"
    },
    {
      title: "Web3 Decentralized Wallet Application",
      description: "Enabled users to buy, store, send, and swap tokens seamlessly. Integrated MetaMask wallet connectivity and Ethereum blockchain (CUSD chain) for secure transactions. Optimized entire UI/UX using Redux for efficient state management.",
      image: project3,
      technologies: ["React Native", "Web3", "Blockchain", "MetaMask"],
      liveDemo: "https://play.google.com/store/apps/details?id=com.cscanwallet",
      github: "#"
    },
    {
      title: "AI-Powered Crypto Trading Bot",
      description: "Developed comprehensive trading platform with advanced market prediction tools, multi-level referral system, and competitive leaderboards. Handled real-time market data processing with WebSockets and integrated wallet functionality with diverse trading plans.",
      image: project4,
      technologies: ["React Native", "AI/ML", "WebSocket", "Redux"],
      liveDemo: "https://play.google.com/store/apps/details?id=com.olympusaibot",
      github: "#"
    },
    {
      title: "Sports News & Fantasy Knowledge App",
      description: "Built complete UI from scratch with modern design principles. Integrated REST APIs for live sports content delivery covering cricket, football, horse riding, and other sports. Designed to enhance user sports knowledge through engaging news and fantasy features.",
      image: project1,
      technologies: ["React Native", "REST API", "UI/UX", "Validation"],
      liveDemo: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="section bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-6xl md:text-8xl font-bold text-muted-foreground/10 absolute inset-0 flex items-center justify-center -z-10">
            Projects
          </h2>
          <h2 className="section-title relative z-10">My Projects</h2>
          <p className="text-center text-muted-foreground text-lg mt-8 max-w-2xl mx-auto relative z-10">
            Here are some of my recent projects showcasing my expertise in React Native and React.js development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="fade-in project-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a 
                    href={project.liveDemo}
                    className="bg-background/90 p-2 rounded-full hover:bg-background transition-colors"
                    onClick={(e) => e.preventDefault()}
                  >
                    <ExternalLink size={20} className="text-primary" />
                  </a>
                  <a 
                    href={project.github}
                    className="bg-background/90 p-2 rounded-full hover:bg-background transition-colors"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Github size={20} className="text-primary" />
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.status && (
                    <span className="px-2 py-1 bg-green-500/10 text-green-600 text-xs rounded-full border border-green-500/20">
                      {project.status}
                    </span>
                  )}
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.modules && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2 text-text-primary text-sm">Key Modules:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {project.modules.map((module, index) => (
                        <div key={index} className="flex items-center gap-1 text-xs text-text-secondary">
                          <span className="text-primary">•</span>
                          <span className="truncate">{module}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-4 pt-4">
                  <a 
                    href={project.liveDemo}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                    onClick={(e) => e.preventDefault()}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors"
                    onClick={(e) => e.preventDefault()}
                  >
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in" style={{ animationDelay: '0.6s' }}>
          <a 
            href="#"
            className="btn-secondary inline-flex items-center gap-2"
            onClick={(e) => e.preventDefault()}
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
