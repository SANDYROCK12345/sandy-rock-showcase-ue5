
import { Link } from "react-router-dom";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import AnimatedSection from '@/components/AnimatedSection';
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-ue-dark min-h-screen">
      <Navbar />
      <ParticleBackground />

      <section className="pt-32 pb-24 min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection animation="fade-in-up" className="max-w-2xl mx-auto">
            <h1 className="text-8xl font-bold text-ue-blue mb-6">404</h1>
            <h2 className="text-3xl font-bold text-white mb-6">Page Not Found</h2>
            <p className="text-ue-gray mb-8">
              The page you are looking for might have been removed, had its name changed, 
              or is temporarily unavailable.
            </p>
            <Link to="/" className="btn-primary inline-flex">
              Return to Home
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
