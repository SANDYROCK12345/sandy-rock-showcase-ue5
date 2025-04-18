
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <ParticleBackground />
      
      <div className="min-h-screen flex items-center justify-center">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-9xl font-bold gradient-heading mb-4">404</h1>
            <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/" className="button-primary">
                <Home size={16} className="mr-2" />
                Back to Home
              </Link>
              
              <button 
                onClick={() => window.history.back()} 
                className="button-outline"
              >
                <ArrowLeft size={16} className="mr-2" />
                Go Back
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default NotFound;
