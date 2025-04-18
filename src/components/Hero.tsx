
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 md:pt-0 flex items-center relative">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-primary font-medium mb-4">Hi there, I'm</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight gradient-heading">
              Alex Chen
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Frontend Developer & UI/UX Designer
            </h2>
            
            <p className="text-lg text-balance mb-8 text-foreground/80">
              I create beautiful, performant websites and applications with delightful user experiences. Passionate about clean code, accessibility, and creative problem-solving.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Link to="/projects" className="button-primary">
                View My Work
                <ArrowRight size={16} className="ml-2" />
              </Link>
              
              <Link to="/contact" className="button-outline">
                Get In Touch
              </Link>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={22} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Background elements */}
              <div className="absolute -top-5 -left-5 w-24 h-24 rounded-full bg-primary/5 animate-pulse-gentle"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-primary/5 animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/3 -right-12 w-16 h-16 rounded-full bg-primary/5 animate-pulse-gentle" style={{ animationDelay: '0.5s' }}></div>
              
              {/* Profile image */}
              <div className="glass-card p-3 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&q=90" 
                  alt="Alex Chen" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-32 h-10 glass-card flex items-center justify-center">
                <span className="text-xs font-mono">const developer = true;</span>
              </div>
              
              <div className="absolute -top-4 -right-4 w-28 h-10 glass-card flex items-center justify-center">
                <span className="text-xs font-mono">let's create!</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.a
          href="#about"
          aria-label="Scroll to About section"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-0.5 h-12 bg-muted-foreground/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full bg-primary animate-[slideDown_2s_ease-in-out_infinite]" style={{ height: '30%' }}></div>
          </div>
        </motion.a>
      </div>
      
      <style jsx>{`
        @keyframes slideDown {
          0%, 100% { transform: translateY(-100%); }
          50% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
