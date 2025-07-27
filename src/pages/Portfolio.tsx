import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import ProjectCard3D from '@/components/ProjectCard3D';
import CinematicBackground from '@/components/CinematicBackground';
import ScrollAnimation from '@/components/ScrollAnimation';

const portfolioData = [
  {
    title: "MYSTICAL FOREST SANCTUARY",
    description: "A breathtaking environment piece showcasing advanced Nanite virtualized geometry and Lumen global illumination in UE5. Features dynamic weather systems and atmospheric lighting.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&q=80",
    tags: ["UE5", "Nanite", "Lumen", "Environment"],
    category: "environment" as const,
    featured: true,
    duration: "3 min",
    views: "12.5K",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "CYBERPUNK ALLEY",
    description: "Neon-lit urban environment with real-time ray tracing reflections and volumetric lighting. Created using AI-assisted texturing pipeline.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&q=80",
    tags: ["UE5", "RTX", "AI Textures"],
    category: "environment" as const,
    duration: "2 min",
    views: "8.3K"
  },
  {
    title: "ANCIENT RUINS",
    description: "Archaeological site recreation with photogrammetry assets and procedural vegetation systems.",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73aeb?w=800&h=600&fit=crop&q=80",
    tags: ["Photogrammetry", "UE5", "Procedural"],
    category: "environment" as const,
    duration: "4 min",
    views: "15.2K"
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen relative">
      <CinematicBackground />
      
      {/* Hero Section */}
      <section className="section-hero">
        <div className="section-container">
          <ScrollAnimation variant="fadeIn" className="text-center">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient-ambient font-space-grotesk">
                PORTFOLIO
              </h1>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Immersive 3D environments crafted with cutting-edge technology and artistic vision
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                {['All', 'Environments', 'Animations', 'Experiments'].map((filter, index) => (
                  <motion.button
                    key={filter}
                    className="btn-glass px-6 py-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {filter}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((project, index) => (
            <ScrollAnimation
              key={index}
              variant="scale"
              delay={index * 0.1}
            >
              <ProjectCard3D {...project} />
            </ScrollAnimation>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;