
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Zap, Gamepad, Code, Monitor, Layers } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', to: '/', icon: <Monitor size={18} /> },
    { label: 'Projects', to: '/projects', icon: <Gamepad size={18} /> },
    { label: 'Skills', to: '/skills', icon: <Code size={18} /> },
    { label: 'Contact', to: '/contact', icon: <Layers size={18} /> }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 flex items-center justify-center bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors duration-300">
            <Zap className="w-6 h-6 text-accent" />
            <div className="absolute inset-0 bg-primary/20 rounded-lg animate-pulse-glow group-hover:animate-none opacity-70"></div>
          </div>
          <span className="text-white font-orbitron font-bold text-xl">Sandy<span className="text-accent">Rock</span></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} className="nav-link flex items-center gap-2">
              {link.icon}
              {link.label}
            </Link>
          ))}
          <a href="#contact" className="btn-primary">
            Let's Connect
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {navLinks.map((link) => (
          <Link 
            key={link.label} 
            to={link.to} 
            className="text-2xl font-orbitron text-white hover:text-accent flex items-center gap-3 transition-colors"
            onClick={toggleMenu}
          >
            {link.icon}
            {link.label}
          </Link>
        ))}
        <a 
          href="#contact" 
          className="btn-primary mt-4"
          onClick={toggleMenu}
        >
          Let's Connect
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
