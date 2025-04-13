
import { ReactNode, useState, useEffect, useRef } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right';
  delay?: number;
  duration?: number;
  threshold?: number;
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fade-in', 
  delay = 0,
  duration = 500,
  threshold = 0.2
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
        threshold: threshold,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold]);

  const animationStyles = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible 
      ? 'translate3d(0, 0, 0)' 
      : animation === 'fade-in-up' 
        ? 'translate3d(0, 30px, 0)' 
        : animation === 'fade-in-down' 
          ? 'translate3d(0, -30px, 0)' 
          : animation === 'fade-in-left' 
            ? 'translate3d(-30px, 0, 0)' 
            : animation === 'fade-in-right' 
              ? 'translate3d(30px, 0, 0)' 
              : 'translate3d(0, 0, 0)',
    transition: `opacity ${duration}ms cubic-bezier(0.215, 0.61, 0.355, 1), transform ${duration}ms cubic-bezier(0.215, 0.61, 0.355, 1)`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={sectionRef}
      className={className}
      style={animationStyles}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
