
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
  const typingTimerRef = useRef<number | null>(null);
  const startTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        
        // Reset text when element leaves viewport
        if (!entry.isIntersecting) {
          setDisplayedText('');
          setIsTyping(false);
          
          // Clear any active timers
          if (startTimerRef.current) {
            clearTimeout(startTimerRef.current);
            startTimerRef.current = null;
          }
          
          if (typingTimerRef.current) {
            clearInterval(typingTimerRef.current);
            typingTimerRef.current = null;
          }
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
      
      // Clean up timers on unmount
      if (startTimerRef.current) clearTimeout(startTimerRef.current);
      if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    // Clean up previous timers
    if (startTimerRef.current) clearTimeout(startTimerRef.current);
    if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    
    // Initial delay
    startTimerRef.current = window.setTimeout(() => {
      setIsTyping(true);
      let i = 0;
      
      // Start typing effect
      typingTimerRef.current = window.setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.substring(0, i + 1));
          i++;
        } else {
          if (typingTimerRef.current) clearInterval(typingTimerRef.current);
          typingTimerRef.current = null;
          setIsTyping(false);
          if (onComplete) onComplete();
        }
      }, speed);
    }, delay);
    
    return () => {
      if (startTimerRef.current) clearTimeout(startTimerRef.current);
      if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    };
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
