
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <>
      <Navbar />
      <ParticleBackground />
      
      <main className="pt-32">
        <Section
          title="Contact Me"
          subtitle="Get in touch for collaboration, job opportunities, or just to say hello."
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4">Let's Talk</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the methods below.
              </p>
              
              <div className="glass-card p-6 mb-6">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={18} />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a href="mailto:hello@example.com" className="text-primary hover:underline">
                        hello@example.com
                      </a>
                      <p className="text-muted-foreground text-sm mt-1">
                        Feel free to email me anytime. I'll get back to you as soon as possible.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={18} />
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <a href="tel:+1234567890" className="text-primary hover:underline">
                        +1 (234) 567-890
                      </a>
                      <p className="text-muted-foreground text-sm mt-1">
                        Available Monday to Friday, 9am to 6pm EST.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={18} />
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-foreground">New York, NY</p>
                      <p className="text-muted-foreground text-sm mt-1">
                        Open to remote work and relocation for the right opportunity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6">
                <h4 className="font-medium mb-4">Connect on Social Media</h4>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                  >
                    <Github size={18} className="text-foreground" />
                    <span>GitHub</span>
                  </a>
                  
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                  >
                    <Linkedin size={18} className="text-foreground" />
                    <span>LinkedIn</span>
                  </a>
                  
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                  >
                    <Twitter size={18} className="text-foreground" />
                    <span>Twitter</span>
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </Section>
        
        {/* FAQ Section */}
        <Section
          title="Frequently Asked Questions"
          subtitle="Common questions about working with me"
          className="bg-secondary/30 mt-12"
        >
          <div className="glass-card p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg font-bold mb-2">What is your typical process for new projects?</h3>
                <p className="text-muted-foreground mb-6">
                  I start with an initial consultation to understand your needs, then provide a proposal. Once approved, we move to design, development, testing, and deployment phases with regular checkpoints.
                </p>
                
                <h3 className="text-lg font-bold mb-2">How long does a typical project take?</h3>
                <p className="text-muted-foreground mb-6">
                  Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months or more.
                </p>
                
                <h3 className="text-lg font-bold mb-2">Do you provide ongoing support?</h3>
                <p className="text-muted-foreground">
                  Yes, I offer maintenance packages and support services for all completed projects to ensure they continue running smoothly.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-lg font-bold mb-2">What are your payment terms?</h3>
                <p className="text-muted-foreground mb-6">
                  I typically require a 50% deposit to start work, with the remaining balance due upon completion. For larger projects, we can arrange milestone-based payments.
                </p>
                
                <h3 className="text-lg font-bold mb-2">Are you available for full-time opportunities?</h3>
                <p className="text-muted-foreground mb-6">
                  Yes, I'm open to full-time roles with the right company. Feel free to reach out to discuss how I might fit with your team.
                </p>
                
                <h3 className="text-lg font-bold mb-2">Can you work with an existing team?</h3>
                <p className="text-muted-foreground">
                  Absolutely. I have experience collaborating with design, development, and product teams. I'm comfortable using various project management and communication tools.
                </p>
              </motion.div>
            </div>
          </div>
        </Section>
        
        {/* Map or Location Section */}
        <Section
          title="Where I'm Based"
          subtitle="Though I work remotely with clients worldwide, I'm currently located in:"
        >
          <div className="glass-card p-6 text-center">
            <div className="mb-6">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1643041682001!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '0.5rem' }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            
            <h3 className="text-lg font-bold mb-2">New York, NY</h3>
            <p className="text-muted-foreground">
              Available for in-person meetings in the NYC area and remote collaboration worldwide.
            </p>
          </div>
        </Section>
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;
