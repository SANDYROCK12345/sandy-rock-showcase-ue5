
import { motion } from "framer-motion";
import { Gamepad, Code, Brush, Brain, Terminal, BookOpen, Zap, Globe } from "lucide-react";
import MainLayout from "@/components/MainLayout";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  category: "technical" | "creative" | "soft";
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  description: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Game Development",
    icon: <Gamepad size={24} />,
    description: "Creating immersive interactive experiences with industry-standard tools and techniques.",
    skills: [
      { name: "Unreal Engine 5", icon: <Gamepad size={18} />, level: 90, category: "technical" },
      { name: "C++", icon: <Code size={18} />, level: 85, category: "technical" },
      { name: "Level Design", icon: <Globe size={18} />, level: 88, category: "technical" },
      { name: "Game Mechanics", icon: <Zap size={18} />, level: 82, category: "technical" },
      { name: "Character Design", icon: <Brush size={18} />, level: 78, category: "creative" }
    ]
  },
  {
    name: "Programming",
    icon: <Terminal size={24} />,
    description: "Building robust systems and applications with various programming languages.",
    skills: [
      { name: "C++", icon: <Code size={18} />, level: 85, category: "technical" },
      { name: "Python", icon: <Code size={18} />, level: 75, category: "technical" },
      { name: "Java", icon: <Code size={18} />, level: 70, category: "technical" },
      { name: "C", icon: <Code size={18} />, level: 80, category: "technical" },
      { name: "Object-Oriented Programming", icon: <Code size={18} />, level: 85, category: "technical" }
    ]
  },
  {
    name: "Creative & Media",
    icon: <Brush size={24} />,
    description: "Crafting visual and audio content for games, videos, and other media.",
    skills: [
      { name: "Video Editing", icon: <Brush size={18} />, level: 85, category: "creative" },
      { name: "Photo Editing", icon: <Brush size={18} />, level: 80, category: "creative" },
      { name: "Thumbnails", icon: <Brush size={18} />, level: 90, category: "creative" },
      { name: "Storyboarding", icon: <BookOpen size={18} />, level: 75, category: "creative" },
      { name: "AI-Generated Content", icon: <Brain size={18} />, level: 85, category: "creative" }
    ]
  },
  {
    name: "Soft Skills",
    icon: <Brain size={24} />,
    description: "Essential interpersonal abilities that complement technical expertise.",
    skills: [
      { name: "Communication", icon: <Globe size={18} />, level: 90, category: "soft" },
      { name: "Team Work", icon: <Zap size={18} />, level: 85, category: "soft" },
      { name: "Critical Thinking", icon: <Brain size={18} />, level: 88, category: "soft" },
      { name: "Problem Solving", icon: <Zap size={18} />, level: 92, category: "soft" },
      { name: "Time Management", icon: <BookOpen size={18} />, level: 80, category: "soft" }
    ]
  }
];

const SkillsPage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            My Skills
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-foreground/70"
          >
            A comprehensive overview of my technical abilities, creative expertise, and soft skills that I bring to every project.
          </motion.p>
        </div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Gamepad className="text-primary" />
              <span>Technical Proficiency</span>
            </h2>
            <p className="text-foreground/70 mb-6">
              I specialize in Unreal Engine 5 development with a focus on creating immersive gaming experiences. My technical toolkit includes C++, Python, and various game development tools and technologies.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Unreal Engine 5</div>
              <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">C++</div>
              <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Python</div>
              <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Java</div>
              <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">OOP</div>
            </div>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Brush className="text-primary" />
              <span>Creative Abilities</span>
            </h2>
            <p className="text-foreground/70 mb-6">
              Beyond coding, I excel in multimedia content creation including video editing, photo manipulation, and AI-driven image generation. I craft compelling visual assets for all my projects.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Video Editing</div>
              <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Photo Editing</div>
              <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Thumbnails</div>
              <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Canva</div>
              <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Wondershare Filmora</div>
            </div>
          </div>
        </motion.div>

        {/* Skill Categories */}
        <motion.div 
          className="space-y-16"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.name}
              variants={item}
              className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6 md:p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-primary/10 text-primary flex-shrink-0">
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{category.name}</h2>
                  <p className="text-foreground/70">{category.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-primary">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-foreground/70 text-sm">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Tools & Software */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Tools & Software</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 text-center">
              <Gamepad size={24} className="mx-auto mb-2 text-primary" />
              <h3 className="font-medium">Unreal Engine 5</h3>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 text-center">
              <Brush size={24} className="mx-auto mb-2 text-primary" />
              <h3 className="font-medium">Canva</h3>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 text-center">
              <Code size={24} className="mx-auto mb-2 text-primary" />
              <h3 className="font-medium">Visual Studio</h3>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 text-center">
              <Brush size={24} className="mx-auto mb-2 text-primary" />
              <h3 className="font-medium">Wondershare Filmora</h3>
            </div>
          </div>
        </motion.div>
        
        {/* Education & Training */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6 md:p-8"
        >
          <h2 className="text-2xl font-bold mb-6">Education & Training</h2>
          <div className="space-y-6">
            <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-transparent">
              <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary -translate-x-[3px]"></div>
              <h3 className="text-lg font-semibold">B.Tech in Computer Science and Engineering</h3>
              <p className="text-foreground/70">Bhartiya Institute of Engineering & Technology, Sikar</p>
              <p className="text-sm text-foreground/60">2022 - 2026</p>
            </div>
            
            <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-transparent">
              <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary -translate-x-[3px]"></div>
              <h3 className="text-lg font-semibold">12th Grade (CBSE)</h3>
              <p className="text-foreground/70">Lord's International School, Churu</p>
              <p className="text-sm text-foreground/60">2022</p>
            </div>
            
            <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-transparent">
              <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary -translate-x-[3px]"></div>
              <h3 className="text-lg font-semibold">Self-Directed Learning</h3>
              <p className="text-foreground/70">Online courses and tutorials in UE5, C++, and Game Development</p>
              <p className="text-sm text-foreground/60">Ongoing</p>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default SkillsPage;
