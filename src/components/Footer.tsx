
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ue-dark/80 border-t border-ue-blue/20 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 flex flex-col">
            <h3 className="text-white font-montserrat font-bold text-xl mb-4">Sandy Rock</h3>
            <p className="text-ue-gray mb-6">Professional UE5 Game Developer crafting immersive experiences with cutting-edge technology.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-ue-gray hover:text-ue-blue transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-ue-gray hover:text-ue-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-ue-gray hover:text-ue-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:contact@sandyrock.dev" className="text-ue-gray hover:text-ue-blue transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-ue-gray hover:text-ue-blue transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-ue-gray hover:text-ue-blue transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-ue-gray hover:text-ue-blue transition-colors">Projects</Link></li>
              <li><Link to="/skills" className="text-ue-gray hover:text-ue-blue transition-colors">Skills</Link></li>
              <li><Link to="/contact" className="text-ue-gray hover:text-ue-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-ue-gray">contact@sandyrock.dev</li>
              <li className="text-ue-gray">Available for freelance & full-time projects</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-ue-blue/10 mt-8 pt-8 text-center text-ue-gray">
          <p>© {new Date().getFullYear()} Sandy Rock. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
