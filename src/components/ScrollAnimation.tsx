
import React, { ReactNode } from 'react';
import { motion, Variant, useInView } from 'framer-motion';

type AnimationVariant = 'fadeIn' | 'slideUp' | 'slideRight' | 'slideLeft' | 'scale' | 'rotate' | 'flip';

interface ScrollAnimationProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
  as?: React.ElementType;
}

const variants: Record<AnimationVariant, { initial: Variant, animate: Variant }> = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  },
  slideUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 }
  },
  slideRight: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  },
  slideLeft: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 }
  },
  rotate: {
    initial: { opacity: 0, rotate: -5 },
    animate: { opacity: 1, rotate: 0 }
  },
  flip: {
    initial: { opacity: 0, rotateY: 90 },
    animate: { opacity: 1, rotateY: 0 }
  }
};

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  variant = 'fadeIn',
  delay = 0,
  duration = 0.5,
  className = '',
  threshold = 0.2,
  once = true,
  as = 'div'
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  
  const MotionComponent = motion[as as keyof typeof motion] || motion.div;

  return (
    <MotionComponent
      ref={ref}
      className={className}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants[variant]}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionComponent>
  );
};

export default ScrollAnimation;
