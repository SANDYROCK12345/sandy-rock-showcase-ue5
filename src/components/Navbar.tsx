
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
    { label: 'About', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'Skills', to: '/skills' },
    { label: 'Contact', to: '/contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-ue-dark/80 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-white font-montserrat font-bold text-xl">Sandy Rock</span>
          <span className="text-ue-blue text-sm font-medium">UE5 Developer</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} className="nav-link">
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
        className={`md:hidden fixed inset-0 bg-ue-dark/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {navLinks.map((link) => (
          <Link 
            key={link.label} 
            to={link.to} 
            className="text-2xl font-montserrat text-white hover:text-ue-blue transition-colors"
            onClick={toggleMenu}
          >
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
