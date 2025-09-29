import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Resume = () => {
  const workExperience = [
    {
      id: 1,
      period: "2024 - Present",
      title: "Senior React Native Developer",
      company: "Fintech Company, Pune",
      description: "Leading development of comprehensive fintech mobile applications supporting multiple financial services. Architected and implemented payment gateway integrations, real-time API connections, and advanced encryption protocols. Leveraged Firebase ecosystem for notifications, crash analytics, and app reliability monitoring. Delivered modern, accessible UI/UX designs with responsive layouts. Collaborated with cross-functional teams including product managers, designers, and QA engineers for seamless releases.",
      isCurrent: true,
      projects: [
        {
          name: "Multi-Feature Fintech Application",
          description: "Built and optimized a comprehensive fintech mobile application supporting multiple financial services. Integrated payment gateways, real-time APIs, and encryption protocols. Utilized Firebase for notifications, crash analytics, and app reliability. Delivered modern UI/UX with accessibility & responsiveness. Collaborated with cross-functional teams for smooth releases.",
          link: "#",
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
        }
      ]
    },
    {
      id: 2,
      period: "2022 - 2023",
      title: "React Native Developer",
      company: "Technology Solutions Company, Pune",
      description: "Developed and deployed multiple mobile applications across blockchain, Web3, social media, and AI domains. Spearheaded complete UI/UX revamps with modern responsive designs and improved user experience. Integrated complex backend systems including RESTful APIs, WebSocket connections, Firebase services, and Redux state management. Implemented secure blockchain integrations with MetaMask wallet connectivity. Successfully delivered 4+ projects live on Google Play Store and Apple App Store with positive user ratings.",
      isCurrent: false,
      projects: [
        {
          name: "Social & Crypto App - Taral Wallet",
          description: "Combined social networking + crypto wallet. Revamped UI, added form validations, backend API integration. Live on Play Store & App Store.",
          link: "https://play.google.com/store/apps/details?id=com.taralwallet"
        },
        {
          name: "Web3 Decentralized Wallet App - CScan Wallet", 
          description: "Enabled buying, storing, sending, swapping tokens. Integrated MetaMask + Ethereum (CUSD chain). UI redesigned using Redux for scalability.",
          link: "https://play.google.com/store/apps/details?id=com.cscanwallet"
        },
        {
          name: "Crypto Trading AI Bot App - Olympus AI Bot",
          description: "AI-powered platform with prediction tools, MLM, referral system, leaderboards. Real-time market data handling with WebSockets. Integrated wallet, trading plans & backend APIs.",
          link: "https://play.google.com/store/apps/details?id=com.olympusaibot"
        },
        {
          name: "Sports News App",
          description: "Built entire UI from scratch. Integrated REST APIs for live sports content (cricket, football, horse riding).",
          link: "#"
        }
      ]
    }
  ];

  return (
    <section id="resume" className="section bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-6xl md:text-8xl font-bold text-muted-foreground/10 absolute inset-0 flex items-center justify-center -z-10">
            Work experience
          </h2>
          <h2 className="section-title relative z-10">Work experience</h2>
        </div>

        {/* Work Experience */}
        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <div
              key={job.id}
              className="bg-surface border border-border rounded-xl p-8 fade-in hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Job Header */}
              <div className="mb-6">
                {/* Job Period */}
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="text-primary" size={16} />
                  <span className="text-primary font-semibold text-sm">{job.period}</span>
                  {job.isCurrent && (
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium border border-primary/20">
                      Current
                    </span>
                  )}
                </div>

                {/* Job Title */}
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {job.title}
                </h3>

                {/* Company */}
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="text-muted-foreground" size={16} />
                  <span className="text-muted-foreground font-medium">{job.company}</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {job.description}
                </p>
              </div>

              {/* Modules/Projects */}
              {job.modules && (
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Key Modules Developed:</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {job.modules.map((module, moduleIndex) => (
                      <div key={moduleIndex} className="bg-background border border-border rounded-lg p-3">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {module}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {job.projects && (
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Notable Projects:</h4>
                  <div className="grid md:grid-cols-1 gap-6">
                    {job.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="bg-background border border-border rounded-lg p-4">
                        <h5 className="text-md font-semibold text-primary mb-2">{project.name}</h5>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          {project.description}
                        </p>
                        
                        {project.modules && (
                          <div className="mt-4">
                            <h6 className="text-sm font-semibold text-foreground mb-3">Key Modules Developed:</h6>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                              {project.modules.map((module, moduleIndex) => (
                                <div key={moduleIndex} className="bg-surface border border-border/50 rounded-lg p-2">
                                  <p className="text-muted-foreground text-xs leading-relaxed">
                                    {module}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {project.link !== "#" && (
                          <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                          >
                            View on Play Store →
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Resume;
