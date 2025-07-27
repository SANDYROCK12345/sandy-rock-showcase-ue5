import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, Clock, Eye } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjectCard3DProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  duration?: string;
  views?: string;
  category: 'environment' | 'character' | 'prop' | 'animation';
}

const categoryIcons = {
  environment: '🌍',
  character: '👤',
  prop: '🎯',
  animation: '🎬'
};

const categoryColors = {
  environment: 'from-emerald-500/20 to-green-600/20',
  character: 'from-blue-500/20 to-cyan-600/20',
  prop: 'from-purple-500/20 to-violet-600/20',
  animation: 'from-orange-500/20 to-red-600/20'
};

const ProjectCard3D = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  featured = false,
  duration,
  views,
  category
}: ProjectCard3DProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <GlassPanel
      variant={featured ? "elevated" : "default"}
      className={`group relative overflow-hidden h-full ${featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
      whileHover={{ 
        scale: 1.02,
        rotateX: 2,
        rotateY: 5,
        transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Featured Badge */}
      {featured && (
        <motion.div
          className="absolute top-4 left-4 z-20 glass-panel px-3 py-1 text-xs font-medium text-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          ⭐ Featured
        </motion.div>
      )}

      {/* Category Badge */}
      <motion.div
        className="absolute top-4 right-4 z-20 glass-panel px-2 py-1 text-xs"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        {categoryIcons[category]}
      </motion.div>

      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[category]} z-10`} />
        
        {/* Main Image */}
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 glass-panel-strong flex items-center justify-center z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="flex gap-3"
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: isHovered ? 1 : 0.8, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {liveUrl && (
              <Button size="sm" className="btn-primary-glow">
                <Play size={14} className="mr-1" />
                View
              </Button>
            )}
            {githubUrl && (
              <Button size="sm" variant="outline" className="btn-glass">
                <Github size={14} className="mr-1" />
                Code
              </Button>
            )}
          </motion.div>
        </motion.div>

        {/* Stats Bar */}
        {(duration || views) && (
          <motion.div
            className="absolute bottom-4 left-4 right-4 glass-panel px-3 py-2 z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              {duration && (
                <div className="flex items-center gap-1">
                  <Clock size={12} />
                  <span>{duration}</span>
                </div>
              )}
              {views && (
                <div className="flex items-center gap-1">
                  <Eye size={12} />
                  <span>{views}</span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <motion.h3
          className="text-xl font-bold text-gradient-primary font-space-grotesk"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-muted-foreground text-sm leading-relaxed line-clamp-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>

        {/* Tags */}
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs glass-panel border-primary/20 text-primary/80 hover:text-primary hover:border-primary/40 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex items-center justify-between pt-4 border-t border-border/30"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex gap-2">
            {liveUrl && (
              <Button
                size="sm"
                variant="ghost"
                className="text-xs hover:text-primary"
                asChild
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={12} className="mr-1" />
                  Live Demo
                </a>
              </Button>
            )}
            {githubUrl && (
              <Button
                size="sm"
                variant="ghost"
                className="text-xs hover:text-primary"
                asChild
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github size={12} className="mr-1" />
                  Repository
                </a>
              </Button>
            )}
          </div>
          
          <motion.button
            className="text-xs px-3 py-1 rounded-full btn-primary-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
        </motion.div>
      </div>

      {/* 3D Shadow Effect */}
      <div 
        className="absolute inset-0 -z-10 rounded-2xl opacity-30"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.2), rgba(0,0,0,0.1))',
          transform: 'translateZ(-10px) rotateX(2deg)',
          filter: 'blur(10px)'
        }}
      />
    </GlassPanel>
  );
};

export default ProjectCard3D;