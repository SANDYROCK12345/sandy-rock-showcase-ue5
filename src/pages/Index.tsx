import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowDown, ArrowRight, Cpu, Gamepad, Mail, MapPin, 
  Phone, Linkedin, Code, Brush, Brain, Monitor, Zap,
  SlidersHorizontal, BookOpen, Rocket
} from 'lucide-react';
import { User } from '@/components/icons/User';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroParticles from '@/components/HeroParticles';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedProjectCard from '@/components/AnimatedProjectCard'; 
import SkillItem from '@/components/SkillItem';
import ContactForm from '@/components/ContactForm';
import Card3D from '@/components/Card3D';
import ParticleBackground from '@/components/ParticleBackground';

const profileImage = "/lovable-uploads/dcc8f93d-d0c6-4c9d-a0a1-df68c363542b.png";

const projects = [
  {
    id: 1,
    title: "JUNGLE GUARD",
    description: "An Environment Showcase Animation demonstrating advanced environmental rendering and atmospheric effects in UE5.",
    image: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=800&h=500&fit=crop&q=80",
    technologies: ["UE5", "Environment Art", "Animation"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    title: "BLOOD SMELLS",
    description: "An action RPG featuring hack and slash combat mechanics in a third-person perspective.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=500&fit=crop&q=80",
    technologies: ["UE5", "C++", "Combat Systems"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "VOID CENTURY",
    description: "An action-adventure 2D platformer game with unique art style and engaging storyline.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop&q=80",
    technologies: ["UE5", "2D", "Level Design"],
    liveLink: "#",
    githubLink: "#"
  },
];

const skills = [
  { name: "Unreal Engine 5", level: 95, icon: <Gamepad size={20} /> },
  { name: "C++", level: 90, icon: <Code size={20} /> },
  { name: "Python", level: 85, icon: <Cpu size={20} /> },
  { name: "Game Design", level: 85, icon: <SlidersHorizontal size={20} /> },
  { name: "English Communication", level: 95, icon: <BookOpen size={20} /> },
  { name: "AI Prompting", level: 88, icon: <Brain size={20} /> },
  { name: "Problem Solving", level: 92, icon: <Rocket size={20} /> },
  { name: "Photo Editing", level: 80, icon: <Brush size={20} /> },
  { name: "Video Editing", level: 78, icon: <Monitor size={20} /> },
  { name: "Critical Thinking", level: 90, icon: <Zap size={20} /> }
];

const Index = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroParticles />
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover opacity-20"
          >
            <source src="https://youtu.be/NmPNsK30IXA?t=37" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute left-20 bottom-40 w-20 h-1 bg-accent/30 -rotate-45"></div>
          <div className="absolute right-1/4 bottom-1/3 w-40 h-[1px] bg-primary/20"></div>
          <div className="absolute left-1/3 top-1/4 w-40 h-[1px] bg-primary/20"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <AnimatedSection animation="fade-in-right" className="lg:w-1/2 text-center lg:text-left" duration={800}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-orbitron font-bold text-white mb-6">
                <span className="inline-block">Sandy</span>
                <span className="text-accent inline-block ml-4 animate-pulse-glow"> 
                  Rock
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-white/70 mb-8 uppercase tracking-wider">
                UE5 Game Developer | B.Tech CSE Student
              </h2>

              <p className="text-lg text-white/60 mb-10 max-w-xl">
                Passionate game developer specializing in Unreal Engine 5, building immersive gaming experiences with cutting-edge technology and creative vision.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
                <button 
                  onClick={() => scrollToSection(aboutRef)}
                  className="btn-primary"
                >
                  Explore My Work
                </button>
                
                <button 
                  onClick={() => scrollToSection(contactRef)}
                  className="px-6 py-3 border border-white/10 hover:border-accent/50 text-white font-medium uppercase tracking-wider rounded-md transition-all duration-300 hover:-translate-y-1"
                >
                  Get In Touch
                </button>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
                <a href="mailto:rocksandy9422@gmail.com" className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors group">
                  <Mail size={18} className="group-hover:animate-pulse" />
                  <span>rocksandy9422@gmail.com</span>
                </a>
                <a href="tel:8058994052" className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors group">
                  <Phone size={18} className="group-hover:animate-pulse" />
                  <span>+91 8058994052</span>
                </a>
                <a href="https://www.linkedin.com/in/sandy-rock-69705a328/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors group">
                  <Linkedin size={18} className="group-hover:animate-pulse" />
                  <span>LinkedIn</span>
                </a>
                <div className="flex items-center gap-2 text-white/70 group">
                  <MapPin size={18} className="text-accent animate-pulse" />
                  <span>Sikar, Rajasthan</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-left" className="lg:w-1/2" duration={800} delay={300}>
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full animate-slow-spin"></div>
                <div className="absolute inset-8 border border-accent/20 rounded-full animate-slow-spin" style={{ animationDirection: 'reverse' }}></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48 md:w-64 md:h-64">
                    <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-pulse-glow blur-md"></div>
                    
                    <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-white/10 animate-float">
                      <img
                        src={profileImage}
                        alt="Sandy Rock"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary rounded-full animate-float opacity-70" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute -top-4 left-8 w-4 h-4 bg-accent rounded-full animate-float opacity-70" style={{ animationDelay: '1.2s' }}></div>
                    <div className="absolute top-1/4 -right-6 w-3 h-3 bg-white rounded-full animate-float opacity-50" style={{ animationDelay: '0.7s' }}></div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <button 
              onClick={() => scrollToSection(aboutRef)} 
              className="text-white/70 hover:text-accent transition-colors animate-bounce"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 bottom-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fade-in-up" className="text-center mb-16">
            <h2 className="section-title">About <span className="text-accent">Me</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection animation="fade-in-right">
              <Card3D className="h-full acrylic-panel p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/20 text-accent mr-3">
                    <BookOpen size={20} />
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold text-white uppercase tracking-wider">Education</h3>
                </div>
                <div className="space-y-6">
                  <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-accent">
                    <h4 className="text-lg font-semibold text-accent">B.Tech in Computer Science and Engineering</h4>
                    <p className="text-white">Bhartiya Institute of Engineering and Technology - Sikar</p>
                    <p className="text-white/60">Sept 2022 – June 2026</p>
                  </div>
                  <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-accent">
                    <h4 className="text-lg font-semibold text-accent">Higher Secondary Education</h4>
                    <p className="text-white">Lord's International School - Sadulpur</p>
                    <p className="text-white/60">10th (2020) and 12th (2022)</p>
                  </div>
                </div>
              </Card3D>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-left" delay={200}>
              <Card3D className="h-full acrylic-panel p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/20 text-accent mr-3">
                    <User size={20} />
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold text-white uppercase tracking-wider">Introduction</h3>
                </div>
                <p className="text-white/70 mb-6">
                  Dedicated game development student with a strong foundation in Unreal Engine 5 (UE5), seeking opportunities to
                  enhance skills and gain practical experience. Demonstrated passion for learning and creativity, aiming to
                  contribute effectively to innovative projects. Aspires to create original games that engage and inspire players.
                </p>
                <p className="text-white/70">
                  Dynamic multimedia specialist proficient in video and photo editing, equipped with AI-driven image creation and
                  audio production skills. Demonstrated ability to craft compelling scripts and develop innovative coding solutions,
                  enhancing project deliverables. Committed to leveraging diverse competencies to contribute effectively within a
                  creative team.
                </p>
              </Card3D>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
          <div className="absolute top-1/3 -right-40 w-80 h-80 bg-primary/5 rotate-45 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fade-in-up" className="text-center mb-16">
            <h2 className="section-title">My <span className="text-accent">Projects</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="section-subtitle">
              Showcase of my work in game development using Unreal Engine 5
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection 
                key={project.id} 
                animation="fade-in-up" 
                delay={index * 100}
              >
                <AnimatedProjectCard {...project} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-in-up" delay={300} className="text-center mt-12">
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors group"
            >
              <span className="uppercase tracking-wider font-medium">View All Projects</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-60 -left-60 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-40 h-[1px] bg-accent/20"></div>
          <div className="absolute bottom-20 left-20 w-32 h-[1px] bg-primary/20 rotate-45"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fade-in-up" className="text-center mb-16">
            <h2 className="section-title">My <span className="text-accent">Skills</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="section-subtitle">
              Specialized expertise in game development and related technologies
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <AnimatedSection 
                key={index} 
                animation="fade-in-left" 
                delay={index * 50}
              >
                <SkillItem 
                  name={skill.name} 
                  level={skill.level} 
                  icon={skill.icon}
                  delay={index * 100}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
          <div className="absolute bottom-1/3 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-20 h-1 bg-primary/30 rotate-45"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fade-in-up" className="text-center mb-16">
            <h2 className="section-title">Contact <span className="text-accent">Me</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="section-subtitle">
              Let's discuss your project and bring your ideas to life
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in-right">
              <Card3D className="h-full acrylic-panel p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/20 text-accent mr-3">
                    <Mail size={20} />
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold text-white uppercase tracking-wider">Get in Touch</h3>
                </div>
                <p className="text-white/70 mb-8">
                  I'm always open to new opportunities and interesting projects. 
                  Whether you need a complete game built or consultation on your existing project, 
                  I'm here to help turn your vision into reality.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/20 text-accent">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Email</h4>
                      <p className="text-white/60">rocksandy9422@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/20 text-accent">
                      <Monitor size={18} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Work Availability</h4>
                      <p className="text-white/60">Freelance & Full-time Projects</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/20 text-accent">
                      <Gamepad size={18} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Specialization</h4>
                      <p className="text-white/60">Unreal Engine 5 Development</p>
                    </div>
                  </div>
                </div>
              </Card3D>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-left" delay={200}>
              <div className="acrylic-panel overflow-hidden rounded-xl backdrop-blur-xl">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
