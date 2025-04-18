import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Monitor, Bookmark, User, Mail, ArrowRight, Linkedin, Phone, MapPin } from 'lucide-react';
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
    <div className="bg-ue-dark min-h-screen">
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
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ue-dark/70 to-ue-dark"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 z-10">
          <AnimatedSection animation="fade-in-up" className="max-w-4xl mx-auto text-center" duration={800}>
            <div className="relative w-48 h-48 mx-auto mb-8">
              <img
                src={profileImage}
                alt="Sandy Rock"
                className="rounded-full w-full h-full object-cover animate-float shadow-xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-ue-blue/20 to-transparent opacity-50 animate-pulse-glow"></div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-6">
              <TypewriterText 
                text="Sandy" 
                className="inline-block" 
                speed={80} 
              />
              <span className="text-ue-blue"> 
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
              className="text-xl md:text-2xl text-ue-gray mb-8"
              speed={30}
              delay={1200}
            />

            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <a href="mailto:rocksandy9422@gmail.com" className="flex items-center gap-2 text-ue-gray hover:text-ue-blue transition-colors">
                <Mail size={20} />
                <span>rocksandy9422@gmail.com</span>
              </a>
              <a href="tel:8058994052" className="flex items-center gap-2 text-ue-gray hover:text-ue-blue transition-colors">
                <Phone size={20} />
                <span>+91 8058994052</span>
              </a>
              <a href="https://www.linkedin.com/in/sandy-rock-69705a328/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ue-gray hover:text-ue-blue transition-colors">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <div className="flex items-center gap-2 text-ue-gray">
                <MapPin size={20} />
                <span>Sikar, Rajasthan</span>
              </div>
            </div>
          </AnimatedSection>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <button 
              onClick={() => scrollToSection(aboutRef)} 
              className="text-ue-gray hover:text-ue-blue transition-colors"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fade-in-up" className="text-center mb-16">
            <h2 className="section-title">About <span className="text-ue-blue">Me</span></h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <AnimatedSection animation="fade-in-left">
              <div className="glass-panel p-8 h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-ue-blue">B.Tech in Computer Science and Engineering</h4>
                    <p className="text-white">Bhartiya Institute of Engineering and Technology - Sikar</p>
                    <p className="text-ue-gray">Sept 2022 – June 2026</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-ue-blue">Higher Secondary Education</h4>
                    <p className="text-white">Lord's International School - Sadulpur</p>
                    <p className="text-ue-gray">10th (2020) and 12th (2022)</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right">
              <div className="glass-panel p-8 h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Introduction</h3>
                <p className="text-ue-gray mb-6">
                  Dedicated game development student with a strong foundation in Unreal Engine 5 (UE5), seeking opportunities to
                  enhance skills and gain practical experience. Demonstrated passion for learning and creativity, aiming to
                  contribute effectively to innovative projects. Aspires to create original games that engage and inspire players.
                </p>
                <p className="text-ue-gray">
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
      <section ref={projectsRef} className="py-24 bg-ue-dark/80">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fade-in-up" className="text-center mb-16">
            <h2 className="section-title">My <span className="text-ue-blue">Projects</span></h2>
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
              className="inline-flex items-center gap-2 text-ue-blue hover:text-ue-accent transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fade-in-up" className="text-center mb-16">
            <h2 className="section-title">My <span className="text-ue-blue">Skills</span></h2>
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
      <section id="contact" ref={contactRef} className="py-24 bg-ue-dark/80">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fade-in-up" className="text-center mb-16">
            <h2 className="section-title">Contact <span className="text-ue-blue">Me</span></h2>
            <p className="section-subtitle">
              Let's discuss your project and bring your ideas to life
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in-left">
              <div className="glass-panel p-6 md:p-8 h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <p className="text-ue-gray mb-8">
                  I'm always open to new opportunities and interesting projects. 
                  Whether you need a complete game built or consultation on your existing project, 
                  I'm here to help turn your vision into reality.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-ue-blue/10 text-ue-blue">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Email</h4>
                      <p className="text-ue-gray">contact@sandyrock.dev</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-ue-blue/10 text-ue-blue">
                      <Monitor size={18} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Work Availability</h4>
                      <p className="text-ue-gray">Freelance & Full-time Projects</p>
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
