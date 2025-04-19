
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code, Cpu, Gamepad, Brush, Zap, ChevronRight, ArrowDown } from "lucide-react";
import MainLayout from "@/components/MainLayout";
import TypewriterText from "@/components/TypewriterText";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AcrylicCard } from "@/components/ui/acrylic-card";
import ScrollAnimation from "@/components/ScrollAnimation";
import BackgroundVideo from "@/components/BackgroundVideo";

const profileImage = "/lovable-uploads/dcc8f93d-d0c6-4c9d-a0a1-df68c363542b.png";

const featuredProjects = [
  {
    title: "JUNGLE GUARD",
    description: "Environment Showcase Animation with advanced rendering and atmospheric effects in UE5.",
    image: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=800&h=500&fit=crop&q=80",
    tags: ["UE5", "Environment", "Animation"],
  },
  {
    title: "BLOOD SMELLS",
    description: "Action RPG featuring hack and slash combat mechanics in a third-person perspective.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=500&fit=crop&q=80",
    tags: ["UE5", "C++", "Combat"],
  },
  {
    title: "VOID CENTURY",
    description: "Action-adventure 2D platformer with unique art style and engaging storyline.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop&q=80",
    tags: ["UE5", "2D", "Level Design"],
  },
];

// Video background URL - replace with actual URL
const backgroundVideoUrl = "https://player.vimeo.com/external/525504208.hd.mp4?s=6b251599d18b20cf8c098757abbac29fded0ac7c&profile_id=175&oauth2_token_id=57447761";

const HomePage = () => {
  const [activeSection, setActiveSection] = useState<number>(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Handle horizontal scrolling snap between sections
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const handleScroll = () => {
      const scrollPosition = window.scrollX;
      const viewportWidth = window.innerWidth;
      
      sections.forEach((section, index) => {
        const sectionOffsetLeft = section.getBoundingClientRect().left;
        if (Math.abs(sectionOffsetLeft) < viewportWidth / 2) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MainLayout horizontalScroll className="bg-transparent">
      <BackgroundVideo 
        src={backgroundVideoUrl}
        opacity={0.15}
        blur={2}
      />
      
      {/* Section 1: Hero */}
      <section className="section h-screen w-screen flex items-center snap-start px-6 sm:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <motion.div 
              className="lg:col-span-3 z-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                className="inline-block text-primary text-lg font-semibold mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Hey there! I'm
              </motion.span>
              
              <motion.h1
                className="text-6xl md:text-7xl xl:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-foreground to-white/80 font-orbitron"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                SANDEEP
              </motion.h1>
              
              <motion.div
                className="text-xl md:text-2xl xl:text-3xl font-medium text-foreground/80 mb-8 h-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
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
                  className="font-orbitron"
                />
              </motion.div>
              
              <motion.p
                className="text-lg xl:text-xl text-foreground/70 mb-10 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1 }}
              >
                Dedicated to crafting engaging digital experiences with code, creativity, and curiosity.
              </motion.p>
              
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.2 }}
              >
                <Button 
                  size="lg" 
                  className="gap-2 text-base group bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                >
                  <Link to="/projects" className="flex items-center gap-2">
                    Explore My Projects
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gap-2 text-base border-primary/50 text-primary hover:bg-primary/10 backdrop-blur-md"
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    Let's Connect
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                className="mt-12 flex flex-wrap gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.4 }}
              >
                <Badge variant="outline" className="px-3 py-1.5 text-xs border-primary/20 text-primary bg-primary/5 backdrop-blur-sm flex items-center gap-1.5">
                  <Gamepad size={12} />
                  <span>Unreal Engine 5</span>
                </Badge>
                <Badge variant="outline" className="px-3 py-1.5 text-xs border-primary/20 text-primary bg-primary/5 backdrop-blur-sm flex items-center gap-1.5">
                  <Code size={12} />
                  <span>C++</span>
                </Badge>
                <Badge variant="outline" className="px-3 py-1.5 text-xs border-primary/20 text-primary bg-primary/5 backdrop-blur-sm flex items-center gap-1.5">
                  <Brush size={12} />
                  <span>Design</span>
                </Badge>
                <Badge variant="outline" className="px-3 py-1.5 text-xs border-primary/20 text-primary bg-primary/5 backdrop-blur-sm flex items-center gap-1.5">
                  <Cpu size={12} />
                  <span>AI</span>
                </Badge>
                <Badge variant="outline" className="px-3 py-1.5 text-xs border-primary/20 text-primary bg-primary/5 backdrop-blur-sm flex items-center gap-1.5">
                  <Zap size={12} />
                  <span>Animation</span>
                </Badge>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50 hidden lg:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 2 }}
              >
                <div className="text-foreground/50 flex flex-col items-center">
                  <span className="text-xs mb-2">Scroll Right</span>
                  <ArrowRight size={20} />
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-2 h-full flex items-center justify-center relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative h-[450px] w-[300px] mx-auto">
                {/* Animated border */}
                <motion.div 
                  className="absolute inset-0 border border-primary/30 rounded-2xl"
                  animate={{ 
                    boxShadow: ['0 0 20px rgba(138, 75, 255, 0)', '0 0 20px rgba(138, 75, 255, 0.3)', '0 0 20px rgba(138, 75, 255, 0)'] 
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <motion.div 
                  className="absolute -top-6 -left-6 w-16 h-16 border border-primary/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                <motion.div 
                  className="absolute -bottom-10 -right-10 w-20 h-20 border border-purple-500/20 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Profile Image Container */}
                <div className="absolute inset-3 rounded-xl overflow-hidden backdrop-blur-sm bg-black/20 border border-white/10">
                  <img
                    src={profileImage}
                    alt="SANDEEP"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Animated glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20"
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ mixBlendMode: 'overlay' }}
                  />
                </div>
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-12 h-12 rounded-lg bg-primary/10 backdrop-blur-xl border border-primary/20 flex items-center justify-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Gamepad className="text-primary" size={24} />
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-8 -left-6 w-14 h-14 rounded-lg bg-purple-500/10 backdrop-blur-xl border border-purple-500/20 flex items-center justify-center"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  <Code className="text-purple-500" size={28} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Section 2: Featured Projects */}
      <section className="section h-screen w-screen flex items-center justify-center snap-start px-6 sm:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto w-full">
          <ScrollAnimation variant="fadeIn">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center font-orbitron">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-primary">Featured Projects</span>
            </h2>
            
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-16 rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {featuredProjects.map((project, index) => (
                <ScrollAnimation 
                  key={index} 
                  variant={index % 2 === 0 ? "slideUp" : "slideLeft"} 
                  delay={index * 0.15}
                >
                  <AcrylicCard 
                    className="h-full overflow-hidden group"
                    intensity="medium"
                    whileHover={{ 
                      y: -10, 
                      boxShadow: "0 20px 25px -5px rgba(138, 75, 255, 0.1), 0 10px 10px -5px rgba(138, 75, 255, 0.04)"
                    }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
                      <motion.img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <h3 className="text-xl font-bold font-orbitron text-white">{project.title}</h3>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex}
                            variant="outline" 
                            className="bg-black/30 backdrop-blur-sm border-white/10 text-white text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-foreground/70 mb-4 text-sm line-clamp-3">
                        {project.description}
                      </p>
                      <Link 
                        to="/projects" 
                        className="text-primary text-sm font-medium hover:text-primary/80 transition-colors inline-flex items-center gap-1 group"
                      >
                        Explore Details
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </AcrylicCard>
                </ScrollAnimation>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/30 hover:bg-primary/10 text-primary backdrop-blur-sm group"
              >
                <Link to="/projects" className="flex items-center gap-2">
                  View All Projects
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      
      {/* Section 3: Call to Action */}
      <section className="section h-screen w-screen flex items-center justify-center snap-start px-6 sm:px-16 lg:px-24">
        <div className="relative max-w-3xl mx-auto w-full">
          {/* Decorative elements */}
          <motion.div 
            className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <motion.div 
            className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          />
          
          <ScrollAnimation variant="scale">
            <AcrylicCard 
              className="px-8 py-12 text-center overflow-visible"
              intensity="heavy"
            >
              <motion.div
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/20"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Gamepad size={28} className="text-white" />
              </motion.div>
              
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 mt-4 font-orbitron">
                Ready to bring your game ideas to life?
              </h2>
              
              <p className="text-foreground/70 mb-10 text-lg">
                Let's collaborate on your next project and create something extraordinary together.
              </p>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 px-10 py-6 text-lg"
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </AcrylicCard>
          </ScrollAnimation>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
