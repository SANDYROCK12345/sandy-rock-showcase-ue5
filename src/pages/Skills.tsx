
import { motion } from 'framer-motion';
import { Code, Palette, Brain, Server, Globe, Layers, Database, Cpu } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import Section from '@/components/Section';

// Skill progress component
const SkillProgress = ({ name, percentage, delay }: { name: string; percentage: number; delay: number }) => {
  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{percentage}%</span>
      </div>
      <div className="bg-secondary rounded-full h-2 overflow-hidden">
        <motion.div
          className="bg-primary h-full rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay * 0.1 + 0.3 }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  // Frontend skills
  const frontendSkills = [
    { name: "HTML/CSS", percentage: 95 },
    { name: "JavaScript", percentage: 90 },
    { name: "React", percentage: 92 },
    { name: "TypeScript", percentage: 85 },
    { name: "Tailwind CSS", percentage: 88 }
  ];

  // Backend skills
  const backendSkills = [
    { name: "Node.js", percentage: 85 },
    { name: "Express", percentage: 82 },
    { name: "MongoDB", percentage: 78 },
    { name: "SQL", percentage: 75 },
    { name: "GraphQL", percentage: 70 }
  ];

  // Design skills
  const designSkills = [
    { name: "UI Design", percentage: 88 },
    { name: "UX Principles", percentage: 85 },
    { name: "Figma", percentage: 90 },
    { name: "Adobe XD", percentage: 75 },
    { name: "Responsive Design", percentage: 92 }
  ];
  
  // Soft skills
  const softSkills = [
    { name: "Communication", percentage: 90 },
    { name: "Problem Solving", percentage: 92 },
    { name: "Time Management", percentage: 85 },
    { name: "Teamwork", percentage: 88 },
    { name: "Adaptability", percentage: 90 }
  ];

  // Services
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Building responsive, performant websites and web applications with modern technologies."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user interfaces and experiences."
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Building robust server-side applications and APIs."
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Designing efficient database structures and queries."
    },
    {
      icon: Layers,
      title: "Full Stack Development",
      description: "End-to-end application development from frontend to backend."
    },
    {
      icon: Brain,
      title: "Technical Consultation",
      description: "Providing expert advice on technology choices and architecture."
    }
  ];

  return (
    <>
      <Navbar />
      <ParticleBackground />
      
      <main className="pt-32">
        {/* Overview section */}
        <Section
          title="My Skills & Expertise"
          subtitle="I bring a diverse set of technical skills and expertise to every project I work on."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4">Technical Proficiency</h3>
              <p className="text-muted-foreground mb-6">
                With a strong foundation in both frontend and backend technologies, I create seamless digital experiences that are not only visually appealing but also technically robust. My approach focuses on writing clean, maintainable code and designing intuitive user interfaces.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Tailwind CSS</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">GraphQL</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Docker</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-6"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mr-4">
                  <Cpu className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Constant Learning</h3>
                  <p className="text-muted-foreground text-sm">Always improving and expanding my skillset</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                In the ever-evolving field of web development, I'm committed to continuous learning and staying updated with the latest technologies and best practices. My approach combines technical excellence with creative problem-solving.
              </p>
              
              <div className="flex justify-between text-center">
                <div>
                  <div className="text-3xl font-bold gradient-heading">5+</div>
                  <p className="text-muted-foreground text-sm mt-1">Years Experience</p>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-heading">20+</div>
                  <p className="text-muted-foreground text-sm mt-1">Technologies</p>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-heading">∞</div>
                  <p className="text-muted-foreground text-sm mt-1">Willingness to Learn</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>
        
        {/* Skill progress bars */}
        <Section
          title="Technical Skills"
          subtitle="My proficiency in various technologies and tools"
          className="bg-secondary/30"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="glass-card p-6">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mr-3">
                  <Code className="text-primary" size={20} />
                </div>
                <h3 className="text-lg font-bold">Frontend Development</h3>
              </div>
              
              {frontendSkills.map((skill, index) => (
                <SkillProgress
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={index}
                />
              ))}
            </div>
            
            <div className="glass-card p-6">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mr-3">
                  <Server className="text-primary" size={20} />
                </div>
                <h3 className="text-lg font-bold">Backend Development</h3>
              </div>
              
              {backendSkills.map((skill, index) => (
                <SkillProgress
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={index}
                />
              ))}
            </div>
            
            <div className="glass-card p-6">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mr-3">
                  <Palette className="text-primary" size={20} />
                </div>
                <h3 className="text-lg font-bold">Design Skills</h3>
              </div>
              
              {designSkills.map((skill, index) => (
                <SkillProgress
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={index}
                />
              ))}
            </div>
            
            <div className="glass-card p-6">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mr-3">
                  <Brain className="text-primary" size={20} />
                </div>
                <h3 className="text-lg font-bold">Soft Skills</h3>
              </div>
              
              {softSkills.map((skill, index) => (
                <SkillProgress
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={index}
                />
              ))}
            </div>
          </div>
        </Section>
        
        {/* Services */}
        <Section
          title="Services I Offer"
          subtitle="Professional services to help bring your digital ideas to life"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="text-primary" size={24} />
                </div>
                
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </Section>
      </main>
      
      <Footer />
    </>
  );
};

export default Skills;
