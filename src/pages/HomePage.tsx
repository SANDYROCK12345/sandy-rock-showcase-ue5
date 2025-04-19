
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Cpu, Gamepad, Brush, Zap } from "lucide-react";
import MainLayout from "@/components/MainLayout";
import TypewriterText from "@/components/TypewriterText";
import { Button } from "@/components/ui/button";

const profileImage = "/lovable-uploads/dcc8f93d-d0c6-4c9d-a0a1-df68c363542b.png";

const HomePage = () => {
  return (
    <MainLayout fullHeight>
      {/* Hero Section */}
      <section className="min-h-screen relative flex flex-col justify-center">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute left-20 bottom-40 w-20 h-1 bg-purple-500/30 -rotate-45"></div>
          <div className="absolute right-1/4 bottom-1/3 w-40 h-[1px] bg-primary/20"></div>
          <div className="absolute left-1/3 top-1/4 w-40 h-[1px] bg-primary/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block text-primary font-medium mb-3"
              >
                Hey there! I'm
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 dark:from-white dark:to-white/70"
              >
                SANDEEP
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-xl md:text-2xl font-medium text-foreground/70 mb-6 h-12"
              >
                <TypewriterText
                  texts={[
                    "Game Developer",
                    "UE5 Specialist",
                    "Multimedia Artist",
                    "Storyteller"
                  ]}
                  typingSpeed={80}
                  deletingSpeed={40}
                  delayBetweenTexts={2000}
                />
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="text-lg text-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                Dedicated to crafting engaging digital experiences with code, creativity, and curiosity.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4"
              >
                <Button asChild size="lg" className="gap-2 text-base">
                  <Link to="/projects">
                    Explore My Projects
                    <ArrowRight size={18} />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="gap-2 text-base">
                  <Link to="/contact">
                    Let's Connect
                  </Link>
                </Button>
              </motion.div>
              
              {/* Tech Stack Pills */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.1 }}
                className="mt-10 flex flex-wrap gap-2 justify-center lg:justify-start"
              >
                <div className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full flex items-center gap-1">
                  <Gamepad size={12} />
                  <span>Unreal Engine 5</span>
                </div>
                <div className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full flex items-center gap-1">
                  <Code size={12} />
                  <span>C++</span>
                </div>
                <div className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full flex items-center gap-1">
                  <Brush size={12} />
                  <span>Design</span>
                </div>
                <div className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full flex items-center gap-1">
                  <Cpu size={12} />
                  <span>AI</span>
                </div>
                <div className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full flex items-center gap-1">
                  <Zap size={12} />
                  <span>Animation</span>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Column - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="lg:w-1/2 flex justify-center"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Animated border */}
                <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-8 border border-purple-500/20 rounded-full animate-spin-slow animate-reverse"></div>
                
                {/* Profile Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64 md:w-80 md:h-80">
                    {/* Glowing background */}
                    <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20 animate-pulse-gentle blur-md"></div>
                    
                    {/* Image container */}
                    <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-white/10 animate-float">
                      <img
                        src={profileImage}
                        alt="SANDEEP"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Floating particles */}
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary rounded-full animate-float opacity-70" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute -top-4 left-8 w-4 h-4 bg-purple-500 rounded-full animate-float opacity-70" style={{ animationDelay: '1.2s' }}></div>
                    <div className="absolute top-1/4 -right-6 w-3 h-3 bg-white rounded-full animate-float opacity-50" style={{ animationDelay: '0.7s' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-6"></div>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Check out some of my best work in game development using Unreal Engine 5
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=800&h=500&fit=crop&q=80" 
                alt="JUNGLE GUARD" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <h3 className="text-xl font-bold text-white mb-2">JUNGLE GUARD</h3>
                <p className="text-white/80 mb-4 text-sm line-clamp-2">
                  An Environment Showcase Animation demonstrating advanced environmental rendering and atmospheric effects in UE5.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-black/40 backdrop-blur-sm text-white px-2 py-1 rounded-full">UE5</span>
                  <span className="text-xs bg-black/40 backdrop-blur-sm text-white px-2 py-1 rounded-full">Environment Art</span>
                  <span className="text-xs bg-black/40 backdrop-blur-sm text-white px-2 py-1 rounded-full">Animation</span>
                </div>
                <Link to="/projects" className="text-primary text-sm font-medium hover:text-white transition-colors inline-flex items-center gap-1">
                  View Details
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
            
            {/* Project Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=500&fit=crop&q=80" 
                alt="BLOOD SMELLS" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <h3 className="text-xl font-bold text-white mb-2">BLOOD SMELLS</h3>
                <p className="text-white/80 mb-4 text-sm line-clamp-2">
                  An action RPG featuring hack and slash combat mechanics in a third-person perspective.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-black/40 backdrop-blur-sm text-white px-2 py-1 rounded-full">UE5</span>
                  <span className="text-xs bg-black/40 backdrop-blur-sm text-white px-2 py-1 rounded-full">C++</span>
                  <span className="text-xs bg-black/40 backdrop-blur-sm text-white px-2 py-1 rounded-full">Combat Systems</span>
                </div>
                <Link to="/projects" className="text-primary text-sm font-medium hover:text-white transition-colors inline-flex items-center gap-1">
                  View Details
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
            
            {/* Project Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop&q=80" 
                alt="VOID CENTURY" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <h3 className="text-xl font-bold text-white mb-2">VOID CENTURY</h3>
                <p className="text-white/80 mb-4 text-sm line-clamp-2">
                  An action-adventure 2D platformer game with unique art style and engaging storyline.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-black/40 backdrop-blur-sm text-white px-2 py-1 rounded-full">UE5</span>
                  <span className="text-xs bg-black/40 backdrop-blur-sm text-white px-2 py-1 rounded-full">2D</span>
                  <span className="text-xs bg-black/40 backdrop-blur-sm text-white px-2 py-1 rounded-full">Level Design</span>
                </div>
                <Link to="/projects" className="text-primary text-sm font-medium hover:text-white transition-colors inline-flex items-center gap-1">
                  View Details
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/projects" className="gap-2">
                View All Projects
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to bring your game ideas to life?</h2>
            <p className="text-foreground/70 mb-8 text-lg">
              Let's collaborate on your next project and create something extraordinary together.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
