
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 pt-16 pb-8">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-background -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 flex items-center justify-center bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors duration-300">
                <Zap className="w-6 h-6 text-accent" />
                <div className="absolute inset-0 bg-primary/20 rounded-lg animate-pulse-glow group-hover:animate-none opacity-70"></div>
              </div>
              <span className="text-white font-orbitron font-bold text-xl">Sandy<span className="text-accent">Rock</span></span>
            </Link>
            
            <p className="text-white/60 mt-4 max-w-sm">
              Unreal Engine 5 game developer specializing in interactive experiences and immersive worlds.
            </p>
            
            <div className="flex gap-4 mt-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/20 text-white hover:text-accent transition-colors">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/sandy-rock-69705a328/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/20 text-white hover:text-accent transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="mailto:rocksandy9422@gmail.com" className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/20 text-white hover:text-accent transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-orbitron text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/60 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/projects" className="text-white/60 hover:text-accent transition-colors">Projects</Link></li>
              <li><Link to="/skills" className="text-white/60 hover:text-accent transition-colors">Skills</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-orbitron text-xl mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-white/60">Sikar, Rajasthan, India</li>
              <li><a href="mailto:rocksandy9422@gmail.com" className="text-white/60 hover:text-accent transition-colors">rocksandy9422@gmail.com</a></li>
              <li><a href="tel:8058994052" className="text-white/60 hover:text-accent transition-colors">+91 8058994052</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40">
            © {currentYear} Sandy Rock. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
