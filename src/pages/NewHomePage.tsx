import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Button } from '@/components/ui/button';
import CinematicBackground from '@/components/CinematicBackground';
import ScrollAnimation from '@/components/ScrollAnimation';

const NewHomePage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <CinematicBackground />
      
      {/* Hero Section */}
      <section className="section-hero">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              className="lg:col-span-7 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-4">
                <motion.span
                  className="text-primary text-lg font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  3D Environment Artist
                </motion.span>
                
                <motion.h1
                  className="text-7xl md:text-8xl font-bold text-gradient-ambient font-space-grotesk leading-none"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  SANDEEP
                </motion.h1>
                
                <motion.p
                  className="text-xl text-muted-foreground max-w-xl leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Crafting immersive digital worlds through cutting-edge real-time rendering, 
                  AI-assisted workflows, and artistic storytelling.
                </motion.p>
              </div>
              
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <Button className="btn-primary-glow gap-2">
                  View Portfolio
                  <ArrowRight size={16} />
                </Button>
                
                <Button variant="outline" className="btn-glass gap-2">
                  <Download size={16} />
                  Resume
                </Button>
                
                <Button variant="ghost" className="btn-glass gap-2">
                  <Mail size={16} />
                  Contact
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Right Content - Profile */}
            <motion.div 
              className="lg:col-span-5 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <GlassPanel 
                variant="elevated" 
                className="p-8 text-center ambient-glow max-w-sm"
              >
                <div className="w-32 h-40 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                  <img
                    src="/lovable-uploads/dcc8f93d-d0c6-4c9d-a0a1-df68c363542b.png"
                    alt="SANDEEP"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gradient-primary">
                  Environment Specialist
                </h3>
                
                <p className="text-sm text-muted-foreground mb-6">
                  Unreal Engine 5 • Real-time Rendering • AI Workflows
                </p>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {['UE5', 'Nanite', 'Lumen', 'AI'].map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs px-3 py-1 glass-panel rounded-full text-primary/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassPanel>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewHomePage;