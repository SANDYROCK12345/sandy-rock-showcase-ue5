
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Palette, Globe, Server, ArrowRight, Download, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ParticleBackground from '@/components/ParticleBackground';
import ProjectCard from '@/components/ProjectCard';
import SkillCard from '@/components/SkillCard';
import Testimonial from '@/components/Testimonial';
import ContactForm from '@/components/ContactForm';

// Sample data
const projects = [
  {
    title: "E-commerce Dashboard",
    description: "A comprehensive admin dashboard for an e-commerce platform with analytics, order management, and inventory tracking.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    title: "Recipe Finder App",
    description: "Mobile-responsive web app that helps users find recipes based on ingredients they have.",
    image: "https://images.unsplash.com/photo-1495195129352-aeb325a55b65?w=800&h=500&fit=crop&q=80",
    tags: ["React", "Context API", "CSS Modules", "Recipe API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Personal Finance Tracker",
    description: "Secure personal finance application that helps users track expenses, income, and savings goals.",
    image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=800&h=500&fit=crop&q=80",
    tags: ["React", "Redux", "Express", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Creating responsive, accessible, and performant user interfaces with modern frameworks and technologies."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing intuitive and engaging user experiences with a focus on usability and visual appeal."
  },
  {
    icon: Globe,
    title: "Web Performance",
    description: "Optimizing web applications for speed, accessibility, and SEO to ensure great user experiences."
  },
  {
    icon: Server,
    title: "Backend Integration",
    description: "Working with REST and GraphQL APIs to build full-stack applications with seamless data flow."
  }
];

const testimonials = [
  {
    quote: "Alex created an amazing website for our business that perfectly captures our brand. The design is modern and the performance is excellent.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechSolutions Inc."
  },
  {
    quote: "Working with Alex was a pleasure. They understood our requirements quickly and delivered a product that exceeded our expectations.",
    author: "Michael Park",
    role: "CEO",
    company: "Innovate Labs"
  },
  {
    quote: "The attention to detail and commitment to creating an exceptional user experience sets Alex apart. I highly recommend their services.",
    author: "Lisa Chen",
    role: "Product Manager",
    company: "Creative Digital"
  }
];

const Home = () => {
  return (
    <>
      <Navbar />
      <ParticleBackground />
      
      <main>
        <Hero />
        
        {/* About Section */}
        <Section
          id="about"
          title="About Me"
          subtitle="I'm a passionate developer who loves creating beautiful and functional web experiences. With a background in both design and development, I bring a holistic approach to every project."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                With over 5 years of experience in web development, I've worked on a diverse range of projects from small business websites to complex web applications. I'm passionate about creating digital experiences that are both beautiful and functional.
              </p>
              <p className="text-muted-foreground mb-6">
                My approach combines technical expertise with creative problem-solving. I believe in writing clean, maintainable code and designing intuitive user interfaces that make technology accessible to everyone.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Tailwind CSS</span>
              </div>
              
              <a 
                href="/resume.pdf"
                className="button-primary inline-flex items-center"
                download
              >
                <Download size={16} className="mr-2" />
                Download Resume
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-heading">5+</div>
                    <p className="text-muted-foreground text-sm mt-1">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-heading">30+</div>
                    <p className="text-muted-foreground text-sm mt-1">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-heading">15+</div>
                    <p className="text-muted-foreground text-sm mt-1">Happy Clients</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-heading">5+</div>
                    <p className="text-muted-foreground text-sm mt-1">Technologies</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-3">Education</h4>
                  <div className="mb-4">
                    <div className="font-medium">Bachelor's in Computer Science</div>
                    <div className="text-muted-foreground text-sm">University of Technology, 2015-2019</div>
                  </div>
                  <div>
                    <div className="font-medium">UI/UX Design Certification</div>
                    <div className="text-muted-foreground text-sm">Design Institute, 2020</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-primary/5 animate-pulse-gentle"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-primary/5 animate-pulse-gentle"></div>
            </motion.div>
          </div>
        </Section>
        
        {/* Skills Section */}
        <Section
          id="skills"
          title="What I Do"
          subtitle="I specialize in building modern web applications with a focus on performance, accessibility, and user experience."
          className="bg-secondary/30"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard 
                key={index} 
                icon={skill.icon} 
                title={skill.title} 
                description={skill.description}
                index={index}
              />
            ))}
          </div>
        </Section>
        
        {/* Projects Section */}
        <Section
          id="projects"
          title="Recent Projects"
          subtitle="Check out some of my recent work. Each project is unique and built with attention to detail and modern development practices."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                {...project}
              />
            ))}
          </div>
          
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/projects" className="button-outline inline-flex items-center">
              View All Projects
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </Section>
        
        {/* Testimonials Section */}
        <Section
          id="testimonials"
          title="Client Testimonials"
          subtitle="What people say about working with me"
          className="bg-secondary/30"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index} 
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                index={index}
              />
            ))}
          </div>
        </Section>
        
        {/* Contact Section */}
        <Section
          id="contact"
          title="Get in Touch"
          subtitle="Have a project in mind or want to learn more? Feel free to reach out!"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-muted-foreground mb-6">
                I'm currently available for freelance work and open to full-time opportunities. If you have a project that needs a creative developer, or if you just want to chat, feel free to reach out.
              </p>
              
              <div className="glass-card p-6 mb-6">
                <div className="flex flex-col space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:hello@example.com" className="text-primary hover:underline">
                      hello@example.com
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-muted-foreground">New York, NY</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Follow Me</h4>
                    <div className="flex space-x-4 mt-2">
                      <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter size={20} />
                      </a>
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Users size={20} className="text-primary" />
                  <h4 className="font-bold">Looking for a team member?</h4>
                </div>
                <p className="text-muted-foreground mb-4">
                  I'm open to full-time opportunities and would love to join the right team.
                </p>
                <a 
                  href="/resume.pdf"
                  className="button-outline inline-flex items-center text-sm"
                  download
                >
                  <Download size={14} className="mr-1" />
                  Download Resume
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </Section>
      </main>
      
      <Footer />
    </>
  );
};

export default Home;
