
import { useEffect } from 'react';
import { ChevronLeft, Mail, MapPin, Phone, Clock, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-ue-dark min-h-screen">
      <Navbar />
      <ParticleBackground />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fade-in-down" className="mb-2">
            <Link to="/" className="inline-flex items-center gap-2 text-ue-gray hover:text-ue-blue transition-colors mb-6">
              <ChevronLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" className="text-center mb-16">
            <h1 className="section-title">Contact <span className="text-ue-blue">Me</span></h1>
            <p className="section-subtitle">
              Let's discuss your project and turn your ideas into reality
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection animation="fade-in-left" className="glass-panel p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-ue-blue/10 text-ue-blue">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Email</h3>
                      <p className="text-ue-gray">contact@sandyrock.dev</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-ue-blue/10 text-ue-blue">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Location</h3>
                      <p className="text-ue-gray">Remote - Worldwide</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-ue-blue/10 text-ue-blue">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Phone</h3>
                      <p className="text-ue-gray">By appointment only</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-ue-blue/10 text-ue-blue">
                      <Clock size={18} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Availability</h3>
                      <p className="text-ue-gray">Mon-Fri, 9AM-6PM (UTC)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-ue-blue/10 text-ue-blue">
                      <Video size={18} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Video Calls</h3>
                      <p className="text-ue-gray">Available by appointment</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in-left" delay={200} className="glass-panel p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Current Status</h2>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-white">Available for new projects</span>
                </div>
                <p className="text-ue-gray mb-4">
                  I'm currently accepting new projects and collaborations. 
                  Whether you need a complete game built from scratch or consultation 
                  on your existing project, I'd be happy to discuss how I can help.
                </p>
                <p className="text-ue-gray">
                  Response time: Usually within 24 hours
                </p>
              </AnimatedSection>
            </div>
            
            <AnimatedSection animation="fade-in-right" delay={100} className="lg:col-span-3">
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
