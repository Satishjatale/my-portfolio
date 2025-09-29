import { Smartphone, Globe, Code, Wrench, Database, Layers, Zap, Lock, Shield, CreditCard, MapPin } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe size={24} />,
      skills: ["React.js", "React Hooks", "React Router", "Context API", "JSX", "Component Lifecycle", "Virtual DOM", "React DevTools", "HTML", "CSS", "JavaScript", "TypeScript"]
    },
    {
      title: "Mobile Development", 
      icon: <Smartphone size={24} />,
      skills: ["React Native", "React Native CLI", "iOS Development", "Android Development", "Push Notifications", "Native Modules", "Navigation", "Cross-platform", "APK", "IPA", "XCode", "Android Studio", "TestFlight", "Simulator", "Emulator", "Crashlytics", "Deep Linking"]
    },
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: ["TypeScript", "JavaScript", "HTML5", "CSS3", "ES6+", "JSX", "JSON", "Async/Await"]
    },
    {
      title: "State Management",
      icon: <Layers size={24} />,
      skills: ["Redux", "Redux Toolkit", "Context API", "useState", "useReducer", "React Query", "Custom Hooks", "State Lifting", "Toolkit"]
    },
    {
      title: "Styling & UI",
      icon: <Zap size={24} />,
      skills: ["Tailwind CSS", "Styled Components", "CSS Modules", "Sass", "Material-UI", "Ant Design", "Responsive Design", "Flexbox"]
    },
    {
      title: "App Security Tools",
      icon: <Lock size={24} />,
      skills: ["Authentication", "Authorization", "JWT Tokens", "HTTPS", "Input Validation", "XSS Protection", "CSRF Protection", "Secure Storage", "Google Authentication"]
    },
    {
      title: "Build Tools & DevOps",
      icon: <Wrench size={24} />,
      skills: [ "Android Studio", "XCode", "Simulator", "Emulator","VS Code", "Vite","Git", "GitHub", "CI/CD", "Docker", "GitLab",]
    },
    {
      title: "APIs & Backend",
      icon: <Database size={24} />,
      skills: ["REST APIs", "GraphQL", "Axios", "Fetch API", "Firebase", "Authentication", "JWT", "API Integration", "API Development", "API Testing", "SDK Integration", "Postman", "Swagger", "Socket.io", "WebSocket"]
    },
    {
      title: "Web3 & Blockchain Integration",
      icon: <CreditCard size={24} />,
      skills: ["Web3 Applications", "MetaMask Integration", "Smart Contracts-based Apps", "Ethereum wallet Integration", "Cryptocurrency Apps", "Payment Gateways", "Blockchain-based Apps"]
    },
    {
      title: "Firebase Services",
      icon: <Shield size={24} />,
      skills: ["Firebase Analytics", "Firebase Crashlytics", "Firebase Push Notifications", "Firebase Authentication", "Firebase Database", "Firebase Storage", "Firebase Hosting", "Firebase Functions"]
    },
    {
      title: "Maps & Location Services",
      icon: <MapPin size={24} />,
      skills: ["Google Maps API", "Google Maps", "Location Services", "Geolocation", "Maps Integration", "Location Tracking", "Geocoding", "Reverse Geocoding"]
    },
    {
      title: "Testing & Quality Assurance",
      icon: <Shield size={24} />,
      skills: ["Flight Test", "Quality Assurance", "Testing", "Debugging", "Performance Testing", "Unit Testing", "Integration Testing"]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="max-w-6xl mx-auto">
        {/* Clean Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-6xl md:text-8xl font-bold text-muted-foreground/10 absolute inset-0 flex items-center justify-center -z-10">
            Skills
          </h2>
          <h2 className="section-title relative z-10">My Skills</h2>
        </div>

        {/* Clean Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="fade-in bg-surface border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-lg border border-primary/20">
                  <div className="text-primary">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill} className="skill-tag text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>


        {/* Clean Experience Summary */}
        <div className="mt-16 text-center fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-surface-elevated border border-border rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Experience Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;