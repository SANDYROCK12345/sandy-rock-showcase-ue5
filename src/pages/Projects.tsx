
import { useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from '@/components/ProjectCard';

// Extended projects data for dedicated page
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
  {
    id: 4,
    title: "Quantum Break",
    description: "A sci-fi puzzle game with innovative time-manipulation mechanics.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=500&fit=crop&q=80",
    technologies: ["UE5", "C++", "AI"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 5,
    title: "Arctic Survival",
    description: "A survival game set in a harsh arctic environment with realistic weather systems.",
    image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=800&h=500&fit=crop&q=80",
    technologies: ["UE5", "Blueprint", "Physics"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 6,
    title: "Urban Chaos",
    description: "An open-world urban game with advanced crowd systems and destructible environments.",
    image: "https://images.unsplash.com/photo-1468436385273-8abca6dfd8d3?w=800&h=500&fit=crop&q=80",
    technologies: ["UE5", "C++", "Lumen"],
    liveLink: "#",
    githubLink: "#"
  },
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-ue-dark min-h-screen">
      <Navbar />
      <ParticleBackground />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fade-in-down" className="mb-2">
            <Link to="/" className="inline-flex items-center gap-2 text-ue-gray hover:text-ue-blue transition-colors mb-6">
              <ChevronLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" className="text-center mb-16">
            <h1 className="section-title">My <span className="text-ue-blue">Projects</span></h1>
            <p className="section-subtitle">
              A showcase of my game development work using Unreal Engine 5 and related technologies
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
