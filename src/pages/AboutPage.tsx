
import { motion } from "framer-motion";
import { BookOpen, Code, Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import MainLayout from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const profileImage = "/lovable-uploads/dcc8f93d-d0c6-4c9d-a0a1-df68c363542b.png";

const AboutPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-4"
            >
              About Me
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
              Get to know me, my background, and what drives my passion for game development
            </motion.p>
          </div>

          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16 items-start"
          >
            {/* Profile Image */}
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-xl blur-sm"></div>
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={profileImage} 
                    alt="SANDEEP" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <Button className="w-full gap-2">
                  <Download size={16} />
                  Download Resume
                </Button>
                
                <div className="flex justify-center gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-card/50 border border-border/50 rounded-full hover:bg-primary/10 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/sandy-rock-69705a328"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-card/50 border border-border/50 rounded-full hover:bg-primary/10 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:rocksandy9422@gmail.com"
                    className="p-2 bg-card/50 border border-border/50 rounded-full hover:bg-primary/10 transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Bio Content */}
            <div className="md:col-span-3 space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">SANDEEP</h2>
                <p className="text-primary font-medium">Game Developer & Multimedia Artist</p>
                <div className="flex items-center gap-2 text-foreground/70">
                  <MapPin size={16} />
                  <span>Sikar, Rajasthan</span>
                </div>
              </div>
              
              <div className="space-y-4 text-foreground/80">
                <p>
                  I'm SANDEEP, a B.Tech Computer Science student at Bhartiya Institute of Engineering & Technology, Sikar. Specializing in Game Development, Unreal Engine 5, and multimedia design, I'm passionate about building immersive digital experiences that entertain, engage, and inspire.
                </p>
                <p>
                  My journey into game development began with a fascination for how interactive media can tell stories and create emotional connections. This led me to explore Unreal Engine 5, where I've developed several games and environmental showcases that demonstrate my technical skills and creative vision.
                </p>
                <p>
                  Beyond game development, I enjoy creating videos, designing graphics, and exploring the possibilities of AI-generated content. I'm constantly expanding my skills and embracing new technologies to push the boundaries of what I can create.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  "From scripting intense boss fights to editing cinematic intros—I bring stories to life."
                </blockquote>
              </div>
              
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Unreal Engine 5</div>
                <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">C++</div>
                <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Game Development</div>
                <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Video Editing</div>
                <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Design</div>
              </div>
              
              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-primary" />
                  <a href="mailto:rocksandy9422@gmail.com" className="hover:underline">
                    rocksandy9422@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-primary" />
                  <a href="tel:+918058994052" className="hover:underline">
                    +91 8058994052
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BookOpen size={24} className="text-primary" />
              Education Timeline
            </h2>
            
            <div className="space-y-8">
              <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6 relative">
                <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold">B.Tech in Computer Science and Engineering</h3>
                  <p className="text-primary">Bhartiya Institute of Engineering & Technology, Sikar</p>
                  <p className="text-foreground/70 text-sm mt-1">2022 - 2026 (Current)</p>
                  <p className="mt-3">
                    Pursuing a comprehensive education in computer science with a focus on programming, algorithms, data structures, and software engineering. Participating in various hackathons, coding competitions, and game jams to apply classroom knowledge to real-world problems.
                  </p>
                </div>
              </div>
              
              <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6 relative">
                <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold">12th Grade (CBSE)</h3>
                  <p className="text-primary">Lord's International School, Churu</p>
                  <p className="text-foreground/70 text-sm mt-1">2022</p>
                  <p className="mt-3">
                    Completed senior secondary education with a focus on Physics, Chemistry, and Mathematics. Developed a strong foundation in analytical thinking and problem-solving skills that continue to serve me in my technical endeavors.
                  </p>
                </div>
              </div>
              
              <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6 relative">
                <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold">10th Grade (CBSE)</h3>
                  <p className="text-primary">Lord's International School, Churu</p>
                  <p className="text-foreground/70 text-sm mt-1">2020</p>
                  <p className="mt-3">
                    Completed secondary education with excellent academic performance. Began exploring programming and game development through extracurricular activities and self-study.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interests & Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6">Interests & Hobbies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6 h-full">
                <h3 className="text-lg font-bold mb-3">Gaming</h3>
                <p className="text-foreground/70">
                  Passionate gamer with interests across multiple genres including RPGs, action-adventure, and strategy games. I analyze game mechanics and design principles to inform my own development projects.
                </p>
              </div>
              
              <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6 h-full">
                <h3 className="text-lg font-bold mb-3">Digital Art & Design</h3>
                <p className="text-foreground/70">
                  Creating digital art, UI designs, and concept art for personal and professional projects. Exploring different styles and techniques to enhance visual storytelling.
                </p>
              </div>
              
              <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6 h-full">
                <h3 className="text-lg font-bold mb-3">AI Experimentation</h3>
                <p className="text-foreground/70">
                  Exploring the creative possibilities of AI tools for image generation, audio creation, and game development. Interested in how AI can augment creative workflows and enable new forms of expression.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-center bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-3">Let's Work Together</h2>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Interested in collaborating on a project or discussing potential opportunities? I'm always open to new challenges and connections.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">Contact Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/projects">View My Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
