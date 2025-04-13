
import { useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import AnimatedSection from '@/components/AnimatedSection';
import SkillBar from '@/components/SkillBar';

// Full skills data
const developerSkills = [
  { name: "Unreal Engine 5", percentage: 95 },
  { name: "C++", percentage: 90 },
  { name: "Python", percentage: 85 },
  { name: "Blueprint Visual Scripting", percentage: 95 },
  { name: "Niagara Particle System", percentage: 82 },
  { name: "Material Creation", percentage: 85 },
  { name: "Level Design", percentage: 88 },
  { name: "Gameplay Programming", percentage: 92 },
  { name: "Performance Optimization", percentage: 85 },
  { name: "AI Programming", percentage: 80 },
];

const softSkills = [
  { name: "English Communication", percentage: 95 },
  { name: "Problem Solving", percentage: 92 },
  { name: "Critical Thinking", percentage: 90 },
  { name: "Team Collaboration", percentage: 88 },
  { name: "Project Management", percentage: 85 },
  { name: "Time Management", percentage: 87 },
  { name: "Adaptation", percentage: 90 },
  { name: "Creativity", percentage: 93 },
];

const creativeSkills = [
  { name: "AI Prompting", percentage: 88 },
  { name: "Photo Editing", percentage: 80 },
  { name: "Video Editing", percentage: 78 },
  { name: "3D Modeling (Basic)", percentage: 75 },
  { name: "UI/UX Design", percentage: 82 },
  { name: "Audio Implementation", percentage: 78 },
];

const Skills = () => {
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
            <h1 className="section-title">My <span className="text-ue-blue">Skills</span></h1>
            <p className="section-subtitle">
              My comprehensive skill set for game development and related domains
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <AnimatedSection animation="fade-in-left" className="glass-panel p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-8 border-b border-ue-blue/30 pb-4">
                Development Skills
              </h2>
              <div className="space-y-6">
                {developerSkills.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
                ))}
              </div>
            </AnimatedSection>
            
            <div className="space-y-12">
              <AnimatedSection animation="fade-in-right" delay={100} className="glass-panel p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-8 border-b border-ue-blue/30 pb-4">
                  Soft Skills
                </h2>
                <div className="space-y-6">
                  {softSkills.map((skill, index) => (
                    <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
                  ))}
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in-right" delay={200} className="glass-panel p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-8 border-b border-ue-blue/30 pb-4">
                  Creative Skills
                </h2>
                <div className="space-y-6">
                  {creativeSkills.map((skill, index) => (
                    <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Skills;
