
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  liveLink, 
  githubLink 
}: ProjectCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="glass-panel overflow-hidden transition-all duration-500 h-full group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${
            hovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-ue-dark/90 via-ue-dark/50 to-transparent transition-opacity duration-500 ${
          hovered ? 'opacity-100' : 'opacity-70'
        }`}></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-ue-blue/20 text-ue-blue font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <p className={`text-ue-gray text-sm transition-all duration-500 line-clamp-2 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}>
            {description}
          </p>
        </div>
      </div>
      
      <div className={`p-6 transition-all duration-500 ${
        hovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-4">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-ue-gray hover:text-ue-blue transition-colors"
              >
                <Github size={16} />
                <span className="text-sm">Code</span>
              </a>
            )}
            
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-ue-gray hover:text-ue-blue transition-colors"
              >
                <ExternalLink size={16} />
                <span className="text-sm">Live Demo</span>
              </a>
            )}
          </div>
          
          <button className="text-xs px-3 py-1 rounded-md bg-ue-blue/10 text-ue-blue hover:bg-ue-blue/20 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
