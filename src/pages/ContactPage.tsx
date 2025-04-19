
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import MainLayout from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            Contact Me
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-foreground/70"
          >
            Have a project in mind or want to chat? Feel free to reach out through any of the channels below.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
            <p className="text-foreground/70 mb-8">
              I'm currently available for freelance work and open to discussing full-time opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a 
                    href="mailto:rocksandy9422@gmail.com" 
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    rocksandy9422@gmail.com
                  </a>
                  <p className="text-sm text-foreground/60 mt-1">
                    Feel free to email me anytime.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <a 
                    href="tel:+918058994052" 
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    +91 8058994052
                  </a>
                  <p className="text-sm text-foreground/60 mt-1">
                    Available Monday to Saturday, 9am to 7pm.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-foreground/70">Sikar, Rajasthan</p>
                  <p className="text-sm text-foreground/60 mt-1">
                    Open to remote work and freelance opportunities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">Connect on Social Media</h3>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border/50 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/in/sandy-rock-69705a328" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border/50 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="I'd like to discuss a project..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending Message...</>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
        
        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6 overflow-hidden">
            <h2 className="text-2xl font-bold mb-6">Location</h2>
            <div className="h-80 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56877.58596559922!2d75.11417537499998!3d27.61458455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca5b538602e2b%3A0xf336d078f8149b8a!2sSikar%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1682356498749!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </motion.div>
        
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">What services do you offer?</h3>
              <p className="text-foreground/70">
                I specialize in game development using Unreal Engine 5, particularly focusing on environment design, gameplay mechanics, and interactive experiences. I also offer multimedia services including video editing, photo manipulation, and AI-assisted content creation.
              </p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">Do you work on freelance projects?</h3>
              <p className="text-foreground/70">
                Yes, I'm available for freelance projects and collaborations. Whether you need a complete game developed or assistance with specific aspects like environment design or gameplay programming, I can help bring your vision to life.
              </p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">What is your typical project workflow?</h3>
              <p className="text-foreground/70">
                My workflow typically begins with a detailed consultation to understand your requirements and vision. I then create a project plan with milestones, develop prototypes for feedback, and iterate based on your input until the final deliverable is completed to your satisfaction.
              </p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">How long does a typical project take?</h3>
              <p className="text-foreground/70">
                Project timelines vary depending on scope and complexity. Small projects might take a few weeks, while larger games could require several months. I'll provide a detailed timeline estimate during our initial consultation based on your specific requirements.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
