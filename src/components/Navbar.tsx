
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Menu, X, Github, Moon, Sun, Linkedin, 
  Mail, Home, Layers, Code, User, PhoneCall
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: "/", label: "Home", icon: <Home size={18} /> },
    { path: "/projects", label: "Projects", icon: <Layers size={18} /> },
    { path: "/skills", label: "Skills", icon: <Code size={18} /> },
    { path: "/about", label: "About", icon: <User size={18} /> },
    { path: "/contact", label: "Contact", icon: <PhoneCall size={18} /> },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? 
          "bg-background/80 backdrop-blur-lg border-b border-border/40 py-3" : 
          "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 text-foreground/90 hover:text-foreground transition-colors"
        >
          <motion.div
            className="w-10 h-10 relative flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 rounded-md rotate-45 opacity-80"></div>
            <span className="text-xl font-bold relative z-10 text-white">S</span>
          </motion.div>
          <motion.span 
            className="font-semibold text-xl tracking-tight"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            SANDEEP
          </motion.span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <Link
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-md inline-flex items-center gap-2 transition-colors",
                  location.pathname === item.path
                    ? "text-primary font-medium bg-primary/10"
                    : "text-foreground/70 hover:text-foreground hover:bg-accent/10"
                )}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Social Links & Theme Toggle */}
        <div className="hidden md:flex items-center gap-2">
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-accent/10 text-foreground/70 hover:text-foreground transition-colors"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/sandy-rock-69705a328"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-accent/10 text-foreground/70 hover:text-foreground transition-colors"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            href="mailto:rocksandy9422@gmail.com"
            className="p-2 rounded-full hover:bg-accent/10 text-foreground/70 hover:text-foreground transition-colors"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Mail size={20} />
          </motion.a>
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-accent/10 text-foreground transition-colors hover:bg-accent/20"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-foreground/70"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground/70"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background/90 backdrop-blur-lg border-b border-border px-4 py-4"
        >
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-3 rounded-md flex items-center gap-3 transition-colors",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-accent/10 text-foreground/70 hover:text-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
          
          <div className="flex justify-center gap-4 mt-6 pt-4 border-t border-border/50">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent/10 text-foreground/70 hover:text-foreground transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/sandy-rock-69705a328"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent/10 text-foreground/70 hover:text-foreground transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:rocksandy9422@gmail.com"
              className="p-2 rounded-full hover:bg-accent/10 text-foreground/70 hover:text-foreground transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
