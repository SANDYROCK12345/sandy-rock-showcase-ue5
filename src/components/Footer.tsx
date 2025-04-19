
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border/30 pt-10 pb-6 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1"
          >
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 rounded-md rotate-45 opacity-80"></div>
                <span className="text-xl font-bold relative z-10 text-white">S</span>
              </div>
              <span className="font-semibold text-xl tracking-tight">SANDEEP</span>
            </Link>
            <p className="text-foreground/70 max-w-xs">
              Crafting immersive digital experiences with code, creativity, and curiosity.
            </p>
            
            <div className="flex mt-4 space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/sandy-rock-69705a328"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:rocksandy9422@gmail.com"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+918058994052"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-foreground/70 hover:text-primary transition-colors">Home</Link>
              <Link to="/projects" className="text-foreground/70 hover:text-primary transition-colors">Projects</Link>
              <Link to="/skills" className="text-foreground/70 hover:text-primary transition-colors">Skills</Link>
              <Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">About</Link>
              <Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</Link>
            </nav>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <p className="flex items-start gap-3 text-foreground/70">
                <Mail size={18} className="mt-1 flex-shrink-0 text-primary/70" />
                <a href="mailto:rocksandy9422@gmail.com" className="hover:text-primary transition-colors">
                  rocksandy9422@gmail.com
                </a>
              </p>
              <p className="flex items-start gap-3 text-foreground/70">
                <Phone size={18} className="mt-1 flex-shrink-0 text-primary/70" />
                <a href="tel:+918058994052" className="hover:text-primary transition-colors">
                  +91 8058994052
                </a>
              </p>
              <p className="flex items-start gap-3 text-foreground/70">
                <Linkedin size={18} className="mt-1 flex-shrink-0 text-primary/70" />
                <a 
                  href="https://linkedin.com/in/sandy-rock-69705a328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  /sandy-rock-69705a328
                </a>
              </p>
            </div>
          </motion.div>
          
          {/* Newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
            <div className="space-y-3 text-foreground/70">
              <p>Monday - Friday: 9AM - 7PM</p>
              <p>Saturday: 10AM - 5PM</p>
              <p>Sunday: Available for urgent matters</p>
              <p className="text-primary font-medium mt-2">
                Currently available for freelance projects!
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border/30 text-center text-foreground/60 text-sm">
          <p>© {currentYear} SANDEEP. All rights reserved.</p>
          <p className="mt-1">
            Created with passion, code, and a gamer's imagination.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
