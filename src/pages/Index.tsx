
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Monitor, Bookmark, User, Mail, ArrowRight, Linkedin, Phone, MapPin, Cpu, Gamepad, Code } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from '@/components/ProjectCard';
import SkillBar from '@/components/SkillBar';
import ContactForm from '@/components/ContactForm';
import TypewriterText from '@/components/TypewriterText';

// Profile image
const profileImage = "/lovable-uploads/dcc8f93d-d0c6-4c9d-a0a1-df68c363542b.png";

// Projects data
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

// Skills data
const skills = [
  { name: "Unreal Engine 5", percentage: 95 },
  { name: "C++", percentage: 90 },
  { name: "Python", percentage: 85 },
  { name: "English Communication", percentage: 95 },
  { name: "AI Prompting", percentage: 88 },
  { name: "Photo Editing", percentage: 80 },
  { name: "Video Editing", percentage: 78 },
  { name: "Problem Solving", percentage: 92 },
  { name: "Critical Thinking", percentage: 90 },
  { name: "Game Design", percentage: 85 }
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
    <div className="bg-rog-darker min-h-screen">
      <Navbar />
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 -z-10">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover opacity-30"
          >
            <source src="https://youtu.be/NmPNsK30IXA?t=37" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rog-darker/70 to-rog-darker"></div>
        </div>

        {/* Tech decoration elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-24 w-80 h-80 bg-rog-red/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-rog-cyan/10 rounded-full blur-3xl"></div>
          <div className="absolute right-10 top-32 w-32 h-1 bg-rog-red/30 rotate-45"></div>
          <div className="absolute left-20 bottom-40 w-20 h-1 bg-rog-cyan/30 -rotate-45"></div>
          <div className="absolute right-1/4 bottom-1/3 w-40 h-[1px] bg-rog-red/20"></div>
          <div className="absolute left-1/3 top-1/4 w-40 h-[1px] bg-rog-red/20"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 z-10">
          <AnimatedSection animation="fade-in-up" className="max-w-4xl mx-auto text-center" duration={800}>
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-rog-red/20 via-transparent to-rog-cyan/20 animate-spin-slow blur-sm"></div>
              <img
                src={profileImage}
                alt="Sandy Rock"
                className="rounded-full w-full h-full object-cover animate-float shadow-xl relative z-10"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-rog-red/20 to-transparent opacity-50 animate-pulse-glow" style={{'--shadow-color': 'rgba(255, 0, 41, 0.4)'} as React.CSSProperties}></div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-rog font-bold text-white mb-6 uppercase tracking-wider">
              <TypewriterText 
                text="Sandy" 
                className="inline-block" 
                speed={80} 
              />
              <span className="text-rog-red animate-text-glow"> 
                <TypewriterText 
                  text="Rock" 
                  className="inline-block" 
                  speed={80} 
                  delay={500} 
                />
              </span>
            </h1>
            <TypewriterText
              text="UE5 Game Developer | B.Tech CSE Student"
              className="text-xl md:text-2xl text-rog-gray mb-8 uppercase tracking-wider"
              speed={30}
              delay={1200}
            />

            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <a href="mailto:rocksandy9422@gmail.com" className="flex items-center gap-2 text-rog-gray hover:text-rog-red transition-colors group">
                <Mail size={20} className="group-hover:animate-pulse" />
                <span>rocksandy9422@gmail.com</span>
              </a>
              <a href="tel:8058994052" className="flex items-center gap-2 text-rog-gray hover:text-rog-red transition-colors group">
                <Phone size={20} className="group-hover:animate-pulse" />
                <span>+91 8058994052</span>
              </a>
              <a href="https://www.linkedin.com/in/sandy-rock-69705a328/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-rog-gray hover:text-rog-red transition-colors group">
                <Linkedin size={20} className="group-hover:animate-pulse" />
                <span>LinkedIn</span>
              </a>
              <div className="flex items-center gap-2 text-rog-gray group">
                <MapPin size={20} className="text-rog-red animate-pulse" />
                <span>Sikar, Rajasthan</span>
              </div>
            </div>
          </AnimatedSection>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <button 
              onClick={() => scrollToSection(aboutRef)} 
              className="text-rog-gray hover:text-rog-red transition-colors animate-bounce"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-rog-red/5 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 bottom-0 w-72 h-72 bg-rog-cyan/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fade-in-up" className="text-center mb-16">
            <h2 className="section-title after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:w-20 after:h-1 after:bg-rog-red after:-translate-x-1/2">About <span className="text-rog-red">Me</span></h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <AnimatedSection animation="fade-in-left">
              <div className="rog-card p-8 h-full animate-glow-pulse">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-rog-red/10 text-rog-red mr-3">
                    <Bookmark size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Education</h3>
                </div>
                <div className="space-y-6">
                  <div className="rog-line-decor">
                    <h4 className="text-lg font-semibold text-rog-red">B.Tech in Computer Science and Engineering</h4>
                    <p className="text-white">Bhartiya Institute of Engineering and Technology - Sikar</p>
                    <p className="text-rog-gray">Sept 2022 – June 2026</p>
                  </div>
                  <div className="rog-line-decor">
                    <h4 className="text-lg font-semibold text-rog-red">Higher Secondary Education</h4>
                    <p className="text-white">Lord's International School - Sadulpur</p>
                    <p className="text-rog-gray">10th (2020) and 12th (2022)</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right">
              <div className="rog-card p-8 h-full animate-glow-pulse">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-rog-red/10 text-rog-red mr-3">
                    <User size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Introduction</h3>
                </div>
                <p className="text-rog-gray mb-6">
                  Dedicated game development student with a strong foundation in Unreal Engine 5 (UE5), seeking opportunities to
                  enhance skills and gain practical experience. Demonstrated passion for learning and creativity, aiming to
                  contribute effectively to innovative projects. Aspires to create original games that engage and inspire players.
                </p>
                <p className="text-rog-gray">
                  Dynamic multimedia specialist proficient in video and photo editing, equipped with AI-driven image creation and
                  audio production skills. Demonstrated ability to craft compelling scripts and develop innovative coding solutions,
                  enhancing project deliverables. Committed to leveraging diverse competencies to contribute effectively within a
                  creative team.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-rog-darker to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-rog-darker to-transparent"></div>
          <div className="absolute top-1/3 -right-40 w-80 h-80 bg-rog-red/5 rotate-45 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fade-in-up" className="text-center mb-16">
            <h2 className="section-title after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:w-20 after:h-1 after:bg-rog-red after:-translate-x-1/2">My <span className="text-rog-red">Projects</span></h2>
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
                <ProjectCard {...project} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-in-up" delay={300} className="text-center mt-12">
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-rog-red hover:text-rog-cyan transition-colors group"
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
          <div className="absolute -top-60 -left-60 w-96 h-96 bg-rog-red/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-40 h-[1px] bg-rog-red/20"></div>
          <div className="absolute bottom-20 left-20 w-32 h-[1px] bg-rog-red/20 rotate-45"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fade-in-up" className="text-center mb-16">
            <h2 className="section-title after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:w-20 after:h-1 after:bg-rog-red after:-translate-x-1/2">My <span className="text-rog-red">Skills</span></h2>
            <p className="section-subtitle">
              Specialized expertise in game development and related technologies
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <AnimatedSection 
                key={index} 
                animation="fade-in-left" 
                delay={index * 100}
              >
                <SkillBar name={skill.name} percentage={skill.percentage} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-rog-darker to-transparent"></div>
          <div className="absolute bottom-1/3 -left-40 w-80 h-80 bg-rog-cyan/5 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-20 h-1 bg-rog-red/30 rotate-45"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fade-in-up" className="text-center mb-16">
            <h2 className="section-title after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:w-20 after:h-1 after:bg-rog-red after:-translate-x-1/2">Contact <span className="text-rog-red">Me</span></h2>
            <p className="section-subtitle">
              Let's discuss your project and bring your ideas to life
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in-left">
              <div className="rog-card p-6 md:p-8 h-full animate-glow-pulse">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-rog-red/10 text-rog-red mr-3">
                    <Mail size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Get in Touch</h3>
                </div>
                <p className="text-rog-gray mb-8">
                  I'm always open to new opportunities and interesting projects. 
                  Whether you need a complete game built or consultation on your existing project, 
                  I'm here to help turn your vision into reality.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-rog-red/10 text-rog-red">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Email</h4>
                      <p className="text-rog-gray">rocksandy9422@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-rog-red/10 text-rog-red">
                      <Monitor size={18} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Work Availability</h4>
                      <p className="text-rog-gray">Freelance & Full-time Projects</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-rog-red/10 text-rog-red">
                      <Gamepad size={18} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Specialization</h4>
                      <p className="text-rog-gray">Unreal Engine 5 Development</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right" delay={200}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
