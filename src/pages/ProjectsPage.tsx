
import { motion } from "framer-motion";
import { ArrowUpRight, Gamepad, Monitor, Image, Filter, X } from "lucide-react";
import { useState } from "react";
import MainLayout from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Project {
  id: number;
  title: string;
  type: "game" | "video" | "image";
  category: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "JUNGLE GUARD",
    type: "game",
    category: "Environment Showcase",
    description: "An Environment Showcase Animation demonstrating advanced environmental rendering and atmospheric effects in UE5. Features dynamic lighting, volumetric fog, and realistic vegetation systems.",
    image: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=800&h=500&fit=crop&q=80",
    technologies: ["UE5", "Environment Art", "Animation", "Lighting Design"],
    link: "#"
  },
  {
    id: 2,
    title: "BLOOD SMELLS",
    type: "game",
    category: "Action RPG",
    description: "An action RPG featuring hack and slash combat mechanics in a third-person perspective. Includes a complex combat system, enemy AI, and interactive environments.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=500&fit=crop&q=80",
    technologies: ["UE5", "C++", "Combat Systems", "Character Design", "AI"],
    link: "#"
  },
  {
    id: 3,
    title: "VOID CENTURY",
    type: "game",
    category: "2D Platformer",
    description: "An action-adventure 2D platformer game with unique art style and engaging storyline. Features pixel-perfect controls, procedural level generation, and a dynamic soundtrack.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop&q=80",
    technologies: ["UE5", "2D", "Level Design", "Gameplay Programming"],
    link: "#"
  },
  {
    id: 4,
    title: "COSMIC ECHOES",
    type: "game",
    category: "Space Exploration",
    description: "A space exploration game with procedurally generated galaxies and planets. Features realistic space physics, resource management, and base building mechanics.",
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800&h=500&fit=crop&q=80",
    technologies: ["UE5", "Procedural Generation", "Physics", "Environment Art"],
    link: "#"
  },
  {
    id: 5,
    title: "UE5 Cinematic Compilation",
    type: "video",
    category: "Cinematic Showcase",
    description: "A compilation of cinematics created in Unreal Engine 5 showcasing advanced rendering techniques, camera work, and visual storytelling.",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=500&fit=crop&q=80",
    technologies: ["UE5", "Cinematography", "Editing", "Wondershare Filmora"],
    link: "#"
  },
  {
    id: 6,
    title: "Game Commentary Series",
    type: "video",
    category: "YouTube Content",
    description: "A series of game commentary videos with professional editing, transitions, and effects. Includes gameplay analysis and storytelling techniques.",
    image: "https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?w=800&h=500&fit=crop&q=80",
    technologies: ["YouTube", "Editing", "Wondershare Filmora", "Audio Mixing"],
    link: "#"
  },
  {
    id: 7,
    title: "Game Poster Collection",
    type: "image",
    category: "Digital Art",
    description: "A collection of high-quality game posters and promotional materials designed for various game projects. Features advanced composition techniques and visual storytelling.",
    image: "https://images.unsplash.com/photo-1569701813229-33284b643e3c?w=800&h=500&fit=crop&q=80",
    technologies: ["Canva", "Digital Art", "Typography", "Composition"],
    link: "#"
  },
  {
    id: 8,
    title: "Character Concept Art",
    type: "image",
    category: "Concept Art",
    description: "A series of character concept art pieces created for various game projects. Includes character design, pose studies, and visual development.",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&h=500&fit=crop&q=80",
    technologies: ["Digital Art", "Character Design", "AI Tools", "Concept Development"],
    link: "#"
  }
];

// Get all unique technologies
const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))];

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Filter projects based on active tab and selected technologies
  const filteredProjects = projects.filter(project => {
    const matchesTab = activeTab === "all" || project.type === activeTab;
    const matchesTechs = selectedTechs.length === 0 || 
      selectedTechs.every(tech => project.technologies.includes(tech));
    
    return matchesTab && matchesTechs;
  });

  const toggleTech = (tech: string) => {
    setSelectedTechs(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech) 
        : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setSelectedTechs([]);
  };

  const getTabIcon = (tabId: string) => {
    switch (tabId) {
      case "game": return <Gamepad className="w-4 h-4 mr-2" />;
      case "video": return <Monitor className="w-4 h-4 mr-2" />;
      case "image": return <Image className="w-4 h-4 mr-2" />;
      default: return null;
    }
  };

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
    show: { opacity: 1, y: 0 }
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
            My Projects
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
            Explore my portfolio of games, videos, and design work created with Unreal Engine 5 and other creative tools.
          </motion.p>
        </div>

        {/* Filter Controls */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
              <TabsList className="grid grid-cols-4 w-full md:w-auto">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="game" className="flex items-center">
                  <Gamepad className="w-4 h-4 mr-2" />
                  Games
                </TabsTrigger>
                <TabsTrigger value="video" className="flex items-center">
                  <Monitor className="w-4 h-4 mr-2" />
                  Videos
                </TabsTrigger>
                <TabsTrigger value="image" className="flex items-center">
                  <Image className="w-4 h-4 mr-2" />
                  Images
                </TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="flex gap-2 w-full md:w-auto">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter size={16} />
                Filters
                {selectedTechs.length > 0 && (
                  <Badge variant="secondary" className="ml-1">
                    {selectedTechs.length}
                  </Badge>
                )}
              </Button>
              
              {selectedTechs.length > 0 && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearFilters}
                  className="flex items-center gap-2"
                >
                  <X size={16} />
                  Clear
                </Button>
              )}
            </div>
          </div>
          
          {/* Technology Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 mb-6"
            >
              <h3 className="font-medium mb-3">Filter by Technology</h3>
              <div className="flex flex-wrap gap-2">
                {allTechnologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant={selectedTechs.includes(tech) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => toggleTech(tech)}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 bg-primary/90 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                  
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 left-4 flex items-center gap-1"
                  >
                    {getTabIcon(project.type)}
                    {project.category}
                  </Badge>
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="outline" className="bg-card/50">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="bg-card/50">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold mb-2">No projects found</h3>
            <p className="text-foreground/70 mb-4">
              Try changing your filter criteria.
            </p>
            <Button onClick={clearFilters} variant="outline">
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default ProjectsPage;
