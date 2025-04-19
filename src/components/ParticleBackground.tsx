
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Particle settings
    const particleCount = Math.min(100, Math.floor(window.innerWidth / 20));
    let particles: Particle[] = [];
    
    // Color theme based on dark/light mode
    const getColors = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      return isDarkMode 
        ? ['rgba(97, 38, 255, 0.4)', 'rgba(66, 99, 235, 0.4)', 'rgba(127, 90, 240, 0.4)']
        : ['rgba(97, 38, 255, 0.2)', 'rgba(66, 99, 235, 0.2)', 'rgba(127, 90, 240, 0.2)'];
    };
    
    // Create particles - define this function before it's called
    const initParticles = () => {
      particles = [];
      const colors = getColors();
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.4 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };
    
    // Set canvas to full window size - now initParticles is defined before this is called
    const resizeCanvas = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      ctx.scale(pixelRatio, pixelRatio);
      
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      
      // Now we can safely call initParticles
      initParticles();
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // This will also call initParticles
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      // Update and draw particles
      particles.forEach(particle => {
        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Reset particles when they move off-screen
        if (particle.x < 0) particle.x = window.innerWidth;
        else if (particle.x > window.innerWidth) particle.x = 0;
        if (particle.y < 0) particle.y = window.innerHeight;
        else if (particle.y > window.innerHeight) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      // Connect particles that are close to each other
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Draw line if particles are close enough
          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.15;
            const isDarkMode = document.documentElement.classList.contains('dark');
            const strokeColor = isDarkMode ? `rgba(130, 80, 230, ${opacity})` : `rgba(130, 80, 230, ${opacity})`;
            
            ctx.beginPath();
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    // Listen for dark mode changes
    const colorObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          initParticles();
        }
      });
    });
    
    colorObserver.observe(document.documentElement, { attributes: true });
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      colorObserver.disconnect();
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 -z-10 w-full h-full bg-transparent pointer-events-none"
    />
  );
};

export default ParticleBackground;
