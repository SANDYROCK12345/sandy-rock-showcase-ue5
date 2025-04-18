
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import ProjectCard from '@/components/ProjectCard';
import Section from '@/components/Section';

// Project data
const projects = [
  {
    title: "E-commerce Dashboard",
    description: "A comprehensive admin dashboard for an e-commerce platform with analytics, order management, and inventory tracking.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
    category: "Web App"
  },
  {
    title: "Recipe Finder App",
    description: "Mobile-responsive web app that helps users find recipes based on ingredients they have.",
    image: "https://images.unsplash.com/photo-1495195129352-aeb325a55b65?w=800&h=500&fit=crop&q=80",
    tags: ["React", "Context API", "CSS Modules", "Recipe API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "Web App"
  },
  {
    title: "Personal Finance Tracker",
    description: "Secure personal finance application that helps users track expenses, income, and savings goals.",
    image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=800&h=500&fit=crop&q=80",
    tags: ["React", "Redux", "Express", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "Web App"
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website with animated transitions and responsive design.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop&q=80",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "Website"
  },
  {
    title: "Weather Application",
    description: "Real-time weather application with location tracking and 7-day forecasts.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop&q=80",
    tags: ["React", "Weather API", "Geolocation"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "Web App"
  },
  {
    title: "Task Management System",
    description: "Collaborative task management system with real-time updates and team workspaces.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop&q=80",
    tags: ["React", "Firebase", "Material UI"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
    category: "Web App"
  },
  {
    title: "Fitness Tracking Mobile App",
    description: "Mobile app for tracking workouts, nutrition, and fitness goals with progress visualizations.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop&q=80",
    tags: ["React Native", "Redux", "Health API"],
    githubUrl: "https://github.com",
    category: "Mobile App"
  },
  {
    title: "Restaurant Website",
    description: "Elegant website for a high-end restaurant with online reservations and menu display.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop&q=80",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    liveUrl: "https://example.com",
    category: "Website"
  }
];

// Get all unique tags
const allTags = [...new Set(projects.flatMap(project => project.tags))];

// Get all unique categories
const categories = [...new Set(projects.map(project => project.category))];

const Projects = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Filter projects based on selected tags, category, and search query
  const filteredProjects = projects.filter(project => {
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => project.tags.includes(tag));
    
    const matchesCategory = !selectedCategory || project.category === selectedCategory;
    
    const matchesSearch = !searchQuery || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesTags && matchesCategory && matchesSearch;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setSelectedCategory(null);
    setSearchQuery('');
  };

  return (
    <>
      <Navbar />
      <ParticleBackground />
      
      <main className="pt-32">
        <Section
          title="My Projects"
          subtitle="Here's a comprehensive showcase of my work across various technologies and industries."
        >
          {/* Search and Filters */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-md border border-border/50 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="px-4 py-2 flex items-center gap-2 rounded-md border border-border/50 bg-background/50 hover:bg-secondary transition-colors"
                >
                  <Filter size={18} />
                  <span>Filters</span>
                </button>
                
                {(selectedTags.length > 0 || selectedCategory || searchQuery) && (
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 flex items-center gap-2 rounded-md border border-border/50 bg-background/50 hover:bg-secondary transition-colors"
                  >
                    <X size={18} />
                    <span>Clear</span>
                  </button>
                )}
              </div>
            </div>
            
            {/* Filter options */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="glass-card p-6 mb-6"
              >
                {/* Categories */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                        className={`px-3 py-1 rounded-full text-sm transition-colors ${
                          selectedCategory === category
                            ? 'bg-primary text-white'
                            : 'bg-secondary text-foreground hover:bg-primary/20'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Tags */}
                <div>
                  <h3 className="font-medium mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1 rounded-full text-sm transition-colors ${
                          selectedTags.includes(tag)
                            ? 'bg-primary text-white'
                            : 'bg-secondary text-foreground hover:bg-primary/20'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
          
          {/* Project Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={index} 
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                  featured={project.featured}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-bold mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria.
              </p>
              <button
                onClick={clearFilters}
                className="button-outline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </Section>
      </main>
      
      <Footer />
    </>
  );
};

export default Projects;
