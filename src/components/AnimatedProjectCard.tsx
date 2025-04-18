
import { useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import Card3D from './Card3D';

interface AnimatedProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

const AnimatedProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveLink,
  githubLink
}: AnimatedProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card3D className="h-full bg-secondary/40 backdrop-blur-md">
      <div 
        className="relative overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70"></div>
          
          {/* Overlay effect */}
          <div className={`absolute inset-0 bg-primary/20 backdrop-blur-sm transition-opacity duration-300 ${isHovered ? 'opacity-70' : 'opacity-0'}`}></div>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-orbitron font-bold mb-2 text-white">{title}</h3>
          
          <p className="text-muted-foreground mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-3 mt-auto pt-3 border-t border-white/10">
            {liveLink && (
              <a 
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-accent transition-colors"
              >
                <span>Live Demo</span>
                <ArrowUpRight size={16} />
              </a>
            )}
            
            {githubLink && (
              <a 
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-accent transition-colors ml-auto"
              >
                <span>Code</span>
                <Github size={16} />
              </a>
            )}
          </div>
        </div>
        
        {/* Corner decoration */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent to-primary transform rotate-45 translate-x-8 -translate-y-8"></div>
        </div>
      </div>
    </Card3D>
  );
};

export default AnimatedProjectCard;
