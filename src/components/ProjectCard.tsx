
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Bookmark } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags, 
  githubUrl, 
  liveUrl,
  featured = false
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className={`glass-card h-full transition-all duration-500 group ${featured ? 'md:col-span-2' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-video">
        {featured && (
          <div className="absolute top-4 left-4 z-10 bg-primary text-white text-xs px-2 py-1 rounded-full flex items-center">
            <Bookmark size={12} className="mr-1" />
            <span>Featured</span>
          </div>
        )}
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 font-syne">{title}</h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 bg-secondary text-foreground/80 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-border/30">
          <div className="flex space-x-3">
            {githubUrl && (
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                aria-label="View Github repository"
              >
                <Github size={16} className="mr-1" />
                <span>Code</span>
              </a>
            )}
            
            {liveUrl && (
              <a 
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                aria-label="View live project"
              >
                <ExternalLink size={16} className="mr-1" />
                <span>Live</span>
              </a>
            )}
          </div>
          
          <motion.button 
            className="px-3 py-1 text-xs rounded-full text-primary bg-primary/10 hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Details
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
