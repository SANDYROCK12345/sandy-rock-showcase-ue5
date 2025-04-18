
import { useEffect, useRef, useState } from 'react';

interface SkillItemProps {
  name: string;
  icon: React.ReactNode;
  level: number;
  delay?: number;
}

const SkillItem = ({ name, icon, level, delay = 0 }: SkillItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [delay]);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setAnimatedLevel((prev) => {
          if (prev < level) {
            return prev + 1;
          }
          clearInterval(interval);
          return prev;
        });
      }, 20);

      return () => clearInterval(interval);
    }
  }, [isVisible, level]);

  const getGradientColor = () => {
    if (level >= 90) return 'from-purple-500 to-accent';
    if (level >= 70) return 'from-blue-500 to-purple-400';
    return 'from-blue-400 to-blue-300';
  };

  return (
    <div 
      ref={skillRef}
      className={`acrylic-panel p-4 transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/20 text-accent">
          {icon}
        </div>
        <h3 className="text-lg font-medium text-white">{name}</h3>
      </div>
      
      <div className="mt-2">
        <div className="w-full h-3 bg-secondary/50 rounded-full overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r ${getGradientColor()} rounded-full transition-all duration-1000 ease-out`}
            style={{ width: `${animatedLevel}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-xs text-muted-foreground">Beginner</span>
          <span className="text-sm font-medium text-white">{animatedLevel}%</span>
          <span className="text-xs text-muted-foreground">Expert</span>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
