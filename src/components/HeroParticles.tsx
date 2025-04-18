
import { useRef, useEffect } from 'react';

const HeroParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Create particles
    class Particle {
      x: number;
      y: number;
      size: number;
      color: string;
      speedX: number;
      speedY: number;
      speedZ: number;
      z: number;
      originalSize: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.size = Math.random() * 5 + 1;
        this.originalSize = this.size;
        this.color = this.getRandomColor();
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.speedZ = Math.random() * 0.5 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.5;
      }

      getRandomColor() {
        const colors = [
          'rgba(126, 105, 255, 0.8)',
          'rgba(81, 194, 185, 0.8)',
          'rgba(118, 74, 241, 0.8)'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.z -= this.speedZ;

        // Reset particles when they move out of view
        if (this.z <= 1) {
          this.z = 1000;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }

        // Scale based on distance (3D effect)
        this.size = this.originalSize * (1000 / this.z);
      }

      draw() {
        const scale = 1000 / (1000 + this.z);
        const x = this.x * scale;
        const y = this.y * scale;
        
        ctx.beginPath();
        ctx.arc(x, y, Math.max(0.5, this.size * scale), 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity * scale;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    // Create particle array
    const particles: Particle[] = [];
    for (let i = 0; i < 200; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = (particles[i].x * (1000 / (1000 + particles[i].z))) - 
                    (particles[j].x * (1000 / (1000 + particles[j].z)));
          const dy = (particles[i].y * (1000 / (1000 + particles[i].z))) - 
                    (particles[j].y * (1000 / (1000 + particles[j].z)));
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Draw line if particles are close enough
          if (distance < 70) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(126, 105, 255, ${0.15 * (1 - distance / 70)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(
              particles[i].x * (1000 / (1000 + particles[i].z)), 
              particles[i].y * (1000 / (1000 + particles[i].z))
            );
            ctx.lineTo(
              particles[j].x * (1000 / (1000 + particles[j].z)), 
              particles[j].y * (1000 / (1000 + particles[j].z))
            );
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="fixed top-0 left-0 -z-10 w-full h-full bg-transparent" />;
};

export default HeroParticles;
