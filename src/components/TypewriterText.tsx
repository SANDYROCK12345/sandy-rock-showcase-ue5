
import { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
  onComplete?: () => void;
}

const TypewriterText = ({ 
  text, 
  className = '',
  speed = 40,
  delay = 0,
  cursor = true,
  onComplete
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

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

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let timer: number;
    
    // Initial delay
    const startTimer = window.setTimeout(() => {
      setIsTyping(true);
      let i = 0;
      
      // Start typing effect
      const typingTimer = window.setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingTimer);
          setIsTyping(false);
          if (onComplete) onComplete();
        }
      }, speed);
      
      return () => clearInterval(typingTimer);
    }, delay);
    
    return () => clearTimeout(startTimer);
  }, [text, speed, delay, isVisible, onComplete]);

  return (
    <div ref={elementRef} className={className}>
      <span>{displayedText}</span>
      {cursor && isTyping && (
        <span className="inline-block w-0.5 h-5 bg-ue-blue ml-0.5 animate-pulse"></span>
      )}
    </div>
  );
};

export default TypewriterText;
