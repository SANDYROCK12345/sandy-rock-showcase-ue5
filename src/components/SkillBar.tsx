
import { useState, useEffect, useRef } from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
}

const SkillBar = ({ name, percentage }: SkillBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        setProgress(percentage);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [isVisible, percentage]);

  return (
    <div ref={barRef} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{name}</span>
        <span className="text-ue-gray">{`${progress}%`}</span>
      </div>
      <div className="h-2 bg-ue-blue/10 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-ue-blue to-ue-accent transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 top-0 h-full w-2 blue-glow"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
