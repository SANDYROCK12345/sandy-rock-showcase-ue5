
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Monitor, Bookmark, User, Mail, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from '@/components/ProjectCard';
import SkillBar from '@/components/SkillBar';
import ContactForm from '@/components/ContactForm';

// Placeholder for profile image
const profileImage = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop&q=80";

// Placeholder projects data
const projects = [
  {
    id: 1,
    title: "Dreamscape Adventure",
    description: "A third-person adventure game with procedural world generation and advanced AI systems.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop&q=80",
    technologies: ["UE5", "C++", "Blueprint"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    title: "Cyber Nexus",
    description: "A fast-paced first-person shooter with destructible environments and realistic physics.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=500&fit=crop&q=80",
    technologies: ["UE5", "C++", "Niagara"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "Natural Wonders",
    description: "An open-world exploration game showcasing Unreal Engine 5's Nanite and Lumen technologies.",
    image: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=800&h=500&fit=crop&q=80",
    technologies: ["UE5", "Blueprint", "Nanite"],
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
      ref.current.scrollIntoView({ behavior: 'smooth' });
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
            <source src="https://cdn.pixabay.com/vimeo/328940142/unreal-engine-23015.mp4?width=1280&hash=8f7e01de8349a6eb1d8d4ac59f48d8c2bff1cfee" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ue-dark/70 to-ue-dark"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 z-10">
          <AnimatedSection animation="fade-in-up" className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-6">
              Sandy <span className="text-ue-blue">Rock</span>
            </h1>
            <p className="text-xl md:text-2xl text-ue-gray mb-8">
              UE5 Game Developer crafting immersive digital experiences
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => scrollToSection(aboutRef)} 
                className="btn-primary"
              >
                Discover More
              </button>
              <Link to="/contact" className="px-6 py-3 border border-ue-blue/50 text-white hover:border-ue-blue rounded-md transition-all duration-300 hover:-translate-y-1">
                Get In Touch
              </Link>
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
            <p className="section-subtitle">
              Passionate UE5 developer with a focus on creating cutting-edge gaming experiences
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-left">
              <div className="relative">
                <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-ue-blue/20 to-transparent blur-lg opacity-50"></div>
                <img
                  src={profileImage}
                  alt="Sandy Rock"
                  className="rounded-lg w-full h-auto relative z-10"
                />
                <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-ue-blue/10 rounded-lg -z-10"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right" delay={200}>
              <h3 className="text-3xl font-bold text-white mb-6">UE5 Game Developer</h3>
              <p className="text-ue-gray mb-6">
                I'm Sandy Rock, a professional game developer with extensive experience in Unreal Engine 5. 
                I specialize in creating immersive gaming experiences with cutting-edge technology and 
                innovative design solutions.
              </p>
              <p className="text-ue-gray mb-8">
                My passion lies in pushing the boundaries of what's possible in real-time 3D environments, 
                bringing virtual worlds to life with attention to detail and performance optimization.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="text-ue-blue mt-1">
                    <User size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Experience</h4>
                    <p className="text-ue-gray">7+ Years</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-ue-blue mt-1">
                    <Monitor size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Completed Projects</h4>
                    <p className="text-ue-gray">20+</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-ue-blue mt-1">
                    <Bookmark size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Specialization</h4>
                    <p className="text-ue-gray">UE5, C++, Blueprint</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-ue-blue mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Contact</h4>
                    <p className="text-ue-gray">contact@sandyrock.dev</p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => scrollToSection(projectsRef)} 
                className="btn-primary"
              >
                View My Projects
              </button>
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
