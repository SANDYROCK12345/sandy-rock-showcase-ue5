
import { useState, useRef, ReactNode, MouseEvent } from 'react';

interface Card3DProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  maxRotation?: number;
}

const Card3D = ({ 
  children, 
  className = "", 
  glowColor = "rgba(126, 105, 255, 0.5)", 
  maxRotation = 10 
}: Card3DProps) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Calculate rotation based on mouse position relative to card center
    const rotateY = ((mouseX - centerX) / (rect.width / 2)) * maxRotation;
    const rotateX = -((mouseY - centerY) / (rect.height / 2)) * maxRotation;
    
    // Calculate glow position percentage
    const glowX = ((mouseX - rect.left) / rect.width) * 100;
    const glowY = ((mouseY - rect.top) / rect.height) * 100;
    
    setRotation({ x: rotateX, y: rotateY });
    setGlowPosition({ x: glowX, y: glowY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
    setGlowPosition({ x: 50, y: 50 });
  };

  const cardStyle = {
    transform: isHovered 
      ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
      : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
    transition: isHovered ? 'none' : 'transform 0.5s ease-out'
  };

  const glowStyle = {
    background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColor}, transparent 70%)`,
    opacity: isHovered ? 1 : 0,
    transition: isHovered ? 'opacity 0.3s ease' : 'opacity 0.5s ease, transform 0.5s ease-out'
  };

  return (
    <div 
      ref={cardRef}
      className={`relative rounded-xl overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={cardStyle}
    >
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={glowStyle}
      />
      <div className="card-3d-content relative z-20">
        {children}
      </div>
    </div>
  );
};

export default Card3D;
