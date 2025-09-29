import { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Create mailto link with form data
    const emailBody = `Hi Satish,

${formData.message}

Best regards,
${formData.name}
${formData.email}`;

    const mailtoLink = `mailto:satishjatale1202@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Your email client will open with the message pre-filled. Please send the email to complete the process.');
    }, 500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-6xl md:text-8xl font-bold text-muted-foreground/10 absolute inset-0 flex items-center justify-center -z-10">
            Contact
          </h2>
          <h2 className="section-title relative z-10">Contact Me</h2>
          <p className="text-center text-muted-foreground text-lg mt-8 max-w-2xl mx-auto relative z-10">
            Ready to bring your ideas to life? Let's discuss your next project and how I can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, innovative projects, 
                and ways to bring exceptional digital experiences to life. Whether you're 
                a startup or an established company, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <a href="mailto:satishjatale1202@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
                    satishjatale1202@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <a href="tel:+918552043824" className="text-primary hover:text-primary/80 transition-colors">
                    +91 8552043824
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-muted-foreground">Pune, India</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Follow me on</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/satish-jatale/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 p-3 rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors group"
                >
                  <Linkedin className="text-primary group-hover:scale-110 transition-transform" size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-primary/10 p-3 rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors group"
                  onClick={(e) => e.preventDefault()}
                >
                  <Github className="text-primary group-hover:scale-110 transition-transform" size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in" style={{ animationDelay: '0.4s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`form-input ${errors.name ? 'border-destructive focus:ring-destructive/50' : ''}`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`form-input ${errors.email ? 'border-destructive focus:ring-destructive/50' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`form-input ${errors.subject ? 'border-destructive focus:ring-destructive/50' : ''}`}
                  placeholder="Project discussion, collaboration, etc."
                />
                {errors.subject && (
                  <p className="text-destructive text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`form-textarea ${errors.message ? 'border-destructive focus:ring-destructive/50' : ''}`}
                  placeholder="Tell me about your project, goals, timeline, and how I can help..."
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;